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
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const SCROLL_THRESHOLD_PX = 16 // switch to solid background shortly after the page starts scrolling
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD_PX)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function goToSection(anchorId) {
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

        <a
          href={buildWhatsAppLink(CORGHI_WHATSAPP_ORCAMENTO)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Solicitar orçamento via WhatsApp"
          className="rounded-md bg-brandRed px-4 py-2 font-body text-sm font-semibold text-white transition-colors hover:bg-brandRedDark"
        >
          Orçamento
        </a>
      </div>
    </header>
  )
}
