import type { Metadata } from "next"
import Header from "@/components/header"
import RegisterForm from "@/components/register-form"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Registro - Hotel Bugambilias",
  description: "Crea tu cuenta en Hotel Bugambilias y disfruta de beneficios exclusivos.",
}

export default function RegistroPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <RegisterForm />
      <Footer />
    </main>
  )
}
