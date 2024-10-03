'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, useInView } from 'framer-motion'

const testimonials = [
  {
    id: 1,
    name: 'Lindsey Beumer',
    image: '/placeholder.svg?height=100&width=100',
    quote: 'Todo comienza con una idea. Tal vez quieras comenzar un negocio.',
  },
  {
    id: 2,
    name: 'Keith Finley',
    image: '/placeholder.svg?height=100&width=100',
    quote: 'Todo comienza con una idea. Tal vez quieras comenzar un negocio.',
  },
  {
    id: 3,
    name: 'Laurie Payton',
    image: '/placeholder.svg?height=100&width=100',
    quote: 'Todo comienza con una idea. Tal vez quieras comenzar un negocio.',
  },
  {
    id: 4,
    name: 'Alex Johnson',
    image: '/placeholder.svg?height=100&width=100',
    quote: 'La innovación distingue a un líder de un seguidor.',
  },
  {
    id: 5,
    name: 'Maria Garcia',
    image: '/placeholder.svg?height=100&width=100',
    quote: 'El éxito es la suma de pequeños esfuerzos repetidos día tras día.',
  },
]

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [visibleTestimonials, setVisibleTestimonials] = useState(1)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  const totalTestimonials = testimonials.length

  useEffect(() => {
    const handleResize = () => {
      setVisibleTestimonials(window.innerWidth >= 768 ? 3 : 1)
    }

    handleResize() // Set initial value
    window.addEventListener('resize', handleResize)

    const timer = setInterval(() => {
      handleNext()
    }, 10000)

    return () => {
      clearInterval(timer)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handlePrev = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? totalTestimonials - 1 : prevIndex - 1
      return newIndex
    })
    setTimeout(() => setIsAnimating(false), 500)
  }

  const handleNext = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === totalTestimonials - 1 ? 0 : prevIndex + 1
      return newIndex
    })
    setTimeout(() => setIsAnimating(false), 500)
  }

  const variants = {
    hidden: { clipPath: 'inset(0 100% 0 0)' },
    visible: { 
      clipPath: 'inset(0 0% 0 0)',
      transition: { 
        duration: 1,
        ease: 'easeInOut',
      }
    }
  }

  return (
    <section ref={sectionRef} className="py-16 px-4 bg-[#E8E8E8]">
      <motion.div 
        className="max-w-6xl mx-auto font-libre"
        variants={variants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <h2 className="text-4xl md:text-6xl text-[#333333] mb-12 text-center">Haz que se destaque.</h2>
        <div className="relative overflow-hidden mb-12">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / visibleTestimonials)}%)` }}
          >
            {[...testimonials, ...testimonials.slice(0, visibleTestimonials)].map((testimonial, index) => (
              <div key={index} className={`w-full md:w-1/3 flex-shrink-0 px-4`}>
                <div className="bg-white p-6 h-[350px] shadow-lg flex flex-col justify-between">
                  <div>
                    <div className="flex justify-center mb-4">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={100}
                        height={100}
                        className="rounded-full"
                      />
                    </div>
                    <blockquote className="text-center mb-4">
                      <p className="text-xl md:text-2xl text-gray-600">"{testimonial.quote}"</p>
                    </blockquote>
                  </div>
                  <p className="text-center text-lg md:text-xl font-almarai">{testimonial.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-8 space-x-8">
          <motion.button
            onClick={handlePrev}
            className="w-12 h-12 flex items-center justify-center border border-[#333333] text-[#333333] rounded-full hover:bg-[#333333] hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#333333] focus:ring-opacity-50"
            // whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>
          <motion.button
            onClick={handleNext}
            className="w-12 h-12 flex items-center justify-center border border-[#333333] text-[#333333] rounded-full hover:bg-[#333333] hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#333333] focus:ring-opacity-50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </div>
      </motion.div>
    </section>
  )
}