"use client";

import { motion } from "motion/react";
import { GraduationCap, MapPin } from "lucide-react";

import { EDUCATION } from "@/content/education";

export function Education() {
  return (
    <section
      id="education"
      className="w-full scroll-mt-20 px-6 py-16 md:px-10 md:py-20 lg:px-16 xl:px-24"
    >
      <div className="flex w-full flex-col items-start gap-4 text-left">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-accent" />
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            Education
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Academic Background
          </h2>
          <span className="h-1 w-16 rounded-full bg-accent" />
        </div>

        <p className="text-base text-muted-foreground md:whitespace-nowrap md:text-lg">
          Strong foundation in artificial intelligence, analytics, and computer science.
        </p>

        <div className="mt-4 grid w-full grid-cols-1 gap-6 md:grid-cols-2">
          {EDUCATION.map((entry, index) => (
            <motion.div
              key={entry.degree + entry.institution}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-accent hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                {entry.logo ? (
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-border bg-white p-1.5">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={entry.logo}
                      alt={`${entry.institution} logo`}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                ) : (
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <GraduationCap className="size-5 text-accent" />
                  </div>
                )}
                <div className="flex flex-col">
                  <h3 className="text-lg font-bold tracking-tight text-foreground md:text-xl">
                    {entry.degree}
                  </h3>
                  <span className="text-sm font-medium text-accent">
                    {entry.field}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {entry.institution}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="size-3.5" />
                  {entry.location}
                </span>
                <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                  {entry.duration}
                </span>
                <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                  {entry.grade}
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
                  Key Areas
                </span>
                <div className="flex flex-wrap gap-2">
                  {entry.keyAreas.map((area) => (
                    <span
                      key={area}
                      className="rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
