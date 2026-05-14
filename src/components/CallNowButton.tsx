import { Phone } from "lucide-react";

export function CallNowButton() {
  return (
    <a
      href="tel:0775341212"
      aria-label="Sună acum 0775 341 212"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-5 py-4 text-primary-foreground font-semibold shadow-glow animate-pulse-ring hover:scale-105 transition-transform"
    >
      <Phone className="w-5 h-5" />
      <span className="hidden sm:inline">0775 341 212</span>
    </a>
  );
}
