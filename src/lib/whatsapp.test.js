import { describe, it, expect } from 'vitest'
import { buildWhatsAppLink } from './whatsapp'

describe('buildWhatsAppLink', () => {
  it('builds a wa.me link with the phone and default message', () => {
    const link = buildWhatsAppLink('5511999999999')
    expect(link).toBe(
      'https://wa.me/5511999999999?text=Ol%C3%A1%2C%20quero%20falar%20com%20um%20consultor%20Corghi.',
    )
  })

  it('builds a link with a custom message, url-encoded', () => {
    const link = buildWhatsAppLink('5511999999999', 'Quero orçamento do EXACT LINEAR PLUS')
    expect(link).toBe(
      'https://wa.me/5511999999999?text=Quero%20or%C3%A7amento%20do%20EXACT%20LINEAR%20PLUS',
    )
  })
})
