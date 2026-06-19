import { Mail, Phone } from 'lucide-react'

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
  current: boolean
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

const experiences: Experience[] = [
  {
    id: 'uft',
    company: 'Universidade Federal do Tocantins',
    position: 'Software Engineer',
    periodLabel: '03/2022 – 07/2025',
    current: false,
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
  {
    id: 'sesau',
    company: 'Secretaria Estadual de Saúde – TO',
    position: 'Software Engineer',
    periodLabel: '07/2025 – 03/2026',
    current: false,
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
    id: 'medflow',
    company: 'Medflow Tech',
    position: 'Senior Software Engineer',
    periodLabel: '03/2026 – Atual',
    current: true,
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
    id: 'zuraio',
    company: 'Zuraio',
    position: 'Founding AI Platform Engineer',
    periodLabel: '02/2026 – Atual',
    current: true,
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

const c = {
  text:         '#FFFFFF',
  muted:        '#8899aa',
  cardBorder:   'rgba(255,255,255,0.09)',
  axisLine:     'rgba(255,255,255,0.10)',
  accent:       '#4fc3f7',
  greenDot:     '#4ade80',
  greenBadgeBg: 'rgba(74,222,128,0.1)',
  tagBg:        'rgba(255,255,255,0.06)',
  tagBorder:    'rgba(255,255,255,0.14)',
  cardBg:       'rgba(255,255,255,0.04)',
}

export default function WorkExperience() {
  return (
    <>
      <section id="experience" style={{ padding: '0 0 80px', color: c.text }}>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 40px' }}>

          {/* Contact links */}
          <div style={{ textAlign: 'center', marginBottom: 72 }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 16, marginBottom: 14 }}>
              {[
                { href: 'https://wa.me/5563992041379', label: 'WhatsApp', icon: <Phone size={15} />, color: '#4ade80' },
                { href: 'mailto:freitas.dev@proton.me', label: 'Email', icon: <Mail size={15} />, color: '#f59e0b' },
                { href: 'https://github.com/devdinho', label: 'GitHub', icon: <GithubIcon size={15} />, color: c.text },
                { href: 'https://www.linkedin.com/in/freitas-anderson', label: 'LinkedIn', icon: <LinkedinIcon size={15} />, color: '#4fc3f7' },
              ].map(({ href, label, icon, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', gap: 7,
                    padding: '7px 16px', borderRadius: 8,
                    border: `1px solid ${c.cardBorder}`, background: c.cardBg,
                    backdropFilter: 'blur(6px)', fontFamily: 'monospace',
                    fontSize: 13, fontWeight: 600, color, textDecoration: 'none',
                  }}
                >
                  {icon}
                  {label}
                </a>
              ))}
            </div>
            <div style={{
              display: 'inline-block', fontFamily: 'monospace', fontSize: 12,
              color: c.muted, border: `1px solid ${c.cardBorder}`, borderRadius: 6,
              padding: '3px 12px', backdropFilter: 'blur(4px)',
            }}>
              2022 —{' '}<span style={{ color: c.accent }}>presente</span>
            </div>
          </div>

          {/* Section title */}
          <div style={{ textAlign: 'center', marginBottom: 56 }} data-aos="fade-up">
            <h2 style={{ fontSize: '1.1rem', fontWeight: 700, margin: '0 0 8px', letterSpacing: '0.06em' }}>
              Experiência
            </h2>
            <div style={{ width: 32, height: 2, background: c.accent, margin: '0 auto' }} />
          </div>

          {/* Vertical timeline */}
          <div>
            {experiences.map((exp, i) => {
              const isLast = i === experiences.length - 1
              return (
                <div
                  key={exp.id}
                  data-aos="fade-up"
                  data-aos-delay={String(i * 80)}
                  style={{ display: 'flex' }}
                >
                  {/* Left: dot + connector line */}
                  <div style={{
                    display: 'flex', flexDirection: 'column',
                    alignItems: 'center', width: 28, flexShrink: 0,
                  }}>
                    <div
                      className={exp.current ? 'dot-current' : undefined}
                      style={{
                        width: 12, height: 12, borderRadius: '50%',
                        marginTop: 5, flexShrink: 0, position: 'relative', zIndex: 1,
                        background: exp.current ? c.greenDot : c.accent,
                      }}
                    />
                    {!isLast && (
                      <div style={{
                        flex: 1, width: 1, background: c.axisLine,
                        marginTop: 8, marginBottom: -8,
                      }} />
                    )}
                  </div>

                  {/* Right: content */}
                  <div style={{ flex: 1, paddingLeft: 20, paddingBottom: isLast ? 0 : 52 }}>
                    <div style={{
                      display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between',
                      alignItems: 'flex-start', gap: 8, marginBottom: 10,
                    }}>
                      <div>
                        <div style={{
                          display: 'flex', alignItems: 'center',
                          gap: 10, flexWrap: 'wrap', marginBottom: 4,
                        }}>
                          <h3 style={{ fontWeight: 700, fontSize: '1rem', margin: 0 }}>
                            {exp.position}
                          </h3>
                          {exp.current && (
                            <span style={{
                              fontSize: 11, fontWeight: 600, padding: '2px 8px',
                              borderRadius: 999, color: c.greenDot,
                              background: c.greenBadgeBg, border: `1px solid ${c.greenDot}`,
                            }}>
                              Atual
                            </span>
                          )}
                        </div>
                        <div style={{ fontFamily: 'monospace', fontSize: 13, color: c.accent }}>
                          {exp.company}
                        </div>
                      </div>
                      <div style={{ fontFamily: 'monospace', fontSize: 12, color: c.muted }}>
                        {exp.periodLabel}
                      </div>
                    </div>

                    <p style={{ fontSize: 13, color: c.muted, lineHeight: 1.7, margin: '0 0 12px' }}>
                      {exp.description}
                    </p>

                    {exp.achievements && (
                      <ul style={{
                        listStyle: 'none', padding: 0, margin: '0 0 12px',
                        display: 'flex', flexDirection: 'column', gap: 5,
                      }}>
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
                            fontFamily: 'monospace', fontSize: 11,
                            padding: '3px 8px', borderRadius: 4,
                            background: c.tagBg, border: `1px solid ${c.tagBorder}`,
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
      </section>

      {/* Projects section */}
      <section id="projects" style={{ padding: '0 0 140px', color: c.text }}>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 40px' }}>

          <div style={{ textAlign: 'center', marginBottom: 48 }} data-aos="fade-up">
            <h2 style={{ fontSize: '1.1rem', fontWeight: 700, margin: '0 0 8px', letterSpacing: '0.06em' }}>
              Projetos Relevantes
            </h2>
            <div style={{ width: 32, height: 2, background: c.accent, margin: '0 auto' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 16 }}>
            {projects.map((project, i) => (
              <div
                key={project.id}
                data-aos="fade-up"
                data-aos-delay={String(i * 80)}
                style={{
                  border: `1px solid ${c.cardBorder}`, borderRadius: 10,
                  background: c.cardBg, backdropFilter: 'blur(10px)',
                  padding: '20px 22px', display: 'flex', flexDirection: 'column', gap: 10,
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
                        fontFamily: 'monospace', fontSize: 11,
                        padding: '2px 7px', borderRadius: 4,
                        background: c.tagBg, border: `1px solid ${c.tagBorder}`,
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

      <style>{`
        @keyframes pulse-green {
          0%, 100% { box-shadow: 0 0 0 0 rgba(74, 222, 128, 0.5); }
          50%       { box-shadow: 0 0 0 6px rgba(74, 222, 128, 0); }
        }
        .dot-current {
          animation: pulse-green 2s ease-in-out infinite;
        }
      `}</style>
    </>
  )
}
