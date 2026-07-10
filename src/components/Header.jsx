// src/components/Header.jsx
import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { buildWhatsAppLink, CORGHI_WHATSAPP_ORCAMENTO } from '../lib/whatsapp'
import logoMark from '../assets/brand/corghi-logo-mark.svg'

const NAV_LINKS = [
  { label: 'A Corghi', anchor: 'a-corghi' },
  { label: 'Linha Leve', to: '/linha-leve' },
  { label: 'Linha Pesada', to: '/linha-pesada' },
  { label: 'Corghi no Brasil', anchor: 'corghi-no-brasil' },
  { label: 'Contato', anchor: 'contato' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const SCROLL_THRESHOLD_PX = 16 // switch to solid background shortly after the page starts scrolling
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD_PX)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname])

  function goToSection(anchorId) {
    setMobileMenuOpen(false)
    if (location.pathname === '/') {
      document.getElementById(anchorId)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/', { state: { scrollTo: anchorId } })
    }
  }

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-300 ${
        scrolled ? 'bg-bgDark/95 backdrop-blur shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" aria-label="Corghi do Brasil — página inicial">
          <img src={logoMark} alt="Corghi" className="h-10 w-auto" />
        </Link>

        <nav aria-label="Navegação principal" className="hidden gap-8 font-body text-sm font-medium md:flex">
          {NAV_LINKS.map((link) =>
            link.to ? (
              <Link
                key={link.label}
                to={link.to}
                className="text-white transition-colors hover:text-brandRed"
              >
                {link.label}
              </Link>
            ) : (
              <button
                key={link.label}
                type="button"
                onClick={() => goToSection(link.anchor)}
                className="text-white transition-colors hover:text-brandRed"
              >
                {link.label}
              </button>
            ),
          )}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={buildWhatsAppLink(CORGHI_WHATSAPP_ORCAMENTO)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Solicitar orçamento via WhatsApp"
            className="rounded-md bg-brandRed px-4 py-2 font-body text-sm font-semibold text-white transition-colors hover:bg-brandRedDark"
          >
            Orçamento
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            className="flex h-9 w-9 items-center justify-center text-white md:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav
          id="mobile-nav"
          aria-label="Navegação principal (mobile)"
          className="flex flex-col gap-1 border-t border-white/10 bg-bgDark px-6 py-4 font-body text-sm font-medium md:hidden"
        >
          {NAV_LINKS.map((link) =>
            link.to ? (
              <Link
                key={link.label}
                to={link.to}
                className="rounded px-2 py-3 text-white transition-colors hover:text-brandRed"
              >
                {link.label}
              </Link>
            ) : (
              <button
                key={link.label}
                type="button"
                onClick={() => goToSection(link.anchor)}
                className="rounded px-2 py-3 text-left text-white transition-colors hover:text-brandRed"
              >
                {link.label}
              </button>
            ),
          )}
        </nav>
      )}
    </header>
  )
}
