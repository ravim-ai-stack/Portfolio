"use client";

import { useEffect, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { MessageCircle, Send, Sparkles, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useChatWidget } from "@/components/chat-widget-context";

type Message = {
  from: "bot" | "user";
  text: string;
};

const GREETING: Message = {
  from: "bot",
  text: "Hi, I'm RM AI. Ask me about Ravi's work, or use the contact section below to reach him directly.",
};

const FALLBACK_REPLY =
  "Something went wrong reaching the assistant. Please try again, or email ravimanikandanm@gmail.com.";

export function ChatWidget() {
  const { open, setOpen } = useChatWidget();
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [hasUnread, setHasUnread] = useState(true);
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    if (open) {
      // Clears the unread dot whenever the panel opens, whether triggered by
      // this button or externally (e.g. Hero's "Ask My AI" button).
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setHasUnread(false);
    }
  }, [open]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text || isSending) return;

    const nextMessages: Message[] = [...messages, { from: "user", text }];
    setMessages(nextMessages);
    setInput("");
    setIsSending(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          // Drop the initial greeting — the API only needs the actual conversation.
          messages: nextMessages.slice(1).map((message) => ({
            role: message.from === "user" ? "user" : "assistant",
            content: message.text,
          })),
        }),
      });

      const data = await res.json();
      const reply = res.ok && typeof data.reply === "string" ? data.reply : data.error ?? FALLBACK_REPLY;

      setMessages((prev) => [...prev, { from: "bot", text: reply }]);
    } catch {
      setMessages((prev) => [...prev, { from: "bot", text: FALLBACK_REPLY }]);
    } finally {
      setIsSending(false);
    }
  }

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed bottom-24 right-4 z-50 flex h-[480px] w-[min(22rem,calc(100vw-2rem))] max-h-[70vh] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-xl sm:bottom-28 sm:right-6"
          >
            <div className="flex items-center justify-between gap-2 bg-accent px-4 py-3 text-accent-foreground">
              <span className="inline-flex items-center gap-2 text-sm font-bold">
                <Sparkles className="size-4" />
                RM AI
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="rounded-md p-1 transition-colors hover:bg-accent-foreground/10"
              >
                <X className="size-4" />
              </button>
            </div>

            <div className="flex flex-1 flex-col gap-3 overflow-y-auto p-4">
              {messages.map((message, i) => (
                <div
                  key={i}
                  className={
                    message.from === "user"
                      ? "max-w-[80%] self-end rounded-2xl rounded-br-sm bg-accent px-3 py-2 text-sm text-accent-foreground"
                      : "max-w-[80%] self-start rounded-2xl rounded-bl-sm bg-secondary px-3 py-2 text-sm text-foreground"
                  }
                >
                  {message.text}
                </div>
              ))}
              {isSending && (
                <div className="max-w-[80%] self-start rounded-2xl rounded-bl-sm bg-secondary px-3 py-2 text-sm text-muted-foreground">
                  Thinking…
                </div>
              )}
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex items-center gap-2 border-t border-border p-3"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                disabled={isSending}
                className="flex-1 rounded-full border border-input bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring/50 disabled:opacity-60"
              />
              <Button type="submit" size="icon" aria-label="Send message" disabled={isSending}>
                <Send className="size-4" />
              </Button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={open ? "Close chat" : "Open chat"}
        className="fixed bottom-4 right-4 z-50 flex size-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg transition-shadow hover:shadow-xl sm:bottom-6 sm:right-6"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={open ? "close" : "open"}
            initial={{ opacity: 0, rotate: -45 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 45 }}
            transition={{ duration: 0.15 }}
            className="flex items-center justify-center"
          >
            {open ? <X className="size-6" /> : <MessageCircle className="size-6" />}
          </motion.span>
        </AnimatePresence>

        {!open && hasUnread && (
          <span className="absolute -top-1 -right-1 size-3.5 rounded-full bg-red-500 ring-2 ring-background" />
        )}
      </motion.button>
    </>
  );
}
