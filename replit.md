# FounderHQ Landing Page

## Overview
A modern, conversion-optimized landing page for FounderHQ - an all-in-one business services agency for Australian founders. The site showcases 7 core services with detailed service pages, pricing packages, and lead capture functionality.

## Recent Changes
- **Dec 22, 2025**: Added modern animations throughout homepage (floating elements, staggered reveals, animated counters)
- **Dec 22, 2025**: Fixed navigation links to work correctly from service pages
- **Dec 22, 2025**: Redesigned services section with elegant premium styling
- **Dec 22, 2025**: Fixed logo visibility on service pages with dark backgrounds
- **Dec 22, 2025**: Fixed Hero section CTAs to scroll to appropriate sections

## Tech Stack
- **Frontend**: React, TypeScript, Vite, TailwindCSS v4, shadcn/ui
- **Routing**: wouter
- **Animations**: framer-motion
- **Backend**: Express.js
- **Database**: PostgreSQL with Drizzle ORM
- **Styling**: Custom brand design with Deep Navy (#0F172A) + Energetic Coral (#FF5500)
- **Typography**: Plus Jakarta Sans (headings) + Inter (body text)

## Project Architecture

### Frontend Structure
- `client/src/pages/Home.tsx` - Main landing page
- `client/src/pages/services/` - Individual service detail pages (7 total)
- `client/src/components/landing/` - Landing page sections (Hero, Problem, Solution, Services, Pricing, FAQ, CTA, Navbar, Footer)

### Backend Structure
- `server/routes.ts` - API routes including lead capture
- `server/storage.ts` - Database operations using Drizzle
- `shared/schema.ts` - Database schema definitions

### Key Features
1. **Lead Capture**: Email collection form with PostgreSQL storage
2. **7 Service Pages**: Legal, Brand, Digital Presence, Marketing, Social Media, IT Support, AI
3. **Pricing Packages**: Three tiers (Starter, Growth, Premium)
4. **Modern Animations**: Scroll-triggered animations, hover effects, floating elements

## User Preferences
- Brand colors: Deep Navy (#0F172A) for authority, Energetic Coral (#FF5500) for action
- Company name: FounderHQ (changed from LaunchPad)
- Focus on conversion optimization and premium design aesthetic

## Future Enhancements
- **Payment Integration**: User declined Stripe integration for now. When ready, set up Stripe with API keys for payment processing on pricing packages.
