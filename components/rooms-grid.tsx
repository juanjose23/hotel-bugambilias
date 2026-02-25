import { Button } from "@/components/ui/button";
import { Waves, UtensilsCrossed, Car, Wifi } from "lucide-react";
import RoomCard from "@/components/room-card";

const rooms = [
  {
    id: 1,
    name: "Habitación Doble Estándar",
    type: "Habitación Boutique",
    guests: "2 huéspedes",
    beds: "1 cama matrimonial",
    price: 350,
    rating: 4.9,
    image: "/images/main-room.jpg",
    popular: true,
  },
  {
    id: 2,
    name: "Habitación Doble Deluxe",
    type: "Habitación Premium",
    guests: "2 huéspedes",
    beds: "1 cama king size",
    price: 390,
    rating: 4.8,
    image: "/images/group-room.jpg",
    popular: false,
  },
  {
    id: 4,
    name: "Junior Suite Familiar",
    type: "Suite completa",
    guests: "4 huéspedes",
    beds: "1 king + sofá cama",
    price: 590,
    rating: 4.8,
    image: "/images/room-detail.jpg",
    popular: false,
  },
  {
    id: 6,
    name: "Master Suite Bugambilias",
    type: "Lujo Executive",
    guests: "6 huéspedes",
    beds: "2 recámaras completas",
    price: 890,
    rating: 5.0,
    image: "/images/terrace.jpg",
    popular: true,
  },
];

export default function RoomsGrid() {
  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl font-black text-gray-900 dark:text-white tracking-tighter mb-2 underline decoration-bugambilia-600 decoration-4 underline-offset-8">
              Nuestras Habitaciones
            </h2>
            <p className="text-gray-500 dark:text-gray-400 font-medium">
              Seleccionadas cuidadosamente para tu confort.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <Button
              variant="outline"
              className="rounded-xl border-gray-200 dark:border-gray-800 text-xs font-bold uppercase tracking-widest px-6 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-airbnb shadow-sm"
            >
              Filtrar por Precio
            </Button>
            <Button
              variant="outline"
              className="rounded-xl border-gray-200 dark:border-gray-800 text-xs font-bold uppercase tracking-widest px-6 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-airbnb shadow-sm"
            >
              Tipo de Estancia
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12 mb-20">
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>

        {/* Services Section - Rediseñado para estilo Boutique */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-20 border-t border-gray-100 dark:border-gray-900">
          {[
            {
              icon: Waves,
              title: "Piscina Relax",
              desc: "Climatizada y con vistas al jardín",
            },
            {
              icon: UtensilsCrossed,
              title: "Gastronomía",
              desc: "Platos locales con toque gourmet",
            },
            {
              icon: Car,
              title: "Seguridad",
              desc: "Parking vigilado 24/7 de cortesía",
            },
            {
              icon: Wifi,
              title: "Hi-Speed Wi-Fi",
              desc: "Fibra óptica en cada rincón",
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="group flex flex-col items-center text-center p-8 bg-gray-50 dark:bg-gray-900/50 rounded-3xl transition-airbnb hover:bg-white dark:hover:bg-gray-900 hover:shadow-airbnb border border-transparent hover:border-gray-100 dark:hover:border-gray-800"
            >
              <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-bugambilia-600 transition-airbnb">
                <service.icon className="w-7 h-7 text-bugambilia-600 group-hover:text-white transition-airbnb" />
              </div>
              <h3 className="font-black text-gray-900 dark:text-white mb-2 uppercase tracking-widest text-xs">
                {service.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium px-4">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
