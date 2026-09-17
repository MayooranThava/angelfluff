import Link from "next/link";
import { BrandMark } from "@/components/ui";
import { CATEGORIES, NAV_LINKS, SITE } from "@/lib/constants";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-line bg-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <BrandMark size="footer" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-soft">
            Handcrafted small-batch skincare using rich exotic butters and
            nature&apos;s pure essential oils. Made in {SITE.location}.
          </p>
          <p className="mt-4 text-sm text-ink-soft">{SITE.freeShipping}</p>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink">
            Explore
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-ink-soft">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-ink">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact" className="hover:text-ink">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink">
            Shop by category
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-ink-soft">
            {CATEGORIES.map((category) => (
              <li key={category.slug}>
                <Link
                  href={`/shop/${category.slug}`}
                  className="hover:text-ink"
                >
                  {category.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 space-y-2 text-sm text-ink-soft">
            <a
              href={`mailto:${SITE.email}`}
              className="block hover:text-ink"
            >
              {SITE.email}
            </a>
            <a
              href={SITE.instagram}
              className="block hover:text-ink"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram @AngelFluff444
            </a>
            <a
              href={SITE.tiktok}
              className="block hover:text-ink"
              target="_blank"
              rel="noopener noreferrer"
            >
              TikTok @AngelFluff444
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-line px-5 py-5 text-center text-xs text-ink-soft sm:px-8">
        © {new Date().getFullYear()} {SITE.name}. Redesign concept demo — product
        data from {SITE.shopifyUrl.replace("https://", "")}.
      </div>
    </footer>
  );
}
