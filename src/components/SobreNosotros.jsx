export default function SobreNosotros() {
  return (
    <section id="nosotros" className="bg-zinc-900/80 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 shadow-lg shadow-black/25">
            <img
              src="/media/paquetes.png"
              alt="Paquetes FersuaStore preparados con cuidado para el envío"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-50 md:text-4xl">Sobre FersuaStore</h2>
            <p className="mt-4 text-lg text-zinc-400">
              Somos una tienda que piensa en tu tranquilidad: ofrecemos productos seleccionados para el hogar, el
              bienestar y el estilo de vida, con la opción de{' '}
              <strong className="font-semibold text-zinc-200">pago contra entrega</strong> para que solo pagues
              cuando compruebes tu pedido.
            </p>
            <p className="mt-4 text-lg text-zinc-400">
              Cuidamos cada envío como si fuera nuestro: embalaje adecuado, rutas nacionales y atención cercana
              cuando nos necesitas.
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
                  <strong className="text-zinc-100">Variedad real</strong> para cada rincón: organización,
                  decoración, confort y hábitos saludables.
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
                  <strong className="text-zinc-100">Cobertura en todo el país</strong> con el mismo compromiso de
                  seguridad en cada entrega.
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
                  <strong className="text-zinc-100">Transparencia</strong> en el proceso: sabes qué esperar y
                  cuándo recibir tu pedido.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
