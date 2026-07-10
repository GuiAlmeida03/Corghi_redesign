// src/pages/ProdutoDetalhe.jsx
import { Link, useParams } from 'react-router-dom'
import { buildWhatsAppLink, CORGHI_WHATSAPP_ORCAMENTO } from '../lib/whatsapp'
import { findProductBySlug } from '../data/products'
import CTASection from '../components/CTASection'
import { useDocumentHead } from '../lib/useDocumentHead'

export default function ProdutoDetalhe() {
  const { slug } = useParams()
  const product = findProductBySlug(slug)

  useDocumentHead(
    product ? product.name : 'Produto não encontrado',
    product ? product.description : 'Produto não encontrado no catálogo Corghi.',
  )

  if (!product) {
    return (
      <section className="bg-bgDark py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h1 className="font-title text-3xl font-bold text-white">Produto não encontrado</h1>
          <Link to="/" className="mt-4 inline-block font-body text-brandRed hover:text-brandRedDark">
            Voltar para o início
          </Link>
        </div>
      </section>
    )
  }

  const lineHref = product.category === 'Balanceadora' || product.category === 'Desmontadora de pneus'
    ? '/linha-pesada'
    : '/linha-leve'
  const lineLabel = lineHref === '/linha-pesada' ? 'Linha Pesada' : 'Linha Leve'

  return (
    <>
      <section className="bg-bgDark py-20">
        <div className="mx-auto max-w-5xl px-6">
          <nav aria-label="breadcrumb" className="font-body text-sm text-textMuted">
            <Link to="/" className="hover:text-white">
              Início
            </Link>{' '}
            /{' '}
            <Link to={lineHref} className="hover:text-white">
              {lineLabel}
            </Link>{' '}
            / {product.name}
          </nav>

          <div className="mt-8 grid gap-12 md:grid-cols-2 md:items-center">
            <img
              src={product.image}
              alt={product.imageAlt}
              className="mx-auto h-64 w-auto object-contain md:h-80"
            />

            <div>
              <span className="font-body text-xs uppercase tracking-widest text-accentYellow">
                {product.category}
              </span>
              <h1 className="mt-2 font-title text-4xl font-black text-white">{product.name}</h1>
              <p className="mt-4 font-body text-lg text-textMuted">{product.description}</p>

              <a
                href={buildWhatsAppLink(CORGHI_WHATSAPP_ORCAMENTO, `Quero orçamento do ${product.name}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block rounded-md bg-brandRed px-6 py-3 font-body font-semibold text-white transition-colors hover:bg-brandRedDark"
              >
                Solicitar orçamento
              </a>
            </div>
          </div>

          <div className="mt-16 grid gap-4 border-t border-white/10 pt-8 font-body text-sm text-textMuted sm:grid-cols-2">
            {/* TODO: substituir pelos links reais de catálogo (PDF) e ficha técnica (PDF) deste produto, disponíveis em corghidobrasil.com */}
            <span className="rounded-md border border-white/10 px-4 py-3 text-center opacity-60">
              Catálogo (PDF) — em breve
            </span>
            {/* TODO: substituir pelo vídeo real do produto no YouTube (canal CORGHIspa) */}
            <span className="rounded-md border border-white/10 px-4 py-3 text-center opacity-60">
              Vídeo do produto — em breve
            </span>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
