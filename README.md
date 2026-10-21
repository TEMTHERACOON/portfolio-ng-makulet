# portfolio-ng-makulet

Personal portfolio of **Itz Kirsten Elmy S. Campoy** — digital artist, graphic
designer and part-time tarpaulin printer.

Built with **Vite + React + TypeScript**, **Tailwind CSS v4** and
**shadcn/ui** (preset `b3wABRft2Y`, `base-maia` style on Base UI).

## Features

- **Side navigation bar** with the sections:
  - `TITLE PAGE`
  - `ABOUT PAGE`
    - `HOBBIES`
    - `EXP`
    - `CONTACT`
- **Title page** — name with the portrait photo on the left side.
- **About page** — welcome copy + quick facts.
- **Hobbies sub page**
  - *Graphic Design* — photo, write-up, Facebook + TikTok links and a
    horizontal gallery of every graphic work.
  - *Gaming* — photo, write-up and a horizontal scrolling gallery of the
    games played (Hollow Knight, Dress to Impress, Deltarune, Dressmaker,
    Genshin Impact, Zenless Zone Zero).
- **Experience sub page** — Megaprints Balayan job, entrepreneurship
  photo booth project and the ICT strand school website.
- **Contacts** — Facebook (with profile picture), Gmail, Phone and Discord
  (with profile picture).
- Navigation links grow **10px** and turn from white to pink on hover.

## Design tokens

| Role | Value |
| --- | --- |
| Background | `#000000` |
| Header | `#9929EA` |
| Content text | `#ffffff` |
| Links | `#ff5fcf` |
| Star / bullets | `#faeb92` |
| Header font | Geist Mono |
| Content font | Roboto |

Tokens live in `src/index.css` as CSS variables (`--background`, `--header`,
`--link`, `--bullet`, …) and are exposed to Tailwind as `bg-background`,
`text-header`, `text-link`, `text-bullet`.

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # type-check + production build
npm run preview  # preview the production build
npm run lint     # eslint
```

## Project structure

```
src/
  App.tsx                     # router + routes
  index.css                   # palette, fonts, custom utilities
  data/portfolio.ts           # all page content in one place
  components/
    layout/                   # shell + side navigation
    pages/                    # title, about, hobbies, experience, contact
    shared/                   # page header, gallery, brand icons
    ui/                       # shadcn/ui components
public/images/                # images (placeholders — swap for real photos)
```

## Swapping in real photos

Every image currently in `public/images/` is an SVG placeholder. Replace the
files with the same names (or update `src/data/portfolio.ts`) to use real
assets:

| File | Used for |
| --- | --- |
| `portrait.svg` | Title page photo |
| `graphic-design.svg` / `gaming.svg` | Hobbies section photos |
| `work-*.svg` | Graphic design gallery |
| `game-*.svg` | Gaming gallery |
| `fb-profile.svg` / `discord-profile.svg` | Contact profile pictures |

Social links live in `src/data/portfolio.ts` — update the Facebook, TikTok
and Discord URLs there.

## Deployment

`vercel.json` rewrites every route to `index.html` so the client-side router
works on refresh. Deploy with:

```bash
npx vercel --prod
```
