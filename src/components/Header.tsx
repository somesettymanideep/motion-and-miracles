import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { dict, ORG_NAME, ORG_NAME_TE } from "@/data/site";
import { PHONES } from "@/lib/whatsapp";
import logoUrl from "@/assets/logo.png";

const NAV = [
  { to: "/", key: "home" },
  { to: "/about", key: "about" },
  { to: "/services", key: "services" },
  { to: "/contact", key: "contact" },
] as const;

export function Header() {
  const { lang, setLang } = useLanguage();
  const d = dict[lang];
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-gold/70 bg-cream/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex h-[72px] max-w-6xl xl:max-w-7xl 2xl:max-w-[1400px] items-center gap-3 px-4 sm:px-6 lg:px-12 xl:px-8">
        {/* Brand */}
        <Link to="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src={logoUrl}
            alt={`${ORG_NAME} emblem`}
            width={44}
            height={44}
            className="h-11 w-11 shrink-0 rounded-full border-2 border-gold bg-cream object-cover"
            style={{ objectPosition: "50% 20%" }}
          />
          <span className="min-w-0">
            <span className="block truncate font-display text-base font-bold leading-tight text-maroon sm:text-lg">
              {lang === "te" ? ORG_NAME_TE : ORG_NAME}
            </span>
            <span className="hidden text-[11px] font-medium tracking-wide text-gold sm:block">
              Sanatana Jyotishyam · Vedic Samskaras · Shastric Remedies
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="ml-auto hidden items-center gap-6 md:flex" aria-label="Main">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-semibold text-maroon transition-colors hover:text-saffron-dark"
              activeProps={{
                className:
                  "text-saffron-dark underline decoration-gold decoration-2 underline-offset-8",
              }}
            >
              {d.nav[item.key]}
            </Link>
          ))}

          {/* Language toggle pill */}
          <div
            className="flex items-center rounded-full border-2 border-gold bg-card p-0.5 text-xs font-semibold"
            role="group"
            aria-label="Language"
          >
            <button
              type="button"
              onClick={() => setLang("en")}
              aria-pressed={lang === "en"}
              className={`rounded-full px-2.5 py-1 transition-colors ${
                lang === "en" ? "bg-saffron text-white" : "text-maroon hover:bg-gold/15"
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLang("te")}
              aria-pressed={lang === "te"}
              className={`rounded-full px-2.5 py-1 font-telugu transition-colors ${
                lang === "te" ? "bg-saffron text-white" : "text-maroon hover:bg-gold/15"
              }`}
            >
              తెలుగు
            </button>
          </div>

          <a href={PHONES[0].href} className="btn btn-saffron">
            <Phone className="h-4 w-4" aria-hidden="true" />
            {d.nav.callNow}
          </a>
        </nav>

        {/* Mobile controls */}
        <div className="ml-auto flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={() => setLang(lang === "en" ? "te" : "en")}
            className="rounded-full border-2 border-gold px-2.5 py-1 text-xs font-semibold text-maroon"
            aria-label="Toggle language"
          >
            {lang === "en" ? "తెలుగు" : "EN"}
          </button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="rounded-lg p-2 text-maroon"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-gold/40 bg-cream px-4 py-3 md:hidden" aria-label="Mobile">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-maroon hover:bg-gold/10"
              activeProps={{ className: "bg-gold/15 text-saffron-dark" }}
            >
              {d.nav[item.key]}
            </Link>
          ))}
          <a href={PHONES[0].href} className="btn btn-saffron mt-2 w-full">
            <Phone className="h-4 w-4" aria-hidden="true" />
            {d.nav.callNow}
          </a>
        </nav>
      )}
    </header>
  );
}
