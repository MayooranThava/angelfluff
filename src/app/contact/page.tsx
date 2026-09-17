import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${SITE.name} in ${SITE.location}.`,
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-12 sm:px-8 sm:py-16">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-rose">
        Contact
      </p>
      <h1 className="mt-3 font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl">
        Let&apos;s talk soft skin
      </h1>
      <p className="mt-4 text-base leading-relaxed text-ink-soft">
        We&apos;re based in {SITE.location}. Reach out for product questions,
        retail inquiries, or just to say hello.
      </p>

      <div className="mt-10 space-y-6 border-t border-line pt-8 text-base text-ink-soft">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink">
            Email
          </p>
          <a
            href={`mailto:${SITE.email}`}
            className="mt-2 inline-block text-lg text-ink hover:text-rose-deep"
          >
            {SITE.email}
          </a>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink">
            Social
          </p>
          <div className="mt-2 flex flex-col gap-1">
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink"
            >
              Instagram @AngelFluff444
            </a>
            <a
              href={SITE.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink"
            >
              TikTok @AngelFluff444
            </a>
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink">
            Live store
          </p>
          <p className="mt-2">
            This redesign is a pitch demo. Purchases still happen on the current
            Shopify store.
          </p>
          <div className="mt-4">
            <ButtonLink href={SITE.shopifyUrl} external>
              Visit angelfluff444.ca →
            </ButtonLink>
          </div>
        </div>
      </div>
    </div>
  );
}
