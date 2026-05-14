import { Users, Heart, TrendingUp, Target } from "lucide-react";
import { Reveal } from "../Reveal";

const features = [
  { icon: Users, title: "Grupuri mici", text: "Maxim câțiva elevi per grupă, pentru ca fiecare întrebare să primească răspuns." },
  { icon: Heart, title: "Profesori pasionați", text: "Oameni care iubesc materia lor și știu să o transmită cu entuziasm." },
  { icon: TrendingUp, title: "Rezultate dovedite", text: "Sute de elevi au intrat la liceele și facultățile dorite cu pregătirea noastră." },
  { icon: Target, title: "Pregătire personalizată", text: "Plan adaptat nivelului fiecărui elev, cu obiective clare săptămânal." },
];

export function WhyUs() {
  return (
    <section id="de-ce-noi" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid md:grid-cols-12 gap-10 md:gap-14">
          <Reveal className="md:col-span-5 md:sticky md:top-28 self-start">
            <p className="text-sm uppercase tracking-[0.25em] text-primary font-semibold">De ce EDU POTION?</p>
            <h2 className="mt-3 text-4xl md:text-6xl font-bold leading-[1.05]">
              Patru ingrediente. <span className="italic text-primary">Un singur</span> rezultat.
            </h2>
            <p className="mt-6 text-muted-foreground text-lg">
              Combinăm metodă, pasiune și atenție la detaliu pentru a transforma sesiunile de meditații într-o experiență care chiar funcționează.
            </p>
          </Reveal>
          <div className="md:col-span-7 grid gap-px bg-border rounded-3xl overflow-hidden border border-border">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 100}>
                <article className="bg-background p-8 md:p-10 grid md:grid-cols-[auto_1fr] gap-6 items-start hover:bg-secondary/40 transition-colors">
                  <div className="inline-flex w-14 h-14 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-soft">
                    <f.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-baseline gap-3">
                      <span className="font-display text-sm text-primary">0{i + 1}</span>
                      <h3 className="font-display text-2xl font-bold">{f.title}</h3>
                    </div>
                    <p className="mt-2 text-muted-foreground leading-relaxed">{f.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
