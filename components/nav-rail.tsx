"use client"

import {
  LayoutGrid,
  Building2,
  ScrollText,
  FileBarChart,
  Scale,
  Landmark,
  BadgeCheck,
  Settings,
  LifeBuoy,
  Hexagon,
} from "lucide-react"
import { cn } from "@/lib/utils"

const PRIMARY_NAV = [
  { icon: LayoutGrid, label: "Comparator", active: true },
  { icon: Building2, label: "Providers", active: false },
  { icon: FileBarChart, label: "RFI Pipeline", active: false },
  { icon: ScrollText, label: "Regulations", active: false },
  { icon: Scale, label: "Fee Benchmarks", active: false },
  { icon: Landmark, label: "Watchlist", active: false },
]

const SECONDARY_NAV = [
  { icon: LifeBuoy, label: "Advisory Desk" },
  { icon: Settings, label: "Workspace" },
]

export function NavRail() {
  return (
    <aside className="hidden shrink-0 flex-col border-r border-sidebar-border bg-sidebar md:flex md:w-16 lg:w-56">
      <div className="flex h-14 items-center gap-2.5 border-b border-sidebar-border px-4">
        <div className="flex size-8 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground">
          <Hexagon className="size-5" strokeWidth={2.5} />
        </div>
        <div className="hidden lg:block">
          <p className="text-sm font-semibold leading-none text-sidebar-foreground">FundHub</p>
          <p className="mt-0.5 text-[10px] font-medium uppercase tracking-widest text-primary">Lux Edition</p>
        </div>
      </div>

      <nav className="flex flex-1 flex-col gap-0.5 p-2">
        <p className="hidden px-2 pb-1 pt-3 text-[10px] font-semibold uppercase tracking-widest text-sidebar-foreground/40 lg:block">
          Market Intelligence
        </p>
        {PRIMARY_NAV.map((item) => (
          <button
            key={item.label}
            className={cn(
              "flex items-center gap-3 rounded-md px-2.5 py-2 text-sm font-medium transition-colors",
              "justify-center lg:justify-start",
              item.active
                ? "bg-sidebar-accent text-sidebar-foreground"
                : "text-sidebar-foreground/60 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground",
            )}
            title={item.label}
          >
            <item.icon className="size-[18px] shrink-0" />
            <span className="hidden lg:inline">{item.label}</span>
            {item.active && <span className="ml-auto hidden size-1.5 rounded-full bg-primary lg:block" />}
          </button>
        ))}

        <div className="mt-auto flex flex-col gap-0.5 pt-4">
          {SECONDARY_NAV.map((item) => (
            <button
              key={item.label}
              className="flex items-center justify-center gap-3 rounded-md px-2.5 py-2 text-sm font-medium text-sidebar-foreground/60 transition-colors hover:bg-sidebar-accent/50 hover:text-sidebar-foreground lg:justify-start"
              title={item.label}
            >
              <item.icon className="size-[18px] shrink-0" />
              <span className="hidden lg:inline">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>

      <div className="border-t border-sidebar-border p-2">
        <div className="flex items-center gap-2.5 rounded-md px-2 py-2">
          <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-sidebar-accent text-xs font-semibold text-sidebar-foreground">
            AM
          </div>
          <div className="hidden min-w-0 lg:block">
            <p className="truncate text-xs font-semibold text-sidebar-foreground">Anaïs Muller</p>
            <p className="flex items-center gap-1 truncate text-[11px] text-sidebar-foreground/50">
              <BadgeCheck className="size-3 text-primary" />
              Enterprise Seat
            </p>
          </div>
        </div>
      </div>
    </aside>
  )
}
