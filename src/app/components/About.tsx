'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { Button } from "@/components/ui/button"

export default function AboutSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { clipPath: 'inset(0 100% 0 0)' },
    visible: { 
      clipPath: 'inset(0 0% 0 0)',
      transition: { 
        duration: 0.5,
        ease: 'easeInOut',
      }
    }
  }

  return (
    <section ref={sectionRef} className="bg-[#E8E8E8] py-16 px-4">
      <motion.div 
        className="max-w-[75%] mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div className='w-[90%]' variants={containerVariants}>
            <motion.h2 className="text-4xl md:text-5xl font-libre text-[#817A7A] mb-6" variants={itemVariants}>
              Más sobre<br />nuestra marca
            </motion.h2>
            <motion.p className="text-[#817A7A] text-lg mb-8" variants={itemVariants}>
              Cuenta quién eres, tus orígenes, tu proceso o lo que te inspira. Aprovecha tu
              creatividad. ¡Tú puedes! La manera en la que cuentas tu historia en línea puede
              marcar la diferencia.
            </motion.p>
            {/* <Button variant="secondary" className="bg-[#333333] text-white hover:bg-[#4a4a4a]">
              Leer más
            </Button> */}
          </motion.div>
          <motion.div variants={itemVariants}>
            <Image
              src="https://raw.githubusercontent.com/AlbbercaGit/videos/refs/heads/main/masiros/xd4.jpg"
              alt="Office supplies on a white background"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div className="order-2 md:order-1" variants={itemVariants}>
            <Image
              src="https://raw.githubusercontent.com/AlbbercaGit/videos/refs/heads/main/masiros/xd5.jpg"
              alt="Artistic image with geometric shapes"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </motion.div>
          <motion.div className="order-1 md:order-2" variants={containerVariants}>
            <motion.h3 className="text-3xl font-serif text-[#817A7A] mb-6" variants={itemVariants}>Nuestra filosofía</motion.h3>
            <motion.p className="text-[#817A7A] mb-6" variants={itemVariants}>
              Aquí puedes expandir sobre la filosofía de tu marca, tus valores core, o cualquier
              información adicional que quieras compartir con tus clientes. Este espacio es ideal
              para profundizar en lo que hace única a tu marca.
            </motion.p>
            <motion.p className="text-[#817A7A]" variants={itemVariants}>
              Recuerda que la autenticidad y la transparencia son clave para conectar con tu
              audiencia. No temas mostrar la personalidad detrás de tu marca.
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}