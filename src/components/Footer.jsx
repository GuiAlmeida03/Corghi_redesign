// src/components/Footer.jsx
import logoOnDark from '../assets/brand/corghi-logo-on-dark.svg'
import { buildWhatsAppLink, CORGHI_WHATSAPP_TECNICO } from '../lib/whatsapp'

const SOCIAL_LINKS = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/corghidobrasiloficial',
    path: 'M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/corghidobrasiloficial/',
    path: 'M12 2.16c3.2 0 3.58 0 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s0 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58 0-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s0-3.58.07-4.85C2.38 3.9 3.9 2.38 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07c-4.35.2-6.78 2.62-6.98 6.98C.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.2-4.35-2.62-6.78-6.98-6.98C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84zM12 16a4 4 0 1 1 4-4 4 4 0 0 1-4 4zm6.41-10.85a1.44 1.44 0 1 0 1.44 1.44 1.44 1.44 0 0 0-1.44-1.44z',
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/user/CORGHIspa/featured',
    path: 'M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.51 3.5 12 3.5 12 3.5s-7.51 0-9.38.55A3.02 3.02 0 0 0 .5 6.19 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14C4.49 20.5 12 20.5 12 20.5s7.51 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.81zM9.6 15.6V8.4l6.4 3.6z',
  },
]

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

        <div className="flex gap-3">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brandRed"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                <path d={social.path} />
              </svg>
            </a>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
          <a
            href={buildWhatsAppLink(CORGHI_WHATSAPP_TECNICO, 'Olá, preciso de suporte técnico Corghi.')}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm text-accentYellow hover:text-white"
          >
            Suporte técnico via WhatsApp
          </a>
          <a
            href="https://corghi.conquistahost.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm text-textMuted hover:text-white"
          >
            Área restrita
          </a>
        </div>

        <p className="mt-2 font-body text-sm text-textMuted">
          © {new Date().getFullYear()} Corghi do Brasil. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
