// src/components/ContactForm.jsx
import { useState } from 'react'

const CONTACT_EMAIL = 'contato@corghidobrasil.com.br'

export default function ContactForm() {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    interesse: 'Orçamento',
    mensagem: '',
  })

  function updateField(field, value) {
    setForm((current) => ({ ...current, [field]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()

    const subject = form.assunto || `Contato pelo site — ${form.interesse}`
    const body = [
      `Nome: ${form.nome}`,
      `E-mail: ${form.email}`,
      `Telefone: ${form.telefone}`,
      `Interesse: ${form.interesse}`,
      '',
      form.mensagem,
    ].join('\n')

    // No backend on this static site — this opens the user's email client with the message
    // pre-filled, addressed to Corghi. It does not send anything automatically on its own.
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <section id="contato" className="bg-surface py-20">
      <div className="mx-auto max-w-2xl px-6">
        <div className="text-center">
          <span className="font-body text-sm font-semibold uppercase tracking-widest text-brandRed">
            Fale com a gente
          </span>
          <h2 className="mt-3 font-title text-3xl font-bold text-textOnLight md:text-4xl">Contato</h2>
          <p className="mx-auto mt-4 max-w-xl font-body text-gray-600">
            Preencha o formulário abaixo e enviaremos sua solicitação por e-mail — ou, se preferir,{' '}
            <a
              href="https://wa.me/5511942819477"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brandRed hover:text-brandRedDark"
            >
              fale direto no WhatsApp
            </a>
            .
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-10 space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="nome" className="font-body text-sm font-medium text-textOnLight">
                Nome
              </label>
              <input
                id="nome"
                type="text"
                required
                value={form.nome}
                onChange={(event) => updateField('nome', event.target.value)}
                className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 font-body text-textOnLight focus:border-brandRed focus:outline-none focus:ring-2 focus:ring-brandRed/40"
              />
            </div>
            <div>
              <label htmlFor="email" className="font-body text-sm font-medium text-textOnLight">
                E-mail
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(event) => updateField('email', event.target.value)}
                className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 font-body text-textOnLight focus:border-brandRed focus:outline-none focus:ring-2 focus:ring-brandRed/40"
              />
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="telefone" className="font-body text-sm font-medium text-textOnLight">
                Telefone
              </label>
              <input
                id="telefone"
                type="tel"
                value={form.telefone}
                onChange={(event) => updateField('telefone', event.target.value)}
                className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 font-body text-textOnLight focus:border-brandRed focus:outline-none focus:ring-2 focus:ring-brandRed/40"
              />
            </div>
            <div>
              <label htmlFor="assunto" className="font-body text-sm font-medium text-textOnLight">
                Assunto
              </label>
              <input
                id="assunto"
                type="text"
                value={form.assunto}
                onChange={(event) => updateField('assunto', event.target.value)}
                className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 font-body text-textOnLight focus:border-brandRed focus:outline-none focus:ring-2 focus:ring-brandRed/40"
              />
            </div>
          </div>

          <fieldset>
            <legend className="font-body text-sm font-medium text-textOnLight">Interesse</legend>
            <div className="mt-2 flex gap-6">
              {['Orçamento', 'Área Técnica'].map((option) => (
                <label key={option} className="flex items-center gap-2 font-body text-sm text-gray-600">
                  <input
                    type="radio"
                    name="interesse"
                    value={option}
                    checked={form.interesse === option}
                    onChange={(event) => updateField('interesse', event.target.value)}
                    className="text-brandRed focus:ring-brandRed"
                  />
                  {option}
                </label>
              ))}
            </div>
          </fieldset>

          <div>
            <label htmlFor="mensagem" className="font-body text-sm font-medium text-textOnLight">
              Mensagem
            </label>
            <textarea
              id="mensagem"
              required
              rows={5}
              value={form.mensagem}
              onChange={(event) => updateField('mensagem', event.target.value)}
              className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 font-body text-textOnLight focus:border-brandRed focus:outline-none focus:ring-2 focus:ring-brandRed/40"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-brandRed px-6 py-3 font-body font-semibold text-white transition-colors hover:bg-brandRedDark sm:w-auto"
          >
            Enviar mensagem
          </button>
          <p className="font-body text-xs text-gray-500">
            Ao enviar, seu cliente de e-mail padrão será aberto com a mensagem pronta para {CONTACT_EMAIL}.
          </p>
        </form>
      </div>
    </section>
  )
}
