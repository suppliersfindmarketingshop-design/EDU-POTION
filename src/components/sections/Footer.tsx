import { Logo } from "../Logo";
import { Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-5 py-14 grid md:grid-cols-3 gap-10">
        <div>
          <Logo />
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">Centru de meditații pentru Evaluare Națională și Bacalaureat în Sector 3, București.</p>
        </div>
        <div>
          <p className="font-display text-sm uppercase tracking-widest text-primary">Navigație</p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><a href="#despre" className="hover:text-primary">Despre noi</a></li>
            <li><a href="#materii" className="hover:text-primary">Materii</a></li>
            <li><a href="#de-ce-noi" className="hover:text-primary">De ce noi</a></li>
            <li><a href="#recenzii" className="hover:text-primary">Recenzii</a></li>
            <li><a href="#contact" className="hover:text-primary">Contact</a></li>
          </ul>
        </div>
        <div>
          <p className="font-display text-sm uppercase tracking-widest text-primary">Contact</p>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 text-primary" />Aleea Mădărași 2, Sector 3, București</li>
            <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /><a href="tel:0775341212" className="hover:text-primary">0775 341 212</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} EDU POTION. Toate drepturile rezervate.
      </div>
    </footer>
  );
}
