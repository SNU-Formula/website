# SNU FORMULA Website

Local-first bilingual website for SNU FORMULA.

## Run locally

From this directory:

```bash
python3 -m http.server 4173
```

Then open [http://localhost:4173](http://localhost:4173).

## Pages

- `/` — Home, moving partner band, covered vehicle preview, Road to 2028
- `/about/` — Team identity and Formula SAE / Formula Student / FSG context
- `/vehicle/` — Covered vehicle preview, public technical targets, validation path
- `/team/` — Manager / Engineering / Business teams, switchable roster per team
- `/partners/` — Partner network and partnership model
- `/join/` — Three teams, recruiting status, FAQ, contact
There is intentionally no Updates page. Join and Contact share one page.

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
