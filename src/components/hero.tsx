"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Download, FolderGit2, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Typewriter } from "@/components/typewriter";
import { AiRevealPhoto } from "@/components/ai-reveal-photo";
import { SkillsTicker } from "@/components/skills-ticker";
import { useVisitorName } from "@/components/visitor-context";
import { useChatWidget } from "@/components/chat-widget-context";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.1 + i * 0.1, ease: "easeOut" as const },
  }),
};

export function Hero() {
  const visitorName = useVisitorName();
  const { setOpen: setChatOpen } = useChatWidget();

  return (
    <>
      <section className="w-full px-6 pb-16 pt-8 md:px-10 md:pt-12 lg:px-16 xl:px-24">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[1fr_340px] md:items-start md:gap-0">
          <div className="order-2 flex flex-col items-start gap-6 text-left md:order-1">
            {visitorName && (
              <motion.p
                initial="hidden"
                animate="show"
                custom={0}
                variants={fadeUp}
                className="text-xl font-bold text-foreground md:text-2xl"
              >
                Welcome to my portfolio, {visitorName}!
              </motion.p>
            )}

            <motion.div
              initial="hidden"
              animate="show"
              custom={1}
              variants={fadeUp}
              whileHover={{ scale: 1.05, y: -2 }}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground"
            >
              <Sparkles className="size-4.5 text-accent" />
              Available for new opportunities
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="show"
              custom={2}
              variants={fadeUp}
              whileHover={{ scale: 1.03, rotate: -1 }}
              transition={{ type: "spring", stiffness: 300, damping: 12 }}
              className="cursor-default text-balance text-4xl font-semibold tracking-tight md:text-6xl"
            >
              Hi, I&apos;m Ravi M
            </motion.h1>

            <motion.div
              initial="hidden"
              animate="show"
              custom={3}
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              className="inline-flex h-11 cursor-default items-center rounded-full border border-border bg-secondary/70 px-4 text-xl font-medium text-accent md:h-12 md:px-5 md:text-2xl"
            >
              <Typewriter text="GEN AI Developer" />
            </motion.div>

            <motion.p
              initial="hidden"
              animate="show"
              custom={4}
              variants={fadeUp}
              className="max-w-none text-balance text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              I build AI-driven systems — from GenAI applications to
              large-scale data platforms on Databricks. My work spans RAG
              pipelines, autonomous agents, and LLM-powered products, backed
              by the data infrastructure that keeps them reliable in
              production. If you need someone who can take an AI idea from
              prototype to launch, and explain every decision along the way,
              let&apos;s talk.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="show"
              custom={5}
              variants={fadeUp}
              className="flex flex-wrap items-center gap-3"
            >
              <motion.div whileHover={{ scale: 1.06, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg">
                  <Link href="/#projects">
                    <FolderGit2 className="size-4" />
                    View Projects
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.06, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="secondary"
                  onClick={() => setChatOpen(true)}
                >
                  <Sparkles className="size-4" />
                  Ask My AI
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.06, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg" variant="outline">
                  <a href="/Ravi_CV.pdf" download>
                    <Download className="size-4" />
                    Download CV
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="order-1 md:order-2 md:-ml-8"
          >
            <AiRevealPhoto />
          </motion.div>
        </div>
      </section>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="pb-16"
      >
        <SkillsTicker />
      </motion.div>
    </>
  );
}
