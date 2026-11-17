# Bara Al-Sedih portfolio

Static site: `index.html`, `styles.css`, `site.js`, `assets/`. No build step.

- Preview: `python3 -m http.server 8080` in this folder, then open http://localhost:8080
- Deploy: Netlify publishes the repository root on every push to `main` (see `netlify.toml`).
- The canonical and share-image URLs in `index.html` assume https://baraalsedih.netlify.app/. Change them if the domain changes.
- The previous React site is in the git history before the `redesign-story` merge.
