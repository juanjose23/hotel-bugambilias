import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import MobileNav from "@/components/mobile-nav";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bugambiliashotel.com/"),
  title: "Hotel Bugambilias | Confort y Elegancia en Estelí, Nicaragua",
  description:
    "Descubre Hotel Bugambilias en el corazón de Estelí. Un refugio acogedor con piscina climatizada, habitaciones premium, apartamento familiar y excelente servicio.",
  keywords:
    "Hotel Bugambilias, hotel en Estelí, alojamiento en Nicaragua, habitaciones premium Estelí, hotel con piscina climatizada, apartamento familiar Estelí, eventos privados Estelí, turismo Nicaragua, ciudad tabacalera",
  authors: [{ name: "Hotel Bugambilias" }],
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://www.bugambiliashotel.com/",
  },
  openGraph: {
    type: "website",
    url: "https://www.bugambiliashotel.com/",
    title: "Hotel Bugambilias | Tu Santuario de Confort en Estelí",
    description:
      "Experimente comodidad superior en nuestras habitaciones premium y apartamentos. Relájate en nuestra piscina climatizada en la vibrante ciudad tabacalera.",
    siteName: "Hotel Bugambilias",
    locale: "es_NI",
    images: [
      {
        url: "https://www.bugambiliashotel.com/wp-content/uploads/2025/07/Hotel-Bugambilias-Portada-Facebook-14.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel Bugambilias en Estelí, Nicaragua",
    description:
      "Un refugio acogedor pensado para ofrecer una experiencia única de hospitalidad. Piscina climatizada, servicio de barra y más.",
    images: [
      "https://www.bugambiliashotel.com/wp-content/uploads/2025/07/Hotel-Bugambilias-Portada-Facebook-14.png",
    ],
  },
  other: {
    language: "Spanish",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: "Hotel Bugambilias",
    description:
      "En el corazón de la ciudad de Estelí, donde el encanto del norte de Nicaragua se mezcla con la calidez de su gente, se encuentra Hotel Bugambilias, un refugio acogedor pensado para ofrecer una experiencia única de hospitalidad.",
    url: "https://www.bugambiliashotel.com/",
    logo: "https://www.bugambiliashotel.com/wp-content/uploads/2025/07/Hotel-Bugambilias-Logo-Horizontal-scaled.png",
    image:
      "https://www.bugambiliashotel.com/wp-content/uploads/2025/07/Piscina-front-view-scaled.jpg",
    telephone: "+505 8713 6805",
    email: "recepción@bugambiliashotel.com",
    founder: {
      "@type": "Person",
      name: "Oscar Molina",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Salida Sur Estelí, Restaurante Absoluto 1c. Oeste, 2c. Sur, 1c. Oeste",
      addressLocality: "Estelí",
      addressCountry: "NI",
    },
    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "Piscina Climatizada",
        value: "True",
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Wi-Fi Gratuito",
        value: "True",
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Pet Friendly",
        value: "True",
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Desayuno Incluido",
        value: "True",
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Servicio de Barra",
        value: "True",
      },
    ],
    priceRange: "$$$",
    makesOffer: [
      {
        "@type": "Offer",
        name: "Suite Estandar",
        price: "60.00",
        priceCurrency: "USD",
      },
      {
        "@type": "Offer",
        name: "Suite Ejecutiva",
        price: "80.00",
        priceCurrency: "USD",
      },
      {
        "@type": "Offer",
        name: "Master Suite",
        price: "120.00",
        priceCurrency: "USD",
      },
      {
        "@type": "Offer",
        name: "Suite Grupal",
        price: "120.00",
        priceCurrency: "USD",
      },
    ],
  };

  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="pb-20 lg:pb-0">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <MobileNav />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
