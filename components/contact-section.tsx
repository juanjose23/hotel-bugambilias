import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import Link from "next/link"

const contactInfo = [
  {
    icon: Phone,
    title: "Teléfono",
    details: "+505 2713 3456",
    description: "Disponible 24/7 para reservas",
  },
  {
    icon: Mail,
    title: "Email",
    details: "info@hotelbugambilias.com.ni",
    description: "Respuesta en menos de 2 horas",
  },
  {
    icon: MapPin,
    title: "Ubicación",
    details: "Estelí, Nicaragua",
    description: "Centro de la ciudad",
  },
  {
    icon: Clock,
    title: "Check-in/out",
    details: "14:00 / 12:00",
    description: "Horarios flexibles disponibles",
  },
]

export default function ContactSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-bugambilia-50/30 dark:from-gray-900 dark:to-bugambilia-900/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Contáctanos
            <span className="block text-xl text-bugambilia-600 dark:text-bugambilia-400 mt-3">
              🌺 Estamos aquí para ayudarte
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            ¿Tienes preguntas sobre nuestras habitaciones o servicios? Nuestro equipo está listo para asistirte y hacer
            que tu estancia en Estelí sea perfecta.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800 petal-shadow hover:scale-105 bugambilia-bloom"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-bugambilia-100 dark:bg-bugambilia-900/30 rounded-full flex items-center justify-center mx-auto mb-4 petal-shadow">
                  <info.icon className="w-6 h-6 text-bugambilia-600 dark:text-bugambilia-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{info.title}</h3>
                <p className="text-bugambilia-600 dark:text-bugambilia-400 font-medium mb-1">{info.details}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{info.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 petal-shadow max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">¿Listo para reservar tu estancia?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Contáctanos directamente o visita nuestra página de contacto para más información sobre disponibilidad,
              precios especiales y servicios adicionales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bugambilia-primary petal-shadow hover:scale-105 transition-all duration-300"
                asChild
              >
                <Link href="/contacto">🌺 Contactar ahora</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-bugambilia-600 dark:border-bugambilia-400 text-bugambilia-600 dark:text-bugambilia-400 hover:bg-bugambilia-50 dark:hover:bg-bugambilia-900/20 bg-transparent"
                asChild
              >
                <Link href="/habitaciones">Ver habitaciones</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
