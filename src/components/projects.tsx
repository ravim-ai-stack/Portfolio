"use client";

import { motion } from "motion/react";
import { TrendingUp } from "lucide-react";

import { PROJECTS } from "@/content/projects";

export function Projects() {
  return (
    <section
      id="projects"
      className="w-full scroll-mt-20 px-6 py-16 md:px-10 md:py-20 lg:px-16 xl:px-24"
    >
      <div className="flex w-full flex-col items-start gap-4 text-left">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-accent" />
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            Featured Projects
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            What I&apos;ve Built
          </h2>
          <span className="h-1 w-16 rounded-full bg-accent" />
        </div>

        <p className="text-base text-muted-foreground md:whitespace-nowrap md:text-lg">
          Each project represents a real business problem solved through thoughtful AI engineering.
        </p>

        <div className="mt-4 grid w-full grid-cols-1 gap-6 lg:grid-cols-2">
          {PROJECTS.map((project) => (
            <motion.div
              key={project.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-accent hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="text-sm font-bold text-muted-foreground">
                  {project.number}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                  <TrendingUp className="size-3.5" />
                  {project.metric}
                </span>
              </div>

              <h3 className="text-xl font-bold tracking-tight text-foreground md:text-2xl">
                {project.title}
              </h3>

              <div className="flex flex-col gap-1">
                <span className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
                  Problem
                </span>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {project.problem}
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
                  Solution
                </span>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {project.solution}
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-xs font-bold uppercase tracking-wide text-foreground">
                  Impact
                </span>
                <p className="text-sm font-semibold leading-relaxed text-foreground">
                  {project.impact}
                </p>
              </div>

              <div className="mt-1 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
