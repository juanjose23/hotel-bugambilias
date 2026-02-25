"use client"

import { useEffect } from "react"
import Link from "next/link"
import { X, Facebook, Instagram, MessageCircle, Mail, Phone, MapPin, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface MobileMenuOverlayProps {
    isOpen: boolean
    onClose: () => void
}

const mainLinks = [
    { name: "Inicio", href: "/", description: "Regresa a nuestra portada" },
    { name: "Habitaciones", href: "/habitaciones", description: "Explora nuestras estancias boutique" },
    { name: "Servicios", href: "/servicios", description: "Experiencias de bienestar y cultura" },
    { name: "Acerca de", href: "/acerca-de", description: "Nuestra historia desde 1985" },
    { name: "Contacto", href: "/contacto", description: "Estamos aquí para ayudarte" },
]

export default function MobileMenuOverlay({ isOpen, onClose }: MobileMenuOverlayProps) {
    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }
        return () => {
            document.body.style.overflow = "unset"
        }
    }, [isOpen])

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] bg-white dark:bg-gray-950 flex flex-col"
                >
                    {/* Subtle brand pattern background */}
                    <div className="absolute inset-0 bugambilia-pattern opacity-5 pointer-events-none" />

                    {/* Header */}
                    <div className="flex items-center justify-between px-6 h-20 border-b border-gray-100 dark:border-gray-900 relative z-10">
                        <Link href="/" onClick={onClose} className="text-xl font-black tracking-tighter text-primary">
                            HB
                        </Link>
                        <button
                            onClick={onClose}
                            className="p-3 bg-gray-50 dark:bg-gray-900 rounded-full hover:bg-gray-100 transition-airbnb"
                        >
                            <X className="w-5 h-5 text-gray-900 dark:text-gray-100" />
                        </button>
                    </div>

                    {/* Links Section */}
                    <div className="flex-1 overflow-y-auto px-8 py-12 relative z-10">
                        <nav className="space-y-10">
                            {mainLinks.map((link, idx) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={onClose}
                                        className="group block"
                                    >
                                        <div className="flex items-center justify-between mb-1">
                                            <span className="text-4xl font-black tracking-tighter text-gray-900 dark:text-white group-hover:text-primary transition-airbnb">
                                                {link.name}
                                            </span>
                                            <ChevronRight className="w-6 h-6 text-gray-200 group-hover:text-primary transition-airbnb" />
                                        </div>
                                        <p className="text-sm font-medium text-gray-400 uppercase tracking-widest translate-y-0 group-hover:translate-x-1 transition-airbnb">
                                            {link.description}
                                        </p>
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>

                        {/* Bottom Info Section */}
                        <div className="mt-20 pt-10 border-t border-gray-100 dark:border-gray-900">
                            <div className="grid grid-cols-2 gap-8 mb-12">
                                <div>
                                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-bugambilia-600 mb-4">Llámanos</h4>
                                    <p className="text-sm font-bold text-gray-900 dark:text-white">+505 2713 3456</p>
                                </div>
                                <div>
                                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-bugambilia-600 mb-4">Ubicación</h4>
                                    <p className="text-sm font-bold text-gray-900 dark:text-white">Estelí, Nicaragua</p>
                                </div>
                            </div>

                            {/* Socials */}
                            <div className="flex gap-4">
                                {[Facebook, Instagram, MessageCircle].map((Icon, idx) => (
                                    <button key={idx} className="w-12 h-12 rounded-2xl bg-gray-50 dark:bg-gray-900 flex items-center justify-center hover:bg-primary group transition-airbnb">
                                        <Icon className="w-5 h-5 text-gray-400 group-hover:text-primary-foreground transition-airbnb" />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Footer Decoration */}
                    <div className="p-8 text-center text-[10px] font-black uppercase tracking-widest text-gray-300 dark:text-gray-700">
                        Hotel Bugambilias Est. 1985
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
