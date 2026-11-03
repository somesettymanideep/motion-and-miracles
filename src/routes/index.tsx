import { useEffect, useRef } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import gsap from "gsap";
import { ChevronsDown, ChevronsRight, MapPin, MessageCircle, Phone } from "lucide-react";
import guruji1Img from "@/assets/about/guruji1.jpg";
import guruji2Img from "@/assets/about/guruji2.jpg";
import gurujiBg from "@/assets/about/guruji-bg.png";
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

      {/* 2 — OUR GURUJI */}
      <section className="bg-cream py-14 md:py-16">
        <div className="mx-auto max-w-6xl xl:max-w-7xl 2xl:max-w-[1400px] px-4 sm:px-6 lg:px-12 xl:px-8">
          <Reveal>
            <div className="relative pt-4">
              {/* Centered Maroon Pill Badge */}
              <div className="absolute -top-1 left-1/2 z-20 inline-flex -translate-x-1/2 items-center gap-2 rounded-full border border-gold bg-[#5a0c18] px-6 py-1.5 text-xs font-bold tracking-wide text-gold-light shadow-md sm:text-sm">
                <span>{tr({ en: "Our Guruji", te: "మా గురూజీ" })}</span>
              </div>

              {/* Card Container with golden mandala background */}
              <div className="relative overflow-hidden rounded-3xl border-2 border-gold/50 bg-[#FFFBF0] p-6 pt-10 shadow-warm sm:p-10 sm:pt-12">
                <div
                  className="pointer-events-none absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${gurujiBg})` }}
                  aria-hidden="true"
                />

                <p className="relative z-10 text-center font-display text-lg font-semibold italic text-maroon sm:text-xl">
                  {tr({
                    en: "Guidance from the Masters",
                    te: "గురువుల నుండి దివ్య మార్గదర్శకత్వం",
                  })}
                </p>

                {/* Profiles Grid */}
                <div className="relative z-10 mt-8 grid gap-10 md:grid-cols-2">
                  {/* Profile 1: Vissavajhula Nagesh Sharma */}
                  <Reveal delay={0.08}>
                    <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:items-start sm:text-left">
                      <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-2xl border-2 border-gold/60 bg-cream/90 shadow-md sm:h-36 sm:w-36">
                        <img
                          src={guruji1Img}
                          alt="Vissavajhula Nagesh Sharma"
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex-1">
                        <h2 className="font-display text-lg font-bold text-maroon sm:text-xl">
                          {tr({
                            en: "Vissavajhula Nagesh Sharma",
                            te: "విస్సావఝుల నాగేశ్ శర్మ",
                          })}
                        </h2>
                        <p className="mt-2 text-xs leading-relaxed text-body sm:text-sm">
                          {tr({
                            en: "A revered Vedic scholar and astrologer, guiding countless individuals with his profound knowledge and divine wisdom.",
                            te: "తన అపారమైన జ్ఞానం మరియు దైవిక వివేకంతో వేలాది మందికి మార్గనిర్దేశం చేస్తున్న పూజ్య వేద పండితులు మరియు జ్యోతిష్య నిపుణులు.",
                          })}
                        </p>
                        <a
                          href={waLink("Namaste Nagesh Sharma garu, I would like to seek spiritual guidance.")}
                          target="_blank"
                          rel="noopener"
                          className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-[#5a0c18] px-5 py-2 text-xs font-semibold text-white shadow-sm transition-all hover:scale-105 hover:bg-maroon"
                        >
                          <span>{tr({ en: "Know More →", te: "మరింత తెలుసుకోండి →" })}</span>
                        </a>
                      </div>
                    </div>
                  </Reveal>

                  {/* Profile 2: V S N D Kowndinya Sarma */}
                  <Reveal delay={0.16}>
                    <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:items-start sm:text-left">
                      <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-2xl border-2 border-gold/60 bg-cream/90 shadow-md sm:h-36 sm:w-36">
                        <img
                          src={guruji2Img}
                          alt="V S N D Kowndinya Sarma"
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex-1">
                        <h2 className="font-display text-lg font-bold text-maroon sm:text-xl">
                          {tr({
                            en: "V S N D Kowndinya Sarma",
                            te: "వి.ఎస్.ఎన్.డి. కౌండిన్య శర్మ",
                          })}
                        </h2>
                        <p className="mt-2 text-xs leading-relaxed text-body sm:text-sm">
                          {tr({
                            en: "An expert in Vedic astrology and spiritual remedies, dedicated to bringing harmony and positive energy into your life.",
                            te: "మీ జీవితంలో శాంతి, సామరస్యం మరియు సానుకూల శక్తిని నింపడానికి అంకితభావంతో పనిచేస్తున్న వేద జ్యోతిష మరియు పరిహార నిపుణులు.",
                          })}
                        </p>
                        <a
                          href={waLink("Namaste Kowndinya Sarma garu, I would like to seek astrological guidance.")}
                          target="_blank"
                          rel="noopener"
                          className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-[#5a0c18] px-5 py-2 text-xs font-semibold text-white shadow-sm transition-all hover:scale-105 hover:bg-maroon"
                        >
                          <span>{tr({ en: "Know More →", te: "మరింత తెలుసుకోండి →" })}</span>
                        </a>
                      </div>
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2 — OUR SERVICES */}
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
