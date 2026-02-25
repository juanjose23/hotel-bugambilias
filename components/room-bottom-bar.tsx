"use client"

import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import { useRouter } from "next/navigation"

interface Room {
  id: number
  name: string
  price: number
  originalPrice: number
  guests: number
  rating?: number
  reviews?: number
}

interface RoomBottomBarProps {
  room: Room
}

export default function RoomBottomBar({ room }: RoomBottomBarProps) {
  const router = useRouter()

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden px-4 pb-6 pt-4 bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl border-t border-gray-100 dark:border-gray-900 safe-area-bottom">
      <div className="max-w-md mx-auto flex items-center justify-between gap-6">
        <div>
          <div className="flex items-baseline gap-1.5 overflow-hidden">
            <span className="text-xl font-black text-black dark:text-white tracking-tight">${room.price}</span>
            <span className="text-xs font-medium text-gray-500 underline underline-offset-4 decoration-gray-300">noche</span>
          </div>
          <div className="flex items-center gap-1 mt-0.5">
            <Star className="w-2.5 h-2.5 fill-bugambilia-600 text-bugambilia-600" />
            <span className="text-[10px] font-black text-black dark:text-white uppercase tracking-tighter">4.92 • 127 reseñas</span>
          </div>
        </div>

        <Button
          className="flex-1 bg-bugambilia-gradient hover:scale-[1.02] active:scale-[0.98] text-white font-black uppercase tracking-widest text-[11px] py-6 h-auto rounded-2xl shadow-airbnb transition-airbnb border-none"
          onClick={() => router.push("/pago")}
        >
          Reservar ahora
        </Button>
      </div>
    </div>
  )
}

