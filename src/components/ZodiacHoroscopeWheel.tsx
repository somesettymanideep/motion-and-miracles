import { memo } from "react";

/**
 * Animated "ZODIAC · ASTROLOGY · HOROSCOPE" celestial chakra wheel.
 * Replaces the static photo in the hero emblem and rotates smoothly
 * in a clockwise direction with the 12 rashis/zodiac signs and golden Surya center.
 */

const SIGNS_DATA = [
  { glyph: "♈", name: "Mesha", english: "Aries" },
  { glyph: "♉", name: "Vrishabha", english: "Taurus" },
  { glyph: "♊", name: "Mithuna", english: "Gemini" },
  { glyph: "♋", name: "Karka", english: "Cancer" },
  { glyph: "♌", name: "Simha", english: "Leo" },
  { glyph: "♍", name: "Kanya", english: "Virgo" },
  { glyph: "♎", name: "Tula", english: "Libra" },
  { glyph: "♏", name: "Vrischika", english: "Scorpio" },
  { glyph: "♐", name: "Dhanu", english: "Sagittarius" },
  { glyph: "♑", name: "Makara", english: "Capricorn" },
  { glyph: "♒", name: "Kumbha", english: "Aquarius" },
  { glyph: "♓", name: "Meena", english: "Pisces" },
].map((s, i) => {
  const midAngle = (i * 30 - 75) * (Math.PI / 180);
  const gx = (250 + 154 * Math.cos(midAngle)).toFixed(1);
  const gy = (250 + 154 * Math.sin(midAngle)).toFixed(1);
  const nx = (250 + 125 * Math.cos(midAngle)).toFixed(1);
  const ny = (250 + 125 * Math.sin(midAngle)).toFixed(1);
  const rot = (i * 30 + 15).toFixed(1);
  return { ...s, gx, gy, nx, ny, rot };
});

const SPOKES = Array.from({ length: 12 }, (_, i) => {
  const angle = (i * 30 - 90) * (Math.PI / 180);
  const x1 = (250 + 106 * Math.cos(angle)).toFixed(1);
  const y1 = (250 + 106 * Math.sin(angle)).toFixed(1);
  const x2 = (250 + 192 * Math.cos(angle)).toFixed(1);
  const y2 = (250 + 192 * Math.sin(angle)).toFixed(1);
  return { x1, y1, x2, y2 };
});

const STAR_POINTS = Array.from({ length: 24 }, (_, k) => {
  const angle = (k * 15 - 90) * (Math.PI / 180);
  const r = k % 2 === 0 ? 98 : 68;
  return `${(250 + r * Math.cos(angle)).toFixed(1)},${(250 + r * Math.sin(angle)).toFixed(1)}`;
}).join(" ");

function ZodiacHoroscopeWheelComponent() {
  return (
    <div className="relative h-full w-full select-none overflow-hidden rounded-full bg-gradient-to-br from-cream via-[#FFF3DF] to-peach p-1">
      {/* Subtle radial sheen */}
      <div
        className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_35%_25%,rgba(255,255,255,0.7),transparent_60%)]"
        aria-hidden="true"
      />

      <svg
        viewBox="0 0 500 500"
        className="h-full w-full"
        aria-label="Zodiac Astrology Horoscope celestial wheel rotating clockwise"
        role="img"
      >
        <defs>
          {/* Circular path for clockwise text layout */}
          <path
            id="zodiacTextTrack"
            d="M 250, 250 m -214, 0 a 214,214 0 1,1 428,0 a 214,214 0 1,1 -428,0"
            fill="none"
          />

          {/* Radial gradient for backdrop */}
          <radialGradient id="wheelGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFDF7" />
            <stop offset="65%" stopColor="#FFF2DC" />
            <stop offset="100%" stopColor="#FFE0B2" />
          </radialGradient>

          {/* Golden star gradient */}
          <linearGradient id="goldStarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F5C542" />
            <stop offset="50%" stopColor="#D4A017" />
            <stop offset="100%" stopColor="#E06A00" />
          </linearGradient>

          {/* Central medallion gradient */}
          <radialGradient id="centerSunGrad" cx="40%" cy="35%" r="60%">
            <stop offset="0%" stopColor="#9E1B3E" />
            <stop offset="70%" stopColor="#7B1530" />
            <stop offset="100%" stopColor="#540D20" />
          </radialGradient>
        </defs>

        {/* Base disc */}
        <circle cx="250" cy="250" r="248" fill="url(#wheelGlow)" />

        {/* Outer decorative gold borders */}
        <circle cx="250" cy="250" r="242" fill="none" stroke="#D4A017" strokeWidth="3" />
        <circle
          cx="250"
          cy="250"
          r="235"
          fill="none"
          stroke="#D4A017"
          strokeWidth="1.5"
          strokeDasharray="2 6"
          opacity="0.8"
        />

        {/* LAYER 1: OUTER CLOCKWISE TEXT RING ("ZODIAC • ASTROLOGY • HOROSCOPE") */}
        <g className="animate-[spin_40s_linear_infinite] origin-center">
          <circle cx="250" cy="250" r="195" fill="none" stroke="#D4A017" strokeWidth="1.5" />
          <circle
            cx="250"
            cy="250"
            r="191"
            fill="none"
            stroke="#F5C542"
            strokeWidth="0.8"
            opacity="0.6"
          />
          <text
            fill="#7B1530"
            fontSize="12.5"
            fontWeight="700"
            letterSpacing="0.22em"
            fontFamily="'Playfair Display', Georgia, serif"
            className="tracking-[0.22em]"
          >
            <textPath
              href="#zodiacTextTrack"
              startOffset="0%"
              textLength="1320"
              lengthAdjust="spacing"
            >
              ✦ ZODIAC ✦ ASTROLOGY ✦ HOROSCOPE ✦ ZODIAC ✦ ASTROLOGY ✦ HOROSCOPE ✦
            </textPath>
          </text>
        </g>

        {/* LAYER 2: 12 ZODIAC HOUSES / RASHIS (CLOCKWISE MOTION) */}
        <g className="animate-[spin_28s_linear_infinite] origin-center">
          {/* Spoke divider lines separating the 12 astrological houses */}
          {SPOKES.map((spoke, idx) => (
            <line
              key={idx}
              x1={spoke.x1}
              y1={spoke.y1}
              x2={spoke.x2}
              y2={spoke.y2}
              stroke="#D4A017"
              strokeWidth="1.2"
              opacity="0.75"
            />
          ))}

          {/* Concentric divider rings around rashis */}
          <circle cx="250" cy="250" r="192" fill="none" stroke="#D4A017" strokeWidth="1.5" />
          <circle cx="250" cy="250" r="106" fill="none" stroke="#D4A017" strokeWidth="2" />
          <circle
            cx="250"
            cy="250"
            r="102"
            fill="none"
            stroke="#F5C542"
            strokeWidth="1"
            strokeDasharray="2 4"
            opacity="0.85"
          />

          {/* 12 Zodiac signs with glyphs and Sanskrit rashi names */}
          {SIGNS_DATA.map((sign, idx) => (
            <g key={idx}>
              {/* Sacred Zodiac Glyph */}
              <text
                x={sign.gx}
                y={sign.gy}
                fill="#7B1530"
                fontSize="22"
                fontWeight="700"
                textAnchor="middle"
                dominantBaseline="central"
                style={{ filter: "drop-shadow(0 1px 1px rgba(212,160,23,0.35))" }}
              >
                {sign.glyph}
              </text>
              {/* Rashi name */}
              <text
                x={sign.nx}
                y={sign.ny}
                fill="#9A7412"
                fontSize="8"
                fontWeight="600"
                textAnchor="middle"
                dominantBaseline="central"
                letterSpacing="0.06em"
              >
                {sign.name}
              </text>
            </g>
          ))}

          {/* Central 12-point Golden Surya / Sun Star */}
          <polygon
            points={STAR_POINTS}
            fill="url(#goldStarGrad)"
            stroke="#D4A017"
            strokeWidth="1.5"
            style={{ filter: "drop-shadow(0 2px 6px rgba(224,106,0,0.35))" }}
          />
        </g>

        {/* LAYER 3: INNER SACRED SURYA / OM DISC (ROTATING CLOCKWISE) */}
        <g className="animate-[spin_48s_linear_infinite] origin-center">
          <circle
            cx="250"
            cy="250"
            r="48"
            fill="url(#centerSunGrad)"
            stroke="#D4A017"
            strokeWidth="2.5"
          />
          <circle
            cx="250"
            cy="250"
            r="44"
            fill="none"
            stroke="#F5C542"
            strokeWidth="1"
            strokeDasharray="2 3"
            opacity="0.75"
          />

          {/* Radiant 12 sun flares */}
          {Array.from({ length: 12 }, (_, i) => {
            const angle = i * 30 * (Math.PI / 180);
            const x1 = (250 + 34 * Math.cos(angle)).toFixed(1);
            const y1 = (250 + 34 * Math.sin(angle)).toFixed(1);
            const x2 = (250 + 42 * Math.cos(angle)).toFixed(1);
            const y2 = (250 + 42 * Math.sin(angle)).toFixed(1);
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#F5C542"
                strokeWidth="1.5"
                strokeLinecap="round"
                opacity="0.9"
              />
            );
          })}

          {/* Sacred Om symbol at the golden sun heart */}
          <text
            x="250"
            y="252"
            fill="#F5C542"
            fontSize="26"
            fontWeight="700"
            textAnchor="middle"
            dominantBaseline="central"
            fontFamily="'Noto Sans Telugu', serif"
            style={{ filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.4))" }}
          >
            ॐ
          </text>
        </g>
      </svg>
    </div>
  );
}

export const ZodiacHoroscopeWheel = memo(ZodiacHoroscopeWheelComponent);
