'use client'

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const clipVariants = {
  hidden: { clipPath: 'inset(0 100% 0 0)' },
  visible: { 
    clipPath: 'inset(0 0% 0 0)',
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export default function Component() {
  return (
    <div className="bg-[#CFCDC7] min-h-screen font-libre flex flex-col">
      <motion.header 
        className="py-6 flex justify-between items-center w-full max-w-[75%] mx-auto"
        initial="hidden"
        animate="visible"
        variants={clipVariants}
      >
        <h1 className="md:text-3xl text-2xl text-[#333333]">Parquet Masiros</h1>
        <nav>
          <ul className="flex font-almarai space-x-6 text-base md:text-lg text-[#333333]">
            <li>
              <Link href="/acerca-de">Nosotros</Link>
            </li>
            <li>
              <Link href="/contacto">Contacto</Link>
            </li>
          </ul>
        </nav>
      </motion.header>
      <div className="flex flex-grow w-full max-w-[75%] mx-auto items-center">
        <main className="flex flex-col lg:flex-row items-center justify-between w-full">
          <motion.div 
            className="lg:w-1/2 mb-12 lg:mb-0"
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
            <p className="text-[##817A7A] mb-8 lg:text-2xl max-w-md font-almarai">
              Expertos en parquet calidad, experiencia y servicio garantizado
            </p>
          </motion.div>
          <motion.div 
            className="lg:w-1/2 md:h-[800px] h-[350px]"
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
              className="h-full object-cover"
            />
          </motion.div>
        </main>
      </div>
    </div>
  );
}