# How the data is laid out

The explorer and the agents read the same files. Large files live on GitHub Pages in [abstracts-co/declassified-data](https://github.com/abstracts-co/declassified-data), served at `https://abstracts-co.github.io/declassified-data/` with `Access-Control-Allow-Origin: *`. Indexes live in this repository.

## On the data host

| Path | What it is |
| --- | --- |
| `catalog.json` | What the explorer loads: `countries`, `topics` (name, orb and background colours, the `subject` seen inside the orb, file ids in order) and `items` by id. |
| `index.json` | The same collection for agents: countries → topics → files, each with its summary, official source and links. |
| `search.json` | Every index node (`d` file id, `t` title, `s` summary, `p` first page) for the explorer's search. |
| `<country>/<topic>/orb.webp`, `orb.mp4` | The subject inside the topic's glass orb: a square still and, for film, a 6-10 s loop. |
| `<country>/<topic>/<id>/` | One file's folder: `thumb.webp`, and `p/001.webp`… page images (documents, first 40 pages of long ones), `full.webp` (photos), `video.mp4`, `loop.mp4`, `poster.webp` (films) or `audio.m4a` (tapes). |
| `pageindex/` | A PageIndex local store: `docs/<id>/tree.json`, `pages.json` (page text) and `doc.json` (metadata), plus `manifest.json`. |

A catalog item:

```json
{
  "id": "psychic-gateway-process",
  "topic": "psychic",
  "title": "Gateway Process Assessment",
  "type": "document",
  "date": "1983-06-09",
  "released": "2003-09-10",
  "agency": "US Army",
  "summary": "One or two sentences on what the file shows.",
  "source": "https://www.cia.gov/readingroom/document/cia-rdp96-00788r001700210016-5",
  "credit": "US Army Intelligence and Security Command",
  "license": "US government work, public domain",
  "dir": "us/psychic/psychic-gateway-process/",
  "thumb": "us/psychic/psychic-gateway-process/thumb.webp",
  "aspect": 0.78,
  "pages": 29,
  "shown": 29,
  "pa": [0.78],
  "toc": [{ "t": "Introduction", "p": 1, "n": [] }]
}
```

`pa` holds each shown page's width/height. Films add `media`, `loop`, `poster` and `duration`; photos add `media`; tapes add `media` and `duration`. `clipped` is set when the hosted copy is shorter than the original.

## In this repository

`indexes/<id>/index.json` is a document's outline and `indexes/<id>/text/<node_id>.md` holds the page text of each leaf. See [indexes/README.md](../indexes/README.md).

## Source

`source/` holds the explorer (`src/`), the build (`build/`) and the research files (`research/<topic>.json`), one per topic, with every file's facts and their sources.
