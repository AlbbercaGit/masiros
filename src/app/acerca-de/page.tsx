'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { X, Instagram, Twitter, Facebook } from 'lucide-react'

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

export default function AboutPage() {
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

  return (
    <div className="min-h-screen flex flex-col bg-[#E8E8E8]">
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

      <main className="flex-grow py-16 px-6 flex justify-center items-center">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-stretch gap-5 h-full">
          <motion.div 
            className="md:w-1/2 pr-8 flex flex-col justify-center"
            initial="hidden"
            animate="visible"
            variants={clipVariants}
          >
            <h2 className="text-5xl font-serif text-gray-700 mb-6">Quiénes somos</h2>
            <p className="text-gray-600 mb-4">
              Podrías contar la historia de tus orígenes, hablar sobre tu equipo, mencionar
              los premios o reconocimientos, o compartir hitos. Aprovecha tu creatividad.
              ¡Tú puedes! La manera en la que cuentas tu historia en línea puede marcar
              la diferencia.
            </p>
            <p className="text-gray-600">
              No te preocupes por sonar profesional. Suena como tú. Hay más de 1900
              millones de sitios web, pero tu historia es la que diferencia a tu lugar del
              resto. Si te sientes bien con palabras y no quieres proponer nada en tu internet, es
              una buena señal de que quizá aún tienes más trabajo por hacer.
            </p>
          </motion.div>
          <motion.div 
            className="md:w-1/2 mt-8 md:mt-0 flex items-center"
            initial="hidden"
            animate="visible"
            variants={clipVariants}
          >
            <Image
              src="https://raw.githubusercontent.com/AlbbercaGit/videos/d3aac00fe12f366cf07989c19248d1e2afec8965/masiros/2escalado.jpeg"
              alt="Modern sculptural chair"
              width={600}
              height={600}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </main>

      <motion.div 
        className="bg-[#342E2E] py-16 px-6"
        initial="hidden"
        animate="visible"
        variants={clipVariants}
      >
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-serif text-white mb-6">Empezar</h3>
          <Link href="/servicios" passHref>
            <motion.button
              className="font-semibold py-3 px-8 text-sm relative overflow-hidden bg-transparent text-white border border-white"
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
                initial={{ color: 'white' }}
                whileHover={{ color: 'white', backgroundColor: '#342E2E' }}
                transition={{ duration: 0.3 }}
              >
                Ver servicios
              </motion.span>
              <motion.div
                className="absolute inset-0 bg-white z-10"
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
          </Link>
        </div>
      </motion.div>

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