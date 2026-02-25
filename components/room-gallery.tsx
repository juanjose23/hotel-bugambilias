"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { X, ChevronLeft, ChevronRight, Grid3X3 } from "lucide-react"

interface RoomGalleryProps {
  images: string[]
  roomName: string
}

export default function RoomGallery({ images, roomName }: RoomGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [showAllImages, setShowAllImages] = useState(false)

  const openImage = (index: number) => {
    setSelectedImage(index)
  }

  const closeImage = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1)
    }
  }

  const displayImages = showAllImages ? images : images.slice(0, 5)

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Galería de fotos</h2>
        <Button variant="outline" onClick={() => setShowAllImages(!showAllImages)} className="flex items-center gap-2">
          <Grid3X3 className="w-4 h-4" />
          {showAllImages ? "Mostrar menos" : `Ver todas (${images.length})`}
        </Button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {displayImages.map((image, index) => (
          <div
            key={index}
            className="relative group cursor-pointer overflow-hidden rounded-lg aspect-[4/3]"
            onClick={() => openImage(index)}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`${roomName} - Foto ${index + 1}`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
          </div>
        ))}
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
                  src={images[selectedImage] || "/placeholder.svg"}
                  alt={`${roomName} - Foto ${selectedImage + 1}`}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm opacity-80">
                  {selectedImage + 1} de {images.length}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
