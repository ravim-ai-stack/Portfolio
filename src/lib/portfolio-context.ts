import { ABOUT_FOCUS_AREAS } from "@/content/about";
import { EXPERIENCE, type BulletPart, type ExperienceRole } from "@/content/experience";
import { PROJECTS } from "@/content/projects";
import { EDUCATION } from "@/content/education";
import { CERTIFICATIONS } from "@/content/certifications";
import { TECH_CATEGORIES } from "@/content/tech-stack";
import { CONTACT_LINKS, LOCATION } from "@/content/contact";

function bulletLineToText(line: BulletPart[]): string {
  return line.map((part) => part.text).join("");
}

function roleToText(role: ExperienceRole): string {
  const bullets = role.bullets.map((line) => `  - ${bulletLineToText(line)}`).join("\n");
  return `${role.title} — ${role.company} (${role.duration})\n${bullets}`;
}

function buildPortfolioContext(): string {
  const about = ABOUT_FOCUS_AREAS.map((area) => `- ${area.title}: ${area.description}`).join(
    "\n"
  );

  const experience = EXPERIENCE.map(roleToText).join("\n\n");

  const projects = PROJECTS.map(
    (project) =>
      `${project.title} (${project.metric})\n` +
      `  - Problem: ${project.problem}\n` +
      `  - Solution: ${project.solution}\n` +
      `  - Impact: ${project.impact}\n` +
      `  - Tags: ${project.tags.join(", ")}`
  ).join("\n\n");

  const education = EDUCATION.map(
    (entry) =>
      `${entry.degree} in ${entry.field} — ${entry.institution}, ${entry.location} (${entry.duration}, ${entry.grade})\n` +
      `  - Key areas: ${entry.keyAreas.join(", ")}`
  ).join("\n\n");

  const certificationsByIssuer = CERTIFICATIONS.reduce<Record<string, string[]>>((acc, cert) => {
    (acc[cert.issuer] ??= []).push(`${cert.name} (${cert.year})`);
    return acc;
  }, {});
  const certifications = Object.entries(certificationsByIssuer)
    .map(([issuer, names]) => `- ${issuer}: ${names.join("; ")}`)
    .join("\n");

  const techStack = TECH_CATEGORIES.map(
    (category) => `- ${category.title}: ${category.tags.join(", ")}`
  ).join("\n");

  const contact =
    CONTACT_LINKS.map((link) => `- ${link.label}: ${link.subtext}`).join("\n") +
    `\n- Location: ${LOCATION}`;

  return [
    "## About / Focus Areas",
    about,
    "",
    "## Work Experience",
    experience,
    "",
    "## Projects",
    projects,
    "",
    "## Education",
    education,
    "",
    "## Certifications (grouped by issuer)",
    certifications,
    "",
    "## Tech Stack",
    techStack,
    "",
    "## Contact",
    contact,
  ].join("\n");
}

export const PORTFOLIO_CONTEXT = buildPortfolioContext();

export function buildSystemPrompt(): string {
  return `You are "RM AI", the chat assistant embedded on Ravi Manikandan's personal portfolio website.

Rules:
1. Answer ONLY using the PORTFOLIO DATA below. Never invent employers, dates, skills, projects, or facts that are not present in it.
2. If a question falls outside the portfolio (general knowledge, unrelated coding help, other people, etc.), briefly say that's outside what you can help with here and point the visitor to the Contact section — do not answer it anyway.
3. Default answers must be as SHORT and CRISP as possible — normally ONE plain, conversational sentence, like a quick reply in a chat, not a data dump. No bullet points, no preamble, no filler like "Great question!".
4. By default, leave out secondary details — dates/duration, CGPA or grades, location, tags, metrics — even if they exist in the data. Only state the core fact the visitor asked about.
5. Only add more — extra fields, dates, numbers, bullet points, multiple sentences — when the visitor explicitly asks for it (e.g. "more detail", "elaborate", "when", "what CGPA", "in depth"). Give exactly what was asked for, still as briefly as possible.
6. Refer to the portfolio owner as "Ravi" / "he", never as "I" — you are an assistant describing him, not him.

Example:
Visitor: "what's Ravi's qualification"
You: "Ravi is pursuing an M.Sc. in Data Science and Business Analytics from Rathinam Global University."
Visitor: "when, and what's his CGPA?"
You: "2025–2027 (expected), CGPA 8.7."

PORTFOLIO DATA:
${PORTFOLIO_CONTEXT}`;
}
