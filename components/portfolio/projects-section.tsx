"use client"

import { ArrowUpRight } from "lucide-react"
import { projects } from "@/data/projects"
import { EmptyState } from "./empty-state"
import type { PortfolioEntry } from "./portfolio-types"
import { SectionHeading } from "./section-heading"

export function ProjectsSection({ onSelect }: { onSelect: (entry: PortfolioEntry) => void }) {
  return (
    <section id="projects" className="content-section" aria-labelledby="projects-title">
      <div className="page-wrap">
        <SectionHeading
          eyebrow="01 / SELECTED WORK"
          title="PROJECTS"
          description="A space for the work, experiments, and ideas you choose to share."
        />

        {projects.length === 0 ? (
          <EmptyState message="Add projects in data/projects.ts and they will appear here automatically." />
        ) : (
          <div className="content-grid project-grid">
            {projects.map((project, index) => (
              <button
                className="portfolio-card project-card"
                key={project.id}
                type="button"
                onClick={() => onSelect({ type: "project", item: project })}
                aria-label={`Explore project: ${project.title}`}
              >
                <span className="card-topline"><span>PROJECT / {String(index + 1).padStart(2, "0")}</span><ArrowUpRight aria-hidden="true" /></span>
                <span className="card-title">{project.title}</span>
                <span className="card-description">{project.shortDescription}</span>
                {project.technologies.length > 0 ? (
                  <span className="tag-list">
                    {project.technologies.map((technology) => <span className="tech-tag" key={technology}>{technology}</span>)}
                  </span>
                ) : null}
                <span className="card-action">Explore project <ArrowUpRight aria-hidden="true" /></span>
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
