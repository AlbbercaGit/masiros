import Image from 'next/image'
import { Button } from "@/components/ui/button"

export default function AboutSection() {
  return (
    <section className="bg-[#E8E8E8] py-16 px-4">
      <div className="max-w-[75%] mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className='w-[90%]'>
            <h2 className="text-4xl md:text-5xl font-serif text-[#817A7A] mb-6">
              Más sobre<br />nuestra marca
            </h2>
            <p className="text-[#817A7A] text-lg mb-8">
              Cuenta quién eres, tus orígenes, tu proceso o lo que te inspira. Aprovecha tu
              creatividad. ¡Tú puedes! La manera en la que cuentas tu historia en línea puede
              marcar la diferencia.
            </p>
            {/* <Button variant="secondary" className="bg-[#333333] text-white hover:bg-[#4a4a4a]">
              Leer más
            </Button> */}
          </div>
          <div>
            <Image
              src="https://raw.githubusercontent.com/AlbbercaGit/videos/refs/heads/main/masiros/xd4.jpg"
              alt="Office supplies on a white background"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <Image
              src="https://raw.githubusercontent.com/AlbbercaGit/videos/refs/heads/main/masiros/xd5.jpg"
              alt="Artistic image with geometric shapes"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <h3 className="text-3xl font-serif text-[#817A7A] mb-6">Nuestra filosofía</h3>
            <p className="text-[#817A7A] mb-6">
              Aquí puedes expandir sobre la filosofía de tu marca, tus valores core, o cualquier
              información adicional que quieras compartir con tus clientes. Este espacio es ideal
              para profundizar en lo que hace única a tu marca.
            </p>
            <p className="text-[#817A7A]">
              Recuerda que la autenticidad y la transparencia son clave para conectar con tu
              audiencia. No temas mostrar la personalidad detrás de tu marca.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}