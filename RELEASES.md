# Codex of Ash & Echoes — Release Notes

All notable changes to this project will be documented in this file.  
This project adheres to [Semantic Versioning](https://semver.org/).

---

## [0.1.0] — 2025-10-03
### Added
- Initial project setup with **Astro + React + MDX**.
- Base **LoreLayout** including:
  - Sidebar navigation for lore sections.
  - Table of contents with deep-linkable headings.
- Core **pages scaffolded**:
  - I. The Pinnacle of Civilization
  - ~~II. The Age of Decline~~
  - ~~III. The Geniuses~~
  - ~~IV. The Cataclysm~~
  - ~~V. The Aetherborn~~
  - ~~VI. The Ashen Age~~
  - ~~VII. The Current Age~~
- **Styling foundation** with dark theme, card layout, and navigation.
- Placeholder support for **Pagefind search integration** (UI not fully functional yet).
- Added **project metadata** (`astro.config.mjs` with base path, MDX + React integrations).

### Notes
- Search is currently stubbed; Pagefind index runs but input box not mounting in dev.  
- Future releases will add:
  - Prev/Next navigation for lore sections.
  - Callout components (artifacts, notes, warnings).
  - Glossary system for terms like *Aetherborn*, *Pinnacle*, etc.
  - Deployment pipeline to GitHub Pages.
