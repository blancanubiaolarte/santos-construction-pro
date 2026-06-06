import { createFileRoute } from "@tanstack/react-router";
import { LanguageProvider } from "@/lib/i18n";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Gallery } from "@/components/site/Gallery";
import { TrustBanner } from "@/components/site/TrustBanner";
import { Reviews } from "@/components/site/Reviews";
import { QuoteForm } from "@/components/site/QuoteForm";
import { WhyProcess } from "@/components/site/WhyProcess";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingButtons } from "@/components/site/FloatingButtons";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "S&E Santos Construction Repairs LLC | NJ Home Remodeling & Repairs" },
      { name: "description", content: "Licensed & insured construction company serving New Jersey for 17+ years. Free estimates on remodeling, painting, decks, tiles, roofing, plumbing & more. Bilingual (EN/ES)." },
      { name: "keywords", content: "Construction Repairs NJ, Home Remodeling New Jersey, Santos Construction LLC, Bathroom Remodeling NJ, Deck Repair NJ" },
      { property: "og:title", content: "S&E Santos Construction Repairs LLC — NJ" },
      { property: "og:description", content: "17+ Years of experience. Licensed & Insured #13VH12744400. Free estimates across New Jersey." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800;900&family=Open+Sans:wght@400;500;600;700&display=swap" },
      { rel: "canonical", href: "/" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <TrustBanner />
        <Reviews />
        <QuoteForm />
        <WhyProcess />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </LanguageProvider>
  );
}
