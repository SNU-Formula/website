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
- `/news/` — Selected press coverage, linked directly to publisher articles
- `/join/` — Recruitment status

Pages are deliberately short: one idea each, nothing that is not confirmed.
The News page distinguishes coverage of SNU FORMULA from SNU industry
collaboration and SNU Solar. Titles and short introductions are written for
this site. Article photographs are included in the local draft; rights and
credits are recorded in `assets/img/news/SOURCES.md`. Permission must be
confirmed before public deployment. Article bodies are not reproduced.

## Sponsorship tiers

The four public tiers are 대표 후원사 / Main Sponsor, 주요 후원사 / Premium
Sponsors, 후원사 / Sponsors, and 협력자 / Supporters. Hyundai is the sole Main
Sponsor. AJIN Industrial, Kolon, Yongsan, and Youngone are Premium Sponsors,
as specified by the user. Amounts and content benefits are internal only.

## Recruitment

The 2026 recruitment is open through 2026-10-18. Notices will be shared on
the official Instagram and Everytime. No application form or link is added;
the existing Instagram and email contacts remain the contact channels.

## Opening animation

The SNU FORMULA wordmark plays over a full-screen veil on the first page view
of a browser session (`sessionStorage`) and on an explicit reload. Navigation
between pages in the same session does not replay it.
It is injected by `assets/site.js`, so visitors without JavaScript and visitors
with `prefers-reduced-motion: reduce` never see it.

## Content and asset rules

- Website imagery is SNU FORMULA-provided, purpose-generated, officially sourced,
  or included with its applicable public license.
- No competitor team photography or vehicle imagery is included.
- The unreleased vehicle uses `vehicle-reveal-cover-v3.png`, a generated teaser
  revised from the user's CAD silhouette with a blunt nose and both wings.
  It represents an unreleased concept rather than a verified finished vehicle.
- Unverified roster and vehicle decisions remain pending. Recruitment status
  and its 2026-10-18 deadline were confirmed by the user.
- Partner marks use the logo files supplied with the SNU FORMULA references.

## Typography

Pretendard Variable, Montserrat, and Michroma are self-hosted in `assets/fonts`,
so Korean glyphs and brand typography remain stable without a font CDN.

- Montserrat / Pretendard: the largest editorial headlines.
- Michroma: SNU FORMULA identity text, section labels, medium display headings,
  tabs, and technical markers.
- Pretendard: Korean and English explanatory copy.
