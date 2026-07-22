# Damark Manufacturing — Website

Production static website for Damark Manufacturing (Lomira, WI). Every page is
pre-rendered to plain HTML: fast, crawlable, and dependency-free at runtime.
The host serves the files in this repository as-is — there is no build step on
the server.

## What deploys

The **root of this repo IS the live site.** These are served directly:

```
index.html                     Home
about/                         About
services/                      Services overview
services/<service>/            7 service detail pages (with FAQ)
careers/                       Careers + application form
contact/                       Contact + RFQ form
assets/                        Images and logos
tokens/  styles.css  site.css  Design tokens + site styling
robots.txt  sitemap.xml        SEO
```

## Editing content and pushing updates

The pages above are **generated** — don't hand-edit them. Edit the source in
`/src`, rebuild, and commit. The most common edits:

- Service page copy, FAQs, service list → `src/servicesData.js`
- Home / About / Careers / Contact copy → the matching `src/*Screen.jsx`
- Header nav, footer → `src/SiteHeader.jsx`, `src/SiteFooter.jsx`

Then regenerate and push:

```
cd src
npm install        # first time only
npm run build      # regenerates the HTML pages at the repo root
cd ..
git add -A && git commit -m "Update site content" && git push
```

The connected host redeploys automatically on push.

## Before go-live — two things to set

1. **Contact & Careers forms.** They POST to a Formspree placeholder
   (`https://formspree.io/f/REPLACE_WITH_YOUR_FORM_ID`). Create a free form at
   formspree.io and replace the ID in `src/build/_static.js`
   (`window.FORM_ENDPOINT`), then rebuild. Until then, RFQ submissions are NOT
   delivered — the phone number and address on the site still work.
2. **Domain.** Canonical URLs and the sitemap use `https://www.damarkmfg.com`.
   If the real domain differs, set it in `src/build/build.mjs` (`SITE_URL`) and
   rebuild.

## Notes

- The "Ground to Sky" section on the home page used an empty image placeholder
  in the original export; it now shows `assets/img/trak-dpm5.jpg`. Swap it in
  `src/HomeScreen.jsx` if you want a different photo.
- Fonts load from the design tokens; if a font is self-hosted or external,
  it is referenced in `tokens/fonts.css`.
