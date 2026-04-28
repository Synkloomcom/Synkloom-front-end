import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Features } from "@/components/site/Features";
import { MindMap } from "@/components/site/MindMap";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Pricing } from "@/components/site/Pricing";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Faq } from "@/components/site/Faq";
import { Cta } from "@/components/site/Cta";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Synkloom.com — Smart Queue Management System" },
      {
        name: "description",
        content: "Intelligent queue management, appointment scheduling, and real-time wait-time optimization powered by AI-driven predictions.",
      },
      { property: "og:title", content: "Synkloom — Intelligent Queue Optimization" },
      {
        property: "og:description",
        content: "Eliminate long waiting times with digital booking, real-time tracking, and AI-based demand predictions.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-dvh overflow-x-clip">
      <Header />
      <main>
        <Hero />
        <Features />
        <MindMap />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <Faq />
        <Contact />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
