import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import type { Bi } from "@/lib/i18n";

type FaqItem = { q: Bi; a: Bi };

/** Gold plus/minus FAQ accordion; keyboard-friendly via Radix primitives. */
export function FaqAccordion({ items, tr }: { items: FaqItem[]; tr: (bi: Bi) => string }) {
  return (
    <AccordionPrimitive.Root type="single" collapsible className="space-y-3">
      {items.map((item, i) => (
        <AccordionPrimitive.Item
          key={i}
          value={`faq-${i}`}
          className="card-warm overflow-hidden !rounded-xl"
        >
          <AccordionPrimitive.Header>
            <AccordionPrimitive.Trigger className="group flex w-full items-center justify-between gap-4 px-5 py-4 text-left">
              <span className="text-sm font-semibold text-maroon sm:text-base">
                {tr(item.q)}
              </span>
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 border-gold text-gold transition-transform duration-300 group-data-[state=open]:rotate-45">
                <Plus className="h-4 w-4" aria-hidden="true" />
              </span>
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionPrimitive.Content className="data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:slide-in-from-top-1">
            <p className="border-t border-gold/30 px-5 py-4 text-sm leading-relaxed text-body">
              {tr(item.a)}
            </p>
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  );
}
