import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ContactHero() {
  return (
    <section className="relative">
      {/* Hero Image */}
      <div className="relative h-[60vh] min-h-[500px]">
        <Image
          src="/images/terrace.jpg"
          alt="Contacto Hotel Bugambilias - Estelí, Nicaragua"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 dark:from-black/90 dark:via-black/70 dark:to-black/50" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl text-white">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-bugambilia-600/90 dark:bg-bugambilia-500/90 text-white rounded-full text-sm font-medium">
                  🌺 Estamos aquí para ayudarte
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Contáctanos
                <span className="block text-2xl md:text-3xl lg:text-4xl mt-3 text-bugambilia-200 dark:text-bugambilia-300 font-normal">
                  Tu comodidad es nuestra prioridad
                </span>
              </h1>

              <p className="text-lg md:text-xl lg:text-2xl mb-12 text-gray-200 dark:text-gray-300 max-w-3xl leading-relaxed">
                Estamos disponibles 24/7 para resolver tus dudas, ayudarte con tu reserva o cualquier consulta que
                tengas sobre tu estancia en Estelí.
              </p>

              {/* Quick contact info */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <div className="bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/15 dark:hover:bg-white/10 transition-colors">
                  <Phone className="w-8 h-8 mx-auto mb-3 text-bugambilia-200 dark:text-bugambilia-300" />
                  <p className="font-semibold mb-1">Teléfono</p>
                  <p className="text-sm text-bugambilia-200 dark:text-bugambilia-300">+505 2713 3456</p>
                </div>
                <div className="bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/15 dark:hover:bg-white/10 transition-colors">
                  <Mail className="w-8 h-8 mx-auto mb-3 text-bugambilia-200 dark:text-bugambilia-300" />
                  <p className="font-semibold mb-1">Email</p>
                  <p className="text-sm text-bugambilia-200 dark:text-bugambilia-300">info@hotelbugambilias.com.ni</p>
                </div>
                <div className="bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/15 dark:hover:bg-white/10 transition-colors">
                  <MapPin className="w-8 h-8 mx-auto mb-3 text-bugambilia-200 dark:text-bugambilia-300" />
                  <p className="font-semibold mb-1">Ubicación</p>
                  <p className="text-sm text-bugambilia-200 dark:text-bugambilia-300">Centro de Estelí, Nicaragua</p>
                </div>
                <div className="bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/15 dark:hover:bg-white/10 transition-colors">
                  <Clock className="w-8 h-8 mx-auto mb-3 text-bugambilia-200 dark:text-bugambilia-300" />
                  <p className="font-semibold mb-1">Atención</p>
                  <p className="text-sm text-bugambilia-200 dark:text-bugambilia-300">24 horas al día</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-bugambilia-600 hover:bg-bugambilia-700 dark:bg-bugambilia-500 dark:hover:bg-bugambilia-600 text-white hover:scale-105 transition-all duration-300 px-8 py-4 text-lg"
                  asChild
                >
                  <Link href="#contacto-form">🌺 Enviar mensaje</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-bugambilia-700 dark:hover:bg-bugambilia-100 dark:hover:text-bugambilia-900 px-8 py-4 text-lg bg-transparent backdrop-blur-sm"
                  asChild
                >
                  <Link href="/habitaciones">Ver habitaciones</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
