'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

const clipVariants = {
  hidden: { clipPath: "inset(0 100% 0 0)" },
  visible: {
    clipPath: "inset(0 0% 0 0)",
    transition: { duration: 0.8, ease: "easeOut" },
  },
}

const menuVariants = {
  closed: {
    opacity: 0,
    y: 20,
    transition: {
      y: { stiffness: 1000 },
    },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
}

const containerVariants = {
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
}

const buttonVariants = {
  initial: {
    scale: 1,
  },
  hover: {
    scale: 1.05,
  },
}

const clipPathVariants = {
  initial: { clipPath: 'inset(0 100% 0 0)' },
  hover: { clipPath: 'inset(0 0 0 0)' },
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    email: '',
    mensaje: ''
  })
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const [headerHeight, setHeaderHeight] = useState(0)

  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight)
      }
    }

    updateHeaderHeight()
    window.addEventListener("resize", updateHeaderHeight)

    return () => window.removeEventListener("resize", updateHeaderHeight)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Here you would typically send the form data to your server
    setFormData({ nombre: '', apellidos: '', email: '', mensaje: '' })
  }

  return (
    <div className="min-h-screen bg-[#E8E8E8] flex flex-col">
      <motion.header
        ref={headerRef}
        className="py-6 flex justify-between items-center w-full max-w-[75%] mx-auto relative z-20"
        initial="hidden"
        animate="visible"
        variants={clipVariants}
      >
        <Link href="/" className="md:text-3xl text-2xl text-[#333333] font-serif">Parquet Masiros</Link>
        <nav className="relative">
          <button
            className="md:hidden flex flex-col space-y-1"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Abrir menú"
          >
            <span className="w-6 h-0.5 bg-[#333333]"></span>
            <span className="w-6 h-0.5 bg-[#333333]"></span>
          </button>
          <ul className="hidden md:flex font-almarai space-x-6 text-lg text-[#333333]">
            <li>
              <Link href="/acerca-de">Nosotros</Link>
            </li>
            <li>
              <Link href="/contacto">Contacto</Link>
            </li>
          </ul>
        </nav>
      </motion.header>

      <main className="flex-grow py-16 w-full max-w-[75%] mx-auto">
        <div className="flex flex-col md:flex-row md:space-x-12">
          <motion.div 
            className="md:w-1/2"
            initial="hidden"
            animate="visible"
            variants={clipVariants}
          >
            <h2 className="text-5xl font-serif text-[#817A7A] mb-6">Contáctanos</h2>
            <p className="text-gray-600 mb-8">
              Visita nuestra <strong>tienda</strong>, donde encontrarás una amplia exposición de productos.<br />
              Estamos estratégicamente ubicados para brindarte la mejor atención y ayudarte a elegir con comodidad lo que necesitas.
            </p>
            <div className="mb-8">
              <a href="tel:+34963561749" className="text-gray-600 hover:underline">+34 96 356 17 49</a><br />
              <a href="mailto:masirosparquet@masirosparquet.com" className="text-gray-600 hover:underline">masirosparquet@masirosparquet.com</a><br />
              <a href="mailto:masirosparquet@masirosparquet.es" className="text-gray-600 hover:underline">masirosparquet@masirosparquet.es</a>
            </div>
            <form onSubmit={handleSubmit} className="max-w-2xl">
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre <span className="text-gray-500">(obligatorio)</span>
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-2 bg-transparent border-0 border-b border-gray-400 focus:border-gray-700 focus:outline-none focus:ring-0 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="apellidos" className="block text-sm font-medium text-gray-700 mb-1">
                    Apellidos
                  </label>
                  <input
                    type="text"
                    id="apellidos"
                    name="apellidos"
                    value={formData.apellidos}
                    onChange={handleChange}
                    className="w-full px-0 py-2 bg-transparent border-0 border-b border-gray-400 focus:border-gray-700 focus:outline-none focus:ring-0 transition-colors"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Correo electrónico <span className="text-gray-500">(obligatorio)</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-0 py-2 bg-transparent border-0 border-b border-gray-400 focus:border-gray-700 focus:outline-none focus:ring-0 transition-colors"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensaje <span className="text-gray-500">(obligatorio)</span>
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-0 py-2 bg-transparent border-0 border-b border-gray-400 focus:border-gray-700 focus:outline-none focus:ring-0 transition-colors resize-none"
                ></textarea>
              </div>
              <div className="text-right">
                <motion.button
                  type="submit"
                  className="font-semibold py-3 px-8 text-sm relative overflow-hidden bg-transparent text-[#333333] border border-[#333333]"
                  style={{
                    borderTopLeftRadius: '20px',
                    borderBottomRightRadius: '20px',
                  }}
                  variants={buttonVariants}
                  initial="initial"
                  whileHover="hover"
                  transition={{ duration: 0.3 }}
                >
                  <motion.span 
                    className="relative z-20 mix-blend-difference"
                    initial={{ color: '#333333' }}
                    whileHover={{ color: '#CFCDC7' }}
                    transition={{ duration: 0.3 }}
                  >
                    ENVIAR
                  </motion.span>
                  <motion.div
                    className="absolute inset-0 bg-[#333333] z-10"
                    style={{
                      borderTopLeftRadius: '20px',
                      borderBottomRightRadius: '20px',
                    }}
                    variants={clipPathVariants}
                    initial="initial"
                    whileHover="hover"
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  />
                </motion.button>
              </div>
            </form>
          </motion.div>
          <motion.div 
            className="md:w-1/2 mt-12 md:mt-0 relative h-[600px] hidden md:block"
            initial="hidden"
            animate="visible"
            variants={clipVariants}
          >
            <Image
              src="https://raw.githubusercontent.com/AlbbercaGit/videos/refs/heads/main/masiros/tienda-transformed.webp"
              alt="Office supplies and plant"
              fill
              style={{ objectFit: 'cover', objectPosition: 'left' }}
              className="rounded-lg"
            />
          </motion.div>
        </div>
      </main>

      <motion.footer 
        className="bg-[#E8E8E8] pb-16 px-4"
        initial="hidden"
        animate="visible"
        variants={clipVariants}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-9xl font-serif text-[#817A7A] my-12 text-center">
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
      </motion.footer>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-[#E8E8E8]/90 backdrop-blur-sm flex items-center justify-center md:hidden z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.button
              className="absolute top-6 right-6 text-[#333333]"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Cerrar menú"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={24} />
            </motion.button>
            <motion.ul
              className="text-center space-y-8"
              variants={containerVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {["Nosotros", "Contacto"].map((item) => (
                <motion.li key={item} variants={menuVariants}>
                  <Link
                    href={item === "Nosotros" ? "/acerca-de" : "/contacto"}
                    className="text-[#333333] text-3xl font-libre"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}