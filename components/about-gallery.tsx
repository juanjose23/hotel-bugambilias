import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const galleryImages = [
  {
    src: "/images/pool-scaled.jpg",
    alt: "Piscina principal del hotel",
    title: "Piscina",
  },
  {
    src: "/images/main-room.jpg",
    alt: "Habitación principal",
    title: "Habitaciones",
  },
  {
    src: "/images/service-kitchen.png",
    alt: "Cocina del restaurante",
    title: "Restaurante",
  },
  {
    src: "/images/terrace.jpg",
    alt: "Terraza del hotel",
    title: "Terraza",
  },
  {
    src: "/images/bathroom.jpg",
    alt: "Baño de habitación",
    title: "Baños",
  },
  {
    src: "/images/group-room.jpg",
    alt: "Habitación grupal",
    title: "Espacios",
  },
]

export default function AboutGallery() {
  return (
    <section className="py-16 lg:py-24 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-bugambilia-100 dark:bg-bugambilia-900/30 text-bugambilia-700 dark:text-bugambilia-300 border-bugambilia-200 dark:border-bugambilia-700">
            🌺 Galería
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Descubre nuestras
            <span className="block text-bugambilia-600 dark:text-bugambilia-400">instalaciones</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Un vistazo a los espacios que hacen de Hotel Bugambilias tu hogar en Estelí.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <Card
              key={index}
              className="overflow-hidden border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-lg font-semibold">{image.title}</h3>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
