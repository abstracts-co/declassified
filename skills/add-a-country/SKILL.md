---
name: add-a-country
description: Start a new country's collection in a/declassified, from finding its official archives to its first topics in the explorer. Use when a member wants files from another country, such as "add the UK's National Archives UFO files", "start a France section" or "what has Australia declassified?".
---

# Add a country

A country is a set of topics, each holding files that country's government declassified or released.

1. **Find the official sources.** The national archive, the intelligence and defence agencies' release pages, parliament and the courts. Write them down with what each one releases and whether it allows downloads. Many countries publish in their own language: keep the original title and add an English one.
2. **Pick the first topics.** Choose what people would most want to open: famous cases, strange projects, things the country is known for. Six to eight files each, with documents, photos, films and recordings mixed where they exist.
3. **Research each file** as in [add-a-file](../add-a-file/SKILL.md), with the country code (ISO 3166-1 alpha-2, lowercase) in its data folder: `<country>/<topic>/<id>/`.
4. **Give each topic its orb.** Topics live in `source/build/topics.json`: a `name`, four `orb` colours (crevice, deep, body, highlight) and three `grad` colours (top, middle, bottom of the background inside the topic). Pick colours that suit the subject and stay readable with white text at the bottom. Then pick what the orb shows: one striking subject from the topic's own files, seen through the glass. `source/build/orbs/BRIEF.md` says how to cut it.
5. **Add the country** to `countries` in the catalog. With more than one country, the flag button in the explorer becomes a switcher.
6. Build, check at 360 px and 1200 px wide, show the member, and publish as in [docs/publish.md](../../docs/publish.md).
