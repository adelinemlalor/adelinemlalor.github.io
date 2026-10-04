# Change 2: Résumé download and contact links

**Branch:** `add-resume-download`
**Status:** Implemented and verified

## Planned work

### Résumé PDF

Convert the attached résumé to `assets/Adeline-Lalor-Resume.pdf`, preserving its content and layout.

### Navigation link

Add a **Résumé** link to the site navigation. It will open the PDF in a new tab with safe link attributes and an accessible indication that it opens a new tab.

### Home page actions

Add two actions below the introduction in the Home page hero:

- **Download résumé** — link to the PDF with download behavior.
- **Get in touch** — link to the Contact page.

Use the existing visual style, with clear keyboard focus and a responsive layout at 375px and 1280px.

### Exclude this plan from the published site

Add `Change2.md` to `_config.yml`’s exclusions, matching the existing `Change1.md` exclusion.

## Verification completed

- Confirm the PDF exists and its content and layout are preserved.
- Build the Jekyll site and confirm `Change2.md` is excluded while the PDF and links are available.
- Review the Home page and navigation at 375px and 1280px; check keyboard focus and the new-tab indication.