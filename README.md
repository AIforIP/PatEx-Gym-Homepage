# PatEx-Gym Homepage

Independent, static academic project website. React 19, TypeScript, Vite, Lucide icons, locally bundled DM Sans, Georgia headings. All artwork is lightweight inline SVG; no backend, trackers, or external font requests.

## Development

Requires Node.js 22.20+ (or a compatible supported Node version).

```bash
npm ci
npm run dev -- --port 5173
```

On this server a project-local Node runtime is available:
```bash
cd /home/cxy/PatEx-Gym-Homepage
export PATH="$PWD/.tools/node-v22.20.0-linux-x64/bin:$PATH"
npm run dev -- --port 5173
```

## Production

```bash
npm run build
npm run preview -- --port 4173
```

Deploy the contents of `dist/` to any static host (Nginx, GitHub Pages, Cloudflare Pages, etc.). No server-side runtime required. Vite's relative base supports subdirectory hosting. The preview command is for review, not a production service manager.

## Visual checks

```bash
PLAYWRIGHT_BROWSERS_PATH="$PWD/.tools/browsers" npx playwright install chromium
PLAYWRIGHT_BROWSERS_PATH="$PWD/.tools/browsers" npm run test:visual
```

Start preview on port 4173 first. Tests use Chromium at 1440, 375, and 768 pixels; check overflow, anchors, JavaScript errors, menu open/close, Escape focus restoration and section navigation. Screenshots and JSON results are written to `qa/` (ignored by Git).

## Structure

- `src/App.tsx`: page sections, release-aware content, navigation.
- `src/Illustrations.tsx`: accessible hero SVG and framework illustrations.
- `src/styles.css`: design tokens, editorial layout, responsive states.
- `public/favicon.svg`: project favicon.
- `docs/`: approved design, implementation plan, progress and QA notes.
- `scripts/visual-check.mjs`: repeatable browser checks.
- `dist/`: generated static deployment files.

## Content sources and follow-ups

Verified against the read-only adjacent `/home/cxy/PatEx-Gym/README.md` and `src/harnesses/codex/patent_mcp.py` on 2026-10-16.
- Released: 100-task subset, per-task verifiers, Codex Harness, Docker image, evaluation code.
- 1,000 tasks: full research benchmark; only 100 are in the public release.
- Patent-1M / Paper-52K: to be released; no fabricated dates.
- PASS / PatEx-Agent (4B): research components; public release not announced.
- Paper URL, BibTeX, public corpora URLs, and future leaderboard: add only after confirmed release.
- Evaluation submissions use the published author email, not a fictitious portal.
- Formal metrics remain defined by the released verifiers, not by the site's capability categories.
- Configure production domain, HTTPS and hosting separately; no existing server configuration is modified.
