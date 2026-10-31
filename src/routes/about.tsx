import { createFileRoute, Link } from "@tanstack/react-router";
import {
  GraduationCap,
  HeartHandshake,
  LayoutGrid,
  Send,
  ShieldCheck,
  Sparkles,
  Sun,
  Target,
} from "lucide-react";
import { useLanguage, useTr } from "@/lib/i18n";
import { dict } from "@/data/site";
import { PageBanner } from "@/components/PageBanner";
import { Reveal } from "@/components/Reveal";
import { waLink } from "@/lib/whatsapp";

import guruji1Img from "@/assets/about/guruji1.jpg";
import guruji2Img from "@/assets/about/guruji2.jpg";
import ourStoryImg from "@/assets/about/our-story.jpg";
import gurujiBg from "@/assets/about/guruji-bg.png";
import visionBannerBg from "@/assets/about/vision-banner-bg.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Sri Vasishta Jyotishya Parishodhanalayam, Vijayawada" },
      {
        name: "description",
        content:
          "Sri Vasishta Jyotishya Parishodhanalayam — a centre rooted in Vedic tradition and Jyotisha Shastra in Krishnalanka, Vijayawada, guided by revered Vedic scholars.",
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

/** Lotus SVG ornament matching the sacred traditional motif */
function LotusIcon({ className = "h-4 w-4 text-gold inline-block" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 3c-1.2 2.5-3.5 5.5-3.5 8 0 2.2 1.6 3.8 3.5 4 1.9-.2 3.5-1.8 3.5-4 0-2.5-2.3-5.5-3.5-8zm-4.8 4.2c-.8 2.2-2.7 4.9-2.7 7 0 2.3 1.8 3.8 3.8 3.8.8 0 1.5-.2 2.2-.6-1.5-1.5-2.5-3.6-2.5-5.8 0-1.6.4-3.1 1.1-4.4-.7 0-1.3 0-1.9 0zm9.6 0c.7 1.3 1.1 2.8 1.1 4.4 0 2.2-1 4.3-2.5 5.8.7.4 1.4.6 2.2.6 2 0 3.8-1.5 3.8-3.8 0-2.1-1.9-4.8-2.7-7-.6 0-1.2 0-1.9 0zM12 18c-3 0-5.5.8-7 2h14c-1.5-1.2-4-2-7-2z" />
    </svg>
  );
}

/** Golden corner flourish ornaments for the Guruji mastercard */
function CornerFlourish({ position }: { position: "tl" | "tr" | "bl" | "br" }) {
  const classes = {
    tl: "top-2.5 left-2.5",
    tr: "top-2.5 right-2.5 rotate-90",
    bl: "bottom-2.5 left-2.5 -rotate-90",
    br: "bottom-2.5 right-2.5 rotate-180",
  }[position];

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="#D4A017"
      strokeWidth="1.5"
      className={`pointer-events-none absolute h-6 w-6 opacity-75 ${classes}`}
      aria-hidden="true"
    >
      <path d="M2 14V4a2 2 0 0 1 2-2h10M4 4l8 8" />
      <circle cx="15" cy="3" r="1.5" fill="#D4A017" />
      <circle cx="3" cy="15" r="1.5" fill="#D4A017" />
    </svg>
  );
}

/** Ornate golden mandala halo behind each Guruji portrait */
function MandalaHalo({ className = "" }: { className?: string }) {
  const rays = Array.from({ length: 36 }, (_, i) => {
    const a = (i * 10 * Math.PI) / 180;
    const r1 = 45;
    const r2 = i % 3 === 0 ? 49.5 : 47.5;
    return {
      x1: 50 + r1 * Math.cos(a),
      y1: 50 + r1 * Math.sin(a),
      x2: 50 + r2 * Math.cos(a),
      y2: 50 + r2 * Math.sin(a),
    };
  });
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <circle cx="50" cy="50" r="49" fill="none" stroke="#D4A017" strokeWidth="0.7" opacity="0.9" />
      <circle cx="50" cy="50" r="45" fill="none" stroke="#D4A017" strokeWidth="0.5" strokeDasharray="1.5 2.5" opacity="0.75" />
      <circle cx="50" cy="50" r="40" fill="none" stroke="#D4A017" strokeWidth="0.4" opacity="0.55" />
      <circle cx="50" cy="50" r="34" fill="#F5C542" opacity="0.16" />
      {rays.map((r, i) => (
        <line key={i} x1={r.x1} y1={r.y1} x2={r.x2} y2={r.y2} stroke="#D4A017" strokeWidth="0.55" opacity="0.8" />
      ))}
      {Array.from({ length: 12 }, (_, i) => {
        const a = ((i * 30 + 15) * Math.PI) / 180;
        return (
          <circle
            key={`d${i}`}
            cx={50 + 42.5 * Math.cos(a)}
            cy={50 + 42.5 * Math.sin(a)}
            r="0.9"
            fill="#D4A017"
            opacity="0.85"
          />
        );
      })}
    </svg>
  );
}

/** One Guruji profile: bottom-anchored cut-out portrait with mandala halo, text beside it */
function GurujiProfile({
  img,
  alt,
  name,
  description,
  waHref,
}: {
  img: string;
  alt: string;
  name: { en: string; te: string };
  description: { en: string; te: string };
  waHref: string;
}) {
  const tr = useTr();
  return (
    <div className="grid grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] items-center gap-3 px-4 sm:gap-5 sm:px-8">
      {/* Portrait with mandala halo, anchored to the card's bottom edge */}
      <div className="relative flex items-end justify-center self-stretch">
        <MandalaHalo className="absolute bottom-[8%] left-1/2 aspect-square h-[72%] w-auto -translate-x-1/2" />
        <img
          src={img}
          alt={alt}
          loading="lazy"
          className="relative z-10 h-44 w-auto object-contain object-bottom drop-shadow-[0_10px_24px_rgba(123,21,48,0.18)] sm:h-56 md:h-64 lg:h-72"
        />
      </div>
      <div className="pb-7 sm:pb-10">
        <h2 className="font-display text-lg font-bold text-maroon sm:text-xl md:text-2xl">{tr(name)}</h2>
        <p className="mt-2 text-xs leading-relaxed text-body sm:text-sm">{tr(description)}</p>
        <a
          href={waHref}
          target="_blank"
          rel="noopener"
          className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-[#5a0c18] px-5 py-2 text-xs font-semibold text-white shadow-sm transition-all hover:scale-105 hover:bg-maroon"
        >
          <span>{tr({ en: "Know More →", te: "మరింత తెలుసుకోండి →" })}</span>
        </a>
      </div>
    </div>
  );
}

function AboutPage() {
  const { lang } = useLanguage();
  const tr = useTr();
  const d = dict[lang];

  return (
    <div className="bg-cream text-body">
      {/* Subpage Banner — untouched as instructed */}
      <PageBanner title={d.about.bannerTitle} crumb={d.common.aboutUs} />

      {/* OUR GURUJI (Guidance from the Masters) */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl xl:max-w-7xl 2xl:max-w-[1400px] px-4 sm:px-6 lg:px-12 xl:px-8">
          <Reveal>
            <div className="relative pt-4">
              {/* Centered Maroon Pill Badge */}
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 z-20 inline-flex items-center gap-2 rounded-full border border-gold bg-[#5a0c18] px-6 py-1.5 text-xs sm:text-sm font-bold tracking-wide text-gold-light shadow-md">
                <LotusIcon className="h-3.5 w-3.5 text-gold-light" />
                <span>{tr({ en: "Our Guruji", te: "మా గురూజీ" })}</span>
                <LotusIcon className="h-3.5 w-3.5 text-gold-light" />
              </div>

              {/* Card Container with custom golden mandala background */}
              <div className="relative overflow-hidden rounded-3xl border-2 border-gold/50 bg-[#FFFBF0] p-6 pt-10 sm:p-10 sm:pt-12 shadow-warm">
                {/* Background image: celestial golden clouds and lotus ornament uploaded by user */}
                <div
                  className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-100"
                  style={{ backgroundImage: `url(${gurujiBg})` }}
                  aria-hidden="true"
                />

                {/* Subtitle */}
                <p className="relative z-10 text-center font-display italic text-lg sm:text-xl font-semibold text-maroon">
                  {tr({
                    en: "Guidance from the Masters",
                    te: "గురువుల నుండి దివ్య మార్గదర్శకత్వం",
                  })}
                </p>

                {/* Profiles Grid */}
                <div className="relative z-10 mt-8 grid gap-10 md:grid-cols-2">
                  {/* Profile 1: Vissavajhula Nagesh Sharma */}
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
                    <div className="relative shrink-0 w-32 h-32 sm:w-36 sm:h-36 overflow-hidden rounded-2xl border-2 border-gold/60 bg-cream/90 shadow-md">
                      <img
                        src={guruji1Img}
                        alt="Vissavajhula Nagesh Sharma"
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex-1">
                      <h2 className="font-display text-lg sm:text-xl font-bold text-maroon">
                        {tr({
                          en: "Vissavajhula Nagesh Sharma",
                          te: "విస్సావఝుల నాగేశ్ శర్మ",
                        })}
                      </h2>
                      <p className="mt-2 text-xs sm:text-sm leading-relaxed text-body">
                        {tr({
                          en: "A revered Vedic scholar and astrologer, guiding countless individuals with his profound knowledge and divine wisdom.",
                          te: "తన అపారమైన జ్ఞానం మరియు దైవిక వివేకంతో వేలాది మందికి మార్గనిర్దేశం చేస్తున్న పూజ్య వేద పండితులు మరియు జ్యోతిష్య నిపుణులు.",
                        })}
                      </p>
                      <a
                        href={waLink("Namaste Nagesh Sharma garu, I would like to seek spiritual guidance.")}
                        target="_blank"
                        rel="noopener"
                        className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-[#5a0c18] hover:bg-maroon px-5 py-2 text-xs font-semibold text-white shadow-sm transition-all hover:scale-105"
                      >
                        <span>{tr({ en: "Know More →", te: "మరింత తెలుసుకోండి →" })}</span>
                      </a>
                    </div>
                  </div>

                  {/* Profile 2: V S N D Kowndinya Sarma */}
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
                    <div className="relative shrink-0 w-32 h-32 sm:w-36 sm:h-36 overflow-hidden rounded-2xl border-2 border-gold/60 bg-cream/90 shadow-md">
                      <img
                        src={guruji2Img}
                        alt="V S N D Kowndinya Sarma"
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex-1">
                      <h2 className="font-display text-lg sm:text-xl font-bold text-maroon">
                        {tr({
                          en: "V S N D Kowndinya Sarma",
                          te: "వి.ఎస్.ఎన్.డి. కౌండిన్య శర్మ",
                        })}
                      </h2>
                      <p className="mt-2 text-xs sm:text-sm leading-relaxed text-body">
                        {tr({
                          en: "An expert in Vedic astrology and spiritual remedies, dedicated to bringing harmony and positive energy into your life.",
                          te: "మీ జీవితంలో శాంతి, సామరస్యం మరియు సానుకూల శక్తిని నింపడానికి అంకితభావంతో పనిచేస్తున్న వేద జ్యోతిష మరియు పరిహార నిపుణులు.",
                        })}
                      </p>
                      <a
                        href={waLink("Namaste Kowndinya Sarma garu, I would like to seek astrological guidance.")}
                        target="_blank"
                        rel="noopener"
                        className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-[#5a0c18] hover:bg-maroon px-5 py-2 text-xs font-semibold text-white shadow-sm transition-all hover:scale-105"
                      >
                        <span>{tr({ en: "Know More →", te: "మరింత తెలుసుకోండి →" })}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3 — OUR STORY (Tradition Meets Modern Guidance) */}
      <section className="pb-14">
        <div className="mx-auto max-w-6xl xl:max-w-7xl 2xl:max-w-[1400px] px-4 sm:px-6 lg:px-12 xl:px-8">
          <Reveal>
            <div className="rounded-3xl border-2 border-gold/40 bg-[#FFFDF7] p-6 sm:p-8 md:p-10 shadow-warm">
              <div className="grid gap-8 items-center md:grid-cols-2">
                {/* Left: Sacred Chakra + Scriptures Image */}
                <div className="relative overflow-hidden rounded-2xl border-2 border-gold/40 shadow-md aspect-[16/10]">
                  <img
                    src={ourStoryImg}
                    alt="Sacred Vedic astrology chakra wheel, holy granthas, and brass diya"
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Right: Story Details */}
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-saffron-dark">
                    <LotusIcon className="h-3.5 w-3.5 text-gold" />
                    <span>{tr({ en: "OUR STORY", te: "మా కథ" })}</span>
                  </div>
                  <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-maroon">
                    {tr({
                      en: "Tradition Meets Modern Guidance",
                      te: "సాంప్రదాయం మరియు ఆధునిక మార్గదర్శకత్వం",
                    })}
                  </h2>
                  <p className="mt-4 text-xs sm:text-sm leading-relaxed text-body">
                    {tr({
                      en: "Sri Vasishta Jyotishya Parishodhanalayam was founded with a single purpose — to share the profound knowledge of Vedic astrology, scriptures and spiritual practices with people from all walks of life.",
                      te: "శ్రీ వశిష్ఠ జ్యోతిష్య పరిశోధనాలయం ఒకే ఉన్నత లక్ష్యంతో స్థాపించబడింది — వేద జ్యోతిష్యం, పవిత్ర గ్రంథాలు మరియు ఆధ్యాత్మిక ఆచారాల అపారమైన జ్ఞానాన్ని సమాజంలోని ప్రతి ఒక్కరికీ అందించడం.",
                    })}
                  </p>
                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-body">
                    {tr({
                      en: "With decades of experience, we provide accurate predictions, personalized remedies and meaningful consultations to guide you towards a better and brighter future.",
                      te: "దశాబ్దాల సుదీర్ఘ అనుభవంతో, మీ ఉజ్వల భవిష్యత్తు కోసం మేము ఖచ్చితమైన అంచనాలు, వ్యక్తిగతీకరించిన పరిహారాలు మరియు అర్థవంతమైన సంప్రదింపులను అందిస్తున్నాము.",
                    })}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4 — WHAT WE STAND FOR (Our Values) */}
      <section className="pb-14">
        <div className="mx-auto max-w-6xl xl:max-w-7xl 2xl:max-w-[1400px] px-4 sm:px-6 lg:px-12 xl:px-8">
          <Reveal>
            {/* Centered Values Header */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-gold-dark">
                <span className="h-[1px] w-8 bg-gold/50" />
                <span>{tr({ en: "OUR", te: "మా" })}</span>
                <LotusIcon className="h-3.5 w-3.5 text-gold" />
                <span>{tr({ en: "VALUES", te: "విలువలు" })}</span>
                <span className="h-[1px] w-8 bg-gold/50" />
              </div>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-maroon">
                {tr({ en: "What We Stand For", te: "మా విలువలు మరియు ధ్యేయం" })}
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-body max-w-xl mx-auto">
                {tr({
                  en: "Our values are rooted in tradition, guided by compassion, and driven by your well-being.",
                  te: "మా విలువలు సంప్రదాయంలో వేళ్ళూనుకున్నవి, కరుణతో నడిపించబడేవి మరియు మీ శ్రేయస్సు కోసం ఉద్దేశించినవి.",
                })}
              </p>
            </div>

            {/* 4 Cards Grid */}
            <div className="mt-8 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {/* 1: Authenticity */}
              <div className="rounded-2xl border-2 border-gold/40 bg-[#FFFDF7] p-6 text-center shadow-warm flex flex-col items-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-gold bg-gold-light/25 text-[#5a0c18] shadow-xs">
                  <LotusIcon className="h-6 w-6 text-[#5a0c18]" />
                </span>
                <h3 className="mt-4 font-display text-base sm:text-lg font-bold text-maroon">
                  {tr({ en: "Authenticity", te: "ప్రామాణికత" })}
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-body">
                  {tr({
                    en: "We follow genuine Vedic scriptures and traditional practices.",
                    te: "మేము ప్రామాణికమైన వేద శాస్త్రాలు మరియు సాంప్రదాయ పద్ధతులను పాటిస్తాము.",
                  })}
                </p>
              </div>

              {/* 2: Trust */}
              <div className="rounded-2xl border-2 border-gold/40 bg-[#FFFDF7] p-6 text-center shadow-warm flex flex-col items-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-gold bg-gold-light/25 text-[#5a0c18] shadow-xs">
                  <ShieldCheck className="h-6 w-6 text-[#5a0c18]" />
                </span>
                <h3 className="mt-4 font-display text-base sm:text-lg font-bold text-maroon">
                  {tr({ en: "Trust", te: "విశ్వాసం" })}
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-body">
                  {tr({
                    en: "Your faith and satisfaction are our greatest strength.",
                    te: "మీ నమ్మకం మరియు సంతృప్తే మా గొప్ప బలం.",
                  })}
                </p>
              </div>

              {/* 3: Personalized Care */}
              <div className="rounded-2xl border-2 border-gold/40 bg-[#FFFDF7] p-6 text-center shadow-warm flex flex-col items-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-gold bg-gold-light/25 text-[#5a0c18] shadow-xs">
                  <HeartHandshake className="h-6 w-6 text-[#5a0c18]" />
                </span>
                <h3 className="mt-4 font-display text-base sm:text-lg font-bold text-maroon">
                  {tr({ en: "Personalized Care", te: "వ్యక్తిగత శ్రద్ధ" })}
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-body">
                  {tr({
                    en: "Every consultation is customized to your unique birth chart and needs.",
                    te: "ప్రతి సంప్రదింపు మీ విశిష్ట జన్మకుండలి మరియు అవసరాలకు అనుగుణంగా రూపొందించబడుతుంది.",
                  })}
                </p>
              </div>

              {/* 4: Positive Energy */}
              <div className="rounded-2xl border-2 border-gold/40 bg-[#FFFDF7] p-6 text-center shadow-warm flex flex-col items-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-gold bg-gold-light/25 text-[#5a0c18] shadow-xs">
                  <Sun className="h-6 w-6 text-[#5a0c18]" />
                </span>
                <h3 className="mt-4 font-display text-base sm:text-lg font-bold text-maroon">
                  {tr({ en: "Positive Energy", te: "సానుకూల శక్తి" })}
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-body">
                  {tr({
                    en: "We aim to bring positivity, peace and prosperity into your life.",
                    te: "మీ జీవితంలో సానుకూలత, శాంతి మరియు సంపదను నింపడమే మా లక్ష్యం.",
                  })}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5 — WHY CHOOSE US */}
      <section className="pb-16">
        <div className="mx-auto max-w-6xl xl:max-w-7xl 2xl:max-w-[1400px] px-4 sm:px-6 lg:px-12 xl:px-8">
          <Reveal>
            <div className="grid gap-10 items-center lg:grid-cols-12">
              {/* Left Column */}
              <div className="lg:col-span-5">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-saffron-dark">
                  <LotusIcon className="h-3.5 w-3.5 text-gold" />
                  <span>{tr({ en: "WHY CHOOSE US", te: "మమ్మల్ని ఎందుకు ఎంచుకోవాలి" })}</span>
                </div>
                <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-maroon">
                  {tr({ en: "Why Choose Us?", te: "మమ్మల్ని ఎందుకు ఎంచుకోవాలి?" })}
                </h2>
                <p className="mt-4 text-xs sm:text-sm leading-relaxed text-body">
                  {tr({
                    en: "We combine traditional Vedic wisdom with a compassionate approach to help you make better decisions in life. Our expertise, experience and dedication make us a trusted name in Vedic astrology and spiritual guidance.",
                    te: "జీవితంలో ఉత్తమ నిర్ణయాలు తీసుకోవడంలో మీకు తోడ్పడటానికి సాంప్రదాయక వేద జ్ఞానాన్ని ఆప్యాయతతో కూడిన విధానంతో మేము మిళితం చేస్తాము. మా అనుభవం, నైపుణ్యం మరియు అంకితభావం మమ్మల్ని విశ్వసనీయ సంస్థగా నిలబెట్టాయి.",
                  })}
                </p>
                <Link
                  to="/contact"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#5a0c18] hover:bg-maroon px-7 py-3 text-xs sm:text-sm font-semibold text-white shadow-md transition-all hover:scale-105"
                >
                  <Send className="h-4 w-4" />
                  <span>{tr({ en: "Book a Consultation", te: "సంప్రదింపును బుక్ చేసుకోండి" })}</span>
                </Link>
              </div>

              {/* Right Column: 2x2 Feature Grid */}
              <div className="lg:col-span-7 grid gap-6 sm:grid-cols-2">
                {/* 1: Experienced Vedic Scholars */}
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#5a0c18] text-gold-light border border-gold/50 shadow-sm">
                    <GraduationCap className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-sm sm:text-base font-bold text-maroon">
                      {tr({
                        en: "Experienced Vedic Scholars",
                        te: "అనుభవజ్ఞులైన వేద పండితులు",
                      })}
                    </h3>
                    <p className="mt-1 text-xs text-body leading-relaxed">
                      {tr({
                        en: "Learned and well-versed in traditional astrology.",
                        te: "సాంప్రదాయక జ్యోతిష శాస్త్రంలో ప్రావీణ్యం మరియు పాండిత్యం.",
                      })}
                    </p>
                  </div>
                </div>

                {/* 2: Accurate Predictions */}
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#5a0c18] text-gold-light border border-gold/50 shadow-sm">
                    <Target className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-sm sm:text-base font-bold text-maroon">
                      {tr({ en: "Accurate Predictions", te: "ఖచ్చితమైన జ్యోతిష్య అంచనాలు" })}
                    </h3>
                    <p className="mt-1 text-xs text-body leading-relaxed">
                      {tr({
                        en: "Detailed analysis for better decision-making.",
                        te: "ఉత్తమ నిర్ణయాల కోసం సూక్ష్మ విశ్లేషణ మరియు జాతక పరిశీలన.",
                      })}
                    </p>
                  </div>
                </div>

                {/* 3: Wide Range of Services */}
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#5a0c18] text-gold-light border border-gold/50 shadow-sm">
                    <LayoutGrid className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-sm sm:text-base font-bold text-maroon">
                      {tr({ en: "Wide Range of Services", te: "విస్తృత శ్రేణి సేవలు" })}
                    </h3>
                    <p className="mt-1 text-xs text-body leading-relaxed">
                      {tr({
                        en: "From horoscope to remedies and rituals.",
                        te: "జాతక పరిశీలన నుండి శాస్త్రోక్త పరిహారాలు మరియు హోమాల వరకు.",
                      })}
                    </p>
                  </div>
                </div>

                {/* 4: Guidance for All */}
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#5a0c18] text-gold-light border border-gold/50 shadow-sm">
                    <Sparkles className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-sm sm:text-base font-bold text-maroon">
                      {tr({ en: "Guidance for All", te: "అందరికీ దివ్య మార్గదర్శకత్వం" })}
                    </h3>
                    <p className="mt-1 text-xs text-body leading-relaxed">
                      {tr({
                        en: "Support for personal, professional, marital and spiritual life.",
                        te: "వ్యక్తిగత, వృత్తిపరమైన, వైవాహిక మరియు ఆధ్యాత్మిక శ్రేయస్సుకు మద్దతు.",
                      })}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6 — BOTTOM BANNER (A Happier, Healthier and Prosperous Tomorrow) */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#3e0811] via-[#5a0c18] to-[#3e0811] py-14 px-4 sm:px-6 text-center text-cream">
        {/* Subtle temple background texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: `url(${visionBannerBg})` }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-3">
          <LotusIcon className="h-5 w-5 text-gold-light" />
          <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-gold-light tracking-wide">
            {tr({
              en: "A Happier, Healthier and Prosperous Tomorrow",
              te: "ఆనందకరమైన, ఆరోగ్యకరమైన మరియు శ్రేయస్కరమైన భవిష్యత్తు",
            })}
          </h2>
          <p className="italic text-xs sm:text-sm md:text-base text-cream/90 leading-relaxed max-w-2xl">
            {tr({
              en: "We envision a world where everyone has access to authentic Vedic guidance and lives a life filled with peace, prosperity and spiritual harmony.",
              te: "ప్రతి ఒక్కరికీ ప్రామాణికమైన వేద మార్గదర్శకత్వం లభించి, శాంతి, శ్రేయస్సు మరియు ఆధ్యాత్మిక సామరస్యంతో జీవించే ప్రపంచాన్ని మేము ఆకాంక్షిస్తున్నాము.",
            })}
          </p>
          <LotusIcon className="h-5 w-5 text-gold-light" />
        </div>
      </section>
    </div>
  );
}
