import Image from "next/image"

export default function AboutHero() {
  return (
    <section className="relative h-[60vh] min-h-[500px]">
      <Image
        src="/images/hero-main.jpg"
        alt="Hotel Bugambilias - Nuestra historia en Estelí, Nicaragua"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30 dark:from-black/80 dark:via-black/60 dark:to-black/40" />

      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl text-white">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-bugambilia-600/90 dark:bg-bugambilia-500/90 text-white rounded-full text-sm font-medium mb-4">
                🌺 Desde 1985 en Nicaragua
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Nuestra Historia
              <span className="block text-2xl md:text-3xl lg:text-4xl mt-3 text-bugambilia-200 dark:text-bugambilia-300 font-normal">
                Hospitalidad auténtica en el corazón de Estelí
              </span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed max-w-3xl text-gray-200 dark:text-gray-300">
              Desde 1985, Hotel Bugambilias ha sido el refugio perfecto para viajeros que buscan confort, elegancia y
              hospitalidad auténtica en el hermoso departamento de Estelí, Nicaragua.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
