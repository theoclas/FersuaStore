const benefits = [
  {
    title: 'Puntualidad',
    text: 'Ventanas de entrega acordadas y comunicación proactiva si hay cambios.',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.75}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: 'Seguridad en los paquetes',
    text: 'Buenas prácticas de embalaje y cadena de custodia para reducir riesgos en tránsito.',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.75}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    title: 'Atención al cliente',
    text: 'Canales claros para consultas, reclamaciones y seguimiento humano cuando lo necesitas.',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.75}
          d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
        />
      </svg>
    ),
  },
]

export default function Beneficios() {
  return (
    <section id="beneficios" className="border-y border-zinc-800 bg-zinc-950 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-50 md:text-4xl">Beneficios</h2>
          <p className="mt-4 text-lg text-zinc-400">
            Lo que nos importa es que confíes en cada envío, desde el primer kilómetro hasta la puerta final.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {benefits.map(({ title, text, icon }) => (
            <li
              key={title}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-8 shadow-lg shadow-black/25 transition hover:border-blue-500/40 hover:shadow-black/35"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/25">
                {icon}
              </div>
              <h3 className="mt-5 text-xl font-semibold text-zinc-50">{title}</h3>
              <p className="mt-2 text-zinc-400">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
