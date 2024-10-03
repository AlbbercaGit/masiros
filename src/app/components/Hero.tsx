"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";

const clipVariants = {
  hidden: { clipPath: "inset(0 100% 0 0)" },
  visible: {
    clipPath: "inset(0 0% 0 0)",
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const menuVariants = {
  closed: {
    opacity: 0,
    y: 20,
    transition: {
      y: { stiffness: 1000 },
    },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
};

const containerVariants = {
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
};

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };

    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);

    return () => window.removeEventListener("resize", updateHeaderHeight);
  }, []);

  return (
    <div className="bg-[#CFCDC7] min-h-screen font-libre flex flex-col">
      <motion.header
        ref={headerRef}
        className="py-6 flex justify-between items-center w-full max-w-[75%] mx-auto relative z-20"
        initial="hidden"
        animate="visible"
        variants={clipVariants}
      >
        <h1 className="md:text-3xl text-2xl text-[#333333]">Parquet Masiros</h1>
        <nav className="relative">
          <button
            className="md:hidden flex flex-col space-y-1"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Abrir menú"
          >
            <span className="w-6 h-0.5 bg-[#333333]"></span>
            <span className="w-6 h-0.5 bg-[#333333]"></span>
          </button>
          <ul className="hidden md:flex font-almarai space-x-6 text-lg text-[#333333]">
            <li className="relative">
              <Link href="/acerca-de" className="hover:text-[#333333] nav-link">
                Nosotros
              </Link>
            </li>
            <li className="relative">
              <Link href="/contacto" className="hover:text-[#333333] nav-link">
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
      </motion.header>
      <div
        className="flex-grow flex items-center w-full max-w-[75%] mx-auto relative z-10"
        style={{ height: `calc(100vh - ${headerHeight}px)` }}
      >
        <main className="flex flex-col justify-evenly lg:flex-row items-center md:justify-between w-full h-full">
          <motion.div
            className="lg:w-1/2  lg:mb-0"
            initial="hidden"
            animate="visible"
            variants={clipVariants}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-5xl lg:text-8xl text-[#333333] mb-6">
              Parquet
              <br />
              <span className="mt-2 block">Masiros</span>
            </h2>
            <p className="text-[#817A7A]  lg:text-2xl max-w-md font-almarai">
              Expertos en parquet calidad, experiencia y servicio garantizado
            </p>
          </motion.div>
          <motion.div
            className="lg:w-1/2 h-[60%] md:h-[500px] lg:h-4/5"
            initial="hidden"
            animate="visible"
            variants={clipVariants}
            transition={{ delay: 0.4 }}
          >
            <Image
              src="https://raw.githubusercontent.com/AlbbercaGit/videos/d3aac00fe12f366cf07989c19248d1e2afec8965/masiros/2escalado.jpeg"
              alt="Parquet flooring with geometric shapes"
              width={750}
              height={750}
              className="h-full w-full object-cover"
            />
          </motion.div>
        </main>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-[#CFCDC7]/90 backdrop-blur-sm flex items-center justify-center md:hidden z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.button
              className="absolute top-6 right-6 text-[#333333]"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Cerrar menú"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={24} />
            </motion.button>
            <motion.ul
              className="text-center space-y-8"
              variants={containerVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
             {["Nosotros", "Contacto"].map((item) => (
               <motion.li key={item} variants={menuVariants}>
                 <Link
                   href={item === "Nosotros" ? "/acerca-de" : "/contacto"}
                   className="text-[#333333] text-3xl"
                   onClick={() => setIsMenuOpen(false)}
                 >
                   {item}
                 </Link>
               </motion.li>
             ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
      <style jsx global>{`
        .nav-link {
          position: relative;
          text-decoration: none;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 2px;
          bottom: -4px;
          left: 0;
          background-color: #333333;
          transform: scaleX(0);
          transform-origin: bottom right;
          transition: transform 0.3s ease-out;
        }
        .nav-link:hover::after {
          transform: scaleX(1);
          transform-origin: bottom left;
        }
      `}</style>
    </div>
  );
}