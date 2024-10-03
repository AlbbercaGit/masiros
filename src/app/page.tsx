import Hero from "./components/Hero";
import Product from "./components/Product";
import Resenas from "./components/Reseñas";
import Opiniones from "./components/Opiniones";
import About from "./components/About";
import Contacto from "./components/Contacto";
import Galeria from "./components/Galeria";
import Footer from "./components/Footer";
import Marcas from "./components/Marcas";
import Mapa from "./components/Mapa";

import "./globals.css";

export default function Home() {
  return (
    <div>
      <Hero />
      <Product />
      <Opiniones />
      <Resenas />
      <About />
      <Galeria />
      <Contacto />
      <Marcas />
      <Mapa />
      <Footer />
    </div>
  );
}
