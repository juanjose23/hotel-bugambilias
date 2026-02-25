import Image from "next/image"
import { Waves, Wine, Utensils, CalendarDays, Wifi, ShieldCheck, HeartPulse, Sparkles } from "lucide-react"

const services = [
  {
    name: "Piscina Refrescante",
    description: "Un oasis de tranquilidad rodeado de bugambilias, perfecto para desconectar bajo el sol de Estelí.",
    icon: Waves,
    image: "/images/pool-scaled.jpg",
    size: "large"
  },
  {
    name: "Bar & Cócteles",
    description: "Nuestra exclusiva selección de mixología inspirada en sabores locales.",
    icon: Wine,
    image: "/images/terrace.jpg",
    size: "small"
  },
  {
    name: "Gastronomía Local",
    description: "Desayunos típicos y platos que celebran la riqueza culinaria de Nicaragua.",
    icon: Utensils,
    image: "/images/hero-secondary.jpg",
    size: "small"
  },
  {
    name: "Eventos Boutique",
    description: "Espacios íntimos y elegantes para celebraciones que merecen ser recordadas.",
    icon: CalendarDays,
    image: "/images/facebook-cover.jpg",
    size: "medium"
  },
]

export default function ServicesSection() {
  return (
    <section className="py-32 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-[10px] font-black uppercase tracking-[0.2em] mb-6 shadow-sm">
              <Sparkles className="w-3 h-3 text-bugambilia-600" />
              Servicios Exclusivos
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tighter mb-8 leading-[0.95]">
              Hospitalidad que se siente como <span className="text-bugambilia-gradient bg-clip-text text-transparent">casa</span>
            </h2>
            <p className="text-xl text-gray-500 dark:text-gray-400 font-medium leading-relaxed max-w-xl">
              Cada detalle de nuestro servicio ha sido curado para ofrecerte una experiencia auténticamente nicaragüense, donde el lujo se encuentra con la tradición.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-8 rounded-[2rem] bg-white dark:bg-gray-900 shadow-airbnb transform -rotate-1">
              <Wifi className="w-8 h-8 text-bugambilia-600 mb-4" />
              <h4 className="text-sm font-black uppercase tracking-widest mb-2">Conectividad</h4>
              <p className="text-xs text-gray-400 font-medium leading-relaxed">Fibra óptica de alta velocidad en cada rincón.</p>
            </div>
            <div className="p-8 rounded-[2rem] bg-white dark:bg-gray-900 shadow-airbnb transform translate-y-8 rotate-1">
              <ShieldCheck className="w-8 h-8 text-bugambilia-600 mb-4" />
              <h4 className="text-sm font-black uppercase tracking-widest mb-2">Seguridad</h4>
              <p className="text-xs text-gray-400 font-medium leading-relaxed">Personal de seguridad y monitoreo las 24 horas.</p>
            </div>
          </div>
        </div>

        {/* Editorial Staggered Grid */}
        <div className="columns-1 md:columns-2 gap-8 space-y-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="relative group overflow-hidden rounded-[2.5rem] bg-white dark:bg-gray-900 shadow-sm hover:shadow-airbnb transition-airbnb break-inside-avoid"
            >
              <div className={`relative w-full ${service.size === 'large' ? 'aspect-[4/5]' : 'aspect-square'} overflow-hidden`}>
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-airbnb" />

                <div className="absolute top-8 left-8">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center">
                    <service.icon className="w-5 h-5 text-white" />
                  </div>
                </div>

                <div className="absolute bottom-10 left-10 right-10">
                  <h3 className="text-2xl md:text-3xl font-black text-white tracking-tighter mb-3 transform transition-airbnb translate-y-2 group-hover:translate-y-0">
                    {service.name}
                  </h3>
                  <p className="text-white/80 text-sm font-medium leading-relaxed line-clamp-2 transform transition-airbnb opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
