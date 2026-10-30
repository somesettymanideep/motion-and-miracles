import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { TESTIMONIALS } from "@/data/site";

/**
 * Testimonials carousel: infinite loop, 4s autoplay, pause on hover,
 * swipe on mobile, gold prev/next arrows and dot indicators.
 * The entries come from the PLACEHOLDER array in src/data/site.ts.
 */
export function Testimonials() {
  const { lang, } = useLanguage();
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 4000, stopOnMouseEnter: true, stopOnInteraction: false })]
  );
  const [selected, setSelected] = useState(0);
  const [snaps, setSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (emblaApi) setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const update = () => setSnaps(emblaApi.scrollSnapList());
    update();
    emblaApi.on("reInit", update);
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("reInit", update);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="min-w-0 shrink-0 grow-0 basis-full px-3 sm:basis-1/2 lg:basis-1/3">
              <figure className="card-warm flex h-full flex-col gap-4 p-6">
                <Quote className="h-8 w-8 text-gold" aria-hidden="true" />
                <div className="flex gap-0.5" aria-label={`${t.stars} / 5`}>
                  {Array.from({ length: t.stars }, (_, s) => (
                    <Star key={s} className="h-4 w-4 fill-gold text-gold" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="flex-1 text-sm leading-relaxed text-body">
                  “{t.text[lang]}”
                </blockquote>
                <figcaption className="text-sm">
                  <span className="font-semibold text-maroon">{t.name[lang]}</span>
                  <span className="text-muted-foreground"> · {t.place[lang]}</span>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={() => emblaApi?.scrollPrev()}
        aria-label="Previous testimonial"
        className="absolute -left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border-2 border-gold bg-card text-gold shadow-md transition-colors hover:bg-gold-light/40 sm:-left-5"
      >
        <ChevronLeft className="h-5 w-5" aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={() => emblaApi?.scrollNext()}
        aria-label="Next testimonial"
        className="absolute -right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border-2 border-gold bg-card text-gold shadow-md transition-colors hover:bg-gold-light/40 sm:-right-5"
      >
        <ChevronRight className="h-5 w-5" aria-hidden="true" />
      </button>

      <div className="mt-6 flex justify-center gap-2" role="tablist" aria-label="Testimonial slides">
        {snaps.map((_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={selected === i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`h-2.5 rounded-full transition-all ${
              selected === i ? "w-6 bg-saffron" : "w-2.5 bg-gold/50 hover:bg-gold"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
