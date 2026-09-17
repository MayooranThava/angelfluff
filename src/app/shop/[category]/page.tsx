import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductGrid } from "@/components/product-card";
import { SectionHeading } from "@/components/ui";
import { CATEGORIES, type CategorySlug } from "@/lib/constants";
import { getProductsByCategory } from "@/lib/products";

type Props = {
  params: Promise<{ category: string }>;
};

export function generateStaticParams() {
  return CATEGORIES.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const match = CATEGORIES.find((item) => item.slug === category);
  if (!match) return { title: "Shop" };
  return {
    title: match.label,
    description: match.description,
  };
}

export default async function CategoryShopPage({ params }: Props) {
  const { category } = await params;
  const match = CATEGORIES.find((item) => item.slug === category);
  if (!match) notFound();

  const items = getProductsByCategory(match.slug as CategorySlug);

  return (
    <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
      <SectionHeading
        eyebrow="Collection"
        title={match.label}
        description={match.description}
      />

      <div className="mb-10 flex flex-wrap gap-2">
        <Link
          href="/shop"
          className="rounded-full border border-line bg-paper px-4 py-2 text-sm text-ink-soft transition-colors hover:border-mauve hover:text-ink"
        >
          All
        </Link>
        {CATEGORIES.map((item) => {
          const active = item.slug === match.slug;
          return (
            <Link
              key={item.slug}
              href={`/shop/${item.slug}`}
              className={
                active
                  ? "rounded-full bg-mauve px-4 py-2 text-sm text-white"
                  : "rounded-full border border-line bg-paper px-4 py-2 text-sm text-ink-soft transition-colors hover:border-mauve hover:text-ink"
              }
            >
              {item.label}
            </Link>
          );
        })}
      </div>

      <ProductGrid products={items} />
    </div>
  );
}
