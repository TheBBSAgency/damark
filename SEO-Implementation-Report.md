# Damark Manufacturing — Onsite SEO Implementation Report

**Prepared by The BBS Agency · July 28, 2026**
**Branch:** `seo-onsite-implementation` (3 commits, tip `6b89c8b`) off `main` (`2413037`)
**Status:** Complete and ready to merge. **Nothing was committed to `main`, pushed, or deployed.**

> **Update (July 28, follow-ups applied):**
> - **Commit 2** — geo coordinates set from the verified GBP pin; NAP aligned to the GBP character-for-character (`1015 Church Street` → `1015 Church St`); no `mailto:` (owner confirmed: drive people to the RFQ form).
> - **Commit 3** — absolute URLs now point at the **github.io host** where the site actually serves today (`https://thebbsagency.github.io/damark`), so canonical/OG/schema/sitemap/llms.txt all match the live host. **This branch is ready to merge and push as-is** — no local rebuild needed. See §2 and §8 (Go-live).
>
> Only the RFQ conversion-event check (§5.4) remains, and it lives in GoHighLevel, not this repo.

---

## 0. How to review and apply this

I worked from a clean clone of `github.com/thebbsagency/damark`. Because I'm in a sandbox with no push access (and your rules say don't push), the work comes back as a git **bundle** and a **patch** rather than a pushed branch. Two readable diffs are included so you can review without applying anything.

**To load the branch (recommended):**
```bash
cd /path/to/damark            # your local clone, on main
git fetch /path/to/damark-seo-onsite-implementation.bundle seo-onsite-implementation:seo-onsite-implementation
git checkout seo-onsite-implementation
cd src && npm install && npm run build   # regenerate HTML locally to confirm
```
**Or apply the patch:** `git checkout -b seo-onsite-implementation main && git am < damark-seo-onsite-implementation.patch`

Files in this delivery:
- `damark-seo-onsite-implementation.bundle` — the full branch, applyable (includes image changes).
- `damark-seo-onsite-implementation.patch` — same change set as a git patch.
- `review-source-and-config.diff` — human-readable diff of `/src` + sitemap/robots/llms (start here).
- `review-generated-html.diff` — diff of the regenerated HTML output.
- This report.

---

## 1. The one thing that changed the whole approach

**The site is not hand-edited HTML — it's generated.** The 12 HTML pages at the repo root are rendered from React/JSX source in `/src` by `src/build/build.mjs` (`npm run build`). The repo README is explicit: *"The pages above are generated — don't hand-edit them. Edit the source in `/src`, rebuild, and commit."*

The implementation prompt was written assuming an implementer would hand-edit HTML `<head>`s and bodies. If we'd done that, **the next `npm run build` would have wiped every change.** So I made all edits in the source and the build tooling, then regenerated the HTML. That's why the diff touches `/src/*.jsx`, `servicesData.js`, and `build.mjs` — those are the real source of truth — and the HTML changes are the generated result.

The upside: things the prompt wanted done per-page (schema, alt text, canonicals) are now done **once, correctly, for every page**, and stay correct on every future rebuild.

I verified the baseline first: a fresh build of the original source reproduced the committed HTML byte-for-byte, so every HTML change in this branch is genuinely mine, not build drift.

---

## 2. Domain decision (per your call)

The prompt said to hard-code `https://thebbsagency.github.io/damark/`. The repo is already configured for `https://www.damarkmfg.com` — that's what the existing canonicals, Open Graph tags, and sitemap use today. Hard-coding the github.io URL into schema/llms.txt while canonicals point at damarkmfg.com would make your SEO signals contradict each other.

Everything is wired through the build's single `SITE_URL` variable. Schema, canonicals, OG, sitemap, and llms.txt all read from it, so they can never disagree.

**Decision (Path B): the build now defaults to `https://thebbsagency.github.io/damark`** — the host the site actually serves from today — so the output on this branch is correct for where it's going live right now. Verified: all 12 canonicals, every OG/schema URL, the sitemap, and llms.txt use the github.io host; zero `damarkmfg.com` strings remain in the output; asset/style links stay page-relative so they resolve correctly under the `/damark/` subpath.

**When you launch the real domain later:** change the one `SITE_URL` line in `src/build/build.mjs` to `https://www.damarkmfg.com`, add a `CNAME` file + DNS, and rebuild. Every absolute URL moves together in one edit.

---

## 3. What changed, file by file

**Build tooling — `src/build/build.mjs`** (the engine for most of Priority 1 & 3)
- Added JSON-LD generators: `localBusinessLD` (MachineShop), `serviceLD`, `faqLD`, `breadcrumbLD`, injected into each page's `<head>`.
- `sitemap.xml` now emits `<lastmod>` + `<priority>` (home 1.0; services hub + 7 service pages 0.8; about/contact/careers 0.6).
- Added `llms.txt` generation from real page data.
- Service pages now use `metaDesc || card` for the meta description, so a page's meta can be tuned without changing its visible hub card.

**`src/servicesData.js`** — added per-service `imgAlt` (hero alt text), `bodyLinks` (contextual internal-link config), and `metaDesc` for the three weak descriptions. Copy itself was not rewritten.

**`src/HomeScreen.jsx`** — H1 now leads with the keyword (`Precision Machining & Production Work in Lomira, WI`) with `Production Work Done Right` kept as a visible tagline subhead; added a keyword-aware intro paragraph with three contextual links; hero + content image alt text.

**`src/AboutScreen.jsx`** — H1 → `Precision Machine Shop in Lomira, WI — 30 Years of Honest Work`; hero + content image alt text.

**`src/ServiceDetailScreen.jsx`** — hero alt now uses `imgAlt`; added a `linkify` helper that wraps the first occurrence of each configured phrase in an in-sentence link (2 per page where natural).

**`src/ServicesScreen.jsx` / `src/CareersScreen.jsx`** — hero + service-block alt text.

**`src/ContactScreen.jsx`** — added a visible **Hours** card (Mon–Fri 6:00 AM–2:30 PM) and an embedded **Google Map** for 1015 Church Street.

**Images** (`assets/img`, `assets/logo`) — resized/recompressed the oversized heroes and the logo. Same pictures, no art-direction change. Assets went from ~6.6 MB to ~1.9 MB:

| File | Before | After |
|---|---|---|
| production-floor-panoramic.jpg | 2,587 KB (8160px) | 254 KB (2560px) |
| trak-dpm5.jpg | 1,459 KB (3888px) | 325 KB (1920px) |
| precision-machining.jpg | 1,097 KB (3888px) | 224 KB (1920px) |
| tooling-fabrication-banner.png | 922 KB | 93 KB |
| damark-logo-2026.png | 984 KB (2079px) | 24 KB (640px) |

---

## 4. Task checklist — Done / Skipped / Flagged

| # | Task | Status | Notes |
|---|---|---|---|
| 1.1a | LocalBusiness (MachineShop) schema, sitewide | ✅ Done | On all 12 pages via build. `geo` left as TODO (see §5). |
| 1.1b | Service schema, per service page | ✅ Done | `description` uses each page's existing summary sentence. |
| 1.1c | FAQPage schema on 7 service pages | ✅ Done | Generated from the same source array as the visible FAQ — verified Q&A match the page **exactly**. |
| 1.1d | BreadcrumbList on 7 service pages | ✅ Done | Home › Services › [Service]. |
| 1.2 | Image alt text (all 11 pages) | ✅ Done | All empty `alt=""` filled; two weak ones improved. Logo alt left as-is. 0 empty alts remain. |
| 1.3a | sitemap.xml (lastmod + priority) | ✅ Done | Enhanced the generator (a static file would be overwritten on rebuild). |
| 1.3b | robots.txt | ✅ Skipped (already correct) | The build already emits exactly the specified content; unchanged. |
| 1.3c | llms.txt | ✅ Done | Built from real titles/summaries. |
| 1.4 | H1 adjustments (Home, About) | ✅ Done | Voice preserved; only these two H1s touched. |
| 2.1 | Contact local SEO (hours, map, NAP) | ✅ Done | Hours + map added; NAP now matches the GBP character-for-character (`1015 Church St`) across site + schema + map + llms.txt. |
| 2.2 | Meta description rewrites (3) | ✅ Done | Fixturing, Prototyping, Fabrication. Strong ones left alone. |
| 2.3 | Contextual internal links | ✅ Done | 2 per service page where natural + 3 on the homepage. Emergency page intentionally 0 (no natural cross-reference) — noted, not forced. |
| 2.4 | Homepage depth | ✅ Done | Keyword-aware intro within the first 100 words of body copy. |
| 3.1 | Open Graph / Twitter tags | ✅ Skipped (already existed) | Build already emits og:title/description/type/url/image + twitter:card on every page. Verified all 12. |
| 3.2 | Canonical tags | ✅ Skipped (already existed) | Self-referencing, trailing-slash canonicals already on every page. Verified. |
| 3.3 | Contact form / crawlable contact | ✅ Done | `tel:` links crawlable and preserved (55 sitewide). No `mailto:` by design — owner wants RFQ-form submissions. Third-party widget untouched; conversion-event check remains (§5.3, lives in GoHighLevel). |
| 3.4 | Image performance | ✅ Done | See §3 table. |

---

## 5. Flagged items

**Resolved in commit 2 (owner-supplied values):**

1. ✅ **Geo coordinates** — set to the verified GBP pin `43.58718275171335, −88.44742707300928` in the LocalBusiness schema.
2. ✅ **NAP vs GBP** — the GBP uses `1015 Church St`; the site said `1015 Church Street`. Aligned character-for-character to `1015 Church St` across header, footer, contact card, careers, the map, the schema `streetAddress`, and llms.txt. (If you'd rather the website spell out "Street" for readability — Google treats them as equivalent — say the word and I'll flip it back; the GBP match is the only reason it's abbreviated.)
3. ✅ **`mailto:`** — none added. Confirmed: contact is the crawlable `tel:` link plus the RFQ form, which is where you want submissions to go.

**Still open (one item, and it's not in this repo):**

4. ⚠ **Conversion event on the RFQ form.** The form is a third-party `link.thebbsagency.com` (GoHighLevel) widget in an iframe. Whether a submission fires a conversion event (GA4/Ads) is configured in that platform, not in this repo — I left the widget untouched as instructed. Worth confirming on the GHL side.

**Note (no action needed):**

5. **FAQ counts differed from the prompt.** The prompt estimated Prototyping and Reverse Engineering at 5 FAQs each; the source actually has 6 each (CNC 8, Fixturing 6, Prototyping 6, Reverse 6, Shop-to-Shop 6, Emergency 5, Fabrication 4). Because the FAQ schema is generated from the same array the page renders, it's always exact regardless — no action needed, just noting the drift.

---

## 6. Where the prompt met reality — and how I handled it

- **"Add schema to every page / shared include."** Done via the shared `doc()` builder — one include, every page.
- **"Verify before you add" (schema, canonical, OG, sitemap, robots).** Canonicals, OG/Twitter, robots.txt already existed and were correct — I verified and left/confirmed them rather than duplicating. Schema and llms.txt were genuinely missing and were added. Sitemap existed but lacked lastmod/priority — enhanced in place.
- **Hard-coded github.io domain.** Overridden per your decision to keep everything on the build's `SITE_URL` (damarkmfg.com), so signals stay consistent. One-line switch when you launch.
- **Hand-editing HTML.** Redirected to the source + build, per the repo's own README, so nothing gets overwritten on rebuild.

---

## 7. Confirmation

Nothing was committed to `main`, pushed to any remote, or deployed. `main` is exactly where it was (`2413037`, matching `origin/main`). All work is on the `seo-onsite-implementation` branch (3 commits, tip `6b89c8b`), delivered here for your review.

---

## 8. Go-live (Path B — staying on github.io for now)

The site deploys straight from the root of `main` (no CI workflow, no `gh-pages` branch, no custom-domain `CNAME`), so **merging to `main` and pushing = live**, ~1–2 min later. The branch is already built for the github.io host, so no rebuild is needed.

From your local clone (which has push rights):
```bash
cd damark
git checkout main && git pull
git fetch /path/to/damark-seo-onsite-implementation.bundle seo-onsite-implementation:seo-onsite-implementation
git merge --no-ff seo-onsite-implementation
git push origin main
```

After it deploys:
1. Spot-check a few live pages at `thebbsagency.github.io/damark/`.
2. Run a service page through Google's **Rich Results Test** to confirm the schema.
3. Submit `https://thebbsagency.github.io/damark/sitemap.xml` in Search Console.

**Later, when you launch `www.damarkmfg.com`:** change the one `SITE_URL` line in `src/build/build.mjs`, add a `CNAME` file (`www.damarkmfg.com`) at the repo root, point DNS at GitHub Pages, set the custom domain in **Settings → Pages**, then `npm run build` and push.
