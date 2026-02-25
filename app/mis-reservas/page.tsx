import type { Metadata } from "next"
import Header from "@/components/header"
import MyBookings from "@/components/my-bookings"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Mis Reservas - Hotel Bugambilias",
  description: "Gestiona tus reservas en Hotel Bugambilias",
}

export default function MisReservasPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <MyBookings />
      <Footer />
    </main>
  )
}
