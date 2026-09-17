"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BrandMark } from "@/components/ui";
import { NAV_LINKS, SITE } from "@/lib/constants";

function IconSearch() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
      <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M16.5 16.5 20 20" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function IconUser() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
      <circle cx="12" cy="8" r="3.25" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M5.5 19.5c1.6-3 4-4.5 6.5-4.5s4.9 1.5 6.5 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconBag() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
      <path
        d="M6.5 8.5h11l-1 11.5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5l-1-11.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M9 8.5V7a3 3 0 0 1 6 0v1.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-paper/90 pt-[env(safe-area-inset-top,0px)] backdrop-blur-md">
      <div className="bg-blush px-4 py-2 text-center text-[11px] font-medium uppercase tracking-[0.16em] text-ink-soft sm:text-xs">
        {SITE.announcement}
      </div>

      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-3 sm:px-8 sm:py-4">
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-ink/15 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label="Toggle menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="flex w-4 flex-col gap-1.5">
            <span className="block h-px w-full bg-current" />
            <span className="block h-px w-full bg-current" />
            <span className="block h-px w-3/4 bg-current" />
          </span>
        </button>

        <div className="flex-1 text-center md:flex-none md:text-left">
          <BrandMark />
        </div>

        <div className="flex items-center gap-1 text-ink-soft sm:gap-2">
          <Link
            href="/shop"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-blush/70 hover:text-ink"
            aria-label="Search products"
          >
            <IconSearch />
          </Link>
          <a
            href={`${SITE.shopifyUrl}/account`}
            className="hidden h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-blush/70 hover:text-ink sm:inline-flex"
            aria-label="Account"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconUser />
          </a>
          <a
            href={SITE.shopifyUrl}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-blush/70 hover:text-ink"
            aria-label="Shopping bag"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBag />
          </a>
        </div>
      </div>

      <nav
        className="mx-auto hidden max-w-6xl items-center justify-center gap-7 px-8 pb-4 md:flex"
        aria-label="Primary"
      >
        {NAV_LINKS.map((link) => {
          const active =
            pathname === link.href || pathname.startsWith(`${link.href}/`);
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`relative text-sm tracking-wide transition-opacity hover:opacity-100 ${
                active ? "opacity-100" : "opacity-65"
              }`}
            >
              {link.label}
              {active ? (
                <span className="absolute -bottom-1 left-0 h-px w-full bg-mauve" />
              ) : null}
            </Link>
          );
        })}
      </nav>

      <nav
        className="no-scrollbar flex gap-5 overflow-x-auto px-5 pb-3 text-sm tracking-wide text-ink-soft md:hidden"
        aria-label="Categories"
      >
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="whitespace-nowrap transition-colors hover:text-ink"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-line bg-paper px-5 py-4 pb-[calc(1rem+env(safe-area-inset-bottom,0px))] md:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-1 py-3 text-base"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="rounded-md px-1 py-3 text-base"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
