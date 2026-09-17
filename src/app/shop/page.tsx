import type { Metadata } from "next";
import Link from "next/link";
import { ProductGrid } from "@/components/product-card";
import { SectionHeading } from "@/components/ui";
import { CATEGORIES } from "@/lib/constants";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Shop All",
  description:
    "Browse the full Angel Fluff 444 collection — lips, skin, hair, men, body, and SPF.",
};

export default function ShopPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
      <SectionHeading
        eyebrow="All products"
        title="Shop Angel Fluff 444"
        description={`${products.length} handcrafted formulas made in small batches with clean, natural ingredients.`}
      />

      <div className="mb-10 flex flex-wrap gap-2">
        <Link
          href="/shop"
          className="rounded-full bg-mauve px-4 py-2 text-sm text-white"
        >
          All
        </Link>
        {CATEGORIES.map((category) => (
          <Link
            key={category.slug}
            href={`/shop/${category.slug}`}
            className="rounded-full border border-line bg-paper px-4 py-2 text-sm text-ink-soft transition-colors hover:border-mauve hover:text-ink"
          >
            {category.label}
          </Link>
        ))}
      </div>

      <ProductGrid products={products} />
    </div>
  );
}
