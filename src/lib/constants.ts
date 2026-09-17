export const SITE = {
  name: "Angel Fluff 444",
  tagline: "Soft skin, naturally.",
  description:
    "Handcrafted small-batch skincare made with raw, natural, organic ingredients. Clean beauty for lips, skin, hair, and beyond — from Mississauga, Canada.",
  email: "AngelFluff2018@gmail.com",
  location: "Mississauga, Ontario, Canada",
  instagram: "https://www.instagram.com/angelfluff444/",
  tiktok: "https://www.tiktok.com/@angelfluff444",
  shopifyUrl: "https://www.angelfluff444.ca",
  announcement: "Please allow 3–5 days processing time",
  freeShipping: "Free shipping on orders over $75 (Canada)",
} as const;

export const NAV_LINKS = [
  { href: "/shop", label: "Shop" },
  { href: "/shop/skin", label: "Skin" },
  { href: "/shop/lips", label: "Lips" },
  { href: "/shop/hair", label: "Hair" },
  { href: "/shop/men", label: "Men" },
  { href: "/our-story", label: "Our Story" },
  { href: "/ingredients", label: "Ingredients" },
] as const;

export const CATEGORIES = [
  {
    slug: "skin",
    label: "Skin",
    description: "Face creams, oils, cleansers, and glow rituals.",
  },
  {
    slug: "lips",
    label: "Lips",
    description: "Butters, salves, and tints for soft, nourished lips.",
  },
  {
    slug: "hair",
    label: "Hair",
    description: "Rosemary oils and botanical hair care.",
  },
  {
    slug: "men",
    label: "Men",
    description: "Beard balms, brow care, and clean face formulas.",
  },
  {
    slug: "body",
    label: "Body",
    description: "Soaps, balms, oils, and everyday luxuries.",
  },
  {
    slug: "spf",
    label: "SPF",
    description: "Gentle daily protection with clean ingredients.",
  },
] as const;

export type CategorySlug = (typeof CATEGORIES)[number]["slug"];

export const BEST_SELLER_HANDLES = [
  "french-vanilla-lip-balm",
  "cherry-lip-balm",
  "rosemary-hair-serum",
  "pefume-body-oil",
  "creme-de-la-creme-face-cream-30-g-cad-11-11",
  "angelfluff-rose-oil",
  "luxe-pink-tallow-face-cream",
  "calendula-lip-salve",
] as const;

export const FEATURED_HANDLES = [
  "creme-de-la-creme-face-cream-30-g-cad-11-11",
  "angelfluff-rose-oil",
  "french-vanilla-lip-balm",
  "rosemary-hair-serum",
  "espresso-tallow-face-cream",
] as const;

export const HERO_PRODUCT_HANDLE = "french-vanilla-lip-balm";

export const TRUST_POINTS = [
  {
    title: "Natural & Organic",
    description: "Raw, unrefined butters and pure essential oils.",
    icon: "leaf",
  },
  {
    title: "Small Batch",
    description: "Handcrafted in Mississauga with care and intention.",
    icon: "batch",
  },
  {
    title: "Non-Toxic",
    description: "No parabens, sulfates, phthalates, or synthetic fragrance.",
    icon: "drop",
  },
  {
    title: "Canadian Owned",
    description: "Cruelty-free, vegan & Halal-friendly formulas.",
    icon: "maple",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "My skin feels so healthy and radiant. I love it — and I finally found products I trust.",
    name: "Taylor M.",
  },
  {
    quote:
      "The lip butters are unbelievably creamy. French Vanilla is my everyday essential.",
    name: "Amina K.",
  },
  {
    quote:
      "Clean ingredients, beautiful scents, and my beard has never felt softer.",
    name: "Jordan P.",
  },
] as const;

export const INGREDIENTS = [
  {
    name: "Shea Butter",
    blurb:
      "Ultra-healing and skin-softening with vitamins A & E for antioxidant, anti-aging care.",
  },
  {
    name: "Beeswax",
    blurb:
      "Locks in moisture and protects skin from damaging environmental factors.",
  },
  {
    name: "Calendula",
    blurb:
      "Skin-conditioning and anti-inflammatory. Restores elasticity and softness.",
  },
  {
    name: "Chamomile",
    blurb: "Calming and soothing for dry, irritated, red, or inflamed skin.",
  },
  {
    name: "Mango Butter",
    blurb:
      "Balancing and easily absorbed. Increases moisture without greasy residue.",
  },
  {
    name: "Rosehip Seed Oil",
    blurb:
      "Anti-aging support for UV-damaged skin, fine lines, and dry, dull complexions.",
  },
  {
    name: "Sweet Almond Oil",
    blurb: "Nourishing and hydrating for soft, comfortable skin.",
  },
  {
    name: "Vanilla Essential Oil",
    blurb:
      "Antioxidant and anti-inflammatory — supports resilient, healthy-looking skin.",
  },
  {
    name: "Non-nano Zinc Oxide",
    blurb:
      "A mineral barrier that helps protect against harmful UVA and UVB rays.",
  },
] as const;
