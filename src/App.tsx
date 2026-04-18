
import { useEffect, useState, useRef } from 'react'
import Tempus from '@studio-freight/tempus'
import { useThemeStore } from './storeTheme'
import roles from './constants/roles'
import WorkExperience from './components/WorkExperience'


function App() {
  const { mode, toggle } = useThemeStore()
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)
  const typingTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const modeRef = useRef(mode)

  useEffect(() => {
    modeRef.current = mode
  }, [mode])

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: { x: number; y: number; size: number; speedX: number; speedY: number }[] = []
    const particleCount = 100

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.1,
        speedX: Math.random() * 2 - 1,
        speedY: Math.random() * 2 - 1,
      })
    }

    function animate() {
      if (!ctx) return
      ctx.fillStyle = modeRef.current === 'light' ? '#D9D9D9' : '#000E1C'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      for (const p of particles) {
        p.x += p.speedX
        p.y += p.speedY

        if (p.x > canvas.width) p.x = 0
        if (p.x < 0) p.x = canvas.width
        if (p.y > canvas.height) p.y = 0
        if (p.y < 0) p.y = canvas.height

        ctx.fillStyle = modeRef.current === 'light' ? 'rgba(0, 47, 89, 0.7)' : 'rgba(255, 255, 255, 0.5)'
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
    document.documentElement.classList.toggle('light-mode', mode === 'light')
  }, [mode])

  // Typing animation
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
        <button
          id="light-mode-toggle"
          onClick={toggle}
          aria-label={mode === 'light' ? 'Ativar dark mode' : 'Ativar light mode'}
          style={{
            position: 'absolute',
            top: 16,
            right: 8,
            border: '1px solid rgba(255,255,255,0.2)',
            background: mode === 'light' ? 'rgba(0, 47, 89, 0.12)' : 'rgba(255,255,255,0.08)',
            borderRadius: 999,
            padding: '6px 10px',
            color: mode === 'light' ? '#002F59' : '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            cursor: 'pointer',
            backdropFilter: 'blur(6px)',
          }}
        >
          <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em' }}>
            {mode === 'light' ? 'LIGHT' : 'DARK'}
          </span>
          <span
            aria-hidden="true"
            style={{
              width: 34,
              height: 18,
              borderRadius: 999,
              background: mode === 'light' ? 'rgba(0, 47, 89, 0.25)' : 'rgba(255,255,255,0.25)',
              position: 'relative',
              border: '1px solid rgba(255,255,255,0.25)',
            }}
          >
            <span
              style={{
                position: 'absolute',
                top: 1,
                left: mode === 'light' ? 17 : 1,
                width: 14,
                height: 14,
                borderRadius: '50%',
                background: mode === 'light' ? '#002F59' : '#FFFFFF',
                transition: 'left 0.2s ease',
              }}
            />
          </span>
        </button>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            height: '80dvh',
            paddingTop: '20dvh',
            
          }}>
          <h2 className='title'> Anderson Freitas</h2>
          <div className="subtitle">
            {displayed}
            <span className="typing-cursor">|</span>
          </div>
        </div>
        {/* <div className={`custom-loader${mode === 'light' ? ' light-mode' : ''}`}></div> */}
        <WorkExperience />
      </div>
    </div>
  )
}

export default App
