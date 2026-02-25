"use client";

import { Button } from "@/components/ui/button";
import { Tag, Calendar, Gift, ChevronRight, Sparkles } from "lucide-react";

const promotions = [
  {
    title: "Reserva Directa",
    benefit: "15% de Descuento",
    description:
      "Reserva directamente en nuestro sitio web y accede a tarifas preferenciales.",
    icon: Tag,
    color: "bg-bugambilia-50 dark:bg-bugambilia-900/20",
    textColor: "text-bugambilia-600 dark:text-bugambilia-400",
  },
  {
    title: "Estancia Prolongada",
    benefit: "7 noches x 6",
    description:
      "Reserva 7 noches y paga solo 6. Válido para todas nuestras suites.",
    icon: Calendar,
    color: "bg-blue-50 dark:bg-blue-900/20",
    textColor: "text-blue-600 dark:text-blue-400",
  },
  {
    title: "Pack Romántico",
    benefit: "Cena + Decoración",
    description:
      "Incluye cena privada en la terraza y decoración especial con flores.",
    icon: Gift,
    color: "bg-rose-50 dark:bg-rose-900/20",
    textColor: "text-rose-600 dark:text-rose-400",
  },
];

export default function PromotionsSection() {
  return (
    <section className="py-24 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bugambilia-50 dark:bg-bugambilia-900/30 text-bugambilia-600 dark:text-bugambilia-400 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
              <Sparkles className="w-3 h-3" />
              Ofertas Exclusivas
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tighter mb-4">
              Experiencias que valen{" "}
              <span className="text-bugambilia-gradient bg-clip-text text-transparent">
                más
              </span>
            </h2>
            <p className="text-xl text-gray-500 dark:text-gray-400 font-medium">
              Descubre promociones diseñadas para elevar tu estancia en el
              corazón de Estelí.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {promotions.map((promo, idx) => (
            <div
              key={idx}
              className="group relative p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-900 bg-white dark:bg-gray-900 shadow-sm hover:shadow-airbnb transition-airbnb hover:-translate-y-1"
            >
              <div
                className={`w-14 h-14 rounded-2xl ${promo.color} flex items-center justify-center mb-8 transition-airbnb group-hover:scale-110 group-hover:rotate-3`}
              >
                <promo.icon className={`w-6 h-6 ${promo.textColor}`} />
              </div>

              <h3 className="text-xl font-black text-gray-900 dark:text-white tracking-tight mb-2">
                {promo.title}
              </h3>
              <p
                className={`text-lg font-black ${promo.textColor} mb-4 tracking-tighter`}
              >
                {promo.benefit}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-medium mb-8">
                {promo.description}
              </p>

              <Button
                variant="ghost"
                className="w-full justify-between h-14 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-800 font-black uppercase tracking-widest text-[10px] p-0 px-6 group/btn"
              >
                Reservar esta oferta
                <ChevronRight className="w-4 h-4 transition-airbnb group-hover/btn:translate-x-1" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
