import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTr } from "@/lib/i18n";
import type { VideoItem } from "@/data/services";
import { Button } from "@/components/ui/button";

/** Ceremony video carousel: visitors start videos; moving slides pauses playback. */
export function VideoGallery({ items }: { items: VideoItem[] }) {
  const tr = useTr();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selected, setSelected] = useState(0);
  const videos = useRef<(HTMLVideoElement | null)[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    videos.current.forEach((v) => v?.pause());
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
        <div className="-ml-5 flex touch-pan-y">
          {items.map((item, i) => (
            <div
              key={item.video}
              className="min-w-0 shrink-0 grow-0 basis-full pl-5 sm:basis-1/2 lg:basis-1/3"
            >
            <figure className="overflow-hidden rounded-2xl border-2 border-gold bg-card shadow-lg">
              <video
                ref={(el) => {
                  videos.current[i] = el;
                }}
                src={item.video}
                poster={item.poster}
                controls
                playsInline
                preload="none"
                aria-label={tr(item.title)}
                className="h-[520px] w-full bg-cream object-contain sm:h-[560px]"
              />
              <figcaption className="px-4 py-3 text-sm font-semibold text-maroon">
                {i + 1}. {tr(item.title)}
              </figcaption>
            </figure>
            </div>
          ))}
        </div>
      </div>

      <span className="absolute right-4 top-4 rounded-full bg-maroon/85 px-3 py-1 text-xs font-semibold text-cream">
        {selected + 1} / {items.length}
      </span>
      <Button
        variant="outline"
        size="icon"
        type="button"
        onClick={() => emblaApi?.scrollPrev()}
        aria-label={tr({ en: "Previous video", te: "మునుపటి వీడియో" })}
        className="absolute -left-3 top-[260px] z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border-2 border-gold bg-card text-gold shadow-md hover:bg-gold-light/40 sm:-left-5"
      >
        <ChevronLeft className="h-5 w-5" aria-hidden="true" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        type="button"
        onClick={() => emblaApi?.scrollNext()}
        aria-label={tr({ en: "Next video", te: "తదుపరి వీడియో" })}
        className="absolute -right-3 top-[260px] z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border-2 border-gold bg-card text-gold shadow-md hover:bg-gold-light/40 sm:-right-5"
      >
        <ChevronRight className="h-5 w-5" aria-hidden="true" />
      </Button>
    </div>
  );
}