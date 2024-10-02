'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'

export default function ServicesSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  const services = [
    {
      name: 'Servicio básico',
      price: '99 €',
      image: 'https://raw.githubusercontent.com/AlbbercaGit/videos/refs/heads/main/masiros/1.JPG',
      description: 'Describe los detalles importantes, tales como el precio, el valor, la duración del servicio y por qué es exclusivo. También puedes usar estas secciones para mostrar distintos valores clave de tus productos o servicios.'
    },
    {
      name: 'Servicio intermedio',
      price: '149 €',
      image: 'https://raw.githubusercontent.com/AlbbercaGit/videos/refs/heads/main/masiros/3.JPG',
      description: 'Describe los detalles importantes, tales como el precio, el valor, la duración del servicio y por qué es exclusivo. También puedes usar estas secciones para mostrar distintos valores clave de tus productos o servicios.'
    },
    {
      name: 'Servicio avanzado',
      price: '199 €',
      image: 'https://raw.githubusercontent.com/AlbbercaGit/videos/refs/heads/main/masiros/5.JPG',
      description: 'Describe los detalles importantes, tales como el precio, el valor, la duración del servicio y por qué es exclusivo. También puedes usar estas secciones para mostrar distintos valores clave de tus productos o servicios.'
    }
  ]

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
      <div className="max-w-[75%] mx-auto">
        <motion.h2 
          className="text-4xl md:text-7xl font-serif text-[#817A7A] mb-12"
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          Nuestros servicios
        </motion.h2>
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div key={index} className="flex flex-col" variants={containerVariants}>
              <motion.div 
                className="w-full h-96 mb-4 overflow-hidden"
                variants={itemVariants}
              >
                <Image
                  src={service.image}
                  alt={service.name}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.h3 
                className="text-3xl font-serif text-[#333333] mb-2"
                variants={itemVariants}
              >
                <span className="border-b border-b-[#333333]"> {service.name} </span>
              </motion.h3>
              <motion.p 
                className="text-xl font-extralight text-[#333333] mb-4"
                variants={itemVariants}
              >
                {service.price}
              </motion.p>
              <motion.p 
                className="text-lg text-[#817A7A]"
                variants={itemVariants}
              >
                {service.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}