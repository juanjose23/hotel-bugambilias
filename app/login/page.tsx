import type { Metadata } from "next"
import Header from "@/components/header"
import LoginForm from "@/components/login-form"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Iniciar Sesión - Hotel Bugambilias",
  description: "Inicia sesión en tu cuenta de Hotel Bugambilias para gestionar tus reservas.",
}

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <LoginForm />
      <Footer />
    </main>
  )
}
