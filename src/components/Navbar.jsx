import { useState } from 'react'
import { FACEBOOK_PAGE_URL } from '../constants/social.js'

const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#servicios', label: 'Servicios' },
  { href: FACEBOOK_PAGE_URL, label: 'Tienda', external: true },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#beneficios', label: 'Beneficios' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  const linkClass =
    'rounded-lg px-3 py-2 text-sm font-medium text-zinc-300 transition-colors hover:bg-zinc-800/80 hover:text-blue-400'
  const mobileLinkClass =
    'block rounded-lg px-3 py-3 text-base font-medium text-zinc-200 hover:bg-zinc-800/60'

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/90 bg-zinc-950/90 shadow-sm shadow-black/20 backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6"
        aria-label="Principal"
      >
        <a
          href="#inicio"
          className="flex shrink-0 items-center rounded-lg py-0.5 outline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-400"
          onClick={closeMenu}
        >
          <img
            src="/media/fersuastore_no_bg.png"
            alt="FersuaStore"
            className="h-9 w-auto max-w-[200px] object-contain object-left md:h-10"
            width={200}
            height={48}
          />
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map(({ href, label, external }) => (
            <li key={href + label}>
              <a
                href={href}
                className={linkClass}
                {...(external
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-zinc-300 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Abrir menú</span>
          {open ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`border-t border-zinc-800 bg-zinc-950 md:hidden ${open ? 'block' : 'hidden'}`}
      >
        <ul className="flex flex-col px-4 py-3">
          {navLinks.map(({ href, label, external }) => (
            <li key={href + label}>
              <a
                href={href}
                className={mobileLinkClass}
                {...(external
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
                onClick={closeMenu}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
