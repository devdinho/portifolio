import { create } from 'zustand'
import en from './en'
import ptBR from './pt-BR'

export type Locale = 'en' | 'pt-BR'

const dictionaries = { en, 'pt-BR': ptBR }
const STORAGE_KEY = 'locale'

// Português no navegador (pt, pt-BR, pt-PT) abre em pt-BR; qualquer outro idioma, em inglês.
function detectLocale(): Locale {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'en' || saved === 'pt-BR') return saved
  } catch {
    // Sem acesso ao localStorage: segue pela língua do navegador
  }
  const browser = navigator.languages?.[0] ?? navigator.language ?? ''
  return browser.toLowerCase().startsWith('pt') ? 'pt-BR' : 'en'
}

function applyToDocument(locale: Locale) {
  document.documentElement.lang = locale
}

interface LocaleState {
  locale: Locale
  setLocale: (locale: Locale) => void
}

export const useLocaleStore = create<LocaleState>((set) => ({
  locale: detectLocale(),
  setLocale: (locale) => {
    try {
      localStorage.setItem(STORAGE_KEY, locale)
    } catch {
      // A troca vale só para esta visita
    }
    applyToDocument(locale)
    set({ locale })
  },
}))

applyToDocument(useLocaleStore.getState().locale)

export function useT() {
  return dictionaries[useLocaleStore((s) => s.locale)]
}
