import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Clock, Car, Utensils, Wifi, Shield } from "lucide-react"

export default function LocationSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Location Info */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ubicación y servicios</h2>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-rose-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Dirección</h3>
                  <p className="text-gray-600">
                    Av. Principal 123, Centro Histórico
                    <br />
                    Ciudad de México, CDMX 06000
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-rose-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Check-in / Check-out</h3>
                  <p className="text-gray-600">
                    Llegada: 3:00 PM
                    <br />
                    Salida: 12:00 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-rose-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Contacto</h3>
                  <p className="text-gray-600">
                    +52 55 1234 5678
                    <br />
                    info@hotelbugambilias.com
                  </p>
                </div>
              </div>
            </div>

            {/* Amenities Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Car, label: "Estacionamiento gratuito" },
                { icon: Wifi, label: "Wi-Fi de alta velocidad" },
                { icon: Utensils, label: "Restaurante y bar" },
                { icon: Shield, label: "Seguridad 24/7" },
              ].map((amenity, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <amenity.icon className="w-5 h-5 text-rose-600" />
                  <span className="text-sm font-medium text-gray-700">{amenity.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Map Placeholder */}
          <div>
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="w-full h-96 bg-gray-200 flex items-center justify-center relative">
                  <div className="text-center text-gray-500">
                    <MapPin className="w-12 h-12 mx-auto mb-2" />
                    <p className="font-medium">Mapa interactivo</p>
                    <p className="text-sm">Centro Histórico, CDMX</p>
                  </div>

                  {/* Overlay with directions button */}
                  <div className="absolute bottom-4 right-4">
                    <Button className="bg-white text-gray-900 border border-gray-300 hover:bg-gray-50">
                      Cómo llegar
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Nearby Places */}
            <div className="mt-6">
              <h3 className="font-semibold text-gray-900 mb-4">Lugares cercanos</h3>
              <div className="space-y-3">
                {[
                  { name: "Zócalo", distance: "5 min caminando", type: "Atracción turística" },
                  { name: "Catedral Metropolitana", distance: "7 min caminando", type: "Sitio histórico" },
                  { name: "Palacio de Bellas Artes", distance: "10 min caminando", type: "Museo" },
                  { name: "Aeropuerto CDMX", distance: "45 min en auto", type: "Transporte" },
                ].map((place, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0"
                  >
                    <div>
                      <p className="font-medium text-gray-900">{place.name}</p>
                      <p className="text-sm text-gray-600">{place.type}</p>
                    </div>
                    <span className="text-sm text-gray-600">{place.distance}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
