"use client"

import { useEffect, useState } from "react"
import { Sparkles, X, Send, ShieldCheck, ArrowRight } from "lucide-react"
import { AI_MESSAGES } from "@/lib/fundhub-data"
import { cn } from "@/lib/utils"

export function AiAdvisor() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState("")

  useEffect(() => {
    // Open by default only on larger screens to avoid covering mobile content
    if (typeof window !== "undefined" && window.matchMedia("(min-width: 1024px)").matches) {
      setOpen(true)
    }
  }, [])

  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end lg:bottom-6 lg:right-6">
      {open && (
        <div className="mb-3 flex w-[calc(100vw-2rem)] max-w-sm flex-col overflow-hidden rounded-xl border border-sidebar-border bg-sidebar shadow-2xl">
          <div className="flex items-center justify-between border-b border-sidebar-border px-4 py-3">
            <div className="flex items-center gap-2.5">
              <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Sparkles className="size-4" />
              </div>
              <div>
                <p className="text-sm font-semibold leading-none text-sidebar-foreground">FundHub AI Advisor</p>
                <p className="mt-1 flex items-center gap-1 text-[11px] text-primary">
                  <span className="size-1.5 rounded-full bg-primary" />
                  Grounded on CSSF &amp; RCS data
                </p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="flex size-7 items-center justify-center rounded-md text-sidebar-foreground/60 transition-colors hover:bg-sidebar-accent hover:text-sidebar-foreground"
              aria-label="Close advisor"
            >
              <X className="size-4" />
            </button>
          </div>

          <div className="max-h-80 space-y-3 overflow-y-auto p-4">
            {AI_MESSAGES.map((msg, i) => (
              <div key={i} className={cn("flex", msg.role === "user" ? "justify-end" : "justify-start")}>
                <div
                  className={cn(
                    "max-w-[85%] whitespace-pre-line rounded-xl px-3 py-2 text-[13px] leading-relaxed",
                    msg.role === "user"
                      ? "rounded-br-sm bg-primary text-primary-foreground"
                      : "rounded-bl-sm bg-sidebar-accent text-sidebar-foreground",
                  )}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {["View 3 matched depositaries", "Compare PDAFI fees", "RAIF checklist"].map((chip) => (
                <button
                  key={chip}
                  className="inline-flex items-center gap-1 rounded-full border border-sidebar-border bg-sidebar-accent/40 px-2.5 py-1 text-[11px] font-medium text-sidebar-foreground/80 transition-colors hover:bg-sidebar-accent"
                >
                  {chip}
                  <ArrowRight className="size-3" />
                </button>
              ))}
            </div>
          </div>

          <div className="border-t border-sidebar-border p-3">
            <div className="flex items-center gap-2 rounded-lg border border-sidebar-border bg-sidebar-accent/40 px-3 py-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Lux fund regulation..."
                className="flex-1 bg-transparent text-[13px] text-sidebar-foreground placeholder:text-sidebar-foreground/40 focus:outline-none"
              />
              <button className="flex size-7 items-center justify-center rounded-md bg-primary text-primary-foreground transition-opacity hover:opacity-90">
                <Send className="size-3.5" />
              </button>
            </div>
            <p className="mt-2 flex items-center justify-center gap-1 text-[10px] text-sidebar-foreground/40">
              <ShieldCheck className="size-3" />
              Advisory only — not legal or tax advice
            </p>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen((o) => !o)}
        className={cn(
          "flex items-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-all hover:opacity-90",
          open && "hidden",
        )}
      >
        <Sparkles className="size-4" />
        AI Advisor
      </button>
    </div>
  )
}
