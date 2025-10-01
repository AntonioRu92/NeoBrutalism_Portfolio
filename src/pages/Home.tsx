import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import { Code2, Smartphone, Globe, Coffee } from "lucide-react";

const Home: React.FC = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Code2,
      title: t("services.web_development.title"),
      description: t("services.web_development.description"),
      color: "neo-card-yellow",
    },
    {
      icon: Smartphone,
      title: t("services.ecommerce.title"),
      description: t("services.ecommerce.description"),
      color: "neo-card-pink",
    },
    {
      icon: Globe,
      title: t("services.consulting.title"),
      description: t("services.consulting.description"),
      color: "neo-card-cyan",
    },
  ];

  const stats = [
    { number: "2+", label: t("about.experience") },
    { number: "20+", label: t("about.projects") },
    { number: "15+", label: t("about.clients") },
  ];

  const technologies = [
    "React",
    "Angular",
    "Vue.js",
    "TypeScript",
    "Java/Spring",
    "Laravel",
    "Docker",
    "Flutter",
    "PostgreSQL",
    "MySQL",
    "Git",
    "Figma",
  ];

  return (
    <div className="pt-20 bg-gradient-to-br from-neo-yellow via-neo-pink to-neo-cyan relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-40 left-20 w-20 h-20 bg-green-400 transform rotate-45 border-4 border-black"></div>
        <div className="absolute top-80 right-40 w-16 h-16 bg-purple-500 transform -rotate-12 border-4 border-black"></div>
        <div className="absolute bottom-60 left-1/3 w-24 h-24 bg-orange-400 transform rotate-12 border-4 border-black"></div>
        <div className="absolute bottom-40 right-20 w-18 h-18 bg-blue-400 transform -rotate-45 border-4 border-black"></div>
        <div className="absolute top-1/3 left-1/2 w-14 h-14 bg-red-400 transform rotate-45 border-4 border-black"></div>

        {/* Additional geometric shapes */}
        <div className="absolute top-60 left-10 w-32 h-4 bg-yellow-400 transform rotate-12 border-2 border-black"></div>
        <div className="absolute bottom-80 right-10 w-28 h-4 bg-pink-500 transform -rotate-12 border-2 border-black"></div>
        <div className="absolute top-1/2 right-1/3 w-6 h-6 bg-cyan-400 rounded-full border-2 border-black"></div>
        <div className="absolute bottom-1/3 left-1/4 w-8 h-8 bg-lime-400 rounded-full border-2 border-black"></div>
      </div>

      {/* Content with relative positioning */}
      <div className="relative z-10">
        <Hero />

        {/* About Section */}
        <section id="about" className="py-20 neo-section-yellow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="neo-card p-8 inline-block transform -rotate-1 mb-8">
                <h2 className="neo-title text-5xl text-black mb-6">{t("about.title")}</h2>
              </div>
              <div className="neo-card neo-card-cyan p-8 max-w-4xl mx-auto">
                <p className="text-xl text-black leading-relaxed font-bold">{t("about.description")}</p>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="neo-card neo-card-green p-8 inline-block transform rotate-2">
                    <div className="neo-title text-4xl text-black mb-2">{stat.number}</div>
                    <div className="neo-mono text-black font-bold">{stat.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="neo-card neo-card-pink p-6 inline-block mb-8 transform rotate-1">
                <h3 className="neo-title text-3xl text-black">TECNOLOGIE CHE USO</h3>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="neo-card neo-card-yellow px-6 py-3 text-black neo-mono font-bold hover:neo-shake cursor-pointer"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 neo-section-cyan">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="neo-card neo-card-green p-8 inline-block transform rotate-2 mb-8">
                <h2 className="neo-title text-5xl text-black">{t("services.title")}</h2>
              </div>
              <div className="neo-card neo-card-pink p-6 max-w-3xl mx-auto">
                <p className="text-xl text-black font-bold">Offro soluzioni complete per la tua presenza digitale</p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`neo-card ${service.color} p-8 transform ${index % 2 === 0 ? "rotate-1" : "-rotate-1"}`}
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-black border-4 border-black mb-6">
                    <service.icon size={32} className="text-white" />
                  </div>
                  <h3 className="neo-title text-2xl text-black mb-4">{service.title}</h3>
                  <p className="text-black font-bold leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 neo-section-pink">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="neo-card neo-card-orange p-12 transform -rotate-2 inline-block mb-8">
                <h2 className="neo-title text-4xl text-black mb-6">PRONTO A INIZIARE IL TUO PROGETTO?</h2>
                <p className="text-xl text-black mb-8 max-w-2xl mx-auto font-bold">
                  Contattami per una consulenza gratuita e scopri come posso aiutarti a raggiungere i tuoi obiettivi
                  digitali.
                </p>
                <a href="/contacts" className="neo-btn neo-btn-green inline-flex items-center text-lg">
                  INIZIAMO A LAVORARE INSIEME
                  <Coffee size={20} className="ml-2" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
