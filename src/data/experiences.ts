import type { Experience } from "@/types/portfolio";

export const experiences: readonly Experience[] = [
  {
    id: "data-opportunity-engineer",
    company: "Data Opportunity",
    current: true,
    level: 4,
    role: {
      pt: "Software Engineer",
      en: "Software Engineer",
    },
    period: { start: "2026-03" },
    periodLabel: {
      pt: "Mar 2026 - Presente · Remoto",
      en: "Mar 2026 - Present · Remote",
    },
    description: {
      pt: "Engenharia de sistemas de extração de dados em larga escala, com foco em performance, confiabilidade e integração de APIs externas.",
      en: "Engineering large-scale data extraction systems with focus on performance, reliability and external API integration.",
    },
    highlights: [
      {
        pt: "Otimizei pipelines de scraping em **até 90%**, reduzindo processos de aproximadamente **20min para 2min** e de **3h para 20min**.",
        en: "Optimized scraping pipelines by **up to 90%**, cutting runs from roughly **20min to 2min** and from **3h to 20min**.",
      },
      {
        pt: "Refinei um fluxo de **104.000 itens** reduzindo requisições por item de aproximadamente **9 para 4**, cortando uso de infraestrutura.",
        en: "Refined a **104,000-item workflow** by reducing requests per item from roughly **9 to 4**, cutting infrastructure usage.",
      },
      {
        pt: "Desenvolvi webhooks em FastAPI e integrações com APIs externas para comunicação entre serviços.",
        en: "Built FastAPI webhooks and integrated external APIs for service-to-service communication.",
      },
      {
        pt: "Criei rotinas de validação e normalização para elevar consistência e qualidade de ingestão.",
        en: "Created validation and normalization routines to raise data consistency and ingestion quality.",
      },
    ],
    stack: ["Python", "FastAPI", "Scrapy", "Postgres", "Redis", "Digital Ocean", "Docker"],
  },
  {
    id: "data-opportunity-intern",
    company: "Data Opportunity",
    level: 3,
    role: {
      pt: "Software Engineering Intern",
      en: "Software Engineering Intern",
    },
    period: { start: "2025-10", end: "2026-03" },
    periodLabel: {
      pt: "Out 2025 - Mar 2026 · Estágio",
      en: "Oct 2025 - Mar 2026 · Internship",
    },
    description: {
      pt: "Contribuí com fluxos de extração e processamento de dados, apoiando manutenção de pipelines e organização de rotinas.",
      en: "Contributed to data extraction and processing workflows, supporting pipeline maintenance and routine organization.",
    },
    highlights: [
      {
        pt: "Desenvolvimento e manutenção de workflows com Python e Scrapy.",
        en: "Developed and maintained workflows using Python and Scrapy.",
      },
      {
        pt: "Análise de requisições internas e implementação de automações focadas em qualidade.",
        en: "Analyzed internal requests and implemented quality-focused automation.",
      },
      {
        pt: "Suporte na manutenção de pipelines e processos de extração.",
        en: "Supported pipeline maintenance and extraction processes.",
      },
    ],
    stack: ["Python", "Scrapy", "SQL", "Git"],
  },
  {
    id: "ong-gabriel-volunteer",
    company: "ONG Gabriel",
    level: 2,
    role: {
      pt: "Volunteer Software Engineer",
      en: "Volunteer Software Engineer",
    },
    period: { start: "2025-09", end: "2025-12" },
    periodLabel: {
      pt: "Set 2025 - Dez 2025 · Remoto",
      en: "Sep 2025 - Dec 2025 · Remote",
    },
    description: {
      pt: "APIs REST, frontend SPA/SSR e infraestrutura containerizada para uma ONG.",
      en: "REST APIs, SPA/SSR frontend and containerized infrastructure for a non-profit.",
    },
    highlights: [
      {
        pt: "APIs REST e serviços backend em Django/DRF.",
        en: "REST APIs and backend services with Django/DRF.",
      },
      {
        pt: "Frontend SPA/SSR com TypeScript e Next.js integrando CMS dinâmico.",
        en: "SPA/SSR frontend with TypeScript and Next.js, integrating dynamic CMS content.",
      },
      {
        pt: "Refatoração de arquitetura para escalabilidade e manutenção.",
        en: "Refactored architecture for scalability and maintainability.",
      },
      {
        pt: "Stack containerizada com Docker, Compose e Traefik.",
        en: "Containerized stack with Docker, Compose and Traefik.",
      },
    ],
    stack: ["Django", "Next.js", "TypeScript", "Postgres", "Docker", "Traefik", "Hostinger"],
  },
  {
    id: "loja-sangue-latino-automation",
    company: "Loja Sangue Latino",
    level: 1,
    role: {
      pt: "Automation Developer",
      en: "Automation Developer",
    },
    period: { start: "2024-05", end: "2025-10" },
    periodLabel: {
      pt: "Mai 2024 - Out 2025 · Feira de Santana, BA",
      en: "May 2024 - Oct 2025 · Feira de Santana, BA",
    },
    description: {
      pt: "Workflows de automação e pipelines de dados impactando logística, atendimento e finanças.",
      en: "Automation workflows and data pipelines impacting logistics, support and finance.",
    },
    highlights: [
      {
        pt: "Automação de **90% do rastreio de envios** integrando **4 transportadoras**, eliminando **6h/dia** de trabalho manual.",
        en: "Automated **90% of shipment tracking** across **4 carriers**, eliminating **6h/day** of manual work.",
      },
      {
        pt: "ETLs de auditoria de notas fiscais e frete melhorando análise de custos.",
        en: "ETL workflows for invoice and freight auditing, improving cost analysis.",
      },
      {
        pt: "Sistemas de notificação automática por email e WhatsApp reduzindo suporte de transporte em **mais de 50%**.",
        en: "Automated email and WhatsApp notification systems cutting transport-related support by **more than 50%**.",
      },
      {
        pt: "Automações operacionais com Google Apps Script e planilhas integradas em tempo real.",
        en: "Operational automations with Google Apps Script and real-time integrated spreadsheets.",
      },
    ],
    stack: ["Python", "Selenium", "lxml", "Apps Script", "Office 365"],
  },
] as const;
