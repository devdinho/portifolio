import { create } from 'zustand'

interface ThemeState {
  mode: 'light' | 'dark'
  toggle: () => void
  setMode: (mode: 'light' | 'dark') => void
}

const getInitialMode = () => {
  const stored = localStorage.getItem('theme-mode')
  if (stored === 'light' || stored === 'dark') return stored
  return 'dark'
}

export const useThemeStore = create<ThemeState>((set) => ({
  mode: getInitialMode(),
  toggle: () => set((state) => {
    const newMode = state.mode === 'dark' ? 'light' : 'dark'
    localStorage.setItem('theme-mode', newMode)
    return { mode: newMode }
  }),
  setMode: (mode) => {
    localStorage.setItem('theme-mode', mode)
    set({ mode })
  }
}))
