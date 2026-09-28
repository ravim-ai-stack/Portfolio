export type BulletPart = {
  text: string;
  strong?: boolean;
};

export type ExperienceRole = {
  title: string;
  company: string;
  duration: string;
  logo?: string;
  bullets: BulletPart[][];
};

export const EXPERIENCE: ExperienceRole[] = [
  {
    title: "GenAI Developer",
    company: "Data Pattern",
    duration: "Aug 2026 – Present",
    logo: "/img/datapattern.png",
    bullets: [
      [
        { text: "Contribute to the development of AI agents and LLM-integrated workflows, building on the " },
        { text: "Databricks Medallion architecture", strong: true },
        { text: " pipelines from the internship phase." },
      ],
      [
        { text: "Assist in designing and implementing " },
        { text: "RAG pipelines", strong: true },
        { text: " and " },
        { text: "LangChain", strong: true },
        { text: "-based agents to automate data modeling, validation, and reporting workflows within the Databricks ecosystem." },
      ],
      [
        { text: "Develop and maintain " },
        { text: "RESTful APIs", strong: true },
        { text: " supporting AI-driven automation, deployed and orchestrated on Databricks." },
      ],
      [
        { text: "Collaborate with senior engineers and cross-functional teams to translate business requirements into GenAI features, improving pipeline reliability." },
      ],
      [
        { text: "Support " },
        { text: "model evaluation", strong: true },
        { text: " and " },
        { text: "prompt engineering", strong: true },
        { text: " efforts to improve accuracy and robustness of deployed LLM-based agents." },
      ],
    ],
  },
  {
    title: "GenAI Intern",
    company: "Data Pattern",
    duration: "Apr 2026 – Jun 2026",
    logo: "/img/datapattern.png",
    bullets: [
      [
        { text: "Engineered " },
        { text: "Gold and Silver layer pipelines", strong: true },
        { text: " within a Databricks Medallion architecture, transforming raw enterprise data into structured, analytics-ready datasets for downstream AI workflows." },
      ],
      [
        { text: "Delivered " },
        { text: "50+ RESTful APIs", strong: true },
        { text: " across 12 automated workflows, enabling reliable end-to-end orchestration for enterprise data and AI pipelines." },
      ],
      [
        { text: "Built an " },
        { text: "AI-powered checksum validation agent", strong: true },
        { text: " to automate data integrity verification, reducing dependency on manual checks and strengthening pipeline trustworthiness." },
      ],
      [
        { text: "Developed an " },
        { text: "AI data modeling agent", strong: true },
        { text: " using LLMs to automate schema design and structured data generation, accelerating pipeline development cycles." },
      ],
      [
        { text: "Implemented systematic data validation across pipeline stages, improving accuracy, consistency, and audit-readiness of enterprise datasets." },
      ],
      [
        { text: "Partnered with cross-functional engineering teams in an agile, " },
        { text: "Git", strong: true },
        { text: "-based workflow to ship production-oriented AI and data features." },
      ],
    ],
  },
  {
    title: "Junior Odoo Developer",
    company: "BizTechnovations Private Limited",
    duration: "Jun 2024 – Jul 2025",
    logo: "/img/biztechnovations.png",
    bullets: [
      [
        { text: "Engineered backend logic and " },
        { text: "RESTful APIs", strong: true },
        { text: " in " },
        { text: "Python", strong: true },
        { text: " to extend Odoo ERP functionality, aligning system behavior with enterprise client requirements." },
      ],
      [
        { text: "Customized and maintained " },
        { text: "Odoo ERP", strong: true },
        { text: " modules supporting production-grade enterprise software used across client business operations." },
      ],
      [
        { text: "Optimized " },
        { text: "PostgreSQL", strong: true },
        { text: " queries and backend processes, improving application performance and system reliability." },
      ],
      [
        { text: "Automated recurring business workflows, reducing manual operational effort and streamlining processes for end users." },
      ],
      [
        { text: "Built and maintained third-party service integrations, ensuring consistent, reliable data synchronization across enterprise systems." },
      ],
    ],
  },
];
