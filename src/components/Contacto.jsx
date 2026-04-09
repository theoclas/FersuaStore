import { FACEBOOK_PAGE_URL } from '../constants/social.js'

const highlights = [
  {
    title: 'Pago contra entrega',
    text: 'Pagas cuando el repartidor te entrega el paquete: ideal para comprar con confianza y sin riesgos en línea.',
  },
  {
    title: 'Envíos pensados para tu tranquilidad',
    text: 'Tratamos cada paquete con cuidado para que lo que elegiste para tu hogar o tu bienestar llegue en buen estado.',
  },
  {
    title: 'Catálogo para tu día a día',
    text: 'Desde detalles de decoración hasta artículos de confort y hábitos saludables: variedad para armar el hogar que quieres.',
  },
]

export default function Contacto() {
  return (
    <section id="contacto" className="bg-zinc-900/80 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-400">
              Seguridad y bienestar en cada compra
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-50 md:text-4xl lg:text-[2.5rem] lg:leading-tight">
              Hogar, estilo de vida y{' '}
              <span className="text-blue-400">pago contra entrega</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-zinc-400">
              En <strong className="font-semibold text-zinc-200">FersuaStore</strong> reunimos productos que
              mejoran tu espacio y tu rutina, con la tranquilidad de pagar solo cuando recibes tu pedido y
              comprobar que todo está en orden.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-zinc-400">
              Visítanos en Facebook para ver el catálogo, novedades y promociones; contáctanos por teléfono o
              correo si necesitas ayuda antes de comprar.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={FACEBOOK_PAGE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-500"
              >
                <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Ir a la tienda
              </a>
              <a
                href="tel:+573013530292"
                className="inline-flex items-center justify-center rounded-full border border-zinc-600 bg-zinc-900/50 px-6 py-3 text-sm font-semibold text-zinc-100 transition hover:border-blue-500/50 hover:bg-zinc-800"
              >
                Llamar
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-gradient-to-b from-zinc-900/90 to-zinc-950 p-6 shadow-xl shadow-black/40 md:p-8">
            <div className="flex items-start gap-4 rounded-xl border border-blue-500/20 bg-blue-500/5 p-4 md:p-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600/20 text-blue-400">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.75}
                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                  />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-zinc-50">Paquetes seguros, compras tranquilas</p>
                <p className="mt-1 text-sm leading-relaxed text-zinc-400">
                  Priorizamos el cuidado del embalaje y la entrega para que disfrutes lo que compraste sin
                  sorpresas desagradables.
                </p>
              </div>
            </div>

            <ul className="mt-8 space-y-6">
              {highlights.map(({ title, text }) => (
                <li key={title} className="border-b border-zinc-800/80 pb-6 last:border-0 last:pb-0">
                  <p className="font-semibold text-zinc-100">{title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-500">{text}</p>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-xl border border-zinc-800 bg-zinc-950/80 p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Contacto directo</p>
              <ul className="mt-4 space-y-3 text-sm">
                
                <li>
                  <a
                    href="mailto:Fernando.pala.99@Fersuastudio.com"
                    className="font-medium text-blue-400 hover:text-blue-300"
                  >
                    Fernando.pala.99@Fersuastudio.com
                  </a>
                </li>
                <li>
                  <a href="tel:+573013530292" className="font-medium text-blue-400 hover:text-blue-300">
                    +57 301 353 02 92
                  </a>
                </li>
                <li>
                  <a className="font-medium text-blue-400 hover:text-blue-300">
                  
                   
                  CR 49 B # 86 - 47 SEGUNDO PISO
                  <br />
                  MEDELLIN, COLOMBIA
                  <br />
                  Código postal: 050001
                  
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
