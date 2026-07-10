// src/data/products.js
import alignerPhoto from '../assets/products/exact-linear-plus.png'
import elevatorPhoto from '../assets/products/hm-4502.png'
import truckBalancerPhoto from '../assets/products/proline150-truck.png'
import tireChangerPhoto from '../assets/products/hd1800-hydrus.png'

export const LINHA_LEVE_PRODUCTS = [
  {
    slug: 'exact-linear-plus',
    name: 'EXACT LINEAR PLUS',
    category: 'Alinhador 3D',
    image: alignerPhoto,
    imageAlt: 'Alinhador 3D Corghi EXACT LINEAR PLUS',
    description:
      'Alinhador 3D de precisão para veículos de passeio, com câmeras de alta resolução e software próprio Corghi para leitura rápida da geometria de suspensão e direção.',
  },
  {
    slug: 'hm-4502',
    name: 'HM 4502',
    category: 'Elevador',
    image: elevatorPhoto,
    imageAlt: 'Elevador automotivo Corghi HM 4502',
    description:
      'Elevador automotivo de coluna para uso em oficinas de linha leve, projetado para operação segura e rápida em serviços de manutenção geral.',
  },
]

export const LINHA_PESADA_PRODUCTS = [
  {
    slug: 'proline-150-truck',
    name: 'Proline 150 Truck',
    category: 'Balanceadora',
    image: truckBalancerPhoto,
    imageAlt: 'Balanceadora de pneus para linha pesada Corghi Proline 150',
    description:
      'Balanceadora robusta para rodas de caminhão e veículos pesados, construída para operação contínua em frotas e transportadoras.',
  },
  {
    slug: 'hd1800-hydrus',
    name: 'HD 1800 Hydrus',
    category: 'Desmontadora de pneus',
    image: tireChangerPhoto,
    imageAlt: 'Desmontadora de pneus Corghi HD 1800 Hydrus com centralina',
    description:
      'Desmontadora de pneus para linha pesada com centralina hidráulica, indicada para pneus de caminhão de grande porte em operação de alto volume.',
  },
]

export const ALL_PRODUCTS = [...LINHA_LEVE_PRODUCTS, ...LINHA_PESADA_PRODUCTS]

export function findProductBySlug(slug) {
  return ALL_PRODUCTS.find((product) => product.slug === slug)
}
