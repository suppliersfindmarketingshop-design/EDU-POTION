import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Subjects } from "@/components/sections/Subjects";
import { WhyUs } from "@/components/sections/WhyUs";
import { Reviews } from "@/components/sections/Reviews";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { CallNowButton } from "@/components/CallNowButton";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EDU POTION — Meditații Evaluare Națională și Bacalaureat în București" },
      { name: "description", content: "Centru de meditații în Sector 3, București. Pregătire pentru Evaluare Națională și Bacalaureat la matematică, română, engleză, biologie și geografie." },
      { property: "og:title", content: "EDU POTION — Meditații în București" },
      { property: "og:description", content: "Grupuri mici, profesori pasionați. Pregătire pentru Evaluare Națională și Bacalaureat." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Subjects />
        <WhyUs />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <CallNowButton />
    </div>
  );
}
