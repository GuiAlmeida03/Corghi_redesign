// src/components/ProductCard.test.jsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import ProductCard from './ProductCard'

const product = {
  slug: 'exact-linear-plus',
  name: 'EXACT LINEAR PLUS',
  category: 'Alinhador 3D',
  image: 'test-image.png',
  imageAlt: 'Alinhador 3D Corghi EXACT LINEAR PLUS',
}

describe('ProductCard', () => {
  it('renders the product name and category', () => {
    render(<ProductCard product={product} />)
    expect(screen.getByText('EXACT LINEAR PLUS')).toBeInTheDocument()
    expect(screen.getByText('Alinhador 3D')).toBeInTheDocument()
  })

  it('renders a WhatsApp quote link mentioning the product name', () => {
    render(<ProductCard product={product} />)
    const link = screen.getByRole('link', { name: /solicitar orçamento/i })
    expect(link).toHaveAttribute('href', expect.stringContaining('EXACT%20LINEAR%20PLUS'))
  })
})
