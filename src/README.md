# Website source

Editable source for the Damark website. Running `npm run build` renders these
into static HTML at the repository root (the deployed site).

- `*Screen.jsx`, `SiteHeader.jsx`, `SiteFooter.jsx` — page/UI source
- `servicesData.js` — all service-page content (copy, FAQs)
- `_ds_bundle.js` — the Damark design-system components (do not edit)
- `image-slot.js`, `tweaks-panel.jsx` — original design-tool scaffolding, unused by the build
- `build/` — the static-site generator (`build.mjs`), helpers, and env setup

Config lives at the top of `build/build.mjs` (`SITE_URL`) and
`build/_static.js` (`FORM_ENDPOINT`).
