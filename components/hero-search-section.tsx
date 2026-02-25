"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Search, Calendar, Users, MapPin } from "lucide-react"
import Image from "next/image"

export default function HeroSearchSection() {
  const [activeTab, setActiveTab] = useState("stays")

  return (
    <section className="relative">
      {/* Hero Image */}
      <div className="relative h-[60vh] min-h-[400px]">
        <Image
          src="/placeholder.svg?height=600&width=1200"
          alt="Hotel Bugambilias"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">Hotel Bugambilias</h1>
          <p className="text-xl md:text-2xl text-center mb-8 max-w-2xl">Tu refugio de confort y tranquilidad</p>
        </div>
      </div>

      {/* Search Card */}
      <div className="container mx-auto px-4 -mt-8 relative z-10">
        <Card className="p-6 shadow-xl bg-white rounded-2xl max-w-4xl mx-auto">
          {/* Tabs */}
          <div className="flex gap-8 mb-6">
            <button
              onClick={() => setActiveTab("stays")}
              className={`pb-2 border-b-2 font-medium ${activeTab === "stays"
                  ? "border-primary text-gray-900"
                  : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
            >
              Estancias
            </button>
            <button
              onClick={() => setActiveTab("experiences")}
              className={`pb-2 border-b-2 font-medium ${activeTab === "experiences"
                  ? "border-primary text-gray-900"
                  : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
            >
              Experiencias
            </button>
          </div>

          {/* Search Form */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Destino</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Hotel Bugambilias"
                  className="pl-10 h-12 border-gray-300"
                  defaultValue="Hotel Bugambilias"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Llegada</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                <Input type="date" className="pl-10 h-12 border-gray-300" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Salida</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                <Input type="date" className="pl-10 h-12 border-gray-300" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Huéspedes</label>
              <div className="relative">
                <Users className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                <Input placeholder="2 huéspedes" className="pl-10 h-12 border-gray-300" />
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <Button className="px-8 py-3 rounded-full flex items-center gap-2">
              <Search className="w-4 h-4" />
              Buscar
            </Button>
          </div>
        </Card>
      </div>
    </section>
  )
}
