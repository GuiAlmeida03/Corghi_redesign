// src/components/CorghiNoMundo.jsx
const STATS = [
  { value: '1947', label: 'Fundação da Corghi na Emília, Itália' },
  { value: '150+', label: 'Países com presença da marca' },
  { value: '~50%', label: 'Do faturamento vindo da Europa' },
  { value: '~40%', label: 'Do faturamento vindo de Extremo Oriente, Japão e EUA' },
]

export default function CorghiNoMundo() {
  return (
    <section className="bg-surface py-20">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <span className="font-body text-sm font-semibold uppercase tracking-widest text-brandRed">
          Escala global
        </span>
        <h2 className="mt-3 font-title text-3xl font-bold text-textOnLight md:text-4xl">Corghi no Mundo</h2>
        <p className="mt-6 font-body text-lg leading-relaxed text-gray-600">
          Líder no mercado italiano de equipamentos para oficina, a Corghi opera diretamente na Espanha,
          França, Alemanha, Estados Unidos, China, Austrália e Brasil, com produtos presentes em mais de
          150 países.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <p className="font-title text-3xl font-black text-brandRed">{stat.value}</p>
              <p className="mt-2 font-body text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
