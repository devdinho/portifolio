import { useEffect, useState, useRef } from 'react'
import Tempus from '@studio-freight/tempus'
import Lenis from 'lenis'
import AOS from 'aos'
import 'aos/dist/aos.css'
import roles from './constants/roles'
import Skills from './components/Skills'
import WorkExperience from './components/WorkExperience'

type Particle = {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  cyan: boolean
}

function App() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)
  const typingTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Particle[] = []
    for (let i = 0; i < 120; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.8 + 0.2,
        speedX: Math.random() * 2 - 1,
        speedY: Math.random() * 2 - 1,
        cyan: Math.random() < 0.18,
      })
    }

    function animate() {
      if (!ctx) return

      // Background
      ctx.fillStyle = '#000E1C'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Radial glow centred in the hero area
      const cx = canvas.width / 2
      const cy = canvas.height * 0.48
      const r = Math.min(canvas.width, canvas.height) * 0.42

      const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, r)
      glow.addColorStop(0,   'rgba(79, 195, 247, 0.09)')
      glow.addColorStop(0.5, 'rgba(79, 195, 247, 0.04)')
      glow.addColorStop(1,   'rgba(0, 0, 0, 0)')
      ctx.fillStyle = glow
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Particles
      for (const p of particles) {
        p.x += p.speedX
        p.y += p.speedY

        if (p.x > canvas.width)  p.x = 0
        if (p.x < 0)             p.x = canvas.width
        if (p.y > canvas.height) p.y = 0
        if (p.y < 0)             p.y = canvas.height

        ctx.fillStyle = p.cyan
          ? 'rgba(79, 195, 247, 0.65)'
          : 'rgba(255, 255, 255, 0.45)'

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const entry = Tempus.add(animate)

    const handleResize = () => {
      if (!canvasRef.current) return
      canvasRef.current.width = window.innerWidth
      canvasRef.current.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
      Tempus.remove(entry)
    }
  }, [])

  useEffect(() => {
    const lenis = new Lenis()
    const entry = Tempus.add((time: number) => lenis.raf(time))
    return () => {
      Tempus.remove(entry)
      lenis.destroy()
    }
  }, [])

  useEffect(() => {
    AOS.init({ duration: 700, once: true, offset: 80 })
  }, [])

  useEffect(() => {
    const currentRole = roles[roleIndex]
    if (typing) {
      if (displayed.length < currentRole.length) {
        typingTimeout.current = setTimeout(() => {
          setDisplayed(currentRole.slice(0, displayed.length + 1))
        }, 60)
      } else {
        typingTimeout.current = setTimeout(() => setTyping(false), 1200)
      }
    } else {
      if (displayed.length > 0) {
        typingTimeout.current = setTimeout(() => {
          setDisplayed(currentRole.slice(0, displayed.length - 1))
        }, 30)
      } else {
        setTyping(true)
        setRoleIndex((prev) => (prev + 1) % roles.length)
      }
    }
    return () => {
      if (typingTimeout.current) clearTimeout(typingTimeout.current)
    }
  }, [displayed, typing, roleIndex])

  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      <canvas
        ref={canvasRef}
        style={{ position: 'fixed', inset: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}
      />
      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Hero */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100dvh',
            textAlign: 'center',
            position: 'relative',
          }}
        >
          <h2 className="title">Anderson Freitas</h2>
          <div className="subtitle">
            {displayed}
            <span className="typing-cursor">|</span>
          </div>
          <p className="hero-tagline">
            Construo plataformas de IA que escalam.
          </p>
          <span className="hero-location">Palmas, TO</span>
          <div className="scroll-indicator">
            <span>scroll</span>
            <span className="scroll-arrow">↓</span>
          </div>
        </div>

        <Skills />
        <WorkExperience />
      </div>
    </div>
  )
}

export default App
