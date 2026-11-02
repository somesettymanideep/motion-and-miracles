import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { dict } from "@/data/site";
import { useLanguage } from "@/lib/i18n";

import musicUrl from "@/assets/background-music.mp3?url";

const MUSIC_URL = musicUrl;
const STORAGE_KEY = "music-on";

/**
 * Site background music — on by default, and the visitor's choice is
 * remembered: it stays on until they press the off button, and stays off
 * until they press the on button. If audible autoplay is blocked, retry
 * during a trusted interaction rather than silently playing muted audio.
 */
export function MusicToggle() {
  const { lang } = useLanguage();
  const d = dict[lang];
  const audioRef = useRef<HTMLAudioElement>(null);
  const [on, setOn] = useState(true);
  const [ready, setReady] = useState(false);
  // True only once audio is actually audible — the sound hint hides after this.
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    try {
      setOn(window.localStorage.getItem(STORAGE_KEY) !== "0");
    } catch {
      // Storage can be disabled; sound still defaults to on.
    }
    setReady(true);
  }, []);

  useEffect(() => {
    const a = audioRef.current;
    if (!a || !ready) return;
    a.volume = 0.4;
    if (!on) {
      a.pause();
      a.muted = false;
      setPlaying(false);
      return;
    }

    let disposed = false;
    // Any trusted interaction unlocks sound — not just clicks: taps, keys,
    // scrolling and wheel movement all count for the visitor.
    const events = [
      "pointerdown",
      "pointerup",
      "keydown",
      "touchstart",
      "touchend",
      "click",
      "wheel",
      "scroll",
    ];
    const removeListeners = () => {
      events.forEach((e) => window.removeEventListener(e, unlock));
    };
    const unlock = (event?: Event) => {
      // Do not start playback when this same interaction is turning it off.
      if (event?.target instanceof Element && event.target.closest("[data-music-toggle]")) return;
      a.muted = false;
      void a.play().then(() => {
        if (disposed) return;
        setPlaying(true);
        removeListeners();
      }).catch(() => {
        // Keep listeners until an interaction actually allows sound.
      });
    };

    events.forEach((e) => window.addEventListener(e, unlock, { passive: true }));
    unlock();

    return () => {
      disposed = true;
      removeListeners();
    };
  }, [on, ready]);

  const toggle = () => {
    const next = !on;
    setOn(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next ? "1" : "0");
    } catch {
      // Storage unavailable — the choice just won't persist.
    }
    const audio = audioRef.current;
    if (!audio) return;
    if (next) {
      // Call play inside the click handler to retain browser user activation.
      audio.muted = false;
      void audio.play().then(() => setPlaying(true)).catch(() => {});
    } else {
      audio.pause();
      setPlaying(false);
    }
  };

  return (
    <>
      <audio ref={audioRef} src={MUSIC_URL} loop preload="auto" />
      {on && ready && !playing && (
        <div
          role="status"
          className="pointer-events-none fixed bottom-5 left-20 z-50 flex max-w-[min(20rem,60vw)] items-center gap-2.5 rounded-full border-2 border-gold bg-maroon px-4 py-2.5 text-sm font-medium text-cream shadow-lg"
        >
          <Volume2 className="h-4 w-4 shrink-0 animate-pulse" />
          <span>{d.common.soundHint}</span>
        </div>
      )}
      <Button
        variant="ghost"
        size="icon"
        data-music-toggle
        type="button"
        onClick={toggle}
        aria-label={on ? "Turn music off" : "Turn music on"}
        aria-pressed={on}
        className="fixed bottom-5 left-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border-2 border-gold bg-maroon text-cream shadow-lg transition-transform hover:scale-105"
      >
        {on ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
      </Button>
    </>
  );
}
