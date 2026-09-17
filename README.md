# Angel Fluff 444 — Redesign Demo

A website redesign concept for **[Angel Fluff 444](https://www.angelfluff444.ca)** — handcrafted natural skincare from Mississauga, Canada.

Built as a pitchable demo using the same tech stack as [mayo-tutors](https://github.com/MayooranThava/mayo-tutors).

## Tech stack

| Piece | Choice |
| --- | --- |
| Framework | **Next.js 16** (App Router) |
| Language | **TypeScript** |
| Styling | **Tailwind CSS 4** |
| UI runtime | **React 19** |

Product catalog is sourced from the live Shopify store (`/collections/all`) and stored in `src/data/products.json` for a reliable offline demo.

## Pages

- `/` — Soft aesthetic homepage (hero, categories, best sellers, trust, story, testimonials)
- `/shop` — Full catalog (62 products)
- `/shop/[category]` — Skin, Lips, Hair, Men, Body, SPF
- `/products/[handle]` — Product detail + related items
- `/our-story` — Brand story (Tonia & Gina)
- `/ingredients` — Signature botanicals
- `/contact` — Email & social

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

## Notes for the pitch

- Visual direction follows the provided soft-pink redesign mockups.
- “Buy on Shopify” CTAs link back to the live store so the demo stays purchase-ready.
- Refresh products anytime by re-fetching `https://www.angelfluff444.ca/collections/all/products.json`.
