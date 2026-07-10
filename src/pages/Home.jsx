// src/pages/Home.jsx
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Hero from '../components/Hero'
import AboutCorghi from '../components/AboutCorghi'
import CorghiNoMundo from '../components/CorghiNoMundo'
import ProductLines from '../components/ProductLines'
import Testimonials from '../components/Testimonials'
import CorghiNoBrasil from '../components/CorghiNoBrasil'
import CTASection from '../components/CTASection'
import { useDocumentHead } from '../lib/useDocumentHead'

export default function Home() {
  const location = useLocation()
  const navigate = useNavigate()

  useDocumentHead(
    'Equipamentos para Oficina Mecânica',
    'Balanceadoras, desmontadoras, alinhadores 3D e elevadores da marca italiana Corghi, homologados pelas principais montadoras e fabricantes de pneus.',
  )

  useEffect(() => {
    const targetId = location.state?.scrollTo
    if (targetId) {
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' })
      navigate(location.pathname, { replace: true, state: {} })
    }
  }, [location, navigate])

  return (
    <>
      <Hero />
      <AboutCorghi />
      <CorghiNoMundo />
      <ProductLines />
      <Testimonials />
      <CorghiNoBrasil />
      <CTASection />
    </>
  )
}
