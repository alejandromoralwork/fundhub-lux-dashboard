export type ProviderType = "Boutique" | "Mid-Market" | "Institutional"
export type MacroCategory = "Fund Operations" | "Compliance" | "Tax" | "Legal"

export interface Provider {
  id: string
  name: string
  verified: boolean
  type: ProviderType
  category: MacroCategory
  headcount: number
  headcountLabel: string
  rcsVerified: boolean
  techStack: string[]
  topClients: string[]
  priceMin: number
  priceMax: number
  priceUnit: string
  peerScore: number
  reviewCount: number
  portfolioDensity: string
  aumServiced: string
  location: string
  established: number
  feeDeviation: number
}

export const PROVIDERS: Provider[] = [
  {
    id: "p-001",
    name: "Lombard Ferrier Fund Services",
    verified: true,
    type: "Institutional",
    category: "Fund Operations",
    headcount: 1240,
    headcountLabel: "1,000+",
    rcsVerified: true,
    techStack: ["eFront", "Yardi"],
    topClients: ["Partners Group", "EQT", "CVC Capital"],
    priceMin: 1850,
    priceMax: 2600,
    priceUnit: "/qtr",
    peerScore: 4.6,
    reviewCount: 87,
    portfolioDensity: "High",
    aumServiced: "€412B",
    location: "Kirchberg, LU",
    established: 1998,
    feeDeviation: -12,
  },
  {
    id: "p-002",
    name: "Sylvan Trust & Depositary",
    verified: true,
    type: "Institutional",
    category: "Compliance",
    headcount: 860,
    headcountLabel: "500–999",
    rcsVerified: true,
    techStack: ["Investran", "Paxus"],
    topClients: ["Blackstone", "Apollo", "Ardian"],
    priceMin: 2100,
    priceMax: 3050,
    priceUnit: "/qtr",
    peerScore: 4.4,
    reviewCount: 61,
    portfolioDensity: "High",
    aumServiced: "€288B",
    location: "Cloche d'Or, LU",
    established: 2004,
    feeDeviation: 8,
  },
  {
    id: "p-003",
    name: "Ardennes Capital Administration",
    verified: true,
    type: "Mid-Market",
    category: "Fund Operations",
    headcount: 320,
    headcountLabel: "250–499",
    rcsVerified: true,
    techStack: ["eFront"],
    topClients: ["Cinven", "PAI Partners"],
    priceMin: 1500,
    priceMax: 2200,
    priceUnit: "/qtr",
    peerScore: 4.2,
    reviewCount: 44,
    portfolioDensity: "Medium",
    aumServiced: "€94B",
    location: "Strassen, LU",
    established: 2011,
    feeDeviation: -14,
  },
  {
    id: "p-004",
    name: "Moselle Regulatory Partners",
    verified: true,
    type: "Boutique",
    category: "Legal",
    headcount: 74,
    headcountLabel: "50–99",
    rcsVerified: true,
    techStack: ["Paxus"],
    topClients: ["Tikehau", "Eurazeo"],
    priceMin: 980,
    priceMax: 1600,
    priceUnit: "/qtr",
    peerScore: 4.8,
    reviewCount: 33,
    portfolioDensity: "Low",
    aumServiced: "€18B",
    location: "Luxembourg-Ville, LU",
    established: 2016,
    feeDeviation: -22,
  },
  {
    id: "p-005",
    name: "Vianden Tax Structuring Group",
    verified: true,
    type: "Mid-Market",
    category: "Tax",
    headcount: 410,
    headcountLabel: "250–499",
    rcsVerified: true,
    techStack: ["Investran", "eFront"],
    topClients: ["Bridgepoint", "Permira", "IK Partners"],
    priceMin: 1720,
    priceMax: 2480,
    priceUnit: "/qtr",
    peerScore: 4.3,
    reviewCount: 52,
    portfolioDensity: "Medium",
    aumServiced: "€131B",
    location: "Kirchberg, LU",
    established: 2008,
    feeDeviation: -6,
  },
  {
    id: "p-006",
    name: "Clervaux Depositary Solutions",
    verified: false,
    type: "Boutique",
    category: "Compliance",
    headcount: 48,
    headcountLabel: "25–49",
    rcsVerified: true,
    techStack: ["Yardi"],
    topClients: ["Astorg", "Antin IP"],
    priceMin: 850,
    priceMax: 1400,
    priceUnit: "/qtr",
    peerScore: 4.1,
    reviewCount: 19,
    portfolioDensity: "Low",
    aumServiced: "€9B",
    location: "Hollerich, LU",
    established: 2019,
    feeDeviation: -18,
  },
  {
    id: "p-007",
    name: "Grand Duchy Legal & Domiciliation",
    verified: true,
    type: "Institutional",
    category: "Legal",
    headcount: 690,
    headcountLabel: "500–999",
    rcsVerified: true,
    techStack: ["Paxus", "eFront"],
    topClients: ["KKR", "Carlyle", "Advent"],
    priceMin: 2300,
    priceMax: 3400,
    priceUnit: "/qtr",
    peerScore: 4.5,
    reviewCount: 78,
    portfolioDensity: "High",
    aumServiced: "€356B",
    location: "Cloche d'Or, LU",
    established: 2001,
    feeDeviation: 15,
  },
  {
    id: "p-008",
    name: "Petrusse Middle-Office Services",
    verified: true,
    type: "Mid-Market",
    category: "Fund Operations",
    headcount: 205,
    headcountLabel: "100–249",
    rcsVerified: true,
    techStack: ["Investran", "Yardi"],
    topClients: ["Hg Capital", "Nordic Capital"],
    priceMin: 1350,
    priceMax: 2050,
    priceUnit: "/qtr",
    peerScore: 4.0,
    reviewCount: 41,
    portfolioDensity: "Medium",
    aumServiced: "€67B",
    location: "Gasperich, LU",
    established: 2013,
    feeDeviation: -14,
  },
]

export const STATS = [
  { label: "Indexed Providers", value: "142", trend: "+6 this quarter", positive: true },
  { label: "Active RFIs", value: "1,204", trend: "+18% MoM", positive: true },
  { label: "Avg. Market Fee Deviation", value: "-14%", trend: "vs. list price", positive: true },
  { label: "AUM Under Coverage", value: "€2.4T", trend: "Serviced in LU", positive: true },
]

export const MACRO_CATEGORIES: MacroCategory[] = ["Fund Operations", "Compliance", "Tax", "Legal"]
export const HEADCOUNT_BANDS = ["1–24", "25–99", "100–249", "250–499", "500–999", "1,000+"]
export const TECH_STACKS = ["eFront", "Yardi", "Investran", "Paxus"]
export const PROVIDER_TYPES: ProviderType[] = ["Boutique", "Mid-Market", "Institutional"]
export const PORTFOLIO_DENSITY = ["Low", "Medium", "High"]

export const AI_MESSAGES = [
  {
    role: "user" as const,
    text: "We're launching a Part II RAIF with a PE strategy. Do we need a licensed depositary and what fee impact should we expect?",
  },
  {
    role: "assistant" as const,
    text: "For a RAIF under the 2016 Law you must appoint a Luxembourg depositary (Art. 5) and an authorised AIFM — the RAIF itself isn't CSSF-supervised, but the AIFM is. For a closed-ended PE strategy, a Professional Depositary of Assets Other than Financial Instruments (PDAFI, Art. 26-1) is typically ~30–40% cheaper than a full credit-institution depositary.\n\nBased on 47 indexed depositaries, expect €18k–€34k / year for a sub-€250M fund. I've flagged 3 verified providers matching your Investran + eFront stack.",
  },
]
