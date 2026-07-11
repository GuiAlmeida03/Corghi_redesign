// src/pages/ProdutoDetalhe.jsx
import { Link, useParams } from 'react-router-dom'
import { buildWhatsAppLink, CORGHI_WHATSAPP_ORCAMENTO } from '../lib/whatsapp'
import { findProductBySlug } from '../data/products'
import CTASection from '../components/CTASection'
import Reveal from '../components/Reveal'
import { useDocumentHead } from '../lib/useDocumentHead'

export default function ProdutoDetalhe() {
  const { slug } = useParams()
  const product = findProductBySlug(slug)

  useDocumentHead(
    product ? product.name : 'Produto não encontrado',
    product ? product.description : 'Produto não encontrado no catálogo Corghi.',
    product ? new URL(product.image, window.location.origin).href : undefined,
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

          {product.features && (
            <div className="mt-16 border-t border-white/10 pt-12">
              <h2 className="font-title text-xl font-bold text-white">Principais recursos</h2>
              <div className="mt-8 grid gap-8 sm:grid-cols-2">
                {product.features.map((feature, index) => (
                  <Reveal key={feature.title} delay={(index % 2) * 100}>
                    <h3 className="font-body font-semibold text-white">
                      <span aria-hidden="true">{feature.icon}</span> {feature.title}
                    </h3>
                    <p className="mt-1 font-body text-sm leading-relaxed text-textMuted">
                      {feature.description}
                    </p>
                  </Reveal>
                ))}
              </div>
            </div>
          )}

          <div className="mt-16 grid gap-4 border-t border-white/10 pt-8 font-body text-sm sm:grid-cols-2">
            {product.catalogUrl ? (
              <a
                href={product.catalogUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-white/10 px-4 py-3 text-center text-white transition-colors hover:border-brandRed hover:text-brandRed"
              >
                {product.catalogIsGeneral ? 'Catálogo geral Corghi (PDF) ↓' : 'Catálogo (PDF) ↓'}
              </a>
            ) : (
              // TODO: o PDF de catálogo deste produto não está disponível/está com link quebrado
              // no site oficial no momento — reavaliar quando a Corghi atualizar o material.
              <span className="rounded-md border border-white/10 px-4 py-3 text-center text-textMuted opacity-60">
                Catálogo (PDF) — indisponível
              </span>
            )}

            {product.videoUrl ? (
              <a
                href={product.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-white/10 px-4 py-3 text-center text-white transition-colors hover:border-brandRed hover:text-brandRed"
              >
                Vídeo do produto ▶
              </a>
            ) : (
              // TODO: sem vídeo específico deste produto publicado no canal oficial no momento.
              <span className="rounded-md border border-white/10 px-4 py-3 text-center text-textMuted opacity-60">
                Vídeo do produto — indisponível
              </span>
            )}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
