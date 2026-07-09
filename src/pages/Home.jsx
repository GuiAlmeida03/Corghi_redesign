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
