// src/components/MissaoVisaoValores.jsx
import Reveal from './Reveal'

const VALUES = [
  {
    title: 'Integridade e ética',
    description: 'Nosso comportamento é baseado na correção, honestidade e imparcialidade.',
  },
  {
    title: 'Promoção de pessoas',
    description: 'Respeitamos as pessoas e damos total oportunidade para expressar seu próprio potencial.',
  },
  {
    title: 'Transparência',
    description:
      'Capacidade de ouvir as pessoas, nos comunicando com elas, sendo flexíveis e com respeito às regras.',
  },
  {
    title: 'Inovação',
    description:
      'Queremos ser inovadores com nossos produtos, processos e serviços propostos a clientes, fornecedores e funcionários.',
  },
  {
    title: 'Prestação de contas',
    description:
      'Cada um de nós sempre dá o melhor de si, contribuindo para o sucesso dos negócios, movidos por paixão pelo trabalho.',
  },
  {
    title: 'Pertencimento',
    description:
      'Temos orgulho da nossa história e operamos respeitando o meio ambiente e as pessoas, garantindo a satisfação dos clientes.',
  },
  {
    title: 'Velocidade de reação',
    description: 'Estamos conscientes de que nosso grupo deve se adaptar a um mundo cada vez mais versátil.',
  },
  {
    title: 'Espírito de sacrifício',
    description: 'Quando necessário, sabemos como realizar sacrifícios para alcançar objetivos comuns.',
  },
  {
    title: 'Lucro',
    description:
      'Compartilhamos o princípio de que a lucratividade da empresa é a base para o desenvolvimento do seu futuro.',
  },
]

export default function MissaoVisaoValores() {
  return (
    <section id="missao-visao-valores" className="bg-bgDarkAlt py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <span className="font-body text-sm font-semibold uppercase tracking-widest text-accentYellow">
            Nossos princípios
          </span>
          <h2 className="mt-3 font-title text-3xl font-bold text-white md:text-4xl">
            Missão, Visão e Valores
          </h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <Reveal className="rounded-lg border border-white/10 p-6">
            <h3 className="font-title text-xl font-bold text-brandRed">Missão</h3>
            <p className="mt-3 font-body leading-relaxed text-textMuted">
              Ser a companhia líder mundial em tecnologia, design, produção, comercialização e assistência
              de equipamentos para montadoras, especialistas em pneus, auto centers e oficinas — com uma
              linha completa de produtos de excelente qualidade e características inovadoras e
              competitivas.
            </p>
          </Reveal>
          <Reveal delay={120} className="rounded-lg border border-white/10 p-6">
            <h3 className="font-title text-xl font-bold text-brandRed">Visão</h3>
            <p className="mt-3 font-body leading-relaxed text-textMuted">
              Ser líder mundial em design, produção, vendas e assistência de equipamentos para
              especialistas em pneus e oficinas, oferecendo produtos desenvolvidos para atender plenamente
              as necessidades dos clientes em todas as áreas e segmentos de mercado.
            </p>
          </Reveal>
        </div>

        <h3 className="mt-16 text-center font-title text-xl font-bold text-white">Valores</h3>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {VALUES.map((value, index) => (
            <Reveal key={value.title} delay={(index % 3) * 100} className="rounded-lg bg-white/5 p-5">
              <h4 className="font-title text-sm font-bold uppercase tracking-wide text-accentYellow">
                {value.title}
              </h4>
              <p className="mt-2 font-body text-sm leading-relaxed text-textMuted">{value.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
