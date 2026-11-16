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
              className="min-w-0 shrink-0 grow-0 basis-[80%] pl-5 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
            <div className="relative mx-auto aspect-[9/16] w-full max-w-[300px] overflow-hidden rounded-[2rem] border-[6px] border-maroon bg-maroon shadow-xl ring-2 ring-gold">
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
                className="absolute inset-0 block h-full w-full object-cover"
              />
            </div>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-4 text-center text-xs font-semibold text-maroon">
        {selected + 1} / {items.length}
      </p>
      <Button
        variant="outline"
        size="icon"
        type="button"
        onClick={() => emblaApi?.scrollPrev()}
        aria-label={tr({ en: "Previous video", te: "మునుపటి వీడియో" })}
        className="absolute -left-3 top-[45%] z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border-2 border-gold bg-card text-gold shadow-md hover:bg-gold-light/40 sm:-left-5"
      >
        <ChevronLeft className="h-5 w-5" aria-hidden="true" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        type="button"
        onClick={() => emblaApi?.scrollNext()}
        aria-label={tr({ en: "Next video", te: "తదుపరి వీడియో" })}
        className="absolute -right-3 top-[45%] z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border-2 border-gold bg-card text-gold shadow-md hover:bg-gold-light/40 sm:-right-5"
      >
        <ChevronRight className="h-5 w-5" aria-hidden="true" />
      </Button>
    </div>
  );
}