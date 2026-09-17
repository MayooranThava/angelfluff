import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ui";
import { SITE } from "@/lib/constants";
import { getProductByHandle } from "@/lib/products";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Meet sisters Tonia & Gina — the founders of Angel Fluff 444, handcrafting clean skincare in Mississauga, Canada.",
};

export default function OurStoryPage() {
  const image =
    getProductByHandle("velvet-skin-ritual-set")?.image ||
    getProductByHandle("french-vanilla-lip-balm")?.image;

  return (
    <div>
      <section className="hero-wash">
        <div className="mx-auto max-w-3xl px-5 py-16 text-center sm:px-8 sm:py-20">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-rose">
            Our story
          </p>
          <h1 className="mt-4 font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl">
            Soft skin. Kinder tomorrow.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
            We handcraft small-batch products using only raw, natural, organic,
            unrefined ingredients — because clean beauty should never be exclusive
            or expensive.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2">
        <div className="relative aspect-[4/5] overflow-hidden bg-cream">
          {image ? (
            <Image
              src={image}
              alt="Angel Fluff 444 products"
              fill
              sizes="(max-width: 1024px) 100vw, 520px"
              className="object-cover"
            />
          ) : null}
        </div>
        <div className="space-y-5 text-base leading-relaxed text-ink-soft">
          <p>
            Hello and welcome to our world. I&apos;m Tonia, and my sister Gina and
            I began exploring the benefits of shea butter — purchasing endless
            varieties of divine, luscious exotic butters like mango, cocoa, oat,
            and tamanu, plus a vast array of sublime oils.
          </p>
          <p>
            Blending them into the most velvety, fluffy, creamy moisturizers
            became our intense passion. We work endless nights into frosty,
            wintry mornings, using only the most luxe varieties of butters and
            oils rich in skin-loving fatty acids.
          </p>
          <p>
            Our products contain{" "}
            <strong className="font-medium text-ink">
              no parabens, no sulfates, no phthalates, no alcohols, and no
              synthetic fragrances
            </strong>
            . We scent only with pure essential oils. The skin absorbs much of
            what we put on it — so we make only what we would use on ourselves.
          </p>
          <p>
            We prioritize people and their health, not profits. Natural
            shouldn&apos;t be expensive or exclusive. Try our affordable line of
            organic, unrefined, luxuriously emollient products — your skin and
            lips will thank you.
          </p>
          <div className="pt-2">
            <ButtonLink href="/shop">Shop the collection</ButtonLink>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-cream">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 sm:px-8 md:grid-cols-3">
          {[
            {
              title: "100% natural focus",
              body: "Chemical-free, organic, and all-natural ingredients with full transparency.",
            },
            {
              title: "Cruelty-free values",
              body: "We don’t support animal testing and offer vegan & Halal-friendly products.",
            },
            {
              title: "Made in Canada",
              body: `Small-batch production from ${SITE.location}.`,
            },
          ].map((item) => (
            <div key={item.title}>
              <h2 className="font-display text-2xl text-ink">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
