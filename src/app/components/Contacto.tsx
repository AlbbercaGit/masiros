'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Button } from "@/components/ui/button"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    email: '',
    mensaje: ''
  })

  const formRef = useRef(null)
  const isInView = useInView(formRef, { once: true, amount: 0.3 })

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
    setFormData({ nombre: '', apellidos: '', email: '', mensaje: '' })
  }

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
    <section ref={formRef} className="bg-[#E8E8E8] py-16 px-4">
      <motion.div 
        className="max-w-[75%] mx-auto pt-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div variants={containerVariants}>
            <motion.h2 className="md:text-7xl text-5xl font-serif text-[#817A7A] mb-4" variants={itemVariants}>Contáctanos</motion.h2>
            <motion.p className="text-[#817A7A] mb-8 md:w-3/5" variants={itemVariants}>
              ¿Quieres que trabajemos juntos? Ingresa tus datos y nos pondremos en contacto contigo en breve. Esperamos tener noticias tuyas pronto.
            </motion.p>
          </motion.div>
          <motion.form onSubmit={handleSubmit} className="space-y-6" variants={containerVariants}>
            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={containerVariants}>
              <motion.div className="relative" variants={itemVariants}>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className="block w-full px-0 py-2 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="nombre"
                  className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3  origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Nombre <span className="text-[#817A7A]">(obligatorio)</span>
                </label>
              </motion.div>
              <motion.div className="relative" variants={itemVariants}>
                <input
                  type="text"
                  id="apellidos"
                  name="apellidos"
                  value={formData.apellidos}
                  onChange={handleChange}
                  className="block w-full px-0 py-2 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="apellidos"
                  className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3  origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Apellidos
                </label>
              </motion.div>
            </motion.div>
            <motion.div className="relative" variants={itemVariants}>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="block w-full px-0 py-2 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="email"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3  origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Correo electrónico <span className="text-[#999999]">(obligatorio)</span>
              </label>
            </motion.div>
            <motion.div className="relative" variants={itemVariants}>
              <textarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                required
                rows={4}
                className="block w-full px-0 py-2 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                placeholder=" "
              ></textarea>
              <label
                htmlFor="mensaje"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3  origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Mensaje <span className="text-[#999999]">(obligatorio)</span>
              </label>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Button 
                type="submit"
                className="bg-[#333333] text-white hover:bg-[#4a4a4a] px-8 py-3 rounded-full"
              >
                Enviar
              </Button>
            </motion.div>
          </motion.form>
        </div>
      </motion.div>
    </section>
  )
}