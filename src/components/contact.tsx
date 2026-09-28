"use client";

import { motion } from "motion/react";
import { ArrowUpRight, MapPin } from "lucide-react";

import { CONTACT_LINKS, LOCATION } from "@/content/contact";

export function Contact() {
  return (
    <section
      id="contact"
      className="w-full scroll-mt-20 bg-amber-50 px-6 py-16 md:px-10 md:py-20 lg:px-16 xl:px-24 dark:bg-amber-950/20"
    >
      <div className="flex w-full flex-col items-center gap-4 text-center">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-accent" />
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            Contact
          </span>
        </div>

        <div className="flex flex-col items-center gap-2">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Let&apos;s Connect
          </h2>
          <span className="h-1 w-16 rounded-full bg-accent" />
        </div>

        <p className="max-w-2xl text-balance text-base text-muted-foreground md:text-lg">
          I&apos;m open to new opportunities and always happy to discuss AI
          engineering, LLM applications, or potential collaborations.
        </p>

        <div className="mt-4 grid w-full grid-cols-1 gap-6 sm:grid-cols-3">
          {CONTACT_LINKS.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35, delay: index * 0.08, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition-all hover:border-accent hover:shadow-md"
            >
              <div className="flex size-11 items-center justify-center rounded-lg bg-accent/10">
                <link.icon className="size-5 text-accent" />
              </div>

              <span className="inline-flex items-center gap-1 text-base font-bold text-foreground">
                {link.label}
                {link.external && <ArrowUpRight className="size-4 text-muted-foreground" />}
              </span>

              <span className="text-sm text-muted-foreground">{link.subtext}</span>
            </motion.a>
          ))}
        </div>

        <span className="mt-2 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPin className="size-4" />
          {LOCATION} · Open to Remote
        </span>
      </div>
    </section>
  );
}
