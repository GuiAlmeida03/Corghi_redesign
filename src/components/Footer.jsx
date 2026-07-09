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
