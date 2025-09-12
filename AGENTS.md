# AGENTS.md

This file provides guidance to AI agents when working with code in this repository.

## Project Overview

Tapas Growth Inc. website - A Next.js 14+ landing page for a consumer app growth consulting company with a unique tapas restaurant theme.

## Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui (Radix UI primitives)
- **Deployment**: Vercel

## Development Commands

```bash
# Install dependencies
pnpm install

# Run development server (with Turbopack)
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
/app                # Next.js App Router pages
  layout.tsx        # Root layout with metadata
  page.tsx          # Home page component
  globals.css       # Global styles and theme variables
/components
  /ui               # shadcn/ui components
  /sections         # Page sections (Hero, ServicesMenu, About, etc.)
/public             # Static assets
```

### Key Design Decisions

1. **Tapas Restaurant Theme**: All growth services are presented as menu items, creating a unique and memorable brand experience.

2. **Component Architecture**: Uses composition pattern with shadcn/ui components that are copied into the codebase for full customization.

3. **Color System**: Custom OKLCH color palette with warm, restaurant-inspired colors (terracotta, gold, wine red).

4. **Typography**: Instrument Serif for headings (restaurant menu feel), DM Sans for body text.

## Adding New Features

### Adding shadcn Components
```bash
pnpm dlx shadcn@latest add [component-name]
```

### Creating New Sections
1. Create component in `/components/sections/`
2. Import in `app/page.tsx`
3. Follow existing patterns for styling consistency

## Important Notes

- Always use `pnpm` as the package manager
- The site uses Tailwind CSS v4 with the new `@theme` directive
- Color variables are defined in OKLCH color space for better color manipulation
- Components should follow the tapas restaurant theme metaphor
- Build must pass ESLint checks before deployment