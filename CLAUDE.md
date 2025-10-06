# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Auraganic Healing is a Next.js 14 static website for a holistic healing practice. The site showcases services including bodywork, Emotion Code, holistic health coaching, crystal healing, chakra balancing, and various wellness offerings by practitioner "Ninja Nicky".

## Development Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production (static export)
npm run build

# Lint code
npm run lint
```

## Build & Deployment

- **Static Export**: The site is configured with `output: 'export'` in next.config.mjs for static generation
- **Deployment**: Deploys to Netlify (build command: `npm run build`, publish directory: `out`)
- **Images**: Uses `unoptimized: true` for static hosting compatibility
- **Build Configuration**: TypeScript and ESLint errors are ignored during builds (see next.config.mjs:8-10)

## Architecture

### Pages & Routing

- **App Router**: Next.js 14 App Router with TypeScript
- **Static Generation**: All pages are statically generated at build time
- **Dynamic Routes**: `/services/[slug]/page.tsx` generates individual service pages from lib/services.ts data
- **Main Routes**:
  - `/` - Home page with sections
  - `/about` - About page
  - `/services` - Services overview
  - `/services/[slug]` - Individual service pages
  - `/consultation` - Consultation booking page

### Component Structure

- **Section Components**: Home page composed of section components (components/*-section.tsx):
  - HeroSection, AboutSection, ArticleSection, ServicesSection
  - HealingModalitiesSection, TestimonialsSection, CommunitySection
  - NewsletterSection, Footer
- **UI Components**: Radix UI-based components in components/ui/ (shadcn/ui pattern)
- **Path Alias**: `@/*` maps to repository root (tsconfig.json:22-23)

### Data Layer

- **Services Data**: Centralized in lib/services.ts with Service type definition
  - Contains 9 services with slug, title, price, descriptions, benefits, and FAQs
  - Used by both /services page and /services/[slug] dynamic routes
  - Static params generated via generateStaticParams() (app/services/[slug]/page.tsx:8-10)

### Styling

- **Tailwind v4**: Using new @import syntax and @theme inline directive
- **Design System**: Custom purple/green color palette with CSS variables
  - Primary: rgb(153 85 187) (purple)
  - Secondary/Accent: oklch(0.65 0.18 142) (green)
- **Fonts**:
  - Inter (body text) - var(--font-inter)
  - Dancing Script (decorative) - var(--font-dancing)
  - Amatic SC (headings) - var(--font-amatic)
- **Custom Utilities**:
  - Organic shapes (.organic-blob, .organic-blob-2)
  - Chakra colors (.chakra-root through .chakra-crown)
  - Custom animations (organic-morph, aura-pulse, chakra-flow)
- **Global Styles**: app/globals.css defines all design tokens and animations

### SEO & Analytics

- **Metadata**: Generated via generateMetadata() in layout.tsx and [slug]/page.tsx
- **JSON-LD**: Structured data for Organization, Person, Service, and BreadcrumbList
- **Google Analytics**: G-GND703ZTPD tracking ID (app/layout.tsx:142-153)
- **Social Metadata**: OpenGraph and Twitter card metadata configured
- **Icons**: Uses auraganic-site-icon-8.png favicon

### Key Technical Considerations

- **Static Paths**: When adding new services, update lib/services.ts array - pages auto-generate
- **Image Optimization**: Images are unoptimized for static export; use appropriately sized source images
- **Client Components**: Theme provider uses 'use client' directive (components/theme-provider.tsx)
- **Environment Variables**: NEXT_PUBLIC_SITE_URL for metadata base (optional)
