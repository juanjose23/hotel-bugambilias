"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Star, ChevronDown, Users, ShieldCheck, HelpCircle } from "lucide-react"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import { useRouter } from "next/navigation"

interface Room {
  id: number
  name: string
  price: number
  originalPrice: number
  guests: number
}

interface RoomBookingFormProps {
  room: Room
}

export default function RoomBookingForm({ room }: RoomBookingFormProps) {
  const [nights] = useState(2)
  const [checkInDate, setCheckInDate] = useState<Date>()
  const [checkOutDate, setCheckOutDate] = useState<Date>()
  const [guests, setGuests] = useState(2)
  const router = useRouter()

  const subtotal = room.price * nights
  const taxes = subtotal * 0.16
  const total = subtotal + taxes

  return (
    <div className="lg:sticky lg:top-32 space-y-4">
      <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-airbnb border border-gray-100 dark:border-gray-800 p-6 md:p-8">
        {/* Header: Price & Rating */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-3xl font-black text-black dark:text-white">${room.price}</span>
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">noche</span>
            </div>
            {room.originalPrice > room.price && (
              <p className="text-sm font-bold text-emerald-600 mt-1 uppercase tracking-tighter">
                Oferta Limitada: -${room.originalPrice - room.price} menos
              </p>
            )}
          </div>
          <div className="flex items-center gap-1.5 bg-gray-50 dark:bg-gray-900/50 px-3 py-1.5 rounded-2xl border border-gray-100 dark:border-gray-800">
            <Star className="w-3.5 h-3.5 fill-bugambilia-600 text-bugambilia-600" />
            <span className="text-sm font-black">4.92</span>
          </div>
        </div>

        {/* Selection Box: Dates & Guests */}
        <div className="border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden mb-6">
          <div className="grid grid-cols-2 divide-x divide-gray-200 dark:divide-gray-700 border-b border-gray-200 dark:border-gray-700">
            <div className="p-4">
              <Label className="text-[10px] font-black uppercase tracking-widest text-black dark:text-white mb-1 block">Llegada</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <button className="text-[13px] font-medium text-gray-500 hover:text-bugambilia-600 transition-airbnb w-full text-left">
                    {checkInDate ? format(checkInDate, "dd MMM", { locale: es }) : "Añadir fecha"}
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 rounded-3xl shadow-airbnb border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900" align="start">
                  <Calendar
                    mode="single"
                    selected={checkInDate}
                    onSelect={setCheckInDate}
                    disabled={(date: Date) => date < new Date()}
                    locale={es}
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="p-4">
              <Label className="text-[10px] font-black uppercase tracking-widest text-black dark:text-white mb-1 block">Salida</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <button className="text-[13px] font-medium text-gray-500 hover:text-bugambilia-600 transition-airbnb w-full text-left">
                    {checkOutDate ? format(checkOutDate, "dd MMM", { locale: es }) : "Añadir fecha"}
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 rounded-3xl shadow-airbnb border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900" align="end">
                  <Calendar
                    mode="single"
                    selected={checkOutDate}
                    onSelect={setCheckOutDate}
                    disabled={(date: Date) => date < new Date() || (checkInDate ? date <= checkInDate : false)}
                    locale={es}
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <div className="p-4 relative">
            <Label className="text-[10px] font-black uppercase tracking-widest text-black dark:text-white mb-1 block">Huéspedes</Label>
            <Popover>
              <PopoverTrigger asChild>
                <button className="flex justify-between items-center w-full text-[13px] font-medium text-gray-500 hover:text-bugambilia-600 transition-airbnb">
                  <span>{guests} {guests > 1 ? "huéspedes" : "huésped"}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-full min-w-[300px] p-6 rounded-3xl shadow-airbnb border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-black text-sm text-gray-900 dark:text-white">Adultos</h4>
                    <p className="text-xs text-gray-500">Edad 13 o más</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Button
                      variant="outline" size="icon" className="h-8 w-8 rounded-full"
                      onClick={() => setGuests(Math.max(1, guests - 1))}
                    >-</Button>
                    <span className="font-bold w-4 text-center">{guests}</span>
                    <Button
                      variant="outline" size="icon" className="h-8 w-8 rounded-full"
                      onClick={() => setGuests(Math.min(room.guests, guests + 1))}
                    >+</Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>

        {/* Action Button */}
        <Button
          onClick={() => router.push("/pago")}
          className="w-full bg-bugambilia-gradient hover:scale-[1.02] active:scale-[0.98] text-white font-black uppercase tracking-widest text-sm py-8 h-auto rounded-2xl shadow-airbnb transition-airbnb mb-4 border-none"
        >
          Reservar ahora
        </Button>

        <p className="text-center text-[10px] font-black uppercase tracking-widest text-gray-400 mb-8">
          No se realizará ningún cargo todavía
        </p>

        {/* Pricing Breakdown */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="underline text-sm font-medium text-gray-600 dark:text-gray-400 decoration-gray-300 dark:decoration-gray-700 underline-offset-4 cursor-pointer hover:text-black transition-airbnb">${room.price} x {nights} noches</span>
            <span className="text-sm font-bold text-black dark:text-white">${subtotal}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="underline text-sm font-medium text-gray-600 dark:text-gray-400 decoration-gray-300 dark:decoration-gray-700 underline-offset-4 cursor-pointer hover:text-black transition-airbnb">Impuestos (16%)</span>
            <span className="text-sm font-bold text-black dark:text-white">${taxes.toFixed(0)}</span>
          </div>

          <div className="pt-6 border-t border-gray-100 dark:border-gray-800 flex justify-between items-center mt-6">
            <span className="text-lg font-black text-black dark:text-white tracking-tight">Total</span>
            <span className="text-xl font-black text-bugambilia-600 tracking-tighter">${total.toFixed(0)}</span>
          </div>
        </div>
      </div>

      {/* Trust Indicator */}
      <div className="flex items-center gap-4 px-6 py-4 rounded-3xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950">
        <ShieldCheck className="w-8 h-8 text-bugambilia-600" />
        <div>
          <h4 className="text-[11px] font-black uppercase tracking-widest text-black dark:text-white">Pago Seguro</h4>
          <p className="text-[10px] font-medium text-gray-500">Transacción protegida por SSL de 256 bits</p>
        </div>
        <HelpCircle className="w-4 h-4 text-gray-300 ml-auto cursor-pointer hover:text-black transition-airbnb" />
      </div>

      {/* Contact Section */}
      <div className="p-6 rounded-3xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/30 text-center">
        <p className="text-xs font-bold text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-widest">¿Dudas sobre esta estancia?</p>
        <Button variant="outline" className="w-full rounded-xl border-gray-200 dark:border-gray-700 font-bold text-xs uppercase tracking-widest hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-airbnb h-12">
          Contactar Soporte
        </Button>
      </div>
    </div>
  )
}
