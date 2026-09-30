import { Icon } from "@/components/IconMap";
import { Card } from "@/components/ui";
import { serviceCategories, switchService } from "@/lib/content";

/** Joins short labels into one natural sentence, e.g. "Insurance and Loans." */
function toSentence(labels: string[]): string {
  if (labels.length === 0) return "";
  if (labels.length === 1) return `${labels[0]}.`;
  return `${labels.slice(0, -1).join(", ")} and ${labels[labels.length - 1]}.`;
}

/**
 * Five sibling service categories — Switch, Banking & Cash Services,
 * Recharge & Bill Payments, Travel & Booking, and Financial Services.
 *
 * Uses the exact same `Card` component, icon treatment, and typography as
 * the six core service cards above, so all eleven read as one unified,
 * consistently designed Services section. Sub-services are summarised as a
 * single short line (matching the six cards' one-line description) rather
 * than a stacked list, so card height stays fixed and does not grow with
 * the number of sub-services.
 */
export function ServiceCategories() {
  return (
    <div id="service-categories" className="mt-12 flex flex-wrap justify-center gap-6">
      {serviceCategories.map((c) => {
        const description =
          c.slug === "switch" ? switchService.description : toSentence(c.items.map((it) => it.label));
        return (
          <Card
            key={c.slug}
            id={c.slug}
            className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-royal/10 text-royal">
              <Icon name={c.icon} className="h-5 w-5" />
            </div>
            <h3 className="font-display mt-5 text-lg font-semibold text-ink">{c.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate">{description}</p>
          </Card>
        );
      })}
    </div>
  );
}
