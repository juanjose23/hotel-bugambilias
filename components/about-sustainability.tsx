import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, Droplets, Recycle, Users } from "lucide-react"

const initiatives = [
  {
    icon: Leaf,
    title: "Energía Renovable",
    description:
      "Utilizamos paneles solares para el 60% de nuestro consumo energético, reduciendo nuestra huella de carbono.",
  },
  {
    icon: Droplets,
    title: "Conservación del Agua",
    description: "Sistema de recolección de agua lluvia y tratamiento de aguas grises para riego de jardines.",
  },
  {
    icon: Recycle,
    title: "Gestión de Residuos",
    description: "Programa integral de reciclaje y compostaje, reduciendo un 80% los residuos enviados a vertederos.",
  },
  {
    icon: Users,
    title: "Comunidad Local",
    description: "Empleamos personal local y compramos productos de agricultores y artesanos de la región de Estelí.",
  },
]

export default function AboutSustainability() {
  return (
    <section className="py-16 lg:py-24 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-200 dark:border-green-700">
            🌱 Sostenibilidad
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Compromiso con el
            <span className="block text-green-600 dark:text-green-400">medio ambiente</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            En Hotel Bugambilias creemos que el turismo responsable es clave para preservar la belleza natural de
            Nicaragua para las futuras generaciones.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {initiatives.map((initiative, index) => (
            <Card
              key={index}
              className="border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-900"
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <initiative.icon className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{initiative.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{initiative.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
