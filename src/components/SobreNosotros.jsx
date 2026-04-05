export default function SobreNosotros() {
  return (
    <section id="nosotros" className="bg-zinc-900/80 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 shadow-lg shadow-black/25">
            <img
              src="/media/paquetes.png"
              alt="Operaciones logísticas FersuaStore"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-50 md:text-4xl">Sobre FersuaStore</h2>
            <p className="mt-4 text-lg text-zinc-400">
              Somos un equipo enfocado en la logística de última milla y en envíos que requieren cuidado
              extra. Combinamos procesos claros, tecnología y personas para que cada entrega refleje
              profesionalismo.
            </p>
            <ul className="mt-8 space-y-4 text-zinc-300">
              <li className="flex gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-500/15 text-blue-400 ring-1 ring-blue-500/30">
                  <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span>
                  <strong className="text-zinc-100">Experiencia consolidada</strong> en gestión de paquetes
                  frágiles y de alto valor.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-500/15 text-blue-400 ring-1 ring-blue-500/30">
                  <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span>
                  <strong className="text-zinc-100">Cobertura amplia</strong> en el territorio nacional con rutas
                  optimizadas y puntos de reparto coordinados.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-500/15 text-blue-400 ring-1 ring-blue-500/30">
                  <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span>
                  <strong className="text-zinc-100">Compromiso con la seguridad</strong> en embalaje,
                  manipulación y entrega.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
