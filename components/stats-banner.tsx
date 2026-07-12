import { TrendingUp, Database, FileSignature, Percent, Landmark } from "lucide-react"
import { STATS } from "@/lib/fundhub-data"

const ICONS = [Database, FileSignature, Percent, Landmark]

export function StatsBanner() {
  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border lg:grid-cols-4">
      {STATS.map((stat, i) => {
        const Icon = ICONS[i]
        return (
          <div key={stat.label} className="flex items-start gap-3 bg-card p-3.5">
            <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-md bg-accent text-accent-foreground">
              <Icon className="size-4" />
            </div>
            <div className="min-w-0">
              <p className="truncate text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                {stat.label}
              </p>
              <p className="mt-0.5 font-mono text-xl font-semibold tabular-nums text-foreground">{stat.value}</p>
              <p className="mt-0.5 flex items-center gap-1 text-[11px] font-medium text-primary">
                <TrendingUp className="size-3" />
                {stat.trend}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
