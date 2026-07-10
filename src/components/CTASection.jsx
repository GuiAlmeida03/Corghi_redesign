// src/components/CTASection.jsx
import { buildWhatsAppLink, CORGHI_WHATSAPP_ORCAMENTO } from '../lib/whatsapp'

export default function CTASection() {
  return (
    <section id="contato" className="bg-brandRed py-16">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="font-title text-3xl font-bold text-white md:text-4xl">
          Pronto para equipar sua oficina?
        </h2>
        <p className="mt-4 font-body text-white/90">
          Fale agora com um consultor Corghi e receba um orçamento sem compromisso.
        </p>
        <a
          href={buildWhatsAppLink(CORGHI_WHATSAPP_ORCAMENTO)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded-md bg-bgDark px-8 py-3 font-body font-semibold text-white transition-colors hover:bg-black"
        >
          Falar no WhatsApp
        </a>
      </div>
    </section>
  )
}
