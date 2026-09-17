import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductCard } from "@/components/product-card";
import { ButtonLink, SectionHeading } from "@/components/ui";
import {
  categoryLabel,
  formatPrice,
  getProductByHandle,
  getRelatedProducts,
  productShortDescription,
  products,
} from "@/lib/products";

type Props = {
  params: Promise<{ handle: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ handle: product.handle }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { handle } = await params;
  const product = getProductByHandle(handle);
  if (!product) return { title: "Product" };
  return {
    title: product.title,
    description: productShortDescription(product, 160),
  };
}

export default async function ProductPage({ params }: Props) {
  const { handle } = await params;
  const product = getProductByHandle(handle);
  if (!product) notFound();

  const related = getRelatedProducts(product);
  const gallery = product.images.length > 0 ? product.images : [];

  return (
    <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
      <div className="mb-6 text-sm text-ink-soft">
        <Link href="/shop" className="hover:text-ink">
          Shop
        </Link>
        <span className="mx-2">/</span>
        {product.categories[0] ? (
          <>
            <Link
              href={`/shop/${product.categories[0]}`}
              className="hover:text-ink"
            >
              {categoryLabel(product.categories[0])}
            </Link>
            <span className="mx-2">/</span>
          </>
        ) : null}
        <span className="text-ink">{product.title}</span>
      </div>

      <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="space-y-3">
          <div className="relative aspect-square overflow-hidden bg-cream">
            {product.image ? (
              <Image
                src={product.image}
                alt={product.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover"
              />
            ) : null}
          </div>
          {gallery.length > 1 ? (
            <div className="grid grid-cols-4 gap-3">
              {gallery.slice(0, 4).map((image) => (
                <div
                  key={image.src}
                  className="relative aspect-square overflow-hidden bg-cream"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="140px"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          ) : null}
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-rose">
            {product.categories.map(categoryLabel).join(" · ") || "Angel Fluff"}
          </p>
          <h1 className="mt-3 font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl">
            {product.title}
          </h1>
          <p className="mt-4 text-xl text-ink-soft">
            {formatPrice(product.price)}
          </p>
          {!product.available ? (
            <p className="mt-2 text-sm font-medium text-rose-deep">
              Currently sold out
            </p>
          ) : null}

          <p className="mt-6 whitespace-pre-line text-base leading-relaxed text-ink-soft">
            {product.description ||
              "Handcrafted in small batches with raw, natural, organic ingredients."}
          </p>

          {product.variants.length > 1 ? (
            <div className="mt-6">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-ink">
                Options
              </p>
              <ul className="space-y-1 text-sm text-ink-soft">
                {product.variants.map((variant) => (
                  <li key={variant.id}>
                    {variant.title} — {formatPrice(variant.price)}
                    {!variant.available ? " (sold out)" : ""}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={product.shopifyUrl} external>
              Buy on Shopify →
            </ButtonLink>
            <ButtonLink href="/shop" variant="ghost">
              Continue shopping
            </ButtonLink>
          </div>

          <div className="mt-10 border-t border-line pt-6 text-sm text-ink-soft">
            <p>Ships from Mississauga, Ontario.</p>
            <p className="mt-1">Please allow 3–5 days processing time.</p>
          </div>
        </div>
      </div>

      {related.length > 0 ? (
        <section className="mt-20">
          <SectionHeading title="You may also love" />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {related.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
