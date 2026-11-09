# Document indexes

One folder per document, named by the file's id: `index.json` is its PageIndex tree and `text/<node_id>.md` holds the page text of each leaf. Agents read them with `list_indexes`, `read_index` and `read_file`; people read them on https://abstracts.co/a/declassified/documents. The skill is [find-a-file](../skills/find-a-file/SKILL.md).

## Format

```json
{
  "id": "psychic-gateway-process",
  "title": "Gateway Process Assessment",
  "source": { "url": "official page", "publisher": "US Army", "date": "1983-06-09", "pages": 29, "released": "2003-09-10", "file": "the copy that was indexed", "sha256": "…", "license": "US government work, public domain" },
  "country": "us",
  "topic": "psychic",
  "summary": "…",
  "files": "https://abstracts-co.github.io/declassified-data/us/psychic/psychic-gateway-process/",
  "tool": { "name": "PageIndex", "version": "0.5.3", "method": "…", "models": ["claude-code/haiku"] },
  "built": "2026-11-09",
  "tree": [{ "node_id": "0000", "title": "Cover memo", "start_page": 1, "end_page": 3, "summary": "…", "nodes": [] }]
}
```

Pages are **1-based, inclusive PDF positions**, counting covers and blank pages, not the numbers printed on the page. Every page belongs to at least one leaf; leaves can overlap where a section starts mid-page.

## How they were built

Scans without a text layer were OCRed with Tesseract 4 at 220 dpi. Each PDF then went through PageIndex 0.5.3 locally in Flash mode, with `claude-code/haiku` refining the structure and writing summaries, through Claude Code and no API key:

```python
from pageindex import PageIndexClient
client = PageIndexClient(
    index={"model": "claude-code/haiku", "storage_path": "pageindex-store",
           "summary_max_words": 65, "summary_concurrency": 3},
    chat="claude-code/haiku",
)
doc_id = client.submit_document("<id>.pdf", mode="flash")["doc_id"]
```

OCR damages headings, so every tree was then edited against its page text: printed headings replaced garbled titles, nesting was made to follow the document, and summaries were rewritten to describe content in at most 60 words. `source/build/validate_tree.py` checks ids, page bounds, nesting and that every page sits in a leaf.

## Limits

The text is machine OCR of old scans. It has errors, and it leaves out handwriting, stamps, drawings, tables laid out as images and anything redacted. Summaries are paraphrases written to help navigation. For anything that matters, read the page image or the official PDF. If a leaf disagrees with the page, the page wins: open a pull request that fixes the leaf.
