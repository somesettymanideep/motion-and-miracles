import { useEffect, useRef } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import gsap from "gsap";
import { MapPin, MessageCircle, Phone } from "lucide-react";
import { useLanguage, useTr } from "@/lib/i18n";
import { dict, FAQS, STEPS } from "@/data/site";
import { SERVICES } from "@/data/services";
import { PHONES, waLink, WA_DEFAULT_MESSAGE } from "@/lib/whatsapp";
import { HeroEmblem } from "@/components/HeroEmblem";
import heroBg from "@/assets/hero-bg.png";
import { ServiceCard } from "@/components/ServiceCard";
import { Reveal } from "@/components/Reveal";
import { ConsultationForm } from "@/components/forms";
import { FaqAccordion } from "@/components/FaqAccordion";
import { Testimonials } from "@/components/Testimonials";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Sri Vasishta Jyotishya Parishodhanalayam | Vijayawada Astrologers | Nagesh Sarma",
      },
      {
        name: "description",
        content:
          "Horoscope analysis, Navagraha Shanti, Kalasarpa dosha nivarana, marriage muhurta, griha pravesam, homas and Vedic samskaras by Vissavajhula Nagesh Sarma at Krishnalanka, Vijayawada.",
      },
      { property: "og:title", content: "Sri Vasishta Jyotishya Parishodhanalayam | Vijayawada" },
      {
        property: "og:description",
        content:
          "Sanatana Jyotishyam · Vedic Samskaras · Shastric Remedies — horoscope analysis, navagraha shantis, homas and samskaras in Krishnalanka, Vijayawada.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <Reveal className="mx-auto mb-10 max-w-2xl text-center">
      <h2 className="font-display text-2xl font-bold text-maroon md:text-3xl">{title}</h2>
      {subtitle && <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>}
      <div className="gold-divider mx-auto mt-4 w-40" aria-hidden="true" />
    </Reveal>
  );
}

function Index() {
  const { lang } = useLanguage();
  const tr = useTr();
  const d = dict[lang];
  const heroRef = useRef<HTMLDivElement>(null);

  // GSAP hero entrance timeline
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-hero-stagger]", {
        opacity: 0,
        y: 36,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        delay: 0.1,
      });
      gsap.from("[data-hero-emblem]", {
        opacity: 0,
        scale: 0.85,
        duration: 1.2,
        ease: "power2.out",
        delay: 0.25,
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef}>
      {/* 1 — HERO */}
      <section className="relative overflow-hidden bg-cream">
        {/* Background Image with warm atmospheric overlays */}
        <div
          className="pointer-events-none absolute inset-0 select-none overflow-hidden"
          aria-hidden="true"
        >
          <img
            src={heroBg}
            alt="Sacred Vedic temple on tranquil waters at golden sunrise"
            fetchPriority="high"
            loading="eager"
            decoding="async"
            className="h-full w-full object-cover object-center md:object-[center_35%]"
          />
          {/* Subtle warm wash: preserves the glorious golden temple & sunrise while ensuring contrast for typography */}
          <div className="absolute inset-0 bg-gradient-to-r from-cream/95 via-cream/85 to-cream/65 md:from-cream/92 md:via-cream/70 md:to-cream/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-cream via-transparent to-cream/30" />
          <div className="zodiac-pattern absolute inset-0 opacity-25" />
        </div>

        <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:py-20">
          <div className="text-center md:text-left">
            <p
              data-hero-stagger
              className="font-telugu text-3xl font-bold text-saffron"
              aria-hidden="true"
            >
              {d.home.om}
            </p>
            <h1
              data-hero-stagger
              className="mt-3 font-display text-3xl font-bold leading-tight text-maroon md:text-[2.6rem]"
            >
              {lang === "te"
                ? "శ్రీ వశిష్ఠ జ్యోతిష్య పరిశోధనాలయం"
                : "Sri Vasishta Jyotishya Parishodhanalayam"}
            </h1>
            <p
              data-hero-stagger
              className="mt-3 text-sm font-semibold tracking-wide text-saffron-dark"
            >
              Sanatana Jyotishyam · Vedic Samskaras · Shastric Remedies
            </p>
            <p data-hero-stagger className="mt-4 text-sm leading-relaxed text-body md:text-base">
              {d.home.welcome}
            </p>
            <div
              data-hero-stagger
              className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start"
            >
              <a href={PHONES[0].href} className="btn btn-saffron">
                <Phone className="h-4 w-4" aria-hidden="true" /> 📞 {d.nav.callNow}
              </a>
              <a
                href={waLink(WA_DEFAULT_MESSAGE)}
                target="_blank"
                rel="noopener"
                className="btn btn-gold-outline bg-cream/80 backdrop-blur-sm"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" /> 💬 {d.common.whatsappUs}
              </a>
              <Link to="/contact" className="btn btn-maroon-outline bg-cream/80 backdrop-blur-sm">
                <MapPin className="h-4 w-4" aria-hidden="true" /> 📍 {d.common.addressLabel}
              </Link>
            </div>
          </div>
          <div data-hero-emblem>
            <HeroEmblem />
          </div>
        </div>
      </section>

      {/* 2 — OUR SERVICES */}
      <section className="bg-cream py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionTitle title={d.home.servicesTitle} subtitle={d.home.servicesSubtitle} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, i) => (
              <Reveal key={service.slug} delay={(i % 3) * 0.08}>
                <ServiceCard service={service} priority={i < 3} />
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Reveal>
              <Link to="/services" className="btn btn-gold-outline">
                {d.common.viewAllServices}
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3 — HOW IT WORKS */}
      <section className="relative overflow-hidden border-y-2 border-gold/40 bg-peach py-16">
        <div className="mandala-bg absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="relative mx-auto max-w-5xl px-4">
          <SectionTitle title={d.home.howTitle} />
          <div className="relative grid gap-10 md:grid-cols-3">
            <div
              className="absolute left-[17%] right-[17%] top-7 hidden border-t-2 border-dashed border-gold/70 md:block"
              aria-hidden="true"
            />
            {STEPS.map((step, i) => (
              <Reveal key={i} delay={i * 0.12} className="relative text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border-2 border-gold bg-gradient-to-b from-gold-light to-gold font-display text-xl font-bold text-maroon shadow-warm">
                  {i + 1}
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-maroon">
                  {tr(step.title)}
                </h3>
                <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-body">
                  {tr(step.text)}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4 — CONSULTATION FORM + FAQ */}
      <section className="bg-cream py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-2">
          <Reveal>
            <div className="card-warm p-6 md:p-8">
              <h2 className="font-display text-xl font-bold text-maroon md:text-2xl">
                {d.home.consultTitle}
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">{d.home.consultSubtitle}</p>
              <div className="gold-divider my-5" aria-hidden="true" />
              <ConsultationForm />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-xl font-bold text-maroon md:text-2xl">
              {d.home.faqTitle}
            </h2>
            <div className="gold-divider my-5" aria-hidden="true" />
            <FaqAccordion items={FAQS} tr={tr} />
          </Reveal>
        </div>
      </section>

      {/* 5 — TESTIMONIALS */}
      <section className="border-t-2 border-gold/40 bg-peach py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionTitle title={d.home.testimonialsTitle} />
          <p className="-mt-6 mb-8 text-center text-xs italic text-muted-foreground">
            {d.home.testimonialsNote}
          </p>
          <Reveal>
            <Testimonials />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
