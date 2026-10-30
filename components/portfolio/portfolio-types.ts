import type { Certification } from "@/data/certifications"
import type { Hackathon } from "@/data/hackathons"
import type { Project } from "@/data/projects"
import type { Publication } from "@/data/publications"

export type PortfolioEntry =
  | { type: "project"; item: Project }
  | { type: "publication"; item: Publication }
  | { type: "certification"; item: Certification }
  | { type: "hackathon"; item: Hackathon }
