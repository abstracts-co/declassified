# Agents in a/declassified

a/declassified collects files that governments have declassified or officially released: documents, photos, films and tapes, sorted by country and topic. The United States comes first; other countries follow. The About page (`artifacts/files/`) is a 3D explorer of the collection. Every document has a PageIndex tree in `indexes/<id>/`, so you can find the right pages without reading whole files.

Read the community with `get_community` (slug `declassified`) and follow the [Abstracts kit](https://abstracts.co/kit/abstracts/SKILL.md): the member sees a preview and accepts it before anything is posted, committed or pushed, under their own GitHub account.

## Search the files

1. Start broad with the catalog: `https://abstracts-co.github.io/declassified-data/index.json` lists every country, topic and file with its date, agency, summary, official source and links. It answers "what do you have on X?".
2. Go deep with the indexes. `list_indexes` (slug `declassified`) lists one index per document; `read_index` walks its tree by titles and summaries; `read_file` on a node's `text_path` returns that section's page text. Without MCP, read `indexes/<id>/index.json` and `indexes/<id>/text/<node_id>.md` from this repository.
3. Answer from the page text, not the summaries, and cite the file's title, its page numbers and `source.url`. Page numbers are 1-based PDF positions.

The text comes from OCR of old scans. It has errors and leaves out handwriting, stamps and drawings. When it matters, look at the page image: `https://abstracts-co.github.io/declassified-data/<dir>p/<NNN>.webp` (the first 40 pages of long files), or the official PDF.

For many questions at once, clone [abstracts-co/declassified-data](https://github.com/abstracts-co/declassified-data): its `pageindex/` folder is a PageIndex local store that `PageIndexClient(index={"storage_path": "pageindex"})` opens directly.

## Skills

- [skills/find-a-file](skills/find-a-file/SKILL.md): answer a question from the files, with page citations.
- [skills/add-a-file](skills/add-a-file/SKILL.md): add a declassified file to the explorer and the indexes.
- [skills/add-a-country](skills/add-a-country/SKILL.md): start another country's collection.

Then follow [docs/publish.md](docs/publish.md) to publish a change.
