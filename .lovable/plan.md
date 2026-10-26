# Shree Rajrajeshwari Ice Cream & Juice Parlour — Website Plan

## Stack note
Building on **TanStack Start (React 19 + Vite + TypeScript + Tailwind v4)** — Lovable's modern stack. Folder layout mirrors the Next.js App Router intent you described, adapted to TanStack conventions.

## Two items I still need from you
1. **Logo file** — please upload it (PNG/SVG). Until then I'll use a typographic stand-in styled in brand colors so the layout is final; swapping in the real logo is a one-line change.
2. **Founding year** — not provided. I'll use **"Serving Since 2005"** as a placeholder you can change in one place (`src/data/brand.ts`). Tell me the real year and I'll update it.

## Brand system (locked in `src/styles.css`)
- Primary Orange `#F57C00`, Primary Red `#E53935`, Deep Blue `#283593`, Cream `#FFF8EE`, White
- Tokens: `--primary` (orange), `--accent` (red), `--brand-blue`, `--cream`, plus gradients (`--gradient-warm`, `--gradient-cta`) and shadows (`--shadow-card`, `--shadow-glow`)
- Typography: **Fraunces** (display, warm serif) + **Inter** (body) via Google Fonts in `__root.tsx`
- Radius scale, spacing rhythm, and motion (fade-in, scale-in, hover-scale) standardized

## Folder structure
```
src/
  routes/
    __root.tsx            sticky navbar + footer shell, fonts, SEO defaults
    index.tsx             home (all sections below)
    menu.tsx              full menu by category
    locations.tsx         all 4 branches with map links
    contact.tsx           contact form + info
  components/
    layout/               Navbar, Footer, Container, SectionHeading
    home/                 Hero, TrustBar, Story, BestSellers, WhyUs,
                          MenuCategories, Gallery, Locations, FinalCTA
    ui/                   (existing shadcn primitives)
  data/
    brand.ts              name, year, phone, instagram, hours
    locations.ts          4 Vadodara branches (data you provided)
    bestSellers.ts        6 hero products
    categories.ts         6 menu categories
    menu.ts               full menu items grouped by category
    features.ts           "Why people love us" cards
    gallery.ts            image set for masonry
  types/                  Location, Product, Category, Feature
  lib/                    utils, cn, format helpers
```

## Page sections (home)
1. **Sticky Navbar** — transparent on load, blurred white on scroll; logo left, Home/Menu/Locations/Contact center, "Explore Menu" CTA right; mobile drawer (shadcn Sheet).
2. **Hero** — full-dvh, looping muted background video (fruit/juice/scoop B-roll from a royalty-free source like Pexels/Coverr, hosted via Lovable Assets), warm overlay, large logo, headline "Fresh Flavours. Sweet Memories.", sub, two CTAs, animated scroll cue.
3. **Trust Bar** — Serving Since {year} · 4 Locations · 100+ Menu Items · Thousands of Happy Customers, with lucide icons and count-up animation on scroll.
4. **Our Story** — two-column, founder/store image left, copy right, animated counters (Years, Branches, Items, Smiles).
5. **Customer Favorites** — 6 product cards (Mango Thick Shake, Special Falooda, Sitafal Ice Cream, Chocolate Sundae, Fresh Orange Juice, Dry Fruit Milkshake), generated product photography, hover lift + image zoom.
6. **Why People Love Us** — 4 feature cards with lucide icons (Leaf, IceCream2, ChefHat, Users).
7. **Menu Categories** — 6 image cards (Juices, Milkshakes, Thick Shakes, Ice Creams, Faloodas, Lassi) linking to `/menu#category`, plus "View Complete Menu" CTA.
8. **Gallery** — CSS masonry (columns) with 8–10 generated lifestyle/product shots, hover scale + caption fade.
9. **Locations** — 4 equal-height cards using the exact addresses you provided (Manjalpur, Fatehgunj, Nizampura, Uma Char Rasta), phone `+91 81539 98890`, "Get Directions" → Google Maps deep link.
10. **Final CTA** — soft orange→cream gradient band, two buttons.
11. **Footer** — 4 columns: brand + tagline + Instagram link, Quick Links, Contact (phone, hours 10 AM–12 AM), Locations list; bottom bar with copyright.

## Other routes
- **/menu** — hero strip + tabbed categories, item cards (name + short description); reuses `data/menu.ts`. Own SEO head.
- **/locations** — full grid + embedded Google Maps iframe per branch + hours. Own SEO head.
- **/contact** — hero + contact info, hours, Instagram, click-to-call, simple contact form (front-end only, opens `mailto:` / WhatsApp on submit). Own SEO head.

## Imagery
- ~16 images generated via the image tool (hero poster, 6 product cards, 6 category cards, gallery set, story photo) and stored as Lovable Assets.
- Hero video: a single short royalty-free MP4 hosted via Lovable Assets, with poster fallback so first paint is instant.

## SEO + a11y + performance
- Per-route `head()` with unique title/description/og tags; JSON-LD `LocalBusiness` with the 4 branches on the home route; canonical links on leaves only.
- One `<main>`, semantic landmarks, alt text on every image, aria-labels on icon buttons, focus-visible rings, `h-dvh` for hero, AA contrast.
- `loading="lazy"` + width/height on every image, `preload` for hero poster, fonts via `font-display: swap`, video `preload="metadata"` and `playsInline muted loop`.

## Responsiveness
- Mobile-first; breakpoints `sm md lg xl 2xl`. Equal-height card grids via `grid` + `h-full`. No fixed pixel widths on containers — `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`. No horizontal overflow (`overflow-x-clip` on body wrapper).

## Out of scope (call out so there are no surprises)
- No backend, no real order system, no CMS — content lives in `src/data/*.ts` and is trivial to edit.
- Contact form is front-end only (mailto/WhatsApp). I can wire it to Lovable Cloud later if you want real submissions.

Reply with the **logo** and **founding year** (or just say "go" and I'll use the placeholders above), and I'll build.
