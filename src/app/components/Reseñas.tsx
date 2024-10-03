'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'

export default function ServicesSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })
  const services = [
    {
      name: 'Suelos y Tarimas',
      price: '99 €',
      image: 'https://raw.githubusercontent.com/AlbbercaGit/videos/refs/heads/main/masiros/1.JPG',
      description: `Tarimas Flotantes y Macizas:
Instalamos tarimas sin obra, brindando calidez y aislamiento.

Suelos Laminados:
Ofrecemos suelos laminados de alta calidad que imitan la madera.`
    },
    {
      name: 'Baños y Cocinas',
      price: '149 €',
      image: 'https://raw.githubusercontent.com/AlbbercaGit/videos/refs/heads/main/masiros/3.JPG',
      description: `Parquet para Baños y Cocinas:
Asesoramos sobre la mejor opción considerando la humedad, manteniendo la estética.`
    },
    {
      name: 'Decoración y Mobiliario',
      price: '199 €',
      image: 'https://raw.githubusercontent.com/AlbbercaGit/videos/refs/heads/main/masiros/5.JPG',
      description: `Paneles Decorativos:
Paneles decorativos y revestimientos de fácil instalación para cualquier espacio.

Restauraciones y Lijados:
Restauramos suelos de madera con lijado y barnizado.

Puertas y Armarios:
Fabricamos puertas, armarios y vestidores a medida sin necesidad de obra.`
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
              <motion.div 
                className="text-lg text-[#817A7A]"
                variants={itemVariants}
              >
                {service.description.split('\n\n').map((paragraph, i) => (
                  <p key={i} className="mb-4">
                    {paragraph.split('\n').map((line, j) => (
                      <span key={j} className="block">
                        {j === 0 ? (
                          <strong>{line}</strong>
                        ) : (
                          line
                        )}
                      </span>
                    ))}
                  </p>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}