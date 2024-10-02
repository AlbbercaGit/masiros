'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'

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
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  const duplicatedPartners = [...partners, ...partners, ...partners, ...partners] // Duplica más para un scroll continuo

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
    <section ref={sectionRef} className="px-4 bg-[#E8E8E8] overflow-hidden">
      <motion.div 
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
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
              className="flex space-x-4"
              animate={{ 
                x: ['0%', '-100%']
              }}
              transition={{ 
                x: { 
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear"
                },
              }}
            >
              {duplicatedPartners.map((partner, index) => (
                <motion.div 
                  key={`${partner.name}-${index}`} 
                  className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4"
                  variants={itemVariants}
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