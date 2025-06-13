"use client"

import { useEffect, useRef } from "react"

export default function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Configurar el canvas para que ocupe toda la pantalla
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Caracteres para el efecto Matrix
    const matrix = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}".split("")

    // Configuración de columnas
    const fontSize = 14
    const columns = Math.floor(canvas.width / fontSize)

    // Array para seguir la posición Y de cada columna
    const drops: number[] = []

    // Inicializar todas las gotas en la posición Y=1
    for (let i = 0; i < columns; i++) {
      drops[i] = 1
    }

    // Función de dibujo
    const draw = () => {
      // Fondo negro semi-transparente para crear el efecto de desvanecimiento
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Color verde para los caracteres
      ctx.fillStyle = "#0f0" // Verde brillante
      ctx.font = `${fontSize}px monospace`

      // Bucle para cada gota
      for (let i = 0; i < drops.length; i++) {
        // Carácter aleatorio para imprimir
        const text = matrix[Math.floor(Math.random() * matrix.length)]

        // Coordenadas x e y para el texto
        const x = i * fontSize
        const y = drops[i] * fontSize

        // Dibujar el carácter
        ctx.fillText(text, x, y)

        // Enviar la gota de nuevo al principio después de que haya caído lo suficiente
        // Añadir una condición aleatoria para que las gotas tengan diferentes longitudes
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }

        // Incrementar la posición Y
        drops[i]++
      }
    }

    // Ejecutar la animación
    const interval = setInterval(draw, 35)

    return () => {
      clearInterval(interval)
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full opacity-40" style={{ zIndex: 0 }} />
}
