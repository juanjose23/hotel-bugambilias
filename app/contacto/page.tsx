import type { Metadata } from "next"
import Header from "@/components/header"
import ContactHero from "@/components/contact-hero"
import ContactForm from "@/components/contact-form"
import ContactInfo from "@/components/contact-info"
import ContactMap from "@/components/contact-map"
import ContactFAQ from "@/components/contact-faq"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Contacto - Hotel Bugambilias",
  description: "Contáctanos para reservas, información o cualquier consulta. Estamos aquí para ayudarte las 24 horas.",
  keywords: "contacto hotel, reservas, información, teléfono, email, ubicación, Hotel Bugambilias",
}

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <ContactHero />
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
      <ContactMap />
      <ContactFAQ />
      <Footer />
    </main>
  )
}
