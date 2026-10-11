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
News is temporarily removed for the initial public deployment as of
2026-10-12. The homepage cards, desktop/mobile navigation and footer links
are removed; `/news/` and its article photographs are not shipped. The
original page, images and source notes are preserved in Git commit
`38804e5` and in the ignored local folder `references/news-paused/20261012`.
News styles remain available for restoration after image permissions are
confirmed. Card copy distinguishes SNU FORMULA coverage from SNU industry
collaboration and SNU Solar; article bodies are not reproduced.

## Sponsorship tiers

The four tier names are Main Sponsor, Premium Sponsor, Sponsor, and Supporter
in both website languages. Hyundai is the sole Main Sponsor. AJIN Industrial,
Kolon, Yongsan, and Youngone are in the Premium Sponsor tier, as specified by
the user. The public website displays names only; contribution criteria and
detailed benefits are provided separately in the sponsor distribution guides.

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
