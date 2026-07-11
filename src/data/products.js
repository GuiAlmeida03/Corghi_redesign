// src/data/products.js
import alignerPhoto from '../assets/products/exact-linear-plus.png'
import elevatorPhoto from '../assets/products/hm-4502.png'
import truckBalancerPhoto from '../assets/products/proline150-truck.png'
import tireChangerPhoto from '../assets/products/hd1800-hydrus.png'

// General Corghi equipment catalog (covers the full product line, not product-specific).
// Verified live on corghidobrasil.com (2026-07-09) — used as a fallback when a product's own
// catalog/datasheet PDF is broken on the official site.
const GENERAL_CATALOG_URL = 'https://corghidobrasil.com/wp-content/themes/corghi/catalogo.pdf'

export const LINHA_LEVE_PRODUCTS = [
  {
    slug: 'exact-linear-plus',
    name: 'EXACT LINEAR PLUS',
    category: 'Alinhador 3D',
    image: alignerPhoto,
    imageAlt: 'Alinhador 3D Corghi EXACT LINEAR PLUS',
    description:
      'O seu negócio em um novo patamar com o EXACT LINEAR PLUS, o alinhador 3D de alta tecnologia que entrega precisão, agilidade e uma experiência profissional de alto nível.',
    // Feature list pulled verbatim from corghidobrasil.com/linha-leve/exact-linear-plus/ (2026-07-11).
    features: [
      {
        icon: '🖥️',
        title: 'Monitor 32” com visual moderno',
        description: 'Ampla visualização dos resultados e gráficos. Interface com ícones intuitivos e fácil navegação.',
      },
      {
        icon: '🎯',
        title: 'Tecnologia com alvos anti-reflexos',
        description:
          'Maior precisão nas medições e ganho de tempo nos processos. Inovação que transforma o alinhamento em uma experiência ainda mais ágil.',
      },
      {
        icon: '📊',
        title: 'Gestão de trabalho com histórico de operação',
        description: 'Controle completo das atividades realizadas. Acompanhe, salve e consulte os serviços executados com praticidade.',
      },
      {
        icon: '🧠',
        title: 'Sistema operacional Windows 10',
        description: 'Estabilidade, compatibilidade e desempenho garantidos para o dia a dia da oficina.',
      },
      {
        icon: '🔍',
        title: 'Medição completa do chassi em 3D',
        description: 'Emite laudo preciso da estrutura do veículo, com indicações gráficas em tempo real. Confiança total em cada ajuste.',
      },
      {
        icon: '🌍',
        title: 'Banco de dados mundial de veículos',
        description: 'Acesso à base de dados global. Consulta rápida e prática dos veículos, possibilitando inserir dado manualmente.',
      },
      {
        icon: '🖨️',
        title: 'Relatórios personalizados e impressões flexíveis',
        description: 'Entrega profissional para o seu cliente: colorido, P&B ou digital.',
      },
      {
        icon: '🧰',
        title: 'Design funcional e inteligente',
        description: 'Gabinete ergonômico para uma melhor operação. Organização e controle em alto nível.',
      },
      {
        icon: '🤖',
        title: 'Instrutor Online integrado',
        description: 'Procedimentos passo a passo direto na tela, com orientações gráficas. Reduz curva de aprendizado e aumenta a produtividade.',
      },
      {
        icon: '🛠️',
        title: 'Suporte técnico em todo o Brasil',
        description: 'Conte com uma rede de assistência técnica pronta para te atender onde você estiver e suporte remoto.',
      },
    ],
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
      'Equipamento eletro-hidráulico com capacidade para erguer 4,5 toneladas com realinhamento automático. Os elevadores são particularmente confiáveis, fáceis de instalar e não requerem ajustes mecânicos após a primeira instalação.',
    // Sem lista de recursos no site oficial para este produto (só a descrição acima) — não inventamos bullets.
    // O PDF de ficha técnica específico deste produto está com 404 no site oficial (confirmado em
    // 2026-07-09) — usamos o catálogo geral da Corghi como alternativa.
    catalogUrl: GENERAL_CATALOG_URL,
    catalogIsGeneral: true,
    // TODO: sem vídeo próprio deste produto disponível no canal oficial no momento.
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
    // Feature list pulled verbatim from corghidobrasil.com/linha-pesada/proline-150-truck/ (2026-07-11).
    features: [
      {
        icon: '💻',
        title: 'Display Digital e Programas Avançados',
        description:
          'O equipamento possui um display digital com alta luminosidade, ideal para qualquer ambiente de trabalho. É fácil de usar, intuitivo e moderno. A máquina conta com 7 programas de balanceamento para jantes de liga leve, além de funções avançadas como Peso Oculto e Multi-operador.',
      },
      {
        icon: '⚙️',
        title: 'Medição inteligente com Smart-Arm',
        description:
          'O detector eletrônico FSP-Smart-Arm faz a aquisição dos dados da roda, como diâmetro e distância, e ativa automaticamente os programas de balanceamento, reduzindo o tempo de trabalho.',
      },
      {
        icon: '🛠️',
        title: 'Elevador integrado de 200kg',
        description:
          'O elevador integrado permite elevar rodas de até 200 kg manualmente, sem a necessidade de pedais, garantindo uma centragem perfeita e sem esforço para o operador.',
      },
      {
        icon: '⚡',
        title: 'Tecnologia Inverter',
        description:
          'O controle eletrônico do motor com a tecnologia Inverter garante maior estabilidade durante a medição, proporcionando um balanceamento mais preciso e confiável.',
      },
      {
        icon: '💡',
        title: 'Laser e Iluminador LED',
        description:
          'A aplicação de contrapesos adesivos pode ser feita com precisão usando o laser na posição 6 horas. O iluminador LED, disponível no kit opcional LASER & LED, ilumina a área de trabalho para facilitar a limpeza da jante e a aplicação dos pesos.',
      },
    ],
    // Os PDFs de catálogo/ficha técnica específicos deste produto estão com 404 no site oficial
    // (confirmado em 2026-07-09) — usamos o catálogo geral da Corghi como alternativa.
    catalogUrl: GENERAL_CATALOG_URL,
    catalogIsGeneral: true,
    // TODO: sem vídeo próprio deste produto disponível no canal oficial no momento.
  },
  {
    slug: 'hd1800-hydrus',
    name: 'HD 1800 Hydrus',
    category: 'Desmontadora de pneus',
    image: tireChangerPhoto,
    imageAlt: 'Desmontadora de pneus Corghi HD 1800 Hydrus com centralina',
    description:
      'Desmontadora de pneus para linha pesada com centralina hidráulica, indicada para pneus de caminhão de grande porte em operação de alto volume.',
    // Feature list pulled verbatim from corghidobrasil.com/linha-pesada/hd1800-hydrus/ (2026-07-11).
    features: [
      {
        icon: '⚙️',
        title: 'Força e simplicidade no manuseio',
        description:
          'A HD 1800 Hydrus é uma desmontadora de pneus universal e totalmente automática, projetada para ser robusta e simples de usar. É ideal para pneus de grandes dimensões, como agrícolas, de terraplenagem ou florestais, tornando o trabalho mais fácil e sem esforço.',
      },
      {
        icon: '🕹️',
        title: 'Motor hidráulico e três velocidades',
        description:
          'Equipada com um motor hidráulico, a máquina garante o fornecimento máximo de torque em qualquer rotação. Oferece três velocidades diferentes, permitindo que o operador trabalhe de forma adequada a qualquer dimensão de roda.',
      },
      {
        icon: '💡',
        title: 'Console de controle sem fio',
        description: 'O console de controle é ergonômico e sem fio (wireless) como padrão.',
      },
      {
        icon: '💰',
        title: 'Função Start & Stop',
        description: 'O uso da função Start & Stop permite uma economia significativa de energia quando a máquina não está em uso.',
      },
      {
        icon: '🔩',
        title: 'Movimentos independentes e mandril robusto',
        description:
          'Os movimentos entre o torno autocentrante e o braço porta-ferramentas são independentes, permitindo posicionar a roda e as ferramentas com máxima liberdade e velocidade. O mandril autocentrante pode bloquear jantes de até 60 polegadas (com extensões), sendo extremamente sólido.',
      },
    ],
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
