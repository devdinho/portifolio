import { useLocaleStore, useT, type Locale } from '../i18n'

const options: Locale[] = ['en', 'pt-BR']
const labels: Record<Locale, string> = { en: 'EN', 'pt-BR': 'PT' }

const c = {
  text:       '#FFFFFF',
  muted:      '#8899aa',
  accent:     '#4fc3f7',
  cardBg:     'rgba(0,14,28,0.6)',
  cardBorder: 'rgba(255,255,255,0.12)',
}

export default function LanguageSwitcher() {
  const locale = useLocaleStore((s) => s.locale)
  const setLocale = useLocaleStore((s) => s.setLocale)
  const t = useT()

  return (
    <div
      role="group"
      aria-label={t.language}
      style={{
        position: 'fixed', top: 16, right: 16, zIndex: 10,
        display: 'flex', gap: 2, padding: 3, borderRadius: 8,
        background: c.cardBg, border: `1px solid ${c.cardBorder}`,
        backdropFilter: 'blur(8px)',
      }}
    >
      {options.map((option) => {
        const active = option === locale
        return (
          <button
            key={option}
            type="button"
            onClick={() => setLocale(option)}
            aria-pressed={active}
            lang={option}
            style={{
              fontFamily: 'monospace', fontSize: 12, fontWeight: 700,
              padding: '4px 10px', borderRadius: 6, border: 'none', cursor: 'pointer',
              background: active ? 'rgba(79,195,247,0.15)' : 'transparent',
              color: active ? c.accent : c.muted,
            }}
          >
            {labels[option]}
          </button>
        )
      })}
    </div>
  )
}
