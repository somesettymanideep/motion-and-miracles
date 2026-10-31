import zodiacWheel from "@/assets/zodiac-wheel-om.png";

/**
 * Hero Zodiac Wheel — the sacred golden zodiac horoscope wheel with the Om
 * symbol at its centre, rotating smoothly and continuously clockwise around
 * its exact central axis. Transparent background, constant speed, seamless
 * infinite loop (a full 360° linear spin), no added elements or camera moves.
 */
export function HeroEmblem() {
  return (
    <div className="relative mx-auto flex aspect-square w-full max-w-[480px] items-center justify-center lg:max-w-[520px]">
      {/* Subtle warm celestial glow behind the rotating wheel */}
      <div
        className="pointer-events-none absolute inset-[12%] rounded-full bg-[radial-gradient(circle,rgba(245,197,66,0.2)_0%,rgba(212,160,23,0.08)_50%,transparent_70%)] blur-2xl"
        aria-hidden="true"
      />

      <img
        src={zodiacWheel}
        alt="Sacred golden zodiac horoscope wheel with the Om symbol at its centre, rotating clockwise"
        width={1024}
        height={1024}
        fetchPriority="high"
        decoding="async"
        draggable={false}
        className="relative z-10 h-full w-full max-w-none animate-[spin_48s_linear_infinite] select-none object-contain drop-shadow-[0_12px_32px_rgba(123,21,48,0.2)] motion-reduce:animate-none"
      />
    </div>
  );
}
