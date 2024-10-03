import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#E8E8E8] pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-9xl font-serif text-[#817A7A] mb-12 text-center">
          Parquet Masiros
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-xl text-center font-serif text-[#817A7A] mb-4">Ubicación</h3>
            <p className="text-sm text-center text-[#999999]">
              C/ Poeta Mas y Ros 83,<br />
              46022 Valencia
            </p>
          </div>
          <div>
            <h3 className="text-xl text-center font-serif text-[#817A7A] mb-4">Contacto</h3>
            <p className="text-sm text-center text-[#999999]">
              <a href="tel:+34963561749" className="hover:underline">+34 96 356 17 49</a><br />
              <a href="mailto:masirosparquet@masirosparquet.com" className="hover:underline">masirosparquet@masirosparquet.com</a><br />
              <a href="mailto:masirosparquet@masirosparquet.es" className="hover:underline">masirosparquet@masirosparquet.es</a>
            </p>
          </div>
          <div>
            <h3 className="text-xl text-center font-serif text-[#817A7A] mb-4">Horario</h3>
            <p className="text-sm text-center text-[#999999]">
              Lun - Vie<br />
              10:00 - 13:30<br />
              17:00 - 20:00<br />
              Sábado - Dom<br />
              Cerrado
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}