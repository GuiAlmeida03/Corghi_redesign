// src/components/Eventos.jsx
// Event history pulled from corghidobrasil.com/category/eventos/ (2026-07-11).
import Reveal from './Reveal'

const EVENTOS = [
  {
    title: 'Autonor 2025',
    date: 'Setembro de 2025',
    description: 'Recife, PE — 17 a 20 de setembro.',
  },
  {
    title: 'Automec 2025',
    date: 'Março de 2025',
    description: 'Convite oficial da Corghi para a maior feira automotiva da América Latina.',
  },
  {
    title: 'Fórmula Truck em Interlagos',
    date: 'Fevereiro de 2025',
    description: 'Participação da Corghi em parceria com a Trovão Brasil.',
  },
  {
    title: 'Fenatran 2024',
    date: 'Novembro de 2024',
    description: 'São Paulo Expo — 4 a 8 de novembro.',
  },
  {
    title: 'Centro Parts — Goiânia',
    date: 'Julho de 2024',
    description: '17 a 20 de julho.',
  },
  {
    title: 'Autopar 2024',
    date: 'Maio de 2024',
    description: 'Expotrade Pinhais, Curitiba, PR — 8 a 11 de maio. Estande 321.',
  },
  {
    title: 'Rio Parts 2023',
    date: '2023',
    description: 'Feira de autopeças e serviços automotivos do Rio de Janeiro.',
  },
  {
    title: 'Autonor 2023',
    date: 'Setembro de 2023',
    description: 'Recife, PE.',
  },
  {
    title: 'Inauguração MMV Pneus — Goiânia',
    date: 'Abril de 2023',
    description: '27 de abril — novo parceiro Corghi na região.',
  },
]

export default function Eventos() {
  return (
    <section id="eventos" className="bg-bgDark py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="font-body text-sm font-semibold uppercase tracking-widest text-accentYellow">
            Onde estivemos
          </span>
          <h2 className="mt-3 font-title text-3xl font-bold text-white md:text-4xl">Eventos</h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-textMuted">
            A Corghi participa das principais feiras do setor automotivo em todo o Brasil.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {EVENTOS.map((evento, index) => (
            <Reveal
              key={evento.title}
              delay={(index % 3) * 100}
              className="rounded-lg border border-white/10 bg-bgDarkAlt p-5"
            >
              <span className="font-body text-xs font-semibold uppercase tracking-wide text-accentYellow">
                {evento.date}
              </span>
              <h3 className="mt-1 font-title text-lg font-bold text-white">{evento.title}</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-textMuted">{evento.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
