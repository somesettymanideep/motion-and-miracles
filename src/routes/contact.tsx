import { createFileRoute } from "@tanstack/react-router";
import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { ADDRESS, dict, HOURS } from "@/data/site";
import { PHONES, waLink, WA_DEFAULT_MESSAGE } from "@/lib/whatsapp";
import { PageBanner } from "@/components/PageBanner";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/forms";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Sri Vasishta Jyotishya Parishodhanalayam, Vijayawada" },
      {
        name: "description",
        content:
          "Contact Sri Vasishta Jyotishya Parishodhanalayam — Guntur Vari Veedhi, Krishnalanka, Vijayawada 520013. Phone 98482 56831 · 86395 53329. Hours 9 AM–12 PM, 5 PM–9 PM.",
      },
      {
        property: "og:title",
        content: "Contact | Sri Vasishta Jyotishya Parishodhanalayam, Vijayawada",
      },
      {
        property: "og:description",
        content:
          "Visit us at Krishnalanka, Vijayawada — call 98482 56831 or message on WhatsApp during consultation hours.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { lang } = useLanguage();
  const d = dict[lang];

  return (
    <div>
      <PageBanner
        title={d.nav.contact}
        crumb={d.nav.contact}
        align="center"
        noOverlay
        noRibbon
      />

      {/* Info + form */}
      <section className="bg-cream py-14">
        <div className="mx-auto grid max-w-6xl xl:max-w-7xl 2xl:max-w-[1400px] gap-10 px-4 sm:px-6 lg:px-12 xl:px-8 lg:grid-cols-2">
          {/* Left: info cards */}
          <div className="space-y-5">
            <Reveal>
              <div className="card-warm flex gap-4 p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-gold bg-[#5a0c18] text-gold-light shadow-sm">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h2 className="font-display text-base font-bold text-maroon">
                    {d.common.addressLabel}
                  </h2>
                  <p className="mt-1 text-sm leading-relaxed text-body">
                    {ADDRESS.lines[lang].map((l) => (
                      <span key={l} className="block">
                        {l}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="card-warm flex gap-4 p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-gold bg-[#5a0c18] text-gold-light shadow-sm">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h2 className="font-display text-base font-bold text-maroon">
                    {d.common.phoneLabel}
                  </h2>
                  {PHONES.map((p) => (
                    <a
                      key={p.href}
                      href={p.href}
                      className="mt-1 block text-sm font-semibold text-body hover:text-saffron-dark"
                    >
                      {p.display}
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="card-warm flex gap-4 p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-gold bg-[#5a0c18] text-gold-light shadow-sm">
                  <Clock className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h2 className="font-display text-base font-bold text-maroon">
                    {d.common.openingHours}
                  </h2>
                  <p className="mt-1 text-sm text-body">{HOURS[lang]}</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.24}>
              <a
                href={waLink(WA_DEFAULT_MESSAGE)}
                target="_blank"
                rel="noopener"
                className="btn btn-wa w-full sm:w-auto"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" /> {d.common.whatsappUs}
              </a>
            </Reveal>
          </div>

          {/* Right: form */}
          <Reveal delay={0.1}>
            <div className="card-warm p-6 md:p-8">
              <h2 className="font-display text-xl font-bold text-maroon">{d.contact.formTitle}</h2>
              <div className="gold-divider my-5" aria-hidden="true" />
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Map */}
      <section className="border-t-2 border-gold/40 bg-peach py-14">
        <div className="mx-auto max-w-6xl xl:max-w-7xl 2xl:max-w-[1400px] px-4 sm:px-6 lg:px-12 xl:px-8">
          <Reveal className="mb-8 text-center">
            <h2 className="font-display text-2xl font-bold text-maroon">{d.contact.mapTitle}</h2>
            <div className="gold-divider mx-auto mt-4 w-40" aria-hidden="true" />
          </Reveal>
          <Reveal>
            <div className="overflow-hidden rounded-3xl border-2 border-gold bg-card shadow-warm">
              <iframe
                title="Map — Krishnalanka, Vijayawada 520013"
                src={`https://www.google.com/maps?q=${encodeURIComponent(ADDRESS.mapsQuery)}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[360px] w-full border-0 md:h-[420px]"
              />
            </div>
            <div className="mt-6 text-center">
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(ADDRESS.mapsQuery)}`}
                target="_blank"
                rel="noopener"
                className="btn btn-saffron"
              >
                <MapPin className="h-4 w-4" aria-hidden="true" /> {d.common.getDirections}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
