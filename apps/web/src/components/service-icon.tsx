import type { Service } from "@/data/services";
import { Braces, Gauge, PanelsTopLeft, ShoppingBag } from "lucide-react";

const icons = {
  wordpress: PanelsTopLeft,
  commerce: ShoppingBag,
  performance: Gauge,
  code: Braces,
} as const;

export function ServiceIcon({ icon }: { icon: Service["icon"] }) {
  const Icon = icons[icon];
  return <Icon aria-hidden="true" className="size-5" strokeWidth={1.6} />;
}
