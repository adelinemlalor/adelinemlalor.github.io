# Portfolio site plan — Adeline Lalor

## Site
- Publish a static Jekyll GitHub user site at https://adelinelalor.github.io from the repository root on `main`; keep `baseurl` empty and use Jekyll URL filters.
- Create Home, About, Work Experience, and Contact pages in Markdown with YAML front matter, shared layouts/includes, site navigation, and a footer.
- Keep the project root itself publish-ready: `index.md`, `_config.yml`, `_layouts/`, `_includes/`, styles/assets, sitemap support, favicon, and README.

## Content and visual direction
- Use a minimal, clean, single-column responsive layout inspired by the supplied Squarespace reference; use a light/dark theme toggle, accessible contrast, and a clean modern sans-serif system-font stack.
- Build content only from the résumé text supplied in chat: ServiceNow, RevReply, IBM, education, skills, awards, volunteering, and interests. Keep accomplishments and metrics faithful to that text; do not fetch the LinkedIn page or invent missing biography, employers, or results.
- Use the supplied email as a public mailto link (approved by the user), with a plain LinkedIn profile link. Any detail not supplied will be omitted or clearly marked as a placeholder.

## Implementation and checks
- Use GitHub Pages-compatible Jekyll, semantic HTML, plain CSS, and only minimal JavaScript for the theme toggle. Add SEO metadata and a sitemap; no backend, database, form backend, framework, trackers, or unnecessary libraries.
- Include README instructions for editing content, local preview, and Lighthouse. Check root structure, Jekyll build, navigation, and layouts at 375px and 1280px; target Lighthouse scores of at least 90 in all four categories.

## Assumptions
- The connected GitHub username is `adelinelalor`; the site URL is therefore `https://adelinelalor.github.io`.
- The reference is a visual direction only, not a request to copy Squarespace. A restrained, high-contrast palette and system fonts avoid external font dependencies.
- The LinkedIn URL is a link only; no LinkedIn content will be fetched. There is no separate About paragraph supplied, so any short introduction will be limited to facts in the résumé.