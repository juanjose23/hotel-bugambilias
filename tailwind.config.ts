import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Colores oficiales de Hotel Bugambilias - Temática Bugambilias
        bugambilia: {
          50: "#fdf2f8", // Muy claro, como pétalos al amanecer
          100: "#fce7f3", // Suave rosa pálido
          200: "#fbcfe8", // Rosa claro
          300: "#f9a8d4", // Rosa medio
          400: "#f472b6", // Rosa vibrante
          500: "#ec4899", // Rosa intenso
          600: "#A32C6E", // 🌺 COLOR OFICIAL PRINCIPAL - Magenta bugambilia
          700: "#711C37", // 🌺 COLOR OFICIAL SECUNDARIO - Magenta oscuro
          800: "#5c1629", // Muy oscuro, como sombras de pétalos
          900: "#4a111f", // Casi negro con tinte magenta
        },
        // Colores complementarios para la temática
        rose: {
          50: "#fff1f2",
          100: "#ffe4e6",
          200: "#fecdd3",
          300: "#fda4af",
          400: "#fb7185",
          500: "#f43f5e",
          600: "#e11d48", // Rosa complementario
          700: "#be123c",
          800: "#9f1239",
          900: "#881337",
        },
        // Verdes para hojas y naturaleza (complementario a bugambilias)
        emerald: {
          50: "#ecfdf5",
          100: "#d1fae5",
          200: "#a7f3d0",
          300: "#6ee7b7",
          400: "#34d399",
          500: "#10b981",
          600: "#059669", // Verde hoja
          700: "#047857",
          800: "#065f46",
          900: "#064e3b",
        },
        // Naranjas cálidos (bugambilias naranjas)
        orange: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c", // Naranja bugambilia
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "1rem",
        "2xl": "1.5rem",
      },
      boxShadow: {
        airbnb: "0 6px 16px rgba(0, 0, 0, 0.12)",
        "airbnb-hover": "0 10px 30px rgba(0, 0, 0, 0.15)",
        "airbnb-soft": "0 1px 2px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.05)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "petal-float": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-10px) rotate(5deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "petal-float": "petal-float 3s ease-in-out infinite",
      },
      backgroundImage: {
        "bugambilia-gradient": "linear-gradient(135deg, #A32C6E 0%, #711C37 100%)",
        "bugambilia-gradient-light": "linear-gradient(135deg, #f472b6 0%, #A32C6E 100%)",
        "bugambilia-radial": "radial-gradient(circle, #A32C6E 0%, #711C37 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
