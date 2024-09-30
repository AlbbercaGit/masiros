import Image from 'next/image'

export default function ServicesSection() {
  const services = [
    {
      name: 'Servicio básico',
      price: '99 €',
      image: 'https://raw.githubusercontent.com/AlbbercaGit/videos/refs/heads/main/masiros/1.JPG',
      description: 'Describe los detalles importantes, tales como el precio, el valor, la duración del servicio y por qué es exclusivo. También puedes usar estas secciones para mostrar distintos valores clave de tus productos o servicios.'
    },
    {
      name: 'Servicio intermedio',
      price: '149 €',
      image: 'https://raw.githubusercontent.com/AlbbercaGit/videos/refs/heads/main/masiros/3.JPG',
      description: 'Describe los detalles importantes, tales como el precio, el valor, la duración del servicio y por qué es exclusivo. También puedes usar estas secciones para mostrar distintos valores clave de tus productos o servicios.'
    },
    {
      name: 'Servicio avanzado',
      price: '199 €',
      image: 'https://raw.githubusercontent.com/AlbbercaGit/videos/refs/heads/main/masiros/5.JPG',
      description: 'Describe los detalles importantes, tales como el precio, el valor, la duración del servicio y por qué es exclusivo. También puedes usar estas secciones para mostrar distintos valores clave de tus productos o servicios.'
    }
  ]

  return (
    <section className="bg-[#E8E8E8] py-16 px-4">
      <div className="max-w-[75%] mx-auto">
        <h2 className="text-4xl md:text-7xl font-serif text-[#817A7A] mb-12 ">Nuestros servicios</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col">
              <Image
                src={service.image}
                alt={service.name}
                width={600}
                height={400}
                className="w-full h-96 object-cover mb-4"
              />
<h3 className="text-3xl font-serif text-[#333333] mb-2">
  <span className="border-b border-b-[#333333] "> {service.name} </span>
</h3>
              <p className="text-xl font-extralight text-[#333333] mb-4">{service.price}</p>
              <p className="text-lg text-[#817A7A]">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}