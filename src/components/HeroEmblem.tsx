import gurujiEmblem from "@/assets/hero-guruji-emblem.webp";
import zodiacRingBand from "@/assets/zodiac-ring-annulus.webp";

/**
 * Hero Zodiac Wheel — the guruji emblem sits on the hero's right side with the
 * golden zodiac wheel overlaid on top of it:
 *  1. The emblem (saint portrait inside the gold zodiac medallion, orange
 *     Telugu ribbon below) is the base layer.
 *  2. The zodiac band — the outer ring of the wheel, whose centre is hollow so
 *     the portrait shows through — spins clockwise on the same constant-speed
 *     seamless loop as before. Its lower arc fades out before the ribbon, so
 *     the Telugu name stays fully readable.
 * Transparent background, no added elements or camera moves.
 */
export function HeroEmblem() {
  return (
    <div className="relative mx-auto w-full max-w-[480px] lg:max-w-[520px]">
      {/* Subtle warm celestial glow behind the emblem */}
      <div
        className="pointer-events-none absolute inset-[12%] rounded-full bg-[radial-gradient(circle,rgba(245,197,66,0.2)_0%,rgba(212,160,23,0.08)_50%,transparent_70%)] blur-2xl"
        aria-hidden="true"
      />

      {/* Layer 1 — the guruji emblem */}
      <img
        src={gurujiEmblem}
        alt="Sri Vasishta Jyotishya Parishodhanalayam emblem: the saint inside a golden zodiac medallion with an orange Telugu name ribbon"
        width={1088}
        height={1106}
        fetchPriority="high"
        decoding="async"
        draggable={false}
        className="relative z-10 block w-full select-none drop-shadow-[0_12px_32px_rgba(123,21,48,0.2)]"
      />

      {/* Layer 2 — rotating zodiac band overlaid on the emblem */}
      <div className="hero-ring-overlay pointer-events-none absolute inset-0 z-20 select-none">
        <img
          src={zodiacRingBand}
          alt=""
          aria-hidden="true"
          width={1024}
          height={1024}
          decoding="async"
          draggable={false}
          className="absolute left-1/2 top-1/2 w-[95%] max-w-none -translate-x-1/2 -translate-y-1/2 animate-[spin_48s_linear_infinite] motion-reduce:animate-none"
        />
      </div>
    </div>
  );
}
