"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Heart, Calendar, UserCircle, Menu as MenuIcon, Sparkles } from "lucide-react"
import MobileMenuOverlay from "./mobile-menu-overlay"

const navItems = [
    { name: "Inicio", href: "/", icon: Home },
    { name: "Habitaciones", href: "/habitaciones", icon: Calendar },
    { name: "Servicios", href: "/servicios", icon: Sparkles },
    { name: "Perfil", href: "/login", icon: UserCircle },
]

export default function MobileNav() {
    const pathname = usePathname()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    // Hide navigation on specific routes to avoid overlapping with page-specific bottom bars
    const hideNav = pathname.startsWith("/habitaciones/") || pathname.startsWith("/pago")

    if (hideNav) return null

    return (
        <>
            <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 px-4 pb-6 pt-2 pointer-events-none">
                <nav className="max-w-md mx-auto bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border border-gray-100 dark:border-gray-800 rounded-[2rem] shadow-2xl px-8 py-3 pointer-events-auto">
                    <div className="flex justify-between items-center">
                        {navItems.map((item) => {
                            const Icon = item.icon
                            const isActive = pathname === item.href

                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="relative flex flex-col items-center gap-1 group py-1"
                                >
                                    <div className={`relative p-2 rounded-2xl transition-airbnb ${isActive ? "text-primary" : "text-gray-400"}`}>
                                        <Icon className={`w-5 h-5 transition-airbnb ${isActive ? "scale-110" : "scale-100"}`} />
                                        {isActive && (
                                            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                                        )}
                                    </div>
                                    <span className={`text-[9px] font-black uppercase tracking-tighter transition-airbnb ${isActive ? "text-primary" : "text-gray-400"}`}>
                                        {item.name}
                                    </span>
                                </Link>
                            )
                        })}

                        {/* Menu Toggle */}
                        <button
                            onClick={() => setIsMenuOpen(true)}
                            className="relative flex flex-col items-center gap-1 group py-1"
                        >
                            <div className="relative p-2 rounded-2xl transition-airbnb text-gray-400 group-active:scale-95">
                                <MenuIcon className="w-5 h-5" />
                            </div>
                            <span className="text-[9px] font-black uppercase tracking-tighter text-gray-400">
                                Menú
                            </span>
                        </button>
                    </div>
                </nav>
            </div>

            <MobileMenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </>
    )
}
