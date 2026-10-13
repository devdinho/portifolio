const en = {
  language: 'Language',

  hero: {
    roles: [
      'SENIOR SOFTWARE ENGINEER',
      'AI PLATFORM ENGINEER',
      'FOUNDING ENGINEER',
    ],
    tagline: 'Building AI platforms, distributed systems and cloud-native software.',
    location: 'Palmas, TO',
    scroll: 'scroll',
  },

  sections: {
    skills: 'Skills',
    experience: 'Experience',
    projects: 'Featured Projects',
  },

  present: 'Present',
  presentShort: 'present',
  current: 'Current',
  resume: 'Resume (PDF, PT)',

  skillCategories: {
    ai: 'AI & Agent Systems',
    backend: 'Backend & Distributed Systems',
    data: 'Data & Messaging',
    frontend: 'Frontend',
    infra: 'Cloud, Infrastructure & Observability',
  },

  skillItems: {
    'AI Agents': 'AI Agents',
    'Agent Orchestration': 'Agent Orchestration',
    'LLM Integration': 'LLM Integration',
    'Event-Driven Architecture': 'Event-Driven Architecture',
    'Multi-Tenancy': 'Multi-Tenancy',
    'Design Systems': 'Design Systems',
  } as Record<string, string>,

  experiences: {
    zuraio: {
      company: 'Zuraio',
      position: 'Founding AI Platform Engineer',
      description:
        'First engineer responsible for architecting and building an enterprise multi-tenant AI platform from the ground up, spanning 15+ interoperable services, agent orchestration, enterprise integrations, shared frontend infrastructure and platform observability.',
      achievements: [
        'Architected the core multi-tenant platform architecture across 15+ interoperable services, covering tenant isolation, authentication, AI orchestration, enterprise integrations and infrastructure',
        'Built the Go-based authentication service using Fiber and Redis, achieving sub-5ms cache-hit response times and implementing DDoS protection layers, rate limiting and Prometheus metrics',
        'Designed and implemented the multi-agent orchestration platform with 22 LLM roles, an ethics gate and three execution strategies (simple, complex and modular), alongside the shared zuraio-mcp-core SDK for MCP-based agents',
        'Built an enterprise email agent integrating Microsoft 365 through Microsoft Graph, combining mailbox RAG, document processing for PDF/DOCX/XLSX attachments and asynchronous workers using arq and Redis',
        'Designed the web intelligence and RAG ingestion pipeline using Crawl4AI for BFS deep crawling, SearXNG hybrid search and a Django-based control plane for collection and indexing',
        'Designed the knowledge architecture supporting company-level and user-level knowledge, combining document ingestion, chunking, vector storage and retrieval for context-aware AI agents',
        'Designed and maintained containerized deployment infrastructure across development, staging and production environments, integrating CI/CD, reverse proxies, service discovery and platform observability',
        'Architected the shared @zuraio/ui design system with 47+ React 19 components, Storybook and GitHub Packages distribution, adopted across 4 frontends with internationalization in 4 languages',
        'Implemented platform observability using Prometheus, Grafana, cAdvisor and node_exporter, including embedded infrastructure dashboards integrated into the platform frontends',
      ],
    },
    medflow: {
      company: 'Medflow Tech',
      position: 'Senior Software Engineer',
      description:
        'Senior software engineering across healthcare products, spanning clinical protocol platforms, mental health care coordination, internal tooling and the data and BI layer.',
      achievements: [
        'Evolved the clinical protocol platform (Django and React), including protocol execution embedded in partner portals, referrals and medical guidance, and consumption of FHIR resources',
        'Built the backend of a mental health care coordination system (Django 5.2, DRF/Ninja, Celery/RabbitMQ, WebSockets) with role-based access, audit logging, S3/Azure Blob attachments and PDF care plans',
        'Migrated the protocol improvement hub from Supabase to a dedicated Django API on AWS (EC2, S3, Terraform, Bitbucket Pipelines), with a status state machine, a tested permission matrix and httpOnly cookie auth',
        'Built Airflow pipelines ingesting a partner reporting API into Aurora PostgreSQL views, with SES freshness alerts',
        'Migrated a Power BI dashboard to Apache Superset managed as code, with idempotent provisioning scripts',
      ],
    },
    sesau: {
      company: 'State Department of Health – Tocantins',
      position: 'Software Engineer',
      description:
        'Technical ownership of integration and strategic data platforms supporting the state public healthcare ecosystem.',
      achievements: [
        'Technical owner of the integration bus for REDS (State Health Data Network)',
        'Designed an event-driven distributed architecture using FastAPI and Go with asynchronous processing',
        'Implemented data integration, security and governance mechanisms for a public healthcare environment',
        'Led backend and frontend development of CIEGES, a strategic management portal for the state SUS ecosystem',
        'Implemented automated testing and GitLab CI/CD pipelines for production delivery',
      ],
    },
    provafacil: {
      company: 'Prova Fácil – Conecta Ecosystem',
      position: 'Junior Full Stack Developer',
      description:
        'Full-stack development on the main product, a Django monolith, with serverless functions and asynchronous processing on AWS.',
      achievements: [
        'Took part in production incident war rooms on the main Django monolith, diagnosing and shipping fixes alongside the Tech Lead and often owning a workstream independently',
        'Developed features in the Django monolith and serverless functions on AWS Lambda',
        'Worked with asynchronous processing using RabbitMQ and Celery in Docker environments on AWS',
      ],
    },
    uft: {
      company: 'Federal University of Tocantins',
      position: 'Software Engineer',
      description:
        'Software engineering across institutional and government platforms, covering backend development, data modeling, requirements analysis and full-stack delivery.',
      achievements: [
        'Developed REST APIs and public-sector management systems used across institutional and government initiatives',
        'Designed database models and backend services for government and agricultural technology solutions',
        'Implemented real-time server-sent event (SSE) capabilities for interactive applications',
        'Delivered full-stack features from requirements analysis through backend, database and frontend implementation',
      ],
    },
  },

  projects: {
    noeris: {
      name: 'Noeris',
      description:
        'Conversational analytics platform combining LLMs, cognitive classification and automated insight generation over structured data and dashboards.',
    },
    armoreddjango: {
      name: 'ArmoredDjango',
      description:
        'Production-ready Django foundation focused on security, API protection and operational reliability.',
    },
    plantagora: {
      name: 'PlantAgora',
      description:
        'Web and mobile platform for community garden management, combining geospatial features, REST APIs and cross-platform mobile development.',
    },
    iac: {
      name: 'Institute for Urban Care',
      description:
        'Public-sector applications spanning mobile and web platforms for institutional and municipal management.',
    },
  },
}

export type Dictionary = typeof en
export default en
