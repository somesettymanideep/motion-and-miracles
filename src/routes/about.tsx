import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, HandHeart, MessageCircle, Phone, ScrollText } from "lucide-react";
import { useLanguage, useTr } from "@/lib/i18n";
import { dict, GURU_NAME, VALUES } from "@/data/site";
import { PHONES, waLink, WA_DEFAULT_MESSAGE } from "@/lib/whatsapp";
import { PageBanner } from "@/components/PageBanner";
import { Reveal } from "@/components/Reveal";
import logoUrl from "@/assets/logo.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Sri Vasishta Jyotishya Parishodhanalayam, Vijayawada" },
      {
        name: "description",
        content:
          "Sri Vasishta Jyotishya Parishodhanalayam — a centre rooted in Vedic tradition and Jyotisha Shastra in Krishnalanka, Vijayawada, guided by Vissavajhula Nagesh Sarma.",
      },
      { property: "og:title", content: "About | Sri Vasishta Jyotishya Parishodhanalayam" },
      {
        property: "og:description",
        content:
          "A centre rooted in Vedic tradition and Jyotisha Shastra — horoscope study, shastric remedies and life samskaras in Vijayawada.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: AboutPage,
});

const VALUE_ICONS = {
  shastra: ScrollText,
  tradition: BookOpen,
  service: HandHeart,
} as const;

function AboutPage() {
  const { lang } = useLanguage();
  const tr = useTr();
  const d = dict[lang];

  return (
    <div>
      <PageBanner title={d.about.bannerTitle} crumb={d.common.aboutUs} />

      {/* About */}
      <section className="bg-cream py-14">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-maroon md:text-3xl">
              {d.about.title}
            </h2>
            <div className="gold-divider mt-4 w-40" aria-hidden="true" />
            <p className="mt-5 text-sm leading-relaxed text-body md:text-base">{d.about.para}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="shadow-warm mx-auto max-w-sm rounded-3xl border-2 border-gold bg-card p-6 text-center">
              <img
                src={logoUrl}
                alt="Sri Vasishta Jyotishya Parishodhanalayam emblem"
                width={280}
                height={280}
                loading="lazy"
                className="mx-auto h-56 w-auto"
              />
              <p className="font-telugu mt-3 text-lg font-bold text-saffron-dark">
                శ్రీ వశిష్ఠ జ్యోతిష్య పరిశోధనాలయం
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Guru profile */}
      <section className="border-y-2 border-gold/40 bg-peach py-14">
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <div className="card-warm flex flex-col items-center gap-6 p-8 text-center sm:flex-row sm:text-left">
              <div className="flex h-32 w-32 shrink-0 items-center justify-center overflow-hidden rounded-full border-4 border-gold bg-cream">
                <img
                  src={logoUrl}
                  alt={tr(GURU_NAME)}
                  width={128}
                  height={128}
                  loading="lazy"
                  className="h-full w-full object-cover"
                  style={{ objectPosition: "50% 18%" }}
                />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-saffron-dark">
                  {d.about.guruSection}
                </p>
                <h2 className="mt-1 font-display text-2xl font-bold text-maroon">{tr(GURU_NAME)}</h2>
                <p className="mt-1 text-sm font-semibold text-gold">{d.about.guruRole}</p>
                <p className="mt-3 rounded-lg border border-dashed border-gold bg-peach px-4 py-3 text-sm italic text-muted-foreground">
                  {d.about.guruPlaceholder}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="bg-cream py-14">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal className="mb-10 text-center">
            <h2 className="font-display text-2xl font-bold text-maroon md:text-3xl">
              {d.about.valuesTitle}
            </h2>
            <div className="gold-divider mx-auto mt-4 w-40" aria-hidden="true" />
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-3">
            {VALUES.map((v, i) => {
              const Icon = VALUE_ICONS[v.icon];
              return (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="card-warm h-full p-6 text-center">
                    <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border-2 border-gold bg-gold-light/30 text-maroon">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 font-display text-lg font-bold text-maroon">{tr(v.title)}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-body">{tr(v.text)}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="bg-gradient-to-b from-saffron to-saffron-dark py-12">
        <Reveal className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-display text-2xl font-bold text-white md:text-3xl">
            {d.about.ctaTitle}
          </h2>
          <p className="mt-2 text-sm text-white/90">{d.about.ctaSub}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href={PHONES[0].href} className="btn bg-card text-maroon hover:bg-cream">
              <Phone className="h-4 w-4" aria-hidden="true" /> {d.nav.callNow}
            </a>
            <a
              href={waLink(WA_DEFAULT_MESSAGE)}
              target="_blank"
              rel="noopener"
              className="btn btn-wa"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" /> {d.common.whatsappUs}
            </a>
          </div>
          <p className="mt-5 text-xs text-white/80">
            {d.contact.bannerTitle}:{" "}
            <Link to="/contact" className="font-semibold underline">
              {d.nav.contact}
            </Link>
          </p>
        </Reveal>
      </section>
    </div>
  );
}
