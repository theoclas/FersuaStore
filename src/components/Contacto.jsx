import { useState } from 'react'
import { FACEBOOK_PAGE_URL } from '../constants/social.js'

export default function Contacto() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contacto" className="bg-zinc-900/80 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-50 md:text-4xl">Contacto</h2>
            <p className="mt-4 text-lg text-zinc-400">
              Escríbenos o llámanos para resolver dudas sobre coberturas, plazos o envíos especiales.
            </p>

            <ul className="mt-8 space-y-6 text-zinc-300">
              <li>
                <p className="text-sm font-semibold uppercase tracking-wide text-zinc-500">Correo</p>
                <a
                  href="mailto:Fernando.pala.99@Fersuastudio.com"
                  className="mt-1 inline-block text-lg font-medium text-blue-400 hover:text-blue-300"
                >
                  Fernando.pala.99@Fersuastudio.com
                </a>
              </li>
              <li>
                <p className="text-sm font-semibold uppercase tracking-wide text-zinc-500">Teléfono</p>
                <a
                  href="tel:+573013530292"
                  className="mt-1 inline-block text-lg font-medium text-blue-400 hover:text-blue-300"
                >
                  +57 301 353 02 92
                </a>
              </li>
              <li>
                <p className="text-sm font-semibold uppercase tracking-wide text-zinc-500">Facebook</p>
                <a
                  href={FACEBOOK_PAGE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex items-center gap-2 text-lg font-medium text-blue-400 hover:text-blue-300"
                >
                  <svg
                    className="h-5 w-5 shrink-0"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  FersuaStore en Facebook
                </a>
              </li>
              <li>
                <p className="text-sm font-semibold uppercase tracking-wide text-zinc-500">Horario de atención</p>
                <p className="mt-1 text-lg text-zinc-200">
                  Lunes a viernes, 9:00 – 18:00
                  <span className="mt-2 block text-sm text-zinc-500">Consulta fuera de horario por correo</span>
                </p>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 shadow-lg shadow-black/30 md:p-8">
            {sent ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-500/30">
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="mt-4 text-lg font-semibold text-zinc-50">Gracias por tu mensaje</p>
                <p className="mt-2 text-zinc-400">
                  En un entorno real, aquí se enviaría el formulario. Puedes contactarnos por correo o teléfono.
                </p>
                <button
                  type="button"
                  className="mt-6 text-sm font-medium text-blue-400 hover:text-blue-300"
                  onClick={() => setSent(false)}
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-zinc-300">
                    Nombre
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    required
                    autoComplete="name"
                    className="mt-1 w-full rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2.5 text-zinc-100 shadow-inner outline-none ring-blue-500/20 placeholder:text-zinc-500 focus:border-blue-500 focus:ring-4"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-zinc-300">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="mt-1 w-full rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2.5 text-zinc-100 shadow-inner outline-none ring-blue-500/20 placeholder:text-zinc-500 focus:border-blue-500 focus:ring-4"
                  />
                </div>
                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-zinc-300">
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={4}
                    required
                    className="mt-1 w-full resize-y rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2.5 text-zinc-100 shadow-inner outline-none ring-blue-500/20 placeholder:text-zinc-500 focus:border-blue-500 focus:ring-4"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-blue-600 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-blue-500"
                >
                  Enviar consulta
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
