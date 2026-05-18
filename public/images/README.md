# Image assets

Drop real Artheon project photography here using the filenames below. Any file
present at the expected path will be rendered automatically — when the file is
absent, the site falls back to a calm material-tone placeholder so the layout
stays intact.

**Do not use stock photography as if it were completed Artheon work.** If a real
project image is not yet available, leave the file out: the placeholder will
remain visible (with a "replace with real Artheon project image" label) and
nothing on the page will be presented as completed Artheon work.

## Expected filenames

### Hero & page-level

| Path                                        | Used on                       | Suggested ratio | Tone                |
| ------------------------------------------- | ----------------------------- | --------------- | ------------------- |
| `/images/bathroom-hero.jpg`                 | Homepage hero (right column)  | 4:5             | Warm, lit, moody    |
| `/images/renovations-hero.jpg`              | Renovations page hero         | 21:9            | Wide, atmospheric   |

### Packages

| Path                                              | Used on                       | Suggested ratio | Notes                                       |
| ------------------------------------------------- | ----------------------------- | --------------- | ------------------------------------------- |
| `/images/package-essential-refresh.jpg`           | Package card header           | 16:9            | Clean modern, like-for-like refresh         |
| `/images/package-signature-renovation.jpg`        | Package card header           | 16:9            | Warm British modern, premium finish         |

### Materials moodboard (homepage + renovations page)

| Path                                              | Subject                                    | Suggested ratio |
| ------------------------------------------------- | ------------------------------------------ | --------------- |
| `/images/material-tiles.jpg`                      | Large-format tiles                         | 3:4             |
| `/images/material-brass.jpg`                      | Brushed brass / chrome fittings            | 3:4             |
| `/images/material-fluted-glass.jpg`               | Fluted glass screen / panel                | 3:4             |
| `/images/material-stone.jpg`                      | Stone-effect / travertine finish           | 3:4             |
| `/images/material-vanity.jpg`                     | Vanity unit detail                         | 3:4             |
| `/images/material-led-niche.jpg`                  | LED niche lighting                         | 3:4             |
| `/images/material-shower-screen.jpg`              | Modern shower screen                       | 3:4             |
| `/images/material-palette.jpg`                    | British-modern palette / colour direction  | 3:4             |

### Survey process (homepage + survey page)

| Path                              | Stage      |
| --------------------------------- | ---------- |
| `/images/process-measure.jpg`     | Measure    |
| `/images/process-inspect.jpg`     | Inspect    |
| `/images/process-document.jpg`    | Document   |
| `/images/process-recommend.jpg`   | Recommend  |
| `/images/process-quote.jpg`       | Quote      |

## Format & optimisation

- Prefer JPEG for photography (80–85 quality) or AVIF if your tooling supports it
- Sizes: aim for 1600–2000 px on the long edge — Next.js will not resample
  these because they are loaded via plain `<img>` for now; resize before
  committing
- Once the photo set is finalised, swap `ImagePlaceholder` to `next/image` for
  responsive `srcset` and automatic optimisation
