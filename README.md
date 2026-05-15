# OneThing Site

The public launch surface for **OneThing**, Essara's local-first Android focus app.

OneThing is for the moment when the list is too loud: brain dump the noise, choose one real task, break it into tiny next steps, then start a calmer focus session.

## Public URLs

| Surface | URL |
| --- | --- |
| GitHub Pages home | `https://kutral.github.io/OneThingSite/` |
| Privacy policy | `https://kutral.github.io/OneThingSite/privacy.html` |
| Essara launch page | `https://essara.space/onething` |
| Google Play listing | `https://play.google.com/store/apps/details?id=com.essara.onething` |
| Repository | `https://github.com/Kutral/OneThingSite` |

## What This Site Ships

- A cinematic React + Vite + TypeScript + Tailwind landing page.
- A matching dark, warm-cream privacy policy page at `privacy.html`.
- Downloaded local video and image assets under `public/assets/`.
- SEO essentials: canonical tags, robots, sitemap, Open Graph, Twitter tags, app JSON-LD, and Google Search Console verification.
- A footer link map across product, launch, trust, and build surfaces.
- A GitHub Pages Actions workflow that builds `dist/` and deploys it.

## Design System

The visual system is dark, quiet, and cinematic:

- True black page background.
- Warm cream primary text: `#E1E0CC`.
- Tailwind primary accent: `#DEDBC8`.
- Almarai for the app UI and Instrument Serif italic for expressive emphasis.
- Local MP4 hero media with subtle SVG noise overlays.
- Framer Motion word reveals, card entrances, and scroll-linked text opacity.

## Local Development

```bash
npm install
npm run dev
```

The local dev server opens at:

```text
http://127.0.0.1:5173/
```

## Production Build

```bash
npm run build
```

Vite builds with the `/OneThingSite/` base path so the output works correctly on GitHub Pages.

## Deployment

Deployment is handled by `.github/workflows/deploy.yml`.

On every push to `main`, GitHub Actions:

1. Installs dependencies with `npm ci`.
2. Runs `npm run build`.
3. Uploads `dist/` as the Pages artifact.
4. Publishes it through GitHub Pages.

## Downloaded Assets

All supplied template assets were downloaded and saved locally so the site does not depend on remote media during render.

| Local file | Source role |
| --- | --- |
| `public/assets/onething-hero-cinematic.mp4` | Home and privacy hero background video |
| `public/assets/onething-focus-canvas.mp4` | Feature video card background |
| `public/assets/brain-dump-icon.webp` | Brain Dump feature image |
| `public/assets/smart-breakdown-icon.webp` | Smart Breakdown feature image |
| `public/assets/focus-session-icon.webp` | Focus Session feature image |

## Search Console

The homepage includes:

```html
<meta name="google-site-verification" content="Tz3n94e3ORcERVuui1jckm4iOTUuqwOV_d4Sq-1WSCo" />
```

## Privacy Page

`privacy.html` is intentionally standalone, crawlable, and Play Store friendly. It mirrors the home page's dark cinematic theme while keeping the policy text direct and readable.
