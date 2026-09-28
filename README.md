# Tech Engi — landing page (Next.js)

Converted from the original static HTML build into a Next.js App Router
project, styled with Tailwind CSS, animated with GSAP + ScrollTrigger,
smooth-scrolled with Lenis, and using Phosphor icons.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:3000. `npm run build` creates a production build
(this requires internet access once, to fetch the Figtree font from Google
Fonts via `next/font/google`).

## Structure

```
app/
  layout.tsx      – fonts, inner-shadow SVG filters, Lenis + GSAP mount
  page.tsx         – imports and orders every section
  globals.css      – Tailwind layers + shared component classes
                      (glass cards, bento grid, hero tiles, toggle, etc.)
components/
  Header.tsx, Footer.tsx
  Hero.tsx / HeroTiles.tsx     – headline, client/engineer toggle, glass tile grid
  StatsBar.tsx                 – animated counters
  AudienceSection.tsx          – Engineers / Clients / Students cards
  SplitFeature.tsx             – reusable image+copy block (used 3×)
  StudentsSection.tsx
  BuildTypesSection.tsx        – bento grid of project categories
  ProcessSection.tsx           – GSAP-pinned horizontal scroll (5 steps)
  FeaturesTabs.tsx             – tabbed feature showcase
  WorkspaceSection.tsx         – bento app-mockup preview
  TestimonialsSection.tsx
  ResultsSection.tsx           – bento stats
  LeadsSection.tsx             – subscription leads panel (replaces pricing)
  FaqSection.tsx                – native <details>/<summary>, no JS needed
  CtaSection.tsx
  SmoothScroll.tsx             – Lenis, synced to the GSAP ticker
  ScrollAnimations.tsx         – shared reveal-on-scroll / parallax / counters
  gsapClient.ts                – registers the ScrollTrigger plugin once
public/images/
  gyroscope.png, gripper.png, gripper-cube.png, constellation.png, modules.png
```

## Content to swap in

Everything renders from plain data arrays at the top of each component
(stats, testimonials, FAQ, leads, feature copy). Search each file for the
array and edit in place — no other wiring is needed. The numbers in
`StatsBar.tsx`, `ResultsSection.tsx` and the sample leads in
`LeadsSection.tsx` are placeholders from the original mockups.
