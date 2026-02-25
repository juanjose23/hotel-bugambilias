import type { Metadata } from "next"
import Header from "@/components/header"
import RoomsHero from "@/components/rooms-hero"
import RoomsGrid from "@/components/rooms-grid-full"
import RoomAmenities from "@/components/room-amenities"
import BookingSection from "@/components/booking-section"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Habitaciones - Hotel Bugambilias",
  description:
    "Descubre nuestras cómodas habitaciones con todas las amenidades. Desde habitaciones dobles hasta suites de lujo.",
}

export default function HabitacionesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <RoomsHero />
      <RoomsGrid />
      <RoomAmenities />
      <BookingSection />
      <Footer />
    </main>
  )
}
