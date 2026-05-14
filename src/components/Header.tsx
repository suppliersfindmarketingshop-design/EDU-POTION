import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const links = [
  { href: "#despre", label: "Despre noi" },
  { href: "#materii", label: "Materii" },
  { href: "#de-ce-noi", label: "De ce noi" },
  { href: "#recenzii", label: "Recenzii" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`fixed top-0 inset-x-0 z-40 transition-all ${scrolled ? "bg-background/80 backdrop-blur-md shadow-soft" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        <a href="#top"><Logo /></a>
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-muted-foreground">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-primary transition-colors">{l.label}</a>
          ))}
        </nav>
        <a href="#contact" className="hidden sm:inline-flex items-center rounded-full bg-gradient-primary text-primary-foreground px-4 py-2 text-sm font-semibold shadow-soft hover:scale-105 transition-transform">
          Înscrie-te
        </a>
      </div>
    </header>
  );
}
