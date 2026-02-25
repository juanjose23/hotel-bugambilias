import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Clock, Users } from "lucide-react";
import Image from "next/image";

const experiences = [
  {
    id: 1,
    title: "Paquete Romántico",
    description: "Decoración especial con pétalos y velas",
    price: 390,
    duration: "Toda la noche",
    maxGuests: 2,
    rating: 4.9,
    reviews: 156,
    image: "/placeholder.svg?height=250&width=350",
    includes: [
      "Decoración con pétalos",
      "Velas aromáticas",
      "Mini pastel",
      "Café de cortesía",
    ],
    category: "Romántico",
  },
  {
    id: 2,
    title: "Experiencia Vino & Snacks",
    description: "Degustación gourmet en tu habitación",
    price: 495,
    duration: "2-3 horas",
    maxGuests: 4,
    rating: 4.8,
    reviews: 89,
    image: "/placeholder.svg?height=250&width=350",
    includes: [
      "Canapés artesanales",
      "Selección de quesos",
      "Vino tinto premium",
      "Servicio personalizado",
    ],
    category: "Gourmet",
  },
  {
    id: 3,
    title: "Relajación Total",
    description: "Spa y bienestar en tu habitación",
    price: 650,
    duration: "4 horas",
    maxGuests: 2,
    rating: 5.0,
    reviews: 67,
    image: "/placeholder.svg?height=250&width=350",
    includes: [
      "Masaje de pareja",
      "Aromaterapia",
      "Té relajante",
      "Música ambiental",
    ],
    category: "Bienestar",
  },
];

export default function ExperiencesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Experiencias únicas
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            Vive momentos especiales con nuestros paquetes diseñados para hacer
            tu estancia inolvidable.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((experience) => (
            <Card
              key={experience.id}
              className="overflow-hidden border-0 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={experience.image || "/placeholder.svg"}
                  alt={experience.title}
                  fill
                  className="object-cover"
                />
                <Badge className="absolute top-3 left-3 bg-white/90 text-gray-800 hover:bg-white">
                  {experience.category}
                </Badge>
              </div>

              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {experience.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {experience.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-1 ml-2">
                    <Star className="w-4 h-4 fill-current text-gray-900" />
                    <span className="text-sm font-medium">
                      {experience.rating}
                    </span>
                    <span className="text-sm text-gray-500">
                      ({experience.reviews})
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{experience.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>Hasta {experience.maxGuests}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-900 mb-2">
                    Incluye:
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {experience.includes.slice(0, 2).map((item, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="text-xs bg-gray-100 text-gray-700"
                      >
                        {item}
                      </Badge>
                    ))}
                    {experience.includes.length > 2 && (
                      <Badge
                        variant="secondary"
                        className="text-xs bg-gray-100 text-gray-700"
                      >
                        +{experience.includes.length - 2} más
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-1">
                    <span className="text-lg font-semibold text-gray-900">
                      ${experience.price}
                    </span>
                    <span className="text-sm text-gray-600">
                      por experiencia
                    </span>
                  </div>

                  <Button
                    size="sm"
                  >
                    Reservar
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-primary/5 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Haz tu experiencia a la medida
          </h3>
          <p className="text-gray-600 mb-4">
            Escríbenos y personaliza cada detalle para celebraciones, escapadas
            románticas o bienestar.
          </p>
          <Button>
            Consultar disponibilidad
          </Button>
        </div>
      </div>
    </section>
  );
}
