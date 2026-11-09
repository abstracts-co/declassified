---
name: add-a-file
description: Add a declassified file to a/declassified, with its pages, media, PageIndex tree and catalog entry, ready for the member to accept. Use when a member wants to add a document, photo, film or tape that a government has declassified or released, such as "add the CIA's 1967 Acoustic Kitty memo", "add the FBI file on Jimi Hendrix" or "put the new JFK release in the explorer".
---

# Add a file

A file joins the explorer in two pull requests made from the member's own GitHub account: its pages and media to [abstracts-co/declassified-data](https://github.com/abstracts-co/declassified-data), and its index to this repository. Nothing is pushed until the member has seen the result and accepted it.

## 1. Check that it belongs

- A government body declassified it or released it officially: an agency reading room, a national archive, a presidential library, a court-ordered release or a parliament. Not a leak, nothing still classified.
- It's a government work or otherwise free to share. Note the license.
- No gore, and no private details about private people beyond what the release itself shows.
- It isn't already in `https://abstracts-co.github.io/declassified-data/index.json`.

## 2. Record it

Write one entry in the shape of `source/research/<topic>.json` (see [docs/data.md](../../docs/data.md)): `id` (lowercase, starts with the topic), `title` (what people call it, at most 40 characters), `type`, `date`, `released`, `agency`, a one- or two-sentence `summary` that says only what the file shows, the official `source` page, the `file` you downloaded and its license. Check each fact against a second source. Download the file into `raw/<id>/`. Agency sites often refuse scripts; an Internet Archive or Wikimedia Commons copy of the same release is fine when `source` still points to the official page.

## 3. Build it

From `source/`, with Python 3.10+, Node 20+, Poppler, Tesseract and ffmpeg:

```bash
python3 build/ingest.py <id>          # OCR, page images, thumbnails, video and audio
python3 build/pindex.py <id>          # PageIndex tree (pip install "pageindex[claude]")
python3 build/indexes.py <id>         # indexes/<id>/ for this repository
python3 build/catalog.py              # catalog.json, search.json, index.json
```

`pindex.py` runs PageIndex locally in Flash mode with `claude-code/haiku`, through the member's Claude subscription, so no API key is needed. Any model PageIndex supports works.

Then edit the tree by hand: OCR breaks headings. Give every node the heading printed in the document, or a short plain name for what the pages are ("Cover memo", "Annex B: maps"). Make the nesting follow the document. Rewrite summaries that describe OCR noise instead of content, in at most 60 words. Keep every page inside a leaf. `python3 build/validate_tree.py <tree.json> <pages>` must print `OK`.

## 4. Show, then publish

Serve `out/` and open the explorer at `#file=<id>`, at 360 px and 1200 px wide. Show the member the card, the pages, the contents list and the catalog entry. After they accept, follow [docs/publish.md](../../docs/publish.md).
