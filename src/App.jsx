// src/App.jsx
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Home from './pages/Home'
import LinhaLeve from './pages/LinhaLeve'
import LinhaPesada from './pages/LinhaPesada'
import ProdutoDetalhe from './pages/ProdutoDetalhe'

export default function App() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-brandRed focus:px-4 focus:py-2 focus:font-body focus:font-semibold focus:text-white"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/linha-leve" element={<LinhaLeve />} />
          <Route path="/linha-pesada" element={<LinhaPesada />} />
          <Route path="/produto/:slug" element={<ProdutoDetalhe />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
