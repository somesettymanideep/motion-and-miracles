import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { dict } from "@/data/site";
import subBannerImg from "@/assets/sub-banner.png";

export type PageBannerProps = {
  title: string;
  crumb: string;
  align?: "center" | "left";
  noOverlay?: boolean;
  noRibbon?: boolean;
};

/**
 * Sub-page banner with celestial background image, the ribbon title,
 * and a Home / Page breadcrumb capsule.
 * Supports left-aligned layout and raw background image display (without overlay).
 */
export function PageBanner({
  title,
  crumb,
  align = "center",
  noOverlay = true,
  noRibbon = true,
}: PageBannerProps) {
  const { lang } = useLanguage();
  const d = dict[lang];

  const isLeft = align === "left";

  return (
    <section className="relative overflow-hidden border-b-2 border-gold/50 bg-cream">
      {/* Background Image */}
      <div
        className="pointer-events-none absolute inset-0 select-none overflow-hidden"
        aria-hidden="true"
      >
        <img
          src={subBannerImg}
          alt=""
          fetchPriority="high"
          loading="eager"
          decoding="async"
          className="h-full w-full object-cover object-center"
        />
        {/* Overlays: only rendered if noOverlay is false */}
        {!noOverlay && (
          <>
            <div className="absolute inset-0 bg-gradient-to-r from-cream/85 via-cream/50 to-cream/80 sm:from-cream/75 sm:via-cream/40 sm:to-cream/75" />
            <div className="absolute inset-0 bg-gradient-to-b from-cream/40 via-transparent to-cream/60" />
          </>
        )}
      </div>

      <div
        className={`relative z-10 mx-auto flex max-w-6xl xl:max-w-7xl 2xl:max-w-[1400px] flex-col ${
          isLeft
            ? "items-start justify-center text-left"
            : "items-center justify-center text-center"
        } gap-4 px-4 sm:px-6 lg:px-12 xl:px-8 py-12 md:py-16`}
      >
        {noRibbon ? (
          <h1 className="font-display text-2xl font-bold text-[#5a0c18] md:text-3xl">
            {title}
          </h1>
        ) : (
          <h1 className="ribbon-shape px-10 py-3 font-display text-2xl font-bold md:px-14 md:text-3xl">
            {title}
          </h1>
        )}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-1.5 rounded-full border border-gold/40 bg-cream/90 px-4 py-1 text-sm font-semibold text-[#5a0c18] shadow-xs backdrop-blur-sm"
        >
          <Link
            to="/"
            className="font-semibold text-[#5a0c18] transition-colors hover:text-saffron-dark"
          >
            {d.common.home}
          </Link>
          <ChevronRight className="h-4 w-4 text-gold" aria-hidden="true" />
          <span aria-current="page" className="font-semibold text-[#5a0c18]">
            {crumb}
          </span>
        </nav>
      </div>
    </section>
  );
}
