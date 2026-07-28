import { makeEnv } from './env.mjs';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { mkdirSync, writeFileSync, readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
const require = createRequire(import.meta.url);
const ReactDOMServer = require('react-dom/server');
const React = require('react');
const __dirname = dirname(fileURLToPath(import.meta.url));
const SRC = resolve(__dirname, '..');          // repo/src
const OUT = resolve(__dirname, '..', '..');    // repo root (served site)
// ── CONFIG: absolute-URL host for canonical, OG, schema, sitemap, llms.txt ──
// Currently the live host: GitHub Pages at thebbsagency.github.io/damark.
// AT GO-LIVE on the real domain, change this ONE line to 'https://www.damarkmfg.com'
// (and add a CNAME + DNS), then rebuild — every absolute URL moves with it.
const SITE_URL = process.env.SITE_URL || 'https://thebbsagency.github.io/damark';

// Cache-busting: hash each linked stylesheet's contents at build time and append
// it as ?v=<hash>. The version changes only when the CSS changes, so browsers
// refetch on real updates and keep using cache otherwise. styles.css is hashed
// together with the token files it @imports, so a token edit bumps it too.
function assetVersion(relPaths){
  const h = createHash('sha1');
  for (const p of relPaths){ try { h.update(readFileSync(OUT + p)); } catch {} }
  return h.digest('hex').slice(0, 8);
}
const STYLES_V = assetVersion(['/styles.css','/tokens/base.css','/tokens/colors.css','/tokens/effects.css','/tokens/fonts.css','/tokens/spacing.css','/tokens/typography.css']);
const SITE_V = assetVersion(['/site.css']);

const env = makeEnv(SRC);
env.run(readFileSync(`${__dirname}/_static.js`,'utf8'), '_static.js');
env.runJs('_ds_bundle.js');
env.runJs('servicesData.js');
['SiteHeader.jsx','SiteFooter.jsx','HomeScreen.jsx','ServicesScreen.jsx','ServiceDetailScreen.jsx','AboutScreen.jsx','ContactScreen.jsx','CareersScreen.jsx'].forEach(f=>env.runJsx(f));
const w = env.win, ns = w.DamarkManufacturingDesignSystem_70152b;
if ((ns.__errors||[]).length){ console.error('DS errors', ns.__errors); process.exit(1); }
const SERVICES = w.DAMARK_SERVICES;
const esc = s => String(s).replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;');

// ── SEO: structured data (JSON-LD) ──────────────────────────────────────────
// Absolute URLs use SITE_URL so schema, canonical, OG, sitemap and llms.txt all
// point at the same domain. Flip SITE_URL (top of file / env) and everything moves together.
const BASE = SITE_URL.replace(/\/+$/,'');
const jsonld = obj => `<script type="application/ld+json">${JSON.stringify(obj).replace(/</g,'\\u003c')}</script>`;
// Geo coordinates from the verified Google Business Profile pin for
// 1015 Church St, Lomira, WI 53048 (confirmed by owner, 2026-07-28).
const GEO = { lat: '43.58718275171335', lng: '-88.44742707300928' };
function localBusinessLD(){
  const b = {
    "@context":"https://schema.org",
    "@type":"MachineShop",
    "@id": BASE + "/#business",
    "name":"Damark Manufacturing",
    "alternateName":"Damark Production and Tooling",
    "url": BASE + "/",
    "telephone":"+1-920-269-7825",
    "image": BASE + "/assets/img/production-floor-panoramic.jpg",
    "logo": BASE + "/assets/logo/damark-logo-2026.png",
    "address":{"@type":"PostalAddress","streetAddress":"1015 Church St","addressLocality":"Lomira","addressRegion":"WI","postalCode":"53048","addressCountry":"US"},
    "openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday"],"opens":"06:00","closes":"14:30"}],
    "foundingDate":"1995",
    "areaServed":["Lomira WI","Fond du Lac County","Dodge County","Fox Valley","Milwaukee metro area"]
  };
  if (GEO) b.geo = {"@type":"GeoCoordinates","latitude":GEO.lat,"longitude":GEO.lng};
  return b;
}
function serviceLD(s){
  return {
    "@context":"https://schema.org",
    "@type":"Service",
    "serviceType": s.nav,
    "name": s.h1,
    "url": BASE + `/services/${s.slug}/`,
    "provider":{"@type":"MachineShop","name":"Damark Manufacturing","@id": BASE + "/#business"},
    "areaServed":"Wisconsin",
    "description": s.card
  };
}
function faqLD(s){
  return {
    "@context":"https://schema.org",
    "@type":"FAQPage",
    "mainEntity": s.faq.map(([q,a])=>({"@type":"Question","name":q,"acceptedAnswer":{"@type":"Answer","text":a}}))
  };
}
function breadcrumbLD(s){
  return {
    "@context":"https://schema.org",
    "@type":"BreadcrumbList",
    "itemListElement":[
      {"@type":"ListItem","position":1,"name":"Home","item": BASE + "/"},
      {"@type":"ListItem","position":2,"name":"Services","item": BASE + "/services/"},
      {"@type":"ListItem","position":3,"name": s.nav,"item": BASE + `/services/${s.slug}/`}
    ]
  };
}
function Page(route, slug){
  const nav = route.indexOf('service:')===0 ? 'services' : route;
  let screen;
  if(slug) screen = React.createElement(w.ServiceDetailScreen,{slug});
  else { const S={home:w.HomeScreen,services:w.ServicesScreen,about:w.AboutScreen,contact:w.ContactScreen,careers:w.CareersScreen}[route]; screen=React.createElement(S,{tweaks:{heroOverlay:0.85,servicesAccent:'navy',showProofBand:true}}); }
  return React.createElement('div',{className:'page'}, React.createElement(w.SiteHeader,{route:nav}), screen, React.createElement(w.SiteFooter,null));
}
function doc({title,desc,path,body,ogimg,head}){
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
<link rel="stylesheet" href="/styles.css?v=${STYLES_V}" />
<link rel="stylesheet" href="/site.css?v=${SITE_V}" />
${head||''}</head>
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
for(const p of PAGES){ write(p.path, doc({...p, body:ReactDOMServer.renderToStaticMarkup(Page(p.route)), ogimg:p.og, head:jsonld(localBusinessLD())})); n++; }
for(const s of SERVICES){ const path=`/services/${s.slug}/`; const head=jsonld(localBusinessLD())+jsonld(serviceLD(s))+jsonld(faqLD(s))+jsonld(breadcrumbLD(s)); write(path, doc({title:`${s.h1} | Damark Manufacturing`, desc:s.metaDesc||s.card, path, body:ReactDOMServer.renderToStaticMarkup(Page('service:'+s.slug,s.slug)), ogimg:'/assets/img/'+s.img, head})); n++; }
const urls=[...PAGES.map(p=>p.path),...SERVICES.map(s=>`/services/${s.slug}/`)];
const LASTMOD = (process.env.LASTMOD || new Date().toISOString().slice(0,10));
const prio = u => u==='/' ? '1.0' : (u==='/about/'||u==='/contact/'||u==='/careers/') ? '0.6' : '0.8';
writeFileSync(`${OUT}/sitemap.xml`,`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`+urls.map(u=>`  <url>\n    <loc>${SITE_URL}${u}</loc>\n    <lastmod>${LASTMOD}</lastmod>\n    <priority>${prio(u)}</priority>\n  </url>`).join('\n')+`\n</urlset>\n`);
writeFileSync(`${OUT}/robots.txt`,`User-agent: *\nAllow: /\nSitemap: ${SITE_URL}/sitemap.xml\n`);
// llms.txt — curated Markdown map for AI crawlers, built from real page data.
const llms = `# Damark Manufacturing\n\n> Family-owned precision machine shop in Lomira, WI since 1995. CNC machining, fixturing and tooling, prototyping, reverse engineering, and fabrication and welding — one part or a thousand, done right.\n\n## Services\n`+
  SERVICES.map(s=>`- [${s.nav}](${BASE}/services/${s.slug}/): ${s.card}`).join('\n')+
  `\n\n## Company\n`+
  `- [About](${BASE}/about/): Family-owned since 1995, second-generation ownership. Thirty years of precision machining in Lomira, WI.\n`+
  `- [Services Overview](${BASE}/services/): Full-service precision machine shop — machining, tooling, prototyping, reverse engineering, and fabrication under one roof.\n`+
  `- [Careers](${BASE}/careers/): CNC machinist and shop roles in Lomira, WI. Monday–Friday, 6:00 AM–2:30 PM.\n`+
  `- [Contact](${BASE}/contact/): Request a machining quote — 1015 Church St, Lomira, WI 53048 · (920) 269-7825.\n`;
writeFileSync(`${OUT}/llms.txt`, llms);
console.log('Built '+n+' pages -> '+OUT);
