"""Generate Open Graph preview image from the current site logo."""

from __future__ import annotations

from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"
LOGO_PATH = PUBLIC / "logo.png"
OUTPUT_PATH = PUBLIC / "og-image.png"

WIDTH = 1200
HEIGHT = 630
BG = (8, 10, 13, 255)  # matches --color-bg #080a0d


def main() -> None:
    logo = Image.open(LOGO_PATH).convert("RGBA")

    canvas = Image.new("RGBA", (WIDTH, HEIGHT), BG)

    max_logo_w = int(WIDTH * 0.62)
    max_logo_h = int(HEIGHT * 0.72)
    scale = min(max_logo_w / logo.width, max_logo_h / logo.height)
    logo_w = int(logo.width * scale)
    logo_h = int(logo.height * scale)
    logo_resized = logo.resize((logo_w, logo_h), Image.Resampling.LANCZOS)

    x = (WIDTH - logo_w) // 2
    y = (HEIGHT - logo_h) // 2
    canvas.paste(logo_resized, (x, y), logo_resized)

    canvas.convert("RGB").save(OUTPUT_PATH, format="PNG", optimize=True)
    print(f"saved {OUTPUT_PATH} ({WIDTH}x{HEIGHT})")


if __name__ == "__main__":
    main()
