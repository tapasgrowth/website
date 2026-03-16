# AGENTS.md

This file provides guidance to AI agents when working with code in this repository.

## Project Overview

Tapas Growth Inc. website — A single-page Next.js landing page for a consumer app growth consulting company. Light-themed with olive colors, restaurant-themed service presentation ("The Menu"), and self-serve Stripe checkout.

## Tech Stack

- **Framework**: Next.js 16+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 (CSS-first config)
- **Components**: shadcn/ui v4 (radix-vega style, olive base color)
- **Animations**: Framer Motion
- **Background Effects**: Custom particle canvas component
- **Deployment**: Vercel

## Development Commands

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linter
pnpm lint
```

## Project Architecture

### Directory Structure
```
/app                    # Next.js App Router
  layout.tsx            # Root layout, fonts, SEO metadata, JSON-LD
  page.tsx              # Single-page composition
  globals.css           # Tailwind v4 theme (olive color system)
  robots.ts             # SEO robots.txt
  sitemap.ts            # SEO sitemap
/components
  /ui                   # shadcn/ui components (Button, Card, Badge, Separator)
  /sections             # Page sections
    Navigation.tsx      # Sticky nav with mobile menu
    Hero.tsx            # Hero with particle background + animated text
    Stats.tsx           # Animated stat counters
    MenuSection.tsx      # Unified menu: services list + pricing tiers
    Footer.tsx           # Site footer
  /animations           # Framer Motion wrapper components
    FadeInView.tsx       # Scroll-triggered fade-in
    AnimatedCounter.tsx  # Number count-up animation
    StaggerChildren.tsx  # Staggered children reveal
  /reactbits            # Custom background/text animation components
    Particles.tsx        # Canvas particle network background
    SplitText.tsx        # Word-by-word text reveal
/lib
  utils.ts              # cn() class merge utility
  constants.ts          # Services, pricing, Stripe links, company info
/public                 # Static assets
```

### Key Design Decisions

1. **Single-page architecture**: All content on one scrollable page with anchor link navigation. No routing needed.

2. **Olive color system**: Uses shadcn preset `aKG33Ee` with OKLCH colors. Light theme only (no dark mode).

3. **Restaurant theme**: Services presented as a menu ("The Menu"), but copy is straightforward — no food metaphors in descriptions.

4. **Self-serve checkout**: Stripe payment links (external URLs) — no Stripe SDK integration. Links stored in `/lib/constants.ts`.

5. **Typography**: Instrument Sans for headings, Geist for body text. Headings use `font-heading` class applied globally.

6. **Animations**: Framer Motion for scroll-triggered reveals and counters. Custom canvas Particles for hero background. SplitText for animated headline.

## Adding shadcn Components

```bash
pnpm dlx shadcn@latest add [component-name]
```

## Important Notes

- Always use `pnpm` as the package manager
- Tailwind CSS v4 uses CSS-first config (`@theme inline` in globals.css)
- Color variables are in OKLCH color space
- `"use client"` only on components that need state, event handlers, or Framer Motion
- Stripe payment links are placeholders — replace before deploying
- Build must pass ESLint checks before deployment
