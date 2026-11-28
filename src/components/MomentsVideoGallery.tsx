import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { VideoItem } from "@/data/services";
import { dict } from "@/data/site";
import { useLanguage, useTr } from "@/lib/i18n";

function toMediaUrl(url: string): string {
  if (url.startsWith("/__l5e/")) {
    return `https://f4532138-3161-43d9-9755-44d32f75e99b.lovableproject.com${url}`;
  }
  return url;
}

/** One active player and paged poster thumbnails; other services keep their carousel. */
export function MomentsVideoGallery({ items }: { items: VideoItem[] }) {
  const { lang } = useLanguage();
  const tr = useTr();
  const d = dict[lang].videoGallery;
  const [selected, setSelected] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [error, setError] = useState(false);
  const [landscape, setLandscape] = useState(false);
  const player = useRef<HTMLVideoElement>(null);
  const item = items[selected];
  useEffect(() => {
    if (!item) return;
    const img = new Image();
    img.onload = () => setLandscape(img.naturalWidth > img.naturalHeight);
    img.src = toMediaUrl(item.poster);
  }, [item]);
  if (!item) return null;
  const pageStart = Math.floor(selected / 6) * 6;

  function select(index: number) {
    player.current?.pause();
    setPlaying(false);
    setError(false);
    setSelected((index + items.length) % items.length);
  }

  async function play() {
    if (!player.current) return;
    setError(false);
    try {
      await player.current.play();
    } catch {
      setError(true);
    }
  }

  const activeVideoUrl = toMediaUrl(item.video);
  const activePosterUrl = toMediaUrl(item.poster);

  return (
    <div className="moments-gallery" aria-label={d.label}>
      <div className={landscape ? "moments-player moments-player-tv" : "moments-player"}>
        <video
          key={activeVideoUrl}
          ref={player}
          src={activeVideoUrl}
          poster={activePosterUrl}
          playsInline
          controls={playing}
          preload="none"
          aria-label={tr(item.title)}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onEnded={() => setPlaying(false)}
          onError={() => setError(true)}
          onLoadedMetadata={(e) => setLandscape(e.currentTarget.videoWidth > e.currentTarget.videoHeight)}
          className="absolute inset-0 h-full w-full object-contain"
        />
        {!playing && (
          <Button type="button" variant="ghost" size="icon" aria-label={d.play} onClick={play} className="moments-play moments-play-main">
            <Play fill="currentColor" aria-hidden="true" />
          </Button>
        )}
      </div>
      <div className="moments-browser">
        <header className="text-center">
          <h2 className="font-display text-2xl font-bold text-maroon sm:text-3xl">{d.label}</h2>
          <div className="my-5 flex items-center justify-center gap-2 text-gold" aria-hidden="true">
            <span className="h-px w-1/3 bg-gold" /><span>◆</span><span className="h-px w-1/3 bg-gold" />
          </div>
        </header>
        <div className="grid grid-cols-3 gap-3 sm:gap-5">
          {items.slice(pageStart, pageStart + 6).map((video, i) => {
            const index = pageStart + i;
            const thumbPoster = toMediaUrl(video.poster);
            return (
              <Button key={video.video} type="button" variant="ghost" aria-label={`${d.select} ${index + 1}: ${tr(video.title)}`} aria-pressed={selected === index} onClick={() => { if (selected === index) void play(); else select(index); }} className="moments-thumbnail">
                <img src={thumbPoster} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                <span className="moments-play" aria-hidden="true"><Play fill="currentColor" /></span>
              </Button>
            );
          })}
        </div>
        <div className="mt-6 flex items-center justify-center gap-4 sm:mt-8 sm:gap-6">
          <span className="h-px flex-1 bg-gold" aria-hidden="true" />
          <Button type="button" variant="outline" size="icon" aria-label={d.previous} onClick={() => select(selected - 1)} className="rounded-full border-maroon text-maroon"><ChevronLeft aria-hidden="true" /></Button>
          <p className="min-w-16 text-center text-sm font-semibold text-maroon" aria-live="polite">{String(selected + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}</p>
          <Button type="button" variant="outline" size="icon" aria-label={d.next} onClick={() => select(selected + 1)} className="rounded-full border-maroon text-maroon"><ChevronRight aria-hidden="true" /></Button>
          <span className="h-px flex-1 bg-gold" aria-hidden="true" />
        </div>
        {error && <p role="alert" className="mt-3 text-center text-sm text-maroon">{d.error}</p>}
      </div>
    </div>
  );
}