import { Card, CardContent } from "@/components/ui/card"
import { Heart, Shield, Leaf, Users, Star, Globe } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Hospitalidad Auténtica",
    description:
      "Tratamos a cada huésped como familia, ofreciendo un servicio cálido y personalizado que refleja la esencia nicaragüense.",
  },
  {
    icon: Shield,
    title: "Calidad y Confianza",
    description: "Mantenemos los más altos estándares de calidad en todas nuestras instalaciones y servicios.",
  },
  {
    icon: Leaf,
    title: "Sostenibilidad",
    description: "Comprometidos con el medio ambiente y el desarrollo sostenible de nuestra comunidad en Estelí.",
  },
  {
    icon: Users,
    title: "Comunidad Local",
    description: "Apoyamos a los productores y artesanos locales, promoviendo el desarrollo económico de la región.",
  },
  {
    icon: Star,
    title: "Excelencia",
    description: "Buscamos la perfección en cada detalle para superar las expectativas de nuestros huéspedes.",
  },
  {
    icon: Globe,
    title: "Cultura Nicaragüense",
    description: "Compartimos la riqueza cultural de Nicaragua, desde nuestra gastronomía hasta nuestras tradiciones.",
  },
]

export default function AboutValues() {
  return (
    <section className="py-16 lg:py-24 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Nuestros Valores
            <span className="block text-lg md:text-xl text-bugambilia-600 dark:text-bugambilia-400 mt-2 font-normal">
              🌺 Lo que nos hace únicos
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Estos valores guían cada decisión que tomamos y cada servicio que ofrecemos en Hotel Bugambilias.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card
              key={index}
              className="border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-900"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-bugambilia-100 dark:bg-bugambilia-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-bugambilia-600 dark:text-bugambilia-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
