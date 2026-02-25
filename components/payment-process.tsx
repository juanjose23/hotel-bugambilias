"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import {
  CreditCard,
  ShieldCheck,
  Lock,
  CheckCircle,
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Users,
  ChevronLeft,
  Star,
  HelpCircle,
  Shield,
  Clock,
  Briefcase,
  Smartphone,
  Info,
  Gift,
  Car,
  HeartPulse
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const steps = [
  { id: 1, title: "Detalles" },
  { id: 2, title: "Servicios" },
  { id: 3, title: "Pago" },
  { id: 4, title: "Reserva" },
]

const EXTRAS = [
  {
    id: "romantic",
    name: "Pack Romántico",
    description: "Pétalos, espumoso y chocolates artesanales en tu habitación.",
    price: 45,
    icon: Gift,
    image: "/images/terrace.jpg"
  },
  {
    id: "transfer",
    name: "Traslado Privado",
    description: "Transporte exclusivo desde el Aeropuerto de Managua (MGA).",
    price: 85,
    icon: Car,
    image: "/images/service-pool.png"
  },
  {
    id: "massage",
    name: "Masaje de Bugambilia",
    description: "Sesión de 60 min con aceites esenciales orgánicos.",
    price: 60,
    icon: HeartPulse,
    image: "/images/pool-scaled.jpg"
  },
  {
    id: "tour",
    name: "Tour del Tabaco",
    description: "Recorrido privado por las fábricas de puros más icónicas.",
    price: 35,
    icon: Briefcase,
    image: "/images/pool-front-view.jpg"
  }
]

export default function PaymentProcess() {
  const [currentStep, setCurrentStep] = useState(1)
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [selectedServices, setSelectedServices] = useState<string[]>([])

  const toggleService = (id: string) => {
    setSelectedServices(prev =>
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    )
  }

  // Example booking data
  const bookingData = {
    room: "Habitación Doble Deluxe",
    location: "Estelí, Nicaragua",
    checkIn: "22 May 2024",
    checkOut: "24 May 2024",
    nights: 2,
    guests: 2,
    roomPrice: 390.00,
    subtotal: 780.00,
    taxes: 124.80,
    serviceFee: 45.00,
    total: 949.80,
    image: "/images/group-room.jpg",
    rating: 4.98
  }

  const extrasTotal = selectedServices.reduce((sum, id) => {
    const extra = EXTRAS.find(e => e.id === id)
    return sum + (extra?.price || 0)
  }, 0)

  const finalTotal = bookingData.total + extrasTotal

  // Scroll to top on step change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [currentStep])

  return (
    <main className="min-h-screen bg-gray-50/50 dark:bg-gray-950 pb-32 overflow-x-hidden">
      {/* Premium Trust-Focused Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-bugambilia-600 flex items-center justify-center text-white font-black text-xs transition-airbnb group-hover:scale-110">HB</div>
            <span className="text-xl font-black tracking-tighter text-gray-900 dark:text-white hidden sm:block">Bugambilias</span>
          </Link>

          {/* Elegant Stepper */}
          <div className="flex items-center gap-1.5 xs:gap-2 md:gap-10">
            {steps.map((step, idx) => {
              const isActive = currentStep === step.id
              const isCompleted = currentStep > step.id
              return (
                <div key={step.id} className="flex items-center gap-1 xs:gap-2">
                  <div className={`w-6 h-6 xs:w-7 xs:h-7 rounded-full flex items-center justify-center text-[9px] xs:text-[10px] font-black transition-airbnb ${isActive || isCompleted
                    ? "bg-black text-white dark:bg-white dark:text-black"
                    : "bg-gray-100 text-gray-400 dark:bg-gray-800"
                    }`}>
                    {isCompleted ? <CheckCircle className="w-3 h-3 xs:w-3.5 xs:h-3.5" /> : step.id}
                  </div>
                  <span className={`text-[9px] xs:text-[10px] font-black uppercase tracking-widest hidden sm:inline transition-airbnb ${isActive ? "text-black dark:text-white" : "text-gray-400"}`}>
                    {step.title}
                  </span>
                  {idx < steps.length - 1 && <div className="hidden sm:block w-4 h-[1px] bg-gray-200 dark:bg-gray-700" />}
                </div>
              )
            })}
          </div>

          {/* Desktop Security Indicators */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 border border-emerald-100 dark:border-emerald-800">
              <Lock className="w-3 h-3" />
              <span className="text-[9px] font-black uppercase tracking-widest">Pago Seguro</span>
            </div>
            <div className="flex items-center gap-1.5 text-gray-400">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-[9px] font-black uppercase tracking-widest">Reserva Garantizada</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 md:px-8 pt-12">
        <div className="max-w-6xl mx-auto">

          {/* Back Button */}
          {currentStep < 4 && (
            <button
              onClick={() => currentStep > 1 && setCurrentStep(currentStep - 1)}
              className="group flex items-center gap-2 mb-10 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-black dark:hover:text-white transition-airbnb"
            >
              <div className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center group-hover:border-black transition-airbnb">
                <ChevronLeft className="w-4 h-4" />
              </div>
              {currentStep === 1 ? "Volver a la habitación" : "Paso anterior"}
            </button>
          )}

          <div className="grid lg:grid-cols-12 gap-12 xl:gap-20">
            {/* Main Content Area */}
            <div className={`lg:col-span-7 ${currentStep === 3 ? "lg:col-span-12" : ""}`}>

              {currentStep === 1 && (
                <div className="animate-in fade-in slide-in-from-bottom-6 duration-700">
                  <header className="mb-12">
                    <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tighter mb-4 leading-none">
                      Tu reserva casi está <span className="text-bugambilia-gradient bg-clip-text text-transparent italic">lista</span>
                    </h1>
                    <p className="text-lg text-gray-500 font-medium">Revisa los detalles antes de confirmar.</p>
                  </header>

                  <section className="space-y-12">
                    {/* Your Trip Summary Container */}
                    <div className="p-5 sm:p-8 md:p-10 rounded-[2.5rem] bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-airbnb">
                      <div className="flex items-center justify-between mb-8">
                        <h2 className="text-xl font-black text-gray-900 dark:text-white tracking-tight">Tu viaje</h2>
                        <button className="text-[10px] font-black uppercase tracking-widest text-bugambilia-600 underline underline-offset-4 hover:opacity-70">Cambiar</button>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div>
                          <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Fechas</p>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-bugambilia-600" />
                            <span className="text-sm font-bold text-gray-900 dark:text-white">{bookingData.checkIn} – {bookingData.checkOut}</span>
                          </div>
                        </div>
                        <div>
                          <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Huéspedes</p>
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-bugambilia-600" />
                            <span className="text-sm font-bold text-gray-900 dark:text-white">{bookingData.guests} Personas</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Contact Information Form */}
                    <div className="p-5 sm:p-8 md:p-10 rounded-[2.5rem] bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-airbnb">
                      <h2 className="text-xl font-black text-gray-900 dark:text-white tracking-tight mb-8">Información de contacto</h2>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2.5">
                          <Label className="text-[10px] font-black uppercase tracking-widest ml-1 text-gray-500 dark:text-gray-400">Nombre</Label>
                          <Input className="h-14 rounded-2xl border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 focus:bg-white dark:focus:bg-gray-800 focus:ring-1 focus:ring-bugambilia-100 dark:focus:ring-bugambilia-900/50 transition-airbnb placeholder:text-gray-300 dark:placeholder:text-gray-700" placeholder="Juan" />
                        </div>
                        <div className="space-y-2.5">
                          <Label className="text-[10px] font-black uppercase tracking-widest ml-1 text-gray-500 dark:text-gray-400">Apellido</Label>
                          <Input className="h-14 rounded-2xl border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 focus:bg-white dark:focus:bg-gray-800 focus:ring-1 focus:ring-bugambilia-100 dark:focus:ring-bugambilia-900/50 transition-airbnb placeholder:text-gray-300 dark:placeholder:text-gray-700" placeholder="Rodríguez" />
                        </div>
                        <div className="md:col-span-2 space-y-2.5">
                          <Label className="text-[10px] font-black uppercase tracking-widest ml-1 text-gray-500 dark:text-gray-400">Correo electrónico</Label>
                          <Input className="h-14 rounded-2xl border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 focus:bg-white dark:focus:bg-gray-800 focus:ring-1 focus:ring-bugambilia-100 dark:focus:ring-bugambilia-900/50 transition-airbnb placeholder:text-gray-300 dark:placeholder:text-gray-700" placeholder="juan@ejemplo.com" />
                        </div>
                        <div className="md:col-span-2 space-y-2.5">
                          <Label className="text-[10px] font-black uppercase tracking-widest ml-1 text-gray-500 dark:text-gray-400">Teléfono</Label>
                          <Input className="h-14 rounded-2xl border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 focus:bg-white dark:focus:bg-gray-800 focus:ring-1 focus:ring-bugambilia-100 dark:focus:ring-bugambilia-900/50 transition-airbnb placeholder:text-gray-300 dark:placeholder:text-gray-700" placeholder="+505 0000 0000" />
                        </div>
                      </div>
                    </div>

                    {/* Special Requests Container */}
                    <div className="p-5 sm:p-8 md:p-10 rounded-[2.5rem] bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-airbnb">
                      <div className="flex items-center gap-2 mb-6">
                        <Briefcase className="w-5 h-5 text-gray-400" />
                        <h2 className="text-xl font-black text-gray-900 dark:text-white tracking-tight">Peticiones especiales</h2>
                      </div>
                      <p className="text-xs text-gray-400 font-medium uppercase tracking-widest mb-6 border-l-2 border-bugambilia-600 pl-4 py-1">
                        ¿Llegas tarde? ¿Eres alérgico a algo? Cuéntanos.
                      </p>
                      <textarea
                        className="w-full h-32 rounded-3xl border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 p-6 text-sm focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-bugambilia-100 dark:focus:ring-bugambilia-900/50 transition-airbnb resize-none placeholder:text-gray-300 dark:placeholder:text-gray-700"
                        placeholder="Ej. Prefiero una habitación en la planta alta..."
                      ></textarea>
                    </div>

                    {/* Step Action */}
                    <div className="flex flex-col sm:flex-row items-center gap-6 pt-6">
                      <Button
                        onClick={() => setCurrentStep(2)}
                        className="w-full sm:w-auto h-16 px-12 rounded-2xl bg-black dark:bg-white text-white dark:text-black font-black uppercase tracking-[0.2em] text-[10px] hover:scale-105 active:scale-95 transition-airbnb shadow-xl"
                      >
                        Continuar a servicios
                      </Button>
                      <div className="flex items-center gap-2 text-gray-400">
                        <Lock className="w-3.5 h-3.5" />
                        <span className="text-[9px] font-black uppercase tracking-widest">Seguro y Privado</span>
                      </div>
                    </div>
                  </section>
                </div>
              )}

              {currentStep === 2 && (
                <div className="animate-in fade-in slide-in-from-bottom-6 duration-700">
                  <header className="mb-12">
                    <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tighter mb-4 leading-none">
                      Mejora tu <span className="text-bugambilia-gradient bg-clip-text text-transparent italic">estancia</span>
                    </h1>
                    <p className="text-lg text-gray-500 font-medium">Añade experiencias exclusivas a tu reserva.</p>
                  </header>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {EXTRAS.map((extra) => (
                      <div
                        key={extra.id}
                        onClick={() => toggleService(extra.id)}
                        className={`group relative flex flex-col p-6 rounded-[2.5rem] border-2 transition-airbnb cursor-pointer overflow-hidden ${selectedServices.includes(extra.id)
                          ? "border-black dark:border-white bg-white dark:bg-gray-800 shadow-xl"
                          : "border-gray-100 dark:border-gray-800 bg-white/50 dark:bg-gray-900/60 hover:border-gray-200 dark:hover:border-gray-700"
                          }`}
                      >
                        <div className="flex justify-between items-start mb-6">
                          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-airbnb ${selectedServices.includes(extra.id) ? "bg-black text-white dark:bg-white dark:text-black" : "bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-400"}`}>
                            <extra.icon className="w-6 h-6" />
                          </div>
                          <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-airbnb ${selectedServices.includes(extra.id) ? "bg-black dark:bg-white border-black dark:border-white text-white dark:text-black" : "border-gray-200 dark:border-gray-700"}`}>
                            {selectedServices.includes(extra.id) && <CheckCircle className="w-4 h-4 fill-current" />}
                          </div>
                        </div>

                        <h3 className="text-lg font-black text-gray-900 dark:text-white mb-2">{extra.name}</h3>
                        <p className="text-xs text-gray-500 dark:text-gray-300 font-medium leading-relaxed mb-6">{extra.description}</p>

                        <div className="mt-auto flex items-center justify-between">
                          <span className="text-sm font-black text-gray-900 dark:text-white">${extra.price}</span>
                          <span className="text-[10px] font-black uppercase tracking-widest text-bugambilia-600">
                            {selectedServices.includes(extra.id) ? "Añadido" : "Añadir"}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-6 pt-12">
                    <Button
                      onClick={() => setCurrentStep(3)}
                      className="w-full sm:w-auto h-16 px-12 rounded-2xl bg-bugambilia-gradient text-white font-black uppercase tracking-[0.2em] text-[10px] hover:scale-105 active:scale-95 transition-airbnb shadow-xl border-none"
                    >
                      Continuar al pago
                    </Button>
                    <button
                      onClick={() => setCurrentStep(3)}
                      className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-black transition-colors"
                    >
                      Saltar por ahora
                    </button>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="animate-in fade-in slide-in-from-bottom-6 duration-700">
                  <header className="mb-12">
                    <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tighter mb-4 leading-none">
                      Detalles del <span className="text-bugambilia-gradient bg-clip-text text-transparent italic">pago</span>
                    </h1>
                    <p className="text-lg text-gray-500 font-medium">Transacción encriptada de 256 bits.</p>
                  </header>

                  <div className="space-y-10">
                    {/* Payment Method Selector */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {["card", "paypal"].map((method) => (
                        <div
                          key={method}
                          onClick={() => setPaymentMethod(method)}
                          className={`group relative p-5 sm:p-8 rounded-[2rem] border-2 transition-airbnb cursor-pointer overflow-hidden ${paymentMethod === method
                            ? "border-black dark:border-white bg-white dark:bg-gray-800 shadow-lg"
                            : "border-gray-100 dark:border-gray-800 bg-white/50 dark:bg-gray-900/60 hover:border-gray-200 dark:hover:border-gray-700"
                            }`}
                        >
                          {paymentMethod === method && (
                            <div className="absolute top-4 right-4 animate-in zoom-in">
                              <CheckCircle className="w-4 h-4 text-black dark:text-white fill-current" />
                            </div>
                          )}
                          <div className={`w-10 h-10 rounded-xl mb-4 flex items-center justify-center transition-airbnb ${paymentMethod === method ? "bg-black text-white dark:bg-white dark:text-black" : "bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-500"}`}>
                            {method === "card" ? <CreditCard className="w-5 h-5" /> : <Smartphone className="w-5 h-5" />}
                          </div>
                          <span className={`text-[10px] font-black uppercase tracking-widest ${paymentMethod === method ? "text-black dark:text-white" : "text-gray-400 dark:text-gray-500"}`}>
                            {method === "card" ? "Tarjeta" : "PayPal / Digital"}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Card Details Card */}
                    {paymentMethod === "card" && (
                      <div className="p-5 sm:p-8 md:p-10 rounded-[2.5rem] bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-airbnb">
                        <div className="grid grid-cols-1 gap-6">
                          <div className="space-y-2.5">
                            <Label className="text-[10px] font-black uppercase tracking-widest ml-1 text-gray-500 dark:text-gray-400">Titular de la tarjeta</Label>
                            <Input className="h-14 rounded-2xl border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 focus:bg-white dark:focus:bg-gray-800 focus:ring-1 focus:ring-bugambilia-100 dark:focus:ring-bugambilia-900/50 transition-airbnb placeholder:text-gray-300 dark:placeholder:text-gray-700" placeholder="JUAN PEREZ" />
                          </div>
                          <div className="space-y-2.5">
                            <Label className="text-[10px] font-black uppercase tracking-widest ml-1 text-gray-500 dark:text-gray-400">Número de tarjeta</Label>
                            <div className="relative">
                              <Input className="h-14 rounded-2xl border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 focus:bg-white dark:focus:bg-gray-800 focus:ring-1 focus:ring-bugambilia-100 dark:focus:ring-bugambilia-900/50 transition-airbnb pr-12 placeholder:text-gray-300 dark:placeholder:text-gray-700" placeholder="0000 0000 0000 0000" />
                              <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-1 opacity-20 dark:opacity-40">
                                <CreditCard className="w-5 h-5 dark:text-white" />
                              </div>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-2.5">
                              <Label className="text-[10px] font-black uppercase tracking-widest ml-1 text-gray-500 dark:text-gray-400">Expiración</Label>
                              <Input className="h-14 rounded-2xl border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 focus:bg-white dark:focus:bg-gray-800 focus:ring-1 focus:ring-bugambilia-100 dark:focus:ring-bugambilia-900/50 transition-airbnb placeholder:text-gray-300 dark:placeholder:text-gray-700" placeholder="MM / YY" />
                            </div>
                            <div className="space-y-2.5">
                              <Label className="text-[10px] font-black uppercase tracking-widest ml-1 text-gray-500 dark:text-gray-400">CVC</Label>
                              <Input className="h-14 rounded-2xl border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 focus:bg-white dark:focus:bg-gray-800 focus:ring-1 focus:ring-bugambilia-100 dark:focus:ring-bugambilia-900/50 transition-airbnb placeholder:text-gray-300 dark:placeholder:text-gray-700" placeholder="123" />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Cancellation Policy Container */}
                    <div className="p-8 rounded-3xl bg-bugambilia-50/30 dark:bg-bugambilia-900/10 border border-bugambilia-100 dark:border-bugambilia-800/50">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center shrink-0 shadow-sm border border-bugambilia-100">
                          <Clock className="w-5 h-5 text-bugambilia-600" />
                        </div>
                        <div>
                          <h4 className="text-sm font-black text-gray-900 dark:text-white mb-1 uppercase tracking-tighter">Cancelación Gratuita</h4>
                          <p className="text-xs text-gray-500 font-medium leading-relaxed">
                            Flexibilidad total. Puedes cancelar sin cargos hasta 24 horas antes de tu llegada.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Action & Terms */}
                    <div className="pt-6">
                      <div className="flex items-start gap-4 mb-10">
                        <Checkbox id="terms_agree" className="mt-1 border-gray-200" />
                        <Label htmlFor="terms_agree" className="text-[10px] text-gray-400 font-black leading-relaxed uppercase tracking-widest cursor-pointer select-none">
                          He leído y acepto los <Link href="#" className="text-gray-900 dark:text-white underline">términos de servicio</Link> y las políticas de privacidad.
                        </Label>
                      </div>

                      <Button
                        onClick={() => setCurrentStep(4)}
                        className="w-full sm:w-auto h-20 px-16 rounded-[2rem] bg-bugambilia-gradient text-white font-black uppercase tracking-[0.3em] text-xs hover:scale-105 active:scale-95 transition-airbnb shadow-2xl"
                      >
                        Confirmar Reserva • ${finalTotal.toFixed(2)}
                      </Button>

                      <div className="mt-10 flex items-center gap-6 opacity-30">
                        <div className="h-6 w-12 bg-gray-400/20 rounded-md" />
                        <div className="h-6 w-12 bg-gray-400/20 rounded-md" />
                        <div className="h-6 w-12 bg-gray-400/20 rounded-md" />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 4 && (
                <div className="max-w-3xl mx-auto py-12 animate-in fade-in zoom-in-95 duration-1000">
                  <div className="text-center mb-16">
                    <div className="relative inline-block mb-10">
                      <div className="w-28 h-28 bg-emerald-50 dark:bg-emerald-900/20 rounded-[2.5rem] flex items-center justify-center mx-auto shadow-2xl transform hover:rotate-6 transition-airbnb">
                        <CheckCircle className="w-14 h-14 text-emerald-600" />
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-bugambilia-600 rounded-2xl flex items-center justify-center text-white shadow-lg animate-bounce">
                        <Star className="w-5 h-5 fill-current" />
                      </div>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white tracking-tighter mb-6 leading-none">
                      ¡Tu refugio en Estelí <span className="text-bugambilia-gradient bg-clip-text text-transparent italic">está listo!</span>
                    </h1>
                    <p className="text-xl text-gray-500 font-medium max-w-xl mx-auto">
                      Hemos enviado los detalles de tu reserva y el código de confirmación a tu correo electrónico.
                    </p>
                  </div>

                  {/* Confirmation Details Card - Folio Style */}
                  <div className="p-5 sm:p-8 md:p-12 rounded-[2.5rem] sm:rounded-[3.5rem] bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-2xl relative overflow-hidden mb-12">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-bugambilia-50/50 dark:bg-bugambilia-900/10 rounded-bl-[100%] pointer-events-none" />

                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-8">
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-2">Reserva Número</p>
                        <h4 className="text-3xl font-black tracking-widest text-gray-900 dark:text-white">HB-382910</h4>
                      </div>
                      <div className="flex items-center gap-3 px-6 py-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl text-emerald-600 border border-emerald-100 dark:border-emerald-900">
                        <Lock className="w-4 h-4" />
                        <span className="text-xs font-black uppercase tracking-widest">Reserva Confirmada</span>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10">
                      <div className="space-y-8">
                        <div>
                          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-3">Descripción</p>
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center"><Calendar className="w-5 h-5 text-bugambilia-600" /></div>
                            <span className="text-base font-bold text-gray-900 dark:text-white">{bookingData.room}</span>
                          </div>
                        </div>
                        <div>
                          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-3">Check-In</p>
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center"><Clock className="w-5 h-5 text-bugambilia-600" /></div>
                            <span className="text-base font-bold text-gray-900 dark:text-white">22 May 2024, 15:00</span>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-8">
                        <div>
                          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-3">Huéspedes</p>
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center"><Users className="w-5 h-5 text-bugambilia-600" /></div>
                            <span className="text-base font-bold text-gray-900 dark:text-white">{bookingData.guests} Adultos</span>
                          </div>
                        </div>
                        <div>
                          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-3">Dirección</p>
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center"><MapPin className="w-5 h-5 text-bugambilia-600" /></div>
                            <span className="text-sm font-bold text-gray-900 dark:text-white leading-tight">Panamericana Norte KM 149<br />Estelí, Nicaragua</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-12 pt-12 border-t border-gray-50 dark:border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-6">
                      <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400">
                        <HelpCircle className="w-4 h-4" />
                        ¿Necesitas soporte? +505 2713 3456
                      </div>
                      <div className="flex gap-4 w-full sm:w-auto">
                        <Button
                          onClick={() => window.print()}
                          className="flex-1 sm:flex-none h-14 px-8 rounded-2xl bg-black dark:bg-white text-white dark:text-black font-black uppercase tracking-widest text-[10px] transition-airbnb shadow-lg"
                        >
                          Imprimir Folio
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <Button variant="ghost" className="h-14 px-10 rounded-2xl font-black uppercase tracking-[0.4em] text-[10px] text-gray-500 hover:text-black hover:bg-white transition-airbnb" asChild>
                      <Link href="/">Volver al portal principal</Link>
                    </Button>
                  </div>
                </div>
              )}
            </div>

            {/* Premium Editorial Summary Sidebar */}
            {currentStep < 4 && (
              <aside className="lg:col-span-5">
                <div className="lg:sticky lg:top-32 space-y-8 animate-in fade-in slide-in-from-right-8 duration-700">

                  {/* The Editorial Summary Card */}
                  <div className="p-5 sm:p-8 md:p-10 rounded-[2.5rem] bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-airbnb overflow-hidden relative">
                    <div className="flex flex-col xs:flex-row gap-6 mb-10 overflow-hidden">
                      <div className="relative w-full xs:w-32 aspect-video xs:aspect-square rounded-3xl overflow-hidden shadow-2xl flex-shrink-0">
                        <Image
                          src={bookingData.image}
                          alt={bookingData.room}
                          fill
                          className="object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                      </div>
                      <div className="flex flex-col justify-center">
                        <div className="flex items-center gap-1.5 mb-2">
                          <Star className="w-3.5 h-3.5 fill-bugambilia-600 text-bugambilia-600" />
                          <span className="text-xs font-black tracking-tight">{bookingData.rating}</span>
                          <span className="text-[10px] text-gray-400 font-bold">• Top Estancia</span>
                        </div>
                        <h4 className="text-xl font-black text-gray-900 dark:text-white leading-[1.1] tracking-tighter mb-1 truncate max-w-[200px] sm:max-w-none">{bookingData.room}</h4>
                        <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest">{bookingData.location}</p>
                      </div>
                    </div>

                    {/* Pricing Detail Section */}
                    <div className="space-y-5 pt-8 border-t border-gray-50 dark:border-gray-800 mb-10">
                      <div className="flex justify-between items-center text-sm">
                        <span className="font-medium text-gray-500 underline underline-offset-4 decoration-gray-100 decoration-2">${bookingData.roomPrice.toFixed(2)} x {bookingData.nights} noches</span>
                        <span className="font-black text-gray-900 dark:text-white tabular-nums">${bookingData.subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="font-medium text-gray-500 underline underline-offset-4 decoration-gray-100 decoration-2">Impuestos de hospitalidad</span>
                        <span className="font-black text-gray-900 dark:text-white tabular-nums">${bookingData.taxes.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <div className="flex items-center gap-1 group font-medium text-gray-500 underline underline-offset-4 decoration-gray-100 decoration-2">
                          Configuración y servicio
                          <Info className="w-3 h-3 text-gray-300 group-hover:text-gray-900 transition-colors" />
                        </div>
                        <span className="font-black text-gray-900 dark:text-white tabular-nums">${bookingData.serviceFee.toFixed(2)}</span>
                      </div>

                      {/* Dynamic Extras */}
                      {selectedServices.map(id => {
                        const extra = EXTRAS.find(e => e.id === id)
                        if (!extra) return null
                        return (
                          <div key={id} className="flex justify-between items-center text-sm animate-in fade-in slide-in-from-right-4">
                            <span className="font-medium text-bugambilia-600 flex items-center gap-2 capitalize">
                              <extra.icon className="w-3 h-3" />
                              {extra.name}
                            </span>
                            <span className="font-black text-gray-900 dark:text-white tabular-nums">${extra.price.toFixed(2)}</span>
                          </div>
                        )
                      })}
                    </div>

                    {/* Grand Total */}
                    <div className="pt-8 border-t-2 border-dashed border-gray-100 dark:border-gray-800 flex justify-between items-end">
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-1">Total Reserva</p>
                        <p className="text-4xl font-black text-gray-900 dark:text-white tracking-tighter tabular-nums">${finalTotal.toFixed(2)}</p>
                      </div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-bugambilia-600 bg-bugambilia-50 dark:bg-bugambilia-900/40 px-3 py-1.5 rounded-lg mb-1">
                        USD
                      </div>
                    </div>
                  </div>

                  {/* High Trust Indicator Sub-Card */}
                  <div className="p-8 rounded-[2rem] bg-emerald-50/50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-800 shadow-sm flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 shadow-sm shrink-0">
                      <Shield className="w-6 h-6" />
                    </div>
                    <div>
                      <h5 className="text-[10px] font-black uppercase tracking-widest text-emerald-900 dark:text-emerald-400 mb-1">Garantía Bugambilias</h5>
                      <p className="text-[11px] text-emerald-700/70 dark:text-emerald-500/80 font-medium leading-relaxed">
                        Mejor precio garantizado y soporte local 24/7 durante toda tu estancia.
                      </p>
                    </div>
                  </div>

                  {/* Help Link */}
                  <div className="text-center">
                    <button className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-black dark:hover:text-white transition-airbnb group">
                      <HelpCircle className="w-4 h-4 transition-transform group-hover:rotate-12" />
                      Preguntas sobre tu reserva
                    </button>
                  </div>
                </div>
              </aside>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}

