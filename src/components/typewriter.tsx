"use client";

import { useEffect, useState } from "react";

export function Typewriter({
  text,
  className,
  startDelay = 300,
  speed = 55,
  deleteSpeed = 35,
  pauseTime = 1400,
  loop = true,
}: {
  text: string;
  className?: string;
  startDelay?: number;
  speed?: number;
  deleteSpeed?: number;
  pauseTime?: number;
  loop?: boolean;
}) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    let deleting = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    function tick() {
      if (!deleting) {
        i += 1;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          if (!loop) return;
          timeoutId = setTimeout(() => {
            deleting = true;
            tick();
          }, pauseTime);
          return;
        }
        timeoutId = setTimeout(tick, speed);
      } else {
        i -= 1;
        setDisplayed(text.slice(0, i));
        if (i <= 0) {
          deleting = false;
          timeoutId = setTimeout(tick, pauseTime / 2);
          return;
        }
        timeoutId = setTimeout(tick, deleteSpeed);
      }
    }

    const startTimeout = setTimeout(tick, startDelay);

    return () => {
      clearTimeout(startTimeout);
      clearTimeout(timeoutId);
    };
  }, [text, startDelay, speed, deleteSpeed, pauseTime, loop]);

  return (
    <span className={className}>
      {displayed}
      <span className="ml-0.5 inline-block h-[1em] w-[2px] animate-pulse bg-accent align-middle" />
    </span>
  );
}
