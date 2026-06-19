import { useState } from 'react'
import { Mail, Phone } from 'lucide-react'
import { useThemeStore } from '../storeTheme'


const GithubIcon = ({ size = 15 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
)

const LinkedinIcon = ({ size = 15 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)


interface Experience {
  id: string
  company: string
  position: string
  periodLabel: string
  startNum: number
  endNum: number | null
  description: string
  technologies: string[]
  achievements?: string[]
}

interface Project {
  id: string
  name: string
  description: string
  technologies: string[]
}

function monthYear(year: number, month: number) {
  return year + (month - 1) / 12
}

const CURRENT_DATE = monthYear(2026, 6)

const experiences: Experience[] = [
  {
    id: 'zuraio',
    company: 'Zuraio',
    position: 'Founding AI Platform Engineer',
    periodLabel: '02/2026 – Atual',
    startNum: monthYear(2026, 2),
    endNum: null,
    description:
      'Arquitetura e desenvolvimento de uma plataforma corporativa multi-tenant para agentes inteligentes, incluindo governança de tenants, autenticação federada e isolamento de dados por cliente.',
    technologies: ['Python', 'FastAPI', 'LLMs', 'RAG', 'PGVector', 'MCP', 'OAuth', 'Docker', 'CI/CD'],
    achievements: [
      'Desenvolvimento do núcleo de orquestração de IA com planejamento de tarefas, execução paralela, memória persistente e streaming em tempo real',
      'Construção de agentes especializados para e-mail corporativo e pesquisa web com Microsoft Graph, Crawl4AI e busca híbrida',
      'Implementação de autenticação federada, billing de consumo de IA, observabilidade e comunicação entre microsserviços',
      'Evolução da arquitetura da plataforma: backend, frontends administrativos, design system compartilhado e pipelines CI/CD',
    ],
  },
  {
    id: 'medflow',
    company: 'Medflow Tech',
    position: 'Senior Software Engineer',
    periodLabel: '03/2026 – Atual',
    startNum: monthYear(2026, 3),
    endNum: null,
    description:
      'Desenvolvimento e evolução de soluções para a área da saúde em múltiplos produtos, incluindo plataformas clínicas e sistemas de matriciamento.',
    technologies: ['Python', 'Django', 'React', 'PostgreSQL', 'AWS', 'APIs REST'],
    achievements: [
      'Desenvolvimento backend com Python/Django e frontend em React',
      'Evolução da infraestrutura da plataforma e integração entre serviços',
      'Apoio técnico a desenvolvedores parceiros com configuração de ambientes e deploy',
      'Participação em decisões de arquitetura, escalabilidade e evolução técnica dos produtos',
    ],
  },
  {
    id: 'sesau',
    company: 'Secretaria Estadual de Saúde – TO',
    position: 'Software Engineer',
    periodLabel: '07/2025 – 03/2026',
    startNum: monthYear(2025, 7),
    endNum: monthYear(2026, 3),
    description:
      'Responsável técnico pelo barramento de integração da Rede Estadual de Dados da Saúde (REDS) e pelo portal estratégico de gestão do SUS (CIEGES).',
    technologies: ['Python', 'FastAPI', 'Go', 'Django', 'React', 'PostgreSQL', 'GitLab CI/CD', 'Docker'],
    achievements: [
      'REDS: arquitetura distribuída baseada em eventos com FastAPI e Go, processamento assíncrono e governança de dados',
      'CIEGES: backend Django, frontend React, CI/CD GitLab e testes automatizados',
      'Segurança e conformidade em ambiente crítico de saúde pública',
    ],
  },
  {
    id: 'uft',
    company: 'Universidade Federal do Tocantins',
    position: 'Software Engineer',
    periodLabel: '03/2022 – 07/2025',
    startNum: monthYear(2022, 3),
    endNum: monthYear(2025, 7),
    description:
      'Atuação em projetos institucionais e governamentais, incluindo sistemas de gestão pública, soluções para agricultura familiar e sistemas SSE.',
    technologies: ['Python', 'Django', 'DRF', 'JavaScript', 'MariaDB', 'PostgreSQL', 'REST API', 'SSE'],
    achievements: [
      'Desenvolvimento de APIs REST e sistemas de gestão pública',
      'Soluções para agricultura familiar com georreferenciamento',
      'Modelagem de bancos de dados e levantamento de requisitos',
      'Desenvolvimento full stack com Python, Django, DRF e JavaScript',
    ],
  },
]

const projects: Project[] = [
  {
    id: 'iac',
    name: 'Instituto de Atenção às Cidades',
    description: 'Desenvolvimento de aplicações para gestão pública com stack mobile e web.',
    technologies: ['Kotlin', 'Spring Boot', 'Angular', 'React Native', 'PostgreSQL'],
  },
  {
    id: 'armoreddjango',
    name: 'ArmoredDjango',
    description: 'Template Django para produção com segurança e boas práticas integradas.',
    technologies: ['JWT', 'Segurança', 'Rate limiting', 'Docker', 'CI/CD', 'Testes'],
  },
  {
    id: 'noeris',
    name: 'Noeris',
    description: 'Plataforma de Analytics Conversacional baseada em IA com classificação cognitiva e geração de insights.',
    technologies: ['LLMs', 'Classificação cognitiva', 'Geração de insights', 'Arquitetura desacoplada', 'Dashboards'],
  },
  {
    id: 'plantagora',
    name: 'PlantAgora',
    description: 'Plataforma web e mobile para gestão de hortas comunitárias.',
    technologies: ['Django', 'React Native', 'APIs REST', 'Georreferenciamento'],
  },
]

function endOf(exp: Experience) {
  return exp.endNum ?? CURRENT_DATE
}

const MIN_NUM = Math.min(...experiences.map((e) => e.startNum))
const MAX_NUM = CURRENT_DATE
const SPAN = MAX_NUM - MIN_NUM || 1

function toPercent(num: number) {
  return ((num - MIN_NUM) / SPAN) * 100
}

function assignRows(exps: Experience[]): number[] {
  const sorted = [...exps].sort((a, b) => a.startNum - b.startNum)
  const rowEnds: number[] = []
  const rows: number[] = new Array(exps.length)

  for (const exp of sorted) {
    const idx = exps.indexOf(exp)
    let placed = false
    for (let r = 0; r < rowEnds.length; r++) {
      if (rowEnds[r] <= exp.startNum + 0.01) {
        rows[idx] = r
        rowEnds[r] = endOf(exp)
        placed = true
        break
      }
    }
    if (!placed) {
      rows[idx] = rowEnds.length
      rowEnds.push(endOf(exp))
    }
  }
  return rows
}

const rows = assignRows(experiences)
const totalRows = Math.max(...rows) + 1

const YEAR_LABELS = Array.from(
  { length: Math.ceil(MAX_NUM) - Math.floor(MIN_NUM) + 1 },
  (_, i) => Math.floor(MIN_NUM) + i,
)

export default function WorkExperience() {
  const { mode } = useThemeStore()
  const [activeId, setActiveId] = useState<string | null>(null)

  const isDark = mode === 'dark'

  const c = {
    text:             isDark ? '#FFFFFF'                   : '#000E1C',
    muted:            isDark ? '#8899aa'                   : '#4a5568',
    cardBg:           isDark ? 'rgba(255,255,255,0.04)'    : 'rgba(0,47,89,0.05)',
    cardBorder:       isDark ? 'rgba(255,255,255,0.09)'    : 'rgba(0,47,89,0.18)',
    cardBorderActive: isDark ? 'rgba(255,255,255,0.25)'    : 'rgba(0,47,89,0.45)',
    axisLine:         isDark ? 'rgba(255,255,255,0.12)'    : 'rgba(0,47,89,0.2)',
    barActive:        isDark ? '#4fc3f7'                   : '#002F59',
    barInactive:      isDark ? 'rgba(79,195,247,0.28)'     : 'rgba(0,47,89,0.22)',
    barTextActive:    isDark ? '#000E1C'                   : '#FFFFFF',
    barTextInactive:  isDark ? '#FFFFFF'                   : '#000E1C',
    accent:           isDark ? '#4fc3f7'                   : '#002F59',
    greenDot:         isDark ? '#4ade80'                   : '#16a34a',
    greenBadgeBg:     isDark ? 'rgba(74,222,128,0.1)'      : 'rgba(22,163,74,0.08)',
    tagBg:            isDark ? 'rgba(255,255,255,0.06)'    : 'rgba(0,47,89,0.07)',
    tagBorder:        isDark ? 'rgba(255,255,255,0.14)'    : 'rgba(0,47,89,0.22)',
  }

  const ROW_HEIGHT = 52

  return (
    <>
      <section id="experience" style={{ padding: '140px 0 80px', color: c.text }}>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 40px' }}>

          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: 72 }}>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: 16,
                marginBottom: 14,
              }}
            >
              {[
                {
                  href: 'https://wa.me/5563992041379',
                  label: 'WhatsApp',
                  icon: <Phone size={15} />,
                  backgroundColor: '#4ade80',
                },
                {
                  href: 'mailto:freitas.dev@proton.me',
                  label: 'Email',
                  icon: <Mail size={15} />,
                  backgroundColor: '#f59e0b',
                },
                {
                  href: 'https://github.com/devdinho',
                  label: 'GitHub',
                  icon: <GithubIcon size={15} />,
                  backgroundColor: c.text,
                },
                {
                  href: 'https://www.linkedin.com/in/freitas-anderson',
                  label: 'LinkedIn',
                  icon: <LinkedinIcon size={15} />,
                  backgroundColor: '#4fc3f7',
                },
              ].map(({ href, label, icon, backgroundColor }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 7,
                    padding: '7px 16px',
                    borderRadius: 8,
                    border: `1px solid ${c.cardBorder}`,
                    background: c.cardBg,
                    backdropFilter: 'blur(6px)',
                    fontFamily: 'monospace',
                    fontSize: 13,
                    fontWeight: 600,
                    color: backgroundColor,
                    textDecoration: 'none',
                    transition: 'border-color 0.2s, background 0.2s',
                  }}
                >
                  {icon}
                  {label}
                </a>
              ))}
            </div>
            <div
              style={{
                display: 'inline-block',
                fontFamily: 'monospace',
                fontSize: 12,
                color: c.muted,
                border: `1px solid ${c.cardBorder}`,
                borderRadius: 6,
                padding: '3px 12px',
                backdropFilter: 'blur(4px)',
              }}
            >
              2022 —{' '}<span style={{ color: c.accent }}>presente</span>
            </div>
          </div>

          {/* Horizontal timeline */}
          <div style={{ overflowX: 'auto', paddingBottom: 8 }}>
            <div style={{ minWidth: 580 }}>

              {/* Year labels */}
              <div style={{ position: 'relative', height: 22, marginBottom: 6 }}>
                {YEAR_LABELS.map((year) => (
                  <span
                    key={year}
                    style={{
                      position: 'absolute',
                      left: `${toPercent(year)}%`,
                      transform: 'translateX(-50%)',
                      fontFamily: 'monospace',
                      fontSize: 11,
                      color: c.muted,
                    }}
                  >
                    {year}
                  </span>
                ))}
              </div>

              {/* Axis */}
              <div style={{ height: 1, background: c.axisLine, marginBottom: 18 }} />

              {/* Bars */}
              <div style={{ position: 'relative', height: totalRows * ROW_HEIGHT + 8 }}>
                {experiences.map((exp, i) => {
                  const row = rows[i]
                  const left = toPercent(exp.startNum)
                  const width = toPercent(endOf(exp)) - left
                  const isActive = activeId === exp.id
                  const isCurrent = exp.endNum === null

                  return (
                    <button
                      key={exp.id}
                      onClick={() => setActiveId(isActive ? null : exp.id)}
                      aria-expanded={isActive}
                      title={`${exp.company} · ${exp.periodLabel}`}
                      style={{
                        position: 'absolute',
                        top: row * ROW_HEIGHT + 4,
                        left: `${left}%`,
                        width: `${Math.max(width, 4)}%`,
                        height: 36,
                        background: isActive ? c.barActive : c.barInactive,
                        border: `1px solid ${isActive ? c.barActive : c.cardBorder}`,
                        borderRadius: 6,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        padding: '0 8px',
                        gap: 6,
                        overflow: 'hidden',
                        transition: 'background 0.2s, border-color 0.2s, box-shadow 0.2s',
                        boxShadow: isActive ? `0 0 0 2px ${c.barActive}40` : 'none',
                        color: isActive ? c.barTextActive : c.barTextInactive,
                      }}
                    >
                      {isCurrent && (
                        <span
                          style={{
                            width: 7,
                            height: 7,
                            borderRadius: '50%',
                            background: c.greenDot,
                            flexShrink: 0,
                            boxShadow: `0 0 6px ${c.greenDot}`,
                          }}
                        />
                      )}
                      <span
                        style={{
                          fontFamily: 'monospace',
                          fontSize: 11,
                          fontWeight: 600,
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        {exp.company}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Detail cards */}
          <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {experiences.map((exp) => {
              if (activeId !== exp.id) return null
              const isCurrent = exp.endNum === null

              return (
                <div
                  key={exp.id}
                  style={{
                    border: `1px solid ${c.cardBorderActive}`,
                    borderRadius: 10,
                    background: c.cardBg,
                    backdropFilter: 'blur(10px)',
                    animation: 'fadeSlideIn 0.2s ease',
                  }}
                >
                  <div style={{ padding: '22px 26px' }}>
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        gap: 8,
                        marginBottom: 14,
                      }}
                    >
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4, flexWrap: 'wrap' }}>
                          <h3 style={{ fontWeight: 700, fontSize: '1rem', margin: 0 }}>{exp.position}</h3>
                          {isCurrent && (
                            <span
                              style={{
                                fontSize: 11,
                                fontWeight: 600,
                                padding: '2px 8px',
                                borderRadius: 999,
                                color: c.greenDot,
                                background: c.greenBadgeBg,
                                border: `1px solid ${c.greenDot}`,
                              }}
                            >
                              Atual
                            </span>
                          )}
                        </div>
                        <div style={{ fontFamily: 'monospace', fontSize: 13, color: c.accent }}>{exp.company}</div>
                      </div>
                      <div style={{ fontFamily: 'monospace', fontSize: 12, color: c.muted }}>{exp.periodLabel}</div>
                    </div>

                    <p style={{ fontSize: 13, color: c.muted, lineHeight: 1.7, marginBottom: 14 }}>
                      {exp.description}
                    </p>

                    {exp.achievements && (
                      <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 14px', display: 'flex', flexDirection: 'column', gap: 5 }}>
                        {exp.achievements.map((a, idx) => (
                          <li key={idx} style={{ fontSize: 13, color: c.muted, display: 'flex', gap: 8 }}>
                            <span style={{ color: c.accent, flexShrink: 0 }}>▸</span>
                            {a}
                          </li>
                        ))}
                      </ul>
                    )}

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          style={{
                            fontFamily: 'monospace',
                            fontSize: 11,
                            padding: '3px 8px',
                            borderRadius: 4,
                            background: c.tagBg,
                            border: `1px solid ${c.tagBorder}`,
                            color: c.text,
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

        </div>

        <style>{`
          @keyframes fadeSlideIn {
            from { opacity: 0; transform: translateY(-8px); }
            to   { opacity: 1; transform: translateY(0);    }
          }
        `}</style>
      </section>

      {/* Projects section */}
      <section id="projects" style={{ padding: '0 0 140px', color: c.text }}>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 40px' }}>

          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 700, margin: '0 0 8px', letterSpacing: '0.06em' }}>
              Projetos Relevantes
            </h2>
            <div style={{ width: 32, height: 2, background: c.accent, margin: '0 auto' }} />
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
              gap: 16,
            }}
          >
            {projects.map((project) => (
              <div
                key={project.id}
                style={{
                  border: `1px solid ${c.cardBorder}`,
                  borderRadius: 10,
                  background: c.cardBg,
                  backdropFilter: 'blur(10px)',
                  padding: '20px 22px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10,
                }}
              >
                <div style={{ fontWeight: 700, fontSize: '0.9rem', color: c.text }}>{project.name}</div>
                <p style={{ fontSize: 13, color: c.muted, lineHeight: 1.6, margin: 0, flex: 1 }}>
                  {project.description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        fontFamily: 'monospace',
                        fontSize: 11,
                        padding: '2px 7px',
                        borderRadius: 4,
                        background: c.tagBg,
                        border: `1px solid ${c.tagBorder}`,
                        color: c.text,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  )
}
