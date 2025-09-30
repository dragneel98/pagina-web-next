"use client"

import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { Code2, Compass, Lightbulb, Rocket, Smartphone } from 'lucide-react'
import MatrixRain from './MatrixRain'
import Image from "next/image"

export default function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
      }
    }
  };
  const features = [
    {
      icon: <Code2 className="w-6 h-6 text-green-400" />,
      title: 'Desarrollo Frontend',
      description: 'Creo interfaces modernas y responsivas usando las últimas tecnologías web.'
    },
    {
      icon: <Compass className="w-6 h-6 text-green-400" />,
      title: 'Diseño UI/UX',
      description: 'Diseño experiencias de usuario intuitivas y atractivas que destacan y son fáciles de usar.'
    },
    {
      icon: <Smartphone className="w-6 h-6 text-green-400" />,
      title: 'Desarrollo Multiplataforma',
      description: 'Creo aplicaciones que funcionan perfectamente en cualquier dispositivo y sistema operativo.'
    },
    {
      icon: <Rocket className="w-6 h-6 text-green-400" />,
      title: 'Optimización',
      description: 'Aseguro que todas mis aplicaciones sean rápidas, accesibles y escalables.'
    }
  ];
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <TypeAnimation
              sequence={["Sobre Mí", 1000]}
              wrapper="span"
              speed={50}
              repeat={0}
              cursor={false}
              className="text-green-400"
            />
          </h2>
          <div className="w-20 h-1 bg-green-400 mx-auto mt-2 mb-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="w-full h-80 md:h-96 relative rounded-lg overflow-hidden border-2 border-green-400/30">
              <div className="absolute inset-0">
                <Image
                  src="/imagen_perfil_3.jpg"
                  alt="Desarrollador Frontend"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <MatrixRain containerClassName="absolute inset-0 mix-blend-screen" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 text-green-400">¿Quién soy?</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Soy gonzalo mina un desarrollador frontend apasionado por crear experiencias web interactivas y atractivas. Me
              especializo en construir interfaces de usuario modernas y responsivas utilizando las últimas tecnologías
              web.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Con más de <span className="text-green-400 font-semibold">2 años de experiencia</span>, he trabajado en
              diversos proyectos que van desde sitios web sencillos hasta aplicaciones web complejas. Mi enfoque se
              centra en la optimización del rendimiento, la accesibilidad y la experiencia del usuario.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                <span className="text-gray-300">React / Next.js</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                <span className="text-gray-300">TypeScript</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                <span className="text-gray-300">Tailwind CSS</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                <span className="text-gray-300">Framer Motion</span>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-block bg-transparent hover:bg-green-500/10 border border-green-500 text-green-400 hover:text-green-300 font-bold py-2 px-6 rounded-full transition-all transform hover:scale-105"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Hablemos
            </a>
          </motion.div>
        </div>

        {/* Features Section */}
        <div className="mt-24 max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-12 text-green-400">Mis Servicios</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white dark:bg-gray-800 p-6 shadow-lg group hover:shadow-xl transition-all duration-300 h-full flex flex-col rounded-xl"
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-green-50 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-100 dark:group-hover:bg-green-800/50 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed flex-grow">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
