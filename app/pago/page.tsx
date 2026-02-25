import type { Metadata } from "next"
import Header from "@/components/header"
import PaymentProcess from "@/components/payment-process"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Proceso de Pago - Hotel Bugambilias",
  description: "Completa tu reserva de forma segura en Hotel Bugambilias",
}

export default function PagoPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <PaymentProcess />
      <Footer />
    </main>
  )
}
