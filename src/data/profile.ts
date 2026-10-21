import type { Profile } from "@/types/portfolio";

export const profile: Profile = {
  name: "Jonathas Oliveira",
  role: {
    pt: "Engenheiro de Software",
    en: "Software Engineer",
  },
  tagline: {
    pt: "Construo experiências digitais rápidas, acessíveis e bem acabadas.",
    en: "I build fast, accessible, and polished digital experiences.",
  },
  bio: {
    pt: "Engenheiro de software com **2+ anos de experiência**, especializado em **Python**, automação, extração de dados em larga escala e sistemas distribuídos.\n\nAtualmente trabalho com pipelines de extração e processamento de dados, focando em performance, escalabilidade e redução de custo operacional. Entre os principais resultados alcançados estão:\n\n- **Redução de até 90% no tempo de execução** de processos de extração\n- Otimização de fluxos com **mais de 100 mil itens**, reduzindo de **9 para 4 requests por item**\n- **Redução superior a 50% no consumo de infraestrutura** através de melhorias de arquitetura e fluxo de requisições\n\nTambém possuo experiência no desenvolvimento de aplicações backend e frontend utilizando tecnologias como **TypeScript**, **Django**, **React** e **Next.js**.\n\nNo tempo livre, contribuo com a comunidade de modding realizando localização de jogos de inglês para português, acumulando atualmente **100 mil downloads**. A partir dessa experiência, desenvolvi o **Icosa**, uma aplicação desktop construída com **Electron + TypeScript** para auxiliar na tradução de arquivos do jogo Baldur's Gate 3.\n\nO projeto já ajudou **500+ tradutores ao redor do mundo**, oferecendo ferramentas para gerenciamento de traduções, dicionários e fluxos de localização.",
    en: "Software engineer with **2+ years of experience**, specialized in **Python**, automation, large-scale data extraction, and distributed systems.\n\nI currently work with data extraction and processing pipelines, focusing on performance, scalability, and operational cost reduction. Key results include:\n\n- **Up to 90% reduction in execution time** for extraction processes\n- Optimized flows with **more than 100 thousand items**, reducing from **9 to 4 requests per item**\n- **Over 50% reduction in infrastructure consumption** through architecture and request-flow improvements\n\nI also have experience building backend and frontend applications with technologies like **TypeScript**, **Django**, **React**, and **Next.js**.\n\nIn my free time, I contribute to the modding community by localizing games from English to Portuguese, currently reaching **100 thousand downloads**. From that experience, I built **Icosa**, a desktop application made with **Electron + TypeScript** to support translation workflows for Baldur's Gate 3 files.\n\nThe project has already helped **500+ translators around the world**, offering tools for translation management, dictionaries, and localization workflows.",
  },
  location: "Brasil",
  birthDate: "2001-07-17",
  socials: [
    {
      id: "github",
      label: "GitHub",
      href: "https://github.com/kaironn2",
      icon: "github",
    },
    {
      id: "email",
      label: "kaironn.dev@gmail.com",
      href: "mailto:kaironn.dev@gmail.com",
      icon: "email",
    },
    {
      id: "instagram",
      label: "@kaironn2",
      href: "https://www.instagram.com/kaironn2",
      icon: "instagram",
    },
    {
      id: "twitter",
      label: "@kaironn2",
      href: "https://twitter.com/kaironn2",
      icon: "twitter",
    },
    {
      id: "nexus",
      label: "Nexus Mods",
      href: "https://www.nexusmods.com/profile/kaironn2/mods",
      icon: "nexus",
    },
    {
      id: "steam",
      label: "kaironn1",
      href: "https://steamcommunity.com/id/kaironn1/",
      icon: "steam",
    },
  ],
} as const;
