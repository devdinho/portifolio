import { useT } from '../i18n'
import type { Dictionary } from '../i18n/en'

const skillCategories: { key: keyof Dictionary['skillCategories']; items: string[] }[] = [
  {
    key: 'ai',
    items: [
      'AI Agents',
      'Agent Orchestration',
      'LLM Integration',
      'MCP',
      'RAG',
      'PGVector',
      'LiteLLM',
      'OpenRouter',
    ],
  },
  {
    key: 'backend',
    items: [
      'Python',
      'Django',
      'FastAPI',
      'Go',
      'Node.js',
      'REST APIs',
      'Event-Driven Architecture',
      'Multi-Tenancy',
      'Microsoft Graph',
    ],
  },
  {
    key: 'data',
    items: [
      'PostgreSQL',
      'Redis',
      'RabbitMQ',
      'Celery',
      'MongoDB',
      'Airflow',
      'Apache Superset',
      'S3',
    ],
  },
  {
    key: 'frontend',
    items: [
      'React',
      'TypeScript',
      'Next.js',
      'Tailwind CSS',
      'Design Systems',
      'Storybook',
    ],
  },
  {
    key: 'infra',
    items: [
      'Docker',
      'AWS',
      'Azure',
      'Terraform',
      'CI/CD',
      'Nginx',
      'Traefik',
      'Prometheus',
      'Grafana',
      'Cloudflare',
    ],
  },
]

export default function Skills() {
  const t = useT()
  const c = {
    text:       '#FFFFFF',
    accent:     '#4fc3f7',
    cardBg:     'rgba(255,255,255,0.04)',
    cardBorder: 'rgba(255,255,255,0.09)',
    tagBg:      'rgba(255,255,255,0.06)',
    tagBorder:  'rgba(255,255,255,0.14)',
  }

  return (
    <section id="skills" style={{ padding: '0 0 120px', color: c.text }}>
      <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 40px' }}>

        <div style={{ textAlign: 'center', marginBottom: 48 }} data-aos="fade-up">
          <h2 style={{ fontSize: '1.1rem', fontWeight: 700, margin: '0 0 8px', letterSpacing: '0.06em' }}>
            {t.sections.skills}
          </h2>
          <div style={{ width: 32, height: 2, background: c.accent, margin: '0 auto' }} />
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: 16,
          }}
        >
          {skillCategories.map((cat, i) => (
            <div
              key={cat.key}
              data-aos="fade-up"
              data-aos-delay={String(i * 80)}
              style={{
                border: `1px solid ${c.cardBorder}`,
                borderRadius: 10,
                background: c.cardBg,
                backdropFilter: 'blur(10px)',
                padding: '18px 20px',
              }}
            >
              <div
                style={{
                  fontFamily: 'monospace',
                  fontSize: 11,
                  fontWeight: 700,
                  color: c.accent,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginBottom: 12,
                }}
              >
                {t.skillCategories[cat.key]}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {cat.items.map((item) => (
                  <span
                    key={item}
                    style={{
                      fontFamily: 'monospace',
                      fontSize: 12,
                      padding: '3px 8px',
                      borderRadius: 4,
                      background: c.tagBg,
                      border: `1px solid ${c.tagBorder}`,
                      color: c.text,
                    }}
                  >
                    {t.skillItems[item] ?? item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
