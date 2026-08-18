"""Clean emblem: remove dark halo and export header assets."""

from __future__ import annotations

from pathlib import Path

from PIL import Image


def remove_dark_halo(image: Image.Image) -> Image.Image:
    rgba = image.convert("RGBA")
    pixels = rgba.load()
    width, height = rgba.size

    for y in range(height):
        for x in range(width):
            r, g, b, a = pixels[x, y]
            if a == 0:
                continue

            luminance = max(r, g, b)
            saturation = max(r, g, b) - min(r, g, b)

            if luminance < 70 and saturation < 42:
                pixels[x, y] = (0, 0, 0, 0)
                continue

            if luminance < 95 and saturation < 36:
                factor = max(0.0, min(1.0, (luminance - 45) / 50))
                pixels[x, y] = (r, g, b, int(a * factor))

    return rgba


def crop_bright_bbox(image: Image.Image, *, min_lum: int = 48) -> Image.Image:
    rgba = image.convert("RGBA")
    width, height = rgba.size
    pixels = rgba.load()

    min_x, min_y = width, height
    max_x, max_y = 0, 0

    for y in range(height):
        for x in range(width):
            r, g, b, a = pixels[x, y]
            if a < 12:
                continue
            if max(r, g, b) < min_lum:
                continue
            min_x = min(min_x, x)
            min_y = min(min_y, y)
            max_x = max(max_x, x)
            max_y = max(max_y, y)

    if max_x <= min_x or max_y <= min_y:
        return rgba

    pad = 8
    box = (
        max(0, min_x - pad),
        max(0, min_y - pad),
        min(width, max_x + pad + 1),
        min(height, max_y + pad + 1),
    )
    return rgba.crop(box)


def main() -> None:
    public = Path(__file__).resolve().parents[1] / "public"
    source = public / "logo-v2-source.png"
    icon_out = public / "logo-icon-v2.png"

    full = Image.open(source).convert("RGBA")
    emblem = full.crop((0, 0, full.width, int(full.height * 0.58)))
    cleaned = remove_dark_halo(emblem)
    cleaned = crop_bright_bbox(cleaned)
    side = max(cleaned.size)
    square = Image.new("RGBA", (side, side), (0, 0, 0, 0))
    offset = ((side - cleaned.width) // 2, (side - cleaned.height) // 2)
    square.paste(cleaned, offset, cleaned)
    square.save(icon_out, optimize=True)
    print("saved", icon_out, square.size)


if __name__ == "__main__":
    main()
