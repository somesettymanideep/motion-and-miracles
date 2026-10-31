import { useEffect, useRef } from "react";
import zodiacVideoWebm from "@/assets/zodiac-wheel.webm";
import zodiacVideoMp4 from "@/assets/zodiac-wheel.mp4";
import zodiacPoster from "@/assets/zodiac-wheel-poster.png";

/**
 * Hero Zodiac Wheel Video:
 * Continuous 360° clockwise rotation of the complete sacred zodiac wheel
 * (12 rashis, golden rings, lotus petals, and central Om symbol rotating together).
 * Transparent background, fixed camera, smooth constant speed, seamless infinite loop.
 */
export function HeroEmblem() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Ensure autoplay starts smoothly even if strict policy applies
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay may be deferred until user interaction; muted attribute handles most browsers
      });
    }
  }, []);

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[480px] lg:max-w-[520px] flex items-center justify-center">
      {/* Subtle warm celestial glow behind the rotating wheel */}
      <div
        className="pointer-events-none absolute inset-[12%] rounded-full bg-[radial-gradient(circle,rgba(245,197,66,0.2)_0%,rgba(212,160,23,0.08)_50%,transparent_70%)] blur-2xl"
        aria-hidden="true"
      />

      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        poster={zodiacPoster}
        className="relative z-10 h-full w-full object-contain drop-shadow-[0_12px_32px_rgba(123,21,48,0.2)] select-none pointer-events-none"
        aria-label="Sacred Vedic Zodiac Wheel rotating clockwise"
      >
        <source src={zodiacVideoWebm} type="video/webm" />
        <source src={zodiacVideoMp4} type="video/mp4" />
      </video>
    </div>
  );
}
