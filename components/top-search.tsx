"use client"

import { useState } from "react"
import { Search, SlidersHorizontal, ChevronDown, Bell, Check, X } from "lucide-react"
import { MACRO_CATEGORIES, HEADCOUNT_BANDS, TECH_STACKS } from "@/lib/fundhub-data"
import { cn } from "@/lib/utils"

function FilterDropdown({
  label,
  options,
  selected,
  onToggle,
}: {
  label: string
  options: string[]
  selected: string[]
  onToggle: (value: string) => void
}) {
  const [open, setOpen] = useState(false)
  return (
    <div className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className={cn(
          "flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs font-medium transition-colors",
          selected.length > 0
            ? "border-primary/40 bg-accent text-accent-foreground"
            : "border-border bg-card text-foreground hover:bg-muted",
        )}
      >
        {label}
        {selected.length > 0 && (
          <span className="flex size-4 items-center justify-center rounded-full bg-primary text-[10px] font-semibold text-primary-foreground">
            {selected.length}
          </span>
        )}
        <ChevronDown className={cn("size-3.5 transition-transform", open && "rotate-180")} />
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-20" onClick={() => setOpen(false)} />
          <div className="absolute left-0 top-full z-30 mt-1.5 w-52 rounded-lg border border-border bg-popover p-1 shadow-lg">
            {options.map((opt) => {
              const active = selected.includes(opt)
              return (
                <button
                  key={opt}
                  onClick={() => onToggle(opt)}
                  className="flex w-full items-center justify-between rounded-md px-2.5 py-1.5 text-xs font-medium text-popover-foreground transition-colors hover:bg-muted"
                >
                  {opt}
                  {active && <Check className="size-3.5 text-primary" />}
                </button>
              )
            })}
          </div>
        </>
      )}
    </div>
  )
}

export function TopSearch() {
  const [query, setQuery] = useState("")
  const [categories, setCategories] = useState<string[]>(["Fund Operations"])
  const [headcount, setHeadcount] = useState<string[]>([])
  const [tech, setTech] = useState<string[]>(["eFront"])

  const toggle = (setter: React.Dispatch<React.SetStateAction<string[]>>) => (value: string) =>
    setter((prev) => (prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]))

  const activeChips = [
    ...categories.map((c) => ({ group: "Category", value: c, clear: () => setCategories((p) => p.filter((v) => v !== c)) })),
    ...headcount.map((h) => ({ group: "Scale", value: h, clear: () => setHeadcount((p) => p.filter((v) => v !== h)) })),
    ...tech.map((t) => ({ group: "Stack", value: t, clear: () => setTech((p) => p.filter((v) => v !== t)) })),
  ]

  return (
    <div className="border-b border-border bg-card">
      <div className="flex h-14 items-center gap-3 px-4 lg:px-6">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search fund service providers, software stacks, or regulations..."
            className="h-9 w-full rounded-md border border-border bg-background pl-9 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-3 focus:ring-ring/20"
          />
        </div>
        <button className="relative flex size-9 shrink-0 items-center justify-center rounded-md border border-border bg-card text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
          <Bell className="size-4" />
          <span className="absolute right-2 top-2 size-1.5 rounded-full bg-primary" />
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-2 px-4 pb-3 lg:px-6">
        <div className="hidden items-center gap-1.5 pr-1 text-xs font-medium text-muted-foreground sm:flex">
          <SlidersHorizontal className="size-3.5" />
          Filters
        </div>
        <FilterDropdown label="Macro-Category" options={MACRO_CATEGORIES} selected={categories} onToggle={toggle(setCategories)} />
        <FilterDropdown label="Scale / Headcount" options={HEADCOUNT_BANDS} selected={headcount} onToggle={toggle(setHeadcount)} />
        <FilterDropdown label="Tech Stack" options={TECH_STACKS} selected={tech} onToggle={toggle(setTech)} />

        {activeChips.length > 0 && <span className="mx-1 hidden h-4 w-px bg-border md:block" />}

        <div className="flex flex-wrap items-center gap-1.5">
          {activeChips.map((chip) => (
            <span
              key={chip.group + chip.value}
              className="flex items-center gap-1 rounded-md bg-secondary px-2 py-1 text-[11px] font-medium text-secondary-foreground"
            >
              <span className="text-muted-foreground">{chip.group}:</span>
              {chip.value}
              <button onClick={chip.clear} className="text-muted-foreground transition-colors hover:text-foreground">
                <X className="size-3" />
              </button>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
