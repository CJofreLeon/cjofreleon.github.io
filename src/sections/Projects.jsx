import { useState } from "react";
import { motion } from "framer-motion";
import ProjectModal from "../components/ProjectModal";
import "./Sections.css";


export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "ERG LAB",
      context: "Memoria de Título · 2024–2025",
      shortDescription: "Plataforma para análisis de señales ERG.",
      description:
        "Plataforma web para análisis de señales de electrorretinografía, permitiendo detectar Alzheimer de forma temprana. Arquitectura modular con FastAPI, React y Docker.",
      stack: ["FastAPI", "React", "Docker", "PostgreSQL", "Python", "Vite", "Material-UI", "Plotly.js", "PyTest", "SciPy", "Pandas", "Neurokit2", "NumPy", "PyWavelets", "AntroPy"],
      logo: "/images/erg-lab/logo.png",
      images: [
        "/images/erg-lab/inicio.png",
        "/images/erg-lab/excel.png",
        "/images/erg-lab/info.png",
        "/images/erg-lab/individual.png",
        "/images/erg-lab/grupal.png",
        "/images/erg-lab/interactivo.png",
      ],
      demo: "/images/erg-lab/demo.mp4",
      repo: "https://github.com/CJofreLeon/ERG-LAB",
      features: [
        "Autenticación de Usuarios: Sistema seguro de registro e inicio de sesión.",
        "Gestión de Pacientes: Visualización de la información de los pacientes procesados.",
        "Carga de Datos Simplificada: Carga masiva de datos de pruebas mediante archivos Excel.",
        "Análisis Individual: Cálculos de entropía y complejidad para señales de un paciente específico.",
        "Análisis Grupal: Comparación y análisis de datos entre múltiples pacientes.",
        "Visualización Interactiva: Gráficos dinámicos (potencia vs. frecuencia, histogramas) para interpretar los resultados.",
        "Arquitectura Escalable: Construida sobre microservicios para garantizar la modularidad y el rendimiento.",
      ]

    },
    {
      title: "AquaPlants",
      context: "Práctica Profesional · 2024",
      shortDescription: "App móvil empresarial para gestión de plantas.",
      description:
        "Aplicación móvil empresarial para la gestión de plantas y fertilizantes. La app busca conectar usuarios con la empresa, permitiéndoles comunicarse directamente con la compañía, unificando la experiencia de usuario.",
      stack: ["Flask", "Capacitor", "GitHub Actions", "React", "MySQL", "Figma", "Selenium", "JMeter", "TypeScript"],
      logo: "/images/aquaplants/logo.png",
      images: [
        "/images/aquaplants/ayuda.png",
        "/images/aquaplants/compra.png",
        "/images/aquaplants/recarga.png",
        "/images/aquaplants/usuario.png",
        "/images/aquaplants/info.png"
      ],
      demo: "/images/aquaplants/aquaplants.mp4",
      repo: "https://github.com/usuario/aquaplants-private",
      features: [
        "Solicitud de productos y fertilizantes",
        "Tracking de torres de plantas",
        "Comunicación directa usuario-empresa",
        "Flujos adaptados a móvil con Capacitor"
      ]

    },
  
  ];

  return (
    <section id="projects" className="section projects">
      <div className="section-container">
        <h2 className="section-title">Proyectos</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="project-image-container">
                {project.logo ? (
                  <img
                    src={project.logo}
                    alt={`${project.title} logo`}
                    className="project-logo"
                  />
                ) : (
                  <div className="project-image-placeholder">
                    <span>{project.title}</span>
                  </div>
                )}
              </div>

              <h3>{project.title}</h3>
              <p className="context">{project.context}</p>
              <p>{project.shortDescription}</p>

              <div className="stack">
                {project.stack.slice(0, 3).map((tech) => (
                  <span key={tech} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>

              <button onClick={() => setSelectedProject(project)}>
                Ver más
              </button>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}
