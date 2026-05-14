import { Star, Quote } from "lucide-react";
import { Reveal } from "../Reveal";

const reviews = [
  { name: "Andreea M.", role: "Părinte, clasa a VIII-a", text: "Fiica mea a luat 9.85 la Evaluarea Națională. Profesorii au fost extraordinari, atenți și mereu disponibili." },
  { name: "Mihai P.", role: "Elev, Bacalaureat", text: "Am intrat la facultatea dorită datorită pregătirii la matematică. Explicațiile sunt clare și grupele mici fac diferența." },
  { name: "Cristina D.", role: "Părinte, clasa a XII-a", text: "Cel mai bun centru de meditații din Sector 3. Recomand cu toată încrederea EDU POTION." },
];

export function Reviews() {
  return (
    <section id="recenzii" className="py-24 md:py-32 bg-secondary/40">
      <div className="max-w-6xl mx-auto px-5">
        <Reveal className="text-center max-w-2xl mx-auto">
          <p className="text-sm uppercase tracking-[0.25em] text-primary font-semibold">Recenzii</p>
          <div className="mt-4 flex items-center justify-center gap-3">
            <span className="font-display text-5xl font-bold">5.0</span>
            <div>
              <div className="flex gap-0.5 text-primary">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-5 h-5 fill-primary" />)}
              </div>
              <p className="text-sm text-muted-foreground mt-1">73 recenzii pe Google</p>
            </div>
          </div>
          <h2 className="mt-6 text-4xl md:text-5xl font-bold">Ce spun părinții și elevii.</h2>
        </Reveal>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 100}>
              <article className="h-full bg-background rounded-3xl p-7 border border-border shadow-soft hover:shadow-elegant transition-shadow flex flex-col">
                <Quote className="w-8 h-8 text-primary/30" />
                <p className="mt-4 text-foreground leading-relaxed flex-1">"{r.text}"</p>
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="font-semibold">{r.name}</p>
                  <p className="text-sm text-muted-foreground">{r.role}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
