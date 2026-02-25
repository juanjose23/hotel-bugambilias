import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const team = [
  {
    name: "María Elena Martínez",
    role: "Directora General",
    description: "Fundadora y alma del hotel, con más de 35 años dedicados a la hospitalidad nicaragüense.",
    image: "/placeholder.svg?height=300&width=300&text=María+Elena",
  },
  {
    name: "Carlos Martínez",
    role: "Gerente de Operaciones",
    description: "Especialista en turismo sostenible, garantiza la excelencia en cada servicio del hotel.",
    image: "/placeholder.svg?height=300&width=300&text=Carlos",
  },
  {
    name: "Ana Lucía Herrera",
    role: "Chef Ejecutiva",
    description: "Maestra de la cocina nicaragüense, combina tradición y modernidad en cada platillo.",
    image: "/placeholder.svg?height=300&width=300&text=Ana+Lucía",
  },
  {
    name: "Roberto Sánchez",
    role: "Concierge Principal",
    description: "Experto en la región de Estelí, ayuda a los huéspedes a descubrir los tesoros locales.",
    image: "/placeholder.svg?height=300&width=300&text=Roberto",
  },
]

export default function AboutTeam() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-bugambilia-100 dark:bg-bugambilia-900/30 text-bugambilia-700 dark:text-bugambilia-300 border-bugambilia-200 dark:border-bugambilia-700">
            🌺 Nuestro Equipo
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Las personas detrás de
            <span className="block text-bugambilia-600 dark:text-bugambilia-400">la experiencia Bugambilias</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Conoce al equipo apasionado que hace posible que cada estancia en nuestro hotel sea memorable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card
              key={index}
              className="border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-800"
            >
              <div className="relative h-64">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{member.name}</h3>
                <p className="text-bugambilia-600 dark:text-bugambilia-400 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
