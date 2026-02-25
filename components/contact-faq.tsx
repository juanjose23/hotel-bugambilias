import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "¿Cuáles son los horarios de check-in y check-out?",
    answer:
      "El check-in es a partir de las 15:00 horas y el check-out hasta las 12:00 horas. Ofrecemos servicio de early check-in y late check-out sujeto a disponibilidad.",
  },
  {
    question: "¿Ofrecen transporte desde el aeropuerto?",
    answer:
      "Sí, ofrecemos servicio de transporte desde el aeropuerto de Managua. El costo es de $45 USD por trayecto y debe reservarse con al menos 24 horas de anticipación.",
  },
  {
    question: "¿Aceptan mascotas?",
    answer:
      "Aceptamos mascotas pequeñas en habitaciones seleccionadas con un cargo adicional de $15 USD por noche. Es necesario notificar al momento de la reserva.",
  },
  {
    question: "¿Qué métodos de pago aceptan?",
    answer:
      "Aceptamos efectivo (córdobas y dólares), tarjetas de crédito (Visa, MasterCard, American Express) y transferencias bancarias.",
  },
  {
    question: "¿Tienen Wi-Fi gratuito?",
    answer:
      "Sí, ofrecemos Wi-Fi gratuito de alta velocidad en todas las áreas del hotel, incluyendo habitaciones, lobby, restaurante y áreas comunes.",
  },
  {
    question: "¿Cuál es la política de cancelación?",
    answer:
      "Las cancelaciones son gratuitas hasta 24 horas antes de la fecha de llegada. Para cancelaciones tardías se cobra el equivalente a una noche.",
  },
  {
    question: "¿Ofrecen tours por la región?",
    answer:
      "Sí, organizamos tours por los principales atractivos de Estelí incluyendo fincas de café, reservas naturales y sitios históricos. Consulta en recepción.",
  },
  {
    question: "¿El hotel es accesible para personas con discapacidad?",
    answer:
      "Contamos con habitaciones y áreas comunes adaptadas para personas con movilidad reducida, incluyendo rampas y baños accesibles.",
  },
]

export default function ContactFAQ() {
  return (
    <section className="py-16 lg:py-24 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-bugambilia-100 dark:bg-bugambilia-900/30 text-bugambilia-700 dark:text-bugambilia-300 border-bugambilia-200 dark:border-bugambilia-700">
            ❓ Preguntas frecuentes
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Preguntas frecuentes</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Encuentra respuestas a las preguntas más comunes sobre nuestros servicios y políticas.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-gray-200 dark:border-gray-700">
                    <AccordionTrigger className="text-left text-gray-900 dark:text-white hover:text-bugambilia-600 dark:hover:text-bugambilia-400">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
