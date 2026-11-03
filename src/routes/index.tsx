import { useEffect, useRef } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import gsap from "gsap";
import { ChevronsDown, ChevronsRight, MapPin, MessageCircle, Phone } from "lucide-react";
import guruji1Cutout from "@/assets/about/guruji1-cutout.png";
import guruji2Cutout from "@/assets/about/guruji2-cutout.png";
import gurujiBg from "@/assets/about/guruji-bg.png";
import templeGopuram from "@/assets/about/temple-gopuram.jpg";
import zodiacWheelOm from "@/assets/zodiac-wheel-om.png";
import { useLanguage, useTr } from "@/lib/i18n";
import { dict, FAQS, STEPS } from "@/data/site";
import { SERVICES } from "@/data/services";
import { PHONES, waLink, WA_DEFAULT_MESSAGE } from "@/lib/whatsapp";
import { HeroEmblem } from "@/components/HeroEmblem";
import heroBg from "@/assets/hero-bg.png";
import omDivider from "@/assets/om-divider.webp";
import horoscopeIcon from "@/assets/horoscope.svg";
import vedicIcon from "@/assets/vedic.svg";
import omIcon from "@/assets/om.svg";
import howItWorksBg from "@/assets/how-it-works-bg.png";
import { SacredLotusIcon } from "@/components/SacredLotusIcon";
import { ServiceCard } from "@/components/ServiceCard";
import { Reveal } from "@/components/Reveal";
import { ConsultationForm } from "@/components/forms";
import { FaqAccordion } from "@/components/FaqAccordion";
import { Testimonials } from "@/components/Testimonials";
import { Button } from "@/components/ui/button";

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

/** Step 1: Chat / Consultation Bubble Icon */
function ConsultationBubbleIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect
        x="3"
        y="4"
        width="18"
        height="12"
        rx="3"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M6 16L4 19.5L8.5 16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="8" cy="10" r="1.2" fill="currentColor" />
      <circle cx="12" cy="10" r="1.2" fill="currentColor" />
      <circle cx="16" cy="10" r="1.2" fill="currentColor" />
    </svg>
  );
}

/** Step 2: Kundali / Vedic Horoscope Chart Icon */
function KundaliHoroscopeIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <line x1="3" y1="3" x2="21" y2="21" stroke="currentColor" strokeWidth="1.5" />
      <line x1="21" y1="3" x2="3" y2="21" stroke="currentColor" strokeWidth="1.5" />
      <polygon
        points="12,3 21,12 12,21 3,12"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  );
}

const STEP_ICONS = [ConsultationBubbleIcon, KundaliHoroscopeIcon, SacredLotusIcon];

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

        <div className="hero-reference-layout relative z-10 mx-auto grid max-w-[1400px] items-center gap-8 px-4 pb-10 pt-0 sm:px-6 lg:px-8 lg:pb-14 lg:pt-0">
          <div className="hero-reference-copy order-2 min-w-0 text-left lg:order-1">

            <img data-hero-stagger src={omDivider} alt="" aria-hidden="true" width={1902} height={368} className="hero-om-image" />
            <h1 data-hero-stagger className="hero-reference-title">
              <span>{d.home.nameFirst}</span>
              <span>{d.home.nameSecond}</span>
            </h1>
            <p data-hero-stagger className="hero-reference-tagline">{d.home.tagline}</p>
            <p data-hero-stagger className="hero-reference-welcome">{d.home.welcome}</p>
            <div data-hero-stagger className="hero-service-labels">
              <div className="hero-service-label"><img src={horoscopeIcon} alt="" aria-hidden="true" className="hero-service-icon" /><span>{d.home.horoscopeLabel}</span></div>
              <div className="hero-service-label"><img src={vedicIcon} alt="" aria-hidden="true" className="hero-service-icon" /><span>{d.home.samskarasLabel}</span></div>
              <div className="hero-service-label"><img src={omIcon} alt="" aria-hidden="true" className="hero-service-icon" /><span>{d.home.remediesLabel}</span></div>
            </div>
            <div data-hero-stagger className="hero-reference-actions">
              <Button asChild className="hero-reference-action hero-action-call">
                <a href={PHONES[0].href}><Phone aria-hidden="true" />{d.nav.callNow}</a>
              </Button>
              <Button asChild variant="outline" className="hero-reference-action hero-action-whatsapp"><a
                href={waLink(WA_DEFAULT_MESSAGE)}
                target="_blank"
                rel="noopener"
              >
                <MessageCircle aria-hidden="true" /> {d.common.whatsappUs}
              </a></Button>
              <Button asChild variant="outline" className="hero-reference-action hero-action-address"><Link to="/contact">
                <MapPin aria-hidden="true" /> {d.common.addressLabel}
              </Link></Button>
            </div>
          </div>
          <div data-hero-emblem className="order-1 lg:order-2">
            <HeroEmblem />
          </div>

        </div>
      </section>

      {/* 2 — OUR GURUJIS (reference layout: temple left, zodiac mandala right, portraits flanking a central Om wheel) */}
      <section className="relative overflow-hidden py-0">
        {/* Golden cloud backdrop */}
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${gurujiBg})` }}
          aria-hidden="true"
        />
        {/* Faded temple silhouette — left */}
        <img
          src={templeGopuram}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -left-10 top-0 h-full w-auto max-w-none object-cover opacity-[0.14] [mask-image:linear-gradient(to_right,black_55%,transparent)]"
        />
        {/* Faded zodiac mandala — right */}
        <img
          src={zodiacWheelOm}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 top-1/2 hidden w-[420px] -translate-y-1/2 opacity-[0.13] md:block [mask-image:linear-gradient(to_left,black_55%,transparent)]"
        />

        <div className="relative z-10 mx-auto max-w-6xl px-4 pb-24 pt-12 sm:px-6 md:pt-16 lg:px-12">
          <Reveal>
            {/* Heading ornament: line — diamond — lotus — diamond — line */}
            <div className="flex items-center justify-center gap-3" aria-hidden="true">
              <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold sm:w-28" />
              <span className="h-2 w-2 rotate-45 bg-gold" />
              <SacredLotusIcon className="h-8 w-8 text-gold" />
              <span className="h-2 w-2 rotate-45 bg-gold" />
              <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold sm:w-28" />
            </div>

            <h2 className="mt-3 text-center font-display text-4xl font-bold tracking-tight text-maroon sm:text-5xl">
              {tr({ en: "Our Gurujis", te: "మా గురూజీలు" })}
            </h2>
            <p className="mt-2 text-center font-display text-base italic text-maroon/85 sm:text-lg">
              {tr({
                en: "Guidance from Experienced and Vedic Scholars",
                te: "అనుభవజ్ఞులైన వేద పండితుల మార్గదర్శకత్వం",
              })}
            </p>
            <div className="mt-3 flex items-center justify-center gap-2" aria-hidden="true">
              <span className="h-px w-12 bg-gold/80" />
              <SacredLotusIcon className="h-4 w-4 text-gold" />
              <span className="h-px w-12 bg-gold/80" />
            </div>
          </Reveal>

          {/* Portraits flanking the central Om wheel */}
          <div className="mt-10 grid items-end gap-12 md:grid-cols-[1fr_auto_1fr] md:gap-4">
            {/* Guruji 1 — left */}
            <Reveal delay={0.08} className="flex flex-col items-center">
              <div className="relative flex flex-col items-center">
                <img
                  src={guruji1Cutout}
                  alt="Vissavajhula Nagesh Sharma"
                  className="w-56 drop-shadow-[0_18px_28px_rgba(90,12,24,0.28)] sm:w-64 md:w-72"
                  loading="lazy"
                />
                {/* Maroon name plate overlapping the portrait base */}
                <div className="relative z-10 -mt-10 w-full max-w-xs rounded-xl border-2 border-gold bg-[#5a0c18] px-4 py-3 text-center shadow-warm">
                  <h3 className="font-display text-lg font-bold leading-snug text-[#FFFBF0] sm:text-xl">
                    {tr({ en: "Vissavajhula Nagesh Sharma", te: "విస్సావఝుల నాగేశ్ శర్మ" })}
                  </h3>
                  <p className="mt-0.5 font-display text-sm italic text-gold-light">
                    {tr({ en: "Founder Acharya", te: "వ్యవస్థాపక ఆచార్యులు" })}
                  </p>
                </div>
                <div className="mt-3 flex items-center gap-2" aria-hidden="true">
                  <span className="h-px w-10 bg-gold/80" />
                  <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
                  <span className="h-px w-10 bg-gold/80" />
                </div>
                <a
                  href={waLink("Namaste Nagesh Sharma garu, I would like to seek spiritual guidance.")}
                  target="_blank"
                  rel="noopener"
                  className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-[#5a0c18] px-5 py-2 text-xs font-semibold text-white shadow-sm transition-all hover:scale-105 hover:bg-maroon"
                >
                  <span>{tr({ en: "Know More →", te: "మరింత తెలుసుకోండి →" })}</span>
                </a>
              </div>
            </Reveal>

            {/* Central Om wheel */}
            <Reveal delay={0.12} className="hidden justify-center md:flex">
              <img
                src={zodiacWheelOm}
                alt={tr({ en: "Golden zodiac wheel with Om at its centre", te: "మధ్యలో ఓంకారంతో బంగారు రాశి చక్రం" })}
                className="w-44 drop-shadow-[0_10px_24px_rgba(212,160,23,0.45)] lg:w-52"
                loading="lazy"
              />
            </Reveal>

            {/* Guruji 2 — right */}
            <Reveal delay={0.16} className="flex flex-col items-center">
              <div className="relative flex flex-col items-center">
                <img
                  src={guruji2Cutout}
                  alt="V S N D Kowndinya Sarma"
                  className="w-56 drop-shadow-[0_18px_28px_rgba(90,12,24,0.28)] sm:w-64 md:w-72"
                  loading="lazy"
                />
                <div className="relative z-10 -mt-10 w-full max-w-xs rounded-xl border-2 border-gold bg-[#5a0c18] px-4 py-3 text-center shadow-warm">
                  <h3 className="font-display text-lg font-bold leading-snug text-[#FFFBF0] sm:text-xl">
                    {tr({ en: "V S N D Kowndinya Sarma", te: "వి.ఎస్.ఎన్.డి. కౌండిన్య శర్మ" })}
                  </h3>
                  <p className="mt-0.5 font-display text-sm italic text-gold-light">
                    {tr({ en: "Jyotishya Vidwan", te: "జ్యోతిష్య విద్వాన్" })}
                  </p>
                </div>
                <div className="mt-3 flex items-center gap-2" aria-hidden="true">
                  <span className="h-px w-10 bg-gold/80" />
                  <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
                  <span className="h-px w-10 bg-gold/80" />
                </div>
                <a
                  href={waLink("Namaste Kowndinya Sarma garu, I would like to seek astrological guidance.")}
                  target="_blank"
                  rel="noopener"
                  className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-[#5a0c18] px-5 py-2 text-xs font-semibold text-white shadow-sm transition-all hover:scale-105 hover:bg-maroon"
                >
                  <span>{tr({ en: "Know More →", te: "మరింత తెలుసుకోండి →" })}</span>
                </a>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Golden wave footer strip */}
        <svg
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
          className="pointer-events-none absolute bottom-0 left-0 h-14 w-full"
          aria-hidden="true"
        >
          <path d="M0,55 C240,15 480,85 720,55 C960,25 1200,85 1440,45 L1440,90 L0,90 Z" fill="#D4A017" opacity="0.55" />
          <path d="M0,68 C260,30 520,92 760,62 C1000,34 1220,90 1440,58 L1440,90 L0,90 Z" fill="#B8860B" opacity="0.75" />
          <path d="M0,80 C300,48 560,96 800,72 C1040,50 1240,94 1440,70 L1440,90 L0,90 Z" fill="#5a0c18" />
        </svg>
      </section>

      {/* 3 — OUR SERVICES */}
      <section className="bg-cream py-16">
        <div className="mx-auto max-w-6xl xl:max-w-7xl 2xl:max-w-[1400px] px-4 sm:px-6 lg:px-12 xl:px-8">
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
      <section className="relative overflow-hidden bg-[#4C0713] py-14 sm:py-16 md:py-20 text-white">
        {/* Maroon & Mandala Background Image */}
        <div
          className="pointer-events-none absolute inset-0 select-none overflow-hidden"
          aria-hidden="true"
        >
          <img
            src={howItWorksBg}
            alt=""
            className="h-full w-full object-cover object-center opacity-90"
          />
          {/* Subtle vignette for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20" />
        </div>

        <div className="relative mx-auto max-w-5xl xl:max-w-6xl 2xl:max-w-7xl px-4 sm:px-6 lg:px-12 xl:px-8">
          {/* Header with ornamental rules */}
          <Reveal className="mb-10 sm:mb-12 md:mb-14 text-center">
            <div className="flex items-center justify-center gap-3 sm:gap-4">
              {/* Left ornament */}
              <div className="flex items-center gap-1.5 text-[#F3AF2E]" aria-hidden="true">
                <span className="h-[1.5px] w-8 sm:w-16 bg-gradient-to-r from-transparent to-[#F3AF2E]" />
                <span className="h-1.5 w-1.5 rotate-45 bg-[#F3AF2E]" />
                <span className="h-[1.5px] w-3 sm:w-4 bg-[#F3AF2E]" />
              </div>

              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wide text-white">
                {d.home.howTitle}
              </h2>

              {/* Right ornament */}
              <div className="flex items-center gap-1.5 text-[#F3AF2E]" aria-hidden="true">
                <span className="h-[1.5px] w-3 sm:w-4 bg-[#F3AF2E]" />
                <span className="h-1.5 w-1.5 rotate-45 bg-[#F3AF2E]" />
                <span className="h-[1.5px] w-8 sm:w-16 bg-gradient-to-l from-transparent to-[#F3AF2E]" />
              </div>
            </div>
          </Reveal>

          {/* Steps Container */}
          <div className="relative">
            {/* Desktop Chevrons between columns (positioned at title level) */}
            <div
              className="hidden md:flex absolute left-[33.33%] top-[102px] sm:top-[118px] -translate-x-1/2 -translate-y-1/2 text-[#F3AF2E] pointer-events-none z-10"
              aria-hidden="true"
            >
              <ChevronsRight className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div
              className="hidden md:flex absolute left-[66.66%] top-[102px] sm:top-[118px] -translate-x-1/2 -translate-y-1/2 text-[#F3AF2E] pointer-events-none z-10"
              aria-hidden="true"
            >
              <ChevronsRight className="w-6 h-6 stroke-[2.5]" />
            </div>

            {/* 3 Step Cards */}
            <div className="grid gap-8 md:gap-4 lg:gap-8 md:grid-cols-3">
              {STEPS.map((step, i) => {
                const IconComponent = STEP_ICONS[i];
                return (
                  <Reveal
                    key={i}
                    delay={i * 0.12}
                    className="relative flex flex-col items-center text-center px-2"
                  >
                    {/* Golden Circular Icon Badge */}
                    <div className="mx-auto flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-[#F3AF2E] text-[#4C0713] shadow-md transition-transform hover:scale-105">
                      {IconComponent && (
                        <IconComponent className="h-8 w-8 sm:h-9 sm:w-9 text-[#4C0713]" />
                      )}
                    </div>

                    {/* Step Title with Circled Number */}
                    <div className="mt-4 sm:mt-5 flex items-center justify-center gap-2">
                      <span className="inline-flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full border-[1.5px] border-[#F3AF2E] text-xs sm:text-sm font-semibold text-[#F3AF2E] shrink-0">
                        {i + 1}
                      </span>
                      <h3 className="font-display text-base sm:text-lg lg:text-xl font-bold tracking-wide text-white">
                        {tr(step.title)}
                      </h3>
                    </div>

                    {/* Step Description */}
                    <p className="mx-auto mt-2 max-w-xs text-xs sm:text-sm leading-relaxed text-[#FFFDF7]/90 font-light">
                      {tr(step.text)}
                    </p>

                    {/* Mobile downward indicator between steps */}
                    {i < 2 && (
                      <div
                        className="mt-4 flex justify-center text-[#F3AF2E]/60 md:hidden"
                        aria-hidden="true"
                      >
                        <ChevronsDown className="h-5 w-5" />
                      </div>
                    )}
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 4 — CONSULTATION FORM + FAQ */}
      <section className="bg-cream py-16">
        <div className="mx-auto grid max-w-6xl xl:max-w-7xl 2xl:max-w-[1400px] gap-10 px-4 sm:px-6 lg:px-12 xl:px-8 lg:grid-cols-2">
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
        <div className="mx-auto max-w-6xl xl:max-w-7xl 2xl:max-w-[1400px] px-4 sm:px-6 lg:px-12 xl:px-8">
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
