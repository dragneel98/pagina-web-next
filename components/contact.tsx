"use client"

import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { Mail, Github, Linkedin, Download } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-8 sm:py-12 md:py-20 px-2 sm:px-4 bg-black/50">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <TypeAnimation
              sequence={["Contáctame", 1000]}
              wrapper="span"
              speed={50}
              repeat={0}
              cursor={false}
              className="text-green-400"
            />
          </h2>
          <div className="w-20 h-1 bg-green-400 mx-auto mt-2 mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? ¡Hablemos! Estoy disponible para trabajos freelance, colaboraciones o
            simplemente para charlar sobre tecnología.
          </p>
        </motion.div>

        <div className="grid grid-cols-[300px_1fr_1fr] gap-6 md:gap-8 items-start mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="flex items-center gap-4 p-4 bg-gray-900/50 border border-gray-800 hover:border-green-400/30 rounded-lg transition-all"
              whileHover={{ scale: 1.02 }}
            >
              <div className="bg-green-400/20 p-3 rounded-full">
                <Mail className="h-6 w-6 text-green-400" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-white">Email</h4>
                <a href="mailto:gonzalo.mina@hotmail.com.ar" className="text-xs sm:text-sm text-gray-300 hover:text-green-400 transition-colors break-all whitespace-normal">
                gonzalo.mina@hotmail.com.ar
                </a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="https://github.com/dragneel98"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-gray-900/50 border border-gray-800 hover:border-green-400/30 rounded-lg transition-all group"
              whileHover={{ scale: 1.02 }}
            >
              <div className="bg-green-400/20 p-3 rounded-full group-hover:bg-green-400/30 transition-colors">
                <Github className="h-6 w-6 text-green-400" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-white">GitHub</h4>
                <p className="text-gray-300">@dragneel98</p>
              </div>
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="https://www.linkedin.com/in/gonzalo-mina-frontend-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-gray-900/50 border border-gray-800 hover:border-green-400/30 rounded-lg transition-all group"
              whileHover={{ scale: 1.02 }}
            >
              <div className="bg-green-400/20 p-3 rounded-full group-hover:bg-green-400/30 transition-colors">
                <Linkedin className="h-6 w-6 text-green-400" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-white">LinkedIn</h4>
                <p className="text-gray-300">@gonzalo-mina</p>
              </div>
            </motion.a>
          </motion.div>
        </div>

        {/* Sección de CV que ocupa todo el ancho - Comentada temporalmente
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <div className="p-8 bg-green-400/10 border border-green-400/30 rounded-lg text-center">
            <h4 className="text-2xl font-bold mb-4 text-green-400">¿Listo para trabajar juntos?</h4>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Descarga mi CV para conocer más sobre mi experiencia, proyectos y habilidades técnicas. Estoy disponible
              para proyectos freelance, colaboraciones y oportunidades de trabajo.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-black font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 text-lg"
            >
              <Download size={20} />
              <span>Descargar CV</span>
            </a>
          </div>
        </motion.div>
        */}
      </div>
    </section>
  )
}
