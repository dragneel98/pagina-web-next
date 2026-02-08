"use client"

import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { ArrowDown } from "lucide-react"

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center px-4 pt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="text-white">Hola, soy </span>
          <span className="text-green-400">
            <TypeAnimation
              sequence={["Desarrollador Web", 2000, "Desarrollador Mobile", 2000, "Creador De Experiencias", 2000]}
              wrapper="span"
              speed={50}
              repeat={Number.POSITIVE_INFINITY}
            />
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-xl md:text-2xl text-gray-300 mb-8"
        >
          Creando experiencias web únicas con código y creatividad
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#projects"
            className="bg-green-500 hover:bg-green-600 text-black font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            Ver Proyectos
          </a>
          <a
            href="#contact"
            className="bg-transparent hover:bg-green-500/10 border border-green-500 text-green-400 hover:text-green-300 font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            Contáctame
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 2.5,
          duration: 1,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        className="absolute bottom-10"
      >
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault()
            document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })
          }}
          className="text-green-400 hover:text-green-300 transition-colors"
        >
          <ArrowDown size={32} />
        </a>
      </motion.div>
    </section>
  )
}
