// src/components/CorghiNoMundo.jsx
import Reveal from './Reveal'

const STATS = [
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

        <p className="mx-auto mt-6 max-w-3xl font-body text-lg leading-relaxed text-gray-600">
          A Corghi é líder no mercado italiano, além de ser líder no mercado internacional. Cerca de 50%
          do volume de negócios é gerado na Europa — o "mercado interno" da marca — enquanto Extremo
          Oriente, Japão e Estados Unidos são os principais mercados estrangeiros, representando 40% do
          seu volume de negócios.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {STATS.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 150}>
              <p className="font-title text-3xl font-black text-brandRed">{stat.value}</p>
              <p className="mt-2 font-body text-sm text-gray-600">{stat.label}</p>
            </Reveal>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-4 text-left font-body text-base leading-relaxed text-gray-600">
          <p>
            A qualidade dos produtos e serviços permanece constante ao longo do tempo e em diferentes
            mercados. Os parceiros da Corghi sabem que podem confiar na empresa — para muitos deles, a
            colaboração continua por décadas.
          </p>
          <p>
            A competitividade da marca está diretamente ligada a uma presença forte e abrangente nos
            mercados mundiais e à capacidade de oferecer produtos de alta qualidade, uma linha ampla e
            diversificada, além de serviços de primeira qualidade onde quer que sejam necessários — política
            fielmente apoiada por seus distribuidores em todo o mundo.
          </p>
        </div>
      </div>
    </section>
  )
}
