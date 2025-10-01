import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Coffee, Zap, CheckCircle } from "lucide-react";

const Contacts: React.FC = () => {
  const { t } = useTranslation();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "EMAIL",
      value: "info@antonio.it",
      href: "mailto:info@antonio.it",
      color: "neo-card-yellow",
    },
    {
      icon: Phone,
      title: "TELEFONO",
      value: "+39 123 456 7890",
      href: "tel:+39123456789",
      color: "neo-card-pink",
    },
    {
      icon: MapPin,
      title: "LOCATION",
      value: "Foggia, Italy",
      href: "#",
      color: "neo-card-cyan",
    },
  ];

  return (
    <div className="pt-24 pb-20 neo-section-yellow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="neo-card bg-white p-8 inline-block transform -rotate-2 mb-8">
            <h1 className="neo-title text-6xl text-black">{t("contact.title")}</h1>
          </div>
          <div className="neo-card neo-card-green p-6 max-w-4xl mx-auto">
            <p className="text-xl text-black font-bold">
              Hai un'idea brillante? Parliamone! Sono sempre pronto per nuove sfide e collaborazioni interessanti.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="neo-card neo-card-pink p-8 transform rotate-1">
              {!isSubmitted ? (
                <>
                  <div className="flex items-center mb-6">
                    <div className="bg-black p-3 border-4 border-black mr-4">
                      <Send className="text-white" size={24} />
                    </div>
                    <h2 className="neo-title text-3xl text-black">SCRIVIMI UN MESSAGGIO</h2>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="neo-mono text-black font-bold mb-2 block">NOME *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-4 border-4 border-black bg-white text-black neo-mono font-bold focus:outline-none focus:bg-yellow-300 transition-colors"
                        placeholder="Il tuo nome"
                      />
                    </div>

                    <div>
                      <label className="neo-mono text-black font-bold mb-2 block">EMAIL *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-4 border-4 border-black bg-white text-black neo-mono font-bold focus:outline-none focus:bg-yellow-300 transition-colors"
                        placeholder="tua.email@esempio.com"
                      />
                    </div>

                    <div>
                      <label className="neo-mono text-black font-bold mb-2 block">MESSAGGIO *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full p-4 border-4 border-black bg-white text-black neo-mono font-bold focus:outline-none focus:bg-yellow-300 transition-colors resize-none"
                        placeholder="Raccontami del tuo progetto..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="neo-btn neo-btn-green w-full text-xl flex items-center justify-center"
                    >
                      <Zap size={24} className="mr-3" />
                      INVIA MESSAGGIO
                    </button>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="bg-black p-6 border-4 border-black inline-block mb-6">
                    <CheckCircle size={64} className="text-green-400" />
                  </div>
                  <h3 className="neo-title text-3xl text-black mb-4">MESSAGGIO INVIATO!</h3>
                  <p className="text-black font-bold text-lg">
                    Grazie per il tuo messaggio. Ti risponderò il prima possibile.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className={`neo-card ${info.color} p-6 transform ${index % 2 === 0 ? "rotate-2" : "-rotate-1"}`}
              >
                <div className="flex items-center">
                  <div className="bg-black p-4 border-4 border-black mr-6">
                    <info.icon className="text-white" size={32} />
                  </div>
                  <div>
                    <h3 className="neo-title text-2xl text-black mb-2">{info.title}</h3>
                    <p className="neo-mono text-black font-bold text-lg">
                      {info.href !== "#" ? (
                        <a href={info.href} className="hover:underline">
                          {info.value}
                        </a>
                      ) : (
                        info.value
                      )}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Additional Info */}
            <div className="neo-card bg-white p-8 transform rotate-1">
              <div className="flex items-center mb-4">
                <div className="bg-black p-3 border-4 border-black mr-4">
                  <Coffee className="text-white" size={24} />
                </div>
                <h3 className="neo-title text-2xl text-black">PERCHÉ SCEGLIERMI?</h3>
              </div>
              <ul className="space-y-3 text-black font-bold">
                <li className="flex items-start">
                  <span className="bg-black text-white px-2 py-1 neo-mono text-sm mr-3 mt-1">01</span>
                  <span>Risposta rapida entro 24 ore</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-black text-white px-2 py-1 neo-mono text-sm mr-3 mt-1">02</span>
                  <span>Consulenza gratuita iniziale</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-black text-white px-2 py-1 neo-mono text-sm mr-3 mt-1">03</span>
                  <span>Soluzioni su misura per te</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-black text-white px-2 py-1 neo-mono text-sm mr-3 mt-1">04</span>
                  <span>Supporto post-progetto</span>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div className="neo-card neo-card-green p-6 text-center transform -rotate-2">
              <h3 className="neo-title text-2xl text-black mb-4">SEGUIMI SUI SOCIAL</h3>
              <div className="flex flex-wrap justify-center gap-3">
                <a
                  href="https://github.com/AntonioRu92"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neo-btn bg-black text-white border-black"
                >
                  GITHUB
                </a>
                <a
                  href="https://www.linkedin.com/in/antonio-russo-full-stack-web-developer-junior/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neo-btn bg-white text-black border-black"
                >
                  LINKEDIN
                </a>
                <a
                  href="https://antonio-russo.it"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neo-btn bg-black text-white border-black"
                >
                  WEBSITE
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="neo-card neo-card-cyan p-8 inline-block transform rotate-1">
            <h2 className="neo-title text-4xl text-black mb-4">PRONTO A INIZIARE?</h2>
            <p className="text-black font-bold text-lg mb-6">Non aspettare, trasformiamo la tua idea in realtà!</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="mailto:info@antonio.it" className="neo-btn neo-btn-green">
                SCRIVIMI SUBITO
              </a>
              <a href="tel:+39123456789" className="neo-btn neo-btn-yellow">
                CHIAMAMI ORA
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contacts;
