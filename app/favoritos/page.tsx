import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Heart } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
    title: "Favoritos - Hotel Bugambilias",
    description: "Tus habitaciones favoritas en Hotel Bugambilias",
}

export default function FavoritosPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-gray-950">
            <Header />

            <div className="container mx-auto px-4 py-32">
                <div className="max-w-2xl mx-auto text-center">
                    <div className="w-24 h-24 bg-gray-50 dark:bg-gray-900 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-airbnb transform rotate-3">
                        <Heart className="w-10 h-10 text-gray-300 dark:text-gray-700" />
                    </div>

                    <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tighter mb-4">
                        Aún no tienes favoritos
                    </h1>
                    <p className="text-xl font-medium text-gray-500 mb-12">
                        Guarda las habitaciones que más te gusten para encontrarlas fácilmente después.
                    </p>

                    <Button className="px-10 h-14 bg-black dark:bg-white dark:text-black text-white rounded-2xl font-black uppercase tracking-widest text-[10px] transition-airbnb shadow-airbnb hover:scale-105" asChild>
                        <Link href="/habitaciones">Explorar habitaciones</Link>
                    </Button>
                </div>
            </div>

            <Footer />
        </main>
    )
}
