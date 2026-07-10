import { buildWhatsAppLink, CORGHI_WHATSAPP_ORCAMENTO } from '../lib/whatsapp'

export default function ProductCard({ product }) {
  const quoteMessage = `Quero orçamento do ${product.name}`

  return (
    <div className="rounded-lg border border-white/10 bg-bgDarkAlt p-6 transition-colors duration-200 hover:border-brandRed">
      <img src={product.image} alt={product.imageAlt} className="mx-auto h-40 w-auto object-contain" />
      <span className="mt-4 block font-body text-xs uppercase tracking-widest text-accentYellow">
        {product.category}
      </span>
      <h3 className="mt-1 font-title text-xl font-bold text-white">{product.name}</h3>
      <a
        href={buildWhatsAppLink(CORGHI_WHATSAPP_ORCAMENTO, quoteMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block font-body text-sm font-semibold text-brandRed hover:text-brandRedDark"
      >
        Solicitar orçamento →
      </a>
    </div>
  )
}
