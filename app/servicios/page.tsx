"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sparkles, Waves, Utensils, Compass, CalendarDays, Star, ArrowRight, MessageCircle } from "lucide-react"

const serviceCategories = [
    {
        title: "Bienestar & Relajación",
        tag: "Oasis de Paz",
        description: "Desconecta del mundo en nuestra piscina rodeada de bugambilias o disfruta de un masaje terapéutico con aceites orgánicos de la región.",
        image: "/images/pool-scaled.jpg",
        items: ["Piscina climatizada al aire libre", "Masajes de tejido profundo", "Zona de meditación", "Tratamientos faciales botánicos"],
        icon: Waves,
        color: "bg-blue-50 text-blue-600 border-blue-100"
    },
    {
        title: "Gastronomía Bugambilia",
        tag: "Sabores de Estelí",
        description: "Nuestra cocina celebra la herencia nicaragüense con ingredientes de fincas locales. Desde el café de altura hasta platos de autor.",
        image: "/images/hero-secondary.jpg",
        items: ["Desayuno típico gourmet", "Mixología de autor en terraza", "Cenas privadas a la luz de las velas", "Degustación de café orgánico"],
        icon: Utensils,
        color: "bg-orange-50 text-orange-600 border-orange-100"
    },
    {
        title: "Aventuras & Cultura",
        tag: "Explora Nicaragua",
        description: "Descubre el alma de Estelí con guías locales expertos. Tours por fábricas de puros icónicas y rutas por la reserva natural Miraflor.",
        image: "/images/terrace.jpg",
        items: ["Tours por fábricas de tabaco", "Senderismo en Miraflor", "Rutas de murales artísticos", "Excursiones de observación de aves"],
        icon: Compass,
        color: "bg-emerald-50 text-emerald-600 border-emerald-100"
    },
    {
        title: "Eventos & Negocios",
        tag: "Espacios Exclusivos",
        description: "El escenario perfecto para reuniones empresariales íntimas o celebraciones sociales que buscan un toque de elegancia boutique.",
        image: "/images/facebook-cover.jpg",
        items: ["Salas de reuniones equipadas", "Catering personalizado", "Terraza para eventos sociales", "Coordinación de eventos VIP"],
        icon: CalendarDays,
        color: "bg-purple-50 text-purple-600 border-purple-100"
    }
]

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-gray-950">
            <Header />

            {/* Editorial Hero Section */}
            <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                <Image
                    src="/images/hero-main.jpg"
                    alt="Servicios Hotel Bugambilias"
                    fill
                    className="object-cover scale-105"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-white dark:to-gray-950" />

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <Sparkles className="w-4 h-4 text-bugambilia-400" />
                        <span className="text-xs font-black uppercase tracking-[0.2em]">Experiencias Boutique</span>
                    </div>
                    <h1 className="text-5xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter leading-none mb-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                        Más que una <br /> <span className="text-bugambilia-gradient bg-clip-text text-transparent italic">estancia</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white/80 font-medium max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-12 duration-1200">
                        Descubre el arte de la hospitalidad en cada rincón. Desde bienestar hasta gastronomía de autor.
                    </p>
                </div>
            </section>

            {/* Categories Showcase */}
            <section className="py-24 pb-40">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="space-y-32 md:space-y-56">
                        {serviceCategories.map((category, idx) => (
                            <div
                                key={idx}
                                className={`flex flex-col lg:items-center gap-12 lg:gap-24 ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                            >
                                {/* Visual Side */}
                                <div className="lg:w-1/2 relative">
                                    <div className="relative aspect-[4/5] md:aspect-square rounded-[3rem] overflow-hidden shadow-2xl group">
                                        <Image
                                            src={category.image}
                                            alt={category.title}
                                            fill
                                            className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-airbnb" />
                                    </div>
                                    {/* Floating badge */}
                                    <div className={`absolute -bottom-6 -right-6 md:-right-10 p-8 rounded-[2.5rem] bg-white dark:bg-gray-900 shadow-2xl border border-gray-100 dark:border-gray-800 animate-float`}>
                                        <category.icon className="w-10 h-10 text-bugambilia-600" />
                                    </div>
                                </div>

                                {/* Content Side */}
                                <div className="lg:w-1/2">
                                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border mb-6 ${category.color}`}>
                                        <Star className="w-3 h-3 fill-current" />
                                        {category.tag}
                                    </div>
                                    <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tighter mb-8 leading-[0.9]">
                                        {category.title}
                                    </h2>
                                    <p className="text-xl text-gray-500 dark:text-gray-400 font-medium leading-relaxed mb-10 max-w-xl">
                                        {category.description}
                                    </p>

                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                                        {category.items.map((item, i) => (
                                            <li key={i} className="flex items-center gap-2 text-sm font-bold text-gray-700 dark:text-gray-300">
                                                <div className="w-1.5 h-1.5 rounded-full bg-bugambilia-600" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex flex-wrap gap-4">
                                        <Button className="h-14 px-8 rounded-2xl bg-black dark:bg-white text-white dark:text-black font-black uppercase tracking-widest text-[10px] hover:scale-105 transition-airbnb shadow-lg">
                                            Reservar experiencia
                                        </Button>
                                        <Button variant="ghost" className="h-14 px-8 rounded-2xl font-black uppercase tracking-widest text-[10px] flex items-center gap-2 group">
                                            Más información <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="py-32 bg-gray-50 dark:bg-gray-900/50 border-t border-gray-100 dark:border-gray-800">
                <div className="container mx-auto px-4 text-center">
                    <div className="max-w-3xl mx-auto p-12 md:p-20 rounded-[4rem] bg-white dark:bg-gray-900 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-bugambilia-50 dark:bg-bugambilia-900/10 rounded-bl-[100%]" />
                        <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tighter mb-8">
                            ¿Deseas algo <span className="text-bugambilia-gradient bg-clip-text text-transparent italic">especial?</span>
                        </h2>
                        <p className="text-lg text-gray-500 dark:text-gray-400 font-medium mb-12">
                            Nuestro concierge está listo para diseñar una experiencia personalizada a tu medida.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Button className="w-full sm:w-auto h-16 px-10 rounded-2xl bg-bugambilia-600 hover:bg-bugambilia-700 text-white font-black uppercase tracking-widest text-[11px] transition-airbnb shadow-xl flex items-center gap-3">
                                <MessageCircle className="w-4 h-4" />
                                Contactar Concierge
                            </Button>
                            <Button variant="outline" className="w-full sm:w-auto h-16 px-10 rounded-2xl border-gray-200 font-black uppercase tracking-widest text-[11px] transition-airbnb">
                                Descargar Menú PDF
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
