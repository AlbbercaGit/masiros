'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    email: '',
    mensaje: ''
  })

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

  return (
    <section className="bg-[#E8E8E8] py-16 px-4">
      <div className="max-w-[75%] mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-5xl font-serif text-[#817A7A] mb-4">Contáctanos</h2>
            <p className="text-[#817A7A] mb-8">
              ¿Quieres que trabajemos juntos? Ingresa tus datos y nos pondremos en contacto contigo en breve. Esperamos tener noticias tuyas pronto.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
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
              </div>
              <div className="relative">
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
              </div>
            </div>
            <div className="relative">
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
            </div>
            <div className="relative">
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
            </div>
            <Button 
              type="submit"
              className="bg-[#333333] text-white hover:bg-[#4a4a4a] px-8 py-3 rounded-full"
            >
              Enviar
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}