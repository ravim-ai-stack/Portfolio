"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import { cn } from "@/lib/utils";
import { TECH_CATEGORIES, TECH_FILTERS } from "@/content/tech-stack";

export function TechStack() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const categories =
    activeFilter === "All"
      ? TECH_CATEGORIES
      : TECH_CATEGORIES.filter((category) => category.key === activeFilter);

  return (
    <section
      id="tech-stack"
      className="w-full scroll-mt-20 px-6 py-16 md:px-10 md:py-20 lg:px-16 xl:px-24"
    >
      <div className="flex w-full flex-col items-start gap-4 text-left">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-accent" />
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            Tech Stack
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Tools &amp; Technologies
          </h2>
          <span className="h-1 w-16 rounded-full bg-accent" />
        </div>

        <p className="text-base text-muted-foreground md:whitespace-nowrap md:text-lg">
          A curated set of modern GenAI and LLM tools I use daily to build production-grade AI systems.
        </p>

        <div className="mt-2 flex flex-wrap gap-2">
          {TECH_FILTERS.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium shadow-sm transition-colors",
                activeFilter === filter
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-border bg-card text-muted-foreground hover:border-accent hover:text-accent"
              )}
            >
              {filter}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="mt-4 grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {categories.map((category) => (
              <motion.div
                key={category.key}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -12 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                whileHover={{ scale: 1.02, y: -2 }}
                className="flex flex-col gap-4 rounded-xl border border-border bg-secondary/60 p-5 shadow-sm transition-all hover:border-accent hover:shadow-md"
              >
                <div className="flex size-11 items-center justify-center rounded-lg bg-accent/10">
                  <category.icon className="size-5 text-accent" />
                </div>

                <span className="text-sm font-bold uppercase tracking-wide text-foreground">
                  {category.title}
                </span>

                <div className="flex flex-wrap gap-2">
                  {category.tags.map((tag) => (
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
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
