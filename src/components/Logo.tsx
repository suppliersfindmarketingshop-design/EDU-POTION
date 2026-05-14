import { Sparkles } from "lucide-react";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <div className="relative grid place-items-center w-9 h-9 rounded-xl bg-gradient-primary shadow-glow">
        <FlaskIcon className="w-5 h-5 text-primary-foreground" />
        <Sparkles className="absolute -top-1 -right-1 w-3.5 h-3.5 text-primary-glow" />
      </div>
      <span className={`font-display text-xl font-bold tracking-tight ${light ? "text-primary-foreground" : "text-foreground"}`}>
        EDU<span className="text-primary"> POTION</span>
      </span>
    </div>
  );
}

function FlaskIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M9 3h6" />
      <path d="M10 3v6L4.5 18a2 2 0 0 0 1.7 3h11.6a2 2 0 0 0 1.7-3L14 9V3" />
      <path d="M7 14h10" />
    </svg>
  );
}
