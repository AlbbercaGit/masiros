"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function AboutSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.25 });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { clipPath: "inset(0 100% 0 0)" },
    visible: {
      clipPath: "inset(0 0% 0 0)",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section ref={sectionRef} className="bg-[#E8E8E8] py-16 px-4">
      <motion.div
        className="max-w-[75%] mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div className="w-[90%]" variants={containerVariants}>
            <motion.h2
              className="text-4xl md:text-5xl font-libre text-[#817A7A] mb-6"
              variants={itemVariants}
            >
              Más sobre
              <br />
              nuestra marca
            </motion.h2>
            <motion.p
              className="text-[#817A7A] text-lg mb-8"
              variants={itemVariants}
            >
              Somos una <strong>empresa</strong> que selecciona cuidadosamente las <strong>marcas</strong> con las
              que trabajamos, siempre buscando la más <strong>alta calidad</strong> técnica y de
              diseño. Nuestra <strong>experiencia</strong> y el <strong>equipo de profesionales</strong> con el
              que contamos nos permiten garantizar una <strong>instalación perfecta</strong> y
              ofrecer una <strong>total garantía</strong> en todos nuestros servicios.
            </motion.p>
            {/* <Button variant="secondary" className="bg-[#333333] text-white hover:bg-[#4a4a4a]">
              Leer más
            </Button> */}
          </motion.div>
          <motion.div variants={itemVariants}>
            <Image
              src="https://raw.githubusercontent.com/AlbbercaGit/videos/refs/heads/main/masiros/tienda-transformed.webp"
              alt="Office supplies on a white background"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div className="order-2 md:order-1" variants={itemVariants}>
            <Image
              src="https://raw.githubusercontent.com/AlbbercaGit/videos/refs/heads/main/masiros/tienda2-transformed.webp"
              alt="Artistic image with geometric shapes"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </motion.div>
          <motion.div
            className="order-1 md:order-2"
            variants={containerVariants}
          >
            <motion.h3
              className="text-4xl md:text-5xl font-serif text-[#817A7A] mb-6"
              variants={itemVariants}
            >
              Nuestra filosofía
            </motion.h3>
            <motion.p
              className="text-[#817A7A] mb-6"
              variants={itemVariants}
            ></motion.p>
            <motion.p className="text-[#817A7A] text-lg" variants={itemVariants}>
              En <strong>Masiros Parquet</strong>, nuestra filosofía se basa en ofrecer <strong>productos
              de primera calidad</strong> y un <strong>servicio</strong> que supera las expectativas de
              nuestros clientes. Disponemos de una amplia <strong>tienda de exposición </strong>
              donde podrás encontrar las <strong>mejores marcas</strong>, comparar todos nuestros
              productos y elegir el que mejor se adapte a tus necesidades.
              Creemos en la <strong>transparencia</strong>, la <strong>autenticidad</strong> y el <strong>compromiso</strong> para
              conectar genuinamente con cada cliente.
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}