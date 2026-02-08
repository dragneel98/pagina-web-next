"use client"

import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { Code2, Database } from "lucide-react"
import { TbBrandCSharp } from "react-icons/tb";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiFirebase,
  SiSupabase,
  SiJsonwebtokens,
  SiAngular,
  SiIonic,
  SiExpo,
  SiDotnet
} from "react-icons/si"
import { FaJava } from "react-icons/fa6";
import { Tally2Icon as TbApi, SmartphoneIcon as TbDeviceMobile } from "lucide-react"

const skillsData = [
  {
    category: "Frontend Development",
    icon: <Code2 className="h-8 w-8" />,
    description: "Creando interfaces modernas y responsivas",
    technologies: [
      { name: "HTML5", icon: <SiHtml5 className="h-6 w-6 text-orange-500" /> },
      { name: "CSS3", icon: <SiCss3 className="h-6 w-6 text-blue-500" /> },
      { name: "JavaScript", icon: <SiJavascript className="h-6 w-6 text-yellow-400" /> },
      { name: "TypeScript", icon: <SiTypescript className="h-6 w-6 text-blue-600" /> },
      { name: "React", icon: <SiReact className="h-6 w-6 text-cyan-400" /> },
      { name: "React Native", icon: <SiReact className="h-6 w-6 text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="h-6 w-6 text-white" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="h-6 w-6 text-cyan-400" /> },
      { name: "Framer Motion", icon: <SiFramer className="h-6 w-6 text-pink-500" /> },
      { name: "Responsive Design", icon: <TbDeviceMobile className="h-6 w-6 text-purple-400" /> },
      { name: "Angular", icon: <SiAngular className="h-6 w-6 text-red-500" /> },
      { name: "Ionic", icon: <SiIonic className="h-6 w-6 text-blue-500" /> },
      { name: "Expo", icon: <SiExpo className="h-6 w-6 text-gray-800" /> },
    ],
  },
  {
    category: "Backend & Bases de Datos",
    icon: <Database className="h-8 w-8" />,
    description: "Desarrollando APIs robustas y gestionando datos",
    technologies: [
      { name: "Node.js", icon: <SiNodedotjs className="h-6 w-6 text-green-600" /> },
      { name: "Express.js", icon: <SiExpress className="h-6 w-6 text-gray-400" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="h-6 w-6 text-blue-600" /> },
      { name: "Supabase", icon: <SiSupabase className="h-6 w-6 text-green-500" /> },
      { name: "REST APIs", icon: <TbApi className="h-6 w-6 text-blue-400" /> },
      { name: "JWT", icon: <SiJsonwebtokens className="h-6 w-6 text-purple-400" /> },
      { name: "Java", icon: <FaJava className="h-6 w-6 text-red-600" /> },
      { name: "C#", icon: <TbBrandCSharp className="h-6 w-6 text-blue-600" /> },
      { name: ".Net", icon: <SiDotnet className="h-6 w-6 text-blue-600" /> },
    ],
  },
]

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  const techVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="skills" className="py-20 px-4">
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
              sequence={["Mis Habilidades", 1000]}
              wrapper="span"
              speed={50}
              repeat={0}
              cursor={false}
              className="text-green-400"
            />
          </h2>
          <div className="w-20 h-1 bg-green-400 mx-auto mt-2 mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Dominio completo del stack de desarrollo web, desde interfaces de usuario hasta arquitecturas de backend.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-900/50 border border-gray-800 hover:border-green-400/30 rounded-xl p-8 transition-all"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="text-green-400 bg-green-400/20 p-3 rounded-full">{skill.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{skill.category}</h3>
                  <p className="text-gray-400">{skill.description}</p>
                </div>
              </div>

              <div
                //className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4"
                className="grid grid-cols-2 sm:grid-cols-4  gap-4"
              >
                {skill.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={techIndex}
                    variants={techVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: techIndex * 0.1 }}
                    className="flex flex-col items-center gap-3 p-4 bg-black/30 hover:bg-green-400/5 border border-gray-700 hover:border-green-400/30 rounded-lg transition-all group cursor-pointer"
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <div className="transition-transform group-hover:scale-110">{tech.icon}</div>
                    <span className="text-sm text-gray-300 group-hover:text-white transition-colors text-center font-medium">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="p-8 bg-green-400/10 border border-green-400/30 rounded-xl w-full">
            <h3 className="text-2xl font-bold mb-4 text-green-400">¿Buscas una tecnología específica?</h3>
            <p className="text-gray-300 mb-6 max-w-md mx-auto">
              Siempre estoy aprendiendo nuevas tecnologías. Si necesitas algo específico que no está listado, no dudes
              en preguntarme.
            </p>
            <a
              href="#contact"
              className="inline-block bg-green-500 hover:bg-green-600 text-black font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Hablemos
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
