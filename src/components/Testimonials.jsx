const TESTIMONIALS = [
  {
    quote: 'Equipamento robusto e suporte técnico rápido. Nossa oficina reduziu o tempo de alinhamento pela metade.',
    author: 'Oficina Referência',
    role: 'São Paulo, SP',
  },
  {
    quote: 'Trabalhamos com frotas pesadas e a balanceadora Corghi aguenta o ritmo sem parar.',
    author: 'Transportadora Rota Sul',
    role: 'Frota própria',
  },
  {
    quote: 'Homologação de montadora foi decisiva pra escolher a Corghi na nossa revenda técnica.',
    author: 'Revenda Autopeças Central',
    role: 'Revenda técnica',
  },
]

export default function Testimonials() {
  return (
    <section className="bg-surfaceAlt py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center font-title text-3xl font-bold text-textOnLight md:text-4xl">
          Quem usa Corghi recomenda
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure key={t.author} className="rounded-lg bg-white p-6 shadow-sm">
              {/* TODO: substituir pelo depoimento e foto reais do cliente quando disponíveis */}
              <div className="mb-4 h-12 w-12 rounded-full bg-bgDark" aria-hidden="true" />
              <blockquote className="font-body text-gray-700">&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className="mt-4 font-body text-sm font-semibold text-textOnLight">
                {t.author}
                <span className="block font-normal text-gray-500">{t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
