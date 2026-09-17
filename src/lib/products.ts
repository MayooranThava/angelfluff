import productsData from "@/data/products.json";
import type { CategorySlug } from "@/lib/constants";

export type ProductVariant = {
  id: number;
  title: string;
  price: string;
  compareAtPrice: string | null;
  available: boolean;
  option1: string | null;
};

export type ProductImage = {
  src: string;
  alt: string;
};

export type Product = {
  id: number;
  handle: string;
  title: string;
  type: string;
  tags: string[];
  vendor: string;
  price: string;
  compareAtPrice: string | null;
  images: ProductImage[];
  image: string;
  description: string;
  variants: ProductVariant[];
  available: boolean;
  categories: string[];
  shopifyUrl: string;
};

export const products = productsData as Product[];

export function formatPrice(price: string | number) {
  const value = typeof price === "string" ? Number.parseFloat(price) : price;
  return new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
  }).format(value);
}

export function getProductByHandle(handle: string) {
  return products.find((product) => product.handle === handle);
}

export function getProductsByCategory(category?: CategorySlug | "all") {
  if (!category || category === "all") return products;
  return products.filter((product) => product.categories.includes(category));
}

export function getProductsByHandles(handles: readonly string[]) {
  return handles
    .map((handle) => getProductByHandle(handle))
    .filter((product): product is Product => Boolean(product));
}

export function getRelatedProducts(product: Product, limit = 4) {
  const primary = product.categories[0];
  return products
    .filter(
      (candidate) =>
        candidate.handle !== product.handle &&
        candidate.categories.includes(primary),
    )
    .slice(0, limit);
}

export function productShortDescription(product: Product, max = 140) {
  const text = product.description.replace(/\s+/g, " ").trim();
  if (!text) return "Handcrafted with clean, natural ingredients.";
  if (text.length <= max) return text;
  return `${text.slice(0, max).trimEnd()}…`;
}

export function categoryLabel(slug: string) {
  const map: Record<string, string> = {
    skin: "Skin",
    lips: "Lips",
    hair: "Hair",
    men: "Men",
    body: "Body",
    spf: "SPF",
  };
  return map[slug] ?? slug;
}
