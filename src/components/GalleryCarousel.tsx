import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTr } from "@/lib/i18n";
import type { GalleryItem } from "@/data/services";

/**
 * Photo carousel for a service detail page: infinite loop, 4s autoplay that
 * pauses on hover, swipe on touch, gold prev/next arrows, a photo counter
 * and a clickable thumbnail strip.
 */
export function GalleryCarousel({ items }: { items: GalleryItem[] }) {
  const tr = useTr();
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 4000, stopOnMouseEnter: true, stopOnInteraction: false })]
  );
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (emblaApi) setSelected(emblaApi.selectedScrollSnap());
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
      <div
        className="overflow-hidden rounded-2xl border-2 border-gold bg-card shadow-lg"
        ref={emblaRef}
      >
        <div className="flex touch-pan-y">
          {items.map((item, i) => (
            <div key={i} className="min-w-0 shrink-0 grow-0 basis-full">
              <img
                src={item.image}
                alt={tr(item.alt)}
                width={1280}
                height={720}
                loading={i === 0 ? "eager" : "lazy"}
                className="aspect-[16/9] w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <span className="absolute right-4 top-4 rounded-full bg-maroon/85 px-3 py-1 text-xs font-semibold text-cream">
        {selected + 1} / {items.length}
      </span>

      <button
        type="button"
        onClick={() => emblaApi?.scrollPrev()}
        aria-label="Previous photo"
        className="absolute -left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border-2 border-gold bg-card text-gold shadow-md transition-colors hover:bg-gold-light/40 sm:-left-5"
      >
        <ChevronLeft className="h-5 w-5" aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={() => emblaApi?.scrollNext()}
        aria-label="Next photo"
        className="absolute -right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border-2 border-gold bg-card text-gold shadow-md transition-colors hover:bg-gold-light/40 sm:-right-5"
      >
        <ChevronRight className="h-5 w-5" aria-hidden="true" />
      </button>

      <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
        {items.map((item, i) => (
          <button
            key={i}
            type="button"
            onClick={() => emblaApi?.scrollTo(i)}
            aria-label={`Show photo ${i + 1}`}
            aria-current={selected === i}
            className={`shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
              selected === i
                ? "border-saffron opacity-100"
                : "border-gold/40 opacity-70 hover:opacity-100"
            }`}
          >
            <img
              src={item.image}
              alt=""
              width={1280}
              height={720}
              loading="lazy"
              className="h-14 w-20 object-cover sm:h-16 sm:w-24"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
