import {
  Bot,
  Code2,
  Database,
  Server,
  Sparkles,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export type TechCategory = {
  key: string;
  title: string;
  icon: LucideIcon;
  tags: string[];
};

export const TECH_CATEGORIES: TechCategory[] = [
  {
    key: "Languages",
    title: "Languages",
    icon: Code2,
    tags: ["Python", "SQL", "XML", "PySpark"],
  },
  {
    key: "AI / Generative AI",
    title: "AI / Generative AI",
    icon: Sparkles,
    tags: [
      "Generative AI",
      "AI Agents",
      "Prompt Engineering",
      "Model Evaluation",
      "AI Automation",
      "Workflow Automation",
    ],
  },
  {
    key: "LLM Technologies",
    title: "LLM Technologies",
    icon: Bot,
    tags: [
      "LangChain",
      "OpenAI API",
      "Large Language Models (LLMs)",
      "Retrieval-Augmented Generation (RAG)",
      "LLM Integration",
    ],
  },
  {
    key: "Backend Engineering",
    title: "Backend Engineering",
    icon: Server,
    tags: ["FastAPI", "Flask", "RESTful API Design", "API Integration", "Odoo Framework"],
  },
  {
    key: "Data Engineering",
    title: "Data Engineering",
    icon: Database,
    tags: ["Databricks (Medallion Architecture)", "Metadata Generation", "AI Pipelines"],
  },
  {
    key: "Databases & Tools",
    title: "Databases & Tools",
    icon: Wrench,
    tags: ["PostgreSQL", "Git", "GitHub", "Data Validation & QA"],
  },
];

export const TECH_FILTERS = ["All", ...TECH_CATEGORIES.map((category) => category.key)];
