import { makeEnv } from './env.mjs';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { mkdirSync, writeFileSync, readFileSync } from 'node:fs';
const require = createRequire(import.meta.url);
const ReactDOMServer = require('react-dom/server');
const React = require('react');
const __dirname = dirname(fileURLToPath(import.meta.url));
const SRC = resolve(__dirname, '..');          // repo/src
const OUT = resolve(__dirname, '..', '..');    // repo root (served site)
// ── CONFIG: set to the real production domain before go-live ──
const SITE_URL = process.env.SITE_URL || 'https://www.damarkmfg.com';

const env = makeEnv(SRC);
env.run(readFileSync(`${__dirname}/_static.js`,'utf8'), '_static.js');
env.runJs('_ds_bundle.js');
env.runJs('servicesData.js');
['SiteHeader.jsx','SiteFooter.jsx','HomeScreen.jsx','ServicesScreen.jsx','ServiceDetailScreen.jsx','AboutScreen.jsx','ContactScreen.jsx','CareersScreen.jsx'].forEach(f=>env.runJsx(f));
const w = env.win, ns = w.DamarkManufacturingDesignSystem_70152b;
if ((ns.__errors||[]).length){ console.error('DS errors', ns.__errors); process.exit(1); }
const SERVICES = w.DAMARK_SERVICES;
const esc = s => String(s).replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
function Page(route, slug){
  const nav = route.indexOf('service:')===0 ? 'services' : route;
  let screen;
  if(slug) screen = React.createElement(w.ServiceDetailScreen,{slug});
  else { const S={home:w.HomeScreen,services:w.ServicesScreen,about:w.AboutScreen,contact:w.ContactScreen,careers:w.CareersScreen}[route]; screen=React.createElement(S,{tweaks:{heroOverlay:0.85,servicesAccent:'navy',showProofBand:true}}); }
  return React.createElement('div',{className:'page'}, React.createElement(w.SiteHeader,{route:nav}), screen, React.createElement(w.SiteFooter,null));
}
function doc({title,desc,path,body,ogimg}){
  const url=SITE_URL+path, img=SITE_URL+(ogimg||'/assets/img/hq-lomira.jpg');
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}" />
<link rel="canonical" href="${esc(url)}" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Damark Manufacturing" />
<meta property="og:title" content="${esc(title)}" />
<meta property="og:description" content="${esc(desc)}" />
<meta property="og:url" content="${esc(url)}" />
<meta property="og:image" content="${esc(img)}" />
<meta name="twitter:card" content="summary_large_image" />
<link rel="icon" href="/assets/logo/damark-logo-navy.png" />
<link rel="stylesheet" href="/styles.css" />
<link rel="stylesheet" href="/site.css" />
</head>
<body>
${body}
</body>
</html>
`;
}
// Rewrite root-absolute asset/link/nav URLs to page-relative ones so the site
// works both when opened directly (file://) and when served from any root.
// Absolute http(s) URLs (canonical, og:*, form action) are left untouched.
function relativize(html, path){
  const depth = path.split('/').filter(Boolean).length;
  const REL = depth === 0 ? './' : '../'.repeat(depth);
  return html.replace(/(href|src)="\/(?!\/)/g, `$1="${REL}`);
}
function write(path,html){ const dir=OUT+path; mkdirSync(dir,{recursive:true}); writeFileSync((OUT+path+'index.html'), relativize(html, path)); }
const PAGES=[
 {route:'home',path:'/',title:'Damark Manufacturing — Precision Machining & Production Work | Lomira, WI',desc:'Family-owned precision machine shop in Lomira, WI since 1995. CNC machining, tooling, prototyping, and reverse engineering — one part or a thousand. Ground to sky.',og:'/assets/img/production-floor-panoramic.jpg'},
 {route:'about',path:'/about/',title:'About Damark Manufacturing — 30 Years of Honest Work | Lomira, WI',desc:'Family-owned since 1995. No sales team, no runaround — just precision machining done right. Meet the shop and the second-generation ownership carrying it forward.'},
 {route:'services',path:'/services/',title:'Machining, Tooling & Production Services | Damark Manufacturing',desc:'CNC machining, fixturing and tooling, prototyping, reverse engineering, fabrication and welding — a full-service precision machine shop under one roof in Lomira, WI.'},
 {route:'careers',path:'/careers/',title:'Precision Machining Jobs in Lomira, WI | Damark Manufacturing',desc:'CNC machinist and shop careers at a stable, family-owned Wisconsin machine shop. Mon–Fri 6:00 AM–2:30 PM, 401(k) match, health contribution. Apply today.'},
 {route:'contact',path:'/contact/',title:'Contact Damark Manufacturing — Request a Quote | Lomira, WI',desc:'Send a print or describe your job and get a straight answer from a real person. Request a machining quote from Damark Manufacturing in Lomira, WI.'},
];
let n=0;
for(const p of PAGES){ write(p.path, doc({...p, body:ReactDOMServer.renderToStaticMarkup(Page(p.route)), ogimg:p.og})); n++; }
for(const s of SERVICES){ const path=`/services/${s.slug}/`; write(path, doc({title:`${s.h1} | Damark Manufacturing`, desc:s.card, path, body:ReactDOMServer.renderToStaticMarkup(Page('service:'+s.slug,s.slug)), ogimg:'/assets/img/'+s.img})); n++; }
const urls=[...PAGES.map(p=>p.path),...SERVICES.map(s=>`/services/${s.slug}/`)];
writeFileSync(`${OUT}/sitemap.xml`,`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`+urls.map(u=>`  <url><loc>${SITE_URL}${u}</loc></url>`).join('\n')+`\n</urlset>\n`);
writeFileSync(`${OUT}/robots.txt`,`User-agent: *\nAllow: /\nSitemap: ${SITE_URL}/sitemap.xml\n`);
console.log('Built '+n+' pages -> '+OUT);
