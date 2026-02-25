import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function RoomsHero() {
  return (
    <section className="relative">
      {/* Hero Image */}
      <div className="relative h-[60vh] min-h-[400px]">
        <Image
          src="/images/pool-front-view.jpg"
          alt="Habitaciones Hotel Bugambilias - Estelí, Nicaragua"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-bugambilia-900/70 via-bugambilia-800/50 to-transparent dark:from-black/80 dark:via-bugambilia-900/60 dark:to-bugambilia-800/40" />

        {/* Pattern overlay */}
        <div className="absolute inset-0 bugambilia-pattern opacity-20" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl text-white">
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-primary text-primary-foreground border-0">🌺 Habitaciones disponibles</Badge>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-4 bugambilia-bloom">
                Nuestras Habitaciones
                <span className="block text-xl md:text-2xl mt-2 text-white/90">
                  🏨 Comodidad y elegancia en Estelí
                </span>
              </h1>

              <p className="text-lg md:text-xl mb-6 text-white/80">
                Descubre nuestras habitaciones diseñadas para brindarte el máximo confort durante tu estancia en
                Nicaragua
              </p>

              <div className="flex items-center gap-2 mb-8 text-white/90">
                <MapPin className="w-5 h-5" />
                <span>Estelí, Nicaragua - En el corazón de la ciudad</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="petal-shadow hover:scale-105 transition-all duration-300 px-8 py-3"
                  asChild
                >
                  <Link href="#habitaciones">🌺 Ver habitaciones</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-primary dark:hover:bg-primary/20 dark:hover:text-white px-8 py-3 bg-transparent backdrop-blur-sm"
                  asChild
                >
                  <Link href="/contacto">Consultar disponibilidad</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
