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
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/linha-leve" element={<LinhaLeve />} />
        <Route path="/linha-pesada" element={<LinhaPesada />} />
        <Route path="/produto/:slug" element={<ProdutoDetalhe />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
