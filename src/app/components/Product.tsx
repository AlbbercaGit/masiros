'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

export default function ProductSection() {
  const backgroundTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const textElement = backgroundTextRef.current;

    if (textElement) {
      const { offsetWidth } = textElement;
      const duration = offsetWidth / 100; // Ajusta la velocidad en función del ancho total
      textElement.style.setProperty('--scroll-duration', `${duration}s`);
    }
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#E8E8E8] py-24">
      {/* Animated background text */}
      <div 
        ref={backgroundTextRef}
        className="absolute top-[-25%] left-0 h-full flex items-center whitespace-nowrap animate-scroll"
        style={{ width: 'max-content' }} // Esto hace que el contenedor se ajuste al contenido exacto
      >
        {/* Repetimos el contenido */}
        <span className="inline-block font-libre text-[10vw] text-[#817A7A]">
          Producto Destacado Producto Destacado&nbsp;
        </span>
        <span className="inline-block font-libre text-[10vw] text-[#817A7A]">
          Producto Destacado Producto Destacado&nbsp;
        </span>
        <span className="inline-block font-libre text-[10vw] text-[#817A7A]">
          Producto Destacado Producto Destacado&nbsp;
        </span>
      </div>

      {/* Content container */}
      <div className="relative z-10 max-w-[75%] mx-auto px-4 flex flex-col lg:flex-row items-center justify-evenly">
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
          <h2 className="text-4xl font-serif mb-4 text-[#333333]">Producto Destacado</h2>
          <p className="text-[#666666] mb-6">
            Usa este espacio para hablar sobre tu tienda y tus productos. ¿Cómo y dónde se hacen? ¿Qué los hace únicos?
          </p>
          <button className="bg-[#333333] text-white px-8 py-3 rounded-full hover:bg-[#4a4a4a] transition-colors">
            Ver todo
          </button>
        </div>
      </div>
    </section>
  )
}
