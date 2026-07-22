// Shared: build a JSDOM-free global env and load DS bundle + servicesData + screens (transpiled).
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import vm from 'node:vm';
const require = createRequire(import.meta.url);
const babel = require('@babel/core');
const React = require('react');

export function makeEnv(srcDir) {
  const win = {};
  win.window = win;
  win.React = React;
  win.document = { getElementById(){return null;}, createElement(){return {style:{}};}, addEventListener(){}, documentElement:{style:{}} };
  win.navigator = { userAgent: 'node' };
  win.matchMedia = () => ({ matches:false, addEventListener(){}, removeEventListener(){} });
  win.addEventListener = () => {};
  win.removeEventListener = () => {};
  win.scrollTo = () => {};
  win.location = { href:'' };
  win.parent = { postMessage(){} };
  win.dispatchEvent = () => {};
  win.CustomEvent = class {};
  win.ResizeObserver = class { observe(){} disconnect(){} };
  win.omelette = undefined;
  win.customElements = { get(){return undefined;}, define(){} };
  win.HTMLElement = class {};
  const ctx = vm.createContext(win);

  function run(code, filename){ vm.runInContext(code, ctx, { filename }); }
  function runJs(rel){ run(readFileSync(`${srcDir}/${rel}`,'utf8'), rel); }
  function runJsx(rel){
    const {code} = babel.transformFileSync(`${srcDir}/${rel}`, { presets:[[require('@babel/preset-react'),{runtime:'classic'}]] });
    run(code, rel);
  }
  return { win, React, run, runJs, runJsx };
}
