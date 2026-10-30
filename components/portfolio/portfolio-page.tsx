"use client"

import { ArrowUpRight } from "lucide-react"
import { useCallback, useState } from "react"
import { profile } from "@/data/profile"
import { CertificationsSection } from "./certifications-section"
import { ContactSection } from "./contact-section"
import { EducationSection } from "./education-section"

import { HeroSection } from "./hero-section"
import { PortfolioDetailDialog } from "./portfolio-detail-dialog"
import { ProjectsSection } from "./projects-section"
import { PublicationsSection } from "./publications-section"
import { SiteHeader } from "./site-header"
import { SkillsSection } from "./skills-section"
import type { PortfolioEntry } from "./portfolio-types"

export function PortfolioPage() {
  const [selectedEntry, setSelectedEntry] = useState<PortfolioEntry | null>(null)
  const closeDetails = useCallback(() => setSelectedEntry(null), [])

  return (
    <div className="portfolio-shell">
      <SiteHeader />
      <main>
        <HeroSection />
        <ProjectsSection onSelect={setSelectedEntry} />
        <SkillsSection />
        <PublicationsSection onSelect={setSelectedEntry} />
        <CertificationsSection onSelect={setSelectedEntry} />
        
        <EducationSection />
        <ContactSection />
      </main>
      <footer className="site-footer">
        <div className="page-wrap footer-inner">
          <span>© {profile.name} <i aria-hidden="true">/</i> PERSONAL PORTFOLIO</span>
          <a href="#home">Back to top <ArrowUpRight aria-hidden="true" /></a>
        </div>
      </footer>
      <PortfolioDetailDialog entry={selectedEntry} onClose={closeDetails} />
    </div>
  )
}
