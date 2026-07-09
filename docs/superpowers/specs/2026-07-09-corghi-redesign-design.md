# Redesign estético — Corghi do Brasil (institucional B2B)

## Contexto

O site atual (`corghidobrasil.com.br`, WordPress) é institucional B2B para distribuição de equipamentos
de oficina mecânica (marca italiana Corghi): balanceadoras, desmontadoras de pneus, alinhadores 3D,
elevadores. Visual datado (ícones como texto, hierarquia fraca, sem hero forte). Objetivo: protótipo de
homepage + páginas Linha Leve / Linha Pesada, mantendo a identidade de marca extraída dos sites oficiais,
com execução mais moderna e premium — precisão de engenharia (ref: Bosch, Hunter Engineering), sem cair em
estética "startup".

Público: donos de oficina, gerentes de frota, revendas técnicas. Conversão principal: WhatsApp.

## Identidade extraída (confirmada com o usuário)

**Fonte dos dados**: CSS bruto de `corghidobrasil.com.br` (tema WordPress) e `corghi.com` (matriz Itália),
extraído via download direto (não via renderização), evitando adivinhação.

### Cores
```
--color-bg-dark:        #1F1F21   grafite principal (hero, header, footer, seções escuras)
--color-bg-dark-alt:     #29292B   grafite alternado (cards, seções escuras secundárias)
--color-surface:         #FFFFFF   seções claras (depoimentos, conteúdo denso)
--color-surface-alt:     #F2F2F2   fundo de seção clara alternada
--color-brand-red:       #D30F10   cor institucional — CTAs, links, destaques, hover (confirmada como
                                    fonte-da-verdade a versão da matriz italiana, mais próxima da
                                    #D11416 usada no BR)
--color-brand-red-dark:  #A60A0B   hover/active do vermelho
--color-accent-yellow:   #FFED00   acento secundário pontual (badges, ícones) — nunca em texto corrido
--color-text-on-dark:    #FFFFFF
--color-text-muted:      #A0A0A2
--color-text-on-light:   #1F1F21
```

### Tipografia
- **Títulos**: Titillium Web (700/900) — Google Font, autêntica da matriz italiana (usada em
  `corghi.com`), sensação técnica/condensada, alinhada ao objetivo de "precisão de engenharia".
- **Corpo de texto**: Inter (400/500/600) — melhor legibilidade em telas pequenas que a Poppins usada
  hoje no BR.
- Nenhum texto embutido em imagem, em nenhuma seção (SEO + acessibilidade).

### Logo
Localizado o vetor oficial do logo Corghi (ícone + wordmark) em repositório de logos de marca — trace
vetorial limpo, não os PNGs de baixa resolução (~150–190px) presentes nos sites oficiais. Três variantes
preparadas em `assets/brand/`:

- `corghi-logo-full.svg` — lockup completo (placa preta + fundo branco quadrado) → uso em contextos de
  fundo claro/impressão.
- `corghi-logo-on-dark.svg` — placa preta com fundo transparente → uso sobre vermelho ou grafite médio.
- `corghi-logo-mark.svg` — apenas selo amarelo + ícone + wordmark, sem placa, fundo transparente →
  **variante usada no hero** (flutua diretamente sobre `#1F1F21`).

As cores nativas do arquivo do logo (`#f6e546` amarelo, `#b53a4c` vermelho do selo) são preservadas como
estão no vetor original — não foram substituídas pela paleta de interface (`#D30F10`/`#FFED00`), pois
alterar as cores do logotipo em si descaracterizaria a marca.

### Imagens de produto reaproveitáveis (já existentes, uploads WordPress)
- `EXACT-LINEAR-PLUS.png` — alinhador 3D (linha leve)
- `HM-4502.png` — elevador (linha leve)
- `Proline150_Truck.png` — balanceadora (linha pesada)
- `HD1800_Hydrus...png` — desmontadora com centralina (linha pesada)
- Alternativas da matriz (comparar recorte/fundo antes de decidir): `HD850A_1.png`,
  `EXACT_LINEAR_PLUS_g.png`, `REMO4C_1.png`, `Artiglio_Master28.png`

## Decisões de direção (confirmadas com o usuário)

1. **Hero**: grafite sólido (`#1F1F21`) com textura sutil tipo blueprint técnico (linhas finas,
   opacidade ~4–6%), não foto full-bleed nem split-screen. Motivo: fotos de produto existentes são de
   qualidade mediana — full-bleed exporia isso; o grafite sólido + logo em destaque entrega o visual
   "Bosch/Hunter" pretendido sem depender da qualidade fotográfica.
2. **Cards Linha Leve / Linha Pesada**: dois blocos grandes lado a lado (50/50 desktop, empilhados
   mobile), não carrossel nem grid de categorias. Motivo: a decisão do visitante B2B é binária (equipamento
   para carro ou para caminhão) — dois blocos grandes resolvem isso em um golpe de vista.
3. **WhatsApp**: um único número/CTA sempre visível no botão flutuante. Sem roteamento
   comercial/técnico automático nesta fase — a triagem fica a cargo do atendimento humano.

## Arquitetura técnica

React (Vite) + Tailwind CSS. Mobile-first, totalmente responsivo.

```
src/
  components/
    Header.tsx          nav sticky, logo (corghi-logo-mark ou on-dark conforme scroll), menu, CTA WhatsApp
    Hero.tsx
    AboutCorghi.tsx      "A Corghi" — tradição italiana, homologações
    ProductLines.tsx     2 cards grandes: Linha Leve / Linha Pesada
    Testimonials.tsx     grid/carrossel de depoimentos e casos de clientes
    CorghiNoBrasil.tsx
    CTASection.tsx       chamada final + contato
    Footer.tsx
    WhatsAppButton.tsx   flutuante, fixed position, sempre visível
    ProductCard.tsx      reusado nas páginas de linha
  pages/
    Home.tsx
    LinhaLeve.tsx
    LinhaPesada.tsx
  data/
    products.ts          mock/placeholder dos produtos por linha (nome, categoria, imagem, slug)
  assets/
    brand/                logos (copiados de assets/brand/ na raiz do projeto)
    products/              imagens de produto reaproveitadas
```

## Estrutura de seções — Home

1. **Header**: logo, menu (A Corghi | Linha Leve | Linha Pesada | Corghi no Brasil | Eventos | Contato),
   CTA WhatsApp no header, sticky com transição de fundo ao rolar.
2. **Hero**: fundo grafite + textura sutil, `corghi-logo-mark.svg`, título (Titillium Web 900, branco),
   subtítulo (Inter, cinza claro), CTA duplo (WhatsApp sólido vermelho + "Conheça os equipamentos" outline),
   foto de equipamento recortada ao lado (tratamento de blend/máscara para integrar com fundo escuro apesar
   do fundo branco original da foto).
3. **Sobre a Corghi**: tradição da marca italiana, homologação por montadoras/fabricantes de pneus —
   fundo claro para dar respiro após o hero escuro.
4. **Linha Leve / Linha Pesada**: dois cards grandes conforme decisão acima, fundo `#29292B`, hover com
   borda/scale sutil (200–300ms).
5. **Depoimentos/Casos de clientes**: fundo claro, grid de 3 ou carrossel simples, citação + nome da
   oficina/frota, avatar placeholder quando não houver foto real.
6. **Corghi no Brasil**: conteúdo institucional já existente, reformulado com a nova hierarquia visual.
7. **CTA final + Contato**: chamada de conversão + informações de contato.
8. **Footer**: logo, links, redes sociais, copyright.
9. **WhatsAppButton**: flutuante, fixed, visível em todas as seções e páginas.

## Estrutura de seções — Linha Leve / Linha Pesada (espelhada)

1. Hero secundário compacto (grafite escuro, título da linha, breadcrumb, texto de posicionamento).
2. Grid de produtos da linha (`ProductCard`): foto, nome, categoria, CTA "Solicitar orçamento" via
   WhatsApp por produto (mensagem pré-preenchida mencionando o produto).
3. Diferenciais técnicos da linha (selos/homologações).
4. CTA final + footer compartilhados com a home.

## Tratamento de placeholders

Onde não houver imagem real disponível (fotos de eventos, avatares de depoimentos, fotos de produto em
melhor qualidade que as encontradas), usar um placeholder com o padrão visual da marca (ícone + fundo
grafite) e comentário no código no formato `{/* TODO: substituir por [descrição específica] */}` indicando
exatamente o que precisa ser trocado e por quê.

## Fora de escopo (nesta fase)

- Migração de conteúdo real do WordPress (textos completos, todos os depoimentos, todos os produtos)
- Backend/CMS — este é um protótipo estático de front-end
- Roteamento diferenciado de WhatsApp por seção/time
- Substituição definitiva do logo por vetor oficial do manual de marca (o SVG usado é de terceiro,
  tecnicamente fiel, mas o ideal a médio prazo é solicitar o arquivo oficial ao marketing da Corghi)
