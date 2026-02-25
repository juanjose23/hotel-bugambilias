import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Users, Award, Leaf } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const highlights = [
  {
    icon: Heart,
    title: "Hospitalidad Nicaragüense",
    description: "Atención cálida y personalizada que caracteriza a nuestro país",
  },
  {
    icon: Users,
    title: "Experiencia Familiar",
    description: "Más de 35 años sirviendo a familias y viajeros de todo el mundo",
  },
  {
    icon: Award,
    title: "Calidad Reconocida",
    description: "Certificados de excelencia y reconocimientos turísticos",
  },
  {
    icon: Leaf,
    title: "Compromiso Ambiental",
    description: "Prácticas sostenibles y respeto por la naturaleza de Estelí",
  },
]

export default function AboutPreview() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Nuestra Historia
              <span className="block text-xl text-bugambilia-600 dark:text-bugambilia-400 mt-3">
                🌺 Más de 35 años floreciendo en Estelí
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Desde 1985, Hotel Bugambilias ha sido el hogar lejos del hogar para miles de visitantes que llegan a
              Estelí. Ubicados en el corazón de esta hermosa ciudad nicaragüense, hemos crecido junto con nuestra
              comunidad, manteniendo siempre el compromiso de brindar la mejor hospitalidad.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-bugambilia-100 dark:bg-bugambilia-900/30 rounded-full flex items-center justify-center flex-shrink-0 petal-shadow">
                    <highlight.icon className="w-5 h-5 text-bugambilia-600 dark:text-bugambilia-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{highlight.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{highlight.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              className="bugambilia-primary petal-shadow hover:scale-105 transition-all duration-300"
              asChild
            >
              <Link href="/acerca-de">🌺 Conoce más sobre nosotros</Link>
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative h-96 rounded-2xl overflow-hidden petal-shadow">
              <Image
                src="/images/hero-secondary.jpg"
                alt="Hotel Bugambilias - Historia y tradición en Estelí"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bugambilia-900/30 to-transparent" />
            </div>

            {/* Floating card */}
            <Card className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 petal-shadow">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-bugambilia-600 dark:text-bugambilia-400">35+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Años de experiencia</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
