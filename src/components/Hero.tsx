import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowDown, Code, Palette, Rocket } from "lucide-react";

const Hero: React.FC = () => {
  const { t } = useTranslation();

  const scrollToContent = () => {
    const element = document.getElementById("about");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen bg-white flex items-center justify-center relative overflow-hidden border-b-8 border-black">
      {/* Neo-Brutalism Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-yellow-400 border-4 border-black neo-bounce"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-pink-400 border-4 border-black transform rotate-12"></div>
        <div className="absolute bottom-40 left-40 w-40 h-40 bg-cyan-400 border-4 border-black transform -rotate-12"></div>
        <div className="absolute bottom-20 right-40 w-28 h-28 bg-green-400 border-4 border-black"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="neo-card neo-card-yellow p-8 mb-8 inline-block">
            <h1 className="neo-title text-6xl md:text-8xl text-black mb-6">
              {t("hero.greeting")}{" "}
              <span className="bg-pink-400 px-4 py-2 border-4 border-black inline-block transform -rotate-2">
                {t("hero.name")}
              </span>
            </h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="neo-card neo-card-cyan p-6 inline-block transform rotate-1">
              <p className="neo-mono text-xl md:text-2xl text-black">{t("hero.title")}</p>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-black mb-12 max-w-3xl mx-auto bg-white border-4 border-black p-6 font-bold"
          >
            {t("hero.subtitle")}
          </motion.p>

          {/* Tech Icons with Neo-Brutalism Style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center space-x-8 mb-12"
          >
            <div className="neo-card neo-card-green p-4 text-black transform -rotate-3">
              <Code size={32} className="mb-2" />
              <span className="neo-mono text-sm font-bold block">DEV</span>
            </div>
            <div className="neo-card neo-card-pink p-4 text-black transform rotate-2">
              <Palette size={32} className="mb-2" />
              <span className="neo-mono text-sm font-bold block">DESIGN</span>
            </div>
            <div className="neo-card neo-card-yellow p-4 text-black transform -rotate-1">
              <Rocket size={32} className="mb-2" />
              <span className="neo-mono text-sm font-bold block">SPEED</span>
            </div>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            onClick={scrollToContent}
            className="neo-btn neo-btn-green inline-flex items-center text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t("hero.cta")}
            <ArrowDown size={20} className="ml-2 neo-bounce" />
          </motion.button>
        </motion.div>
      </div>

      {/* Neo-Brutalism Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="neo-card p-2 bg-black">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white bg-yellow-400 rounded-none flex justify-center"
          >
            <div className="w-1 h-2 bg-black mt-2"></div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
