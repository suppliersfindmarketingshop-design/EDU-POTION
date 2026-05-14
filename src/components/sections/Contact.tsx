import { MapPin, Phone, Clock, ArrowRight } from "lucide-react";
import { Reveal } from "../Reveal";

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-5">
        <Reveal className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.25em] text-primary font-semibold">Contact</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">Hai să ne cunoaștem.</h2>
          <p className="mt-4 text-muted-foreground text-lg">Te așteptăm la centru sau la telefon pentru detalii despre înscrieri și orare.</p>
        </Reveal>
        <div className="mt-12 grid md:grid-cols-5 gap-6">
          <Reveal className="md:col-span-2">
            <div className="h-full rounded-3xl bg-gradient-hero text-primary-foreground p-8 flex flex-col gap-6 shadow-elegant">
              <Info icon={MapPin} title="Adresă" lines={["Aleea Mădărași 2", "077160 București, Sector 3"]} />
              <Info icon={Phone} title="Telefon" lines={["0775 341 212"]} href="tel:0775341212" />
              <Info icon={Clock} title="Program" lines={["Luni–Duminică", "până la 21:00"]} />
              <a href="tel:0775341212" className="mt-auto inline-flex items-center justify-between gap-2 rounded-2xl bg-primary-foreground text-primary px-5 py-4 font-semibold hover:scale-[1.02] transition-transform">
                Sună acum
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </Reveal>
          <Reveal delay={120} className="md:col-span-3">
            <div className="h-full min-h-[420px] rounded-3xl overflow-hidden border border-border shadow-soft">
              <iframe
                title="EDU POTION pe hartă"
                src="https://www.google.com/maps?q=Aleea+M%C4%83d%C4%83ra%C8%99i+2,+Bucure%C8%99ti&output=embed"
                className="w-full h-full min-h-[420px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Info({ icon: Icon, title, lines, href }: { icon: any; title: string; lines: string[]; href?: string }) {
  const content = (
    <div className="flex gap-4">
      <div className="w-11 h-11 grid place-items-center rounded-xl bg-white/15 backdrop-blur shrink-0">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <p className="text-xs uppercase tracking-widest text-primary-foreground/70">{title}</p>
        {lines.map((l) => <p key={l} className="font-medium">{l}</p>)}
      </div>
    </div>
  );
  return href ? <a href={href} className="hover:opacity-90 transition-opacity">{content}</a> : content;
}
