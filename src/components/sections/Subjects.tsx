import { Calculator, BookOpen, Languages, Leaf, Globe2 } from "lucide-react";
import { Reveal } from "../Reveal";

const subjects = [
  { icon: Calculator, name: "Matematică", grades: "Clasele V–XII", span: "md:col-span-2 md:row-span-2", featured: true },
  { icon: BookOpen, name: "Română", grades: "Clasele V–XII", span: "md:col-span-2" },
  { icon: Languages, name: "Engleză", grades: "Clasele IV–XII", span: "md:col-span-2" },
  { icon: Leaf, name: "Biologie", grades: "Clasele XI–XII", span: "md:col-span-2" },
  { icon: Globe2, name: "Geografie", grades: "Clasele XI–XII", span: "md:col-span-2" },
];

export function Subjects() {
  return (
    <section id="materii" className="py-24 md:py-32 bg-secondary/40">
      <div className="max-w-6xl mx-auto px-5">
        <Reveal className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.25em] text-primary font-semibold">Materii disponibile</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">Alege-ți poțiunea preferată.</h2>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-4 md:auto-rows-[180px] gap-5">
          {subjects.map((s, i) => (
            <Reveal key={s.name} delay={i * 80} className={s.span}>
              <SubjectCard {...s} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function SubjectCard({ icon: Icon, name, grades, featured }: { icon: any; name: string; grades: string; featured?: boolean }) {
  return (
    <div
      className={`group relative h-full overflow-hidden rounded-3xl border border-border p-7 flex flex-col justify-between transition-all hover:-translate-y-1 hover:shadow-elegant ${
        featured ? "bg-gradient-hero text-primary-foreground" : "bg-gradient-card"
      }`}
    >
      <div className={`inline-flex w-12 h-12 items-center justify-center rounded-2xl ${featured ? "bg-white/15 backdrop-blur" : "bg-primary/10 text-primary"}`}>
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <h3 className={`font-display text-2xl md:text-3xl font-bold ${featured ? "" : "text-foreground"}`}>{name}</h3>
        <p className={`mt-1 text-sm ${featured ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{grades}</p>
      </div>
      <div className={`absolute -bottom-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-40 transition-opacity group-hover:opacity-70 ${featured ? "bg-primary-glow" : "bg-primary/30"}`} />
    </div>
  );
}
