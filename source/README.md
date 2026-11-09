# Source

- `src/`: the explorer. `app.js` (scene, carousel, gestures), `orb.js` (the glass-ball lens, card and background shaders), `viewer.js` (pages, films, photos, tapes), `find.js` (search) and `data.js`. Three.js 0.170, bundled with esbuild.
- `build/`: from a downloaded file to the published data.
  - `ingest.py`: OCR (Tesseract) when a scan has no text, page images, thumbnails, film and tape encodes.
  - `pindex.py`: PageIndex Flash trees with `claude-code/haiku`.
  - `validate_tree.py`: checks an edited tree.
  - `indexes.py`: writes `indexes/<id>/` for the community repository.
  - `catalog.py`: `catalog.json`, `search.json` and `index.json`.
  - `content.py`: the About page's `content.md`.
  - `bundle.mjs`: builds the page (`ASSETS` sets the data host, `OUT` the folder). `serve.mjs` serves a folder with CORS for previews; `shot.mjs` takes headless screenshots.
  - `orbs/`: what each topic's glass orb shows and how it was cut (`BRIEF.md`).
  - `topics.json`: topic names and colours. `overrides.json`: per-file fixes, such as which page makes the thumbnail.
- `research/`: one file per topic with every file's facts and the sources that support them. `BRIEF.md` is the brief the research followed.

Run `npm install` in `build/`, and install `pageindex[claude]`, Poppler, Tesseract and ffmpeg for the data steps.
