# SNU FORMULA Website

Local-first bilingual website for SNU FORMULA.

## Run locally

From this directory:

```bash
python3 -m http.server 4173
```

Then open [http://localhost:4173](http://localhost:4173).

## Pages

- `/` — Hero, moving partner band, covered vehicle teaser
- `/about/` — Formula SAE / Formula Student and the FSG 2028 target
- `/vehicle/` — Covered vehicle teaser
- `/team/` — Manager / Engineering / Business teams, switchable roster per team
- `/partners/` — Partner tiers and institutional partners
- `/join/` — Recruitment status

Pages are deliberately short: one idea each, nothing that is not confirmed.
There is intentionally no Updates page.

## Opening animation

The SNU FORMULA wordmark plays over a full-screen veil on the first page view
of a browser session (`sessionStorage`), then never again until a new session.
It is injected by `assets/site.js`, so visitors without JavaScript and visitors
with `prefers-reduced-motion: reduce` never see it.

## Content and asset rules

- Website imagery is SNU FORMULA-provided, purpose-generated, officially sourced,
  or included with its applicable public license.
- No competitor team photography or vehicle imagery is included.
- The unreleased vehicle is represented by the original covered-vehicle teaser.
- Unverified roster, contact, recruitment, and vehicle decisions remain visibly pending.
- Partner marks use the logo files supplied with the SNU FORMULA references.

## Typography

Pretendard Variable, Montserrat, and Michroma are self-hosted in `assets/fonts`,
so Korean glyphs and brand typography remain stable without a font CDN.

- Montserrat / Pretendard: the largest editorial headlines.
- Michroma: SNU FORMULA identity text, section labels, medium display headings,
  tabs, and technical markers.
- Pretendard: Korean and English explanatory copy.
