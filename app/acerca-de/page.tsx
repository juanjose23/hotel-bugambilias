import type { Metadata } from "next"
import Header from "@/components/header"
import AboutHero from "@/components/about-hero"
import AboutStory from "@/components/about-story"
import AboutValues from "@/components/about-values"
import AboutTeam from "@/components/about-team"
import AboutGallery from "@/components/about-gallery"
import AboutAwards from "@/components/about-awards"
import AboutSustainability from "@/components/about-sustainability"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Acerca de Nosotros - Hotel Bugambilias",
  description: "Conoce la historia de Hotel Bugambilias, nuestro equipo y los valores que nos hacen únicos desde 1985.",
}

export default function AcercaDePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutAwards />
      <AboutTeam />
      <AboutSustainability />
      <AboutGallery />
      <Footer />
    </main>
  )
}
