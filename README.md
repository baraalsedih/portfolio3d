# Bara Al-Sedih portfolio

Static site in `dist/`: `index.html`, `styles.css`, `site.js`, `assets/`. No build step, the files in `dist/` are the source.

- Preview: `python3 -m http.server 8080` in the `dist` folder, then open http://localhost:8080
- Deploy: Netlify publishes the `dist` folder on every push to `main` (see `netlify.toml`).
- The canonical and share-image URLs in `dist/index.html` assume https://baraalsedih.netlify.app/. Change them if the domain changes.
- The previous React site is in the git history before the `redesign-story` merge.
