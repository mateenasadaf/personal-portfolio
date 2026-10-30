"use client"

import { ArrowUpRight } from "lucide-react"
import { certifications } from "@/data/certifications"
import { EmptyState } from "./empty-state"
import type { PortfolioEntry } from "./portfolio-types"
import { SectionHeading } from "./section-heading"

export function CertificationsSection({ onSelect }: { onSelect: (entry: PortfolioEntry) => void }) {
  return (
    <section id="certifications" className="content-section content-section-alt" aria-labelledby="certifications-title">
      <div className="page-wrap">
        <SectionHeading eyebrow="04 / CREDENTIALS" title="CERTIFICATIONS" />

        {certifications.length === 0 ? (
          <EmptyState message="Add certifications in data/certifications.ts and they will appear here automatically." />
        ) : (
          <div className="content-grid certification-grid">
            {certifications.map((certification) => (
              <button
                className="portfolio-card compact-card"
                key={certification.id}
                type="button"
                onClick={() => onSelect({ type: "certification", item: certification })}
                aria-label={`View certification details: ${certification.title}`}
              >
                <span className="card-topline"><span>CERTIFICATION</span><ArrowUpRight aria-hidden="true" /></span>
                <span className="card-title">{certification.title}</span>
                {certification.issuer ? <span className="card-description">{certification.issuer}</span> : null}
                <span className="card-action">View details <ArrowUpRight aria-hidden="true" /></span>
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
