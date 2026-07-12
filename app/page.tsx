import { NavRail } from "@/components/nav-rail"
import { TopSearch } from "@/components/top-search"
import { StatsBanner } from "@/components/stats-banner"
import { FilterPane } from "@/components/filter-pane"
import { ProviderGrid } from "@/components/provider-grid"
import { AiAdvisor } from "@/components/ai-advisor"

export default function Page() {
  return (
    <div className="flex h-dvh overflow-hidden bg-background text-foreground">
      <NavRail />

      <main className="flex min-w-0 flex-1 flex-col">
        <TopSearch />

        <div className="flex-1 overflow-y-auto">
          <div className="border-b border-border px-4 py-4 lg:px-6">
            <div className="mb-3 flex flex-wrap items-end justify-between gap-2">
              <div>
                <h1 className="text-lg font-semibold tracking-tight text-foreground text-balance">
                  Luxembourg Fund Services Comparator
                </h1>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  Empirical fee benchmarks across 142 RCS-indexed providers · Updated Q2 2026
                </p>
              </div>
              <span className="rounded-md border border-primary/30 bg-accent px-2 py-1 text-[11px] font-medium text-accent-foreground">
                Live market data
              </span>
            </div>
            <StatsBanner />
          </div>

          {/* Two-column comparator */}
          <div className="flex flex-col lg:flex-row">
            <aside className="hidden w-full shrink-0 border-b border-border lg:sticky lg:top-0 lg:block lg:w-72 lg:self-start lg:border-b-0 lg:border-r xl:w-80">
              <FilterPane />
            </aside>
            <section className="min-w-0 flex-1">
              <ProviderGrid />
            </section>
          </div>
        </div>
      </main>

      <AiAdvisor />
    </div>
  )
}
