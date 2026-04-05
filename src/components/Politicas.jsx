const SUPPORT_EMAIL = 'Fernando.pala.99@Fersuastudio.com'

const cambioDevolucionFields = [
  'Forma de cambio:',
  'Nombre completo:',
  'Cédula:',
  'Número de pedido:',
  'Fecha del pedido:',
  'Número de contacto:',
  'Producto:',
]

const blocks = [
  {
    title: 'Políticas de cambio y devoluciones',
    paragraphsBeforeFields: [
      'Si deseas hacer el cambio de alguno de los productos que adquiriste a través de nuestra tienda virtual, puedes hacerlo de la siguiente manera:',
      `En un plazo de cinco [5] días calendario desde la fecha de recepción del paquete puedes escribir al correo ${SUPPORT_EMAIL} o por la línea de atención al cliente Whatsapp número +57 3013530292 especificando la siguiente información:`,
    ],
    fieldList: cambioDevolucionFields,
    paragraphs: [
      'Te contestaremos indicando el procedimiento correspondiente y si la solicitud es autorizada de acuerdo a las políticas, términos y condiciones de CYP Shop',
      'Los costos de transporte y los demás que conlleve el cambio serán cubiertos por el cliente.',
      'Es importante que tengas en cuenta que: el producto que vas a cambiar no debe estar usado, modificado o alterado de su estado original, debe estar en buen estado, limpio y con sus etiquetas originales.',
      'Los cambios pueden tardar hasta 10 días hábiles.',
      'Horario de atención: De lunes a viernes de 8:00 a.m. a 12:30 p.m. y de 2:00 p.m. a 5:30 p.m. Solo puedes hacer cambio de producto 1 (una) vez.',
      'Los productos en promoción o con descuento, de nuestra sección de OFERTAS no tienen cambio. Estos productos presentan alguna de las siguientes condiciones: remanufacturadas o discontinuadas, por lo tanto, la garantía legal no será exigible.',
    ],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.75}
          d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-2.598M4.031 9.865a8.25 8.25 0 0113.803-2.598l3.181 3.182m0-4.991v4.99"
        />
      </svg>
    ),
  },
  {
    title: 'Error en la entrega del producto',
    paragraphs: [
      `Si el producto entregado no es el correcto, tendrás (5) días calendario a partir del momento de la entrega para informar acerca del error y solicitar el cambio, enviando un correo electrónico a ${SUPPORT_EMAIL} , de lunes a viernes de 8:00am a 12:30 pm y de 2:00pm a 5:30 pm.`,
      'Recibido el correo se procederá al análisis del caso, se confirmará si fue o no un error de LitDaily Shop quien, de ser así, asumirá el valor de recogida del producto y él envió del nuevo producto.',
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
    title: 'Derecho de retracto y reversión del pago',
    leadParagraph: (
      <>
        <strong className="font-semibold text-zinc-200">DERECHO DE RETRACTO:</strong> Tienda Virtual
      </>
    ),
    paragraphs: [
      'De conformidad con el artículo 47 de la ley 1480 de 2011, el cliente tendrá derecho a retractarse de su compra dentro de los cinco (5) días hábiles siguientes a la fecha de entrega de su pedido. En el evento en que se haga uso de la facultad de retracto, se resolverá el contrato y se deberá reintegrar el dinero que el consumidor hubiese pagado. El consumidor deberá devolver el producto al productor o proveedor por los mismos medios y en las mismas condiciones en que lo recibió. Los costos de transporte y los demás que conlleve la devolución del bien serán cubiertos por el consumidor. El término máximo para ejercer el derecho de retracto será de cinco (5) días hábiles contados a partir de la entrega del bien o de la celebración del contrato en caso de la prestación de servicios.',
    ],
    exceptionHeading: 'Se exceptúan del derecho de retracto, los siguientes casos:',
    listItems: [
      'En los contratos de prestación de servicios cuya prestación haya comenzado con el acuerdo del consumidor;',
      'En los contratos de suministro de bienes o servicios cuyo precio esté sujeto a fluctuaciones de coeficientes del mercado financiero que el productor no pueda controlar;',
      'En los contratos de suministro de bienes confeccionados conforme a las especificaciones del consumidor o claramente personalizados;',
      'En los contratos de suministro de bienes que, por su naturaleza, no puedan ser devueltos o puedan deteriorarse o caducar con rapidez;',
      'En los contratos de servicios de apuestas y loterías;',
      'En los contratos de adquisición de bienes perecederos;',
      'En los contratos de adquisición de bienes de uso personal',
    ],
    paragraphsAfterList: [
      'El proveedor deberá devolverle en dinero al consumidor todas las sumas pagadas sin que proceda a hacer descuentos o retenciones por concepto alguno. CYP SHOP devolverá al cliente la suma pagada en un plazo máximo de treinta (30) días calendario desde el momento en que ejerció el derecho.',
    ],
    subsections: [
      {
        heading: 'Para ejercer el derecho de retracto se debe tener en cuenta lo siguiente:',
        paragraphs: [
          `El cliente ejercerá el derecho de retracto enviando un correo electrónico a ${SUPPORT_EMAIL} con el asunto: retracto, enviando los datos de compra y de contacto, haciendo la solicitud formal de la devolución, dando fe de que el producto está en las mismas condiciones en las que fue recibido, a lo que se le responderá con la aprobación y las indicaciones a proseguir.`,
          'La solicitud deberá ser presentada por el titular de la compra dentro los 5 primeros días hábiles, contados a partir de la entrega del bien.',
          'El cliente deberá devolver inmediatamente con la notificación del ejercicio del derecho de retracto, el producto en las mismas condiciones que lo recibió, nuevo, sin daños o deterioro, con todas las etiquetas y empaques originales. Si el producto no se encuentra empacado en su empaque original, no se generará la recepción en CYP SHOP ni se aceptará.',
          'Los costos de transporte y los demás que conlleve la devolución del bien serán cubiertos por el cliente. Sí el producto a devolver fue pagado con tarjeta crédito se realizará el reembolso del dinero por medio de Payu solicitando la reversión del valor total o parcial.',
          'Si el producto fue cancelado con tarjeta débito, baloto o efecty se reembolsará la totalidad del dinero efectivamente pagado a la cuenta de ahorros que nos informe mediante transferencia bancaria.',
          'La devolución del dinero se realizará dentro de los treinta (30) días calendario siguientes a la fecha en que CYP SHOP reciba los productos devueltos en su bodega y que informe que los mismos se encuentran en las mismas condiciones en las que se entregaron al Cliente, que el derecho de retracto se ejerció en el término indicado en los presentes Términos y Condiciones y en la ley para ello y que en consecuencia acepte el retracto.',
          'No aplica para artículos vendidos en el exterior.',
        ],
      },
    ],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.75}
          d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5z"
        />
      </svg>
    ),
  },
  {
    title: 'Política de privacidad',
    paragraphs: [
      'La presente Política de Privacidad establece los términos en que CYP Shop, usa y protege la información que es proporcionada por sus usuarios al momento de utilizar su sitio web. Esta compañía está comprometida con la seguridad de los datos de sus usuarios. Cuando le pedimos llenar los campos de información personal con la cual usted pueda ser identificado, lo hacemos asegurando que solo se empleará de acuerdo con los términos de este documento. Sin embargo esta Política de Privacidad puede cambiar con el tiempo o ser actualizada por lo que le recomendamos y enfatizamos revisar continuamente esta página para asegurarse que está de acuerdo con dichos cambios.',
    ],
    subsections: [
      {
        heading: 'INFORMACIÓN QUE ES RECOGIDA:',
        paragraphs: [
          'Nuestro sitio web podrá recoger información personal por ejemplo: Nombre, información de contacto como su dirección de correo electrónico, número de celular o información demográfica. Así mismo cuando sea necesario podrá ser requerida información específica para procesar algún pedido o realizar una entrega o facturación.',
        ],
      },
      {
        heading: 'USO DE LA INFORMACIÓN RECOGIDA:',
        paragraphs: [
          'Nuestro sitio web emplea la información con el fin de proporcionar el mejor servicio posible, particularmente para mantener un registro de usuarios, de pedidos en caso de que aplique, y mejorar nuestros productos y servicios. Es posible que sean enviados correos electrónicos periódicamente a través de nuestro sitio con ofertas especiales, nuevos productos y otra información publicitaria que consideremos relevante para usted o que pueda brindarle algún beneficio, estos correos electrónicos serán enviados a la dirección que usted proporcione y podrán ser cancelados en cualquier momento.',
          'CYP Shop está altamente comprometido para cumplir con el compromiso de mantener su información segura. Usamos los sistemas más avanzados y los actualizamos constantemente para asegurarnos que no exista ningún acceso no autorizado.',
        ],
      },
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
    title: 'Política de envío',
    paragraphs: [
      'Tiempo de envío: 48/72 horas a ciudades principales. Esto puede variar dependiendo de los días hábiles, son tiempos estimados.',
      'El envío será gratis siempre y cuando se especifique en la oferta.',
      'El tiempo de procesamiento es de 24 horas hábiles aproximadamente, después de este periodo de tiempo recibirás tu guía para rastrear tu pedido.',
    ],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.75}
          d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
        />
      </svg>
    ),
  },
]

/**
 * Primeras tres secciones con imagen:
 * - `float`: texto rodea la imagen (aprovecha el hueco bajo la foto; imagen a la izquierda).
 * - `split`: dos columnas fijas texto | imagen (como el layout anterior), sin flotación.
 */
const imagePairs = [
  {
    blockIndex: 0,
    src: '/media/politicas-2.png',
    alt: 'Políticas de cambio y atención',
    layout: 'float',
    imageOnLeft: true,
  },
  {
    blockIndex: 1,
    src: '/media/politicas-1.png',
    alt: 'Políticas y compromiso CYP Shop',
    layout: 'split',
    imageOnLeft: false,
  },
  {
    blockIndex: 2,
    src: '/media/politicas-3.png',
    alt: 'Privacidad y envíos',
    layout: 'float',
    imageOnLeft: true,
  },
]

function PolicyFigureInner({ src, alt }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900/50 shadow-xl shadow-black/25 ring-1 ring-white/[0.06]">
      <img
        src={src}
        alt={alt}
        className="aspect-[4/3] w-full object-cover object-center md:aspect-[5/4]"
        loading="lazy"
      />
    </div>
  )
}

/** Dos columnas alineadas arriba: texto a la izquierda, imagen a la derecha (sin huecos raros a la izquierda de la foto). */
function PolicySplitColumns({ block, src, alt }) {
  return (
    <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-10 xl:gap-12">
      <div className="order-1 min-w-0 flex-1">
        <div className="min-w-0 [overflow-wrap:anywhere]">
          <PolicyBlock {...block} />
        </div>
      </div>
      <figure className="order-2 w-full shrink-0 lg:max-w-[46%] lg:basis-[46%] xl:max-w-[45%]">
        <PolicyFigureInner src={src} alt={alt} />
      </figure>
    </div>
  )
}

/**
 * Imagen flotante + texto: el texto usa el lateral y, al pasar la altura de la foto, también el ancho bajo la imagen.
 * Móvil: texto primero, imagen debajo (`flex-col-reverse`).
 */
function PolicyFloatWrap({ block, src, alt, imageOnLeft }) {
  const figureShell = (
    <figure
      className={
        imageOnLeft
          ? 'mt-6 w-full max-w-full md:float-left md:mb-4 md:mt-0 md:mr-8 md:w-[min(100%,42%)] lg:mr-10 lg:w-[40%]'
          : 'mt-6 w-full max-w-full md:float-right md:mb-4 md:ml-8 md:mt-0 md:w-[min(100%,42%)] lg:ml-10 lg:w-[40%]'
      }
    >
      <PolicyFigureInner src={src} alt={alt} />
    </figure>
  )

  const copy = (
    <div className="min-w-0 [overflow-wrap:anywhere]">
      <PolicyBlock {...block} />
    </div>
  )

  return (
    <div className="flex min-w-0 flex-col-reverse md:block after:block after:clear-both after:content-['']">
      {imageOnLeft ? (
        <>
          {figureShell}
          {copy}
        </>
      ) : (
        <>
          {copy}
          {figureShell}
        </>
      )}
    </div>
  )
}

function PolicyPairRow({ block, src, alt, imageOnLeft, layout }) {
  if (layout === 'split') {
    return <PolicySplitColumns block={block} src={src} alt={alt} />
  }
  return <PolicyFloatWrap block={block} src={src} alt={alt} imageOnLeft={imageOnLeft} />
}

function PolicyBlock({
  title,
  icon,
  leadParagraph,
  paragraphsBeforeFields,
  paragraphs = [],
  fieldList,
  exceptionHeading,
  listItems,
  paragraphsAfterList,
  subsections,
}) {
  return (
    <article className="group">
      <div className="flex gap-3 sm:gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600/15 text-blue-400 ring-1 ring-blue-500/15 transition group-hover:bg-blue-600/20 sm:h-11 sm:w-11">
          {icon}
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-base font-semibold text-zinc-50 sm:text-lg md:text-xl">{title}</h3>
          <div className="mt-3 space-y-3 text-sm leading-relaxed text-zinc-400 md:text-[0.9375rem]">
            {leadParagraph ? <p>{leadParagraph}</p> : null}
            {paragraphsBeforeFields?.map((p, i) => (
              <p key={`pre-${i}`}>{p}</p>
            ))}
            {fieldList?.length ? (
              <ul className="list-none space-y-1.5 border-l-2 border-blue-500/30 pl-4 text-zinc-300">
                {fieldList.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            ) : null}
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            {exceptionHeading ? <p className="font-medium text-zinc-300">{exceptionHeading}</p> : null}
            {listItems?.length ? (
              <ol className="list-decimal space-y-2 pl-5 marker:text-zinc-500">
                {listItems.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ol>
            ) : null}
            {paragraphsAfterList?.map((p, i) => (
              <p key={`after-${i}`}>{p}</p>
            ))}
            {subsections?.map((sub) => (
              <div key={sub.heading} className="space-y-3 pt-1">
                <h4 className="text-sm font-semibold uppercase tracking-wide text-zinc-300 md:text-[0.9375rem]">
                  {sub.heading}
                </h4>
                {sub.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}

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
            Cambios y devoluciones, error en la entrega, derecho de retracto, privacidad y envíos. Contenido
            alineado con la documentación oficial de la tienda.
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl border border-zinc-800/80 bg-zinc-900/20 p-5 shadow-xl shadow-black/20 ring-1 ring-white/[0.06] sm:p-7 md:p-8 lg:p-10">
            <div className="space-y-12 border-b border-zinc-800/60 pb-12 md:space-y-14 md:pb-14 lg:space-y-16 lg:pb-16">
              {imagePairs.map(({ blockIndex, src, alt, imageOnLeft, layout }) => (
                <PolicyPairRow
                  key={blockIndex}
                  block={blocks[blockIndex]}
                  src={src}
                  alt={alt}
                  imageOnLeft={imageOnLeft}
                  layout={layout}
                />
              ))}
            </div>

            <div className="divide-y divide-zinc-800/70 pt-10 md:pt-12">
              {blocks.slice(3).map((block) => (
                <div key={block.title} className="py-8 first:pt-0 md:py-9">
                  <PolicyBlock {...block} />
                </div>
              ))}
            </div>

            <p className="mt-8 border-t border-zinc-800/70 pt-6 text-center text-sm text-zinc-500 md:mt-10 md:text-left">
              Última actualización: <span className="text-zinc-400">abril de 2026</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
