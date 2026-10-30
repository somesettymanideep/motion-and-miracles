import { Link } from "@tanstack/react-router";
import { Clock, Facebook, Instagram, MapPin, Phone, Youtube } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { ADDRESS, dict, HOURS, ORG_NAME, ORG_NAME_TE } from "@/data/site";
import { PHONES, waLink, WA_DEFAULT_MESSAGE } from "@/lib/whatsapp";
import { SERVICES } from "@/data/services";
import logoUrl from "@/assets/logo.png";

export function Footer() {
  const { lang } = useLanguage();
  const d = dict[lang];

  return (
    <footer className="border-t-2 border-gold bg-maroon-deep text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3">
            <img
              src={logoUrl}
              alt={`${lang === "te" ? ORG_NAME_TE : ORG_NAME} emblem`}
              width={52}
              height={52}
              loading="lazy"
              className="h-13 w-13 rounded-full border-2 border-gold bg-maroon object-cover"
              style={{ objectPosition: "50% 20%" }}
            />
            <span className="font-display text-base font-bold leading-tight text-gold-light">
              {lang === "te" ? ORG_NAME_TE : ORG_NAME}
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-cream/85">{d.footer.aboutLine}</p>
          <div className="mt-4 flex gap-3">
            {[
              { Icon: Facebook, label: "Facebook" },
              { Icon: Instagram, label: "Instagram" },
              { Icon: Youtube, label: "YouTube" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={`${label} (coming soon)`}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/60 text-gold-light transition-colors hover:bg-gold/20"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <nav aria-label="Quick links">
          <h2 className="text-sm font-bold uppercase tracking-wider text-gold-light">{d.footer.quickLinks}</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {(
              [
                { to: "/", key: "home" },
                { to: "/about", key: "about" },
                { to: "/services", key: "services" },
                { to: "/contact", key: "contact" },
              ] as const
            ).map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-cream/85 transition-colors hover:text-gold-light">
                  {d.nav[l.key]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Services */}
        <nav aria-label="Services">
          <h2 className="text-sm font-bold uppercase tracking-wider text-gold-light">{d.footer.ourServices}</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {SERVICES.slice(0, 5).map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="text-cream/85 transition-colors hover:text-gold-light"
                >
                  {s.name[lang]}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/services" className="font-semibold text-gold-light hover:underline">
                {d.common.viewAllServices}
              </Link>
            </li>
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-gold-light">{d.footer.contactTitle}</h2>
          <ul className="mt-4 space-y-3 text-sm text-cream/85">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-light" aria-hidden="true" />
              <span>
                {ADDRESS.lines[lang].map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </span>
            </li>
            <li className="flex gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-light" aria-hidden="true" />
              <span>
                {PHONES.map((p) => (
                  <a key={p.href} href={p.href} className="block hover:text-gold-light">
                    {p.display}
                  </a>
                ))}
              </span>
            </li>
            <li className="flex gap-2">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold-light" aria-hidden="true" />
              <span>{HOURS[lang]}</span>
            </li>
          </ul>
          <a
            href={waLink(WA_DEFAULT_MESSAGE)}
            target="_blank"
            rel="noopener"
            className="btn btn-wa mt-4"
          >
            {d.common.whatsappUs}
          </a>
        </div>
      </div>

      <div className="border-t border-gold/40 px-4 py-4 text-center text-xs text-cream/75">
        {d.footer.rights}
      </div>
    </footer>
  );
}
