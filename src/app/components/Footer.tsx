import Link from 'next/link'
import { Instagram, Twitter, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#E8E8E8] pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-9xl font-serif  text-[#817A7A] mb-12 text-center">
          Parquet Masiros
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-xl text-center font-serif text-[#817A7A] mb-4">Ubicación</h3>
            <p className="text-sm  text-center text-[#999999]">
              Calle de ejemplo, 123<br />
              Nueva York, NY 12345
            </p>
          </div>
          <div>
            <h3 className="text-xl text-center font-serif text-[#817A7A] mb-4">Contacto</h3>
            <p className="text-sm text-center text-[#999999]">
              <a href="mailto:correo@ejemplo.com" className="hover:underline">correo@ejemplo.com</a><br />
              (555) 555-5555
            </p>
          </div>
          <div>
            <h3 className="text-xl text-center font-serif text-[#817A7A] mb-4">Síguenos</h3>
            <div className="flex justify-center space-x-4">
              <Link href="#" className="text-[#999999] hover:text-[#817A7A]">
                <Instagram className="w-6 h-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-[#999999] hover:text-[#817A7A]">
                <Twitter className="w-6 h-6" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-[#999999] hover:text-[#817A7A]">
                <Facebook className="w-6 h-6" />
                <span className="sr-only">Facebook</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}