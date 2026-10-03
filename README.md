# Adeline Lalor — Portfolio

A static Jekyll site for the GitHub user site `adelinelalor.github.io`. The site is designed to publish directly from the `main` branch and repository root through GitHub Pages.

## Update the site

- Edit `index.md`, `about.md`, `work.md`, or `contact.md` to change page content.
- Keep the YAML front matter at the top of each Markdown file; it sets the page title, description, and URL.
- Update shared navigation, site metadata, and the GitHub Pages URL in `_config.yml`.
- Shared HTML lives in `_layouts/` and `_includes/`; visual styles are in `assets/css/site.css`.
- The light/dark theme toggle is in `assets/js/theme.js`. It stores the visitor’s choice in their browser.
- Public email addresses are configured in `_config.yml` and shown on the Contact page.

## Preview locally

Install Ruby and Bundler, then run:

```sh
bundle install
bundle exec jekyll serve
```

Open the local address printed by Jekyll (normally `http://127.0.0.1:4000`). Jekyll rebuilds the site as you edit files.

## Check with Lighthouse

1. Start the local preview with `bundle exec jekyll serve`.
2. Open the local site in Chrome.
3. Open Chrome DevTools → **Lighthouse**, select Performance, Accessibility, Best Practices, and SEO, then generate a report.
4. Test both the home and work pages, and review a mobile viewport as well as desktop.

The site avoids third-party fonts, trackers, and client-side frameworks to keep the published pages small. Lighthouse results can vary by browser, device, and test conditions; the target is 90 or higher in each category.

## Publish with GitHub Pages

1. Create or use a GitHub repository named `adelinelalor.github.io`.
2. Push the contents of this repository to its `main` branch.
3. In the repository’s **Settings → Pages**, choose **Deploy from a branch**, select `main`, and select `/(root)`.

GitHub Pages builds the Jekyll site automatically from the repository root. No generated `_site` folder or separate build workflow should be committed.