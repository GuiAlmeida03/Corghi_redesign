// src/components/ProductLines.jsx
import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import elevatorPhoto from '../assets/products/hm-4502.png'
import truckBalancerPhoto from '../assets/products/proline150-truck.png'

const LINES = [
  {
    slug: '/linha-leve',
    title: 'Linha Leve',
    description: 'Equipamentos para carros de passeio: alinhadores 3D e elevadores de precisão.',
    bullets: ['Alinhadores 3D', 'Elevadores'],
    image: elevatorPhoto,
    imageAlt: 'Elevador automotivo Corghi ERCO HC 4502',
  },
  {
    slug: '/linha-pesada',
    title: 'Linha Pesada',
    description: 'Equipamentos para frotas e caminhões: balanceadoras e desmontadoras de pneus.',
    bullets: ['Balanceadoras', 'Desmontadoras de pneus'],
    image: truckBalancerPhoto,
    imageAlt: 'Balanceadora de pneus para linha pesada Corghi Proline 150',
  },
]

export default function ProductLines() {
  return (
    <section id="linhas" className="bg-bgDark py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center font-title text-3xl font-bold text-white md:text-4xl">
          Escolha sua linha de equipamentos
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {LINES.map((line, index) => (
            <Reveal key={line.slug} delay={index * 150}>
              <Link
                to={line.slug}
                className="group block rounded-lg border border-white/10 bg-bgDarkAlt p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brandRed hover:shadow-2xl"
              >
                <img src={line.image} alt={line.imageAlt} className="mx-auto h-48 w-auto object-contain" />
                <h3 className="mt-6 font-title text-2xl font-bold text-white">{line.title}</h3>
                <p className="mt-2 font-body text-textMuted">{line.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {line.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="rounded-full bg-white/5 px-3 py-1 font-body text-xs text-white"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
                <span className="mt-6 inline-block font-body font-semibold text-brandRed transition-transform duration-200 group-hover:translate-x-1">
                  Ver equipamentos →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
