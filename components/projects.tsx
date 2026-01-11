"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { ExternalLink, Github, ArrowRight } from "lucide-react"
import Image from "next/image"

const projectsData = [
  {
    id: 1,
    title: "Retro-byte-ui",
    description: "Una libreria de componentes hecha con react y typescript que incluye storybook para la documentacion y github actions para el auto deploy, desplegada en vercel y con un paquete publicado en npm",
    image: "/adcard.jpg",
    demoLink: "https://retro-byte-ui.vercel.app/?path=/docs/components-accordion--docs",
    codeLink: "https://github.com/dragneel98/retro-byte-ui",
    tags: ["typescript", "html", "css", "javascript", "react"]
  },
  {
    id: 2,
    title: "MELI-zomm",
    description: "Me interese por la funcionalidad del zoom de mercado libre y decidi replicarlo",
    image: "/MELI.png",
    demoLink: "https://dragneel98.github.io/MELI-zoom/",
    codeLink: "https://github.com/dragneel98/MELI-zoom",
    tags: ["typescript", "html", "css", "javascript", "react"]
  },
  {
    id: 3,
    title: "Traslate GPT",
    description: "Un traductor utilizando la API de ChatGPT para hacer las traducciones. También cuenta con un botón para invertir el idioma y permite reproducir la traducción para que veas la pronunciación.",
    image: "/traslate.jpg",
    demoLink: "",
    codeLink: "https://github.com/dragneel98/type-script-traslate",
    tags: ["typescript", "html", "css", "javascript", "react"]
  },
  {
    id: 4,
    title: "Ecommerce",
    description: "Un ecommerce que incluye un sistema de carrito de compras intuitivo y eficiente, así como herramientas de filtrado y busqueda de productos para facilitar la selección de artículos",
    image: "/angularshop.jpg",
    demoLink: "https://dragneel98.github.io/ecomerce-angular/",
    codeLink: "https://github.com/dragneel98/ecomerce-angular",
    tags: ["html", "css", "javascript", "angular"]
  },
  {
    id: 5,
    title: "TuAutoInforme",
    description: "Un sistema para generar informes sobre los historiales de los vehículos",
    image: "/auto.png",
    demoLink: "https://tuautoinforme.com/",
    // codeLink: "https://github.com/dragneel98/ecommerce-react",
    tags: ["html", "css", "javascript", "react", "node.js", "typescript"]
  },
]

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [visibleProjects, setVisibleProjects] = useState(4)

  const handleLoadMore = () => {
    setVisibleProjects((prev) => prev + 2)
  }


  return (
    <section id="projects" className="py-20 px-4 bg-black/50">
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
              sequence={["Mis Proyectos", 1000]}
              wrapper="span"
              speed={50}
              repeat={0}
              cursor={false}
              className="text-green-400"
            />
          </h2>
          <div className="w-20 h-1 bg-green-400 mx-auto mt-2 mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Una selección de mis trabajos más recientes y destacados. Cada proyecto representa un desafío único que he
            abordado con creatividad y habilidades técnicas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.slice(0, visibleProjects).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 rounded-lg overflow-hidden border border-gray-800 hover:border-green-400/30 transition-all"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-in-out"
                  style={{
                    transform: hoveredProject === project.id ? "scale(1.05)" : "scale(1)",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/30"></div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-green-400/20 text-green-300 px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.demoLink}
                      className="flex items-center gap-1 text-sm text-white hover:text-green-400 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} />
                      <span>Demo</span>
                    </a>
                    <a
                      href={project.codeLink}
                      className="flex items-center gap-1 text-sm text-white hover:text-green-400 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={16} />
                      <span>Código</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Forced true condition for debugging */}
        {visibleProjects < projectsData.length && (
          <div className="text-center mt-12">
            <button
              onClick={handleLoadMore}
              className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors"
            >
              <span>Ver más proyectos</span>
              <ArrowRight size={16} />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
