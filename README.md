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
- **About page** — welcome copy, quick facts, a "what I do" toolkit grid and a
  "currently" list.
- **Hobbies sub page**
  - *Graphic Design* — photo, write-up, Facebook + TikTok links and a
    horizontal gallery of every graphic work.
  - *Gaming* — photo, write-up and a horizontal scrolling gallery of **5**
    games (Hollow Knight, Dress to Impress, Deltarune, Dressmaker, Genshin
    Impact).
- **Experience sub page** — Megaprints Balayan job, entrepreneurship
  photo booth project and the ICT strand school website, laid out as a
  timeline.
- **Contacts** — Facebook (with profile picture), Gmail, Phone and Discord
  (with profile picture), plus a validated message composer that builds a
  pre-filled `mailto:` link.
- Navigation links grow **10px** and turn from white to pink on hover.
- **Page transitions** — every route fades and lifts in, with staggered
  reveals on card grids.
- **Scroll progress bar** and a **back to top** button.
- **Light / dark theme toggle** — dark is the default look; the light theme
  keeps the brand colours but deepens the pink and yellow for legibility.
- **Responsive** — the sidebar collapses into a drawer on small screens.
- **Accessible** — skip link, labelled controls, keyboard focus rings and
  WCAG AA colour contrast in both themes.

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

Body copy uses a single `--content` ink variable (exposed as `text-content`)
rather than hard-coded white, so the same components render correctly in the
light theme. Opacity modifiers work as usual — `text-content/70`.

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
    shared/                   # page header, gallery, contact form, footer…
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

**Live site:** https://portfolio-ng-makulet.vercel.app
**Repository:** https://github.com/TEMTHERACOON/portfolio-ng-makulet

`vercel.json` rewrites every route to `index.html` so the client-side router
works on refresh. Deploy manually with:

```bash
npx vercel --prod
```

### Auto-deploy on push

Pushing to `main` deploys to production automatically via a local git
`post-push` hook at `.git/hooks/post-push`. It runs `npx vercel --prod --yes`
and skips the deploy when the pushed commit is already live.

```bash
git push origin main   # -> builds and promotes production
```

The hook is local to this clone (`.git/hooks/` is never committed), so each
machine that pushes needs its own copy.

### Enabling the native Vercel Git integration

`npx vercel git connect` fails with *"Failed to connect … Make sure you have
access to the repository"* because the Vercel GitHub App is not installed for
this repository. To switch to upstream Git integration (which also gives
preview deployments for pull requests):

1. Install the Vercel GitHub App on the repo —
   <https://github.com/apps/vercel/installations/new> — and grant it access to
   `portfolio-ng-makulet`.
2. Re-run `npx vercel git connect` in this directory.
3. Remove `.git/hooks/post-push` so the two do not double-deploy.
