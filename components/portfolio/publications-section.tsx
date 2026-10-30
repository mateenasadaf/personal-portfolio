"use client"

import { ArrowUpRight } from "lucide-react"
import { publications } from "@/data/publications"
import { EmptyState } from "./empty-state"
import type { PortfolioEntry } from "./portfolio-types"
import { SectionHeading } from "./section-heading"

export function PublicationsSection({ onSelect }: { onSelect: (entry: PortfolioEntry) => void }) {
  return (
    <section id="publications" className="content-section" aria-labelledby="publications-title">
      <div className="page-wrap">
        <SectionHeading
          eyebrow="03 / RESEARCH"
          title="PUBLICATIONS"
        />

        {publications.length === 0 ? (
          <EmptyState message="Add publications in data/publications.ts and they will appear here automatically." />
        ) : (
          <div className="content-grid two-column-grid">
            {publications.map((publication) => (
              <button
                className="portfolio-card publication-card"
                key={publication.id}
                type="button"
                onClick={() => onSelect({ type: "publication", item: publication })}
                aria-label={`View publication: ${publication.title}`}
              >
                <span className="card-topline"><span>RESEARCH NOTE</span><ArrowUpRight aria-hidden="true" /></span>
                <span className="card-title">{publication.title}</span>
                <span className="card-description">{publication.shortDescription}</span>
                <span className="card-action">View publication <ArrowUpRight aria-hidden="true" /></span>
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
