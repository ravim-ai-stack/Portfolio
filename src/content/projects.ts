export type Project = {
  number: string;
  title: string;
  metric: string;
  problem: string;
  solution: string;
  impact: string;
  tags: string[];
};

export const PROJECTS: Project[] = [
  {
    number: "01",
    title: "AI Agent for Data Modeling",
    metric: "Faster Schema Design",
    problem:
      "Designing structured data pipelines required significant manual effort to model schemas and map raw enterprise data by hand.",
    solution:
      "Built an LLM-based agent that automates data modeling and schema generation, translating requirements directly into structured schemas.",
    impact:
      "Reduced the manual effort typically required to design structured data pipelines, accelerating development cycles.",
    tags: ["LangChain", "LLMs", "Python", "Data Modeling"],
  },
  {
    number: "02",
    title: "Brand Sentiment Analysis",
    metric: "Actionable Insights",
    problem:
      "Brands lacked a systematic way to evaluate large volumes of brand-related content and surface meaningful sentiment trends.",
    solution:
      "Developed a text analytics system applying NLP techniques to classify sentiment and identify patterns across brand content.",
    impact:
      "Delivered actionable audience insight to support brand and content strategy decisions.",
    tags: ["NLP", "Python", "Sentiment Analysis", "Text Analytics"],
  },
  {
    number: "03",
    title: "Smart Parking System",
    metric: "Streamlined Operations",
    problem:
      "Manual coordination of parking slot allocation led to inefficient real-time monitoring and management.",
    solution:
      "Designed a software-based smart parking management solution to automate slot allocation and monitoring.",
    impact:
      "Reduced manual coordination and streamlined real-time slot allocation and monitoring.",
    tags: ["Python", "Automation", "Systems Design"],
  },
];
