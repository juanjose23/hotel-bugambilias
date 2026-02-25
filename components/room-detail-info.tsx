import { Badge } from "@/components/ui/badge"
import { MapPin, Eye, Maximize, Award, Shield, Wifi, Sparkles, Key, Navigation2, Star } from "lucide-react"

interface Room {
  name: string
  longDescription: string
  view: string
  floor: string
  size: string
}

interface RoomDetailInfoProps {
  room: Room
}

export default function RoomDetailInfo({ room }: RoomDetailInfoProps) {
  return (
    <div className="bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="max-w-4xl">
          {/* Host Info Section */}
          <div className="flex items-center justify-between pb-10 mb-10 border-b border-gray-100 dark:border-gray-900">
            <div className="flex items-center gap-5">
              <div className="relative group">
                <div className="w-16 h-16 bg-gradient-to-tr from-bugambilia-600 to-bugambilia-400 rounded-2xl flex items-center justify-center shadow-lg transition-airbnb group-hover:rotate-6">
                  <span className="text-white font-black text-xl">HB</span>
                </div>
                <div className="absolute -bottom-1 -right-1 bg-white dark:bg-gray-900 p-1 rounded-full shadow-sm">
                  <Shield className="w-4 h-4 text-bugambilia-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-black text-gray-900 dark:text-white tracking-tight">Anfitrión: Hotel Bugambilias</h3>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 flex items-center gap-2">
                  <span>Legendario</span>
                  <span>•</span>
                  <span>Anfitrión hace 39 años</span>
                </p>
              </div>
            </div>

            <div className="hidden sm:flex flex-col items-end">
              <div className="flex items-center gap-1 mb-1">
                <Star className="w-4 h-4 fill-black dark:fill-white" />
                <span className="text-sm font-black">4.92</span>
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Puntuación Host</span>
            </div>
          </div>

          {/* Key Highlights Section */}
          <div className="space-y-10 mb-12">
            <div className="flex items-start gap-6 group">
              <div className="mt-1 flex-shrink-0">
                <Navigation2 className="w-8 h-8 text-black dark:text-white transition-airbnb group-hover:scale-110" />
              </div>
              <div className="flex-grow">
                <h4 className="text-lg font-black text-gray-900 dark:text-white tracking-tight mb-1">Ubicación Estratégica</h4>
                <p className="text-gray-500 dark:text-gray-400 font-medium leading-relaxed">
                  Situada en el {room.floor}, ofrece el equilibrio perfecto entre accesibilidad y paz absoluta.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="mt-1 flex-shrink-0">
                <Key className="w-8 h-8 text-black dark:text-white transition-airbnb group-hover:scale-110" />
              </div>
              <div className="flex-grow">
                <h4 className="text-lg font-black text-gray-900 dark:text-white tracking-tight mb-1">Check-in Autónomo</h4>
                <p className="text-gray-500 dark:text-gray-400 font-medium leading-relaxed">
                  Llega a la hora que prefieras con nuestro sistema de entrada digital boutique.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="mt-1 flex-shrink-0">
                <Sparkles className="w-8 h-8 text-black dark:text-white transition-airbnb group-hover:scale-110" />
              </div>
              <div className="flex-grow">
                <h4 className="text-lg font-black text-gray-900 dark:text-white tracking-tight mb-1">Vistas de Estelí</h4>
                <p className="text-gray-500 dark:text-gray-400 font-medium leading-relaxed">
                  {room.view}. Disfruta de atardeceres únicos desde la comodidad de tu estancia.
                </p>
              </div>
            </div>
          </div>

          {/* Description Section */}
          <div className="pb-12 mb-12 border-b border-gray-100 dark:border-gray-900">
            <div className="bg-gray-50 dark:bg-gray-900/50 p-8 rounded-3xl border border-gray-100 dark:border-gray-800">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-serif italic">
                "{room.longDescription}"
              </p>
            </div>
          </div>

          {/* Extra Perks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl border border-gray-100 dark:border-gray-800 flex items-center gap-4 transition-airbnb hover:border-black dark:hover:border-white">
              <Wifi className="w-6 h-6 text-bugambilia-600" />
              <span className="text-sm font-bold text-gray-700 dark:text-gray-300">Conexión de Fibra Óptica</span>
            </div>
            <div className="p-6 rounded-2xl border border-gray-100 dark:border-gray-800 flex items-center gap-4 transition-airbnb hover:border-black dark:hover:border-white">
              <Shield className="w-6 h-6 text-bugambilia-600" />
              <span className="text-sm font-bold text-gray-700 dark:text-gray-300">Garantía de Privacidad Total</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

