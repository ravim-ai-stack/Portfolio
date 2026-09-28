"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Bot } from "lucide-react";

export function AiRevealPhoto({ className }: { className?: string }) {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className={`flex justify-center ${className ?? ""}`}>
      <div className="relative size-72 shrink-0 md:size-80">
        <div className="absolute inset-0 -z-10 rounded-full bg-accent/25 blur-2xl" />

        <div
          className="relative size-full overflow-hidden rounded-full border-2 border-accent/70 shadow-sm"
          onMouseEnter={() => setRevealed(true)}
          onMouseLeave={() => setRevealed(false)}
          onTouchStart={() => setRevealed((v) => !v)}
        >
          <div
            className="absolute inset-0 flex flex-col items-center justify-center gap-3 transition-opacity duration-300"
            style={{
              backgroundImage:
                "linear-gradient(135deg, var(--primary), var(--accent))",
              opacity: revealed ? 0 : 1,
            }}
          >
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "linear-gradient(oklch(1 0 0 / 0.4) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.4) 1px, transparent 1px)",
                backgroundSize: "18px 18px",
              }}
            />
            <motion.div
              animate={{ scale: [1, 1.08, 1], opacity: [0.9, 1, 0.9] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              className="flex size-20 items-center justify-center rounded-2xl bg-background/15 backdrop-blur-sm"
            >
              <Bot className="size-10 text-primary-foreground" />
            </motion.div>
            <p className="px-6 text-center text-xs font-medium tracking-wide text-primary-foreground/80">
              Hover to reveal
            </p>
          </div>

          <div
            className="absolute inset-0 transition-opacity duration-300"
            style={{ opacity: revealed ? 1 : 0 }}
          >
            <div
              className="absolute inset-0 bg-cover bg-top"
              style={{ backgroundImage: "url(/img/ravi.jpeg)" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
          </div>
        </div>

        <motion.div
          className="pointer-events-none absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        >
          <span className="absolute left-1/2 top-0 size-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-sm ring-2 ring-background" />
        </motion.div>
      </div>
    </div>
  );
}
