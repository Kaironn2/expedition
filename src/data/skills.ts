export interface SkillEntry {
  readonly name: string;
  readonly familiarity: number;
}

export interface SkillCategory {
  readonly id: string;
  readonly num: string;
  readonly name: string;
  readonly items: readonly SkillEntry[];
}

export const skillCategories: readonly SkillCategory[] = [
  {
    id: "backend",
    num: "01",
    name: "Backend",
    items: [
      { name: "Python", familiarity: 95 },
      { name: "FastAPI", familiarity: 87 },
      { name: "Django", familiarity: 81 },
      { name: "REST API Design", familiarity: 91 },
      { name: "Pydantic", familiarity: 85 },
      { name: "SQLAlchemy", familiarity: 78 },
    ],
  },
  {
    id: "frontend",
    num: "02",
    name: "Frontend",
    items: [
      { name: "TypeScript", familiarity: 81 },
      { name: "React", familiarity: 79 },
      { name: "Next.js", familiarity: 78 },
      { name: "Electron", familiarity: 63 },
      { name: "Tailwind CSS", familiarity: 77 },
    ],
  },
  {
    id: "data-infra",
    num: "03",
    name: "Data & Infra",
    items: [
      { name: "PostgreSQL", familiarity: 81 },
      { name: "Redis", familiarity: 79 },
      { name: "Docker", familiarity: 83 },
      { name: "Nginx", familiarity: 76 },
      { name: "Traefik", familiarity: 71 },
      { name: "AWS", familiarity: 51 },
    ],
  },
  {
    id: "scraping-rpa",
    num: "04",
    name: "Scraping & RPA",
    items: [
      { name: "Scrapy", familiarity: 96 },
      { name: "Requests / HTTPX", familiarity: 92 },
      { name: "lxml", familiarity: 87 },
      { name: "Playwright", familiarity: 77 },
      { name: "Distributed Crawling", familiarity: 79 },
      { name: "ETL Pipelines", familiarity: 74 },
    ],
  },
  {
    id: "architecture-messaging",
    num: "05",
    name: "Architecture & Messaging",
    items: [
      { name: "Distributed Systems", familiarity: 66 },
      { name: "Task Queues", familiarity: 74 },
      { name: "System Design", familiarity: 64 },
      { name: "Celery", familiarity: 71 },
      { name: "RabbitMQ", familiarity: 69 },
    ],
  },
  {
    id: "tools",
    num: "06",
    name: "Tooling & Enviroment",
    items: [
      { name: "Git", familiarity: 91 },
      { name: "Linux", familiarity: 82 },
      { name: "Pytest", familiarity: 81 },
      { name: "uv", familiarity: 86 },
      { name: "Alembic", familiarity: 72 },
      { name: "CI/CD", familiarity: 71 },
    ],
  },
];
