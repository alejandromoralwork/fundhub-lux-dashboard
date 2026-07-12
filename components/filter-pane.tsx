"use client"

import { useState } from "react"
import { PROVIDER_TYPES, PORTFOLIO_DENSITY, TECH_STACKS } from "@/lib/fundhub-data"
import { RotateCcw } from "lucide-react"
import { cn } from "@/lib/utils"

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-2.5 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">{children}</h3>
  )
}

function PriceRange() {
  const MIN = 500
  const MAX = 3500
  const [min, setMin] = useState(1200)
  const [max, setMax] = useState(2800)

  const pct = (v: number) => ((v - MIN) / (MAX - MIN)) * 100

  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <span className="rounded-md bg-secondary px-2 py-1 font-mono text-xs font-medium tabular-nums text-secondary-foreground">
          €{min.toLocaleString()}
        </span>
        <span className="text-xs text-muted-foreground">to</span>
        <span className="rounded-md bg-secondary px-2 py-1 font-mono text-xs font-medium tabular-nums text-secondary-foreground">
          €{max.toLocaleString()}
        </span>
      </div>
      <div className="relative h-1.5">
        <div className="absolute inset-0 rounded-full bg-secondary" />
        <div
          className="absolute h-full rounded-full bg-primary"
          style={{ left: `${pct(min)}%`, right: `${100 - pct(max)}%` }}
        />
        <input
          type="range"
          min={MIN}
          max={MAX}
          step={50}
          value={min}
          onChange={(e) => setMin(Math.min(Number(e.target.value), max - 100))}
          className="pointer-events-none absolute -top-1.5 h-4 w-full appearance-none bg-transparent [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:size-3.5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-primary [&::-webkit-slider-thumb]:bg-card [&::-webkit-slider-thumb]:shadow"
          aria-label="Minimum price"
        />
        <input
          type="range"
          min={MIN}
          max={MAX}
          step={50}
          value={max}
          onChange={(e) => setMax(Math.max(Number(e.target.value), min + 100))}
          className="pointer-events-none absolute -top-1.5 h-4 w-full appearance-none bg-transparent [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:size-3.5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-primary [&::-webkit-slider-thumb]:bg-card [&::-webkit-slider-thumb]:shadow"
          aria-label="Maximum price"
        />
      </div>
      <div className="mt-2 flex justify-between text-[10px] font-medium tabular-nums text-muted-foreground">
        <span>€{MIN.toLocaleString()}</span>
        <span>€{MAX.toLocaleString()}+ /qtr</span>
      </div>
    </div>
  )
}

function CheckboxRow({
  label,
  checked,
  onChange,
  count,
}: {
  label: string
  checked: boolean
  onChange: () => void
  count?: number
}) {
  return (
    <label className="flex cursor-pointer items-center gap-2.5 py-1 text-sm text-foreground">
      <button
        type="button"
        role="checkbox"
        aria-checked={checked}
        onClick={onChange}
        className={cn(
          "flex size-4 shrink-0 items-center justify-center rounded border transition-colors",
          checked ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card",
        )}
      >
        {checked && (
          <svg viewBox="0 0 12 12" className="size-3" fill="none">
            <path d="M2.5 6L5 8.5L9.5 3.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </button>
      <span className="flex-1">{label}</span>
      {count !== undefined && <span className="text-xs tabular-nums text-muted-foreground">{count}</span>}
    </label>
  )
}

export function FilterPane() {
  const [types, setTypes] = useState<string[]>(["Boutique", "Mid-Market"])
  const [density, setDensity] = useState<string[]>([])
  const [verifiedOnly, setVerifiedOnly] = useState(true)
  const [stacks, setStacks] = useState<string[]>([])

  const toggle = (setter: React.Dispatch<React.SetStateAction<string[]>>, value: string) =>
    setter((prev) => (prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]))

  const reset = () => {
    setTypes([])
    setDensity([])
    setStacks([])
    setVerifiedOnly(false)
  }

  const typeCounts: Record<string, number> = { Boutique: 38, "Mid-Market": 61, Institutional: 43 }

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <h2 className="text-sm font-semibold text-foreground">Refine Parameters</h2>
        <button
          onClick={reset}
          className="flex items-center gap-1 text-[11px] font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <RotateCcw className="size-3" />
          Reset
        </button>
      </div>

      <div className="flex-1 space-y-6 overflow-y-auto p-4">
        <section>
          <SectionLabel>Price Bounds (per quarter)</SectionLabel>
          <PriceRange />
        </section>

        <div className="h-px bg-border" />

        <section>
          <SectionLabel>Provider Type</SectionLabel>
          <div className="space-y-0.5">
            {PROVIDER_TYPES.map((t) => (
              <CheckboxRow key={t} label={t} checked={types.includes(t)} onChange={() => toggle(setTypes, t)} count={typeCounts[t]} />
            ))}
          </div>
        </section>

        <div className="h-px bg-border" />

        <section>
          <SectionLabel>Client Portfolio Density</SectionLabel>
          <div className="space-y-0.5">
            {PORTFOLIO_DENSITY.map((d) => (
              <CheckboxRow key={d} label={d} checked={density.includes(d)} onChange={() => toggle(setDensity, d)} />
            ))}
          </div>
        </section>

        <div className="h-px bg-border" />

        <section>
          <SectionLabel>Underlying Tech Stack</SectionLabel>
          <div className="space-y-0.5">
            {TECH_STACKS.map((s) => (
              <CheckboxRow key={s} label={s} checked={stacks.includes(s)} onChange={() => toggle(setStacks, s)} />
            ))}
          </div>
        </section>

        <div className="h-px bg-border" />

        <section>
          <div className="flex items-center justify-between rounded-lg border border-border bg-secondary/50 p-3">
            <div>
              <p className="text-sm font-medium text-foreground">Verified only</p>
              <p className="text-[11px] text-muted-foreground">RCS + CSSF cross-checked</p>
            </div>
            <button
              role="switch"
              aria-checked={verifiedOnly}
              onClick={() => setVerifiedOnly((v) => !v)}
              className={cn(
                "relative h-5 w-9 shrink-0 rounded-full transition-colors",
                verifiedOnly ? "bg-primary" : "bg-border",
              )}
            >
              <span
                className={cn(
                  "absolute top-0.5 size-4 rounded-full bg-card shadow transition-transform",
                  verifiedOnly ? "translate-x-4" : "translate-x-0.5",
                )}
              />
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}
