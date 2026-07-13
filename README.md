# Rhizobee Innovations — Corporate Website

A modern, production-ready corporate website for **Rhizobee Innovations Private Limited**, built with **Next.js (App Router)** and **Tailwind CSS v4**.

## What's included

- 7 pages: Home, About Us, Services, Solutions, Industries, Careers, Contact Us
- Sticky responsive header with mobile navigation
- Original Rhizobee logo extracted from the supplied PDF and optimised for web (transparent PNG + favicon set)
- SEO: per-page metadata, Open Graph tags, `sitemap.xml`, `robots.txt`
- Working contact form (opens the visitor's email client with the message pre-filled to `info@rhizobee.com`) plus an embedded map of the corporate office
- FAQ accordion, testimonials, statistics bar, and strong CTA sections
- Fully responsive, keyboard-accessible, and respects `prefers-reduced-motion`

## Tech stack

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS v4**
- **lucide-react** for icons
- Fonts: Space Grotesk (display), Inter (body), IBM Plex Mono (data/labels) via `next/font/google`

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

> **Note:** `next/font/google` fetches font files from Google Fonts at build time, so an internet connection is required for `npm run dev` / `npm run build`. This is standard for any Next.js project and works normally on your machine, CI, or hosting provider (Vercel, Netlify, etc.).

## Production build

```bash
npm run build
npm run start
```

## Project structure

```
src/
  app/
    layout.tsx          Root layout, fonts, global SEO metadata
    page.tsx             Home
    about/page.tsx        About Us
    services/page.tsx     Services
    solutions/page.tsx    Solutions
    industries/page.tsx   Industries
    careers/page.tsx      Careers
    contact/page.tsx      Contact Us
    sitemap.ts / robots.ts
  components/            Header, Footer, ContactForm, shared UI, icon map
  lib/content.ts         All site copy — edit this file to update text sitewide
public/
  images/                Logo assets (full lockup + icon mark), extracted from the source PDF
  favicon.ico, apple-touch-icon.png
```

## Editing content

Nearly all copy (services, solutions, industries, stats, testimonials, FAQs, careers listings, company contact details) lives in **`src/lib/content.ts`**. Update values there and they'll propagate across every page that references them.

## Before going live

All primary contact details are now populated with client-confirmed information in `src/lib/content.ts` (`company` object): email, phone, office address, office hours, and CIN.

1. Point the `rhizobee.com` domain at your hosting provider and update `siteUrl` in `src/app/layout.tsx`, `sitemap.ts`, and `robots.ts` if the final domain differs.
2. Consider wiring the contact form to a real backend or form service (e.g. an API route + email provider) instead of the `mailto:` fallback if you'd like submissions logged server-side.
3. Add real client logos/case studies to the testimonials section if available.
4. If any contact detail changes in future, update it once in `src/lib/content.ts` — the Footer, Contact page, and About page all read from that single source, including the Contact page's embedded map, which is generated automatically from `company.address`.

## Logo usage

The Rhizobee mark was extracted directly from the supplied brand PDF (`rhizobee_3x5.pdf`) at high resolution, trimmed, and given a transparent background — it was not redrawn or redesigned. Two variants live in `public/images/`:

- `rhizobee-logo-full.png` — full lockup (icon + wordmark + tagline), used in the header and footer
- `rhizobee-icon.png` — icon mark only, used in the hero section and as the source for all favicon sizes
