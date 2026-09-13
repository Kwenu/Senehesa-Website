import React from "react";
import { HeartHandshakeIcon, HandHelpingIcon, CarFrontIcon, RouteIcon, HeartPulseIcon, CompassIcon, StethoscopeIcon, ClipboardListIcon, PillIcon, LandmarkIcon, ShoppingBagIcon, Building2Icon, PlaneIcon, UsersIcon, FlowerIcon, ListChecksIcon, MapIcon, PalmtreeIcon, SparklesIcon, ShieldCheckIcon, LockKeyholeIcon, SlidersHorizontalIcon, GlobeIcon, MapPinIcon, type LucideIcon } from "lucide-react";
const iconMap: Record<string, LucideIcon> = {
  hospital: HeartPulseIcon,
  hand: HandHelpingIcon,
  car: CarFrontIcon,
  route: RouteIcon,
  heart: HeartHandshakeIcon,
  compass: CompassIcon,
  stethoscope: StethoscopeIcon,
  clipboard: ClipboardListIcon,
  pill: PillIcon,
  landmark: LandmarkIcon,
  shopping: ShoppingBagIcon,
  building: Building2Icon,
  plane: PlaneIcon,
  users: UsersIcon,
  flower: FlowerIcon,
  list: ListChecksIcon,
  map: MapIcon,
  palm: PalmtreeIcon,
  sparkles: SparklesIcon,
  shield: ShieldCheckIcon,
  lock: LockKeyholeIcon,
  sliders: SlidersHorizontalIcon,
  globe: GlobeIcon,
  pin: MapPinIcon
};
type ServiceIconProps = {
  name: string;
  className?: string;
};
export function ServiceIcon({
  name,
  className = 'h-6 w-6'
}: ServiceIconProps) {
  const Icon = iconMap[name] ?? SparklesIcon;
  return <Icon className={className} aria-hidden="true" />;
}