import type { Project } from "@/types/portfolio";

export const projects: readonly Project[] = [
  {
    id: "proj-portfolio",
    name: {
      pt: "expedition",
      en: "expedition",
    },
    iconKind: "expedition-33",
    iconLabel: "33",
    summary: {
      pt: "Portfólio narrativo com rotas localizadas e visual tematizado.",
      en: "Narrative portfolio with localized routes and themed visuals.",
    },
    longSummary: {
      pt: "Portfólio narrativo usando como tema base Clair Obscur: Expedition 33, com animações sutis, vetores criados no Illustrator e referências a jogos além do próprio Clair Obscur.",
      en: "Narrative portfolio themed after Clair Obscur: Expedition 33, with subtle animations, hand-drawn vectors crafted in Illustrator, and nods to other games beyond Clair Obscur itself.",
    },
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind",
      "i18n",
      "Biome",
      "Vercel",
      "Cloudflare",
      "Illustrator",
    ],
    links: [{ kind: "github", url: "https://github.com/Kaironn2/expedition" }],
  },
  {
    id: "proj-icosa",
    name: {
      pt: "Icosa",
      en: "Icosa",
    },
    iconKind: "icosa",
    summary: {
      pt: "Ferramenta desktop para tradutores de mods de Baldur's Gate 3 - gerencia arquivos, dicionários e fluxos de localização.",
      en: "Desktop tool for Baldur's Gate 3 mod translators - manages files, dictionaries, and localization workflows.",
    },
    longSummary: {
      pt: "Construído a partir da experiência com localização de jogos e da comunidade de modding. Centraliza arquivos, termos e traduções em um fluxo único. Minhas traduções feitas com a ferramenta já passam de 100k de downloads e a própria Icosa já auxiliou mais de 500 tradutores ao redor do mundo.",
      en: "Built from hands-on game localization and modding community experience. Centralizes files, terminology, and translations in a single workflow. Translations released with the tool surpass 100k downloads and Icosa itself has supported over 500 translators worldwide.",
    },
    stack: [
      "Electron",
      "TypeScript",
      "React",
      "Tailwind",
      "i18n",
      "SQLite",
      "Drizzle",
      "Illustrator",
      "Photoshop",
    ],
    links: [
      { kind: "github", url: "https://github.com/Kaironn2/BG3-Mod-Translator-Desktop" },
      { kind: "nexus", url: "https://www.nexusmods.com/baldursgate3/mods/15976" },
    ],
  },
  {
    id: "proj-maid-cafe",
    name: {
      pt: "Maid Café Localização PT-BR",
      en: "Maid Café Localization PT-BR",
    },
    iconKind: "maid-cafe",
    summary: {
      pt: "Tradução de fã de Maid Cafe on Electric Street, com ferramenta própria em Go.",
      en: "Fan translation of Maid Cafe on Electric Street, with a custom Go tool.",
    },
    longSummary: {
      pt: "Mais de 11 mil textos traduzidos direto nos assets do jogo, sem mod loader. A ferramenta em Go extrai, sincroniza e aplica a tradução, e o instalador encontra o jogo na Steam no Windows, Linux e macOS.",
      en: "Over 11k texts translated directly in the game's assets, with no mod loader. The Go tool extracts, syncs, and applies the translation, and the installer finds the game on Steam across Windows, Linux, and macOS.",
    },
    stack: ["Go", "Unity", "IL2CPP", "JavaScript", "GitHub Actions"],
    links: [
      { kind: "github", url: "https://github.com/Kaironn2/maid-cafe-loc" },
      { kind: "nexus", url: "https://www.nexusmods.com/maidcafeonelectricstreet/mods/1" },
    ],
  },
  {
    id: "proj-secret",
    name: {
      pt: "Em breve",
      en: "Coming soon",
    },
    iconKind: "lune-glyph",
    summary: {
      pt: "",
      en: "",
    },
    longSummary: {
      pt: "Entendo a curiosidade, mas é segredo o que vem aí...",
      en: "I get the curiosity, but what is coming next is a secret...",
    },
    stack: [],
    links: [],
    placeholder: true,
    secretLevel: "?",
  },
] as const;
