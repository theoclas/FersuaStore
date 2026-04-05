const benefits = [
  {
    title: 'Pago contra entrega',
    text: 'Recibes, revisas y pagas en el momento de la entrega. Compras con la tranquilidad de ver el producto antes de desembolsar.',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.75}
          d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3 3.75h10.5m0-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25H16.5m-13.5-9V4.875A1.875 1.875 0 015.25 3h4.5c.621 0 1.125.504 1.125 1.125v4.125M8.25 9h.008v.008H8.25V9zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm3.75 0h.008v.008H12.375V9zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
        />
      </svg>
    ),
  },
  {
    title: 'Paquetes protegidos',
    text: 'Embalaje y manejo pensados para que tus compras lleguen bien cuidadas, desde el almacén hasta tu puerta.',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.75}
          d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
        />
      </svg>
    ),
  },
  {
    title: 'Hogar y estilo de vida',
    text: 'Artículos que suman comodidad, orden y bienestar: para que tu espacio se sienta más tuyo cada día.',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.75}
          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
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
            Seguridad al pagar, cuidado en el envío y una selección pensada para tu hogar y tu día a día.
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
