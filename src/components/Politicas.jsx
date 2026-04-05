const blocks = [
  {
    title: 'Uso del sitio',
    paragraphs: [
      'Este sitio web tiene carácter informativo y promocional sobre FersuaStore. Al navegar por él, aceptas utilizarlo de forma responsable y conforme a la legislación aplicable en Colombia.',
      'Los pedidos, cotizaciones y atención comercial principal se gestionan a través de los canales indicados en la sección de contacto y en nuestra página oficial en Facebook.',
    ],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.75}
          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
        />
      </svg>
    ),
  },
  {
    title: 'Privacidad de datos',
    paragraphs: [
      'Los datos personales que nos facilites por correo electrónico, teléfono o mensajes (por ejemplo, nombre, dirección de entrega o teléfono) se utilizarán únicamente para gestionar tu consulta, tu pedido o el envío, salvo obligación legal en contrario.',
      'No vendemos ni cedemos tus datos a terceros con fines comerciales ajenos al servicio. Puedes solicitar información sobre el tratamiento de tus datos o el ejercicio de tus derechos contactándonos por los medios publicados en esta web.',
    ],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.75}
          d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
        />
      </svg>
    ),
  },
  {
    title: 'Envíos y pago contra entrega',
    paragraphs: [
      'Ofrecemos envíos a nivel nacional según disponibilidad y cobertura. Los plazos y costes pueden variar según la zona y el producto; la información concreta se confirma al momento de coordinar el pedido.',
      'Con la modalidad de pago contra entrega, el pago se realiza al recibir el paquete, una vez que hayas podido verificar el envío conforme a lo acordado. Cualquier condición particular se comunicará antes de confirmar el pedido.',
    ],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.75}
          d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.107-9.684l-1.197-1.453M9.75 18.75H6.375a1.125 1.125 0 01-1.125-1.125V14.25m12.75-3.75v-1.5a2.25 2.25 0 00-2.25-2.25H9.75m9 0V9a2.25 2.25 0 00-2.25-2.25H9.75m9 0H6.375A1.125 1.125 0 015.25 5.25v10.5c0 .621.504 1.125 1.125 1.125h.75m9-9h3.375c.621 0 1.125.504 1.125 1.125v2.25"
        />
      </svg>
    ),
  },
  {
    title: 'Cambios, garantía y reclamaciones',
    paragraphs: [
      'Las políticas de cambios, devoluciones o garantía dependen del tipo de producto y se aplican según lo acordado en el canal de venta (por ejemplo, Facebook) y la normativa aplicable al consumidor.',
      'Para reclamaciones o incidencias con un pedido, contáctanos por los medios de contacto de esta página; atenderemos tu caso lo antes posible.',
    ],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.75}
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.764-.642-3.47L9 3.053M9 3.053V1.5m0 1.553L6.42 6.78"
        />
      </svg>
    ),
  },
  {
    title: 'Actualizaciones',
    paragraphs: [
      'FersuaStore puede modificar estas políticas para adaptarlas a cambios legales o en el servicio. Te recomendamos revisar esta sección periódicamente. La fecha de la última actualización se indica al final.',
    ],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.75}
          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
]

export default function Politicas() {
  return (
    <section
      id="politicas"
      className="relative overflow-hidden border-t border-zinc-800 bg-zinc-950 py-16 md:py-28"
    >
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-[28rem] w-[28rem] rounded-full bg-blue-600/15 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-24 h-[24rem] w-[24rem] rounded-full bg-blue-500/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-12 max-w-2xl lg:mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-400">Transparencia</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-50 md:text-4xl">Políticas</h2>
          <p className="mt-4 text-lg leading-relaxed text-zinc-400">
            Condiciones claras sobre el uso de este sitio, el tratamiento de datos, envíos con pago contra
            entrega y atención al cliente. Para dudas sobre un pedido concreto, escríbenos o visita nuestra
            tienda en Facebook.
          </p>
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-14">
          <aside className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
            <div className="overflow-hidden rounded-3xl border border-zinc-800/80 bg-zinc-900/40 shadow-2xl shadow-black/40 ring-1 ring-white/5">
              <img
                src="/media/politicas-1.png"
                alt="Políticas y compromiso FersuaStore"
                className="w-full object-cover object-top"
                loading="lazy"
              />
            </div>
          </aside>

          <div className="lg:col-span-7">
            <ul className="space-y-5">
              {blocks.map(({ title, paragraphs, icon }) => (
                <li key={title}>
                  <article className="group rounded-2xl border border-zinc-800/90 bg-zinc-900/35 p-6 shadow-lg transition hover:border-blue-500/25 hover:bg-zinc-900/55 md:p-7">
                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600/20 text-blue-400 ring-1 ring-blue-500/20 transition group-hover:bg-blue-600/25">
                        {icon}
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-lg font-semibold text-zinc-50 md:text-xl">{title}</h3>
                        <div className="mt-3 space-y-3 text-sm leading-relaxed text-zinc-400 md:text-[0.9375rem]">
                          {paragraphs.map((p, i) => (
                            <p key={i}>{p}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
                </li>
              ))}
            </ul>

            <p className="mt-10 rounded-xl border border-zinc-800/80 bg-zinc-900/30 px-5 py-4 text-center text-sm text-zinc-500 md:text-left">
              Última actualización: <span className="text-zinc-400">abril de 2026</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
