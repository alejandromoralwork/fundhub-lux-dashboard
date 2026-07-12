"use client"

import {
  BadgeCheck,
  Users,
  Layers,
  Briefcase,
  Star,
  MapPin,
  TrendingDown,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Provider } from "@/lib/fundhub-data"
import { cn } from "@/lib/utils"

function PeerScore({ score, count }: { score: number; count: number }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((i) => {
          const fill = Math.max(0, Math.min(1, score - (i - 1)))
          return (
            <span key={i} className="relative inline-block">
              <Star className="size-3.5 text-border" strokeWidth={0} fill="currentColor" />
              <span className="absolute inset-0 overflow-hidden" style={{ width: `${fill * 100}%` }}>
                <Star className="size-3.5 text-primary" strokeWidth={0} fill="currentColor" />
              </span>
            </span>
          )
        })}
      </div>
      <span className="font-mono text-xs font-semibold tabular-nums text-foreground">{score.toFixed(1)}</span>
      <span className="text-[11px] text-muted-foreground">({count})</span>
    </div>
  )
}

function MetaTag({ icon: Icon, label, value }: { icon: typeof Users; label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-start gap-2 rounded-md border border-border bg-secondary/40 px-2.5 py-2">
      <Icon className="mt-0.5 size-3.5 shrink-0 text-muted-foreground" />
      <div className="min-w-0">
        <p className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground">{label}</p>
        <p className="mt-0.5 truncate text-xs font-medium text-foreground">{value}</p>
      </div>
    </div>
  )
}

export function ProviderCard({ provider }: { provider: Provider }) {
  const negative = provider.feeDeviation < 0

  return (
    <article className="group rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/40">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-[15px] font-semibold leading-tight text-foreground">{provider.name}</h3>
            {provider.verified && (
              <span className="inline-flex items-center gap-1 rounded-md bg-accent px-1.5 py-0.5 text-[10px] font-semibold text-accent-foreground">
                <BadgeCheck className="size-3" />
                FundHub Verified
              </span>
            )}
          </div>
          <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-muted-foreground">
            <span className="inline-flex items-center gap-1">
              <MapPin className="size-3" />
              {provider.location}
            </span>
            <span className="inline-flex items-center gap-1">
              <span className="rounded bg-secondary px-1.5 py-0.5 font-medium text-secondary-foreground">
                {provider.type}
              </span>
            </span>
            <span>Est. {provider.established}</span>
            <span className="text-border">·</span>
            <span>{provider.category}</span>
          </div>
        </div>
        <PeerScore score={provider.peerScore} count={provider.reviewCount} />
      </div>

      <div className="mt-3.5 grid grid-cols-2 gap-2 lg:grid-cols-4">
        <MetaTag
          icon={Users}
          label="Headcount (RCS)"
          value={
            <span className="flex items-center gap-1">
              {provider.headcountLabel}
              {provider.rcsVerified && <BadgeCheck className="size-3 text-primary" />}
            </span>
          }
        />
        <MetaTag icon={Layers} label="Tech Stack" value={provider.techStack.join(" + ")} />
        <MetaTag icon={Briefcase} label="Top Clients" value={provider.topClients.slice(0, 2).join(", ")} />
        <MetaTag icon={TrendingUp} label="AUM Serviced" value={provider.aumServiced} />
      </div>

      <div className="mt-3.5 flex flex-wrap items-end justify-between gap-3 border-t border-border pt-3.5">
        <div>
          <p className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
            Empirical Price Range Indicator
          </p>
          <div className="mt-0.5 flex items-baseline gap-2">
            <span className="font-mono text-lg font-semibold tabular-nums text-foreground">
              €{provider.priceMin.toLocaleString()}
              <span className="mx-1 text-muted-foreground">–</span>€{provider.priceMax.toLocaleString()}
            </span>
            <span className="text-xs text-muted-foreground">{provider.priceUnit}</span>
            <span
              className={cn(
                "inline-flex items-center gap-0.5 rounded px-1.5 py-0.5 font-mono text-[11px] font-semibold tabular-nums",
                negative ? "bg-accent text-accent-foreground" : "bg-secondary text-muted-foreground",
              )}
            >
              {negative ? <TrendingDown className="size-3" /> : <TrendingUp className="size-3" />}
              {provider.feeDeviation > 0 ? "+" : ""}
              {provider.feeDeviation}% vs market
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            View Full Profile
            <ArrowUpRight data-icon="inline-end" />
          </Button>
          <Button size="sm">Request RFI / Audit Fee</Button>
        </div>
      </div>
    </article>
  )
}
