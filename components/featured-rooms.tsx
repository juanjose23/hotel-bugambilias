import Link from "next/link"
import RoomCard from "@/components/room-card"

const featuredRooms = [
  {
    id: 1,
    name: "Habitación Doble Estándar",
    location: "Estelí, Nicaragua",
    price: 350,
    rating: 4.92,
    image: "/images/main-room.jpg",
    type: "Habitación Boutique",
    beds: "1 cama matrimonial",
    popular: true,
  },
  {
    id: 2,
    name: "Habitación Doble Deluxe",
    location: "Estelí, Nicaragua",
    price: 390,
    rating: 4.85,
    image: "/images/group-room.jpg",
    type: "Habitación Premium",
    beds: "1 cama king size",
    popular: false,
  },
  {
    id: 4,
    name: "Junior Suite Familiar",
    location: "Estelí, Nicaragua",
    price: 590,
    rating: 4.98,
    image: "/images/room-detail.jpg",
    type: "Suite completa",
    beds: "1 king + sofá cama",
    popular: false,
  },
]

export default function FeaturedRooms() {
  return (
    <section className="py-24 bg-white dark:bg-gray-950 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tighter mb-4">
              Estancias que <span className="text-bugambilia-gradient bg-clip-text text-transparent">inspiran</span>
            </h2>
            <p className="text-xl text-gray-500 dark:text-gray-400 font-medium">
              Explora una selección de nuestras habitaciones más exclusivas en el corazón de Nicaragua.
            </p>
          </div>
          <Link
            href="/habitaciones"
            className="group flex items-center gap-2 text-black dark:text-white font-black uppercase tracking-widest text-xs hover:text-bugambilia-600 transition-airbnb pb-1 border-b-2 border-black dark:border-white hover:border-bugambilia-600"
          >
            Explorar todas
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {featuredRooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </div>
    </section>
  )
}


