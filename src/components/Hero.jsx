import { FACEBOOK_PAGE_URL } from '../constants/social.js'

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
        aria-label="FersuaStore — hogar, bienestar y envíos seguros"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-zinc-950/95 via-zinc-950/85 to-zinc-900/35"
        aria-hidden
      />

      <div className="relative mx-auto grid w-full max-w-6xl gap-10 px-4 py-20 md:grid-cols-2 md:items-center md:px-6 md:py-24">
        <div className="max-w-xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-300">
            Pago contra entrega · Paquetes seguros
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-[3.25rem]">
            Compra con tranquilidad:{' '}
            <span className="text-blue-400">pagas al recibir</span>
          </h1>
          <p className="mt-5 text-lg text-zinc-300 md:text-xl">
            Selección de productos para tu hogar, tu bienestar y tu estilo de vida. Envíos cuidados en todo el
            país y la seguridad de revisar tu pedido antes de pagar.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={FACEBOOK_PAGE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-400"
            >
              <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Ir a la tienda
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
            >
              Cómo comprar
            </a>
          </div>
        </div>

        <div className="hidden md:block" aria-hidden />
      </div>
    </section>
  )
}
