# Orb subject brief

Each topic in a/declassified is a glass ball on the home screen. Inside the ball we show one subject from that topic's own declassified media, seen through a refracting glass lens (magnified in the middle, compressed and mirrored toward the rim, rainbow fringes at the edge). The design reference is a time-lapse of a pink flower opening inside a glass ball: one clear, organic subject that fills the frame and moves slowly. The subject is also colour-graded to the topic's palette in the shader, so its tonal range (dark, mid, light shapes) matters more than its colour.

Pick, per topic, the single most striking subject that reads at small size: one object or event, centred, filling most of the square, with strong light/dark shapes and ideally slow motion (something opening, rising, turning, flying, drifting). Avoid text, captions, HUD numbers, timecodes, film leader, borders and logos inside the crop. Avoid gore, bodies or funerals.

Candidates are the topic's videos and photos, and also pages of its documents (drawings, photos, diagrams). Paths:
- original downloads: `raw/<id>/` (use these for best quality)
- processed: `out/data/us/<topic>/<id>/` (`video.mp4`, `full.webp`, `p/NNN.webp` page images of documents, first 40 pages)
- facts: `research/<topic>.json`, catalog: `out/data/catalog.json`

## Output (in `/home/alex-pc/Work/abstracts-drafts/declassified/`)

1. `out/data/us/<topic>/orb.webp`: a square still, 1024x1024 if the source allows (else the largest square it supports, at least 600), quality ~82, at most 250 KB. For video subjects it is the most representative frame of the loop.
2. For a video subject only, `out/data/us/<topic>/orb.mp4`: a square 720x720 loop, 6 to 10 seconds, no audio, H.264, at most 1.5 MB, that loops without a visible jump. Use this recipe (S start, D duration, crop w:h:x:y in source pixels, square):

```
ffmpeg -y -ss S -t D+1 -i SRC -filter_complex "[0:v]crop=W:H:X:Y,scale=720:720,setsar=1,split[a][b];[a]trim=1:D+1,setpts=PTS-STARTPTS[m];[b]trim=0:1,setpts=PTS-STARTPTS[h];[m][h]xfade=transition=fade:duration=1:offset=D-1,format=yuv420p" -an -c:v libx264 -preset slow -crf 26 -movflags +faststart out/data/us/<topic>/orb.mp4
```
   Raise -crf if it's over 1.5 MB.
3. `build/orbs/<topic>.json`: `{"topic", "item": "<id>", "kind": "video"|"image", "source": "<path used>", "start": S|null, "duration": D|null, "crop": [x,y,w,h], "motion": "loop"|"push"|"drift", "why": "one sentence"}`. Use `push` for a still that should slowly zoom in (like a flower opening) and `drift` for a still that should slowly pan or turn.

Look at frames before you choose (`ffmpeg -ss T -i SRC -frames:v 1 -vf scale=480:-1 /tmp/...png` into your own scratch folder, then view them), and look at the final orb.webp and three frames of orb.mp4 before you finish. Delete your scratch files. Don't change anything else.
