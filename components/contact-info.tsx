import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Clock, Car, Wifi } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    title: "Teléfono",
    details: ["+505 2713 3456", "WhatsApp: +505 8765 4321"],
    description: "Disponible 24/7 para reservas y consultas",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@hotelbugambilias.com.ni", "reservas@hotelbugambilias.com.ni"],
    description: "Respuesta garantizada en menos de 24 horas",
  },
  {
    icon: MapPin,
    title: "Dirección",
    details: ["Centro de Estelí", "Estelí, Nicaragua"],
    description: "A 5 minutos del centro histórico",
  },
  {
    icon: Clock,
    title: "Horarios",
    details: ["Check-in: 15:00", "Check-out: 12:00"],
    description: "Recepción disponible 24 horas",
  },
]

const amenities = [
  { icon: Wifi, text: "Wi-Fi gratuito" },
  { icon: Car, text: "Estacionamiento gratuito" },
  { icon: Phone, text: "Servicio a la habitación" },
]

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <Badge className="mb-4 bg-bugambilia-100 dark:bg-bugambilia-900/30 text-bugambilia-700 dark:text-bugambilia-300 border-bugambilia-200 dark:border-bugambilia-700">
          🌺 Información de contacto
        </Badge>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Otras formas de contactarnos</h2>
      </div>

      <div className="space-y-6">
        {contactInfo.map((info, index) => (
          <Card key={index} className="border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-bugambilia-100 dark:bg-bugambilia-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-6 h-6 text-bugambilia-600 dark:text-bugambilia-400" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{info.title}</h3>
                  <div className="space-y-1 mb-2">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-900 dark:text-white font-medium">
                        {detail}
                      </p>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{info.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-gray-200 dark:border-gray-700 bg-bugambilia-50 dark:bg-bugambilia-900/10">
        <CardContent className="p-6">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Servicios incluidos</h3>
          <div className="space-y-3">
            {amenities.map((amenity, index) => (
              <div key={index} className="flex items-center gap-3">
                <amenity.icon className="w-5 h-5 text-bugambilia-600 dark:text-bugambilia-400" />
                <span className="text-gray-700 dark:text-gray-300">{amenity.text}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
        <CardContent className="p-6">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Información adicional</h3>
          <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
            <p>• Aceptamos todas las tarjetas de crédito principales</p>
            <p>• Disponemos de servicio de transporte desde el aeropuerto</p>
            <p>• Ofrecemos tours guiados por la región de Estelí</p>
            <p>• Personal bilingüe (español/inglés)</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
