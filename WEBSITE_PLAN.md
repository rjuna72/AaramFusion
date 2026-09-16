# Aaram Fusion — website plan

Planning completed after PROJECT_RESEARCH.md, 16 September 2026. This is an original proposed visual identity, not a reproduction of verified brand guidelines.

## Experience and identity

A neighbourhood café website with an editorial layout: oversized expressive serif headlines, compact sans-serif navigation, rich espresso panels, warm white space and a sparing yellow accent. Food and clear next steps lead. No fabricated Indian positioning, heritage story, reviews or popularity claims.

Within the first screen: Aaram Fusion name; café/breakfast/lunch/coffee positioning; Rochedale; a concise invitation; View menu and Find us actions. The address remains easy to find. Do not promise dining services, booking, accessibility facilities or exact hours without evidence.

## Sitemap and navigation

- `/` — Home: introduction and routes into menu/location.
- `/menu/` — Menu: accessible, grouped, price-free preview of items from the public Aaram café listing, plus external full-menu/order link.
- `/visit/` — Visit & contact: address, directions, hours status, contact status, ordering link and useful questions.
- `/404.html` — helpful recovery to home/menu.
- `/sitemap.xml`, `/robots.txt` — generated metadata routes.

Persistent desktop navigation: Menu, Visit & contact, View ordering options. Mobile: visible wordmark, accessible disclosure button, expanded nav with the same destinations; bottom Menu / Directions bar with safe-area padding. Current page marked. No fake reservation form, checkout or telephone link.

## Homepage sequence

1. Slim location line and typographic wordmark/navigation.
2. Two-column hero: `Make time for a good feed.`; supporting café food/location copy; menu CTA. Large local food photograph with an honest illustrative caption.
3. Compact menu introduction with numbered breakfast / lunch / coffee rows and route links. A few representative dishes, no prices or ratings.
4. Espresso-coloured coffee/editorial section with a second illustrative image; concise original copy, no invented backstory.
5. Strong location block: listed street address, directions, visit details; no invented map diagram.
6. Footer: name, address, routes, research-based content note and photo credits.

## Menu experience

Readable HTML, not a screenshot/PDF. Three anchor groups: Breakfast, Lunch & sweets, Coffee. Six representative sourced dish names, brief original summaries only where supported. A visible note explains that this is a public-listing preview, availability can change, and the external platform holds current selection/pricing. Group links work without JavaScript. No dietary filters or allergy badges without reliable recipe information. Allergen question directs customers to confirm directly before ordering; no safety guarantees.

## Visit/contact experience

Address-based Google Maps directions. Display restaurant hours as awaiting confirmation rather than conflating delivery windows with dine-in hours. Explain that a current direct number/email is not yet verified; do not substitute neighbouring or predecessor contact details. External Aaram café ordering link is labelled as Uber Eats; service-area availability is determined there. FAQ uses native details/summary and only evidence-supported answers.

## Visual system

- Colours: espresso `#28231e`, warm white `#fbf9f3`, yellow `#efc84a`, muted ink `#62594f`, borders `#d9d2c5`. Confirm contrast in QA.
- Typography: self-hosted Fraunces for headings/wordmark and DM Sans for body, under their packaged open font licenses; system fallbacks. Responsive display 52–104px; 16–18px body; labels 14px minimum.
- Layout: 1280px content ceiling; desktop 48–64px gutters, mobile 20px; 8px spacing basis; substantial 72–112px section breaks; slim rules and open rows instead of a card grid.
- Rectangular photos and buttons, minimal corner radius, no glass effects or gradients. Original wordmark is text, not an invented official logo.
- Small hover shifts/underlines only, ~150ms transitions; reduced-motion support; no entrance animation delaying content or autoplay media.

## Imagery and rights

Two locally stored licensed photographs as clearly captioned illustrative placeholders (food and coffee). Source/license record in IMAGE_ASSETS.md. Never claim stock images depict Aaram dishes or interiors. Central asset data stores captions, alt text, sources and crops. Use responsive WebP outputs, explicit dimensions, hero eager loading, later image lazy loading. No hotlinking. Replace with licensed official photos when supplied. Do not create a fictitious venue gallery/about-photo section.

## Mobile and responsive behaviour

Mobile first at 360–430px: hero text above photo, readable menu lists, 44px+ controls, no horizontal page overflow. Desktop hero offset columns and larger type; menu groups use split headings/content. Intermediate widths collapse before copy becomes cramped. Nav closes on selection, Escape and route changes; focus stays predictable. Sticky UI must not obscure focused elements, anchors or the footer. Test 320, 390, 768 and 1440px plus 200% text/zoom behaviour where tooling supports it.

## Accessibility

Semantic header/nav/main/footer, one h1 per page, logical heading order, skip link, visible focus, meaningful link labels, native links/buttons/details, aria-expanded and aria-controls on navigation. Decorative arrows hidden from assistive technology. Real alt text describes images and explicitly identifies illustrative stock where appropriate. No colour-only meaning. Aim at WCAG AA contrast; run automated accessibility and manual keyboard checks, report limitations rather than claiming certification.

## SEO and local SEO

Unique titles/descriptions for Home/Menu/Visit; Open Graph title, description, locale and site name. No invented production domain. Use a validated SITE_URL environment value for canonical URLs, sitemap and schema URL fields. A preview stays noindex and robots disallow by default; explicit production configuration enables indexing after content confirmation. Restaurant structured data includes only name/address, supported café cuisine and menu URL, not invented telephone, ratings, prices or opening hours. Add confirmed official profiles only later.

Use Aaram Fusion, Aaram Fusion Rochedale, café and restaurant Rochedale naturally. Suggested Indian keywords are deferred until cuisine is verified. Maintain consistent address data in one file; owner should align it with their Google Business Profile before launch.

## Implementation architecture

Real Next.js App Router + TypeScript + modern React. Static export (`out/`) for a fast portable site; plain CSS tokens/components suit the small scope better than a UI library. Use server components by default, client code only for mobile nav. Shared Header, Footer, LinkButton, photo and location components. Central business/menu/assets data. No backend, tracking, booking store or invented form processing.

Next.js official installation/static-export docs consulted. Respect Headroom, keep proxy settings unchanged. The user-selected checkout is C:\Users\Arjun\Downloads\AaramFusion. Use npm.cmd on this Windows environment. Pin installed versions in package-lock.json.

## Verification and commits

Research: inspect evidence/uncertainties, commit (done). Plan: check every requested design/SEO topic and facts policy, commit before code. Build: typecheck, lint, production export, route/link/metadata checks and dependency audit. Browser QA: inspect desktop/mobile screenshots and menu, navigation, directions, FAQs, keyboard and overflow; correct defects; run appropriate checks after fixes. Save a QA_REPORT.md with actual results and remaining launch tasks. Use meaningful implementation/fix commits and leave Git clean. Provide README with local run/build and editing instructions.

## Phase verification

All requested planning areas covered; no customer-facing unverifiable claims required by layout; pages and CTAs have real destinations; uncertain business facts and imagery are labelled. Documentation phase has no executable build/tests. Ready for implementation.
