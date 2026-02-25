"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, MessageCircle, Mail, Phone, MapPin, ArrowUpCircle } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-black text-white relative overflow-hidden border-t border-gray-900 pt-24 pb-12">
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 bugambilia-pattern opacity-5 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8 mb-20">
          {/* Brand Info */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-8">
              <span className="text-2xl font-black tracking-tighter text-white">HOTEL<span className="text-primary">BUGAMBILIAS</span></span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm">
              Hospitalidad auténtica en el corazón de Estelí, Nicaragua. Un refugio donde la elegancia y la tradición florecen en cada detalle desde 1985.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, MessageCircle].map((Icon, idx) => (
                <Link key={idx} href="#" className="w-10 h-10 rounded-2xl bg-gray-900 flex items-center justify-center hover:bg-primary transition-airbnb group">
                  <Icon className="w-4 h-4 text-gray-400 group-hover:text-primary-foreground" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-8">Explorar</h4>
            <ul className="space-y-4">
              {["Inicio", "Habitaciones", "Acerca de", "Contacto"].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(" ", "-")}`} className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-airbnb">
                    {item}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/servicios" className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-airbnb">
                  Servicios
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Quick View */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-8">Experiencia</h4>
            <ul className="space-y-4">
              {["Piscina", "Restaurante", "Bar & Terraza", "Eventos"].map((item) => (
                <li key={item} className="text-xs font-bold uppercase tracking-widest text-gray-400">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-8">Contacto</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-bugambilia-600 shrink-0" />
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-white mb-1">Visítanos</p>
                  <p className="text-xs text-gray-400 leading-relaxed">Panamericana Norte KM 149, Estelí, Nicaragua</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-white mb-1">Llámanos</p>
                  <p className="text-xs text-gray-400">+505 2713 3456</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-bugambilia-600 shrink-0" />
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-white mb-1">Escríbenos</p>
                  <p className="text-xs text-gray-400">reservaciones@hotelbugambilias.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-wrap justify-center md:justify-start gap-8 text-[10px] font-black uppercase tracking-widest text-gray-500">
            <Link href="/privacidad" className="hover:text-white transition-airbnb">Privacidad</Link>
            <Link href="/terminos" className="hover:text-white transition-airbnb">Términos</Link>
            <p>© {new Date().getFullYear()} Hotel Bugambilias</p>
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-white transition-airbnb"
          >
            Volver arriba
            <ArrowUpCircle className="w-5 h-5 group-hover:scale-110 transition-airbnb" />
          </button>
        </div>
      </div>
    </footer>
  )
}

