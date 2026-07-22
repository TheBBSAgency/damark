# Website UI Kit — Damark Manufacturing

Interactive recreation of the Damark marketing site, built from the approved website content (`Damark_Website_Content.docx`) and brand voice. Composes the design-system primitives — it does not re-implement them.

## Screens
- **HomeScreen** — hero over the shop floor, proof-stat band, "what sets us apart", services grid, ground-to-sky industries, family-owned snapshot, RFQ CTA.
- **ServicesScreen** — page header, alternating service blocks with real shop imagery, capabilities `SpecList`, materials, ISO quality note, founder quote.
- **AboutScreen** — origin story + second-generation hand-off, sticky proof rail and operating principles.
- **ContactScreen** — working RFQ form (Input/Textarea, submit → confirmation), phone/email/address cards, after-hours note.
- **SiteHeader / SiteFooter** — shared chrome with the logo, sticky nav, utility bar, phone.

## Run
Open `index.html`. Nav between Home / Services / About / Contact is live; the contact form submits to a fake confirmation.

## Notes
- Copy is lifted verbatim from the brand content where possible — keep the plain, direct voice if you extend it.
- All imagery is real Damark shop photography from `assets/img/`.
- Components are read from `window.DamarkManufacturingDesignSystem_70152b` after the bundle loads.
