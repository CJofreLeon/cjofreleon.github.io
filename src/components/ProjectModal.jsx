// ProjectModal.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaGithub } from "react-icons/fa";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import "./modal.css";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  const images = project.images || [];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <AnimatePresence>
      <motion.div
  className="modal-overlay"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  onClick={onClose} // <- cerrar al click en el overlay
>

       <motion.div
  className="modal-content"
  initial={{ y: "-100vh" }}
  animate={{ y: 0 }}
  exit={{ y: "-100vh" }}
  transition={{ type: "spring", stiffness: 80 }}
  onClick={(e) => e.stopPropagation()} // <- evita que el click dentro cierre el modal
>

          {/* Botón cerrar */}
          <button className="modal-close" onClick={onClose}>
            <FaTimes />
          </button>
          <hr className="line" />
          {/* Título */}
          <h1 className="modal-title">{project.title}</h1>
          <hr className="line" />
          {/* Slider */}
          <div className="modal-slider">
            {images.length > 0 && (
              <>
                <img
                  src={images[currentIndex]}
                  alt={`${project.title} screenshot ${currentIndex + 1}`}
                  className="modal-image"
                />
                {images.length > 1 && (
                  <>
                    <button className="slider-btn prev" onClick={prevImage}>
                      <IoChevronBack />
                    </button>
                    <button className="slider-btn next" onClick={nextImage}>
                      <IoChevronForward />
                    </button>
                  </>
                )}
              </>
            )}
          </div>
          <hr className="line" />
          {/* Tipo de proyecto */}
          <div className="modal-type">{project.context}</div>

          {/* Video demo */}
          {project.demoVideo && (
            <div className="modal-video">
              <video controls width="100%" src={project.demoVideo} />
            </div>
          )}

          <div className="modal-inner-content">
            {/* Descripción */}
            <p className="modal-description">{project.description}</p>
            {/* Features / Características */}
            {project.features && project.features.length > 0 && (
              <div className="modal-features">
                <h3>Características:</h3>
                <ul>
                  {project.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Stack */}
            <div className="modal-stack">
              <h3>Tecnologías:</h3>
              <ul>
                {project.stack?.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>

            {/* Links */}
            <div className="modal-links">
              {/* Botón de GitHub */}
              {project.repo && (
                <a
                  href={project.repo.includes("private") ? undefined : project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`modal-btn ${project.repo.includes("private") ? "disabled" : ""}`}
                  onClick={(e) => project.repo.includes("private") && e.preventDefault()}
                >
                  <FaGithub style={{ marginRight: "8px" }} />
                  {project.repo.includes("private") ? "Proyecto Privado" : "Ver en GitHub"}
                </a>
              )}

              {/* Botón de Demo externo */}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-btn"
                >
                  Ver Demo
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
