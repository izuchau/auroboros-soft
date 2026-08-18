"""Remove dark background from logo PNG, preserving glow edges."""

from __future__ import annotations

import sys
from collections import deque
from pathlib import Path

from PIL import Image


def is_background_pixel(r: int, g: int, b: int, *, threshold: int, saturation_min: int) -> bool:
    luminance = max(r, g, b)
    saturation = max(r, g, b) - min(r, g, b)
    return luminance <= threshold and saturation <= saturation_min


def flood_remove_background(
    image: Image.Image,
    *,
    threshold: int = 48,
    saturation_min: int = 28,
) -> Image.Image:
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
        if not is_background_pixel(r, g, b, threshold=threshold, saturation_min=saturation_min):
            continue

        visited[y][x] = True
        pixels[x, y] = (r, g, b, 0)
        queue.append((x + 1, y))
        queue.append((x - 1, y))
        queue.append((x, y + 1))
        queue.append((x, y - 1))

    return rgba


def soften_dark_fringe(image: Image.Image, *, cutoff: int = 36, fade: int = 24) -> Image.Image:
    pixels = image.load()
    width, height = image.size

    for y in range(height):
        for x in range(width):
            r, g, b, a = pixels[x, y]
            if a == 0:
                continue

            luminance = max(r, g, b)
            if luminance >= cutoff:
                continue

            alpha = int(a * max(0.0, min(1.0, (luminance - (cutoff - fade)) / fade)))
            pixels[x, y] = (r, g, b, alpha)

    return image


def crop_icon(image: Image.Image) -> Image.Image:
    rgba = image.convert("RGBA")
    width, height = rgba.size
    emblem_height = int(height * 0.58)
    emblem = rgba.crop((0, 0, width, emblem_height))

    bbox = emblem.getbbox()
    if not bbox:
        return emblem

    cropped = emblem.crop(bbox)
    side = max(cropped.size)
    square = Image.new("RGBA", (side, side), (0, 0, 0, 0))
    offset = ((side - cropped.width) // 2, (side - cropped.height) // 2)
    square.paste(cropped, offset)
    return square


def process_logo(input_path: Path, output_path: Path, icon_path: Path) -> None:
    source = Image.open(input_path)
    processed = flood_remove_background(source)
    processed = soften_dark_fringe(processed)
    icon = crop_icon(processed)

    output_path.parent.mkdir(parents=True, exist_ok=True)
    processed.save(output_path, optimize=True)
    icon.save(icon_path, optimize=True)


if __name__ == "__main__":
    src = Path(sys.argv[1])
    out = Path(sys.argv[2])
    icon = Path(sys.argv[3])
    process_logo(src, out, icon)
