import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import musicSrc from "@/assets/background-music.mp3";

/** Site background music — on by default; browsers that block autoplay start it on first interaction. */
export function MusicToggle() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [on, setOn] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("music-on");
    if (saved === "0") setOn(false);
  }, []);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    a.volume = 0.4;
    localStorage.setItem("music-on", on ? "1" : "0");
    if (!on) {
      a.pause();
      return;
    }
    const start = () => {
      a.play().catch(() => {});
    };
    a.play().catch(() => {
      const events = ["pointerdown", "keydown", "touchstart", "scroll"];
      const once = () => {
        start();
        events.forEach((e) => window.removeEventListener(e, once));
      };
      events.forEach((e) => window.addEventListener(e, once, { once: true, passive: true }));
    });
  }, [on]);

  return (
    <>
      <audio ref={audioRef} src={musicSrc} loop preload="auto" />
      <button
        type="button"
        onClick={() => setOn((v) => !v)}
        aria-label={on ? "Turn music off" : "Turn music on"}
        aria-pressed={on}
        className="fixed bottom-5 left-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border-2 border-gold bg-maroon text-cream shadow-lg transition-transform hover:scale-105"
      >
        {on ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
      </button>
    </>
  );
}
