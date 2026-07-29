"use client"
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Contact from "@/components/contact"
import MatrixBackground from "@/components/matrix-background"
import ParticleScroll from "@/components/ui/ParticleScroll"

export default function Home() {
  return (
    <main className="
    relative 
    min-h-screen bg-black text-gray-200 overflow-hidden
    ">
      <MatrixBackground />
      <ParticleScroll className="relative h-screen">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </ParticleScroll>
    </main>
  )
}
