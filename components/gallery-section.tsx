"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const galleryImages = [
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Lobby del hotel",
    title: "Lobby elegante",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Piscina del hotel",
    title: "Piscina relajante",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Restaurante del hotel",
    title: "Restaurante gourmet",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Habitación de lujo",
    title: "Habitaciones cómodas",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Bar del hotel",
    title: "Bar junto a la piscina",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Jardines del hotel",
    title: "Jardines hermosos",
  },
]

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openImage = (index: number) => {
    setSelectedImage(index)
  }

  const closeImage = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1)
    }
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Galería</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre la belleza y elegancia de nuestras instalaciones a través de estas imágenes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg aspect-[4/3]"
              onClick={() => openImage(index)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="font-semibold">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={selectedImage !== null} onOpenChange={closeImage}>
        <DialogContent className="max-w-4xl w-full p-0 bg-black">
          {selectedImage !== null && (
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
                onClick={closeImage}
              >
                <X className="w-6 h-6" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
                onClick={prevImage}
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
                onClick={nextImage}
              >
                <ChevronRight className="w-6 h-6" />
              </Button>

              <div className="relative aspect-[4/3]">
                <Image
                  src={galleryImages[selectedImage].src || "/placeholder.svg"}
                  alt={galleryImages[selectedImage].alt}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-semibold">{galleryImages[selectedImage].title}</h3>
                <p className="text-sm opacity-80">
                  {selectedImage + 1} de {galleryImages.length}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
