import { FACEBOOK_PAGE_URL } from '../constants/social.js'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-zinc-800 bg-black text-zinc-400">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-10 md:flex-row md:flex-wrap md:items-center md:justify-between md:px-6">
        <a href="#inicio" className="flex items-center outline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-400">
          <img
            src="/media/fersuastore_no_bg.png"
            alt="FersuaStore"
            className="h-9 w-auto max-w-[180px] object-contain object-left"
            width={180}
            height={44}
          />
        </a>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-8 md:items-center">
          <a
            href={FACEBOOK_PAGE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg text-sm font-medium text-zinc-400 transition hover:text-[#1877F2]"
            aria-label="Ir a la tienda en Facebook (se abre en una pestaña nueva)"
          >
            <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            Tienda online
          </a>
          <div className="flex flex-col items-center gap-2 text-center text-sm md:items-end md:text-right">
            <a href="#politicas" className="text-zinc-500 transition hover:text-zinc-300">
              Políticas
            </a>
            <p>© {year} FersuaStore. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
