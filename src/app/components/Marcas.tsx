'use client'

import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, useInView, useAnimation } from 'framer-motion'

interface Partner {
  name: string;
  logo: string;
}

const partners: Partner[] = [
  { name: 'Partner 1', logo: 'https://raw.githubusercontent.com/AlbbercaGit/videos/refs/heads/main/logos/1.jpg' },
  { name: 'Partner 2', logo: 'https://raw.githubusercontent.com/AlbbercaGit/videos/refs/heads/main/logos/1.png' },
  { name: 'Partner 3', logo: 'https://raw.githubusercontent.com/AlbbercaGit/videos/refs/heads/main/logos/2.png' },
  { name: 'Partner 4', logo: 'https://raw.githubusercontent.com/AlbbercaGit/videos/refs/heads/main/logos/3.png' },
  { name: 'Partner 5', logo: 'https://raw.githubusercontent.com/AlbbercaGit/videos/refs/heads/main/logos/4.png' },
]

export default function PartnerLogos() {
  const sectionRef = useRef<HTMLElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })
  const controls = useAnimation()
  const [containerWidth, setContainerWidth] = useState(0)
  const [containerPadding, setContainerPadding] = useState(0)

  const duplicatedPartners = [...partners, ...partners, ...partners, ...partners]

  useEffect(() => {
    const updateContainerDimensions = () => {
      if (containerRef.current) {
        const styles = window.getComputedStyle(containerRef.current)
        const paddingLeft = parseFloat(styles.paddingLeft)
        const paddingRight = parseFloat(styles.paddingRight)
        setContainerWidth(containerRef.current.offsetWidth)
        setContainerPadding(paddingLeft + paddingRight)
      }
    }

    updateContainerDimensions()
    window.addEventListener('resize', updateContainerDimensions)
    return () => window.removeEventListener('resize', updateContainerDimensions)
  }, [])

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

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

  const logoWidth = (containerWidth - containerPadding) / 4 // Ajustamos el ancho del logo considerando el padding

  return (
    <section ref={sectionRef} className="px-4 bg-[#E8E8E8] overflow-hidden">
      <motion.div 
        ref={containerRef}
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.h2 
          className="text-4xl font-serif text-[#817A7A] mb-12 text-center"
          variants={itemVariants}
        >
          Nuestras marcas
        </motion.h2>
        <div className="relative">
          <div 
            className="overflow-hidden"
            style={{ 
              maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
            }}
          >
            <motion.div 
              className="flex"
              animate={{ 
                x: [`0px`, `-${(containerWidth - containerPadding) * (partners.length / 4)}px`]
              }}
              transition={{ 
                x: { 
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear"
                },
              }}
              style={{ width: `${(containerWidth - containerPadding) * 2}px` }}
            >
              {duplicatedPartners.map((partner, index) => (
                <motion.div 
                  key={`${partner.name}-${index}`} 
                  className="flex-shrink-0"
                  variants={itemVariants}
                  style={{ width: `${logoWidth}px` }}
                >
                  <div className="flex items-center justify-center h-32">
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      width={200}
                      height={100}
                      objectFit="contain"
                      className="max-h-full"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}