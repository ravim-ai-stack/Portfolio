const SKILLS = [
  "GenAI",
  "RAG",
  "LLM Agents",
  "Databricks",
  "PySpark",
  "Python",
  "LangChain",
  "Vector Databases",
  "MLOps",
  "Prompt Engineering",
  "Data Pipelines",
  "Cloud AI",
];

export function SkillsTicker() {
  const items = [...SKILLS, ...SKILLS];

  return (
    <div className="group w-full overflow-hidden border-y border-border bg-secondary/60 py-3">
      <div className="flex w-max animate-marquee gap-10 group-hover:[animation-play-state:paused]">
        {items.map((skill, i) => (
          <span
            key={`${skill}-${i}`}
            className="whitespace-nowrap text-sm font-medium text-muted-foreground"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
