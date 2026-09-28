"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";

import { ABOUT_FOCUS_AREAS } from "@/content/about";

function useReveal(progress: MotionValue<number>, start: number, end: number) {
  const opacity = useTransform(progress, [start, end], [0, 1]);
  const y = useTransform(progress, [start, end], [28, 0]);
  return { opacity, y };
}

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.9", "start 0.2"],
  });

  const eyebrow = useReveal(scrollYProgress, 0, 0.15);
  const heading = useReveal(scrollYProgress, 0.1, 0.3);
  const tagline = useReveal(scrollYProgress, 0.25, 0.45);
  const paragraph = useReveal(scrollYProgress, 0.4, 0.6);
  const facts = useReveal(scrollYProgress, 0.55, 0.8);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="w-full scroll-mt-20 px-6 py-16 md:px-10 md:py-20 lg:px-16 xl:px-24"
    >
      <div className="flex w-full flex-col items-start gap-4 text-left">
        <motion.div style={eyebrow} className="flex items-center gap-3">
          <span className="h-px w-8 bg-accent" />
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            About
          </span>
        </motion.div>

        <motion.div style={heading} className="flex flex-col gap-2">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Transforming AI Into Business Value
          </h2>
          <span className="h-1 w-16 rounded-full bg-accent" />
        </motion.div>

        {/* <motion.p
          style={tagline}
          className="text-balance text-sm font-medium text-foreground/80 md:text-base"
        >
          GenAI Developer turning enterprise data into reliable, production-ready AI systems.
        </motion.p> */}

        <motion.div style={paragraph} className="mt-2 flex w-full flex-col gap-2">
          <p className="max-w-none text-balance text-base leading-relaxed text-muted-foreground md:text-lg">
            I&apos;m a Generative AI Developer building enterprise AI
            applications, LLM-integrated automation, and scalable backend
            systems — designing AI agents and Retrieval-Augmented Generation
            (RAG) pipelines, and building RESTful API architectures with
            Python, FastAPI, LangChain, and the OpenAI API.
          </p>
          <p className="max-w-none text-balance text-base leading-relaxed text-muted-foreground md:text-lg">
            I&apos;ve worked across the full GenAI development lifecycle,
            from Databricks-based data engineering and Medallion architecture
            pipelines to production-oriented backend services within the
            Databricks ecosystem, and I&apos;m currently deepening that
            expertise through an M.Sc. in Data Science and Business
            Analytics.
          </p>
        </motion.div>

        <motion.div
          style={facts}
          className="mt-4 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {ABOUT_FOCUS_AREAS.map((area) => (
            <motion.div
              key={area.title}
              whileHover={{ scale: 1.02, y: -2 }}
              className="flex flex-col gap-2 rounded-xl border border-border bg-secondary/60 p-5 transition-colors hover:border-accent"
            >
              <area.icon className="size-5 shrink-0 text-accent" />
              <span className="text-sm font-semibold text-foreground">
                {area.title}
              </span>
              <span className="text-sm leading-relaxed text-muted-foreground">
                {area.description}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
