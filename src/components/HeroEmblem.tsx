import zodiacWheelRot from "@/assets/zodiac-wheel-om-rot.png";
import zodiacOmCenter from "@/assets/zodiac-om-center.png";
import teluguEmblem from "@/assets/hero-telugu-emblem.webp";

/**
 * Hero Zodiac Wheel — the sacred golden zodiac horoscope wheel, split into
 * two layers cut from the same artwork so colors match exactly:
 *  1. The rotating ring (12 zodiac signs, lotus petals, ornamental gold
 *     rings) spins smoothly clockwise around the exact central axis with a
 *     constant-speed, seamless infinite loop. Its centre is cut out.
 *  2. The central maroon Om medallion sits fixed on top — perfectly still,
 *     centred, never rotating. Its feathered edge fully covers the ring's
 *     cut-out seam.
 *  3. A warm light wash ties the wheel into the hero background light.
 *  4. The institute emblem (portrait + golden zodiac frame + Telugu name
 *     banner) sits centred on top of everything, larger than the wheel.
 * Transparent background, no added elements or camera moves.
 */
export function HeroEmblem() {
  return (
    <div className="relative mx-auto flex aspect-square w-full max-w-[480px] items-center justify-center lg:max-w-[520px]">
      {/* Subtle warm celestial glow behind the rotating wheel */}
      <div
        className="pointer-events-none absolute inset-[12%] rounded-full bg-[radial-gradient(circle,rgba(245,197,66,0.2)_0%,rgba(212,160,23,0.08)_50%,transparent_70%)] blur-2xl"
        aria-hidden="true"
      />

      {/* Layer 1 — rotating zodiac ring (centre cut out) */}
      <img
        src={zodiacWheelRot}
        alt="Sacred golden zodiac horoscope wheel with twelve zodiac signs and lotus petals, rotating clockwise around a fixed Om centre"
        width={1024}
        height={1024}
        fetchPriority="high"
        decoding="async"
        draggable={false}
        className="relative z-10 h-[88%] w-[88%] max-w-none animate-[spin_48s_linear_infinite] select-none object-contain drop-shadow-[0_12px_32px_rgba(123,21,48,0.2)] motion-reduce:animate-none lg:h-full lg:w-full"
      />

      {/* Layer 2 — fixed central Om medallion (never rotates) */}
      <img
        src={zodiacOmCenter}
        alt=""
        aria-hidden="true"
        width={228}
        height={228}
        decoding="async"
        draggable={false}
        className="absolute left-1/2 top-1/2 z-20 w-[22.3%] max-w-none -translate-x-1/2 -translate-y-1/2 select-none"
      />

      {/* Layer 3 — the same warm light wash the hero background carries
          (cream gradient left→right, cream lift from the bottom, faint
          zodiac dust), sampled for the wheel's position on the right so the
          wheel sits inside the page light instead of floating on top of it.
          A radial mask dissolves the wash before the wheel's rim so it reads
          as ambient light, never as a circular badge. */}
      <div
        className="pointer-events-none absolute inset-0 z-30 select-none"
        aria-hidden="true"
        style={{
          maskImage: "radial-gradient(circle at 50% 50%, black 46%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(circle at 50% 50%, black 46%, transparent 80%)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cream/70 via-cream/52 to-cream/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-cream/55 via-transparent to-cream/25" />
        <div className="zodiac-pattern absolute inset-0 opacity-25" />
      </div>

      {/* Layer 4 — the institute emblem (saint's portrait inside a golden
          zodiac frame with the Telugu name banner). It sits dead centre on
          top of the wheel and is deliberately larger than the circle: the
          wheel keeps its own size, the emblem overflows it. */}
      <img
        src={teluguEmblem}
        alt="Sri Lakshmi Jyotishya Parishodhanalayam emblem — the saint's portrait inside a golden zodiac frame with an orange Telugu name banner"
        width={900}
        height={915}
        fetchPriority="high"
        decoding="async"
        draggable={false}
        className="absolute left-1/2 top-1/2 z-40 w-full max-w-none -translate-x-1/2 -translate-y-1/2 select-none drop-shadow-[0_16px_40px_rgba(123,21,48,0.3)] lg:w-[120%]"
      />
    </div>
  );
}
