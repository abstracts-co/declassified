# Research brief: a/declassified, United States

We are building a/declassified, a community on Abstracts for exploring files that governments have declassified or officially released. The first country is the United States. The About page is an interactive 3D explorer where people open documents, photos, videos and audio by topic. Agents search the documents through PageIndex trees.

## What counts
- Only material a US government body has declassified or officially released (agencies, presidential libraries, National Archives, Congress, courts ordering release). It must be a US government work (public domain) or explicitly public domain.
- No leaks (Snowden, WikiLeaks, Discord leaks), nothing still classified, nothing about the Epstein case, no gore or autopsy material, no private people's personal data beyond what the release itself shows.
- No copyrighted media (the Zapruder film is copyrighted: don't use it).

## What makes a good item
- Interesting to a curious person scrolling: famous, strange, surprising, beautiful, or iconic. Prioritise the files people actually talk about.
- A mix of types per topic: documents (PDF), images (photos), videos and audio where they exist. At least one non-document item per topic if one exists.
- Documents at most about 300 pages (if a release is bigger, pick the most interesting part, e.g. part 1 of an FBI file).

## Downloads must work from this machine
Verify every file with curl from this machine (`curl -sL -o FILE -w '%{http_code} %{content_type} %{size_download}' URL`). These hosts work: archives.gov (incl. /files/...), archive.org (/download/<identifier>/<file>), upload.wikimedia.org and commons.wikimedia.org (use the Commons API to find original file URLs), nixonlibrary.gov, eisenhowerlibrary.gov, trumanlibrary.gov, lbjlibrary.org, govinfo.gov, osti.gov, loc.gov, nasa.gov, history.state.gov, nsarchive.gwu.edu, usgs.gov.
These block scripts: cia.gov PDFs, vault.fbi.gov, defense.gov/media.defense.gov, dni.gov, aaro.mil, nro.gov, nsa.gov, jfklibrary.org, intelligence.senate.gov. For those, keep the official page as `source` and download the identical file from a mirror (archive.org is best; Commons second). Note the mirror in `file`.
Do not use the GitHub API or `gh` (rate limit is shared).

Download each verified file into `~/Work/abstracts-drafts/declassified/raw/<id>/` (keep the original filename; one file per item; PDFs at most 150 MB, videos at most 400 MB, images at most 60 MB). For PDFs record `pages` with `pdfinfo`. For video/audio record `duration` in seconds with `ffprobe`. For images record pixel `width`/`height` (`ffprobe` works on images too).

## Item fields
- `id`: lowercase kebab, unique, starts with the topic, e.g. `ufo-gimbal-video`.
- `title`: short display title, at most 40 characters, the name people know it by ("Gimbal", "Analysis and Assessment of Gateway Process", "Operation Northwoods").
- `type`: document | image | video | audio
- `date`: date of the original document/event, ISO (YYYY, YYYY-MM or YYYY-MM-DD).
- `released`: when it was declassified or officially released, same format.
- `agency`: originating body, short ("CIA", "FBI", "US Navy", "US Army", "Joint Chiefs of Staff", "NASA", "White House").
- `summary`: one or two plain sentences on what it is and why it matters. Factual, no hype, no taglines.
- `source`: the official page for the item (agency page, archives.gov page, library page).
- `file`: the direct download URL you verified.
- `file_name`: the local filename under raw/<id>/.
- `bytes`, `pages` / `duration` / `width`+`height` as applicable.
- `credit`: who made it ("U.S. Navy", "Central Intelligence Agency").
- `license`: e.g. "US government work, public domain".
- `facts`: 2-4 key claims in the summary/date/released fields, each with a URL that supports it.
