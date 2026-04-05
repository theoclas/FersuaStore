const items = [
  {
    title: 'Envíos nacionales',
    desc: 'Recogida y entrega en todo el territorio con tiempos competitivos y rutas optimizadas.',
    image: '/media/paquetes.png',
    alt: 'Paquetes listos para envío',
  },
  {
    title: 'Entrega a domicilio',
    desc: 'Llevamos tu paquete hasta la puerta con ventanas horarias flexibles y confirmación de entrega.',
    image: '/media/hogar.png',
    alt: 'Entrega a domicilio',
  },
  {
    title: 'Rapidez y seguimiento',
    desc: 'Actualizaciones del estado del envío y atención para resolver incidencias con agilidad.',
    image: '/media/recibiendo.png',
    alt: 'Cliente recibiendo un paquete',
  },
]

export default function Servicios() {
  return (
    <section id="servicios" className="bg-zinc-950 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-50 md:text-4xl">Servicios</h2>
          <p className="mt-4 text-lg text-zinc-400">
            Soluciones de envío pensadas para personas y empresas que valoran la puntualidad y la tranquilidad.
          </p>
        </div>

        <ul className="mt-12 grid gap-8 md:grid-cols-3">
          {items.map(({ title, desc, image, alt }) => (
            <li
              key={title}
              className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/70 shadow-lg shadow-black/30 transition hover:border-zinc-700 hover:shadow-black/40"
            >
              <div className="aspect-[4/3] overflow-hidden bg-zinc-900">
                <img src={image} alt={alt} className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-zinc-50">{title}</h3>
                <p className="mt-2 text-zinc-400">{desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
