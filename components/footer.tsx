"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Heart } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 px-4 border-t border-gray-800">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left mb-6 md:mb-0"
          >
            <Link href="/" className="text-2xl font-bold text-green-400">
              &lt;Dev/&gt;
            </Link>
            <p className="text-gray-400 mt-2">Desarrollador Frontend creando experiencias web únicas</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex gap-4"
          >
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 hover:bg-green-400/20 border border-gray-700 hover:border-green-400/30 p-2 rounded-full transition-all transform hover:scale-110"
            >
              <Github className="h-5 w-5 text-gray-300 hover:text-green-400" />
              <span className="sr-only">GitHub</span>
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 hover:bg-green-400/20 border border-gray-700 hover:border-green-400/30 p-2 rounded-full transition-all transform hover:scale-110"
            >
              <Linkedin className="h-5 w-5 text-gray-300 hover:text-green-400" />
              <span className="sr-only">LinkedIn</span>
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 hover:bg-green-400/20 border border-gray-700 hover:border-green-400/30 p-2 rounded-full transition-all transform hover:scale-110"
            >
              <Twitter className="h-5 w-5 text-gray-300 hover:text-green-400" />
              <span className="sr-only">Twitter</span>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="border-t border-gray-800 mt-8 pt-8 text-center"
        >
          <p className="text-gray-400 flex items-center justify-center gap-1">
            <span className="inline-flex items-center">
              <span>Hecho con</span>
              <Heart className="h-4 w-4 text-green-400 mx-1 animate-pulse" />
              <span>y código</span>
            </span>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
