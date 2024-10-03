"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function StoreLocation() {
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
        className="max-w-[90%] mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-libre text-[#817A7A] mb-6 text-center"
          variants={itemVariants}
        >
          Nuestra ubicación
        </motion.h2>
        <motion.p
          className="text-[#817A7A] text-lg mb-8 text-center"
          variants={itemVariants}
        >
Visita nuestra <strong>tienda</strong>, donde encontrarás una amplia exposición de productos. <br></br>
Estamos estratégicamente ubicados para brindarte la mejor atención y ayudarte a elegir con comodidad lo que necesitas.
{" "}
        </motion.p>
        <motion.div
          className="w-full max-w-xl mx-auto aspect-square mb-8"
          variants={itemVariants}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3079.9803893147247!2d-0.3452086842763726!3d39.46889007948633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd60488c6c4b37ef%3A0x8864513e1119c497!2sMASIROS%20PARQUET!5e0!3m2!1sen!2sus!4v1633356788889!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </motion.div>
    </section>
  );
}
