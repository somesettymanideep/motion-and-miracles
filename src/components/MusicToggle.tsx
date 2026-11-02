import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

const MUSIC_URL = "/background-music.mp3";

/**
 * Site background music — on by default. We try to start it the moment the
 * page opens; browsers that block autoplaying sound start it muted and switch
 * to full sound on the visitor's first interaction (click / tap / scroll).
 */
export function MusicToggle() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [on, setOn] = useState(true);

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

  return (
    <>
      <audio ref={audioRef} src={MUSIC_URL} loop preload="auto" />
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
