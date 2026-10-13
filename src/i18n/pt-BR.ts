import type { Dictionary } from './en'

// Cargos ficam em inglês, como no currículo e no LinkedIn.
const ptBR: Dictionary = {
  language: 'Idioma',

  hero: {
    roles: [
      'SENIOR SOFTWARE ENGINEER',
      'AI PLATFORM ENGINEER',
      'FOUNDING ENGINEER',
    ],
    tagline: 'Construindo plataformas de IA, sistemas distribuídos e software cloud-native.',
    location: 'Palmas, TO',
    scroll: 'role',
  },

  sections: {
    skills: 'Competências',
    experience: 'Experiência',
    projects: 'Projetos em destaque',
  },

  present: 'Atual',
  presentShort: 'hoje',
  current: 'Atual',
  resume: 'Currículo (PDF)',

  skillCategories: {
    ai: 'IA & Sistemas de Agentes',
    backend: 'Backend & Sistemas Distribuídos',
    data: 'Dados & Mensageria',
    frontend: 'Frontend',
    infra: 'Cloud, Infraestrutura & Observabilidade',
  },

  skillItems: {
    'AI Agents': 'Agentes de IA',
    'Agent Orchestration': 'Orquestração de agentes',
    'LLM Integration': 'Integração com LLMs',
    'Event-Driven Architecture': 'Arquitetura orientada a eventos',
    'Multi-Tenancy': 'Multi-tenancy',
    'Design Systems': 'Design systems',
  },

  experiences: {
    zuraio: {
      company: 'Zuraio',
      position: 'Founding AI Platform Engineer',
      description:
        'Primeiro engenheiro responsável por arquitetar e construir do zero uma plataforma corporativa de IA multi-tenant, com mais de 15 serviços interoperáveis, orquestração de agentes, integrações corporativas, infraestrutura de frontend compartilhada e observabilidade.',
      achievements: [
        'Arquitetei a base da plataforma multi-tenant com mais de 15 serviços interoperáveis, cobrindo isolamento por tenant, autenticação, orquestração de IA, integrações corporativas e infraestrutura',
        'Construí o serviço de autenticação em Go com Fiber e Redis, com respostas abaixo de 5 ms em cache hit, camadas de proteção contra DDoS, rate limiting e métricas Prometheus',
        'Projetei e implementei a plataforma de orquestração multi-agente com 22 papéis de LLM, uma camada de validação ética e três estratégias de execução (simples, complexa e modular), além do SDK compartilhado zuraio-mcp-core para agentes baseados em MCP',
        'Construí um agente de e-mail corporativo integrado ao Microsoft 365 via Microsoft Graph, com RAG sobre a caixa de entrada, processamento de anexos PDF/DOCX/XLSX e workers assíncronos com arq e Redis',
        'Projetei o pipeline de inteligência web e ingestão para RAG com Crawl4AI para crawling profundo em BFS, busca híbrida com SearXNG e um control plane em Django para coleta e indexação',
        'Projetei a arquitetura de conhecimento nos níveis de empresa e de usuário, combinando ingestão de documentos, chunking, armazenamento vetorial e recuperação para agentes de IA com contexto',
        'Projetei e mantive a infraestrutura de deploy conteinerizada nos ambientes de desenvolvimento, homologação e produção, integrando CI/CD, proxies reversos, service discovery e observabilidade',
        'Arquitetei o design system compartilhado @zuraio/ui com mais de 47 componentes em React 19, Storybook e distribuição via GitHub Packages, adotado em 4 frontends com internacionalização em 4 idiomas',
        'Implementei a observabilidade da plataforma com Prometheus, Grafana, cAdvisor e node_exporter, incluindo dashboards de infraestrutura embarcados nos frontends',
      ],
    },
    medflow: {
      company: 'Medflow Tech',
      position: 'Senior Software Engineer',
      description:
        'Engenharia de software sênior em produtos de saúde: plataforma de protocolos clínicos, matriciamento em saúde mental, ferramentas internas e a camada de dados e BI.',
      achievements: [
        'Evoluí a plataforma de protocolos clínicos (Django e React), incluindo execução de protocolos embarcada em portais de parceiros, encaminhamentos e orientações médicas, e consumo de recursos FHIR',
        'Construí o backend de um sistema de matriciamento em saúde mental (Django 5.2, DRF/Ninja, Celery/RabbitMQ, WebSockets) com controle de acesso por perfil, auditoria, anexos em S3/Azure Blob e geração de PDF do plano terapêutico',
        'Migrei a central de melhorias de protocolos do Supabase para uma API Django própria na AWS (EC2, S3, Terraform, Bitbucket Pipelines), com máquina de estados, matriz de permissões testada e autenticação via cookie httpOnly',
        'Construí pipelines no Airflow que ingerem a API de relatórios de um parceiro em views no Aurora PostgreSQL, com alertas de defasagem via SES',
        'Migrei um painel do Power BI para o Apache Superset gerenciado como código, com scripts de provisionamento idempotentes',
      ],
    },
    sesau: {
      company: 'Secretaria Estadual de Saúde do Tocantins',
      position: 'Software Engineer',
      description:
        'Responsável técnico por plataformas de integração e de dados estratégicos do ecossistema público de saúde do estado.',
      achievements: [
        'Responsável técnico pelo barramento de integração da REDS (Rede Estadual de Dados da Saúde)',
        'Projetei uma arquitetura distribuída orientada a eventos com FastAPI e Go e processamento assíncrono',
        'Implementei mecanismos de integração de dados, segurança e governança para um ambiente de saúde pública',
        'Liderei o desenvolvimento backend e frontend do CIEGES, portal de gestão estratégica do SUS estadual',
        'Implementei testes automatizados e pipelines de CI/CD no GitLab para entrega em produção',
      ],
    },
    provafacil: {
      company: 'Prova Fácil – Ecossistema Conecta',
      position: 'Desenvolvedor Full Stack Jr.',
      description:
        'Desenvolvimento full stack no produto principal, um monolito Django, com funções serverless e processamento assíncrono na AWS.',
      achievements: [
        'Atuei em war rooms de incidentes em produção no monolito Django principal, diagnosticando e aplicando correções junto ao Tech Lead e frequentemente conduzindo uma frente de forma independente',
        'Desenvolvi funcionalidades no monolito Django e em funções serverless na AWS Lambda',
        'Trabalhei com processamento assíncrono usando RabbitMQ e Celery em ambientes Docker na AWS',
      ],
    },
    uft: {
      company: 'Universidade Federal do Tocantins',
      position: 'Software Engineer',
      description:
        'Engenharia de software em plataformas institucionais e governamentais, cobrindo desenvolvimento backend, modelagem de dados, análise de requisitos e entregas full stack.',
      achievements: [
        'Desenvolvi APIs REST e sistemas de gestão pública usados em iniciativas institucionais e governamentais',
        'Modelei bancos de dados e serviços backend para soluções governamentais e de tecnologia agrícola',
        'Implementei recursos em tempo real com server-sent events (SSE) para aplicações interativas',
        'Entreguei funcionalidades full stack, da análise de requisitos à implementação de backend, banco de dados e frontend',
      ],
    },
  },

  projects: {
    noeris: {
      name: 'Noeris',
      description:
        'Plataforma de análise conversacional que combina LLMs, classificação cognitiva e geração automática de insights sobre dados estruturados e dashboards.',
    },
    armoreddjango: {
      name: 'ArmoredDjango',
      description:
        'Base Django pronta para produção, com foco em segurança, proteção de APIs e confiabilidade operacional.',
    },
    plantagora: {
      name: 'PlantAgora',
      description:
        'Plataforma web e mobile para gestão de hortas comunitárias, com recursos georreferenciados, APIs REST e desenvolvimento mobile multiplataforma.',
    },
    iac: {
      name: 'Instituto de Atenção às Cidades',
      description:
        'Aplicações para o setor público em plataformas web e mobile, voltadas à gestão institucional e municipal.',
    },
  },
}

export default ptBR
