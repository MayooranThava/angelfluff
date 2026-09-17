import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui";
import { INGREDIENTS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Ingredients",
  description:
    "Explore the raw botanicals, exotic butters, and pure essential oils behind Angel Fluff 444.",
};

export default function IngredientsPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
      <div className="max-w-2xl">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-rose">
          What&apos;s inside
        </p>
        <h1 className="mt-3 font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl">
          Ingredients with intention
        </h1>
        <p className="mt-4 text-base leading-relaxed text-ink-soft">
          Every formula is built from exotic butters, healing oils, and pure
          essential oils — never dyes, synthetic fragrance, fillers, alcohols, or
          harsh preservatives.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {INGREDIENTS.map((ingredient) => (
          <article
            key={ingredient.name}
            className="border-t border-blush-deep/70 pt-5"
          >
            <h2 className="font-display text-2xl text-ink">{ingredient.name}</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              {ingredient.blurb}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-14 rounded-none bg-blush/60 px-6 py-8 sm:px-8">
        <h2 className="font-display text-2xl text-ink sm:text-3xl">
          What we leave out
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft sm:text-base">
          No dyes. No artificial fragrances. No fillers. No alcohols or solvents.
          No parabens. No sulfates. No phthalates. Only natural preservatives
          like Vitamin E when needed.
        </p>
        <div className="mt-6">
          <ButtonLink href="/shop">Shop clean formulas</ButtonLink>
        </div>
      </div>
    </div>
  );
}
