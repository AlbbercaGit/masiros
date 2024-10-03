'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useInView, useAnimation } from 'framer-motion'

export default function ProductSection() {
  const backgroundTextRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.25 })
  const controls = useAnimation()
  const [containerWidth, setContainerWidth] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const updateContainerWidth = () => {
      if (backgroundTextRef.current) {
        setContainerWidth(backgroundTextRef.current.scrollWidth / 2)
      }
    }

    updateContainerWidth()
    window.addEventListener('resize', updateContainerWidth)

    if (isInView) {
      controls.start("visible")
    }

    return () => window.removeEventListener('resize', updateContainerWidth)
  }, [isInView, controls]);

  const contentVariants = {
    hidden: { clipPath: 'inset(0 100% 0 0)' },
    visible: { 
      clipPath: 'inset(0 0% 0 0)',
      transition: { 
        duration: 1,
        ease: 'easeInOut',
      }
    }
  }

  const backgroundTextVariants = {
    hidden: { clipPath: 'inset(0 100% 0 0)' },
    visible: { 
      clipPath: 'inset(0 0% 0 0)',
      transition: { 
        duration: 1.5,
        ease: 'easeInOut',
      }
    }
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

  return (
    <section 
      ref={sectionRef} 
      className="relative overflow-hidden py-24 bg-[#E8E8E8]"
    >
      <motion.div
        className="absolute inset-0 bg-[#342E2E] z-0"
        initial="initial"
        animate={isHovered ? "hover" : "initial"}
        variants={clipPathVariants}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
      {/* Animated background text */}
      <motion.div 
        ref={backgroundTextRef}
        className="absolute top-[-25%] left-0 h-full flex items-center whitespace-nowrap"
        style={{ width: 'max-content' }}
        variants={backgroundTextVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.div 
          className="flex"
          animate={{ 
            x: [`0px`, `-${containerWidth}px`]
          }}
          transition={{ 
            x: { 
              repeat: Infinity,
              repeatType: "loop",
              duration: 15,
              ease: "linear"
            },
          }}
          style={{ width: `${containerWidth * 2}px` }}
        >
          <span className="inline-block font-libre text-[10vw] text-[#817A7A]">
          Distribuidor Exclusivo&nbsp;
          </span>
          <span className="inline-block font-libre text-[10vw] text-[#817A7A]">
          Distribuidor Exclusivo&nbsp;
          </span>
        </motion.div>
      </motion.div>

      {/* Content container */}
      <motion.div 
        className="relative z-10 max-w-[75%] mx-auto px-4 flex flex-col lg:flex-row items-center justify-evenly"
        variants={contentVariants}
        initial="hidden"
        animate={controls}
      >
        {/* Image */}
        <div className="lg:w-1/3 mb-8 lg:mb-0">
          <Image
            src="https://raw.githubusercontent.com/AlbbercaGit/videos/refs/heads/main/masiros/4.JPG"
            alt="Modern sculptural chair"
            width={550}
            height={400}
            className="shadow-lg"
          />
        </div>

        {/* Text content */}
        <div className="lg:w-1/3 lg:pl-12 text-left">
          <h2 className={`text-4xl font-serif mb-4 transition-colors duration-300 ${
            isHovered ? 'text-white' : 'text-[#333333]'
          }`}>Distribuidor Exclusivo</h2>
          <p className={`mb-6 transition-colors duration-300 ${
            isHovered ? 'text-gray-300' : 'text-[#666666]'
          }`}>
MASIROS PARQUET es el único distribuidor oficial de Quick Step en Valencia. Ofrecemos productos exclusivos que no encontrarás en ningún otro lugar. Confía en la marca líder en suelos."          </p>
          <div className="flex items-center ">
            <motion.button
              className={` py-3 px-8 text-sm relative overflow-hidden bg-transparent border transition-colors duration-300 ${
                isHovered ? 'text-white border-white' : 'text-[#333333] border-[#333333]'
              }`}
              style={{
                borderTopLeftRadius: '20px',
                borderBottomRightRadius: '20px',
              }}
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              transition={{ duration: 0.3 }}
            >
              <motion.span 
                className="relative z-20 mix-blend-difference"
                initial={{ color: '#333333' }}
                animate={{ color: isHovered ? 'white' : '#333333' }}
                transition={{ duration: 0.3 }}
              >
                Ver todo
              </motion.span>
              <motion.div
                className={`absolute inset-0 z-10 transition-colors duration-300 ${
                  isHovered ? 'bg-white' : 'bg-[#333333]'
                }`}
                style={{
                  borderTopLeftRadius: '20px',
                  borderBottomRightRadius: '20px',
                }}
                variants={clipPathVariants}
                initial="initial"
                animate={isHovered ? "hover" : "initial"}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </motion.button>
            <div className="relative w-40 h-20 ml-4">
              <Image
                src="https://raw.githubusercontent.com/AlbbercaGit/videos/refs/heads/main/logos/1.jpg"
                alt="Decorative image"
                layout="fill"
                objectFit="contain"
                className=""
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}