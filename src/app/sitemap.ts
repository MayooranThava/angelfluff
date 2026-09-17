import type { MetadataRoute } from "next";
import { CATEGORIES } from "@/lib/constants";
import { products } from "@/lib/products";

const base = "https://angelfluff444.ca";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/shop", "/our-story", "/ingredients", "/contact"].map(
    (path) => ({
      url: `${base}${path}`,
      lastModified: new Date(),
    }),
  );

  const categoryRoutes = CATEGORIES.map((category) => ({
    url: `${base}/shop/${category.slug}`,
    lastModified: new Date(),
  }));

  const productRoutes = products.map((product) => ({
    url: `${base}/products/${product.handle}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...categoryRoutes, ...productRoutes];
}
