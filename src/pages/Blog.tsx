import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, Tag, Eye } from "lucide-react";
import { useTranslation } from "react-i18next";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: number;
  category: string;
  views: number;
  cardColor: string;
  transform: string;
}

const Blog: React.FC = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState("all");

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "REACT 19: SERVER COMPONENTS CHE CAMBIANO TUTTO",
      excerpt:
        "Scopri le rivoluzionarie Server Components di React 19, Actions automatiche e il nuovo Compiler che ottimizza il codice in automatico. Performance senza precedenti!",
      date: "2025-09-28",
      readTime: 12,
      category: "frontend",
      views: 1247,
      cardColor: "neo-card-yellow",
      transform: "rotate-1",
    },
    {
      id: 2,
      title: "LARAVEL 11: TYPE SAFETY E PERFORMANCE EXTREME",
      excerpt:
        "Laravel 11 introduce supporto nativo per PHP 8.3, cache ottimizzata e sicurezza avanzata. Il framework backend più potente di sempre!",
      date: "2025-09-20",
      readTime: 10,
      category: "backend",
      views: 892,
      cardColor: "neo-card-pink",
      transform: "-rotate-1",
    },
    {
      id: 3,
      title: "NEO-BRUTALISM: IL DESIGN CHE DOMINA IL 2025",
      excerpt:
        "Analisi completa del movimento neo-brutalist: colori shock, tipografie bold e perché sta conquistando ogni sito web moderno.",
      date: "2025-09-15",
      readTime: 8,
      category: "design",
      views: 2156,
      cardColor: "neo-card-cyan",
      transform: "rotate-2",
    },
  ];

  const categories = [
    { key: "all", label: t("blog.categories.all"), color: "neo-card-green" },
    { key: "frontend", label: t("blog.categories.frontend"), color: "neo-card-yellow" },
    { key: "backend", label: t("blog.categories.backend"), color: "neo-card-pink" },
    { key: "design", label: t("blog.categories.design"), color: "neo-card-cyan" },
  ];

  const filteredPosts =
    selectedCategory === "all" ? blogPosts : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-50 to-cyan-100 pt-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400 transform rotate-45 border-4 border-black"></div>
        <div className="absolute top-32 right-20 w-24 h-24 bg-pink-500 transform -rotate-12 border-4 border-black"></div>
        <div className="absolute bottom-40 left-32 w-28 h-28 bg-cyan-400 transform rotate-12 border-4 border-black"></div>
        <div className="absolute bottom-20 right-40 w-20 h-20 bg-green-400 transform rotate-45 border-4 border-black"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-orange-400 transform -rotate-45 border-4 border-black"></div>
        <div className="absolute top-1/3 right-1/3 w-36 h-36 bg-purple-400 transform rotate-12 border-4 border-black"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
        {/* Header Neo-Brutalist */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="neo-card neo-card-yellow p-8 inline-block mb-8 transform rotate-1">
            <h1 className="neo-title text-6xl text-black mb-4">{t("blog.title")}</h1>
          </div>
          <div className="neo-card bg-white p-6 max-w-4xl mx-auto transform -rotate-1">
            <p className="neo-mono text-xl text-black font-bold">{t("blog.subtitle")}</p>
          </div>
        </motion.div>

        {/* Category Filter Neo-Brutalist */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-6 mb-20"
        >
          {categories.map((category, index) => (
            <button
              key={category.key}
              onClick={() => setSelectedCategory(category.key)}
              className={`neo-card ${selectedCategory === category.key ? category.color : "bg-white"} 
                         p-4 transform ${index % 2 === 0 ? "rotate-1" : "-rotate-1"} 
                         hover:neo-shake transition-all duration-200`}
            >
              <div className="flex items-center">
                <Tag className="w-5 h-5 mr-2" />
                <span className="neo-mono font-bold text-black">{category.label}</span>
              </div>
            </button>
          ))}
        </motion.div>

        {/* Blog Posts Grid Neo-Brutalist */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`neo-card ${post.cardColor} p-8 transform ${post.transform} 
                         hover:neo-shake group cursor-pointer`}
            >
              {/* Category Badge */}
              <div className="flex items-center justify-between mb-6">
                <span className="neo-card bg-black text-white px-3 py-1 text-xs neo-mono font-bold uppercase">
                  {t(`blog.categories.${post.category}`)}
                </span>
                <div className="flex items-center text-black text-sm neo-mono font-bold">
                  <Eye className="w-4 h-4 mr-1" />
                  {post.views}
                </div>
              </div>

              {/* Article Info */}
              <div className="flex items-center text-black text-sm mb-4 neo-mono font-bold">
                <Calendar className="w-4 h-4 mr-2" />
                <span className="mr-4">{new Date(post.date).toLocaleDateString("it-IT")}</span>
                <Clock className="w-4 h-4 mr-2" />
                <span>{post.readTime} min</span>
              </div>

              {/* Title */}
              <h3 className="neo-title text-2xl text-black mb-4 leading-tight">{post.title}</h3>

              {/* Excerpt */}
              <p className="text-black mb-6 leading-relaxed font-medium">{post.excerpt}</p>

              {/* Read More Button */}
              <Link
                to={`/blog/${post.id}`}
                className="neo-btn bg-black text-white hover:bg-white hover:text-black 
                          inline-flex items-center group-hover:neo-shake"
              >
                <span className="neo-mono font-bold text-sm uppercase">{t("blog.readMore")}</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
            <div className="neo-card neo-card-red p-8 inline-block transform rotate-1">
              <h3 className="neo-title text-3xl text-black mb-4">NESSUN ARTICOLO TROVATO</h3>
              <p className="neo-mono text-black font-bold">Prova a selezionare una categoria diversa</p>
            </div>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-20"
        >
          <div className="neo-card neo-card-green p-8 inline-block transform -rotate-1">
            <h2 className="neo-title text-3xl text-black mb-4">VUOI RIMANERE AGGIORNATO?</h2>
            <p className="neo-mono text-black font-bold mb-6">Seguimi sui social per non perdere i nuovi articoli!</p>
            <Link to="/contacts" className="neo-btn bg-black text-white hover:bg-white hover:text-black">
              <span className="neo-mono font-bold text-sm uppercase">CONTATTAMI</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;
