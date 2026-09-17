import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";
import { formatPrice } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.handle}`}
      className="group flex flex-col"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-cream">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 240px"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-ink-soft">
            No image
          </div>
        )}
        {!product.available ? (
          <span className="absolute left-3 top-3 bg-ink/80 px-2 py-1 text-[10px] uppercase tracking-wider text-white">
            Sold out
          </span>
        ) : null}
      </div>
      <div className="mt-3 space-y-1">
        <h3 className="font-display text-lg leading-snug text-ink transition-colors group-hover:text-rose-deep">
          {product.title}
        </h3>
        <p className="text-sm text-ink-soft">{formatPrice(product.price)}</p>
      </div>
    </Link>
  );
}

export function ProductGrid({ products }: { products: Product[] }) {
  if (products.length === 0) {
    return (
      <p className="py-16 text-center text-ink-soft">
        No products found in this collection yet.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-10 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
