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

import guruji1Img from "@/assets/about/guruji1.jpg";
import guruji2Img from "@/assets/about/guruji-kowndinya-about.webp";
import ourStoryImg from "@/assets/about/our-story.jpg";
import gurujiBg from "@/assets/about/guruji-bg.png";

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

/** Lotus SVG ornament matching the user-provided sacred traditional motif (fi_3556759) */
function LotusIcon({ className = "h-4 w-4 text-gold inline-block" }: { className?: string }) {
  return (
    <svg
      id="fi_3556759"
      viewBox="0 0 512 512"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="m506.269 341.391c-.783-.712-16.456-14.846-40.388-28.484 42.137-65.152 45.942-139.62 46.104-143.351.185-4.202-1.404-8.288-4.379-11.262-2.974-2.975-7.075-4.553-11.262-4.379-2.478.109-36.172 1.826-77.611 15.312-4.562-49.478-19.771-86.15-20.501-87.886-1.631-3.877-4.814-6.891-8.774-8.308-3.959-1.416-8.333-1.107-12.054.857-1.543.814-33.426 17.836-66.653 50.044-19.679-38.434-42.026-63.181-43.691-64.998-2.841-3.102-6.854-4.867-11.06-4.867s-8.219 1.766-11.06 4.867c-1.665 1.818-24.012 26.564-43.691 64.998-33.227-32.208-65.111-49.23-66.654-50.044-3.72-1.963-8.092-2.274-12.053-.857-3.96 1.417-7.144 4.431-8.774 8.308-.73 1.736-15.939 38.408-20.502 87.886-41.438-13.486-75.133-15.203-77.611-15.312-4.193-.18-8.288 1.405-11.262 4.379s-4.563 7.06-4.379 11.262c.163 3.73 3.968 78.199 46.105 143.351-23.932 13.638-39.605 27.772-40.389 28.484-5.146 4.68-6.399 12.284-3.028 18.368 1.908 3.443 47.574 84.462 121.217 96.603 6.353 1.047 12.852 1.57 19.48 1.57 16.618 0 34.053-3.286 52.062-9.829 15.879-5.77 31.874-13.922 47.621-24.25 7.047.793 11.441 1.012 12.277 1.049.192.008.381.011.571.013.014 0 .028.002.043.002.008 0 .017-.001.025-.001h.001.001c.008 0 .017.001.025.001.014 0 .028-.002.043-.002.19-.001.38-.004.571-.013.837-.037 5.23-.256 12.277-1.049 15.747 10.328 31.742 18.481 47.621 24.25 18.01 6.544 35.443 9.829 52.062 9.829 6.627 0 13.128-.523 19.48-1.57 73.642-12.141 119.308-93.16 121.216-96.603 3.373-6.084 2.12-13.688-3.026-18.368zm-90.951-13.158c-38.459 38.458-91.028 54.883-125.242 61.802 20.762-30.782 48.33-82.478 50.663-142.418 45.561-43.389 109.042-57.443 139.4-61.827-4.439 31.015-18.941 96.562-64.821 142.443zm-38.95-218.615c4.864 15.746 11.298 41.305 13.136 70.772-16.989 7.523-34.335 17.175-50.675 29.543-2.805-20.277-8.236-39.347-14.918-56.663 19.321-20.201 39.299-34.954 52.457-43.652zm-120.368-16.658c18.793 25.143 54.907 81.879 54.907 146.532 0 64.68-36.145 121.436-54.925 146.559-18.793-25.07-54.887-81.674-54.887-146.559-.001-64.653 36.117-121.394 54.905-146.532zm-120.369 16.658c13.162 8.699 33.138 23.451 52.457 43.652-6.682 17.317-12.113 36.387-14.918 56.663-16.34-12.368-33.686-22.02-50.675-29.543 1.838-29.469 8.274-55.03 13.136-70.772zm35.631 137.999c2.333 59.939 29.901 111.635 50.663 142.417-34.219-6.92-86.785-23.345-125.241-61.801-45.716-45.717-60.299-111.378-64.789-142.438 30.379 4.391 93.825 18.451 139.367 61.822zm-42.462 179.143c-45.241-7.458-79.414-50.711-93.196-71.021 6.737-5.107 16.64-12.007 28.564-18.548 3.569 4.182 7.326 8.278 11.302 12.254 37.216 37.216 84.551 56.136 121.344 65.724-20.073 8.971-44.216 15.513-68.014 11.591zm254.4 0c-23.795 3.921-47.939-2.621-68.013-11.592 36.794-9.588 84.128-28.508 121.343-65.723 3.976-3.976 7.733-8.072 11.303-12.254 11.925 6.542 21.828 13.443 28.563 18.548-13.79 20.321-47.961 63.564-93.196 71.021z" />
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
}: {
  img: string;
  alt: string;
  name: { en: string; te: string };
  description: { en: string; te: string };
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
            <div className="relative">
              {/* Card Container with custom golden mandala background */}
              <div className="relative overflow-hidden rounded-3xl border-2 border-gold/50 bg-[#FFFBF0] p-6 sm:p-10 shadow-warm">
                {/* Background image: celestial golden clouds and lotus ornament uploaded by user */}
                <div
                  className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-100"
                  style={{ backgroundImage: `url(${gurujiBg})` }}
                  aria-hidden="true"
                />

                {/* Profiles Grid */}
                <div className="relative z-10 grid gap-10 md:grid-cols-2">
                  {/* Profile 1: Vissavajhula Nagesh Sarma */}
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
                    <div className="relative shrink-0 w-32 h-32 sm:w-36 sm:h-36 overflow-hidden rounded-2xl border-2 border-gold/60 bg-cream/90 shadow-md">
                      <img
                        src={guruji1Img}
                        alt="Vissavajhula Nagesh Sarma"
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex-1">
                      <h2 className="font-display text-lg sm:text-xl font-bold text-maroon">
                        {tr({
                          en: "Vissavajhula Nagesh Sarma",
                          te: "విస్సావఝుల నాగేశ్ శర్మ",
                        })}
                      </h2>
                      <p className="mt-2 text-xs sm:text-sm leading-relaxed text-body">
                        {tr({
                          en: "A revered Vedic scholar and astrologer, guiding countless individuals with his profound knowledge and divine wisdom.",
                          te: "తన అపారమైన జ్ఞానం మరియు దైవిక వివేకంతో వేలాది మందికి మార్గనిర్దేశం చేస్తున్న పూజ్య వేద పండితులు మరియు జ్యోతిష్య నిపుణులు.",
                        })}
                      </p>
                    </div>
                  </div>

                  {/* Profile 2: V Kowndinya Sarma */}
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
                    <div className="relative shrink-0 w-32 h-32 sm:w-36 sm:h-36 overflow-hidden rounded-2xl border-2 border-gold/60 bg-cream/90 shadow-md">
                      <img
                        src={guruji2Img}
                        alt="V Kowndinya Sarma"
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex-1">
                      <h2 className="font-display text-lg sm:text-xl font-bold text-maroon">
                        {tr({
                          en: "V Kowndinya Sarma",
                          te: "వి. కౌండిన్య శర్మ",
                        })}
                      </h2>
                      <p className="mt-2 text-xs sm:text-sm leading-relaxed text-body">
                        {tr({
                          en: "An expert in Vedic astrology and spiritual remedies, dedicated to bringing harmony and positive energy into your life.",
                          te: "మీ జీవితంలో శాంతి, సామరస్యం మరియు సానుకూల శక్తిని నింపడానికి అంకితభావంతో పనిచేస్తున్న వేద జ్యోతిష మరియు పరిహార నిపుణులు.",
                        })}
                      </p>
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
            <div className="rounded-3xl border-2 border-gold/40 bg-[#FFFDF7] p-6 sm:p-8 md:p-10">
              <div className="grid gap-8 items-center md:grid-cols-2">
                {/* Left: Sacred Chakra + Scriptures Image */}
                <div className="relative overflow-hidden rounded-2xl border-2 border-gold/40 aspect-[1024/538]">
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

    </div>
  );
}
