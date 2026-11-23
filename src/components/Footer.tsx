import { Link } from "@tanstack/react-router";
import { Clock, MapPin, Phone } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { ADDRESS, dict, HOURS, ORG_NAME, ORG_NAME_TE } from "@/data/site";
import { PHONES, waLink, WA_DEFAULT_MESSAGE } from "@/lib/whatsapp";
import { SERVICES } from "@/data/services";
import logoUrl from "@/assets/logo.png";
import locationQrUrl from "@/assets/location-qr.png";

export function Footer() {
  const { lang } = useLanguage();
  const d = dict[lang];

  return (
    <footer className="border-t-2 border-gold bg-[#5A0C18] text-cream">
      <div className="mx-auto grid max-w-6xl xl:max-w-7xl 2xl:max-w-[1400px] gap-10 px-4 sm:px-6 lg:px-12 xl:px-8 py-12 md:grid-cols-2 lg:grid-cols-4">
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

          <div className="mt-4">
            <a
              href="https://maps.app.goo.gl/dGgAextgczAS92AS6"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-xl border border-gold/50 bg-[#FFFDF7] p-2.5 shadow-sm transition hover:border-gold hover:shadow-md"
              title={lang === "te" ? "గూగుల్ మ్యాప్స్ లొకేషన్ కోసం స్కాన్ చేయండి లేదా క్లిక్ చేయండి" : "Scan or click for Google Maps location"}
            >
              <img
                src={locationQrUrl}
                alt={lang === "te" ? "గూగుల్ మ్యాప్స్ లొకేషన్ క్యూఆర్ కోడ్" : "Google Maps Location QR Code"}
                width={80}
                height={80}
                className="h-20 w-20 rounded-lg object-contain"
                loading="lazy"
              />
              <div className="pr-1 text-left">
                <span className="block font-display text-xs font-bold text-maroon group-hover:text-gold-dark">
                  {lang === "te" ? "గూగుల్ మ్యాప్స్" : "Google Maps"}
                </span>
                <span className="mt-0.5 block text-[11px] font-medium text-body">
                  {lang === "te" ? "లొకేషన్ కోసం స్కాన్ చేయండి" : "Scan for Location"}
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* Quick links */}
        <nav aria-label="Quick links">
          <h2 className="text-sm font-bold uppercase tracking-wider text-gold-light">
            {d.footer.quickLinks}
          </h2>
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
          <h2 className="text-sm font-bold uppercase tracking-wider text-gold-light">
            {d.footer.ourServices}
          </h2>
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
          <h2 className="text-sm font-bold uppercase tracking-wider text-gold-light">
            {d.footer.contactTitle}
          </h2>
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

      <div className="border-t border-gold/40 px-4 sm:px-6 lg:px-12 xl:px-8 py-4 text-xs text-cream/75">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-1.5 text-center sm:flex-row sm:justify-between sm:text-left xl:max-w-7xl 2xl:max-w-[1400px]">
          <p>{d.footer.rights}</p>
          <p>
            {d.footer.credit}{" "}
            <a
              href="https://ayrondigitalsolutions.com/"
              target="_blank"
              rel="noopener"
              className="font-semibold text-gold-light underline decoration-gold/60 underline-offset-2 transition-colors hover:text-gold"
            >
              Ayrondigitalsolutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
