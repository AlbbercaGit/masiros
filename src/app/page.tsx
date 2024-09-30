import Hero from "./components/Hero";
import Product from "./components/Product";
import Resenas from "./components/Reseñas";
import About from "./components/About";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import './globals.css'; // Importa tus estilos globales


export default function Home() {
  return (
    <div>
      <Hero />
      <Product />
      <Resenas />
      <About />
      <Contacto />
      <Footer />
    </div>
  );
}
