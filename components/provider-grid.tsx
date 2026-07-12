"use client"

import { useState } from "react"
import { ArrowUpDown, LayoutList, Check } from "lucide-react"
import { PROVIDERS } from "@/lib/fundhub-data"
import { ProviderCard } from "@/components/provider-card"
import { cn } from "@/lib/utils"

const SORTS = ["Relevance", "Lowest fee", "Peer score", "Headcount"]

export function ProviderGrid() {
  const [sort, setSort] = useState("Relevance")
  const [open, setOpen] = useState(false)

  return (
    <div className="flex h-full flex-col">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-4 py-3 lg:px-5">
        <div className="flex items-center gap-2">
          <LayoutList className="size-4 text-muted-foreground" />
          <h2 className="text-sm font-semibold text-foreground">Service Providers</h2>
          <span className="rounded-md bg-secondary px-1.5 py-0.5 font-mono text-[11px] font-medium tabular-nums text-muted-foreground">
            {PROVIDERS.length} of 142
          </span>
        </div>
        <div className="relative">
          <button
            onClick={() => setOpen((o) => !o)}
            className="flex items-center gap-1.5 rounded-md border border-border bg-card px-2.5 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-muted"
          >
            <ArrowUpDown className="size-3.5 text-muted-foreground" />
            Sort: {sort}
          </button>
          {open && (
            <>
              <div className="fixed inset-0 z-20" onClick={() => setOpen(false)} />
              <div className="absolute right-0 top-full z-30 mt-1.5 w-40 rounded-lg border border-border bg-popover p-1 shadow-lg">
                {SORTS.map((s) => (
                  <button
                    key={s}
                    onClick={() => {
                      setSort(s)
                      setOpen(false)
                    }}
                    className="flex w-full items-center justify-between rounded-md px-2.5 py-1.5 text-xs font-medium text-popover-foreground transition-colors hover:bg-muted"
                  >
                    {s}
                    {s === sort && <Check className="size-3.5 text-primary" />}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      <div className={cn("flex-1 space-y-3 overflow-y-auto p-4 lg:p-5")}>
        {PROVIDERS.map((provider) => (
          <ProviderCard key={provider.id} provider={provider} />
        ))}
        <div className="pt-2 text-center">
          <button className="rounded-md border border-border bg-card px-4 py-2 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
            Load 12 more providers
          </button>
        </div>
      </div>
    </div>
  )
}
