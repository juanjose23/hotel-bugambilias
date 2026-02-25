import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, Award, Leaf } from "lucide-react"
import Image from "next/image"

export default function AboutStory() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <Badge className="mb-4 bg-bugambilia-100 dark:bg-bugambilia-900/30 text-bugambilia-700 dark:text-bugambilia-300 border-bugambilia-200 dark:border-bugambilia-700">
                🌺 Nuestra Historia
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Más de 35 años de
                <span className="block text-bugambilia-600 dark:text-bugambilia-400">hospitalidad nicaragüense</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                Fundado en 1985 por la familia Martínez, Hotel Bugambilias nació del sueño de crear un espacio donde los
                visitantes pudieran experimentar la calidez y belleza de Nicaragua. Ubicado en el corazón de Estelí,
                nuestro hotel ha sido testigo del crecimiento y desarrollo de esta hermosa región.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                A lo largo de los años, hemos mantenido nuestro compromiso con la excelencia en el servicio, combinando
                la tradición nicaragüense con las comodidades modernas que nuestros huéspedes esperan.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-bugambilia-100 dark:bg-bugambilia-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-6 h-6 text-bugambilia-600 dark:text-bugambilia-400" />
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">35+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Años de experiencia</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-bugambilia-100 dark:bg-bugambilia-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-bugambilia-600 dark:text-bugambilia-400" />
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">50K+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Huéspedes felices</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-bugambilia-100 dark:bg-bugambilia-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6 text-bugambilia-600 dark:text-bugambilia-400" />
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">15</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Premios recibidos</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-bugambilia-100 dark:bg-bugambilia-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Leaf className="w-6 h-6 text-bugambilia-600 dark:text-bugambilia-400" />
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">100%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Sostenible</div>
              </div>
            </div>
          </div>

          {/* Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <Card className="overflow-hidden border-0 shadow-lg">
                  <div className="relative h-48">
                    <Image
                      src="/images/pool-front-view.jpg"
                      alt="Piscina Hotel Bugambilias"
                      fill
                      className="object-cover"
                    />
                  </div>
                </Card>
                <Card className="overflow-hidden border-0 shadow-lg">
                  <div className="relative h-32">
                    <Image src="/images/service-pool.png" alt="Servicios del hotel" fill className="object-cover" />
                  </div>
                </Card>
              </div>
              <div className="space-y-4 mt-8">
                <Card className="overflow-hidden border-0 shadow-lg">
                  <div className="relative h-32">
                    <Image src="/images/main-room.jpg" alt="Habitación principal" fill className="object-cover" />
                  </div>
                </Card>
                <Card className="overflow-hidden border-0 shadow-lg">
                  <div className="relative h-48">
                    <Image src="/images/terrace.jpg" alt="Terraza del hotel" fill className="object-cover" />
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
