// src/components/Hero.jsx
import { buildWhatsAppLink, CORGHI_WHATSAPP_ORCAMENTO } from '../lib/whatsapp'
import logoMark from '../assets/brand/corghi-logo-mark.svg'
import alignerPhoto from '../assets/products/exact-linear-plus.png'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-bgDark">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2 md:py-32">
        <div className="animate-fade-in-up">
          <img src={logoMark} alt="Corghi" className="mb-8 h-16 w-auto" />
          <h1 className="font-title text-4xl font-black leading-tight text-white md:text-5xl">
            Equipamentos de precisão para sua oficina
          </h1>
          <p className="mt-6 max-w-md font-body text-lg text-textMuted">
            Marca italiana homologada pelas principais montadoras e fabricantes de pneus. Balanceadoras,
            desmontadoras, alinhadores 3D e elevadores para linha leve e pesada.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={buildWhatsAppLink(CORGHI_WHATSAPP_ORCAMENTO)}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-brandRed px-6 py-3 font-body font-semibold text-white transition-colors hover:bg-brandRedDark"
            >
              Falar no WhatsApp
            </a>
            <button
              type="button"
              onClick={() => document.getElementById('linhas')?.scrollIntoView({ behavior: 'smooth' })}
              className="rounded-md border border-white/30 px-6 py-3 font-body font-semibold text-white transition-colors hover:border-white"
            >
              Conheça os equipamentos
            </button>
          </div>
        </div>

        <div className="relative hidden animate-fade-in-up md:block" style={{ animationDelay: '200ms' }}>
          <img
            src={alignerPhoto}
            alt="Alinhador 3D Corghi EXACT LINEAR PLUS"
            className="mx-auto max-h-[420px] w-auto drop-shadow-2xl [mix-blend-mode:screen]"
          />
        </div>
      </div>
    </section>
  )
}
