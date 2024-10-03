'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { InfoIcon } from 'lucide-react'
import { motion, useInView } from 'framer-motion'

const images = [
  { src: 'https://raw.githubusercontent.com/AlbbercaGit/videos/refs/heads/main/masiros/6.JPG', alt: 'Mountain lake landscape' },
  { src: 'https://raw.githubusercontent.com/AlbbercaGit/videos/refs/heads/main/masiros/2.JPG', alt: 'Grassy field with mountains' },
  { src: 'https://raw.githubusercontent.com/AlbbercaGit/videos/refs/heads/main/masiros/5.JPG', alt: 'Wooden cabins in mountain setting' },
  { src: 'https://raw.githubusercontent.com/AlbbercaGit/videos/refs/heads/main/masiros/8.JPG', alt: 'Mountain range' },
  { src: 'https://raw.githubusercontent.com/AlbbercaGit/videos/refs/heads/main/masiros/7.JPG', alt: 'Sunset over mountains with cabin' },
  { src: 'https://raw.githubusercontent.com/AlbbercaGit/videos/refs/heads/main/masiros/3.JPG', alt: 'Wooden structure with mountain view' },
  { src: 'https://raw.githubusercontent.com/AlbbercaGit/videos/refs/heads/main/masiros/1.JPG', alt: 'Another mountain landscape' },
  { src: 'https://raw.githubusercontent.com/AlbbercaGit/videos/refs/heads/main/masiros/4.JPG', alt: 'Wooden structure in field with mountains' },
]

export default function Gallery() {
  const galleryRef = useRef(null)
  const isInView = useInView(galleryRef, { once: true, amount: 0.15 })

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
    <div ref={galleryRef} className="bg-[#E8E8E8] mx-auto px-4 py-8">
      <div className="relative flex justify-center items-center">
        <motion.div 
          className="w-full sm:w-[85%]"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Mobile layout */}
          <div className="grid grid-cols-2 gap-4 sm:hidden">
            <motion.div className="col-span-2 aspect-[16/9] relative overflow-hidden" variants={itemVariants}>
              <Image
                src={images[0].src}
                alt={images[0].alt}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300"
              />
            </motion.div>
            <motion.div className="aspect-square relative overflow-hidden" variants={itemVariants}>
              <Image
                src={images[1].src}
                alt={images[1].alt}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300"
              />
            </motion.div>
            <motion.div className="aspect-square relative overflow-hidden" variants={itemVariants}>
              <Image
                src={images[2].src}
                alt={images[2].alt}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300"
              />
            </motion.div>
            <motion.div className="col-span-2 aspect-[3/2] relative overflow-hidden" variants={itemVariants}>
              <Image
                src={images[3].src}
                alt={images[3].alt}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300"
              />
            </motion.div>
            <motion.div className="aspect-[3/4] relative overflow-hidden" variants={itemVariants}>
              <Image
                src={images[4].src}
                alt={images[4].alt}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300"
              />
            </motion.div>
            <motion.div className="aspect-[3/4] relative overflow-hidden" variants={itemVariants}>
              <Image
                src={images[5].src}
                alt={images[5].alt}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300"
              />
            </motion.div>
            <motion.div className="col-span-2 aspect-[16/9] relative overflow-hidden" variants={itemVariants}>
              <Image
                src={images[6].src}
                alt={images[6].alt}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300"
              />
            </motion.div>
          </div>

          {/* Desktop layout */}
          <div className="hidden sm:grid sm:grid-cols-3 gap-10">
            <motion.div className="flex flex-col justify-between space-y-4" variants={containerVariants}>
              {[0, 1, 2].map((index) => (
                <motion.div key={index} className="relative aspect-[4/3] overflow-hidden" variants={itemVariants}>
                  <Image
                    src={images[index].src}
                    alt={images[index].alt}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300"
                  />
                </motion.div>
              ))}
            </motion.div>
            <motion.div className="flex flex-col gap-10 justify-between space-y-4" variants={containerVariants}>
              {[3, 4].map((index) => (
                <motion.div key={index} className="relative aspect-[3/4] overflow-hidden" variants={itemVariants}>
                  <Image
                    src={images[index].src}
                    alt={images[index].alt}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300"
                  />
                </motion.div>
              ))}
            </motion.div>
            <motion.div className="flex flex-col justify-between space-y-4" variants={containerVariants}>
              {[5, 6, 7].map((index) => (
                <motion.div key={index} className="relative aspect-[4/3] overflow-hidden" variants={itemVariants}>
                  <Image
                    src={images[index].src}
                    alt={images[index].alt}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}