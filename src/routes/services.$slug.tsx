import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CheckCircle2, ChevronRight, Clock, Flame, MapPin, MessageCircle, Phone, Sparkles } from "lucide-react";
import { useLanguage, useTr, type Bi } from "@/lib/i18n";
import { ADDRESS, HOURS, dict } from "@/data/site";
import { SERVICES } from "@/data/services";
import { PHONES, waLink } from "@/lib/whatsapp";
import { Reveal } from "@/components/Reveal";
import { PageBanner } from "@/components/PageBanner";
import { ConsultationForm } from "@/components/forms";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = SERVICES.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return service;
  },
  head: ({ loaderData }) =>
    loaderData
      ? {
          meta: [
            { title: loaderData.detail.seo.title },
            { name: "description", content: loaderData.detail.seo.description },
            { property: "og:title", content: loaderData.detail.seo.title },
            { property: "og:description", content: loaderData.detail.seo.description },
            { property: "og:type", content: "article" },
            { name: "twitter:card", content: "summary" },
          ],
        }
      : {
          meta: [{ title: "Service | Sri Vasishta Jyotishya Parishodhanalayam" }],
        },
  component: ServiceDetailPage,
});

function ListBlock({
  title,
  items,
  icon,
}: {
  title: string;
  items: Bi[];
  icon: "check" | "flame";
}) {
  const tr = useTr();
  if (!items || items.length === 0) return null;
  const Icon = icon === "check" ? CheckCircle2 : Flame;
  return (
    <Reveal>
      <h2 className="font-display text-xl font-bold text-maroon">{title}</h2>
      <div className="gold-divider mt-3 w-32" aria-hidden="true" />
      <ul className="mt-4 space-y-2.5">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed text-body">
            <Icon className="mt-0.5 h-4.5 w-4.5 shrink-0 text-gold" aria-hidden="true" />
            <span>{tr(item)}</span>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

function ServiceDetailPage() {
  const { lang } = useLanguage();
  const tr = useTr();
  const d = dict[lang];
  const service = Route.useLoaderData();
  const detail = service.detail;

  const consultationMsg = `Namaste, I would like to consult about ${service.name.en}.`;

  return (
    <div>
      {/* Hero banner — shared sub-page banner (same image as About page) */}
      <PageBanner
        title={service.name[lang]}
        middle={d.nav.services}
        middleTo="/services"
        crumb={service.name[lang]}
      />

      {/* Intro + lists */}
      <section className="bg-cream py-14">
        <div className="mx-auto grid max-w-6xl xl:max-w-7xl 2xl:max-w-[1400px] gap-10 px-4 sm:px-6 lg:px-12 xl:px-8 lg:grid-cols-5">
          <div className="space-y-10 lg:col-span-3">
            <Reveal>
              <p className="text-base leading-relaxed text-body">{tr(detail.intro)}</p>
            </Reveal>
            <ListBlock
              title={tr({ en: "What We Examine", te: "మేము ఏమి పరిశీలిస్తాము" })}
              items={detail.examines ?? []}
              icon="check"
            />
            {detail.extra && (
              <ListBlock title={tr(detail.extra.title)} items={detail.extra.items} icon="check" />
            )}
            <ListBlock
              title={tr({ en: "Suggested Remedies", te: "సూచించే పరిహారాలు" })}
              items={detail.remedies ?? []}
              icon="flame"
            />
            {detail.samskaras && (
              <Reveal>
                <h2 className="font-display text-xl font-bold text-maroon">
                  {tr({ en: "Related Samskaras", te: "సంబంధిత సంస్కారాలు" })}
                </h2>
                <div className="gold-divider mt-3 w-32" aria-hidden="true" />
                <ul className="mt-4 flex flex-wrap gap-2">
                  {detail.samskaras.map((s, i) => (
                    <li
                      key={i}
                      className="rounded-full border border-gold bg-gold-light/25 px-3.5 py-1.5 text-sm font-medium text-maroon"
                    >
                      {tr(s)}
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}
            {detail.note && (
              <Reveal>
                <div className="rounded-xl border-2 border-gold bg-peach p-5">
                  <p className="flex items-start gap-2.5 text-sm leading-relaxed text-maroon">
                    <Sparkles
                      className="mt-0.5 h-4.5 w-4.5 shrink-0 text-saffron-dark"
                      aria-hidden="true"
                    />
                    <span>{tr(detail.note)}</span>
                  </p>
                </div>
              </Reveal>
            )}
          </div>

          {/* Consultation CTA card */}
          <aside className="lg:col-span-2">
            <Reveal delay={0.1}>
              <div className="card-warm sticky top-24 p-6">
                <h2 className="font-display text-lg font-bold text-maroon">
                  {tr({ en: "Book a Consultation", te: "సంప్రదింపు బుక్ చేయండి" })}
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  {tr({
                    en: "Call or send your details on WhatsApp.",
                    te: "కాల్ చేయండి లేదా వాట్సాప్‌లో వివరాలు పంపండి.",
                  })}
                </p>
                <div className="gold-divider my-4" aria-hidden="true" />
                <div className="space-y-3">
                  <a href={PHONES[0].href} className="btn btn-saffron w-full">
                    <Phone className="h-4 w-4" aria-hidden="true" /> {PHONES[0].display}
                  </a>
                  <a
                    href={waLink(consultationMsg)}
                    target="_blank"
                    rel="noopener"
                    className="btn btn-wa w-full"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" /> WhatsApp
                  </a>
                </div>
                <ul className="mt-5 space-y-2.5 text-sm text-body">
                  <li className="flex gap-2.5">
                    <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                    <span>{HOURS[lang]}</span>
                  </li>
                  <li className="flex gap-2.5">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                    <span>
                      {ADDRESS.lines[lang].map((l) => (
                        <span key={l} className="block">
                          {l}
                        </span>
                      ))}
                    </span>
                  </li>
                </ul>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      {/* Other services */}
      <section className="border-t-2 border-gold/40 bg-peach py-14">
        <div className="mx-auto max-w-6xl xl:max-w-7xl 2xl:max-w-[1400px] px-4 sm:px-6 lg:px-12 xl:px-8">
          <Reveal className="mb-8 text-center">
            <h2 className="font-display text-2xl font-bold text-maroon">
              {tr({ en: "Other Services", te: "ఇతర సేవలు" })}
            </h2>
            <div className="gold-divider mx-auto mt-4 w-40" aria-hidden="true" />
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.filter((s) => s.slug !== service.slug)
              .slice(0, 4)
              .map((s, i) => (
                <Reveal key={s.slug} delay={i * 0.08}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="card-warm group flex items-center gap-3 p-3 transition-transform hover:-translate-y-0.5"
                  >
                    <img
                      src={s.image}
                      alt={s.imageAlt}
                      width={64}
                      height={64}
                      loading="lazy"
                      className="h-16 w-16 shrink-0 rounded-xl object-cover"
                    />
                    <span className="text-sm font-semibold text-maroon group-hover:text-saffron-dark">
                      {s.name[lang]}
                    </span>
                  </Link>
                </Reveal>
              ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/services" className="btn btn-gold-outline">
              {tr({ en: "View All Services", te: "అన్ని సేవలు చూడండి" })}
            </Link>
          </div>
        </div>
      </section>

      {/* Common contact block */}
      <section className="bg-cream py-14">
        <div className="mx-auto grid max-w-6xl xl:max-w-7xl 2xl:max-w-[1400px] gap-10 px-4 sm:px-6 lg:px-12 xl:px-8 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-xl font-bold text-maroon">
              {tr({ en: "Contact", te: "సంప్రదింపు" })}
            </h2>
            <div className="gold-divider mt-3 w-32" aria-hidden="true" />
            <ul className="mt-5 space-y-4 text-sm text-body">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                <span>
                  {ADDRESS.lines[lang].map((l) => (
                    <span key={l} className="block">
                      {l}
                    </span>
                  ))}
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                <span>
                  {PHONES.map((p) => (
                    <a key={p.href} href={p.href} className="block hover:text-saffron-dark">
                      {p.display}
                    </a>
                  ))}
                </span>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                <span>{HOURS[lang]}</span>
              </li>
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="card-warm p-6">
              <h2 className="font-display text-lg font-bold text-maroon">
                {tr({ en: "Send your details", te: "మీ వివరాలు పంపండి" })}
              </h2>
              <div className="mt-4">
                <ConsultationForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
