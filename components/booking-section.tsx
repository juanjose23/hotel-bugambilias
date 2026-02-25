import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar, Phone } from "lucide-react";

export default function BookingSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-bugambilia-50/30 to-gray-50 dark:from-bugambilia-900/10 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Reserva tu Habitación
              <span className="block text-lg text-bugambilia-600 dark:text-bugambilia-400 mt-2">
                🌺 Proceso rápido y seguro
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Completa el formulario o llámanos directamente para hacer tu
              reserva
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Booking Form */}
            <div className="lg:col-span-2">
              <Card className="bg-white dark:bg-gray-800 petal-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 dark:text-white">
                    Formulario de Reserva
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label
                        htmlFor="checkin"
                        className="text-gray-700 dark:text-gray-300"
                      >
                        Fecha de llegada
                      </Label>
                      <div className="relative">
                        <Input
                          id="checkin"
                          type="date"
                          className="pl-10 border-gray-300 dark:border-gray-600"
                        />
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      </div>
                    </div>
                    <div>
                      <Label
                        htmlFor="checkout"
                        className="text-gray-700 dark:text-gray-300"
                      >
                        Fecha de salida
                      </Label>
                      <div className="relative">
                        <Input
                          id="checkout"
                          type="date"
                          className="pl-10 border-gray-300 dark:border-gray-600"
                        />
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      </div>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label
                        htmlFor="guests"
                        className="text-gray-700 dark:text-gray-300"
                      >
                        Número de huéspedes
                      </Label>
                      <Select>
                        <SelectTrigger className="border-gray-300 dark:border-gray-600">
                          <SelectValue placeholder="Seleccionar" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 huésped</SelectItem>
                          <SelectItem value="2">2 huéspedes</SelectItem>
                          <SelectItem value="3">3 huéspedes</SelectItem>
                          <SelectItem value="4">4 huéspedes</SelectItem>
                          <SelectItem value="5">5+ huéspedes</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label
                        htmlFor="room-type"
                        className="text-gray-700 dark:text-gray-300"
                      >
                        Tipo de habitación
                      </Label>
                      <Select>
                        <SelectTrigger className="border-gray-300 dark:border-gray-600">
                          <SelectValue placeholder="Seleccionar" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="economica">
                            Habitación Económica
                          </SelectItem>
                          <SelectItem value="principal">
                            Habitación Principal
                          </SelectItem>
                          <SelectItem value="grupal">
                            Habitación Grupal
                          </SelectItem>
                          <SelectItem value="suite">Suite Especial</SelectItem>
                          <SelectItem value="familiar">
                            Habitación Familiar
                          </SelectItem>
                          <SelectItem value="presidencial">
                            Suite Presidencial
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label
                        htmlFor="name"
                        className="text-gray-700 dark:text-gray-300"
                      >
                        Nombre completo
                      </Label>
                      <Input
                        id="name"
                        placeholder="Tu nombre completo"
                        className="border-gray-300 dark:border-gray-600"
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="email"
                        className="text-gray-700 dark:text-gray-300"
                      >
                        Correo electrónico
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="tu@email.com"
                        className="border-gray-300 dark:border-gray-600"
                      />
                    </div>
                  </div>

                  <div>
                    <Label
                      htmlFor="phone"
                      className="text-gray-700 dark:text-gray-300"
                    >
                      Teléfono
                    </Label>
                    <Input
                      id="phone"
                      placeholder="+505 1234 5678"
                      className="border-gray-300 dark:border-gray-600"
                    />
                  </div>

                  <Button className="w-full bugambilia-primary petal-shadow hover:scale-105 transition-all duration-300">
                    🌺 Confirmar Reserva
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="bg-white dark:bg-gray-800 petal-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Reserva por Teléfono
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-bugambilia-600 dark:text-bugambilia-400" />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">
                          +505 2713 3456
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Disponible 24/7
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-bugambilia-50 dark:bg-bugambilia-900/20 border-bugambilia-200 dark:border-bugambilia-700 petal-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-bugambilia-700 dark:text-bugambilia-300 mb-4">
                    🌺 Oferta Especial
                  </h3>
                  <p className="text-sm text-bugambilia-600 dark:text-bugambilia-400 mb-3">
                    Reserva directamente con nosotros y accede a tarifas
                    preferenciales.
                  </p>
                  <div className="text-xs text-bugambilia-500 dark:text-bugambilia-500">
                    * Válido para estadías de 2 noches o más
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-gray-800 petal-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Políticas de Reserva
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li>• Check-in: 14:00 hrs</li>
                    <li>• Check-out: 12:00 hrs</li>
                    <li>• Cancelación gratuita hasta 24h antes</li>
                    <li>• Se requiere depósito del 50%</li>
                    <li>• Aceptamos efectivo y tarjetas</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
