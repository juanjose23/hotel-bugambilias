import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Share, Heart, Users, Bed, Maximize, Star, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface Room {
  id: number
  name: string
  type: string
  description: string
  price: number
  originalPrice: number
  guests: number
  beds: string
  size: string
  view: string
  images: string[]
}

interface RoomDetailHeroProps {
  room: Room
}

export default function RoomDetailHero({ room }: RoomDetailHeroProps) {
  const discount = Math.round(((room.originalPrice - room.price) / room.originalPrice) * 100)

  return (
    <section className="bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            <Link href="/" className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-black dark:hover:text-white transition-airbnb">Inicio</Link>
            <span className="text-gray-300">/</span>
            <Link href="/habitaciones" className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-black dark:hover:text-white transition-airbnb">Habitaciones</Link>
            <span className="text-gray-300">/</span>
            <span className="text-xs font-bold uppercase tracking-widest text-primary truncate">{room.name}</span>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="rounded-xl font-bold text-xs uppercase tracking-widest gap-2 bg-gray-50 dark:bg-gray-900 transition-airbnb hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black">
              <Share className="w-4 h-4" />
              <span className="hidden sm:inline">Compartir</span>
            </Button>
            <Button variant="ghost" size="sm" className="rounded-xl font-bold text-xs uppercase tracking-widest gap-2 bg-gray-50 dark:bg-gray-900 transition-airbnb hover:bg-primary hover:text-primary-foreground">
              <Heart className="w-4 h-4" />
              <span className="hidden sm:inline">Guardar</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Hero Image Gallery - Estilo Airbnb Premium */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="relative group grid grid-cols-4 grid-rows-2 gap-2 md:gap-3 h-[400px] md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-airbnb">
          {/* Main Large Image */}
          <div className="col-span-4 lg:col-span-2 row-span-2 relative overflow-hidden">
            <Image
              src={room.images[0] || "/placeholder.svg"}
              alt={room.name}
              fill
              className="object-cover transition-airbnb hover:scale-105"
              priority
            />
          </div>

          {/* Secondary Images - Visible on LG screens */}
          {room.images.slice(1, 5).map((image, idx) => (
            <div key={idx} className="hidden lg:block relative overflow-hidden">
              <Image
                src={image || "/placeholder.svg"}
                alt={`${room.name} view ${idx + 2} `}
                fill
                className="object-cover transition-airbnb hover:scale-110"
              />
            </div>
          ))}

          {/* See All Photos Button */}
          <button className="absolute bottom-6 right-6 bg-white dark:bg-gray-900 border border-black/10 dark:border-white/10 px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-widest shadow-airbnb transition-airbnb hover:scale-105 active:scale-95 flex items-center gap-2 z-10">
            <Maximize className="w-4 h-4" />
            Ver todas las fotos
          </button>
        </div>
      </div>

      {/* Title & Basic Info Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-10 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-primary/20">
              {room.type}
            </span>
            {discount > 0 && (
              <span className="bg-emerald-50 dark:bg-emerald-900/40 text-emerald-600 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-100 dark:border-emerald-800">
                OFERTA -{discount}%
              </span>
            )}
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white tracking-tighter mb-4 leading-tight">
            {room.name}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-1.5 text-black dark:text-white">
              <Star className="w-4 h-4 fill-primary text-primary" />
              <span className="font-black">4.92</span>
              <span>•</span>
              <span className="underline decoration-2 underline-offset-4 cursor-pointer hover:text-primary transition-airbnb">127 reseñas</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              <span className="underline decoration-2 underline-offset-4 cursor-pointer hover:text-primary transition-airbnb">Estelí, Nicaragua</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
