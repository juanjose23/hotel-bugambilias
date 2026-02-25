import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Bed, Wifi, Car, Coffee, Tv } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const rooms = [
  {
    id: 1,
    name: "Habitación Doble Estándar",
    description:
      "Cómoda habitación con amenidades esenciales para una estancia perfecta.",
    price: 350,
    originalPrice: 389,
    guests: 2,
    beds: "1 cama doble",
    size: "25 m²",
    image: "/images/main-room.jpg",
    amenities: [
      { icon: Wifi, name: "Wi-Fi gratuito" },
      { icon: Tv, name: "TV cable" },
      { icon: Coffee, name: "Café de cortesía" },
      { icon: Car, name: "Estacionamiento" },
    ],
    features: [
      "Aire acondicionado",
      "Baño privado",
      "Escritorio",
      "Caja fuerte",
    ],
    popular: true,
    available: true,
  },
  {
    id: 2,
    name: "Habitación Doble Deluxe",
    description:
      "Habitación espaciosa con vista a la ciudad y amenidades premium.",
    price: 390,
    originalPrice: 433,
    guests: 2,
    beds: "1 cama king size",
    size: "30 m²",
    image: "/images/group-room.jpg",
    amenities: [
      { icon: Wifi, name: "Wi-Fi premium" },
      { icon: Tv, name: "Smart TV" },
      { icon: Coffee, name: "Cafetera" },
      { icon: Car, name: "Estacionamiento" },
    ],
    features: [
      "Minibar",
      "Balcón privado",
      "Ducha de lluvia",
      "Armario walk-in",
    ],
    popular: false,
    available: true,
  },
  {
    id: 4,
    name: "Junior Suite",
    description:
      "Suite con sala de estar y cocineta equipada para estancias prolongadas.",
    price: 590,
    originalPrice: 656,
    guests: 4,
    beds: "1 cama king + sofá cama",
    size: "45 m²",
    image: "/images/room-detail.jpg",
    amenities: [
      { icon: Wifi, name: "Wi-Fi premium" },
      { icon: Tv, name: "2 Smart TV" },
      { icon: Coffee, name: "Cafetera" },
      { icon: Car, name: "Valet parking" },
    ],
    features: ["Cocineta equipada", "Sala de estar", "Balcón", "Baño premium"],
    popular: false,
    available: true,
  },
  {
    id: 6,
    name: "Master Suite",
    description:
      "La experiencia más lujosa con dos recámaras y amenidades exclusivas.",
    price: 890,
    originalPrice: 989,
    guests: 6,
    beds: "2 recámaras completas",
    size: "75 m²",
    image: "/images/terrace.jpg",
    amenities: [
      { icon: Wifi, name: "Wi-Fi premium" },
      { icon: Tv, name: "3 Smart TV" },
      { icon: Coffee, name: "Bar de té" },
      { icon: Car, name: "Valet parking" },
    ],
    features: [
      "Terraza privada",
      "Servicio de mayordomo",
      "Cocina gourmet",
      "Jacuzzi",
    ],
    popular: false,
    available: true,
  },
];

export default function RoomsGridFull() {
  return (
    <section id="habitaciones" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Todas Nuestras Habitaciones
            <span className="block text-xl text-bugambilia-600 dark:text-bugambilia-400 mt-3">
              🌺 Encuentra la perfecta para ti
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Desde habitaciones económicas hasta suites de lujo, tenemos la
            opción perfecta para cada tipo de viajero que visita Estelí.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <Card
              key={room.id}
              className={`group overflow-hidden transition-all duration-300 bg-white dark:bg-gray-900 petal-shadow hover:scale-105 bugambilia-bloom ${
                room.available
                  ? "hover:shadow-xl cursor-pointer"
                  : "opacity-75 cursor-not-allowed"
              }`}
            >
              <div className="relative h-64">
                <Image
                  src={room.image || "/placeholder.svg"}
                  alt={room.name}
                  fill
                  className={`object-cover transition-transform duration-300 ${
                    room.available ? "group-hover:scale-110" : "grayscale"
                  }`}
                />

                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {room.popular && (
                    <Badge className="bugambilia-primary petal-shadow">
                      🌺 Más popular
                    </Badge>
                  )}
                  {!room.available && (
                    <Badge
                      variant="destructive"
                      className="bg-red-600 text-white"
                    >
                      No disponible
                    </Badge>
                  )}
                </div>

                {/* Price */}
                <div className="absolute top-4 right-4 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-lg px-3 py-2 petal-shadow">
                  <div className="text-right">
                    <div className="text-lg font-bold text-bugambilia-700 dark:text-bugambilia-400">
                      ${room.price}
                    </div>
                    {room.originalPrice > room.price && (
                      <div className="text-xs text-gray-500 line-through">
                        ${room.originalPrice}
                      </div>
                    )}
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      USD/noche
                    </div>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {room.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {room.description}
                  </p>
                </div>

                {/* Room specs */}
                <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-4 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{room.guests}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bed className="w-4 h-4" />
                    <span>{room.beds}</span>
                  </div>
                  <div className="text-xs font-medium">{room.size}</div>
                </div>

                {/* Amenities */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {room.amenities.map((amenity, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400"
                    >
                      <amenity.icon className="w-3 h-3 text-bugambilia-600 dark:text-bugambilia-400" />
                      <span>{amenity.name}</span>
                    </div>
                  ))}
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-1 mb-6">
                  {room.features.slice(0, 3).map((feature, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="text-xs bg-bugambilia-50 dark:bg-bugambilia-900/20 text-bugambilia-700 dark:text-bugambilia-300 border-bugambilia-200 dark:border-bugambilia-700"
                    >
                      {feature}
                    </Badge>
                  ))}
                  {room.features.length > 3 && (
                    <Badge
                      variant="outline"
                      className="text-xs text-gray-500 dark:text-gray-400"
                    >
                      +{room.features.length - 3} más
                    </Badge>
                  )}
                </div>

                {/* Action button */}
                <Button
                  className={`w-full transition-all duration-300 ${
                    room.available
                      ? "bugambilia-primary petal-shadow hover:scale-105"
                      : "bg-gray-400 cursor-not-allowed"
                  }`}
                  disabled={!room.available}
                  asChild={room.available}
                >
                  {room.available ? (
                    <Link href={`/habitaciones/${room.id}`}>
                      🌺 Ver detalles y reservar
                    </Link>
                  ) : (
                    <span>No disponible</span>
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 petal-shadow max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              ¿No encuentras lo que buscas?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Contáctanos directamente y te ayudaremos a encontrar la habitación
              perfecta para tu estancia en Estelí.
            </p>
            <Button
              size="lg"
              className="bugambilia-primary petal-shadow hover:scale-105 transition-all duration-300"
              asChild
            >
              <Link href="/contacto">🌺 Contactar ahora</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
