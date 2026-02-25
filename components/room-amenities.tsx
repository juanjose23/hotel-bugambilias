import { Card, CardContent } from "@/components/ui/card"
import { Wifi, Car, Coffee, Tv, Wind, Shield, Clock, UtensilsCrossed } from "lucide-react"

const amenities = [
  {
    icon: Wifi,
    name: "Wi-Fi Gratuito",
    description: "Internet de alta velocidad en todas las áreas",
  },
  {
    icon: Car,
    name: "Estacionamiento",
    description: "Espacio seguro y gratuito para tu vehículo",
  },
  {
    icon: Coffee,
    name: "Cafetera",
    description: "Café nicaragüense fresco en tu habitación",
  },
  {
    icon: Tv,
    name: "TV Cable",
    description: "Canales nacionales e internacionales",
  },
  {
    icon: Wind,
    name: "Aire Acondicionado",
    description: "Clima perfecto durante todo el año",
  },
  {
    icon: Shield,
    name: "Caja Fuerte",
    description: "Protege tus objetos de valor",
  },
  {
    icon: Clock,
    name: "Servicio 24h",
    description: "Recepción disponible las 24 horas",
  },
  {
    icon: UtensilsCrossed,
    name: "Servicio a la Habitación",
    description: "Comida y bebidas cuando lo necesites",
  },
]

export default function RoomAmenities() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Amenidades Incluidas
            <span className="block text-lg text-bugambilia-600 dark:text-bugambilia-400 mt-2">
              🌺 Todo lo que necesitas para una estancia perfecta
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Cada habitación incluye una selección cuidadosa de amenidades para garantizar tu comodidad y satisfacción.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-all duration-300 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 petal-shadow hover:scale-105 bugambilia-bloom"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-bugambilia-100 dark:bg-bugambilia-900/30 rounded-full flex items-center justify-center mx-auto mb-4 petal-shadow">
                  <amenity.icon className="w-6 h-6 text-bugambilia-600 dark:text-bugambilia-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{amenity.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{amenity.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
