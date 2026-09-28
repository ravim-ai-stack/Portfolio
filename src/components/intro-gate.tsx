"use client";

import { useEffect, useLayoutEffect, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Bot, Power } from "lucide-react";

import { VisitorContext } from "@/components/visitor-context";

type Stage = "intro" | "name" | "robot" | "done";

const STORAGE_KEY = "visitorName";
const WALK_DURATION = 1.1;
const PUSH_DURATION = 0.25;
const ROBOT_DURATION = (WALK_DURATION + PUSH_DURATION + 0.35) * 1000;

export function IntroGate({ children }: { children: React.ReactNode }) {
  const [stage, setStage] = useState<Stage>("intro");
  const [input, setInput] = useState("");
  const [name, setName] = useState("");
  const [checked, setChecked] = useState(false);

  useLayoutEffect(() => {
    try {
      const saved = sessionStorage.getItem(STORAGE_KEY);
      if (saved) {
        setName(saved);
        setStage("done");
      }
    } catch {
      // sessionStorage unavailable — fall back to showing the intro
    }
    setChecked(true);
  }, []);

  useEffect(() => {
    if (stage !== "robot") return;
    const t = setTimeout(() => setStage("done"), ROBOT_DURATION);
    return () => clearTimeout(t);
  }, [stage]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const finalName = input.trim() || "Guest";
    setName(finalName);
    setStage("robot");
    try {
      sessionStorage.setItem(STORAGE_KEY, finalName);
    } catch {
      // ignore write failures
    }
  }

  return (
    <>
      <AnimatePresence>
        {checked && stage !== "done" && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
          >
            <AnimatePresence mode="wait">
              {stage === "intro" && (
                <motion.div
                  key="intro"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center gap-5 px-6 text-center"
                >
                  <div className="relative">
                    <div className="absolute inset-0 -z-10 animate-pulse rounded-full bg-accent/30 blur-2xl" />
                    <motion.button
                      type="button"
                      onClick={() => setStage("name")}
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.94 }}
                      className="flex size-24 items-center justify-center rounded-full border-2 border-accent/70 bg-secondary text-accent shadow-sm md:size-28"
                      aria-label="Power on"
                    >
                      <Power className="size-10 md:size-12" />
                    </motion.button>
                  </div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Click to power on
                  </p>
                </motion.div>
              )}

              {stage === "name" && (
                <motion.form
                  key="name"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4 }}
                  className="flex w-full max-w-sm flex-col items-center gap-4 px-6 text-center"
                >
                  <p className="text-lg font-medium text-foreground md:text-xl">
                    Who&apos;s exploring today?
                  </p>
                  <input
                    autoFocus
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-center text-base outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
                  />
                  <button
                    type="submit"
                    className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-md bg-primary px-5 text-base font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
                  >
                    Continue
                    <ArrowRight className="size-4" />
                  </button>
                </motion.form>
              )}

              {stage === "robot" && (
                <motion.div
                  key="robot"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                  className="flex w-full max-w-sm flex-col items-center gap-4 px-6 text-center"
                >
                  <p className="text-lg font-medium text-foreground md:text-xl">
                    Who&apos;s exploring today?
                  </p>
                  <input
                    disabled
                    value={name}
                    readOnly
                    className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-center text-base text-foreground/70 outline-none"
                  />

                  <div className="relative h-11 w-full overflow-visible">
                    <motion.div
                      animate={{ scale: [1, 1, 1, 0.88, 1] }}
                      transition={{
                        duration: WALK_DURATION + PUSH_DURATION,
                        times: [
                          0,
                          WALK_DURATION / (WALK_DURATION + PUSH_DURATION),
                          (WALK_DURATION + PUSH_DURATION * 0.3) /
                            (WALK_DURATION + PUSH_DURATION),
                          (WALK_DURATION + PUSH_DURATION * 0.7) /
                            (WALK_DURATION + PUSH_DURATION),
                          1,
                        ],
                        ease: "easeInOut",
                      }}
                      className="flex h-11 w-full items-center justify-center gap-2 rounded-md bg-primary px-5 text-base font-medium text-primary-foreground shadow-sm"
                    >
                      Continue
                      <ArrowRight className="size-4" />
                    </motion.div>

                    <motion.div
                      initial={{ x: -170, y: 0, rotate: 0 }}
                      animate={{
                        x: [-170, -140, -110, -80, -50, -20, 4, -6, 4],
                        y: [0, -7, 0, -7, 0, -7, 0, 0, 0],
                        rotate: [0, -6, 0, 6, 0, -6, 0, 0, 0],
                      }}
                      transition={{
                        duration: WALK_DURATION + PUSH_DURATION,
                        times: [0, 0.14, 0.28, 0.42, 0.56, 0.7, 0.82, 0.9, 1],
                        ease: "easeInOut",
                      }}
                      className="pointer-events-none absolute right-2 top-1/2 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-secondary text-accent shadow-sm ring-2 ring-accent/60"
                    >
                      <Bot className="size-5" />
                    </motion.div>
                  </div>

                  <p className="text-sm font-medium text-muted-foreground">
                    Taking you in&hellip;
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      <VisitorContext.Provider value={name}>{children}</VisitorContext.Provider>
    </>
  );
}
