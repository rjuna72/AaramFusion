# Aaram Fusion demo

Next.js, TypeScript and React demo with Home, Menu and Visit pages.

## View locally

```powershell
cd C:\Users\Arjun\Downloads\AaramFusion
npm.cmd install
npm.cmd run dev
```

Open http://127.0.0.1:3000. The current session has already started this server.

## Status

Research and plan completed before implementation; see PROJECT_RESEARCH.md and WEBSITE_PLAN.md. This is a demo, not a production launch. The user requested an immediate local handoff during QA.

Completed checks: production export generated; TypeScript and lint passed before the final small headline adjustment; 2 export/metadata tests passed; 12 route/viewport accessibility checks and a keyboard/reduced-motion/zoom/404 test passed. FAQ interaction test had a selector mismatch, now corrected but not rerun. Screenshots in qa were visually inspected; a mobile headline spacing issue was corrected after capture. Production dependency audit found 0 vulnerabilities.

No public deployment completed. A private Sites project was registered but remains unpublished. Indexing is disabled. The connected browser tool was unavailable; open the local link manually.

## Content

Public listings support the café identity and 664 Miles Platting Road, Rochedale QLD 4123. Indian positioning, direct contact details, venue hours, full menu/prices and official imagery need confirmation. Photos are licensed illustrative placeholders, not Aaram photographs. See IMAGE_ASSETS.md.

Edit business/menu/photo data in src/data/business.ts and visual styles in src/styles/site.css. Configure a real SITE_URL and confirm all business content before enabling SITE_INDEXABLE for a future launch.

## Checks

`npm.cmd run lint`, `npm.cmd run typecheck`, `npm.cmd run build`, `npm.cmd test`, `npm.cmd run test:browser`.

Browser tests use installed Microsoft Edge and the static export. Run build first. `npm.cmd run preview` serves that export at http://127.0.0.1:3100. The export predates the final demo adjustment; the development preview reflects it immediately.
