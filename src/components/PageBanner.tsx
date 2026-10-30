import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { dict } from "@/data/site";

type Crumb = { label: string; to?: string };

/**
 * Page banner with the saffron ribbon title echoing the logo banner,
 * plus a Home / Page breadcrumb.
 */
export function PageBanner({ title, crumb }: { title: string; crumb: string }) {
  const { lang } = useLanguage();
  const d = dict[lang];
  return (
    <section className="relative overflow-hidden border-b-2 border-gold/50 bg-peach">
      <div className="mandala-bg absolute inset-0 opacity-70" aria-hidden="true" />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-12 text-center md:py-16">
        <h1 className="ribbon-shape px-10 py-3 font-display text-2xl font-bold md:px-14 md:text-3xl">
          {title}
        </h1>
        <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-sm text-maroon/80">
          <Link to="/" className="font-medium text-maroon hover:text-saffron-dark">
            {d.common.home}
          </Link>
          <ChevronRight className="h-4 w-4 text-gold" aria-hidden="true" />
          <span aria-current="page">{crumb}</span>
        </nav>
      </div>
    </section>
  );
}
