const items = [
  {
    title: 'Pago contra entrega',
    desc: 'Mayor seguridad: pagas cuando el paquete está en tus manos. Ideal para comprar con confianza y sin adelantar dinero en línea.',
    image: '/media/recibiendo.png',
    alt: 'Cliente recibiendo un pedido con seguridad',
  },
  {
    title: 'Envíos seguros de paquetes',
    desc: 'Embalaje cuidadoso, manipulación responsable y entrega con seguimiento para que lo que pediste llegue en las mejores condiciones.',
    image: '/media/paquetes.png',
    alt: 'Paquetes preparados y protegidos para el envío',
  },
  {
    title: 'Hogar, bienestar y estilo de vida',
    desc: 'Variedad de productos pensados para decorar, organizar y disfrutar tu día a día: confort, estética y pequeños detalles que marcan la diferencia.',
    image: '/media/hogar.png',
    alt: 'Productos para el hogar y bienestar',
  },
]

export default function Servicios() {
  return (
    <section id="servicios" className="bg-zinc-950 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-50 md:text-4xl">Por qué elegirnos</h2>
          <p className="mt-4 text-lg text-zinc-400">
            Unimos seguridad en el pago, cuidado en el envío y una oferta amplia para tu hogar y tu bienestar.
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
