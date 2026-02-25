import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Wine, Percent } from "lucide-react";
import Image from "next/image";

const offers = [
  {
    name: "Paquete Romántico",
    price: "$390",
    description: "La experiencia perfecta para parejas",
    includes: [
      "Decoración con pétalos y velas",
      "Mini pastel especial",
      "Café de cortesía",
    ],
    icon: Heart,
    image: "/placeholder.svg?height=250&width=350",
  },
  {
    name: "Paquete Vino & Snacks",
    price: "$495",
    description: "Disfruta de una velada gourmet",
    includes: [
      "Canapés artesanales",
      "Selección de quesos finos",
      "Botella de vino tinto premium",
    ],
    icon: Wine,
    image: "/placeholder.svg?height=250&width=350",
  },
];

export default function SpecialOffersSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Ofertas Especiales
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Vive experiencias únicas con nuestros paquetes especialmente
            diseñados para ti.
          </p>

          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full">
            <Percent className="w-5 h-5" />
            <span className="font-semibold">
              Reserva directa y accede a tarifas preferenciales
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {offers.map((offer, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 border-primary/20"
            >
              <div className="relative h-48">
                <Image
                  src={offer.image || "/placeholder.svg"}
                  alt={offer.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <offer.icon className="w-6 h-6 text-white" />
                  <Badge className="bg-primary text-primary-foreground">
                    {offer.price}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl text-gray-800">
                  {offer.name}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {offer.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="space-y-2 mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Incluye:</h4>
                  {offer.includes.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>

                <Button className="w-full">
                  Reservar paquete
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
