// src/components/Header.jsx
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { buildWhatsAppLink } from '../lib/whatsapp'
import logoMark from '../assets/brand/corghi-logo-mark.svg'

const NAV_LINKS = [
  { label: 'A Corghi', href: '/#a-corghi' },
  { label: 'Linha Leve', href: '/linha-leve' },
  { label: 'Linha Pesada', href: '/linha-pesada' },
  { label: 'Corghi no Brasil', href: '/#corghi-no-brasil' },
  { label: 'Contato', href: '/#contato' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="text-white transition-colors hover:text-brandRed">
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={buildWhatsAppLink('5511999999999')}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md bg-brandRed px-4 py-2 font-body text-sm font-semibold text-white transition-colors hover:bg-brandRedDark"
        >
          Orçamento
        </a>
      </div>
    </header>
  )
}
