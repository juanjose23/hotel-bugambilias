import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Navigation, Car } from "lucide-react"

export default function ContactMap() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-bugambilia-100 dark:bg-bugambilia-900/30 text-bugambilia-700 dark:text-bugambilia-300 border-bugambilia-200 dark:border-bugambilia-700">
            🗺️ Ubicación
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Encuéntranos en Estelí</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ubicados estratégicamente en el centro de Estelí, con fácil acceso a los principales atractivos de la
            ciudad.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map placeholder */}
          <div className="lg:col-span-2">
            <Card className="border-gray-200 dark:border-gray-700 overflow-hidden bg-white dark:bg-gray-900">
              <div className="relative h-96 bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-bugambilia-600 dark:text-bugambilia-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Hotel Bugambilias</h3>
                  <p className="text-gray-600 dark:text-gray-300">Centro de Estelí, Nicaragua</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    Mapa interactivo disponible próximamente
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Location info */}
          <div className="space-y-6">
            <Card className="border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-bugambilia-100 dark:bg-bugambilia-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-bugambilia-600 dark:text-bugambilia-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Dirección</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-1">Centro de Estelí</p>
                    <p className="text-gray-600 dark:text-gray-300">Estelí, Nicaragua</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-bugambilia-100 dark:bg-bugambilia-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <Navigation className="w-6 h-6 text-bugambilia-600 dark:text-bugambilia-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Cómo llegar</h3>
                    <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                      <li>• 5 min del centro histórico</li>
                      <li>• 10 min de la terminal de buses</li>
                      <li>• 45 min del aeropuerto de Managua</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-bugambilia-100 dark:bg-bugambilia-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <Car className="w-6 h-6 text-bugambilia-600 dark:text-bugambilia-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Estacionamiento</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Estacionamiento gratuito disponible para todos nuestros huéspedes.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
