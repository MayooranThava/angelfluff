import Link from "next/link";
import { SITE } from "@/lib/constants";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  external?: boolean;
};

const variants = {
  primary:
    "bg-mauve text-white hover:bg-rose-deep shadow-[0_1px_0_rgba(255,255,255,0.12)_inset]",
  secondary:
    "bg-white/70 text-ink border border-ink/10 hover:bg-white backdrop-blur-sm",
  ghost:
    "bg-transparent text-ink border border-line hover:border-mauve hover:text-rose-deep",
} as const;

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: ButtonLinkProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-200 ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

export function BrandMark({
  size = "nav",
}: {
  size?: "nav" | "footer" | "hero";
}) {
  const sizes = {
    nav: "text-lg tracking-[0.18em] sm:text-xl",
    footer: "text-xl tracking-[0.18em]",
    hero: "text-3xl tracking-[0.2em] sm:text-5xl md:text-6xl",
  };

  return (
    <Link
      href="/"
      className={`font-display font-semibold uppercase text-ink transition-opacity hover:opacity-80 ${sizes[size]}`}
      aria-label={`${SITE.name} home`}
    >
      {SITE.name}
    </Link>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-2xl">
        {eyebrow ? (
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-rose">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-soft">
            {description}
          </p>
        ) : null}
      </div>
      {action}
    </div>
  );
}

export function ScriptNote({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`font-script text-2xl text-rose-deep/90 sm:text-3xl ${className}`}
    >
      {children}
    </p>
  );
}
