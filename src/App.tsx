
import { useEffect, useState, useRef } from 'react'
import { useThemeStore } from './storeTheme'
import roles from './constants/roles'


function App() {
  const { mode, toggle } = useThemeStore()
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)
  const typingTimeout = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    document.documentElement.classList.toggle('light-mode', mode === 'light')
  }, [mode])

  // Animação de digitação e deleção
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
    <>
      <button
        id="light-mode-toggle"
        onClick={toggle}
        aria-label={mode === 'light' ? 'Ativar dark mode' : 'Ativar light mode'}
        style={{ position: 'absolute', top: 16, right: 16 }}
      >
        {mode === 'light' ? '🌞' : '🌙'}
      </button>
      <h2 className='title'> Anderson Freitas</h2>
        <div className="subtitle">
          {displayed}
          <span className="typing-cursor">|</span>
        </div>
      {/* <div className={`custom-loader${mode === 'light' ? ' light-mode' : ''}`}></div> */}
    </>
  )
}

export default App
