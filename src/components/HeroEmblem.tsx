import { Suspense, lazy, useEffect, useState } from "react";
import logoUrl from "@/assets/logo.png";

const ZodiacScene = lazy(() => import("@/scene/ZodiacScene"));

/** CSS fallback ring shown before (and while) the three.js scene loads. */
function StaticRing() {
  return (
    <div
      className="absolute inset-[8%] animate-[spin_36s_linear_infinite] rounded-full border-2 border-dashed border-gold/60"
      aria-hidden="true"
    />
  );
}

/**
 * The emblem inside a circular gold frame, circled by the three.js
 * slow-rotating zodiac ring. The canvas is client-only and lazy-loaded;
 * the CSS ring renders during SSR and as the fallback.
 */
export function HeroEmblem() {
  const [mounted, setMounted] = useState(false);
  const [sceneReady, setSceneReady] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[500px]">
      <div
        data-scene-ready={sceneReady ? "true" : undefined}
        className="absolute inset-0"
        aria-hidden="true"
      >
        {mounted ? (
          <Suspense fallback={<StaticRing />}>
            <ZodiacScene onReady={() => setSceneReady(true)} />
          </Suspense>
        ) : (
          <StaticRing />
        )}
      </div>
      <div className="shadow-warm absolute inset-[17%] overflow-hidden rounded-full border-4 border-gold bg-cream">
        <img
          src={logoUrl}
          alt="Sri Vasishta Jyotishya Parishodhanalayam emblem — Telugu devotional saint"
          width={500}
          height={500}
          className="h-full w-full object-cover"
          style={{ objectPosition: "50% 18%" }}
        />
      </div>
    </div>
  );
}
