import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { dict } from "@/data/site";
import { useLanguage } from "@/lib/i18n";

import musicUrl from "@/assets/background-music.mp3?url";

const MUSIC_URL = musicUrl;
const STORAGE_KEY = "music-on";

/**
 * Clicks on these can start the music but never stop it: navigating links,
 * pressing buttons and typing in forms must not silence the music. The sound
 * button is excluded entirely — it has its own toggle.
 */
const INTERACTIVE =
  "a, button, input, textarea, select, label, summary, [role='button']";

/**
 * Site background music — on by default. Clicking anywhere on the page
 * toggles it: one click starts it, another click stops it (the sound button
 * works the same way). The visitor's manual choice is remembered. If audible
 * autoplay is blocked, the click unlocks and starts it; wheel, scroll and
 * keyboard gestures also start it but never stop it.
 */
export function MusicToggle() {
  const { lang } = useLanguage();
  const d = dict[lang];
  const audioRef = useRef<HTMLAudioElement>(null);
  const [on, setOn] = useState(true);
  const [ready, setReady] = useState(false);
  // True only once audio is actually audible — the sound hint hides after this.
  const [playing, setPlaying] = useState(false);
  // Latest state for listeners, so they never need re-binding.
  const stateRef = useRef({ on: true, playing: false });
  stateRef.current = { on, playing };

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
    const attempt = () => {
      a.muted = false;
      void a
        .play()
        .then(() => {
          if (!disposed) setPlaying(true);
        })
        .catch(() => {
          // Stay silent until an interaction the browser accepts unlocks sound.
        });
    };

    // Start-only unlocks for gestures that never precede a click, so a single
    // tap cannot both start and stop the music. Clicks are handled separately
    // by the page-wide toggle below.
    const startEvents = ["keydown", "wheel", "scroll"];
    const removeStart = () => {
      startEvents.forEach((e) => window.removeEventListener(e, start));
    };
    const start = () => {
      const { on: isOn, playing: isPlaying } = stateRef.current;
      if (isOn && !isPlaying) attempt();
      else removeStart();
    };
    startEvents.forEach((e) => window.addEventListener(e, start, { passive: true }));
    attempt();

    return () => {
      disposed = true;
      removeStart();
    };
  }, [on, ready]);

  // Clicking anywhere on the site toggles the music: when it is playing a
  // click stops it, and when it is silent a click starts it.
  useEffect(() => {
    if (!ready) return;
    const handleClick = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target : null;
      if (!target || target.closest("[data-music-toggle]")) return;
      const audio = audioRef.current;
      const { on: isOn, playing: isPlaying } = stateRef.current;
      const unlock = () => {
        if (!audio) return;
        audio.muted = false;
        void audio
          .play()
          .then(() => setPlaying(true))
          .catch(() => {
            // Keep waiting for the next interaction.
          });
      };
      if (isOn && isPlaying) {
        // Clicks on links, buttons and form fields never silence the music.
        if (target.closest(INTERACTIVE)) return;
        setOn(false);
        try {
          window.localStorage.setItem(STORAGE_KEY, "0");
        } catch {
          // Storage unavailable — the choice just won't persist.
        }
        audio?.pause();
        setPlaying(false);
        return;
      }
      if (isOn) {
        // Autoplay was blocked: this very click is the unlock, not an off switch.
        unlock();
        return;
      }
      setOn(true);
      try {
        window.localStorage.setItem(STORAGE_KEY, "1");
      } catch {
        // Storage unavailable — the choice just won't persist.
      }
      unlock();
    };
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [ready]);

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
