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
    // Both verified live on corghidobrasil.com (2026-07-09) — safe to link directly.
    catalogUrl: 'https://corghidobrasil.com/wp-content/uploads/2021/02/CATALOGO-EXACT-PLUS-BR.pdf',
    videoUrl: 'https://www.youtube.com/watch?v=DKOLKjy1XPw',
  },
  {
    // Real product name on corghidobrasil.com is "ERCO HC 4502" — "HM 4502" was an earlier
    // extraction error. Slug/asset filenames kept as-is to avoid churn on a just-launched site.
    slug: 'hm-4502',
    name: 'ERCO HC 4502',
    category: 'Elevador',
    image: elevatorPhoto,
    imageAlt: 'Elevador automotivo Corghi ERCO HC 4502',
    description:
      'Elevador automotivo de coluna para uso em oficinas de linha leve, projetado para operação segura e rápida em serviços de manutenção geral.',
    // TODO: o PDF de ficha técnica linkado na página oficial do produto está com 404 no site da
    // Corghi (confirmado em 2026-07-09) — sem catálogo/vídeo próprio disponível no momento.
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
    // TODO: os PDFs de catálogo e ficha técnica linkados na página oficial do produto estão com
    // 404 no site da Corghi (confirmado em 2026-07-09) — sem vídeo próprio disponível no momento.
  },
  {
    slug: 'hd1800-hydrus',
    name: 'HD 1800 Hydrus',
    category: 'Desmontadora de pneus',
    image: tireChangerPhoto,
    imageAlt: 'Desmontadora de pneus Corghi HD 1800 Hydrus com centralina',
    description:
      'Desmontadora de pneus para linha pesada com centralina hidráulica, indicada para pneus de caminhão de grande porte em operação de alto volume.',
    // Video verified live on corghidobrasil.com (2026-07-09) — safe to link directly.
    videoUrl: 'https://youtu.be/tipuVCghFcI',
    // TODO: o PDF de catálogo linkado na página oficial do produto está com 404 no site da Corghi
    // (confirmado em 2026-07-09) — sem ficha técnica própria disponível no momento.
  },
]

export const ALL_PRODUCTS = [...LINHA_LEVE_PRODUCTS, ...LINHA_PESADA_PRODUCTS]

export function findProductBySlug(slug) {
  return ALL_PRODUCTS.find((product) => product.slug === slug)
}
