const DEFAULT_MESSAGE = 'Olá, quero falar com um consultor Corghi.'

export function buildWhatsAppLink(phone, message = DEFAULT_MESSAGE) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
}
