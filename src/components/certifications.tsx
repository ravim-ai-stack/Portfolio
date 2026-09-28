"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Award, BadgeCheck, Check, ExternalLink } from "lucide-react";

import { CERTIFICATIONS, ISSUER_LOGOS } from "@/content/certifications";

const VISIBLE_COUNT = 6;

export function Certifications() {
  const [showAll, setShowAll] = useState(false);
  const items = showAll ? CERTIFICATIONS : CERTIFICATIONS.slice(0, VISIBLE_COUNT);

  const totalCount = CERTIFICATIONS.length;
  const verifiedCount = CERTIFICATIONS.filter((cert) => Boolean(cert.url)).length;

  return (
    <section
      id="certifications"
      className="w-full scroll-mt-20 px-6 py-16 md:px-10 md:py-20 lg:px-16 xl:px-24"
    >
      <div className="flex w-full flex-col items-center gap-4 text-center">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-accent" />
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            Certifications
          </span>
        </div>

        <div className="flex flex-col items-center gap-2">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Professional Certifications
          </h2>
          <span className="h-1 w-16 rounded-full bg-accent" />
        </div>

        <p className="max-w-2xl text-balance text-base text-muted-foreground md:text-lg">
          Industry-recognized credentials demonstrating expertise in
          generative AI, LLMs, and applied data science.
        </p>

        <div className="mt-4 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((cert, index) => (
            <motion.div
              key={cert.url}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: (index % VISIBLE_COUNT) * 0.05, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 text-left shadow-sm transition-all hover:border-accent hover:shadow-md"
            >
              <div className="flex items-start justify-between">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-border bg-white p-1.5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={ISSUER_LOGOS[cert.issuer]}
                    alt={`${cert.issuer} logo`}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <Check className="size-3.5" />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="text-base font-bold leading-snug text-foreground">
                  {cert.name}
                </h3>
                <span className="text-sm font-medium text-accent">
                  {cert.issuer}
                </span>
                <span className="text-xs text-muted-foreground">
                  Issued {cert.year}
                </span>
              </div>

              <div className="h-px w-full bg-border" />

              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
              >
                View Credential
                <ExternalLink className="size-3.5" />
              </a>
            </motion.div>
          ))}
        </div>

        {CERTIFICATIONS.length > VISIBLE_COUNT && (
          <button
            type="button"
            onClick={() => setShowAll((v) => !v)}
            className="mt-4 rounded-full border border-border bg-card px-5 py-2 text-sm font-medium text-foreground shadow-sm transition-colors hover:border-accent hover:text-accent"
          >
            {showAll ? "Show less" : `Show all ${CERTIFICATIONS.length} certifications`}
          </button>
        )}

        <div className="mt-8 h-px w-full bg-border" />

        <div className="flex flex-row items-center justify-center gap-8 pt-4 sm:gap-16">
          <div className="flex flex-col items-center gap-1">
            <div className="flex items-center gap-2">
              <Award className="size-7 text-accent md:size-8" />
              <span className="text-3xl font-bold text-foreground md:text-4xl">
                {totalCount}
              </span>
            </div>
            <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Total Certifications
            </span>
          </div>

          <div className="flex flex-col items-center gap-1">
            <div className="flex items-center gap-2">
              <BadgeCheck className="size-7 text-accent md:size-8" />
              <span className="text-3xl font-bold text-accent md:text-4xl">
                {verifiedCount}
              </span>
            </div>
            <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Verified
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
