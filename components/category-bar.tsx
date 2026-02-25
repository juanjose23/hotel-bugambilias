"use client"

import { useState } from "react"
import {
    Bed,
    Users,
    Palmtree,
    Waves,
    Coffee,
    Wind,
    Gamepad2,
    Camera,
    UtensilsCrossed, // Added new icon
    MapPin // Added new icon
} from "lucide-react"

const categories = [
    { id: "habitaciones", name: "Habitaciones", icon: Bed },
    { id: "piscina", name: "Piscina", icon: Waves },
    { id: "restaurante", name: "Restaurante", icon: UtensilsCrossed },
    { id: "eventos", name: "Eventos", icon: Users },
    { id: "jardin", name: "Jardín", icon: Palmtree },
    { id: "galeria", name: "Galería", icon: Camera },
    { id: "turismo", name: "Turismo", icon: MapPin },
]

export default function CategoryBar() {
    const [activeCategory, setActiveCategory] = useState("habitaciones")

    return (
        <div className="sticky top-0 md:top-0 z-40 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-8 overflow-x-auto no-scrollbar py-4 px-2">
                    {categories.map((category) => {
                        const Icon = category.icon
                        const isActive = activeCategory === category.id

                        return (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`flex flex-col items-center gap-2 min-w-fit transition-all duration-200 group relative pb-2`}
                            >
                                <Icon
                                    className={`w-6 h-6 transition-colors ${isActive
                                        ? "text-black dark:text-white"
                                        : "text-gray-500 group-hover:text-black dark:group-hover:text-white"
                                        }`}
                                />
                                <span className={`text-xs font-medium transition-colors ${isActive
                                    ? "text-black dark:text-white"
                                    : "text-gray-500 group-hover:text-black dark:group-hover:text-white"
                                    }`}>
                                    {category.name}
                                </span>

                                {/* Underline for active category */}
                                <div className={`absolute bottom-0 left-0 right-0 h-0.5 transition-all duration-300 ${isActive
                                    ? "bg-black dark:bg-white scale-x-100"
                                    : "bg-gray-300 scale-x-0 group-hover:scale-x-50"
                                    }`} />
                            </button>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
