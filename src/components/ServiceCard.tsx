import { Link } from "@tanstack/react-router";
import type { Service } from "@/data/services";
import { useLanguage } from "@/lib/i18n";
import { dict } from "@/data/site";

/** Home / services-listing card: image, name, Read More — no descriptions. */
export function ServiceCard({ service, priority }: { service: Service; priority?: boolean }) {
  const { lang } = useLanguage();
  const d = dict[lang];

  return (
    <article className="card-warm group flex flex-col">
      <Link
        to="/services/$slug"
        params={{ slug: service.slug }}
        className="block overflow-hidden"
        aria-label={service.name[lang]}
      >
        <img
          src={service.image}
          alt={service.imageAlt}
          width={1024}
          height={1024}
          loading={priority ? "eager" : "lazy"}
          className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
      <div className="flex flex-1 flex-col items-center gap-3 p-5 text-center">
        <h3 className="font-display text-lg font-bold text-maroon">{service.name[lang]}</h3>
        <Link
          to="/services/$slug"
          params={{ slug: service.slug }}
          className="btn btn-saffron mt-auto"
        >
          {d.common.readMore}
        </Link>
      </div>
    </article>
  );
}
