import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-hero text-primary-foreground pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-primary-glow blur-3xl animate-float" />
        <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full bg-primary blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>
      <div className="relative max-w-5xl mx-auto px-5 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur px-4 py-1.5 text-xs font-medium uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5" /> Sector 3, București
        </span>
        <h1 className="mt-8 font-display text-5xl md:text-7xl font-bold leading-[1.05]">
          Pregătire de top pentru <span className="italic text-primary-glow">Evaluare Națională</span> și Bacalaureat
        </h1>
        <p className="mt-6 text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
          Grupuri mici, profesori pasionați și o metodă care transformă materia într-o adevărată poțiune a învățării.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a href="#contact" className="group inline-flex items-center gap-2 rounded-full bg-primary-foreground text-primary px-7 py-3.5 font-semibold shadow-glow hover:scale-105 transition-transform">
            Înscrie-te acum
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#materii" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 font-semibold hover:bg-white/10 transition-colors">
            Vezi materiile
          </a>
        </div>
        <div className="mt-14 flex flex-wrap justify-center gap-x-10 gap-y-4 text-sm text-primary-foreground/70">
          <Stat value="5.0★" label="73 recenzii Google" />
          <Stat value="6+" label="materii de examen" />
          <Stat value="Gr. mici" label="atenție personalizată" />
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="font-display text-2xl text-primary-glow">{value}</span>
      <span>{label}</span>
    </div>
  );
}
