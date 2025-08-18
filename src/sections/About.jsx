import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaUserGraduate, FaHeartbeat, FaBrain, FaCogs, FaLightbulb, FaDatabase, FaGlobeAmericas } from "react-icons/fa";

import "./Sections.css";

const steps = [
   {
    id: 1,
    title: "Formación académica",
    text: "Ingeniería de Ejecución en Computación e Informática - Universidad de Santiago de Chile",
  icon: <FaUserGraduate size={60} color="var(--icon-color-project)"  />
  },
  {
    id: 2,
    title: "Un poco de la vida...",
    text: "Desde pequeña tuve afinidad con los computadores y la tecnología. Me motivó saber que la informática podía mezclarse con cualquier área, ya sea biología, medicina o física, y usarse para transformar el mundo según nuestros valores e ideales.",
  icon: <FaHeartbeat size={60} color="var(--icon-color-project)"  />
  },
  {
    id: 3,
    title: "La magia de los datos",
    text: "A lo largo de la carrera descubrí que los datos son la clave para comprender el mundo con objetividad. Nos permiten observar, modelar y mejorar realidades complejas con claridad y propósito.",
  icon: <FaBrain size={60} color="var(--icon-color-project)"  />
  },
  {
    id: 4,
    title: "Un punto de inflexión",
    text: "Gracias a mi trabajo de título apliqué la Ingeniería de Software e Ingeniería de Datos para automatizar procesos en una investigación médica sobre el Alzheimer. Ahí confirmé que la tecnología puede hacer el bien.",
  icon: <FaCogs size={60} color="var(--icon-color-project)"  />
  },
  {
    id: 5,
    title: "Cómo trabajo",
    text: "Soy curiosa, comunicativa y resolutiva. Me gusta descomponer problemas, construir soluciones con buenas bases y trabajar con equipos humanos donde las ideas fluyen con respeto y colaboración.",
  icon: <FaLightbulb size={60} color="var(--icon-color-project)"  />
  },
  {
    id: 6,
    title: "Mi enfoque",
    text: "Creo que sin una base sólida los análisis no sobreviven. Por eso me interesa toda la arquitectura de datos: limpieza, orden, estructuración. Trabajo principalmente con Python y sus librerías.",
  icon: <FaDatabase size={60} color="var(--icon-color-project)"  />
  },
  {
    id: 7,
    title: "Lo que me mueve",
    text: "Apunto a ser Ingeniera de Datos porque creo en la tecnología con propósito. Quiero que lo que construya sirva para mejorar la vida de las personas y generar un cambio positivo en el mundo.",
  icon: <FaGlobeAmericas size={60} color="var(--icon-color-project)" />
  }
];
export default function About() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % steps.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + steps.length) % steps.length);

  return (
    <section id="about" className="section about-slider">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="section-container"
      >
       <h2 className="section-title" style={{textAlign: "left"}}>Sobre Mí</h2>
      <div className="slider-container">
   
        <AnimatePresence mode="wait">
          <motion.div
            key={steps[current].id}
            className={`slide ${steps[current].id === 7 ? "final-quote" : ""}`}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="icon-container">{steps[current].icon}</div>
              
            <h3>{steps[current].title}</h3>
            <p>{steps[current].text}</p>
          </motion.div>

        </AnimatePresence>

        <div className="controls">
         <motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  onClick={prevSlide}
  aria-label="Slide anterior"
>
  ← Anterior
</motion.button>

          <span>{current + 1} / {steps.length}</span>
          <motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  onClick={nextSlide}
  aria-label="Slide siguiente"
>
Siguiente →
</motion.button>

     
        </div>
      </div>
    </motion.div>
    </section>
  );
}