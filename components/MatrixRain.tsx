'use client';

import { useEffect, useRef } from 'react';

interface MatrixRainProps {
  containerClassName?: string;
  canvasClassName?: string;
}

export default function MatrixRain({ 
  containerClassName = '',
  canvasClassName = '' 
}: MatrixRainProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Configuración
    const matrix = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン'.split('');
    const fontSize = 14;
    let columns = 0;
    const drops: number[] = [];
    let interval: NodeJS.Timeout;

    // Configuración inicial del canvas
    function setupCanvas() {
      if (!canvas || !ctx) return;
      
      // Obtener el tamaño del contenedor
      const container = canvas.parentElement;
      if (!container) return;
      
      // Ajustar el tamaño del canvas al contenedor
      const dpr = window.devicePixelRatio || 1;
      const rect = container.getBoundingClientRect();
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      
      // Configurar contexto
      ctx.globalCompositeOperation = 'source-over';
      ctx.globalAlpha = 1;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      
      // Inicializar gotas
      columns = Math.floor(rect.width / fontSize);
      drops.length = 0;
      for (let i = 0; i < columns; i++) {
        drops[i] = Math.random() * -100;
      }
    }

    // Función de dibujo
    function draw() {
      if (!canvas || !ctx) return;
      
      // Limpiar el canvas con transparencia
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Configuración del texto
      ctx.font = `bold ${fontSize}px monospace`;
      ctx.fillStyle = 'rgba(74, 222, 128, 0.8)';
      
      // Dibujar caracteres
      for (let i = 0; i < drops.length; i++) {
        const text = matrix[Math.floor(Math.random() * matrix.length)];
        const x = i * fontSize;
        const y = Math.floor(drops[i]) * fontSize;
        
        // Dibujar el carácter
        if (y > 0) {  // Solo dibujar si está dentro del área visible
          ctx.fillText(text, x, y);
        }
        
        // Reiniciar la gota cuando llega al final con cierta probabilidad
        if (y > canvas.height) {
          if (Math.random() > 0.95) {  // 5% de probabilidad de reiniciar
            drops[i] = 0;
          }
        } else {
          // Mover la gota hacia abajo con velocidad variable
          drops[i] += 0.5;
        }
      }
    }

    // Manejar redimensionamiento
    function handleResize() {
      setupCanvas();
    }

    // Inicializar
    setupCanvas();
    
    // Iniciar animación con requestAnimationFrame
    function animate() {
      draw();
      animationRef.current = requestAnimationFrame(animate);
    }
    
    // Iniciar la animación
    animationRef.current = requestAnimationFrame(animate);
    
    // Event listeners
    window.addEventListener('resize', handleResize);
    
    // Limpieza
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className={`absolute inset-0 ${containerClassName}`}>
      <canvas
        ref={canvasRef}
        className={`block w-full h-full ${canvasClassName}`}
        style={{
          backgroundColor: 'transparent',
          position: 'absolute',
          top: 0,
          left: 0,
          opacity: 0.8,
          mixBlendMode: 'screen'
        }}
      />
    </div>
  );
}
