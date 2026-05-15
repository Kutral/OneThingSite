<div align="center">

<img src="./public/assets/brain-dump-icon.webp" width="120" alt="OneThing Logo" />

# 🌌 OneThing Site

**The public launch surface for OneThing, Essara's local-first Android focus app.**

*When the list is too loud: brain dump the noise, choose one real task, break it into tiny next steps, then start a calmer focus session.*

[![Website](https://img.shields.io/badge/Website-OneThing-black?style=for-the-badge&logo=googlechrome&logoColor=white)](https://kutral.github.io/OneThingSite/)
[![Essara](https://img.shields.io/badge/Essara-Launch_Page-black?style=for-the-badge&logo=rocket&logoColor=white)](https://essara.space/onething)
[![Google Play](https://img.shields.io/badge/Google_Play-Available_Now-black?style=for-the-badge&logo=googleplay&logoColor=white)](https://play.google.com/store/apps/details?id=com.essara.onething)

</div>

---

## ✨ Overview

This repository holds the cinematic, high-performance landing page for the **OneThing** app. It's built to capture the calm, focused essence of the app through a dark, quiet visual language.

### 🚀 What This Site Ships

- **Cinematic Landing Page:** Built with React + Vite + TypeScript + Tailwind CSS.
- **Privacy Policy:** A matching dark, warm-cream page at `privacy.html`.
- **Local Assets:** All media (videos and images) are served locally under `public/assets/` for maximum performance.
- **SEO Optimized:** Canonical tags, robots.txt, sitemap, Open Graph, Twitter cards, app JSON-LD, and Google Search Console verification.
- **Comprehensive Footer:** Link map spanning product, launch, trust, and build surfaces.
- **Automated CI/CD:** GitHub Actions workflow builds the `dist/` folder and deploys it effortlessly to GitHub Pages.

---

## 🎨 Design System

The visual system is intentionally **dark, quiet, and cinematic**.

| Element | Description |
| :--- | :--- |
| **Background** | True black page background for deep contrast. |
| **Primary Text** | Warm cream (`#E1E0CC`) for reduced eye strain. |
| **Accent Color** | Tailwind primary accent (`#DEDBC8`). |
| **Typography** | *Almarai* for the app UI, paired with *Instrument Serif* italic for expressive emphasis. |
| **Media** | Local MP4 hero media with subtle SVG noise overlays. |
| **Animation** | Framer Motion powers word reveals, card entrances, and scroll-linked text opacity. |

---

## 💻 Local Development

Get up and running locally in seconds.

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev
```

The local dev server will be available at: [http://127.0.0.1:5173/](http://127.0.0.1:5173/)

---

## 🏗️ Production Build

To test the production build locally:

```bash
npm run build
```

> **Note:** Vite is configured to build with the `/OneThingSite/` base path to ensure all assets route correctly on GitHub Pages.

---

## 📦 Downloaded Assets

All template assets are bundled locally. No external media dependencies are required during render.

| Local File | Source Role |
| :--- | :--- |
| 🎥 `onething-hero-cinematic.mp4` | Home and privacy hero background video |
| 🎥 `onething-focus-canvas.mp4` | Feature video card background |
| 🖼️ `brain-dump-icon.webp` | Brain Dump feature image |
| 🖼️ `smart-breakdown-icon.webp` | Smart Breakdown feature image |
| 🖼️ `focus-session-icon.webp` | Focus Session feature image |

---

## 🚀 Deployment

Deployment is fully automated via `.github/workflows/deploy.yml`.

On every push to the `main` branch, GitHub Actions:
1. Installs dependencies (`npm ci`)
2. Builds the project (`npm run build`)
3. Uploads the `dist/` directory as a Pages artifact
4. Publishes directly to GitHub Pages

---

## 🔗 Public URLs

| Resource | URL |
| :--- | :--- |
| **GitHub Pages Home** | [kutral.github.io/OneThingSite](https://kutral.github.io/OneThingSite/) |
| **Privacy Policy** | [privacy.html](https://kutral.github.io/OneThingSite/privacy.html) |
| **Essara Launch Page** | [essara.space/onething](https://essara.space/onething) |
| **Google Play Listing** | [com.essara.onething](https://play.google.com/store/apps/details?id=com.essara.onething) |
| **Repository** | [Kutral/OneThingSite](https://github.com/Kutral/OneThingSite) |

---

<div align="center">
<i>Built with focus, for focus.</i>
</div>
