import { Button } from "@/components/ui/button";
import {
  Star,
  MapPin,
  Wifi,
  Car,
  UtensilsCrossed,
  Calendar as CalendarIcon,
  Users,
  Search,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative">
      {/* Hero Image - Más alto y envolvente */}
      <div className="relative h-[90vh] min-h-[700px] overflow-hidden">
        <Image
          src="/images/hero-main.jpg"
          alt="Hotel Bugambilias - Vista exterior en Estelí, Nicaragua"
          fill
          className="object-cover scale-105 animate-slow-zoom"
          priority
        />
        {/* Overlay más sutil y elegante */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <div className="max-w-5xl animate-in fade-in slide-in-from-bottom-10 duration-1000 mb-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-white mb-6 animate-float">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-semibold tracking-wide">
                El #1 mejor valorado en Estelí
              </span>
            </div>

            <h1 className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-black text-white mb-6 drop-shadow-2xl tracking-tighter leading-[0.9] sm:leading-[0.85] xl:leading-[0.9]">
              <span className="block mb-2">Donde Estelí</span>
              <span className="text-bugambilia-gradient-light bg-clip-text text-transparent block mb-4">
                Florece
              </span>
              <span className="text-xl sm:text-3xl lg:text-4xl block opacity-90 font-medium tracking-normal leading-tight max-w-2xl mx-auto">
                Hospitalidad boutique integrada con la esencia vibrante de
                Nicaragua.
              </span>
            </h1>
          </div>

          {/* Airbnb-style Integrated Floating Booking Widget */}
          <div className="w-full max-w-5xl mx-auto px-4 translate-y-8">
            <div className="bg-white dark:bg-gray-900 rounded-3xl md:rounded-full shadow-airbnb p-2 flex flex-col md:flex-row items-center border border-white/20 dark:border-gray-800 transition-airbnb hover:shadow-airbnb-hover group">
              {/* Check-in */}
              <div className="w-full md:w-1/4 flex flex-col items-start px-8 py-3.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full cursor-pointer transition-airbnb group/item">
                <span className="text-[10px] uppercase font-bold text-gray-500 dark:text-gray-400 tracking-widest mb-0.5">
                  Llegada
                </span>
                <span className="text-sm font-bold text-gray-900 dark:text-white">
                  Añadir fecha
                </span>
              </div>

              <div className="hidden md:block w-px h-10 bg-gray-100 dark:bg-gray-800" />

              {/* Check-out */}
              <div className="w-full md:w-1/4 flex flex-col items-start px-8 py-3.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full cursor-pointer transition-airbnb group/item">
                <span className="text-[10px] uppercase font-bold text-gray-500 dark:text-gray-400 tracking-widest mb-0.5">
                  Salida
                </span>
                <span className="text-sm font-bold text-gray-900 dark:text-white">
                  Añadir fecha
                </span>
              </div>

              <div className="hidden md:block w-px h-10 bg-gray-100 dark:bg-gray-800" />

              {/* Guests */}
              <div className="w-full md:w-1/4 flex flex-col items-start px-8 py-3.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full cursor-pointer transition-airbnb group/item">
                <span className="text-[10px] uppercase font-bold text-gray-500 dark:text-gray-400 tracking-widest mb-0.5">
                  Huéspedes
                </span>
                <span className="text-sm font-bold text-gray-400 group-hover/item:text-primary transition-airbnb">
                  ¿Cuántos?
                </span>
              </div>

              <div className="hidden md:block w-px h-10 bg-gray-100 dark:bg-gray-800" />

              {/* Action */}
              <div className="w-full md:w-1/3 flex items-center justify-end pl-8 pr-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full cursor-pointer transition-airbnb">
                <Button className="rounded-full p-4 md:p-5 h-12 md:h-14 font-black shadow-lg flex items-center gap-2 btn-airbnb">
                  <Search className="w-5 h-5" />
                  <span className="hidden md:inline pr-2">Explorar</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Bar - Sutil */}
      <div className="bg-white dark:bg-gray-950 py-10 border-b border-gray-100 dark:border-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="flex flex-col items-center gap-2 group">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Wifi className="w-6 h-6 text-primary dark:text-primary" />
              </div>
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                Fibra Óptica
              </span>
            </div>
            <div className="flex flex-col items-center gap-2 group">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <UtensilsCrossed className="w-6 h-6 text-bugambilia-600 dark:text-bugambilia-400" />
              </div>
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                Desayuno Típico
              </span>
            </div>
            <div className="flex flex-col items-center gap-2 group">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Car className="w-6 h-6 text-bugambilia-600 dark:text-bugambilia-400" />
              </div>
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                Parking Privado
              </span>
            </div>
            <div className="flex flex-col items-center gap-2 group">
              <div className="w-12 h-12 rounded-2xl bg-bugambilia-50 dark:bg-bugambilia-900/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <MapPin className="w-6 h-6 text-bugambilia-600 dark:text-bugambilia-400" />
              </div>
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                Véntro Histórico
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
