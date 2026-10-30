import { createFileRoute } from "@tanstack/react-router";
import { useLanguage } from "@/lib/i18n";
import { dict } from "@/data/site";
import { SERVICES } from "@/data/services";
import { PageBanner } from "@/components/PageBanner";
import { ServiceCard } from "@/components/ServiceCard";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      {
        title:
          "Our Services | Vedic Samskaras, Navagraha Shanti, Homas | Vijayawada",
      },
      {
        name: "description",
        content:
          "Eleven services — Vedic samskaras, Navagraha Shanti, special homas, dosha nivarana and astrology for health, career, business, marriage, children, education and finances — in Vijayawada.",
      },
      {
        property: "og:title",
        content: "Our Services | Sri Vasishta Jyotishya Parishodhanalayam",
      },
      {
        property: "og:description",
        content:
          "Vedic samskaras, navagraha shantis, special homas and astrology guidance — all performed in the shastriya manner.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const { lang } = useLanguage();
  const d = dict[lang];

  return (
    <div>
      <PageBanner title={d.servicesPage.bannerTitle} crumb={d.nav.services} />
      <section className="bg-cream py-14">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal className="mx-auto mb-10 max-w-2xl text-center">
            <p className="text-sm text-muted-foreground">{d.servicesPage.subtitle}</p>
            <div className="gold-divider mx-auto mt-4 w-40" aria-hidden="true" />
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, i) => (
              <Reveal key={service.slug} delay={(i % 3) * 0.08}>
                <ServiceCard service={service} priority={i < 3} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
