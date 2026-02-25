import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "María González",
    location: "Ciudad de México",
    date: "Hace 2 semanas",
    rating: 5,
    comment:
      "Una experiencia increíble en Hotel Bugambilias. El servicio fue excepcional y las habitaciones muy cómodas. La piscina es hermosa y el restaurante tiene comida deliciosa. Definitivamente regresaré.",
    avatar: "/placeholder.svg?height=60&width=60",
    helpful: 12,
    roomType: "Junior Suite",
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    location: "Guadalajara",
    date: "Hace 1 mes",
    rating: 5,
    comment:
      "El paquete romántico fue perfecto para nuestra luna de miel. Los detalles y la atención del personal hicieron nuestra estancia memorable.",
    avatar: "/placeholder.svg?height=60&width=60",
    helpful: 8,
    roomType: "Habitación Doble",
  },
  {
    id: 3,
    name: "Ana Martínez",
    location: "Monterrey",
    date: "Hace 3 semanas",
    rating: 5,
    comment:
      "Excelente ubicación y servicios de primera. La Master Suite es espaciosa y elegante. El personal es muy atento y profesional.",
    avatar: "/placeholder.svg?height=60&width=60",
    helpful: 15,
    roomType: "Master Suite",
  },
  {
    id: 4,
    name: "Roberto Silva",
    location: "Puebla",
    date: "Hace 1 semana",
    rating: 5,
    comment:
      "Calidad-precio excelente. Las instalaciones están impecables y el servicio al cliente es outstanding. Muy recomendado para familias.",
    avatar: "/placeholder.svg?height=60&width=60",
    helpful: 6,
    roomType: "Junior Suite",
  },
];

export default function ReviewsSection() {
  const averageRating = 4.9;
  const totalReviews = 342;

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-2">
              <Star className="w-6 h-6 fill-current text-gray-900" />
              <span className="text-3xl font-bold text-gray-900">
                {averageRating}
              </span>
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-900">Excelente</p>
              <p className="text-gray-600">{totalReviews} reseñas</p>
            </div>
          </div>

          {/* Rating Breakdown */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
            {[
              { label: "Limpieza", rating: 4.9 },
              { label: "Comunicación", rating: 4.8 },
              { label: "Llegada", rating: 4.9 },
              { label: "Ubicación", rating: 4.7 },
              { label: "Calidad-precio", rating: 4.8 },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <p className="text-sm font-medium text-gray-900 mb-1">
                  {item.label}
                </p>
                <div className="flex items-center justify-center gap-1">
                  <Star className="w-4 h-4 fill-current text-gray-900" />
                  <span className="text-sm font-semibold">{item.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((review) => (
            <Card key={review.id} className="border-0 shadow-sm bg-white">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage
                      src={review.avatar || "/placeholder.svg"}
                      alt={review.name}
                    />
                    <AvatarFallback>
                      {review.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-semibold text-gray-900">
                        {review.name}
                      </h4>
                      <div className="flex items-center gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-current text-gray-900"
                          />
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                      <span>{review.location}</span>
                      <span>•</span>
                      <span>{review.date}</span>
                    </div>

                    <Badge
                      variant="secondary"
                      className="text-xs bg-gray-100 text-gray-700 mb-3"
                    >
                      {review.roomType}
                    </Badge>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-4">
                  {review.comment}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-600">
                  <button className="hover:text-gray-900 transition-colors">
                    👍 Útil ({review.helpful})
                  </button>
                  <button className="hover:text-gray-900 transition-colors">
                    Reportar
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="text-gray-900 font-medium hover:underline">
            Mostrar las {totalReviews} reseñas
          </button>
        </div>
      </div>
    </section>
  );
}
