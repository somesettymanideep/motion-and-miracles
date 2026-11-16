import { useTr } from "@/lib/i18n";
import type { VideoItem } from "@/data/services";

/** Portrait ceremony videos: visitors start each one; videos never autoplay. */
export function VideoGallery({ items }: { items: VideoItem[] }) {
  const tr = useTr();
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, i) => (
        <figure key={item.video} className="overflow-hidden rounded-2xl border-2 border-gold bg-card shadow-lg">
          <video
            src={item.video}
            poster={item.poster}
            controls
            playsInline
            preload="none"
            aria-label={tr(item.title)}
            className="aspect-[9/16] max-h-[640px] w-full bg-cream object-contain"
          />
          <figcaption className="px-4 py-3 text-sm font-semibold text-maroon">
            {i + 1}. {tr(item.title)}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}