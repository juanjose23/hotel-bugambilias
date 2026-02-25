"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Users, MapPin, Phone, Mail, Download, Edit, X, Plus, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"

const bookings = [
  {
    id: "BUG-2024-001234",
    status: "confirmed",
    room: "Habitación Doble Deluxe",
    checkIn: "2024-02-15",
    checkOut: "2024-02-17",
    nights: 2,
    guests: 2,
    total: 814.32,
    image: "/images/main-room.jpg",
    bookedDate: "2024-01-15",
  },
  {
    id: "BUG-2024-001235",
    status: "upcoming",
    room: "Junior Suite",
    checkIn: "2024-03-20",
    checkOut: "2024-03-23",
    nights: 3,
    guests: 4,
    total: 1593.6,
    image: "/images/group-room.jpg",
    bookedDate: "2024-01-20",
  },
  {
    id: "BUG-2023-000890",
    status: "completed",
    room: "Master Suite",
    checkIn: "2023-12-24",
    checkOut: "2023-12-27",
    nights: 3,
    guests: 6,
    total: 2403.84,
    image: "/images/room-detail.jpg",
    bookedDate: "2023-11-15",
  },
  {
    id: "BUG-2023-000654",
    status: "cancelled",
    room: "Habitación Doble Estándar",
    checkIn: "2023-11-10",
    checkOut: "2023-11-12",
    nights: 2,
    guests: 2,
    total: 630.0,
    image: "/images/main-room.jpg",
    bookedDate: "2023-10-20",
  },
]

export default function MyBookings() {
  const [activeTab, setActiveTab] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "confirmed":
        return (
          <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700 hover:bg-blue-100 dark:hover:bg-blue-900/30">
            Confirmada
          </Badge>
        )
      case "upcoming":
        return (
          <Badge className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-200 dark:border-green-700 hover:bg-green-100 dark:hover:bg-green-900/30">
            Próxima
          </Badge>
        )
      case "completed":
        return (
          <Badge className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
            Completada
          </Badge>
        )
      case "cancelled":
        return (
          <Badge className="bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 border-red-200 dark:border-red-700 hover:bg-red-100 dark:hover:bg-red-900/30">
            Cancelada
          </Badge>
        )
      default:
        return <Badge className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">Desconocido</Badge>
    }
  }

  const filteredBookings = bookings.filter((booking) => {
    const matchesTab = activeTab === "all" || booking.status === activeTab
    const matchesSearch =
      booking.room.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.id.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesTab && matchesSearch
  })

  return (
    <section className="py-8 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">Mis Reservas</h1>
              <p className="text-gray-600 dark:text-gray-400">
                Gestiona y revisa todas tus reservas en Hotel Bugambilias
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Buscar reservas..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-full sm:w-64 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                />
              </div>
              <Button
                className="bg-bugambilia-600 hover:bg-bugambilia-700 dark:bg-bugambilia-500 dark:hover:bg-bugambilia-600 text-white"
                asChild
              >
                <Link href="/habitaciones">
                  <Plus className="w-4 h-4 mr-2" />
                  Nueva reserva
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Empty State for no bookings */}
        {filteredBookings.length === 0 && (
          <Card className="border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
            <CardContent className="text-center py-16">
              <Calendar className="w-16 h-16 text-gray-400 dark:text-gray-500 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No hay reservas</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md mx-auto">
                {searchTerm
                  ? `No se encontraron reservas que coincidan con "${searchTerm}"`
                  : activeTab === "all"
                    ? "Aún no tienes reservas. ¡Haz tu primera reserva y disfruta de una experiencia única!"
                    : `No tienes reservas en la categoría "${activeTab}"`}
              </p>
              <Button
                className="bg-bugambilia-600 hover:bg-bugambilia-700 dark:bg-bugambilia-500 dark:hover:bg-bugambilia-600 text-white"
                asChild
              >
                <Link href="/habitaciones">Explorar habitaciones</Link>
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Bookings Content */}
        {filteredBookings.length > 0 && (
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-5 lg:w-auto lg:grid-cols-5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <TabsTrigger
                value="all"
                className="data-[state=active]:bg-bugambilia-100 dark:data-[state=active]:bg-bugambilia-900/30 data-[state=active]:text-bugambilia-700 dark:data-[state=active]:text-bugambilia-300"
              >
                Todas ({bookings.length})
              </TabsTrigger>
              <TabsTrigger
                value="upcoming"
                className="data-[state=active]:bg-bugambilia-100 dark:data-[state=active]:bg-bugambilia-900/30 data-[state=active]:text-bugambilia-700 dark:data-[state=active]:text-bugambilia-300"
              >
                Próximas ({bookings.filter((b) => b.status === "upcoming").length})
              </TabsTrigger>
              <TabsTrigger
                value="confirmed"
                className="data-[state=active]:bg-bugambilia-100 dark:data-[state=active]:bg-bugambilia-900/30 data-[state=active]:text-bugambilia-700 dark:data-[state=active]:text-bugambilia-300"
              >
                Confirmadas ({bookings.filter((b) => b.status === "confirmed").length})
              </TabsTrigger>
              <TabsTrigger
                value="completed"
                className="data-[state=active]:bg-bugambilia-100 dark:data-[state=active]:bg-bugambilia-900/30 data-[state=active]:text-bugambilia-700 dark:data-[state=active]:text-bugambilia-300"
              >
                Completadas ({bookings.filter((b) => b.status === "completed").length})
              </TabsTrigger>
              <TabsTrigger
                value="cancelled"
                className="data-[state=active]:bg-bugambilia-100 dark:data-[state=active]:bg-bugambilia-900/30 data-[state=active]:text-bugambilia-700 dark:data-[state=active]:text-bugambilia-300"
              >
                Canceladas ({bookings.filter((b) => b.status === "cancelled").length})
              </TabsTrigger>
            </TabsList>

            <TabsContent value={activeTab} className="space-y-6">
              {filteredBookings.map((booking) => (
                <Card
                  key={booking.id}
                  className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
                >
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <div className="relative h-48 md:h-full">
                        <Image
                          src={booking.image || "/placeholder.svg"}
                          alt={booking.room}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>

                    <div className="md:w-2/3 p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{booking.room}</h3>
                            {getStatusBadge(booking.status)}
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Confirmación: {booking.id}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-gray-900 dark:text-white">${booking.total}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{booking.nights} noches</p>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4 mb-6">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm">
                            <Calendar className="w-4 h-4 text-gray-400" />
                            <span className="text-gray-700 dark:text-gray-300">Check-in: {booking.checkIn}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Calendar className="w-4 h-4 text-gray-400" />
                            <span className="text-gray-700 dark:text-gray-300">Check-out: {booking.checkOut}</span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm">
                            <Users className="w-4 h-4 text-gray-400" />
                            <span className="text-gray-700 dark:text-gray-300">{booking.guests} huéspedes</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <MapPin className="w-4 h-4 text-gray-400" />
                            <span className="text-gray-700 dark:text-gray-300">Hotel Bugambilias</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {booking.status === "upcoming" && (
                          <>
                            <Button
                              size="sm"
                              className="bg-bugambilia-600 hover:bg-bugambilia-700 dark:bg-bugambilia-500 dark:hover:bg-bugambilia-600 text-white"
                            >
                              <Edit className="w-4 h-4 mr-2" />
                              Modificar
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="bg-transparent border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700"
                            >
                              <X className="w-4 h-4 mr-2" />
                              Cancelar
                            </Button>
                          </>
                        )}
                        {booking.status === "confirmed" && (
                          <>
                            <Button
                              size="sm"
                              className="bg-bugambilia-600 hover:bg-bugambilia-700 dark:bg-bugambilia-500 dark:hover:bg-bugambilia-600 text-white"
                            >
                              <Phone className="w-4 h-4 mr-2" />
                              Contactar hotel
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="bg-transparent border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700"
                            >
                              <Edit className="w-4 h-4 mr-2" />
                              Modificar
                            </Button>
                          </>
                        )}
                        {booking.status === "completed" && (
                          <>
                            <Button
                              size="sm"
                              className="bg-bugambilia-600 hover:bg-bugambilia-700 dark:bg-bugambilia-500 dark:hover:bg-bugambilia-600 text-white"
                            >
                              Reservar de nuevo
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="bg-transparent border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700"
                            >
                              Escribir reseña
                            </Button>
                          </>
                        )}
                        <Button
                          size="sm"
                          variant="outline"
                          className="bg-transparent border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Descargar
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        )}

        {/* Contact Info */}
        <Card className="mt-8 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-gray-900 dark:text-white">
              <Phone className="w-5 h-5 text-bugambilia-600 dark:text-bugambilia-400" />
              ¿Necesitas ayuda?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">Contacto directo</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-700 dark:text-gray-300">+505 2713 3456</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-700 dark:text-gray-300">reservas@hotelbugambilias.com.ni</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">Horarios de atención</h4>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  <p>Lunes a Domingo: 24 horas</p>
                  <p>Soporte en línea disponible</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
