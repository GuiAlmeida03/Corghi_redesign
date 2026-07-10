// src/components/Footer.jsx
import logoOnDark from '../assets/brand/corghi-logo-on-dark.svg'
import { buildWhatsAppLink, CORGHI_WHATSAPP_TECNICO } from '../lib/whatsapp'

export default function Footer() {
  return (
    <footer className="bg-bgDark pt-10 pb-28 md:py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-6 text-center">
        <img src={logoOnDark} alt="Corghi" className="h-10 w-auto" />

        <div className="font-body text-sm text-textMuted">
          <a href="tel:+551125979655" className="hover:text-white">
            (11) 2597-9655
          </a>
          <span className="mx-2">·</span>
          <a href="mailto:contato@corghidobrasil.com.br" className="hover:text-white">
            contato@corghidobrasil.com.br
          </a>
        </div>
        <p className="font-body text-sm text-textMuted">
          Via Anhanguera, 11072 — Km 16, Santa Fé, Osasco - SP, 06278-000
        </p>
        <a
          href={buildWhatsAppLink(CORGHI_WHATSAPP_TECNICO, 'Olá, preciso de suporte técnico Corghi.')}
          target="_blank"
          rel="noopener noreferrer"
          className="font-body text-sm text-accentYellow hover:text-white"
        >
          Suporte técnico via WhatsApp
        </a>

        <p className="mt-2 font-body text-sm text-textMuted">
          © {new Date().getFullYear()} Corghi do Brasil. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
