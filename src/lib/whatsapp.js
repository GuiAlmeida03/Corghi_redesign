const DEFAULT_MESSAGE = 'Olá, quero falar com um consultor Corghi.'

// Published on corghidobrasil.com — Orçamento/Geral and Área Técnica have separate WhatsApp lines.
export const CORGHI_WHATSAPP_ORCAMENTO = '5511942819477'
export const CORGHI_WHATSAPP_TECNICO = '5511971073383'

export function buildWhatsAppLink(phone, message = DEFAULT_MESSAGE) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
}
