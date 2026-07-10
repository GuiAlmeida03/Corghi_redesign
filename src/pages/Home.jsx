// src/pages/Home.jsx
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Hero from '../components/Hero'
import AboutCorghi from '../components/AboutCorghi'
import ProductLines from '../components/ProductLines'
import Testimonials from '../components/Testimonials'
import CorghiNoBrasil from '../components/CorghiNoBrasil'
import CTASection from '../components/CTASection'

export default function Home() {
  const location = useLocation()
  const navigate = useNavigate()

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
      <ProductLines />
      <Testimonials />
      <CorghiNoBrasil />
      <CTASection />
    </>
  )
}
