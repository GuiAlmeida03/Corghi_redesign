// src/components/CorghiNoBrasil.jsx
import Reveal from './Reveal'

const STRUCTURE = [
  { label: 'Treinamento', description: 'Amplo espaço dedicado à capacitação técnica de clientes e equipe.' },
  { label: 'Estoque', description: 'Equipamentos e peças de reposição disponíveis para toda a linha leve e pesada.' },
  { label: 'Show-room', description: 'Espaço para conhecer os equipamentos Corghi de perto antes da compra.' },
  { label: 'Expedição', description: 'Estrutura própria de envio para atender oficinas, revendas e frotas em todo o país.' },
  { label: 'Manutenção', description: 'Suporte técnico especializado para assistência e reposição de peças.' },
]

export default function CorghiNoBrasil() {
  return (
    <section id="corghi-no-brasil" className="bg-bgDarkAlt py-20">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <span className="font-body text-sm font-semibold uppercase tracking-widest text-accentYellow">
          Desde 2013 no Brasil
        </span>
        <h2 className="mt-3 font-title text-3xl font-bold text-white md:text-4xl">Corghi no Brasil</h2>
        <p className="mx-auto mt-6 max-w-3xl font-body text-lg leading-relaxed text-textMuted">
          A Corghi do Brasil iniciou suas operações como filial em 2013, sendo a 7ª operação própria da
          marca fora da Itália. Os equipamentos Corghi são aprovados pela maioria das montadoras de
          automóveis, caminhões e fabricantes de pneus.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {STRUCTURE.map((item, index) => (
            <Reveal key={item.label} delay={index * 100} className="rounded-lg bg-white/5 p-5 text-left">
              <h3 className="font-title text-sm font-bold uppercase tracking-wide text-accentYellow">
                {item.label}
              </h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-textMuted">{item.description}</p>
            </Reveal>
          ))}
        </div>

        {/* TODO: substituir por mapa interativo de revendas por estado e fotos de eventos, quando disponíveis */}
      </div>
    </section>
  )
}
