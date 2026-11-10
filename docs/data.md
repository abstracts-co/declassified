# How the data is laid out

The explorer and the agents read the same files. Large files live on GitHub Pages in [abstracts-co/declassified-data](https://github.com/abstracts-co/declassified-data), served at `https://abstracts-co.github.io/declassified-data/` with `Access-Control-Allow-Origin: *`. Indexes live in this repository.

## On the data host

| Path | What it is |
| --- | --- |
| `catalog.json` | What the explorer loads: `countries`, `topics` (name, orb and background colours, the `lead` moment its orb shows, file ids in date order), `items` by id and `daily` (which moment opens the page each day). |
| `index.json` | The same collection for agents: countries → topics → files, each with its summary, official source and links. |
| `search.json` | `pages`: the text of every hosted page as `[file id, page, text]`, for the explorer's search. |
| `share.json` | The link preview of each moment, file and topic (`file=<id>&m=<k>`, `file=<id>`, `topic=<id>`): title, description and image. abstracts.co reads it through `previews` in the artifact's `artifact.json`. |
| `<country>/<topic>/orb.webp`, `orb.mp4` | The subject inside the topic's glass orb: a square still and, for film, a 6-10 s loop. |
| `<country>/<topic>/<id>/` | One file's folder: `thumb.webp`, and `p/001.webp`… page images (documents, the first 40 pages of long ones plus any later page that holds a moment), `full.webp` (photos), `video.mp4`, `poster.webp` (films) or `audio.m4a` (tapes). Moments add `m<k>.webp` (the square the orb shows), `face.webp` (a document's card), `hi/<page>.webp` (a sharp render of a moment's page), `m<k>.mp4` (a film's clip) and `share-m<k>.jpg` (the link preview). |
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

`pa` holds each shown page's width/height. Films add `media`, `loop`, `poster` and `duration`; photos add `media`; tapes add `media`, `duration` and `wave`. `clipped` is set when the hosted copy is shorter than the original.

## Moments

A moment is the part of a file worth opening it for: one line on one page, a few seconds of a film or tape, or a detail of a photo. The orb, the card, every tap and every shared link open the file on its moment. An item lists them in `mo`:

```json
{ "k": "p", "p": 2, "q": "Each one was occupied by three bodies of human shape but only 3 feet tall…", "ln": [[0.455, 0.363, 0.825, 0.379], [0.155, 0.379, 0.527, 0.394]], "o": "m0.webp" }
{ "k": "v", "t": 44, "e": 48, "c": "m0.mp4", "po": "m0.webp", "o": "m0.sq.webp" }
{ "k": "a", "t": 91.5, "e": 106 }
{ "k": "i", "o": "m0.webp" }
```

`q` is the file's own words, verbatim, cut only at its own sentence or clause ends. `ln` holds one box per printed line of `q`, as fractions of the page. `g` marks a moment about a death: it never leads, loops, plays by itself or becomes a preview. A link opens a moment with `?a_file=<id>&a_m=<index>`, a page with `a_page`, a second with `a_t` and a topic with `a_topic`.

## In this repository

`indexes/<id>/index.json` is a document's outline and `indexes/<id>/text/<node_id>.md` holds the page text of each leaf. See [indexes/README.md](../indexes/README.md).

## Source

`source/` holds the explorer (`src/`), the build (`build/`) and the research files (`research/<topic>.json`), one per topic, with every file's facts and their sources.
