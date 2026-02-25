import { Check, Clock, X, Wifi, Car, Coffee, Tv, Wind, Shield, Info, CalendarCheck } from "lucide-react"

interface RoomAmenitiesDetailProps {
  amenities: string[]
  included: string[]
  policies: {
    checkIn: string
    checkOut: string
    cancellation: string
    smoking: string
    pets: string
  }
}

const getAmenityIcon = (amenity: string) => {
  const low = amenity.toLowerCase();
  if (low.includes("wifi")) return <Wifi className="w-5 h-5 text-black dark:text-white" />
  if (low.includes("tv")) return <Tv className="w-5 h-5 text-black dark:text-white" />
  if (low.includes("aire")) return <Wind className="w-5 h-5 text-black dark:text-white" />
  if (low.includes("cafe")) return <Coffee className="w-5 h-5 text-black dark:text-white" />
  if (low.includes("estacion")) return <Car className="w-5 h-5 text-black dark:text-white" />
  if (low.includes("caja")) return <Shield className="w-5 h-5 text-black dark:text-white" />
  return <Check className="w-5 h-5 text-bugambilia-600" />
}

export default function RoomAmenitiesDetail({ amenities, included, policies }: RoomAmenitiesDetailProps) {
  return (
    <div className="bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Amenities Section */}
            <div>
              <h2 className="text-2xl font-black text-gray-900 dark:text-white tracking-tighter mb-10 uppercase tracking-widest text-xs border-b border-gray-100 dark:border-gray-900 pb-4">
                Amenidades Sugeridas
              </h2>
              <div className="space-y-6">
                {amenities.map((amenity, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 group"
                  >
                    <div className="flex-shrink-0 transition-airbnb group-hover:scale-110">
                      {getAmenityIcon(amenity)}
                    </div>
                    <span className="text-[15px] font-medium text-gray-600 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white transition-airbnb">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Included Services */}
            <div>
              <h2 className="text-2xl font-black text-gray-900 dark:text-white tracking-tighter mb-10 uppercase tracking-widest text-xs border-b border-gray-100 dark:border-gray-900 pb-4">
                Servicios a tu Disposición
              </h2>
              <div className="space-y-6">
                {included.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-5 h-5 flex items-center justify-center bg-gray-50 dark:bg-gray-900 rounded-full group-hover:bg-bugambilia-600 transition-airbnb">
                      <Check className="w-3 h-3 text-gray-400 group-hover:text-white transition-airbnb" />
                    </div>
                    <span className="text-[15px] font-medium text-gray-600 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white transition-airbnb">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Policies Section - Minimalist Cards */}
          <div className="mt-20 pt-16 border-t border-gray-100 dark:border-gray-900">
            <h2 className="text-2xl font-black text-gray-900 dark:text-white tracking-tighter mb-10">Reglas de la Casa</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="p-8 rounded-3xl bg-gray-50 dark:bg-gray-900/50 border border-transparent hover:border-gray-100 dark:hover:border-gray-800 transition-airbnb">
                <Clock className="w-6 h-6 text-black dark:text-white mb-4" />
                <h3 className="font-black text-[10px] uppercase tracking-widest text-gray-400 mb-1">Check-in</h3>
                <p className="text-lg font-bold text-gray-900 dark:text-white">{policies.checkIn}</p>
              </div>

              <div className="p-8 rounded-3xl bg-gray-50 dark:bg-gray-900/50 border border-transparent hover:border-gray-100 dark:hover:border-gray-800 transition-airbnb">
                <Clock className="w-6 h-6 text-black dark:text-white mb-4" />
                <h3 className="font-black text-[10px] uppercase tracking-widest text-gray-400 mb-1">Check-out</h3>
                <p className="text-lg font-bold text-gray-900 dark:text-white">{policies.checkOut}</p>
              </div>

              <div className="p-8 rounded-3xl bg-gray-50 dark:bg-gray-900/50 border border-transparent hover:border-gray-100 dark:hover:border-gray-800 transition-airbnb">
                <CalendarCheck className="w-6 h-6 text-black dark:text-white mb-4" />
                <h3 className="font-black text-[10px] uppercase tracking-widest text-gray-400 mb-1">Cancelación</h3>
                <p className="text-sm font-bold text-gray-900 dark:text-white line-clamp-2" title={policies.cancellation}>{policies.cancellation}</p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 px-6 py-4 rounded-2xl border border-gray-100 dark:border-gray-900">
                <Info className="w-5 h-5 text-bugambilia-600" />
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  <span className="font-bold text-black dark:text-white">Importante:</span> {policies.smoking} • {policies.pets}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

