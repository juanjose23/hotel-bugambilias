"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Send, CheckCircle } from "lucide-react"

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsLoading(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <Card
              className="border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg"
              id="contacto-form"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">¡Mensaje enviado!</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Gracias por contactarnos. Nos pondremos en contacto contigo dentro de las próximas 24 horas.
                </p>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-bugambilia-600 hover:bg-bugambilia-700 dark:bg-bugambilia-500 dark:hover:bg-bugambilia-600 text-white"
                >
                  Enviar otro mensaje
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-bugambilia-100 dark:bg-bugambilia-900/30 text-bugambilia-700 dark:text-bugambilia-300 border-bugambilia-200 dark:border-bugambilia-700">
              🌺 Formulario de contacto
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Envíanos un mensaje</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Completa el formulario y nos pondremos en contacto contigo lo antes posible.
            </p>
          </div>

          <Card className="border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg" id="contacto-form">
            <CardHeader className="pb-6">
              <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                Información de contacto
              </CardTitle>
              <p className="text-gray-600 dark:text-gray-300">Todos los campos marcados con * son obligatorios.</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-gray-900 dark:text-white font-medium">
                      Nombre *
                    </Label>
                    <Input
                      id="firstName"
                      placeholder="Tu nombre"
                      required
                      className="border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-gray-900 dark:text-white font-medium">
                      Apellido *
                    </Label>
                    <Input
                      id="lastName"
                      placeholder="Tu apellido"
                      required
                      className="border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-900 dark:text-white font-medium">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    required
                    className="border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-gray-900 dark:text-white font-medium">
                    Teléfono
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+505 1234 5678"
                    className="border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-gray-900 dark:text-white font-medium">
                    Asunto *
                  </Label>
                  <Select required>
                    <SelectTrigger className="border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                      <SelectValue placeholder="Selecciona un asunto" />
                    </SelectTrigger>
                    <SelectContent className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600">
                      <SelectItem value="reserva" className="text-gray-900 dark:text-white">
                        Consulta sobre reserva
                      </SelectItem>
                      <SelectItem value="habitaciones" className="text-gray-900 dark:text-white">
                        Información de habitaciones
                      </SelectItem>
                      <SelectItem value="servicios" className="text-gray-900 dark:text-white">
                        Servicios del hotel
                      </SelectItem>
                      <SelectItem value="eventos" className="text-gray-900 dark:text-white">
                        Eventos y celebraciones
                      </SelectItem>
                      <SelectItem value="quejas" className="text-gray-900 dark:text-white">
                        Quejas o sugerencias
                      </SelectItem>
                      <SelectItem value="otro" className="text-gray-900 dark:text-white">
                        Otro
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-900 dark:text-white font-medium">
                    Mensaje *
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Escribe tu mensaje aquí..."
                    rows={5}
                    required
                    className="border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-bugambilia-600 hover:bg-bugambilia-700 dark:bg-bugambilia-500 dark:hover:bg-bugambilia-600 text-white hover:scale-105 transition-all duration-300 py-3"
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Enviando...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      Enviar mensaje
                    </div>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
