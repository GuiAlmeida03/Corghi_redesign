// src/components/ProductCatalog.jsx
import { useMemo, useState } from 'react'
import ProductCard from './ProductCard'
import Reveal from './Reveal'

const ALL_CATEGORIES_LABEL = 'Todos'

export default function ProductCatalog({ products }) {
  const [category, setCategory] = useState(ALL_CATEGORIES_LABEL)
  const [search, setSearch] = useState('')

  const categories = useMemo(
    () => [ALL_CATEGORIES_LABEL, ...new Set(products.map((product) => product.category))],
    [products],
  )

  const filteredProducts = useMemo(() => {
    const query = search.trim().toLowerCase()
    return products.filter((product) => {
      const matchesCategory = category === ALL_CATEGORIES_LABEL || product.category === category
      const matchesSearch = !query || product.name.toLowerCase().includes(query)
      return matchesCategory && matchesSearch
    })
  }, [products, category, search])

  return (
    <div>
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <input
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Pesquisar equipamento..."
          aria-label="Pesquisar equipamento"
          className="w-full rounded-md border border-white/10 bg-bgDark px-4 py-2 font-body text-sm text-white placeholder:text-textMuted focus:border-brandRed focus:outline-none focus:ring-2 focus:ring-brandRed/40 sm:max-w-xs"
        />

        <div className="flex flex-wrap gap-2">
          {categories.map((categoryOption) => (
            <button
              key={categoryOption}
              type="button"
              onClick={() => setCategory(categoryOption)}
              aria-pressed={category === categoryOption}
              className={`rounded-full px-4 py-1.5 font-body text-sm font-medium transition-colors ${
                category === categoryOption
                  ? 'bg-brandRed text-white'
                  : 'bg-white/5 text-textMuted hover:bg-white/10 hover:text-white'
              }`}
            >
              {categoryOption}
            </button>
          ))}
        </div>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid gap-8 md:grid-cols-2">
          {filteredProducts.map((product, index) => (
            <Reveal key={product.slug} delay={index * 100}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      ) : (
        <p className="font-body text-textMuted">Nenhum equipamento encontrado para essa busca.</p>
      )}
    </div>
  )
}
