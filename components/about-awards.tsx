import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Star, Heart, Leaf } from "lucide-react"

const awards = [
  {
    icon: Award,
    title: "Mejor Hotel Boutique 2023",
    organization: "Cámara de Turismo de Nicaragua",
    year: "2023",
    description: "Reconocimiento por excelencia en servicio y hospitalidad.",
  },
  {
    icon: Star,
    title: "Certificación de Calidad",
    organization: "Instituto Nicaragüense de Turismo",
    year: "2022",
    description: "Certificación por mantener altos estándares de calidad.",
  },
  {
    icon: Heart,
    title: "Premio a la Hospitalidad",
    organization: "Asociación Hotelera de Estelí",
    year: "2021",
    description: "Por el trato excepcional a huéspedes nacionales e internacionales.",
  },
  {
    icon: Leaf,
    title: "Hotel Sostenible",
    organization: "Green Hotels Nicaragua",
    year: "2020",
    description: "Reconocimiento por prácticas ambientalmente responsables.",
  },
]

export default function AboutAwards() {
  return (
    <section className="py-16 lg:py-24 bg-bugambilia-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-bugambilia-600 text-white border-0">🏆 Reconocimientos</Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Premios y<span className="block text-bugambilia-600 dark:text-bugambilia-400">Certificaciones</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Nuestro compromiso con la excelencia ha sido reconocido por diversas organizaciones del sector turístico.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {awards.map((award, index) => (
            <Card
              key={index}
              className="border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-800"
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-bugambilia-100 dark:bg-bugambilia-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <award.icon className="w-8 h-8 text-bugambilia-600 dark:text-bugambilia-400" />
                </div>
                <div className="text-sm text-bugambilia-600 dark:text-bugambilia-400 font-medium mb-2">
                  {award.year}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{award.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{award.organization}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">{award.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
