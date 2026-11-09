#!/bin/bash
set -euo pipefail
cd "$(dirname "$0")/.."
mkdir -p brand .shots
U=${U:-http://127.0.0.1:8790/index.html}
node build/shot.mjs "$U#shot=logo&t=${LOGO:-mind}" .shots/b-logo.png 512 512 "wait:400" >/dev/null
node build/shot.mjs "$U#shot=banner&t=${BANNER:-mind}" .shots/b-banner.png 1500 500 "wait:4000" >/dev/null
node build/shot.mjs "$U#shot=cover&t=${COVER:-ufo}" .shots/b-cover.png 1200 750 "wait:4000" >/dev/null
python3 - <<'PY'
from PIL import Image
Image.open('.shots/b-logo.png').convert('RGB').resize((512, 512), Image.LANCZOS).save('brand/logo.png', optimize=True)
Image.open('.shots/b-banner.png').convert('RGB').resize((1500, 500), Image.LANCZOS).save('brand/banner.webp', 'WEBP', quality=86, method=6)
Image.open('.shots/b-cover.png').convert('RGB').resize((1200, 750), Image.LANCZOS).save('brand/preview.webp', 'WEBP', quality=86, method=6)
PY
ls -la brand
