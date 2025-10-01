import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const Portfolio: React.FC = () => {
  const { t } = useTranslation();

  const projects = [
    {
      id: 1,
      title: "TASK MANAGER FULLSTACK",
      description:
        "Applicazione completa per la gestione di task con API Rails e frontend React/TypeScript. Include Docker, PostgreSQL, test automatici e deployment ottimizzato.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      technologies: ["Ruby on Rails", "React", "TypeScript", "PostgreSQL", "Docker"],
      github: "https://github.com/AntonioRu92/TaskManagerAPI",
      cardColor: "neo-card-yellow",
      transform: "rotate-2",
    },
    {
      id: 2,
      title: "THE ARTISANS CORNER",
      description:
        "Piattaforma e-commerce Laravel dedicata all'arte e all'artigianato. Supporta categorie come pittura, scultura, fotografia, design e architettura.",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=400&fit=crop",
      technologies: ["Laravel", "PHP", "Blade", "MySQL", "CSS"],
      github: "https://github.com/AntonioRu92/TheArtisansCorner",
      cardColor: "neo-card-pink",
      transform: "-rotate-1",
    },
    {
      id: 3,
      title: "REACT TASK MANAGER",
      description:
        "Task manager frontend sviluppato con React.js e Bootstrap. Interfaccia utente moderna e responsive per la gestione efficiente dei task.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop",
      technologies: ["React", "JavaScript", "Bootstrap", "CSS", "Vite"],
      github: "https://github.com/AntonioRu92/React-Task-Manager",
      cardColor: "neo-card-cyan",
      transform: "rotate-1",
    },
    {
      id: 4,
      title: "PROJECT BLACK",
      description:
        "Template professionale elegante con design minimalista. Realizzato con HTML puro, CSS avanzato e JavaScript, con font Orbitron e Jura.",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=400&fit=crop",
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      github: "https://github.com/AntonioRu92/Project-Black",
      cardColor: "neo-card-green",
      transform: "-rotate-2",
    },
    {
      id: 5,
      title: "SKETCH.JS",
      description:
        "Replica digitale di un etch-a-sketch che permette di disegnare su una griglia interattiva. Progetto che dimostra manipolazione DOM e eventi JavaScript.",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=400&fit=crop",
      technologies: ["JavaScript", "HTML5", "CSS3", "DOM Manipulation"],
      github: "https://github.com/AntonioRu92/Sketch.JS",
      cardColor: "neo-card-yellow",
      transform: "rotate-3",
    },
    {
      id: 6,
      title: "CALCULATOR.JS",
      description:
        "Calcolatore a schermo completo sviluppato con JavaScript vanilla. Interfaccia intuitiva e funzionalità matematiche complete con design responsive.",
      image: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?w=600&h=400&fit=crop",
      technologies: ["JavaScript", "HTML5", "CSS3", "Mathematical Logic"],
      github: "https://github.com/AntonioRu92/Calculator.JS",
      cardColor: "neo-card-pink",
      transform: "-rotate-1",
    },
  ];

  const categories = [
    { id: "all", name: "TUTTI", color: "neo-btn-green" },
    { id: "fullstack", name: "FULLSTACK", color: "neo-btn-yellow" },
    { id: "frontend", name: "FRONTEND", color: "neo-btn-pink" },
    { id: "ecommerce", name: "E-COMMERCE", color: "neo-btn-cyan" },
  ];

  const [activeCategory, setActiveCategory] = React.useState("all");

  return (
    <div className="pt-24 pb-20 neo-section-green">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="neo-card bg-white p-8 inline-block transform -rotate-2 mb-8">
            <h1 className="neo-title text-6xl text-black">{t("portfolio.title")}</h1>
          </div>
          <div className="neo-card neo-card-yellow p-6 max-w-4xl mx-auto">
            <p className="text-xl text-black font-bold">
              Una selezione dei miei progetti più significativi. Ogni progetto è stato sviluppato con passione e
              attenzione ai dettagli.
            </p>
          </div>
        </motion.div>

        {/* Filter Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`neo-btn ${category.color} ${
                activeCategory === category.id ? "neo-btn-active" : ""
              } transform ${index % 2 === 0 ? "rotate-1" : "-rotate-1"}`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`neo-card ${project.cardColor} p-0 overflow-hidden transform ${project.transform} hover:neo-shake`}
            >
              {/* Project Image */}
              <div className="h-48 bg-black border-b-4 border-black overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="neo-title text-2xl text-black mb-3">{project.title}</h3>
                <p className="text-black font-bold mb-4 leading-relaxed">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-black text-white px-3 py-1 neo-mono font-bold text-sm border-2 border-black"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className="neo-btn bg-black text-white border-black w-full flex items-center justify-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} className="mr-2" />
                    VEDI CODICE
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="neo-card neo-card-pink p-8 inline-block transform rotate-2">
            <h2 className="neo-title text-4xl text-black mb-4">HAI UN PROGETTO IN MENTE?</h2>
            <p className="text-black font-bold mb-6 text-lg">Trasformiamo le tue idee in realtà digitali</p>
            <a href="/contacts" className="neo-btn neo-btn-green inline-flex items-center text-lg">
              PARLIAMONE INSIEME
              <ExternalLink size={20} className="ml-2" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;
