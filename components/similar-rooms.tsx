import { Star, Users, Bed, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const allRooms = [
  {
    id: 1,
    name: "Habitación Doble Estándar",
    price: 350,
    originalPrice: 389,
    guests: 2,
    beds: "1 cama doble",
    image: "/images/main-room.jpg",
    rating: 4.8,
    reviews: 89,
  },
  {
    id: 2,
    name: "Habitación Doble Deluxe",
    price: 390,
    originalPrice: 433,
    guests: 2,
    beds: "1 cama king",
    image: "/images/group-room.jpg",
    rating: 4.9,
    reviews: 127,
  },
  {
    id: 4,
    name: "Junior Suite",
    price: 590,
    originalPrice: 656,
    guests: 4,
    beds: "1 king + sofá",
    image: "/images/room-detail.jpg",
    rating: 4.9,
    reviews: 156,
  },
  {
    id: 6,
    name: "Master Suite",
    price: 890,
    originalPrice: 989,
    guests: 6,
    beds: "2 recámaras",
    image: "/images/terrace.jpg",
    rating: 5.0,
    reviews: 78,
  },
]

interface SimilarRoomsProps {
  currentRoomId: number
}

export default function SimilarRooms({ currentRoomId }: SimilarRoomsProps) {
  const similarRooms = allRooms.filter((room) => room.id !== currentRoomId).slice(0, 3)

  return (
    <section className="py-24 bg-gray-50/50 dark:bg-gray-900/30 border-t border-gray-100 dark:border-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-bugambilia-600 mb-3">Continuar Explorando</h2>
            <h3 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white tracking-tighter">Otras estancias boutique</h3>
          </div>
          <Link href="/habitaciones" className="hidden sm:flex items-center gap-2 group text-xs font-black uppercase tracking-widest text-gray-400 hover:text-black dark:hover:text-white transition-airbnb">
            Ver catálogo completo
            <ArrowRight className="w-4 h-4 transition-airbnb group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {similarRooms.map((room) => (
            <Link key={room.id} href={`/habitaciones/${room.id}`} className="group block">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-5 bg-gray-100 dark:bg-gray-800 shadow-airbnb group-hover:shadow-airbnb-hover transition-airbnb">
                <Image
                  src={room.image || "/placeholder.svg"}
                  alt={room.name}
                  fill
                  className="object-cover transition-airbnb group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/40 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                  <Star className="w-3 h-3 fill-bugambilia-600 text-bugambilia-600" />
                  <span className="text-[11px] font-black text-black dark:text-white">{room.rating}</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-start mb-1">
                  <h4 className="text-lg font-black text-gray-900 dark:text-white tracking-tight group-hover:text-bugambilia-600 transition-airbnb">{room.name}</h4>
                </div>
                <div className="flex items-center gap-3 text-xs font-medium text-gray-500 mb-3">
                  <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {room.guests} pers</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><Bed className="w-3 h-3" /> {room.beds}</span>
                </div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-lg font-black text-black dark:text-white">${room.price}</span>
                  <span className="text-xs font-medium text-gray-400">noche</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="sm:hidden mt-10">
          <Button variant="outline" className="w-full rounded-2xl border-gray-200 py-6 font-black uppercase tracking-widest text-[10px]" asChild>
            <Link href="/habitaciones">Ver todas las habitaciones</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

