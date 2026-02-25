import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "María González",
    location: "Managua, Nicaragua",
    rating: 5,
    comment:
      "Una experiencia increíble en Estelí. El Hotel Bugambilias superó todas mis expectativas. La atención del personal es excepcional y las instalaciones están impecables. Definitivamente regresaré.",
    image: "/images/facebook-cover.jpg",
  },
  {
    name: "Carlos Mendoza",
    location: "San José, Costa Rica",
    rating: 5,
    comment:
      "Perfecto para conocer el norte de Nicaragua. La ubicación es ideal para explorar Estelí y sus alrededores. Las habitaciones son muy cómodas y el desayuno delicioso. Muy recomendado.",
    image: "/images/pool-scaled.jpg",
  },
  {
    name: "Ana Rodríguez",
    location: "Tegucigalpa, Honduras",
    rating: 5,
    comment:
      "La hospitalidad nicaragüense en su máxima expresión. Me encantó la decoración con bugambilias y la piscina es perfecta para relajarse después de un día explorando la ciudad.",
    image: "/images/terrace.jpg",
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-bugambilia-50/30 to-gray-50 dark:from-bugambilia-900/10 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Lo que dicen nuestros huéspedes
            <span className="block text-xl text-bugambilia-600 dark:text-bugambilia-400 mt-3">
              🌺 Experiencias que florecen en cada visita
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            La satisfacción de nuestros huéspedes es nuestro mayor orgullo. Lee lo que dicen sobre su experiencia en
            Hotel Bugambilias y descubre por qué somos la mejor opción en Estelí.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="relative overflow-hidden hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800 petal-shadow hover:scale-105 bugambilia-bloom"
            >
              <CardContent className="p-6">
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-bugambilia-300 dark:text-bugambilia-600 mb-4" />

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed italic">"{testimonial.comment}"</p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden petal-shadow">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 petal-shadow max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              ¿Listo para vivir tu propia experiencia?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Únete a los miles de huéspedes que han elegido Hotel Bugambilias para sus estadías en Estelí. Tu aventura
              nicaragüense te espera.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bugambilia-primary px-6 py-3 rounded-lg petal-shadow hover:scale-105 transition-all duration-300 text-white font-medium">
                🌺 Reservar ahora
              </button>
              <button className="border border-bugambilia-600 dark:border-bugambilia-400 text-bugambilia-600 dark:text-bugambilia-400 px-6 py-3 rounded-lg hover:bg-bugambilia-50 dark:hover:bg-bugambilia-900/20 transition-colors">
                Ver más reseñas
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
