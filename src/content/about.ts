import { Bot, Database, Server, ShieldCheck, type LucideIcon } from "lucide-react";

export type AboutFocusArea = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const ABOUT_FOCUS_AREAS: AboutFocusArea[] = [
  {
    icon: Bot,
    title: "AI Agents & LLM Automation",
    description:
      "Designing and deploying LLM-integrated agents that automate data modeling, validation, and reporting workflows.",
  },
  {
    icon: Database,
    title: "RAG Pipelines",
    description:
      "Building Retrieval-Augmented Generation systems with LangChain and OpenAI API for accurate, context-aware responses.",
  },
  {
    icon: Server,
    title: "Backend API Engineering",
    description:
      "Developing scalable RESTful APIs with Python and FastAPI, powering AI-driven automation across enterprise systems.",
  },
  {
    icon: ShieldCheck,
    title: "Data Validation & Integrity",
    description:
      "Building AI-powered checksum and validation agents that reduce manual checks and strengthen pipeline trustworthiness.",
  },
];
