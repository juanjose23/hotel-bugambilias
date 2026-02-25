"use client";
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
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Users, Bed } from "lucide-react";

export default function ReservationSection() {
  return (
    <section
      id="reserva"
      className="py-16 bg-gradient-to-b from-primary/5 to-orange-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Reserva tu habitación
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Completa el formulario para reservar tu estancia en Hotel
            Bugambilias.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="border-primary/20 shadow-lg">
            <CardHeader className="bg-primary text-primary-foreground">
              <CardTitle className="text-center text-xl">
                Formulario de Reserva
              </CardTitle>
            </CardHeader>

            <CardContent className="p-6">
              <form className="space-y-6">
                {/* Información personal */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">Nombre</Label>
                    <Input id="firstName" placeholder="Tu nombre" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Apellido</Label>
                    <Input id="lastName" placeholder="Tu apellido" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="tu@email.com" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Teléfono</Label>
                    <Input id="phone" placeholder="+52 55 1234 5678" />
                  </div>
                </div>

                {/* Detalles de la reserva */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="checkin">Fecha de llegada</Label>
                    <div className="relative">
                      <Input id="checkin" type="date" />
                      <Calendar className="absolute right-3 top-3 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="checkout">Fecha de salida</Label>
                    <div className="relative">
                      <Input id="checkout" type="date" />
                      <Calendar className="absolute right-3 top-3 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="guests">Número de huéspedes</Label>
                    <Select>
                      <SelectTrigger>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-gray-400" />
                          <SelectValue placeholder="Selecciona" />
                        </div>
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
                    <Label htmlFor="roomType">Tipo de habitación</Label>
                    <Select>
                      <SelectTrigger>
                        <div className="flex items-center gap-2">
                          <Bed className="w-4 h-4 text-gray-400" />
                          <SelectValue placeholder="Selecciona" />
                        </div>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="double">Habitación Doble</SelectItem>
                        <SelectItem value="junior">Junior Suite</SelectItem>
                        <SelectItem value="master">Master Suite</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Solicitudes especiales */}
                <div>
                  <Label htmlFor="requests">Solicitudes especiales</Label>
                  <Textarea
                    id="requests"
                    placeholder="¿Alguna solicitud especial para tu estancia?"
                    rows={3}
                  />
                </div>

                {/* Resumen de precios */}
                <div className="bg-primary/5 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">
                    Resumen de tu reserva
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Habitación (2 noches)</span>
                      <span>$780.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Impuestos y tasas</span>
                      <span>$124.80</span>
                    </div>
                    <hr className="my-2" />
                    <div className="flex justify-between font-semibold text-lg">
                      <span>Total</span>
                      <span>$904.80</span>
                    </div>
                  </div>
                </div>

                <Button className="w-full text-lg py-3">
                  Confirmar reserva
                </Button>

                <p className="text-xs text-gray-600 text-center">
                  Al hacer clic en "Confirmar reserva", aceptas nuestros
                  términos y condiciones y política de privacidad.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
