import { Reveal } from "../Reveal";

export function About() {
  return (
    <section id="despre" className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-5 grid md:grid-cols-5 gap-12 items-center">
        <Reveal className="md:col-span-2">
          <p className="text-sm uppercase tracking-[0.25em] text-primary font-semibold">Despre noi</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold leading-tight">
            Magia <span className="text-primary">învățării</span>, distilată cu grijă.
          </h2>
        </Reveal>
        <Reveal delay={120} className="md:col-span-3">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Centru educațional de meditații în <span className="text-foreground font-medium">Sector 3, București</span>, specializat în pregătire pentru
            Evaluarea Națională și Bacalaureat. Oferim meditații la materiile de examen, în
            <span className="text-foreground font-medium"> grupuri mici</span> cu profesori
            <span className="text-foreground font-medium"> dedicați și pasionați </span>
            de educație.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
