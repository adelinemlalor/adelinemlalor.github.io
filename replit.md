# Adeline Lalor Portfolio

A static Jekyll portfolio for GitHub Pages, built from Markdown, HTML, CSS, and a small theme-toggle script.

## Project structure

- `index.md`, `about.md`, `work.md`, `contact.md` — page content and YAML front matter
- `_layouts/` and `_includes/` — reusable page templates and shared site chrome
- `assets/css/` and `assets/js/` — styles and minimal theme behavior
- `_config.yml` — GitHub Pages URL, plugins, metadata, and navigation

## Local preview

- `bundle install`
- `bundle exec jekyll serve`

The site is intended to publish through GitHub Pages from `main` and the repository root.

## Content boundary

- Use only résumé and portfolio details the user supplies; the provided LinkedIn URL is a link, not a source to fetch.
- Keep the repository root as the static Jekyll site. Do not add a separate application, framework, backend, form service, or package manifest.
- Public mailto links were explicitly provided for the site.