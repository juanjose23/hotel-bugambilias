"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, User, Globe, Search, Filter } from "lucide-react";
import ThemeToggle from "@/components/theme-toggle";
import Image from "next/image";

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Habitaciones", href: "/habitaciones" },
  { name: "Servicios", href: "/servicios" },
  { name: "Acerca de", href: "/acerca-de" },
  { name: "Contacto", href: "/contacto" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-airbnb ${isScrolled
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-airbnb py-2"
          : "bg-white dark:bg-gray-900 py-4"
        } border-b border-gray-100 dark:border-gray-800`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Desktop Only */}
          <Link
            href="/"
            className="hidden lg:flex items-center gap-3 active:scale-95 transition-airbnb flex-shrink-0 group"
          >
            <div className="relative w-10 h-10 overflow-hidden rounded-xl group-hover:shadow-lg transition-airbnb">
              <Image
                src="/images/hotel-icon.png"
                alt="Hotel Bugambilias"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-2xl font-black tracking-tighter text-primary">
              Bugambilias
            </span>
          </Link>

          {/* Desktop Central Search Pill (Airbnb Style) */}
          <div
            className={`hidden lg:flex items-center transition-airbnb transform flex-grow justify-center max-w-xl mx-auto ${isScrolled ? "scale-95 translate-y-0" : "scale-100"
              }`}
          >
            <button className="flex items-center w-full max-w-md gap-0 p-1 border border-gray-200 dark:border-gray-700 rounded-full shadow-sm hover:shadow-airbnb transition-airbnb bg-white dark:bg-gray-800 group overflow-hidden">
              <div className="flex-1 flex flex-col items-start px-5 border-r border-gray-100 dark:border-gray-700 text-left">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                  ¿Cuándo?
                </span>
                <span className="text-sm font-semibold truncate hover:text-primary">
                  Ver disponibilidad
                </span>
              </div>
              <div className="flex-1 flex flex-col items-start px-5 text-left">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                  ¿Cuántos?
                </span>
                <span className="text-sm font-semibold truncate text-gray-400 group-hover:text-gray-600">
                  Huéspedes
                </span>
              </div>
              <div className="bg-primary text-primary-foreground p-3 rounded-full shadow-lg transition-airbnb group-hover:scale-110 ml-1">
                <Search className="w-4 h-4" />
              </div>
            </button>
          </div>

          {/* Right side - User & Context Menu */}
          <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
            <nav className="flex items-center">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-semibold transition-airbnb px-4 py-2.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 ${pathname === item.href
                      ? "text-black dark:text-white"
                      : "text-gray-500 hover:text-black"
                    }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="h-8 w-px bg-gray-100 dark:bg-gray-800 mx-2" />

            <div className="flex items-center gap-1">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-airbnb"
              >
                <Globe className="w-5 h-5" />
              </Button>
            </div>

            {/* Profile Menu Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`flex items-center gap-2 p-1.5 pl-3 border border-gray-200 dark:border-gray-700 rounded-full hover:shadow-airbnb transition-airbnb bg-white dark:bg-gray-800 ${isMenuOpen ? "shadow-airbnb" : "shadow-sm"
                  }`}
              >
                <Menu className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                <div className="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-full p-1.5">
                  <User className="w-4 h-4" />
                </div>
              </button>

              {isMenuOpen && (
                <div className="absolute right-0 mt-3 w-64 bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 py-3 overflow-hidden animate-in fade-in zoom-in-95 duration-200 z-[60]">
                  <div className="px-1 space-y-1">
                    <Link
                      href="/registro"
                      className="block px-4 py-3 text-sm font-bold hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl transition-airbnb text-primary"
                    >
                      Crea tu cuenta ahora
                    </Link>
                    <Link
                      href="/login"
                      className="block px-4 py-3 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl transition-airbnb"
                    >
                      Inicia sesión
                    </Link>
                    <div className="h-px bg-gray-100 dark:bg-gray-800 my-2 mx-2" />
                    <Link
                      href="/habitaciones"
                      className="block px-4 py-2.5 text-sm hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl transition-airbnb"
                    >
                      Nuestras habitaciones
                    </Link>
                    <Link
                      href="/mis-reservas"
                      className="block px-4 py-2.5 text-sm hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl transition-airbnb"
                    >
                      Ayuda y soporte
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile View: Logo + Search/Filter */}
          <div className="lg:hidden flex w-full items-center gap-3">
            <Link
              href="/"
              className="flex-shrink-0 active:scale-95 transition-airbnb"
            >
              <div className="relative w-8 h-8 overflow-hidden rounded-lg shadow-sm">
                <Image
                  src="/images/hotel-icon.png"
                  alt="HB"
                  fill
                  className="object-cover"
                />
              </div>
            </Link>

            <button className="flex flex-grow items-center gap-2.5 px-4 py-2.5 border border-gray-100 dark:border-gray-800 rounded-full shadow-sm bg-gray-50 dark:bg-gray-900/50 text-left active:scale-[0.98] transition-airbnb">
              <Search className="w-3.5 h-3.5 text-primary" />
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-gray-900 dark:text-white uppercase tracking-tight">
                  Tu viaje
                </span>
                <span className="text-[9px] text-gray-400 font-medium">
                  Cualquier fecha • Huéspedes
                </span>
              </div>
            </button>

            <button className="p-2.5 border border-gray-100 dark:border-gray-800 rounded-full bg-white dark:bg-gray-950 shadow-sm active:scale-95 transition-airbnb">
              <Filter className="w-3.5 h-3.5 text-gray-600 dark:text-gray-400" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
