import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

const MUSIC_URL = "/background-music.mp3";
const STORAGE_KEY = "music-on";

/**
 * Site background music — on by default, and the visitor's choice is
 * remembered: it stays on until they press the off button, and stays off
 * until they press the on button. Browsers that block autoplaying sound
 * start it muted and switch to full sound on the visitor's first
 * interaction (click / tap / scroll).
 */
export function MusicToggle() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [on, setOn] = useState(() => {
    if (typeof window === "undefined") return true;
    return window.localStorage.getItem(STORAGE_KEY) !== "0";
  });

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    a.volume = 0.4;
    if (!on) {
      a.pause();
      a.muted = false;
      return;
    }

    const events = ["pointerdown", "keydown", "touchstart", "scroll", "click"];
    const unlock = () => {
      events.forEach((e) => window.removeEventListener(e, unlock));
      a.muted = false;
      a.play().catch(() => {});
    };

    a.muted = false;
    a
      .play()
      .catch(() => {
        // Autoplay blocked: start muted right away, unmute on first gesture.
        a.muted = true;
        a
          .play()
          .catch(() => {
            a.muted = false;
            a.play().catch(() => {});
          });
        events.forEach((e) => window.addEventListener(e, unlock, { once: true, passive: true }));
      });

    return () => {
      events.forEach((e) => window.removeEventListener(e, unlock));
    };
  }, [on]);

  const toggle = () => {
    setOn((v) => {
      const next = !v;
      try {
        window.localStorage.setItem(STORAGE_KEY, next ? "1" : "0");
      } catch {
        // Storage unavailable — the choice just won't persist.
      }
      return next;
    });
  };

  return (
    <>
      <audio ref={audioRef} src={MUSIC_URL} loop preload="auto" />
      <button
        type="button"
        onClick={toggle}
        aria-label={on ? "Turn music off" : "Turn music on"}
        aria-pressed={on}
        className="fixed bottom-5 left-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border-2 border-gold bg-maroon text-cream shadow-lg transition-transform hover:scale-105"
      >
        {on ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
      </button>
    </>
  );
}
