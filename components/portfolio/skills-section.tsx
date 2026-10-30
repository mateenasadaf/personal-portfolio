
"use client"

import { useMemo, useState } from "react"
import { skills } from "@/data/skills"
import { EmptyState } from "./empty-state"
import { SectionHeading } from "./section-heading"

const proficiencyOrder = {
  expert: 0,
  intermediate: 1,
  basic: 2,
} as const

function getCategoryLabel(category: string) {
  if (/^ai\/ml$/i.test(category)) return "AI"
  return category.toUpperCase()
}

function getCategoryClass(category: string) {
  return category
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
}

export function SkillsSection() {
  const [filter, setFilter] = useState("ALL")

  const categories = useMemo(
    () => [
      "ALL",
      ...Array.from(
        new Set(skills.map((skill) => skill.category)),
      ).map(getCategoryLabel),
    ],
    [],
  )

  const visibleSkills = useMemo(() => {
    return skills
      .filter(
        (skill) =>
          filter === "ALL" ||
          getCategoryLabel(skill.category) === filter,
      )
      .slice()
      .sort(
        (a, b) =>
          proficiencyOrder[a.proficiency] -
          proficiencyOrder[b.proficiency],
      )
  }, [filter])

  const controls = (
    <div className="skills-controls">
      <div
        className="skill-filters"
        role="group"
        aria-label="Filter skills"
      >
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            aria-pressed={filter === category}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div
        className="skill-legend"
        aria-label="Skill proficiency colours"
      >
        <span>
          <i className="proficiency-dot basic" />
          Basic
        </span>

        <span>
          <i className="proficiency-dot intermediate" />
          Intermediate
        </span>

        <span>
          <i className="proficiency-dot expert" />
          Expert
        </span>
      </div>
    </div>
  )

  return (
    <section
      id="skills"
      className="content-section content-section-alt"
      aria-labelledby="skills-title"
    >
      <div className="page-wrap">
        <SectionHeading
          eyebrow="02 / TOOLKIT"
          title="SKILLS"
          aside={controls}
        />

        {visibleSkills.length === 0 ? (
          <EmptyState message="Add skills in data/skills.ts and they will appear here automatically." />
        ) : (
          <div className="skills-grid">
            {visibleSkills.map((skill) => (
              <article
                className={`skill-card skill-category-${getCategoryClass(
                  skill.category,
                )}`}
                key={skill.id}
              >
                <span
                  className={`skill-proficiency-marker ${skill.proficiency}`}
                  aria-hidden="true"
                />

                <div className="skill-card-copy">
                  <h3>{skill.name}</h3>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
