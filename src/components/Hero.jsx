export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[min(85vh,720px)] items-center overflow-hidden bg-zinc-950"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/media/electronicos.png')" }}
        role="img"
        aria-label="Identidad visual FersuaStore"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-zinc-950/95 via-zinc-950/85 to-zinc-900/35"
        aria-hidden
      />

      <div className="relative mx-auto grid w-full max-w-6xl gap-10 px-4 py-20 md:grid-cols-2 md:items-center md:px-6 md:py-24">
        <div className="max-w-xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-300">
            Logística de confianza
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-[3.25rem]">
            Tu envío{' '}
            <span className="text-blue-400">seguro</span> y a tiempo
          </h1>
          <p className="mt-5 text-lg text-zinc-300 md:text-xl">
            Cobertura a nivel nacional, seguimiento claro y equipos dedicados para que cada paquete llegue como
            esperas.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-400"
            >
              Cotizar envío
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
            >
              Ver servicios
            </a>
          </div>
        </div>

        <div className="hidden md:block" aria-hidden />
      </div>
    </section>
  )
}
