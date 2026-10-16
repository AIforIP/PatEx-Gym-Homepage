# Visual QA — 2026-10-16

Final visual result: passed for the requested 1440px desktop and 375px mobile layouts.

## Evidence
- Actual Chromium screenshots: qa/1440-full.png, qa/1440-hero.png, qa/1440-framework.png, qa/1440-overview.png; equivalent 375px and 768px captures.
- qa/results.json: no document overflow at 1440, 375, 768; all internal anchors resolve; no page JavaScript exceptions; mobile menu opens, closes, supports Escape focus restoration and closes after section navigation.
- Manually inspected actual desktop Hero in in-app browser and exported screenshots/contact sheet for mobile Hero, desktop/mobile Framework and Highlights.
- Adjusted mobile statistics after observing Paper-52K wrap; fresh screenshots confirm single-line label.
- Section-only screenshots hide the fixed header and skip link during capture to prevent scroll-induced screenshot overlays; full screenshots preserve page rendering.
- Fonts bundled locally; no Google Fonts network dependency.
- TypeScript and Vite production build pass. npm audit reports 0 vulnerabilities.

## Limits
No claim of a comprehensive accessibility audit or live verification of every external GitHub URL. Links use the verified repository and matching local repository paths; no invented paper links. No public domain/HTTPS deployment was configured. Preview is a temporary static server on port 4173.
