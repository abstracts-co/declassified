# Publish a change

Nothing here is pushed before the member has seen it and accepted it. Use the member's own GitHub account.

1. **Data.** Copy the new or changed folders from `out/data/` (the file's `<country>/<topic>/<id>/`, `pageindex/docs/<id>/`, and the regenerated `catalog.json`, `search.json`, `index.json` and `pageindex/manifest.json`) into a branch of [abstracts-co/declassified-data](https://github.com/abstracts-co/declassified-data), or of your fork, and open a pull request. Keep each file under 50 MB; films are re-encoded to fit.
2. **Indexes.** Copy `out/indexes/<id>/` to `indexes/<id>/` here, add the file's research entry to `source/research/<topic>.json`, and open a pull request.
3. **Post.** Share the file on the Wall as a plain post with its explorer link, `https://abstracts.co/a/declassified?a_file=<id>`, in the matching category.

## The About page

`artifacts/files/` is built from `source/`:

```bash
cd source/build && npm install
ASSETS=https://abstracts-co.github.io/declassified-data/ OUT=../../artifacts/files node bundle.mjs
```

Check it at 360 px and 1200 px wide in the sandboxed preview from the [web artifacts guide](https://abstracts.co/kit/abstracts/references/web-artifacts.md) before you open the pull request. Update `artifacts/files/content.md` with `python3 build/content.py`.
