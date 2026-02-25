"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Star, Heart } from "lucide-react"

interface RoomProps {
    room: {
        id: number | string
        name: string
        location?: string
        price: number
        rating?: number
        image: string
        type?: string
        beds?: string
        popular?: boolean
    }
}

export default function RoomCard({ room }: RoomProps) {
    const [isLiked, setIsLiked] = useState(false)

    return (
        <article className="group flex flex-col h-full bg-white dark:bg-gray-950 rounded-2xl overflow-hidden transition-airbnb">
            <Link href={`/habitaciones/${room.id}`} className="block relative aspect-square overflow-hidden rounded-2xl mb-4 bg-gray-100 dark:bg-gray-800">
                <Image
                    src={room.image || "/placeholder-room.jpg"}
                    alt={room.name}
                    fill
                    className="object-cover transition-airbnb group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Top Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2 pointer-events-none">
                    {room.popular && (
                        <span className="bg-white/95 dark:bg-gray-900/95 text-black dark:text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-airbnb border border-gray-100 dark:border-gray-800">
                            Favorito
                        </span>
                    )}
                </div>

                {/* Favorite Button */}
                <button
                    onClick={(e) => {
                        e.preventDefault()
                        setIsLiked(!isLiked)
                    }}
                    className="absolute top-3 right-3 p-2 rounded-full transition-airbnb hover:scale-110 active:scale-90 bg-transparent"
                >
                    <Heart
                        className={`w-6 h-6 transition-airbnb drop-shadow-md ${isLiked
                                ? "fill-bugambilia-600 text-bugambilia-600"
                                : "text-white stroke-[2.5]"
                            }`}
                    />
                </button>

                {/* Floating Bottom Info (Mobile aesthetic) */}
                <div className="absolute bottom-3 left-3 md:hidden">
                    <div className="bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                        <Star className="w-3 h-3 fill-bugambilia-600 text-bugambilia-600" />
                        <span className="text-xs font-bold text-black">{room.rating || "New"}</span>
                    </div>
                </div>
            </Link>

            {/* Info Section */}
            <div className="flex flex-col flex-grow px-1">
                <div className="flex justify-between items-start mb-0.5">
                    <h3 className="text-[15px] font-bold text-gray-900 dark:text-white line-clamp-1 group-hover:text-bugambilia-600 transition-airbnb">
                        {room.name}
                    </h3>
                    <div className="hidden md:flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 fill-black dark:fill-white text-black dark:text-white" />
                        <span className="text-sm font-medium">{room.rating || "Novo"}</span>
                    </div>
                </div>

                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-1">
                    {room.location || "Estelí, Nicaragua"}
                </p>

                <p className="text-sm text-gray-400 dark:text-gray-500 mb-2 truncate">
                    {room.type || "Habitación Boutique"} • {room.beds || "Camas premium"}
                </p>

                <div className="mt-auto pt-1">
                    <p className="flex items-baseline gap-1">
                        <span className="text-base font-black text-black dark:text-white">${room.price}</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400 font-medium tracking-tight">noche</span>
                    </p>
                </div>
            </div>
        </article>
    )
}
