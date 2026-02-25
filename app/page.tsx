import type { Metadata } from "next";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import PromotionsSection from "@/components/promotions-section";
import FeaturedRooms from "@/components/featured-rooms";
import AboutPreview from "@/components/about-preview";
import ServicesSection from "@/components/services-section";
import TestimonialsSection from "@/components/testimonials-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Hotel Bugambilias | Confort y Elegancia en Estelí, Nicaragua",
  description:
    "Descubre Hotel Bugambilias en el corazón de Estelí. Un refugio acogedor con piscina climatizada, habitaciones premium, apartamento familiar y excelente servicio.",
  keywords:
    "Hotel Bugambilias, hotel en Estelí, alojamiento en Nicaragua, habitaciones premium Estelí, hotel con piscina climatizada, apartamento familiar Estelí, eventos privados Estelí, turismo Nicaragua, ciudad tabacalera",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <HeroSection />
      <PromotionsSection />
      <FeaturedRooms />
      <AboutPreview />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
