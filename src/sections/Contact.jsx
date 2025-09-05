import { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaFileDownload, FaEnvelope, FaGithub, FaMapMarkerAlt } from "react-icons/fa";
import "./Sections.css";

export default function Contact() {
  const [formSent, setFormSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    fetch("https://formsubmit.co/catalina.jofre.leon.ing@gmail.com", {
      method: "POST",
      body: formData,
    })
      .then(() => setFormSent(true))
      .catch((err) => console.error(err));
  };

  return (
    <section id="contact" className="section contact">
      <div className="section-container contact-grid">
        {/* Título y mensaje */}
        <motion.div
          className="contact-intro"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Contacto</h2>
          <p>
            ¡Muchas gracias por interesarte en mi trabajo!  
            Puedes comunicarte conmigo a través del formulario o mediante mis redes profesionales 👩‍💻.
          </p>
        </motion.div>

        {/* Formulario */}
        {!formSent ? (
          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <input type="hidden" name="_captcha" value="false" />

            <label htmlFor="name">Nombre</label>
            <input type="text" id="name" name="name" placeholder="Tu nombre" required />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="tucorreo@email.com" required />

            <label htmlFor="message">Mensaje</label>
            <textarea id="message" name="message" rows="5" placeholder="Escribe tu mensaje..." required></textarea>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Enviar mensaje
            </motion.button>
          </motion.form>
        ) : (
          <motion.div
            className="thank-you-message"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3>¡Muchas gracias!</h3>
            <p>Te responderé lo antes posible ✨</p>
          </motion.div>
        )}

        {/* Información lateral */}
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="info-item">
            <FaMapMarkerAlt className="contact-icon" /> Santiago de Chile
          </div>
          <a href="https://www.linkedin.com/in/catalina-jofré-león-9296b0272" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="contact-icon" /> LinkedIn
          </a>
          <a href="https://github.com/CJofreLeon" target="_blank" rel="noopener noreferrer">
            <FaGithub className="contact-icon" /> GitHub
          </a>
          <a href="/cv/cv-catalina-jofre-leon.pdf" download>
            <FaFileDownload className="contact-icon" /> Descargar CV
          </a>
          <a href="mailto:catalina.jofre.leon.ing@gmail.com">
            <FaEnvelope className="contact-icon" /> Email directo
          </a>
        </motion.div>
      </div>
    </section>
  );
}
