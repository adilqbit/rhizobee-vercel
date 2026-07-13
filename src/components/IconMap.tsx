import {
  Code2,
  Layers,
  BrainCircuit,
  Workflow,
  Server,
  Compass,
  CreditCard,
  Database,
  Cloud,
  Users,
  ShieldCheck,
  LineChart,
  QrCode,
  Volume2,
  Smartphone,
  Wallet,
  Gift,
  type LucideIcon,
} from "lucide-react";

export const iconMap: Record<string, LucideIcon> = {
  code: Code2,
  layers: Layers,
  brain: BrainCircuit,
  workflow: Workflow,
  server: Server,
  compass: Compass,
  payments: CreditCard,
  data: Database,
  cloud: Cloud,
  crm: Users,
  security: ShieldCheck,
  analytics: LineChart,
  qr: QrCode,
  soundbox: Volume2,
  pos: Smartphone,
  wallet: Wallet,
  gift: Gift,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = iconMap[name] ?? Code2;
  return <Cmp className={className} strokeWidth={1.6} />;
}
