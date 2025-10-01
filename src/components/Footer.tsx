import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Heart, Code, Phone, MapPin } from "lucide-react";

const Footer: React.FC = () => {
  const socialLinks = [
    {
      name: "GITHUB",
      icon: Github,
      url: "https://github.com/AntonioRu92",
      color: "neo-btn-green",
    },
    {
      name: "LINKEDIN",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/antonio-russo-full-stack-web-developer-junior/",
      color: "neo-btn-yellow",
    },
    {
      name: "WEBSITE",
      icon: Twitter,
      url: "https://antonio-russo.it",
      color: "neo-btn-pink",
    },
    {
      name: "EMAIL",
      icon: Mail,
      url: "mailto:antonio.russo26@icloud.com",
      color: "neo-btn-cyan",
    },
  ];

  const quickLinks = [
    { name: "HOME", href: "/" },
    { name: "PORTFOLIO", href: "/portfolio" },
    { name: "CONTATTI", href: "/contacts" },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-900 to-purple-900 border-t-8 border-yellow-400 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border-4 border-white transform rotate-45"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-yellow-400 transform -rotate-12"></div>
        <div className="absolute bottom-20 left-32 w-12 h-12 bg-pink-500 transform rotate-45"></div>
        <div className="absolute bottom-32 right-10 w-24 h-24 border-4 border-cyan-400 transform rotate-12"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="neo-card bg-white p-6 transform -rotate-2 inline-block mb-6">
              <h3 className="neo-title text-3xl text-black">ANTONIO RUSSO</h3>
            </div>
            <div className="neo-card neo-card-green p-4 mb-6">
              <p className="text-black font-bold">
                Sviluppatore Front-End con due anni di esperienza nello sviluppo Web e Mobile. Trasformo idee in
                interfacce moderne, performanti e intuitive con solide competenze full-stack.
              </p>
            </div>
            <div className="neo-card neo-card-yellow p-4 mb-6">
              <div className="space-y-2">
                <div className="flex items-center text-black font-bold">
                  <Mail className="mr-2" size={16} />
                  <span className="neo-mono text-sm">antonio.russo26@icloud.com</span>
                </div>
                <div className="flex items-center text-black font-bold">
                  <Phone className="mr-2" size={16} />
                  <span className="neo-mono text-sm">+39 327 596 3025</span>
                </div>
                <div className="flex items-center text-black font-bold">
                  <MapPin className="mr-2" size={16} />
                  <span className="neo-mono text-sm">Foggia, Italy</span>
                </div>
              </div>
            </div>
            <div className="neo-card bg-white p-4">
              <div className="flex items-center text-black font-bold">
                <Code className="mr-2" size={20} />
                <span className="neo-mono">Made with</span>
                <Heart className="mx-2 text-red-500" size={16} fill="currentColor" />
                <span className="neo-mono">and React</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="neo-card neo-card-pink p-6 transform rotate-1">
              <h4 className="neo-title text-2xl text-black mb-6">NAVIGAZIONE</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="neo-btn bg-black text-white border-black inline-block hover:neo-shake"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <h5 className="neo-title text-xl text-black mb-4">SKILLS PRINCIPALI</h5>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-black text-white px-2 py-1 neo-mono text-sm border-2 border-black">React</span>
                  <span className="bg-black text-white px-2 py-1 neo-mono text-sm border-2 border-black">Laravel</span>
                  <span className="bg-black text-white px-2 py-1 neo-mono text-sm border-2 border-black">
                    TypeScript
                  </span>
                  <span className="bg-black text-white px-2 py-1 neo-mono text-sm border-2 border-black">Node.js</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Social Links & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="neo-card neo-card-cyan p-6 transform -rotate-1">
              <h4 className="neo-title text-2xl text-black mb-6">CONNECT WITH ME</h4>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`neo-btn ${social.color} flex items-center justify-center text-sm hover:neo-shake`}
                  >
                    <social.icon size={16} className="mr-2" />
                    {social.name}
                  </a>
                ))}
              </div>

              <div className="neo-card bg-white p-4">
                <h5 className="neo-title text-lg text-black mb-2">DISPONIBILE PER</h5>
                <ul className="text-black font-bold text-sm space-y-1">
                  <li>• Progetti freelance</li>
                  <li>• Consulenze tecniche</li>
                  <li>• Collaborazioni</li>
                  <li>• Formazione</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t-4 border-white"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="neo-card bg-white p-3 transform rotate-1 mb-4 md:mb-0">
              <p className="neo-mono text-black font-bold text-sm">© {currentYear} ANTONIO - ALL RIGHTS RESERVED</p>
            </div>

            <div className="flex flex-wrap gap-2">
              <div className="neo-card neo-card-yellow p-2">
                <span className="neo-mono text-black font-bold text-xs">REACT 19</span>
              </div>
              <div className="neo-card neo-card-pink p-2">
                <span className="neo-mono text-black font-bold text-xs">TYPESCRIPT</span>
              </div>
              <div className="neo-card neo-card-green p-2">
                <span className="neo-mono text-black font-bold text-xs">TAILWIND CSS</span>
              </div>
              <div className="neo-card neo-card-cyan p-2">
                <span className="neo-mono text-black font-bold text-xs">VITE</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Action */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        viewport={{ once: true }}
        className="absolute bottom-8 right-8"
      >
        <a
          href="/contacts"
          className="neo-btn neo-btn-green text-lg transform rotate-12 hover:rotate-0 transition-transform duration-300"
        >
          COLLABORIAMO!
        </a>
      </motion.div>
    </footer>
  );
};

export default Footer;
