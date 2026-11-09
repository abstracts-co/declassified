---
name: find-a-file
description: Answer a question from the declassified files in a/declassified, with the exact pages and the official source. Use when a member asks what the files say about something, such as "what did the CIA conclude about remote viewing?", "show me the Navy UFO videos", "which FBI file mentions Einstein's travel?" or "find every memo about the Glomar Explorer".
---

# Find a file

The collection has two layers. The catalog says which files exist. The indexes say where inside a document something is.

1. **Catalog.** Fetch `https://abstracts-co.github.io/declassified-data/index.json`. Each file has `id`, `title`, `type` (document, image, video, audio), `date`, `released`, `agency`, `summary`, `source` (the official page) and `files` (where its pages and media are). Pick the candidates by topic and summary.
2. **Indexes.** For each candidate document, walk its tree: `read_index` with slug `declassified` and the file's `id` (or read `indexes/<id>/index.json`). Go down by titles and summaries to the node that should hold the answer. Don't load every leaf.
3. **Read.** Open that node's text: `read_file` on its `text_path` (or `indexes/<id>/text/<node_id>.md`). Answer from this text. The summaries help you navigate and leave things out.
4. **Check.** The text is OCR of old scans. For a quote, a number or a name that matters, look at the page image (`<files>p/<NNN>.webp`, three digits) or the official PDF. Redactions are blank on purpose; never guess what they hide.
5. **Cite** the title, agency, date, page numbers and `source`. Say when a claim is the document's claim, not an established fact. A 1952 memo saying something doesn't make it true.

Photos, films and tapes have no index. Use their catalog summary and open the media in `files`.

To give the member a link that opens a file in the explorer, use `https://abstracts.co/a/declassified?a_file=<id>`; for a topic, `?a_topic=<topic>`.
