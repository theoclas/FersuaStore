const blocks = [
  {
    title: 'Uso del sitio',
    paragraphs: [
      'Este sitio web tiene carácter informativo y promocional sobre FersuaStore. Al navegar por él, aceptas utilizarlo de forma responsable y conforme a la legislación aplicable en Colombia.',
      'Los pedidos, cotizaciones y atención comercial principal se gestionan a través de los canales indicados en la sección de contacto y en nuestra página oficial en Facebook.',
    ],
  },
  {
    title: 'Privacidad de datos',
    paragraphs: [
      'Los datos personales que nos facilites por correo electrónico, teléfono o mensajes (por ejemplo, nombre, dirección de entrega o teléfono) se utilizarán únicamente para gestionar tu consulta, tu pedido o el envío, salvo obligación legal en contrario.',
      'No vendemos ni cedemos tus datos a terceros con fines comerciales ajenos al servicio. Puedes solicitar información sobre el tratamiento de tus datos o el ejercicio de tus derechos contactándonos por los medios publicados en esta web.',
    ],
  },
  {
    title: 'Envíos y pago contra entrega',
    paragraphs: [
      'Ofrecemos envíos a nivel nacional según disponibilidad y cobertura. Los plazos y costes pueden variar según la zona y el producto; la información concreta se confirma al momento de coordinar el pedido.',
      'Con la modalidad de pago contra entrega, el pago se realiza al recibir el paquete, una vez que hayas podido verificar el envío conforme a lo acordado. Cualquier condición particular se comunicará antes de confirmar el pedido.',
    ],
  },
  {
    title: 'Cambios, garantía y reclamaciones',
    paragraphs: [
      'Las políticas de cambios, devoluciones o garantía dependen del tipo de producto y se aplican según lo acordado en el canal de venta (por ejemplo, Facebook) y la normativa aplicable al consumidor.',
      'Para reclamaciones o incidencias con un pedido, contáctanos por los medios de contacto de esta página; atenderemos tu caso lo antes posible.',
    ],
  },
  {
    title: 'Actualizaciones',
    paragraphs: [
      'FersuaStore puede modificar estas políticas para adaptarlas a cambios legales o en el servicio. Te recomendamos revisar esta sección periódicamente. La fecha de la última actualización se indica al final.',
    ],
  },
]

export default function Politicas() {
  return (
    <section id="politicas" className="border-t border-zinc-800 bg-zinc-950 py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-50 md:text-4xl">Políticas</h2>
        <p className="mt-4 text-lg text-zinc-400">
          Información general sobre el uso de este sitio, privacidad, envíos y atención al cliente. Para
          detalles concretos de un pedido, utiliza los canales de contacto o nuestra tienda en Facebook.
        </p>

        <div className="mt-12 space-y-10">
          {blocks.map(({ title, paragraphs }) => (
            <article key={title}>
              <h3 className="text-xl font-semibold text-zinc-100">{title}</h3>
              <div className="mt-3 space-y-3 text-zinc-400">
                {paragraphs.map((p, i) => (
                  <p key={i} className="leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>

        <p className="mt-12 text-sm text-zinc-500">
          Última actualización: abril de 2026.
        </p>
      </div>
    </section>
  )
}
