import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();

  // Force Italian language on mobile
  useEffect(() => {
    const checkMobile = () => {
      const isMobile = window.innerWidth < 768; // md breakpoint
      if (isMobile && i18n.language !== "it") {
        i18n.changeLanguage("it");
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, [i18n]);

  const toggleLanguage = () => {
    const newLang = i18n.language === "it" ? "en" : "it";
    i18n.changeLanguage(newLang);
  };

  const navItems = [
    { path: "/", label: t("nav.home") },
    { path: "/portfolio", label: t("nav.portfolio") },
    { path: "/blog", label: t("nav.blog") },
    { path: "/contacts", label: t("nav.contacts") },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.header initial={{ y: -100 }} animate={{ y: 0 }} className="fixed top-0 left-0 right-0 z-50 neo-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="neo-title text-4xl text-black hover:text-yellow-400 transition-colors duration-200">
            ANTONIO
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-6 py-3 neo-mono text-sm border-4 border-black transition-all duration-200 ${
                  isActive(item.path) ? "bg-yellow-400 text-black" : "bg-white text-black hover:bg-pink-400"
                }`}
              >
                {item.label.toUpperCase()}
              </Link>
            ))}
          </nav>

          {/* Language Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="hidden md:flex neo-btn neo-btn-cyan px-4 py-2 text-sm items-center space-x-2"
            >
              <Globe size={18} />
              <span>{i18n.language.toUpperCase()}</span>
            </button>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden neo-btn neo-btn-pink p-3">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gradient-to-r from-cyan-400 to-green-400 border-t-6 border-black"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-4 px-6 neo-mono text-lg border-4 border-black transition-all duration-200 ${
                    isActive(item.path) ? "bg-yellow-400 text-black" : "bg-white text-black hover:bg-green-400"
                  }`}
                >
                  {item.label.toUpperCase()}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
