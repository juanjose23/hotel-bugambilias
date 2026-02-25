import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/header";
import RoomDetailHero from "@/components/room-detail-hero";
import RoomDetailInfo from "@/components/room-detail-info";
import RoomAmenitiesDetail from "@/components/room-amenities-detail";
import RoomBookingForm from "@/components/room-booking-form";
import RoomBottomBar from "@/components/room-bottom-bar";
import SimilarRooms from "@/components/similar-rooms";
import Footer from "@/components/footer";

// Datos de las habitaciones
const roomsData = {
  "1": {
    id: 1,
    name: "Habitación Doble Estándar",
    type: "Habitación",
    description:
      "Cómoda habitación con todas las amenidades básicas para una estancia perfecta",
    longDescription:
      "Nuestra Habitación Doble Estándar ofrece el equilibrio perfecto entre comodidad y precio. Diseñada pensando en el huésped moderno, cuenta con una decoración elegante que combina elementos tradicionales nicaragüenses con toques contemporáneos. La habitación está equipada con todo lo necesario para garantizar una estancia confortable y relajante en el corazón de Estelí.",
    price: 350,
    originalPrice: 389,
    guests: 2,
    beds: "1 cama doble",
    size: "25 m²",
    floor: "1er - 3er piso",
    view: "Vista al jardín interior con bugambilias",
    images: [
      "/images/main-room.jpg",
      "/images/bathroom.jpg",
      "/images/room-detail.jpg",
      "/images/terrace.jpg",
    ],
    amenities: [
      "Wi-Fi gratuito de alta velocidad",
      "Aire acondicionado",
      'TV por cable 32"',
      "Baño privado completo",
      "Escritorio de trabajo",
      "Armario amplio",
      "Caja fuerte",
      "Teléfono directo",
    ],
    included: [
      "Desayuno continental",
      "Acceso a piscina",
      "Estacionamiento gratuito",
      "Wi-Fi en todo el hotel",
      "Servicio de limpieza diario",
    ],
    policies: {
      checkIn: "15:00",
      checkOut: "12:00",
      cancellation: "Cancelación gratuita hasta 24 horas antes",
      smoking: "Habitación para no fumadores",
      pets: "No se permiten mascotas",
    },
    rating: 4.8,
    reviews: 89,
  },
  "2": {
    id: 2,
    name: "Habitación Doble Deluxe",
    type: "Habitación",
    description:
      "Habitación espaciosa con vista a la ciudad y amenidades premium",
    longDescription:
      "La Habitación Doble Deluxe representa la perfecta combinación de elegancia y funcionalidad. Con una ubicación privilegiada que ofrece vistas panorámicas de la ciudad de Estelí, esta habitación ha sido diseñada para huéspedes que buscan una experiencia superior. Los acabados de primera calidad y el mobiliario cuidadosamente seleccionado crean un ambiente sofisticado y acogedor.",
    price: 390,
    originalPrice: 433,
    guests: 2,
    beds: "1 cama king size",
    size: "30 m²",
    floor: "4to - 6to piso",
    view: "Vista panorámica de la ciudad de Estelí",
    images: [
      "/images/group-room.jpg",
      "/images/main-room.jpg",
      "/images/bathroom.jpg",
      "/images/terrace.jpg",
      "/images/room-detail.jpg",
    ],
    amenities: [
      "Wi-Fi gratuito de alta velocidad",
      "Aire acondicionado",
      'TV Smart 42"',
      "Baño premium con ducha de lluvia",
      "Minibar completamente equipado",
      "Escritorio ejecutivo",
      "Armario walk-in",
      "Caja fuerte digital",
      "Teléfono directo",
      "Cafetera Nespresso",
      "Balcón privado",
    ],
    included: [
      "Desayuno buffet premium",
      "Acceso VIP a piscina",
      "Estacionamiento valet",
      "Wi-Fi premium",
      "Servicio de limpieza 2 veces al día",
      "Periódico diario",
      "Agua embotellada de cortesía",
    ],
    policies: {
      checkIn: "15:00",
      checkOut: "12:00",
      cancellation: "Cancelación gratuita hasta 24 horas antes",
      smoking: "Habitación para no fumadores",
      pets: "No se permiten mascotas",
    },
    rating: 4.9,
    reviews: 127,
  },
  "4": {
    id: 4,
    name: "Junior Suite",
    type: "Suite",
    description:
      "Suite con sala de estar y cocineta equipada, ideal para estancias prolongadas",
    longDescription:
      "La Junior Suite está diseñada para huéspedes que buscan el confort de un hogar lejos de casa. Con espacios amplios y bien distribuidos, incluye una sala de estar independiente y una cocineta completamente equipada. Es la opción perfecta para familias, parejas que desean más espacio, o viajeros de negocios que requieren un ambiente de trabajo cómodo y funcional en Estelí.",
    price: 590,
    originalPrice: 656,
    guests: 4,
    beds: "1 cama king + sofá cama",
    size: "45 m²",
    floor: "2do - 5to piso",
    view: "Vista al jardín y piscina del hotel",
    images: [
      "/images/group-room.jpg",
      "/images/main-room.jpg",
      "/images/bathroom.jpg",
      "/images/terrace.jpg",
      "/images/room-detail.jpg",
      "/images/pool-front-view.jpg",
    ],
    amenities: [
      "Cocineta completamente equipada",
      "Refrigerador full-size",
      "Microondas y utensilios de cocina",
      "Sala de estar independiente",
      "Comedor para 4 personas",
      "Wi-Fi gratuito de alta velocidad",
      "Aire acondicionado dual",
      "2 TV Smart (sala y dormitorio)",
      "Baño premium con tina",
      "Balcón privado con mobiliario",
      "Escritorio ejecutivo",
      "Armario walk-in",
      "Caja fuerte digital",
      "Cafetera y tetera",
    ],
    included: [
      "Desayuno buffet premium",
      "Kit de bienvenida",
      "Acceso VIP a todas las instalaciones",
      "Estacionamiento valet",
      "Wi-Fi premium",
      "Servicio de limpieza diario",
      "Servicio de lavandería (1 vez gratis)",
      "Late check-out hasta las 14:00",
    ],
    policies: {
      checkIn: "15:00",
      checkOut: "12:00 (14:00 gratis)",
      cancellation: "Cancelación gratuita hasta 48 horas antes",
      smoking: "Habitación para no fumadores",
      pets: "Se permiten mascotas pequeñas (cargo adicional)",
    },
    rating: 4.9,
    reviews: 156,
  },
  "6": {
    id: 6,
    name: "Master Suite",
    type: "Suite de lujo",
    description:
      "La experiencia más lujosa con dos recámaras completas y amenidades premium",
    longDescription:
      "La Master Suite representa el pináculo del lujo y la comodidad en Hotel Bugambilias. Con dos recámaras completamente independientes, esta suite es perfecta para familias grandes o grupos que buscan privacidad sin sacrificar la convivencia. Cada detalle ha sido cuidadosamente pensado para ofrecer una experiencia de hospedaje excepcional, desde los acabados de lujo hasta las vistas panorámicas de la ciudad de Estelí.",
    price: 890,
    originalPrice: 989,
    guests: 6,
    beds: "2 recámaras: 1 king + 2 individuales",
    size: "75 m²",
    floor: "6to - 7mo piso (pisos ejecutivos)",
    view: "Vista panorámica 360° de la ciudad de Estelí",
    images: [
      "/images/group-room.jpg",
      "/images/main-room.jpg",
      "/images/bathroom.jpg",
      "/images/terrace.jpg",
      "/images/room-detail.jpg",
      "/images/pool-front-view.jpg",
      "/images/pool-scaled.jpg",
      "/images/hero-main.jpg",
    ],
    amenities: [
      "2 recámaras completamente independientes",
      "2 baños completos (1 con jacuzzi)",
      "Cocina gourmet completamente equipada",
      "Sala de estar amplia con chimenea",
      "Comedor formal para 6 personas",
      "Terraza privada de 15 m²",
      '3 TV Smart de 55" (sala + 2 dormitorios)',
      "Sistema de sonido Bose",
      "Wi-Fi premium de alta velocidad",
      "Aire acondicionado independiente por zona",
      "2 escritorios ejecutivos",
      "Walk-in closet en dormitorio principal",
      "Caja fuerte digital grande",
      "Minibar premium",
      "Cafetera Nespresso y bar de té",
      "Servicio de mayordomo personalizado",
    ],
    included: [
      "Desayuno gourmet en la habitación",
      "Champagne de bienvenida",
      "Frutas frescas diarias",
      "Acceso exclusivo a lounge ejecutivo",
      "Estacionamiento valet premium",
      "Wi-Fi premium ilimitado",
      "Servicio de limpieza 2 veces al día",
      "Servicio de lavandería ilimitado",
      "Late check-out hasta las 16:00",
      "Early check-in desde las 12:00",
      "Acceso prioritario a restaurante",
      "Concierge personalizado",
    ],
    policies: {
      checkIn: "12:00 (early check-in incluido)",
      checkOut: "16:00 (late check-out incluido)",
      cancellation: "Cancelación gratuita hasta 72 horas antes",
      smoking: "Habitación para no fumadores (terraza permitida)",
      pets: "Se permiten mascotas (sin cargo adicional)",
    },
    rating: 5.0,
    reviews: 78,
  },
};

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const room = roomsData[id as keyof typeof roomsData];

  if (!room) {
    return {
      title: "Habitación no encontrada - Hotel Bugambilias",
    };
  }

  return {
    title: `${room.name} - Hotel Bugambilias`,
    description: room.description,
  };
}

export default async function RoomDetailPage({ params }: Props) {
  const { id } = await params;
  const room = roomsData[id as keyof typeof roomsData];

  if (!room) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <Header />
      <RoomDetailHero room={room} />

      <div className="py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-20">
            <div className="lg:col-span-2 space-y-0">
              <div id="info-section">
                <RoomDetailInfo room={room} />
              </div>
              <div id="amenities-section">
                <RoomAmenitiesDetail
                  amenities={room.amenities}
                  included={room.included}
                  policies={room.policies}
                />
              </div>
            </div>
            <div className="lg:col-span-1">
              <div id="booking-form">
                <RoomBookingForm room={room} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <SimilarRooms currentRoomId={room.id} />
      <Footer />

      {/* Bottom Bar for Mobile - Estilo Airbnb */}
      <RoomBottomBar room={room} />
    </main>
  );
}

export async function generateStaticParams() {
  return Object.keys(roomsData).map((id) => ({
    id: id,
  }));
}
