"""Prepare logo: clean transparency box, tight crop, keep original art."""

from __future__ import annotations

from collections import deque
from pathlib import Path

from PIL import Image


def flood_remove_background(image: Image.Image, *, threshold: int = 46, saturation_min: int = 30) -> Image.Image:
    rgba = image.convert("RGBA")
    pixels = rgba.load()
    width, height = rgba.size
    visited = [[False] * width for _ in range(height)]
    queue: deque[tuple[int, int]] = deque()

    for x in range(width):
        queue.append((x, 0))
        queue.append((x, height - 1))
    for y in range(height):
        queue.append((0, y))
        queue.append((width - 1, y))

    while queue:
        x, y = queue.popleft()
        if x < 0 or y < 0 or x >= width or y >= height or visited[y][x]:
            continue

        r, g, b, _ = pixels[x, y]
        luminance = max(r, g, b)
        saturation = max(r, g, b) - min(r, g, b)
        if luminance > threshold or saturation > saturation_min:
            continue

        visited[y][x] = True
        pixels[x, y] = (r, g, b, 0)
        queue.append((x + 1, y))
        queue.append((x - 1, y))
        queue.append((x, y + 1))
        queue.append((x, y - 1))

    return rgba


def clean_transparency(image: Image.Image) -> Image.Image:
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

            if luminance < 95 and saturation < 52:
                pixels[x, y] = (0, 0, 0, 0)
                continue

            if luminance < 120 and saturation < 34:
                factor = max(0.0, min(1.0, (luminance - 55) / 65))
                pixels[x, y] = (r, g, b, int(a * factor))

    return rgba


def crop_bright_content(image: Image.Image, *, min_lum: int = 68, pad: int = 8) -> Image.Image:
    rgba = image.convert("RGBA")
    width, height = rgba.size
    pixels = rgba.load()

    min_x, min_y = width, height
    max_x, max_y = 0, 0

    for y in range(height):
        for x in range(width):
            r, g, b, a = pixels[x, y]
            if a < 20:
                continue
            if max(r, g, b) < min_lum:
                continue
            min_x = min(min_x, x)
            min_y = min(min_y, y)
            max_x = max(max_x, x)
            max_y = max(max_y, y)

    if max_x <= min_x or max_y <= min_y:
        return image.getbbox() and image.crop(image.getbbox()) or image

    return rgba.crop(
        (
            max(0, min_x - pad),
            max(0, min_y - pad),
            min(width, max_x + pad + 1),
            min(height, max_y + pad + 1),
        )
    )


def make_icon(full: Image.Image) -> Image.Image:
    width, height = full.size
    top = full.crop((0, 0, width, int(height * 0.62)))
    top = crop_bright_content(top, min_lum=60, pad=6)
    bbox = top.getbbox()
    if not bbox:
        return top

    emblem = top.crop(bbox)
    side = max(emblem.size)
    square = Image.new("RGBA", (side, side), (0, 0, 0, 0))
    square.paste(emblem, ((side - emblem.width) // 2, (side - emblem.height) // 2), emblem)
    return square


def main() -> None:
    public = Path(__file__).resolve().parents[1] / "public"
    source = Image.open(public / "logo-v2-source.png")
    logo = flood_remove_background(source)
    logo = clean_transparency(logo)
    logo = crop_bright_content(logo, min_lum=68, pad=10)
    icon = make_icon(logo)

    logo.save(public / "logo-v2.png", optimize=True)
    icon.save(public / "logo-icon-v2.png", optimize=True)
    print("saved", logo.size)


if __name__ == "__main__":
    main()
