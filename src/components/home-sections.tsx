import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { ButtonLink, ScriptNote, SectionHeading } from "@/components/ui";
import {
  BEST_SELLER_HANDLES,
  CATEGORIES,
  FEATURED_HANDLES,
  HERO_PRODUCT_HANDLE,
  SITE,
  TESTIMONIALS,
  TRUST_POINTS,
} from "@/lib/constants";
import {
  getProductByHandle,
  getProductsByHandles,
  products,
} from "@/lib/products";

function TrustIcon({ icon }: { icon: string }) {
  const common = "h-7 w-7 text-rose";
  switch (icon) {
    case "leaf":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden>
          <path
            d="M5 19c8-1 12-6 14-14-7 1-12 5-14 14Z"
            stroke="currentColor"
            strokeWidth="1.4"
          />
          <path
            d="M5 19c2-4 6-7 11-9"
            stroke="currentColor"
            strokeWidth="1.4"
          />
        </svg>
      );
    case "batch":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden>
          <path
            d="M8 10h8l-1 9H9l-1-9Z"
            stroke="currentColor"
            strokeWidth="1.4"
          />
          <path d="M7 10h10" stroke="currentColor" strokeWidth="1.4" />
          <path
            d="M10 7c0-1.5.9-2.5 2-2.5S14 5.5 14 7"
            stroke="currentColor"
            strokeWidth="1.4"
          />
        </svg>
      );
    case "drop":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden>
          <path
            d="M12 4c3.5 4.2 5.5 7 5.5 9.5a5.5 5.5 0 1 1-11 0C6.5 11 8.5 8.2 12 4Z"
            stroke="currentColor"
            strokeWidth="1.4"
          />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden>
          <path
            d="M12 20s-6-3.8-6-9a4 4 0 0 1 7-2.5A4 4 0 0 1 18 11c0 5.2-6 9-6 9Z"
            stroke="currentColor"
            strokeWidth="1.4"
          />
          <path
            d="M9.5 11.5c.4-1.4 1.4-2.3 2.5-2.5"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
      );
  }
}

export function HomeHero() {
  const heroProduct = getProductByHandle(HERO_PRODUCT_HANDLE);

  return (
    <section className="hero-wash relative overflow-hidden">
      <div className="pointer-events-none absolute -left-16 top-10 h-56 w-56 rounded-full bg-white/50 blur-3xl animate-bloom" />
      <div className="pointer-events-none absolute -right-10 bottom-0 h-72 w-72 rounded-full bg-blush-deep/40 blur-3xl animate-bloom" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:py-24">
        <div className="animate-fade-up">
          <p className="mb-4 font-display text-2xl font-semibold uppercase tracking-[0.22em] text-ink sm:text-3xl">
            {SITE.name}
          </p>
          <h1 className="font-display text-4xl font-medium leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Soft skin, naturally.
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-ink-soft sm:text-lg">
            Gentle, effective, handcrafted skincare for your natural glow.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <ButtonLink href="/shop">Shop Now</ButtonLink>
            <ButtonLink href="/our-story" variant="secondary">
              Our Story
            </ButtonLink>
          </div>
        </div>

        <div className="relative animate-fade-up-delay-1">
          <div className="relative mx-auto aspect-square max-w-md overflow-hidden lg:max-w-none">
            {heroProduct?.image ? (
              <Image
                src={heroProduct.image}
                alt={heroProduct.title}
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 480px"
                className="object-cover animate-float"
              />
            ) : null}
          </div>
          <ScriptNote className="animate-script absolute -bottom-2 right-2 sm:right-6 sm:bottom-4">
            You glow differently here ♡
          </ScriptNote>
        </div>
      </div>
    </section>
  );
}

export function CategoryRow() {
  const categoryImages: Record<string, string | undefined> = {
    skin: getProductByHandle("luxe-pink-tallow-face-cream")?.image,
    lips: getProductByHandle("french-vanilla-lip-balm")?.image,
    hair: getProductByHandle("rosemary-hair-serum")?.image,
    men: getProductByHandle("ageless-spf-30-men-in-white")?.image,
    body: getProductByHandle("pefume-body-oil")?.image,
    spf: getProductByHandle("ageless-spf-30-men-in-white")?.image,
  };

  return (
    <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
      <div className="no-scrollbar flex gap-6 overflow-x-auto pb-2 sm:grid sm:grid-cols-6 sm:gap-4 sm:overflow-visible">
        {CATEGORIES.map((category) => (
          <Link
            key={category.slug}
            href={`/shop/${category.slug}`}
            className="group flex w-24 shrink-0 flex-col items-center gap-3 sm:w-auto"
          >
            <div className="relative h-24 w-24 overflow-hidden rounded-full bg-cream ring-1 ring-line transition-transform duration-300 group-hover:scale-[1.03] sm:h-28 sm:w-28">
              {categoryImages[category.slug] ? (
                <Image
                  src={categoryImages[category.slug]!}
                  alt={category.label}
                  fill
                  sizes="112px"
                  className="object-cover"
                />
              ) : null}
            </div>
            <span className="text-sm tracking-wide text-ink-soft group-hover:text-ink">
              {category.label}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function BestSellers() {
  const items = getProductsByHandles(BEST_SELLER_HANDLES).slice(0, 4);

  return (
    <section className="mx-auto max-w-6xl px-5 py-6 sm:px-8 sm:py-10">
      <SectionHeading
        title="Best Sellers"
        action={
          <Link
            href="/shop"
            className="text-sm tracking-wide text-rose-deep hover:text-ink"
          >
            Shop All →
          </Link>
        }
      />
      <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4 md:gap-6">
        {items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export function FeaturedProducts() {
  const items = getProductsByHandles(FEATURED_HANDLES);

  return (
    <section className="bg-cream/70 py-14 sm:py-18">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Natural skincare"
          title="Featured Products"
          description="Clean ingredients. Real results. Handcrafted for you and the planet."
          action={
            <Link
              href="/shop"
              className="text-sm tracking-wide text-rose-deep hover:text-ink"
            >
              Shop All →
            </Link>
          }
        />
        <div className="no-scrollbar flex gap-5 overflow-x-auto pb-2 md:grid md:grid-cols-5 md:gap-5 md:overflow-visible">
          {items.map((product) => (
            <div key={product.id} className="w-44 shrink-0 md:w-auto">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function StoryBanner() {
  return (
    <section className="hero-wash relative overflow-hidden">
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:py-20">
        <div className="animate-fade-up">
          <h2 className="font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Natural beauty for brighter days.
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-ink-soft">
            Handcrafted in small batches with love, for skin, lips, hair and
            beyond. Sisters Tonia & Gina blend raw exotic butters with pure
            essential oils — no parabens, no sulfates, no synthetic fragrance.
          </p>
          <div className="mt-8">
            <ButtonLink href="/our-story">Our Story</ButtonLink>
          </div>
        </div>
        <div className="relative aspect-[5/4] overflow-hidden bg-blush/40 animate-fade-up-delay-1">
          <Image
            src={
              getProductByHandle("angelfluff-rose-oil")?.image ||
              products[0].image
            }
            alt="Angel Fluff 444 botanical skincare"
            fill
            sizes="(max-width: 1024px) 90vw, 520px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export function TrustBar() {
  return (
    <section className="border-y border-line bg-paper">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 py-12 sm:px-8 md:grid-cols-4">
        {TRUST_POINTS.map((point) => (
          <div key={point.title} className="text-center">
            <div className="mb-3 flex justify-center">
              <TrustIcon icon={point.icon} />
            </div>
            <h3 className="text-sm font-medium tracking-wide text-ink">
              {point.title}
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-ink-soft sm:text-sm">
              {point.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
      <SectionHeading
        eyebrow="Real customers"
        title="Real glow."
        description="Soft skin stories from people who made Angel Fluff part of their daily ritual."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {TESTIMONIALS.map((item) => (
          <blockquote
            key={item.name}
            className="border-t border-blush-deep/60 pt-6"
          >
            <div className="mb-3 text-rose" aria-label="5 star rating">
              {"★★★★★"}
            </div>
            <p className="font-display text-xl leading-snug text-ink">
              “{item.quote}”
            </p>
            <footer className="mt-4 text-sm text-ink-soft">— {item.name}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}

export function PurposeStrip() {
  return (
    <section className="bg-cream py-14 sm:py-16">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 sm:px-8 md:grid-cols-[1fr_1.1fr]">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={
              getProductByHandle("green-forest-face-cream")?.image ||
              products[1].image
            }
            alt="Skincare with purpose"
            fill
            sizes="(max-width: 768px) 90vw, 420px"
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="font-display text-3xl font-medium text-ink sm:text-4xl">
            Skincare with purpose
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-ink-soft">
            Good for your skin, and a kinder planet. We prioritize people and
            their health — clean, organic, healthy skincare should not be
            exclusive or expensive.
          </p>
          <div className="mt-6">
            <ButtonLink href="/ingredients" variant="ghost">
              Explore ingredients
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
