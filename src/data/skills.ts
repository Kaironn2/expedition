import type { LocalizedString } from "@/types/portfolio";

export type SkillTier = 1 | 2 | 3 | 4;

export type SkillSourceKind = "prod" | "proj" | "study";

export interface SkillSource {
  readonly id: string;
  readonly name: LocalizedString;
  readonly kind: SkillSourceKind;
  readonly year?: string;
}

export interface SkillUse {
  readonly source: string;
  readonly note?: LocalizedString;
  readonly details?: readonly LocalizedString[];
}

export interface SkillEntry {
  readonly name: string;
  readonly tier: SkillTier;
  readonly since?: string;
  readonly description: LocalizedString;
  readonly uses: readonly SkillUse[];
}

export interface SkillCategory {
  readonly id: string;
  readonly num: string;
  readonly name: string;
  readonly items: readonly SkillEntry[];
}

export const skillSources: readonly SkillSource[] = [
  {
    id: "sangue-latino",
    name: { pt: "Sangue Latino", en: "Sangue Latino" },
    kind: "prod",
    year: "2024",
  },
  {
    id: "ong-gabriel",
    name: { pt: "ONG Gabriel", en: "ONG Gabriel" },
    kind: "prod",
    year: "2025",
  },
  {
    id: "data-opportunity",
    name: { pt: "Data Opportunity", en: "Data Opportunity" },
    kind: "prod",
    year: "2025",
  },
  {
    id: "expedition",
    name: { pt: "Expedition", en: "Expedition" },
    kind: "proj",
    year: "2025",
  },
  { id: "icosa", name: { pt: "Icosa", en: "Icosa" }, kind: "proj", year: "2025" },
  { id: "study", name: { pt: "Estudos pessoais", en: "Personal study" }, kind: "study" },
];

export const skillCategories: readonly SkillCategory[] = [
  {
    id: "frontend",
    num: "01",
    name: "Frontend",
    items: [
      {
        name: "TypeScript",
        tier: 3,
        since: "2025-09",
        description: {
          pt: "Tipagem de ponta a ponta nos frontends Next.js e no app desktop Icosa.",
          en: "End-to-end typing across Next.js frontends and the Icosa desktop app.",
        },
        uses: [
          {
            source: "ong-gabriel",
            note: {
              pt: "Frontend SPA/SSR tipado da plataforma.",
              en: "Typed SPA/SSR frontend for the platform.",
            },
          },
          {
            source: "expedition",
            note: { pt: "Camada de conteúdo tipada.", en: "Typed content layer." },
            details: [
              {
                pt: "Conteúdo pt/en validado em tempo de build",
                en: "pt/en content validated at build time",
              },
            ],
          },
          {
            source: "icosa",
            note: {
              pt: "Processos main e renderer do Electron.",
              en: "Electron main and renderer processes.",
            },
            details: [
              { pt: "Parser de arquivos de localização", en: "Localization file parser" },
              { pt: "Dicionários locais tipados", en: "Typed local dictionaries" },
            ],
          },
        ],
      },
      {
        name: "React",
        tier: 3,
        since: "2025-09",
        description: {
          pt: "Componentes e estado em interfaces SPA/SSR.",
          en: "Components and state in SPA/SSR interfaces.",
        },
        uses: [
          {
            source: "ong-gabriel",
            note: { pt: "Interface da plataforma da ONG.", en: "Non-profit platform UI." },
          },
          {
            source: "expedition",
            note: { pt: "Componentes do portfólio.", en: "Portfolio components." },
          },
        ],
      },
      {
        name: "Next.js",
        tier: 3,
        since: "2025-09",
        description: {
          pt: "App Router, rotas localizadas e SSR em produção.",
          en: "App Router, localized routes and SSR in production.",
        },
        uses: [
          { source: "ong-gabriel", note: { pt: "SSR em produção.", en: "SSR in production." } },
          {
            source: "expedition",
            note: { pt: "Next.js 15 com App Router.", en: "Next.js 15 with App Router." },
            details: [{ pt: "Rotas localizadas pt/en", en: "Localized pt/en routes" }],
          },
        ],
      },
      {
        name: "JavaScript",
        tier: 3,
        since: "2024-05",
        description: {
          pt: "De automações operacionais e engenharia reversa de aplicações web a interfaces.",
          en: "From operational automations and web app reverse engineering to interfaces.",
        },
        uses: [
          {
            source: "sangue-latino",
            note: { pt: "Google Apps Script.", en: "Google Apps Script." },
            details: [
              {
                pt: "Planilhas integradas em tempo real",
                en: "Real-time integrated spreadsheets",
              },
            ],
          },
          { source: "ong-gabriel" },
          {
            source: "data-opportunity",
            note: {
              pt: "Engenharia reversa de aplicações web para mapear rotas e requisições na extração de dados.",
              en: "Reverse engineering web apps to map routes and requests for data extraction.",
            },
          },
          { source: "expedition" },
          { source: "icosa" },
        ],
      },
      {
        name: "Tailwind CSS",
        tier: 3,
        since: "2025-06",
        description: {
          pt: "Estilização utilitária em plataformas web e no app desktop Icosa.",
          en: "Utility-first styling across web platforms and the Icosa desktop app.",
        },
        uses: [
          {
            source: "ong-gabriel",
            note: { pt: "Estilização da plataforma da ONG.", en: "Non-profit platform styling." },
          },
          {
            source: "expedition",
            note: { pt: "Tema visual do portfólio.", en: "Portfolio visual theme." },
          },
          {
            source: "icosa",
            note: { pt: "Interface do app desktop.", en: "Desktop app interface." },
          },
        ],
      },
      {
        name: "Electron",
        tier: 2,
        since: "2025-06",
        description: {
          pt: "App desktop offline para tradução de mods de Baldur's Gate 3.",
          en: "Offline desktop app for translating Baldur's Gate 3 mods.",
        },
        uses: [
          {
            source: "icosa",
            note: {
              pt: "App desktop com sincronização offline.",
              en: "Desktop app with offline sync.",
            },
            details: [
              { pt: "Gerenciamento de arquivos de mods", en: "Mod file management" },
              { pt: "Fluxos de localização", en: "Localization workflows" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "backend",
    num: "02",
    name: "Backend",
    items: [
      {
        name: "Python",
        tier: 3,
        since: "2024-05",
        description: {
          pt: "Linguagem principal: automações, crawlers, APIs e extração de dados em larga escala.",
          en: "Main language: automations, crawlers, APIs and large-scale data extraction.",
        },
        uses: [
          {
            source: "sangue-latino",
            note: {
              pt: "Automações de logística, atendimento e finanças.",
              en: "Logistics, support and finance automations.",
            },
            details: [
              {
                pt: "Web scraping para coleta de informações logísticas",
                en: "Web scraping to collect logistics data",
              },
            ],
          },
          {
            source: "data-opportunity",
            note: {
              pt: "Sistemas de extração em larga escala.",
              en: "Large-scale extraction systems.",
            },
            details: [
              {
                pt: "Crawlers e tooling personalizado para o time",
                en: "Crawlers and custom team tooling",
              },
              {
                pt: "Webhooks e APIs com Django e FastAPI",
                en: "Webhooks and APIs with Django and FastAPI",
              },
              {
                pt: "Validação e normalização de dados",
                en: "Data validation and normalization",
              },
            ],
          },
        ],
      },
      {
        name: "FastAPI",
        tier: 3,
        since: "2026-03",
        description: {
          pt: "APIs e webhooks de integração para sistemas de extração.",
          en: "Integration APIs and webhooks for extraction systems.",
        },
        uses: [
          {
            source: "data-opportunity",
            note: { pt: "APIs e webhooks de integração.", en: "Integration APIs and webhooks." },
            details: [
              {
                pt: "Webhook para recepção de notificações de serviço externo",
                en: "Webhook receiving notifications from an external service",
              },
            ],
          },
        ],
      },
      {
        name: "Django",
        tier: 2,
        since: "2025-09",
        description: {
          pt: "APIs REST, webhooks e painel administrativo.",
          en: "REST APIs, webhooks and admin panels.",
        },
        uses: [
          { source: "ong-gabriel", note: { pt: "API REST e admin.", en: "REST API and admin." } },
          {
            source: "data-opportunity",
            note: { pt: "Webhooks e APIs internas.", en: "Webhooks and internal APIs." },
          },
        ],
      },
      {
        name: "REST",
        tier: 3,
        since: "2025-09",
        description: {
          pt: "Desenho e integração de APIs internas e externas.",
          en: "Design and integration of internal and external APIs.",
        },
        uses: [
          { source: "ong-gabriel", note: { pt: "APIs da plataforma.", en: "Platform APIs." } },
          {
            source: "data-opportunity",
            note: {
              pt: "APIs, webhooks e integração com APIs externas.",
              en: "APIs, webhooks and external API integration.",
            },
          },
        ],
      },
      {
        name: "Pydantic",
        tier: 3,
        since: "2026-03",
        description: {
          pt: "Modelagem e validação de dados em serviços Python.",
          en: "Data modeling and validation in Python services.",
        },
        uses: [{ source: "data-opportunity" }],
      },
      {
        name: "SQLAlchemy",
        tier: 3,
        since: "2025-06",
        description: {
          pt: "ORM e camada de acesso a dados em aplicações Python.",
          en: "ORM and data access layer for Python applications.",
        },
        uses: [
          { source: "data-opportunity" },
          {
            source: "icosa",
            note: {
              pt: "Persistência na versão inicial.",
              en: "Persistence in the initial version.",
            },
          },
        ],
      },
      {
        name: "Go",
        tier: 1,
        since: "2026-08",
        description: {
          pt: "Estudos da linguagem para serviços backend.",
          en: "Studying the language for backend services.",
        },
        uses: [{ source: "study" }],
      },
    ],
  },
  {
    id: "data-infra",
    num: "03",
    name: "Data & Infra",
    items: [
      {
        name: "PostgreSQL",
        tier: 3,
        since: "2025-09",
        description: {
          pt: "Banco relacional principal em produção.",
          en: "Main relational database in production.",
        },
        uses: [
          {
            source: "ong-gabriel",
            note: { pt: "Banco da plataforma da ONG.", en: "Non-profit platform database." },
          },
          {
            source: "data-opportunity",
            note: {
              pt: "Inserção e consumo de dados em diversas aplicações.",
              en: "Data ingestion and consumption across several applications.",
            },
          },
        ],
      },
      {
        name: "SQL",
        tier: 3,
        since: "2025-06",
        description: {
          pt: "Modelagem e consultas para ingestão e normalização de dados.",
          en: "Modeling and queries for data ingestion and normalization.",
        },
        uses: [{ source: "ong-gabriel" }, { source: "data-opportunity" }, { source: "icosa" }],
      },
      {
        name: "Redis",
        tier: 3,
        since: "2025-09",
        description: {
          pt: "Cache e controle de rate limit em produção.",
          en: "Caching and rate limiting in production.",
        },
        uses: [
          {
            source: "ong-gabriel",
            note: {
              pt: "Cache dos conteúdos mais acessados e listas de rate limit.",
              en: "Caching for the most accessed content and rate limit lists.",
            },
          },
          {
            source: "data-opportunity",
            note: { pt: "Cache e rate limit com TLS.", en: "Caching and rate limiting over TLS." },
          },
        ],
      },
      {
        name: "Docker",
        tier: 3,
        since: "2025-09",
        description: {
          pt: "Stacks containerizadas com Compose, do desenvolvimento à produção.",
          en: "Containerized Compose stacks, from development to production.",
        },
        uses: [
          {
            source: "ong-gabriel",
            note: {
              pt: "Stack containerizada com Docker Compose.",
              en: "Containerized Docker Compose stack.",
            },
          },
          {
            source: "data-opportunity",
            note: { pt: "Containers dos pipelines.", en: "Pipeline containers." },
          },
        ],
      },
      {
        name: "Nginx",
        tier: 2,
        since: "2025-09",
        description: {
          pt: "Servidor web e reverse proxy em produção.",
          en: "Web server and reverse proxy in production.",
        },
        uses: [{ source: "ong-gabriel" }, { source: "data-opportunity" }],
      },
      {
        name: "Digital Ocean",
        tier: 2,
        since: "2026-03",
        description: {
          pt: "Infraestrutura de produção dos pipelines de extração.",
          en: "Production infrastructure for extraction pipelines.",
        },
        uses: [{ source: "data-opportunity" }],
      },
      {
        name: "AWS",
        tier: 2,
        description: {
          pt: "Serviços de computação e armazenamento em nuvem.",
          en: "Cloud compute and storage services.",
        },
        uses: [{ source: "study" }],
      },
    ],
  },
  {
    id: "scraping-rpa",
    num: "04",
    name: "Scraping & RPA",
    items: [
      {
        name: "Scrapy",
        tier: 3,
        since: "2025-10",
        description: {
          pt: "Extração e crawling de milhões de registros diariamente.",
          en: "Extracting and crawling millions of records daily.",
        },
        uses: [
          {
            source: "data-opportunity",
            note: {
              pt: "Engenharia de spiders em produção.",
              en: "Production spider engineering.",
            },
            details: [
              { pt: "Milhões de registros por dia", en: "Millions of records per day" },
              { pt: "Performance e confiabilidade", en: "Performance and reliability" },
              { pt: "Rotinas de validação na ingestão", en: "Ingestion validation routines" },
            ],
          },
        ],
      },
      {
        name: "curl-cffi",
        tier: 3,
        since: "2025-10",
        description: {
          pt: "Requisições com fingerprint de navegador (TLS/HTTP) na extração de dados.",
          en: "Browser fingerprint (TLS/HTTP) impersonation in data extraction requests.",
        },
        uses: [{ source: "data-opportunity" }],
      },
      {
        name: "lxml",
        tier: 3,
        since: "2024-05",
        description: {
          pt: "Parsing de HTML e XML em automações e extração.",
          en: "HTML and XML parsing in automations and extraction.",
        },
        uses: [
          {
            source: "sangue-latino",
            note: { pt: "Automações operacionais.", en: "Operational automations." },
          },
        ],
      },
      {
        name: "Selenium",
        tier: 3,
        since: "2024-05",
        description: {
          pt: "Automação de navegador para RPA e coletas que exigem uma sessão real.",
          en: "Browser automation for RPA and collection that requires a real session.",
        },
        uses: [
          {
            source: "sangue-latino",
            note: {
              pt: "Automação de rotinas operacionais.",
              en: "Operational routine automation.",
            },
          },
          {
            source: "data-opportunity",
            note: {
              pt: "Coleta de cookies e RPA com navegador.",
              en: "Cookie collection and browser-based RPA.",
            },
          },
        ],
      },
      {
        name: "Playwright",
        tier: 3,
        since: "2024-05",
        description: {
          pt: "Automação de navegador para páginas dinâmicas e fluxos complexos.",
          en: "Browser automation for dynamic pages and complex flows.",
        },
        uses: [
          {
            source: "sangue-latino",
            note: {
              pt: "Automação de rotinas operacionais.",
              en: "Operational routine automation.",
            },
          },
          {
            source: "data-opportunity",
            note: {
              pt: "Coleta de cookies e RPA com navegador.",
              en: "Cookie collection and browser-based RPA.",
            },
          },
        ],
      },
      {
        name: "Distributed Crawling",
        tier: 3,
        since: "2025-10",
        description: {
          pt: "Extração em larga escala com foco em throughput e uso de infraestrutura.",
          en: "Large-scale extraction focused on throughput and infrastructure usage.",
        },
        uses: [
          {
            source: "data-opportunity",
            note: {
              pt: "Otimização de pipelines de scraping.",
              en: "Scraping pipeline optimization.",
            },
            details: [
              { pt: "Execuções até 90% mais rápidas", en: "Runs up to 90% faster" },
              {
                pt: "Fluxo de 104 mil itens com menos requisições",
                en: "104k-item workflow with fewer requests",
              },
            ],
          },
        ],
      },
      {
        name: "ETL Pipelines",
        tier: 2,
        since: "2024-05",
        description: {
          pt: "Extração, transformação e carga de dados operacionais.",
          en: "Extraction, transformation and loading of operational data.",
        },
        uses: [
          {
            source: "sangue-latino",
            note: { pt: "ETLs de auditoria.", en: "Auditing ETLs." },
            details: [{ pt: "Notas fiscais e frete", en: "Invoices and freight" }],
          },
          {
            source: "data-opportunity",
            note: {
              pt: "Validação e normalização na ingestão.",
              en: "Ingestion validation and normalization.",
            },
          },
        ],
      },
    ],
  },
  {
    id: "architecture-messaging",
    num: "05",
    name: "Architecture & Messaging",
    items: [
      {
        name: "Distributed Systems",
        tier: 2,
        since: "2026-04",
        description: {
          pt: "Fundamentos de sistemas distribuídos e comunicação entre serviços.",
          en: "Distributed systems fundamentals and service-to-service communication.",
        },
        uses: [{ source: "study" }],
      },
      {
        name: "Task Queues",
        tier: 2,
        since: "2026-04",
        description: {
          pt: "Processamento assíncrono com filas de tarefas.",
          en: "Asynchronous processing with task queues.",
        },
        uses: [{ source: "study" }],
      },
      {
        name: "System Design",
        tier: 2,
        since: "2026-04",
        description: {
          pt: "Desenho de arquiteturas escaláveis e de fácil manutenção.",
          en: "Designing scalable and maintainable architectures.",
        },
        uses: [{ source: "study" }],
      },
      {
        name: "Celery",
        tier: 2,
        since: "2026-04",
        description: {
          pt: "Workers e tarefas assíncronas em Python.",
          en: "Workers and asynchronous tasks in Python.",
        },
        uses: [{ source: "study" }],
      },
      {
        name: "RabbitMQ",
        tier: 2,
        since: "2026-04",
        description: {
          pt: "Mensageria e filas entre serviços.",
          en: "Messaging and queues between services.",
        },
        uses: [{ source: "study" }],
      },
    ],
  },
  {
    id: "tooling",
    num: "06",
    name: "Tooling & Environment",
    items: [
      {
        name: "Git",
        tier: 3,
        since: "2025-06",
        description: {
          pt: "Versionamento em todos os projetos e no trabalho em equipe.",
          en: "Version control across every project and team workflow.",
        },
        uses: [
          { source: "ong-gabriel" },
          { source: "data-opportunity" },
          { source: "expedition" },
          { source: "icosa" },
        ],
      },
      {
        name: "Linux",
        tier: 3,
        since: "2025-09",
        description: {
          pt: "Servidores e ambientes de deploy das stacks containerizadas.",
          en: "Servers and deployment environments for containerized stacks.",
        },
        uses: [{ source: "ong-gabriel" }, { source: "data-opportunity" }],
      },
      {
        name: "Pytest",
        tier: 3,
        since: "2025-10",
        description: {
          pt: "Testes automatizados em projetos Python.",
          en: "Automated testing in Python projects.",
        },
        uses: [{ source: "data-opportunity" }],
      },
      {
        name: "uv",
        tier: 3,
        since: "2025-09",
        description: {
          pt: "Gerenciamento de ambientes e dependências Python.",
          en: "Python environment and dependency management.",
        },
        uses: [{ source: "ong-gabriel" }, { source: "data-opportunity" }],
      },
      {
        name: "Alembic",
        tier: 2,
        description: {
          pt: "Migrações de schema com SQLAlchemy.",
          en: "Schema migrations with SQLAlchemy.",
        },
        uses: [{ source: "study" }],
      },
      {
        name: "CI/CD",
        tier: 2,
        since: "2025-09",
        description: {
          pt: "Pipelines de integração e entrega contínuas para testes e deploy.",
          en: "Continuous integration and delivery pipelines for testing and deployment.",
        },
        uses: [
          {
            source: "ong-gabriel",
            note: { pt: "Testes e deploy automatizados.", en: "Automated testing and deployment." },
          },
          {
            source: "data-opportunity",
            note: { pt: "Testes e deploy automatizados.", en: "Automated testing and deployment." },
          },
        ],
      },
    ],
  },
];
