import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Wifi, Tv, Snowflake, Users, ChefHat, Bed } from "lucide-react"
import Image from "next/image"

const rooms = [
  {
    name: "Habitación Doble",
    price: "Desde $390/noche",
    description: "Perfecta para parejas o viajeros de negocios",
    amenities: ["Aire acondicionado", "TV", "Wi-Fi gratuito"],
    icons: [Snowflake, Tv, Wifi],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Junior Suite",
    price: "Consultar precio",
    description: "Ideal para familias o parejas que buscan más espacio",
    amenities: ["Cocineta equipada", "Comedor", "Sala de estar"],
    icons: [ChefHat, Users, Bed],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Master Suite",
    price: "Consultar precio",
    description: "La experiencia más lujosa para grupos o familias grandes",
    amenities: ["Dos recámaras completas", "Sala amplia", "Cocina completa"],
    icons: [Bed, Users, ChefHat],
    image: "/placeholder.svg?height=300&width=400",
  },
]

export default function RoomsSection() {
  return (
    <section id="habitaciones" className="py-16 bg-gradient-to-b from-primary/5 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Nuestras Habitaciones</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre el confort y la elegancia en cada una de nuestras habitaciones, diseñadas para brindarte la mejor
            experiencia de hospedaje.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-primary/20"
            >
              <div className="relative h-48">
                <Image src={room.image || "/placeholder.svg"} alt={room.name} fill className="object-cover" />
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">{room.price}</Badge>
              </div>

              <CardHeader>
                <CardTitle className="text-xl text-gray-800">{room.name}</CardTitle>
                <CardDescription className="text-gray-600">{room.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="space-y-3 mb-6">
                  {room.amenities.map((amenity, idx) => {
                    const IconComponent = room.icons[idx]
                    return (
                      <div key={idx} className="flex items-center gap-2 text-gray-700">
                        {IconComponent && <IconComponent className="w-4 h-4 text-primary" />}
                        <span className="text-sm">{amenity}</span>
                      </div>
                    )
                  })}
                </div>

                <Button className="w-full">Ver detalles</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
