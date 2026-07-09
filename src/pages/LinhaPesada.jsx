// src/pages/LinhaPesada.jsx
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import CTASection from '../components/CTASection'
import { LINHA_PESADA_PRODUCTS } from '../data/products'

export default function LinhaPesada() {
  return (
    <>
      <section className="bg-bgDark py-20">
        <div className="mx-auto max-w-7xl px-6">
          <nav aria-label="breadcrumb" className="font-body text-sm text-textMuted">
            <Link to="/" className="hover:text-white">
              Início
            </Link>{' '}
            / Linha Pesada
          </nav>
          <h1 className="mt-4 font-title text-4xl font-black text-white md:text-5xl">Linha Pesada</h1>
          <p className="mt-4 max-w-2xl font-body text-lg text-textMuted">
            Balanceadoras e desmontadoras de pneus para frotas e caminhões, construídas para operação
            contínua.
          </p>
        </div>
      </section>

      <section className="bg-bgDarkAlt py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2">
          {LINHA_PESADA_PRODUCTS.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <CTASection />
    </>
  )
}
