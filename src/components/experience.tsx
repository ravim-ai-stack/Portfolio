"use client";

import { motion } from "motion/react";
import { Briefcase } from "lucide-react";

import { EXPERIENCE, type BulletPart } from "@/content/experience";

function Bullet({ parts }: { parts: BulletPart[] }) {
  return (
    <>
      {parts.map((part, i) =>
        part.strong ? (
          <strong key={i} className="font-semibold text-foreground">
            {part.text}
          </strong>
        ) : (
          <span key={i}>{part.text}</span>
        )
      )}
    </>
  );
}

export function Experience() {
  return (
    <section
      id="experience"
      className="w-full scroll-mt-20 px-6 py-16 md:px-10 md:py-20 lg:px-16 xl:px-24"
    >
      <div className="flex w-full flex-col items-start gap-4 text-left">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-accent" />
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            Experience
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Where I&apos;ve Worked
          </h2>
          <span className="h-1 w-16 rounded-full bg-accent" />
        </div>

        <div className="mt-4 flex w-full flex-col gap-6">
          {EXPERIENCE.map((role, index) => (
            <motion.div
              key={`${role.title}-${role.company}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-accent hover:shadow-md"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex items-start gap-4">
                  {role.logo ? (
                    <div className="flex h-11 w-20 shrink-0 items-center justify-center rounded-lg border border-border bg-white p-1.5">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={role.logo}
                        alt={`${role.company} logo`}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  ) : (
                    <div className="flex h-11 w-20 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                      <Briefcase className="size-5 text-accent" />
                    </div>
                  )}
                  <div className="flex flex-col">
                    <h3 className="text-lg font-bold tracking-tight text-foreground md:text-xl">
                      {role.title}
                    </h3>
                    <span className="text-sm font-medium text-accent">
                      {role.company}
                    </span>
                  </div>
                </div>

                <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                  {role.duration}
                </span>
              </div>

              <ul className="flex flex-col gap-2 pl-24">
                {role.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                    <span>
                      <Bullet parts={bullet} />
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
