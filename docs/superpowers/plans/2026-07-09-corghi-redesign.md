# Corghi do Brasil — Redesign Estético Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a React + Tailwind prototype of the Corghi do Brasil homepage plus Linha Leve / Linha
Pesada pages, reusing the extracted brand identity (colors, Titillium Web + Inter typography, recovered
vector logo) with a modern industrial-premium visual direction on a dark-graphite base.

**Architecture:** Vite + React (JS, functional components), Tailwind CSS for styling with brand tokens
defined in `tailwind.config.js`, React Router for the 3 routes, Vitest + Testing Library for the handful
of testable pure-logic/behavioral units (WhatsApp link building, nav rendering, product data rendering).
Visual/aesthetic correctness is verified with the Claude Preview tool (screenshots), not automated tests —
CSS layout has no meaningful assertions to write.

**Tech Stack:** React 18, Vite, Tailwind CSS 3, React Router 6, Vitest, @testing-library/react

---

## File Structure

```
package.json
vite.config.js
tailwind.config.js
postcss.config.js
index.html
vitest.setup.js
src/
  main.jsx
  App.jsx
  index.css
  assets/
    brand/
      corghi-logo-mark.svg
      corghi-logo-on-dark.svg
      corghi-logo-full.svg
    products/
      exact-linear-plus.png
      hm-4502.png
      proline150-truck.png
      hd1800-hydrus.png
  lib/
    whatsapp.js
    whatsapp.test.js
  data/
    products.js
  components/
    Header.jsx
    WhatsAppButton.jsx
    Hero.jsx
    AboutCorghi.jsx
    ProductLines.jsx
    Testimonials.jsx
    CorghiNoBrasil.jsx
    CTASection.jsx
    Footer.jsx
    ProductCard.jsx
    ProductCard.test.jsx
  pages/
    Home.jsx
    LinhaLeve.jsx
    LinhaPesada.jsx
```

---

### Task 1: Scaffold Vite + React + Tailwind project

**Files:**
- Create: `package.json`
- Create: `vite.config.js`
- Create: `postcss.config.js`
- Create: `tailwind.config.js`
- Create: `index.html`
- Create: `src/main.jsx`
- Create: `src/App.jsx`
- Create: `src/index.css`

- [ ] **Step 1: Write `package.json`**

```json
{
  "name": "corghi-redesign",
  "private": true,
  "version": "0.0.1",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "test": "vitest run"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.26.0"
  },
  "devDependencies": {
    "@testing-library/jest-dom": "^6.5.0",
    "@testing-library/react": "^16.0.1",
    "@vitejs/plugin-react": "^4.3.1",
    "autoprefixer": "^10.4.20",
    "jsdom": "^25.0.0",
    "postcss": "^8.4.45",
    "tailwindcss": "^3.4.10",
    "vite": "^5.4.2",
    "vitest": "^2.0.5"
  }
}
```

- [ ] **Step 2: Write `vite.config.js`**

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: './vitest.setup.js',
    globals: true,
  },
})
```

- [ ] **Step 3: Write `vitest.setup.js`**

```js
import '@testing-library/jest-dom'
```

- [ ] **Step 4: Write `postcss.config.js`**

```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

- [ ] **Step 5: Write `tailwind.config.js` with brand tokens**

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bgDark: '#1F1F21',
        bgDarkAlt: '#29292B',
        surface: '#FFFFFF',
        surfaceAlt: '#F2F2F2',
        brandRed: '#D30F10',
        brandRedDark: '#A60A0B',
        accentYellow: '#FFED00',
        textMuted: '#A0A0A2',
      },
      fontFamily: {
        title: ['"Titillium Web"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
```

- [ ] **Step 6: Write `index.html`**

```html
<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Corghi do Brasil — Equipamentos para Oficina Mecânica</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Titillium+Web:wght@700;900&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

- [ ] **Step 7: Write `src/main.jsx`**

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
```

- [ ] **Step 8: Write `src/index.css`**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  @apply bg-bgDark font-body text-white;
}
```

- [ ] **Step 9: Write placeholder `src/App.jsx`** (routes wired in Task 12)

```jsx
export default function App() {
  return (
    <div className="p-8 font-title text-2xl">Corghi do Brasil — em construção</div>
  )
}
```

- [ ] **Step 10: Install dependencies and verify dev server boots**

Run: `npm install`
Expected: installs without errors.

Run: `npm run dev -- --port 5173 &` then `curl -s http://localhost:5173 | grep -o '<title>.*</title>'`
Expected: `<title>Corghi do Brasil — Equipamentos para Oficina Mecânica</title>`

Stop the dev server after verifying.

- [ ] **Step 11: Commit**

```bash
git add package.json vite.config.js postcss.config.js tailwind.config.js index.html vitest.setup.js src
git commit -m "chore: scaffold Vite + React + Tailwind project"
```

---

### Task 2: Brand and product assets

**Files:**
- Create: `src/assets/brand/corghi-logo-mark.svg`
- Create: `src/assets/brand/corghi-logo-on-dark.svg`
- Create: `src/assets/brand/corghi-logo-full.svg`
- Create: `src/assets/products/exact-linear-plus.png`
- Create: `src/assets/products/hm-4502.png`
- Create: `src/assets/products/proline150-truck.png`
- Create: `src/assets/products/hd1800-hydrus.png`

- [ ] **Step 1: Copy the already-recovered logo SVGs into the project**

Run:
```bash
mkdir -p src/assets/brand
cp assets/brand/corghi-logo-mark.svg src/assets/brand/
cp assets/brand/corghi-logo-on-dark.svg src/assets/brand/
cp assets/brand/corghi-logo-full.svg src/assets/brand/
```
Expected: 3 files copied, no output on success.

- [ ] **Step 2: Download the existing product photos identified during brand extraction**

Run:
```bash
mkdir -p src/assets/products
UA="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"
curl -s -A "$UA" -H "Accept: image/*" -L "https://corghidobrasil.com/wp-content/uploads/2021/02/EXACT-LINEAR-PLUS.png" -o src/assets/products/exact-linear-plus.png
curl -s -A "$UA" -H "Accept: image/*" -L "https://corghidobrasil.com/wp-content/uploads/2020/07/HM-4502.png" -o src/assets/products/hm-4502.png
curl -s -A "$UA" -H "Accept: image/*" -L "https://corghidobrasil.com/wp-content/uploads/2019/05/Proline150_Truck.png" -o src/assets/products/proline150-truck.png
curl -s -A "$UA" -H "Accept: image/*" -L "https://corghidobrasil.com/wp-content/uploads/2019/04/HD1800_Hydrus_2018_con-centrallina.png" -o src/assets/products/hd1800-hydrus.png
file src/assets/products/*.png
```
Expected: each `file` line reports `PNG image data` (not `HTML document` — that would mean the download
got an error page instead of the image; if so, retry with the header set above, the site 406s requests
without a browser-like `User-Agent`).

- [ ] **Step 3: Commit**

```bash
git add src/assets
git commit -m "chore: add recovered brand logo and product assets"
```

---

### Task 3: WhatsApp link helper + Vitest wiring

**Files:**
- Create: `src/lib/whatsapp.js`
- Test: `src/lib/whatsapp.test.js`

- [ ] **Step 1: Write the failing test**

```js
// src/lib/whatsapp.test.js
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
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run src/lib/whatsapp.test.js`
Expected: FAIL — `Failed to resolve import "./whatsapp"`

- [ ] **Step 3: Write minimal implementation**

```js
// src/lib/whatsapp.js
const DEFAULT_MESSAGE = 'Olá, quero falar com um consultor Corghi.'

export function buildWhatsAppLink(phone, message = DEFAULT_MESSAGE) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run src/lib/whatsapp.test.js`
Expected: PASS (2 tests)

- [ ] **Step 5: Commit**

```bash
git add src/lib/whatsapp.js src/lib/whatsapp.test.js
git commit -m "feat: add WhatsApp link builder with tests"
```

---

### Task 4: WhatsAppButton component (floating CTA)

**Files:**
- Create: `src/components/WhatsAppButton.jsx`

- [ ] **Step 1: Write the component**

```jsx
// src/components/WhatsAppButton.jsx
import { buildWhatsAppLink } from '../lib/whatsapp'

const CORGHI_WHATSAPP_NUMBER = '5511999999999' // TODO: substituir pelo número comercial real da Corghi do Brasil

export default function WhatsAppButton() {
  return (
    <a
      href={buildWhatsAppLink(CORGHI_WHATSAPP_NUMBER)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com um consultor no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 font-body font-semibold text-white shadow-lg transition-transform duration-200 hover:scale-105 hover:shadow-xl"
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.15-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12.001 2C6.478 2 2 6.477 2 12c0 1.876.52 3.632 1.42 5.13L2 22l4.998-1.379A9.953 9.953 0 0 0 12.001 22C17.524 22 22 17.523 22 12S17.524 2 12.001 2zm0 18.164a8.14 8.14 0 0 1-4.152-1.14l-.298-.177-3.089.853.87-3.006-.194-.31A8.15 8.15 0 1 1 20.153 12a8.16 8.16 0 0 1-8.152 8.164z" />
      </svg>
      Falar no WhatsApp
    </a>
  )
}
```

- [ ] **Step 2: Verify it renders without errors**

Run: `npx vitest run --passWithNoTests` (no dedicated test for this component — pure JSX with a single
link; behavior already covered by `whatsapp.test.js`)
Expected: no failures.

- [ ] **Step 3: Commit**

```bash
git add src/components/WhatsAppButton.jsx
git commit -m "feat: add floating WhatsApp CTA button"
```

---

### Task 5: Header component

**Files:**
- Create: `src/components/Header.jsx`

- [ ] **Step 1: Write the component**

```jsx
// src/components/Header.jsx
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { buildWhatsAppLink } from '../lib/whatsapp'
import logoMark from '../assets/brand/corghi-logo-mark.svg'

const NAV_LINKS = [
  { label: 'A Corghi', href: '/#a-corghi' },
  { label: 'Linha Leve', href: '/linha-leve' },
  { label: 'Linha Pesada', href: '/linha-pesada' },
  { label: 'Corghi no Brasil', href: '/#corghi-no-brasil' },
  { label: 'Contato', href: '/#contato' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-300 ${
        scrolled ? 'bg-bgDark/95 backdrop-blur shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" aria-label="Corghi do Brasil — página inicial">
          <img src={logoMark} alt="Corghi" className="h-10 w-auto" />
        </Link>

        <nav aria-label="Navegação principal" className="hidden gap-8 font-body text-sm font-medium md:flex">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="text-white transition-colors hover:text-brandRed">
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={buildWhatsAppLink('5511999999999')}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md bg-brandRed px-4 py-2 font-body text-sm font-semibold text-white transition-colors hover:bg-brandRedDark"
        >
          Orçamento
        </a>
      </div>
    </header>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Header.jsx
git commit -m "feat: add sticky header with nav and WhatsApp CTA"
```

---

### Task 6: Hero component

**Files:**
- Create: `src/components/Hero.jsx`

- [ ] **Step 1: Write the component**

```jsx
// src/components/Hero.jsx
import { buildWhatsAppLink } from '../lib/whatsapp'
import logoMark from '../assets/brand/corghi-logo-mark.svg'
import alignerPhoto from '../assets/products/exact-linear-plus.png'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-bgDark">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2 md:py-32">
        <div>
          <img src={logoMark} alt="Corghi" className="mb-8 h-16 w-auto" />
          <h1 className="font-title text-4xl font-black leading-tight text-white md:text-5xl">
            Equipamentos de precisão para sua oficina
          </h1>
          <p className="mt-6 max-w-md font-body text-lg text-textMuted">
            Marca italiana homologada pelas principais montadoras e fabricantes de pneus. Balanceadoras,
            desmontadoras, alinhadores 3D e elevadores para linha leve e pesada.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={buildWhatsAppLink('5511999999999')}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-brandRed px-6 py-3 font-body font-semibold text-white transition-colors hover:bg-brandRedDark"
            >
              Falar no WhatsApp
            </a>
            <a
              href="#linhas"
              className="rounded-md border border-white/30 px-6 py-3 font-body font-semibold text-white transition-colors hover:border-white"
            >
              Conheça os equipamentos
            </a>
          </div>
        </div>

        <div className="relative hidden md:block">
          <img
            src={alignerPhoto}
            alt="Alinhador 3D Corghi EXACT LINEAR PLUS"
            className="mx-auto max-h-[420px] w-auto drop-shadow-2xl [mix-blend-mode:screen]"
          />
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Hero.jsx
git commit -m "feat: add dark hero section with blueprint texture"
```

---

### Task 7: AboutCorghi component

**Files:**
- Create: `src/components/AboutCorghi.jsx`

- [ ] **Step 1: Write the component**

```jsx
// src/components/AboutCorghi.jsx
export default function AboutCorghi() {
  return (
    <section id="a-corghi" className="bg-surface py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <span className="font-body text-sm font-semibold uppercase tracking-widest text-brandRed">
          Tradição italiana
        </span>
        <h2 className="mt-3 font-title text-3xl font-bold text-textOnLight md:text-4xl">A Corghi</h2>
        <p className="mt-6 font-body text-lg leading-relaxed text-gray-600">
          Há décadas desenvolvendo equipamentos para oficinas mecânicas, a Corghi é homologada pela
          maioria das montadoras e fabricantes de pneus do mundo. No Brasil, oferecemos suporte técnico
          especializado e peças de reposição para toda a linha leve e pesada.
        </p>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/AboutCorghi.jsx
git commit -m "feat: add AboutCorghi section"
```

---

### Task 8: ProductLines component (Linha Leve / Linha Pesada cards)

**Files:**
- Create: `src/components/ProductLines.jsx`

- [ ] **Step 1: Write the component**

```jsx
// src/components/ProductLines.jsx
import { Link } from 'react-router-dom'
import elevatorPhoto from '../assets/products/hm-4502.png'
import truckBalancerPhoto from '../assets/products/proline150-truck.png'

const LINES = [
  {
    slug: '/linha-leve',
    title: 'Linha Leve',
    description: 'Equipamentos para carros de passeio: alinhadores 3D e elevadores de precisão.',
    bullets: ['Alinhadores 3D', 'Elevadores'],
    image: elevatorPhoto,
    imageAlt: 'Elevador automotivo Corghi HM 4502',
  },
  {
    slug: '/linha-pesada',
    title: 'Linha Pesada',
    description: 'Equipamentos para frotas e caminhões: balanceadoras e desmontadoras de pneus.',
    bullets: ['Balanceadoras', 'Desmontadoras de pneus'],
    image: truckBalancerPhoto,
    imageAlt: 'Balanceadora de pneus para linha pesada Corghi Proline 150',
  },
]

export default function ProductLines() {
  return (
    <section id="linhas" className="bg-bgDark py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center font-title text-3xl font-bold text-white md:text-4xl">
          Escolha sua linha de equipamentos
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {LINES.map((line) => (
            <Link
              key={line.slug}
              to={line.slug}
              className="group rounded-lg border border-white/10 bg-bgDarkAlt p-8 transition-all duration-300 hover:border-brandRed hover:shadow-2xl"
            >
              <img src={line.image} alt={line.imageAlt} className="mx-auto h-48 w-auto object-contain" />
              <h3 className="mt-6 font-title text-2xl font-bold text-white">{line.title}</h3>
              <p className="mt-2 font-body text-textMuted">{line.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {line.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="rounded-full bg-white/5 px-3 py-1 font-body text-xs text-white"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
              <span className="mt-6 inline-block font-body font-semibold text-brandRed transition-transform duration-200 group-hover:translate-x-1">
                Ver equipamentos →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/ProductLines.jsx
git commit -m "feat: add Linha Leve / Linha Pesada card section"
```

---

### Task 9: Testimonials component

**Files:**
- Create: `src/components/Testimonials.jsx`

- [ ] **Step 1: Write the component**

```jsx
// src/components/Testimonials.jsx
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
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Testimonials.jsx
git commit -m "feat: add testimonials section with placeholder avatars"
```

---

### Task 10: CorghiNoBrasil component

**Files:**
- Create: `src/components/CorghiNoBrasil.jsx`

- [ ] **Step 1: Write the component**

```jsx
// src/components/CorghiNoBrasil.jsx
export default function CorghiNoBrasil() {
  return (
    <section id="corghi-no-brasil" className="bg-bgDarkAlt py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <span className="font-body text-sm font-semibold uppercase tracking-widest text-accentYellow">
          Presença nacional
        </span>
        <h2 className="mt-3 font-title text-3xl font-bold text-white md:text-4xl">Corghi no Brasil</h2>
        <p className="mt-6 font-body text-lg leading-relaxed text-textMuted">
          Distribuição, assistência técnica e peças de reposição em todo o território nacional, com equipe
          especializada para atender oficinas, revendas e frotas.
        </p>
        {/* TODO: substituir por conteúdo real de cobertura/eventos vindo do WordPress (texto completo, mapa de atendimento, fotos de eventos) */}
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/CorghiNoBrasil.jsx
git commit -m "feat: add Corghi no Brasil section"
```

---

### Task 11: CTASection and Footer components

**Files:**
- Create: `src/components/CTASection.jsx`
- Create: `src/components/Footer.jsx`

- [ ] **Step 1: Write `CTASection.jsx`**

```jsx
// src/components/CTASection.jsx
import { buildWhatsAppLink } from '../lib/whatsapp'

export default function CTASection() {
  return (
    <section id="contato" className="bg-brandRed py-16">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="font-title text-3xl font-bold text-white md:text-4xl">
          Pronto para equipar sua oficina?
        </h2>
        <p className="mt-4 font-body text-white/90">
          Fale agora com um consultor Corghi e receba um orçamento sem compromisso.
        </p>
        <a
          href={buildWhatsAppLink('5511999999999')}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded-md bg-bgDark px-8 py-3 font-body font-semibold text-white transition-colors hover:bg-black"
        >
          Falar no WhatsApp
        </a>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Write `Footer.jsx`**

```jsx
// src/components/Footer.jsx
import logoOnDark from '../assets/brand/corghi-logo-on-dark.svg'

export default function Footer() {
  return (
    <footer className="bg-bgDark py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 text-center">
        <img src={logoOnDark} alt="Corghi" className="h-10 w-auto" />
        <p className="font-body text-sm text-textMuted">
          © {new Date().getFullYear()} Corghi do Brasil. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
```

- [ ] **Step 3: Commit**

```bash
git add src/components/CTASection.jsx src/components/Footer.jsx
git commit -m "feat: add closing CTA section and footer"
```

---

### Task 12: Home page assembly and routing

**Files:**
- Create: `src/pages/Home.jsx`
- Modify: `src/App.jsx`

- [ ] **Step 1: Write `src/pages/Home.jsx`**

```jsx
// src/pages/Home.jsx
import Hero from '../components/Hero'
import AboutCorghi from '../components/AboutCorghi'
import ProductLines from '../components/ProductLines'
import Testimonials from '../components/Testimonials'
import CorghiNoBrasil from '../components/CorghiNoBrasil'
import CTASection from '../components/CTASection'

export default function Home() {
  return (
    <>
      <Hero />
      <AboutCorghi />
      <ProductLines />
      <Testimonials />
      <CorghiNoBrasil />
      <CTASection />
    </>
  )
}
```

- [ ] **Step 2: Rewrite `src/App.jsx` to wire routing and shared layout**

```jsx
// src/App.jsx
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Home from './pages/Home'
import LinhaLeve from './pages/LinhaLeve'
import LinhaPesada from './pages/LinhaPesada'

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/linha-leve" element={<LinhaLeve />} />
        <Route path="/linha-pesada" element={<LinhaPesada />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
```

Note: `LinhaLeve` and `LinhaPesada` are created in Tasks 14–15. This task's dev-server check (Step 3)
will 500 on those two routes until then — only verify `/` in this task.

- [ ] **Step 3: Verify the home route renders**

Run: `npm run dev -- --port 5173 &` then `curl -s http://localhost:5173/ | grep -o '<div id="root">'`
Expected: `<div id="root">` present (confirms `index.html` served; full render requires a browser — do a
visual check with the Claude Preview tool: `preview_start` pointed at `npm run dev`, then
`preview_screenshot`, confirming the hero, about, product lines, testimonials, Corghi no Brasil, CTA and
footer sections all render top-to-bottom without console errors via `preview_console_logs`).
Stop the dev server after verifying.

- [ ] **Step 4: Commit**

```bash
git add src/pages/Home.jsx src/App.jsx
git commit -m "feat: assemble home page and wire routing"
```

---

### Task 13: Product data and ProductCard component

**Files:**
- Create: `src/data/products.js`
- Create: `src/components/ProductCard.jsx`
- Test: `src/components/ProductCard.test.jsx`

- [ ] **Step 1: Write `src/data/products.js`**

```js
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
  },
  {
    slug: 'hm-4502',
    name: 'HM 4502',
    category: 'Elevador',
    image: elevatorPhoto,
    imageAlt: 'Elevador automotivo Corghi HM 4502',
  },
]

export const LINHA_PESADA_PRODUCTS = [
  {
    slug: 'proline-150-truck',
    name: 'Proline 150 Truck',
    category: 'Balanceadora',
    image: truckBalancerPhoto,
    imageAlt: 'Balanceadora de pneus para linha pesada Corghi Proline 150',
  },
  {
    slug: 'hd1800-hydrus',
    name: 'HD 1800 Hydrus',
    category: 'Desmontadora de pneus',
    image: tireChangerPhoto,
    imageAlt: 'Desmontadora de pneus Corghi HD 1800 Hydrus com centralina',
  },
]
```

- [ ] **Step 2: Write the failing test for `ProductCard`**

```jsx
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
```

- [ ] **Step 3: Run test to verify it fails**

Run: `npx vitest run src/components/ProductCard.test.jsx`
Expected: FAIL — `Failed to resolve import "./ProductCard"`

- [ ] **Step 4: Write the component**

```jsx
// src/components/ProductCard.jsx
import { buildWhatsAppLink } from '../lib/whatsapp'

export default function ProductCard({ product }) {
  const quoteMessage = `Quero orçamento do ${product.name}`

  return (
    <div className="rounded-lg border border-white/10 bg-bgDarkAlt p-6 transition-colors duration-200 hover:border-brandRed">
      <img src={product.image} alt={product.imageAlt} className="mx-auto h-40 w-auto object-contain" />
      <span className="mt-4 block font-body text-xs uppercase tracking-widest text-accentYellow">
        {product.category}
      </span>
      <h3 className="mt-1 font-title text-xl font-bold text-white">{product.name}</h3>
      <a
        href={buildWhatsAppLink('5511999999999', quoteMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block font-body text-sm font-semibold text-brandRed hover:text-brandRedDark"
      >
        Solicitar orçamento →
      </a>
    </div>
  )
}
```

- [ ] **Step 5: Run test to verify it passes**

Run: `npx vitest run src/components/ProductCard.test.jsx`
Expected: PASS (2 tests)

- [ ] **Step 6: Commit**

```bash
git add src/data/products.js src/components/ProductCard.jsx src/components/ProductCard.test.jsx
git commit -m "feat: add product data and ProductCard with tests"
```

---

### Task 14: Linha Leve page

**Files:**
- Create: `src/pages/LinhaLeve.jsx`

- [ ] **Step 1: Write the page**

```jsx
// src/pages/LinhaLeve.jsx
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import CTASection from '../components/CTASection'
import { LINHA_LEVE_PRODUCTS } from '../data/products'

export default function LinhaLeve() {
  return (
    <>
      <section className="bg-bgDark py-20">
        <div className="mx-auto max-w-7xl px-6">
          <nav aria-label="breadcrumb" className="font-body text-sm text-textMuted">
            <Link to="/" className="hover:text-white">
              Início
            </Link>{' '}
            / Linha Leve
          </nav>
          <h1 className="mt-4 font-title text-4xl font-black text-white md:text-5xl">Linha Leve</h1>
          <p className="mt-4 max-w-2xl font-body text-lg text-textMuted">
            Alinhadores 3D e elevadores de precisão para carros de passeio, homologados pelas principais
            montadoras.
          </p>
        </div>
      </section>

      <section className="bg-bgDarkAlt py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2">
          {LINHA_LEVE_PRODUCTS.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <CTASection />
    </>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/pages/LinhaLeve.jsx
git commit -m "feat: add Linha Leve page"
```

---

### Task 15: Linha Pesada page

**Files:**
- Create: `src/pages/LinhaPesada.jsx`

- [ ] **Step 1: Write the page**

```jsx
// src/pages/LinhaPesada.jsx
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import CTASection from '../components/CTASection'
import { LINHA_PESADA_PRODUCTS } from '../data/products'

export default function LinhaPesada() {
  return (
    <>
      <section className="bg-bgDark py-20">
        <div className="mx-auto max-w-7xl px-6">
          <nav aria-label="breadcrumb" className="font-body text-sm text-textMuted">
            <Link to="/" className="hover:text-white">
              Início
            </Link>{' '}
            / Linha Pesada
          </nav>
          <h1 className="mt-4 font-title text-4xl font-black text-white md:text-5xl">Linha Pesada</h1>
          <p className="mt-4 max-w-2xl font-body text-lg text-textMuted">
            Balanceadoras e desmontadoras de pneus para frotas e caminhões, construídas para operação
            contínua.
          </p>
        </div>
      </section>

      <section className="bg-bgDarkAlt py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2">
          {LINHA_PESADA_PRODUCTS.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <CTASection />
    </>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/pages/LinhaPesada.jsx
git commit -m "feat: add Linha Pesada page"
```

---

### Task 16: Full test suite, responsive check, and visual verification

**Files:** none created — verification only.

- [ ] **Step 1: Run the full automated test suite**

Run: `npm test`
Expected: all test files pass (`whatsapp.test.js`, `ProductCard.test.jsx`).

- [ ] **Step 2: Start the dev server via the Claude Preview tool**

Use `preview_start` (add a `dev` configuration to `.claude/launch.json` running `npm run dev` on a fixed
port if not already present).

- [ ] **Step 3: Desktop screenshot pass**

Use `preview_resize` with `preset: "desktop"`, then `preview_screenshot` on `/`, `/linha-leve`, and
`/linha-pesada` (navigate via `preview_eval` setting `window.location.href`). Confirm: hero text is
legible over the graphite background, product photos aren't visually clipped, card hover states exist,
WhatsApp button is visible and doesn't overlap footer content.

- [ ] **Step 4: Mobile screenshot pass**

Use `preview_resize` with `preset: "mobile"`, repeat the screenshot pass on all 3 routes. Confirm: nav
collapses correctly (desktop links are `hidden md:flex`, so on mobile only logo + Orçamento button should
show — if the header looks broken, add a mobile menu in a follow-up task), Linha Leve/Pesada cards stack
to one column, no horizontal scroll/overflow.

- [ ] **Step 5: Check for console errors**

Use `preview_console_logs` on each route. Expected: no errors (missing image 404s would indicate Task 2's
downloads failed silently — re-run Task 2 Step 2 if so).

- [ ] **Step 6: Fix any issues found, then final commit**

```bash
git add -A
git commit -m "chore: final responsive and visual verification pass"
```

---

## Self-Review Notes

- **Spec coverage:** Header/Hero/AboutCorghi/ProductLines/Testimonials/CorghiNoBrasil/CTA/Footer/
  WhatsAppButton all map to Tasks 4–11; Home assembly + routing in Task 12; Linha Leve/Pesada pages in
  Tasks 14–15 reuse `ProductCard` from Task 13; placeholder handling (`TODO` comments) present in
  `WhatsAppButton`, `Testimonials`, `CorghiNoBrasil` per spec's placeholder policy. Brand tokens (Task 1)
  and recovered assets (Task 2) match the confirmed identity extraction.
- **Placeholder scan:** No `TBD`/unfinished steps — the only `TODO` comments are the spec-mandated,
  intentional content markers for real WhatsApp number and future real photos/testimonials, not
  unfinished plan steps.
- **Type/name consistency:** `buildWhatsAppLink(phone, message)` signature (Task 3) used identically in
  `WhatsAppButton`, `Header`, `Hero`, `CTASection`, `ProductCard`. `LINHA_LEVE_PRODUCTS` /
  `LINHA_PESADA_PRODUCTS` names from Task 13 match imports in Tasks 14–15. Route paths `/linha-leve` and
  `/linha-pesada` consistent across `Header`, `ProductLines`, `App`, and both line pages.
