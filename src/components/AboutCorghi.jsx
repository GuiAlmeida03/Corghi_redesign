// src/components/AboutCorghi.jsx
const TIMELINE = [
  {
    year: '1947',
    title: 'O começo, em Emilia',
    description:
      'Os irmãos Erminio e Remo Corghi começam a colocar em prática suas habilidades de negócios e criatividade na cidade de Emilia, no norte da Itália, construindo rádios e equipamentos para caça.',
  },
  {
    year: '1954',
    title: 'Expansão para eletrodomésticos',
    description:
      'Nasce a Corghi Eletrodomésticos, com o rouxinol como símbolo da marca. A empresa desenvolve suas habilidades mecânicas em um vasto setor: estabilizadores de tensão de TV, máquinas agrícolas, eletrodomésticos, equipamentos mecânicos e têxteis.',
  },
  {
    year: '1960',
    title: 'A entrada no setor automobilístico',
    description:
      'Com o boom do setor automobilístico, os irmãos Corghi projetam e desenvolvem o primeiro desmontador de pneus do mundo — o marco que fez a empresa avançar e nunca mais parar de crescer.',
  },
]

export default function AboutCorghi() {
  return (
    <section id="a-corghi" className="bg-surface py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <span className="font-body text-sm font-semibold uppercase tracking-widest text-brandRed">
            Tradição italiana desde 1947
          </span>
          <h2 className="mt-3 font-title text-3xl font-bold text-textOnLight md:text-4xl">A Corghi</h2>
          <p className="mx-auto mt-6 max-w-3xl font-body text-lg leading-relaxed text-gray-600">
            A Corghi surgiu de uma forma simples, mas exemplar, na cidade de Emilia — região do norte da
            Itália conhecida, desde o pós-guerra, pelo potencial industrial e por ser lar de indústrias do
            setor automobilístico.
          </p>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {TIMELINE.map((milestone) => (
            <div key={milestone.year} className="border-t-2 border-brandRed pt-4">
              <span className="font-title text-2xl font-black text-brandRed">{milestone.year}</span>
              <h3 className="mt-2 font-title text-lg font-bold text-textOnLight">{milestone.title}</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-gray-600">
                {milestone.description}
              </p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-16 max-w-3xl text-center font-body text-lg leading-relaxed text-gray-600">
          Hoje a Corghi é uma das maiores e mais extensas redes de distribuição de equipamentos para
          veículos do mundo — homologada pela maioria das montadoras e fabricantes de pneus, com suporte
          técnico especializado e peças de reposição para toda a linha leve e pesada no Brasil.
        </p>

        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={() =>
              document.getElementById('missao-visao-valores')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="font-body text-sm font-semibold text-brandRed hover:text-brandRedDark"
          >
            Conheça nossa missão, visão e valores ↓
          </button>
        </div>
      </div>
    </section>
  )
}
