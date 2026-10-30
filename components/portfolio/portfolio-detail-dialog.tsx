"use client"

import Image from "next/image"
import { ArrowUpRight, X } from "lucide-react"
import { useEffect, useRef } from "react"
import type { PortfolioEntry } from "./portfolio-types"
import { getSafeExternalUrl, getSafeImageSrc } from "./portfolio-utils"

type PortfolioDetailDialogProps = {
  entry: PortfolioEntry | null
  onClose: () => void
}

type DetailAction = {
  label: string
  url?: string
}

function DetailField({ label, value }: { label: string; value?: string }) {
  const content = value?.trim()
  if (!content) return null

  return (
    <div className="detail-field">
      <h3>{label}</h3>
      <p>{content}</p>
    </div>
  )
}

function DetailTags({ items }: { items?: string[] }) {
  const tags = items?.filter((item) => item.trim()) ?? []
  if (tags.length === 0) return null

  return (
    <div className="detail-field">
      <h3>Technologies</h3>
      <div className="tag-list">
        {tags.map((tag) => <span className="tech-tag" key={tag}>{tag}</span>)}
      </div>
    </div>
  )
}
function CertificationSkills({ items }: { items?: string[] }) {
  const skills = items?.filter((skill) => skill.trim()) ?? []
  if (skills.length === 0) return null

  return (
    <div className="detail-field">
      <h3>Skills Learned</h3>
      <div className="tag-list">
        {skills.map((skill) => (
          <span className="tech-tag" key={skill}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

function DetailList({ label, items }: { label: string; items?: string[] }) {
  const values = items?.filter((item) => item.trim()) ?? []
  if (values.length === 0) return null

  return (
    <div className="detail-field">
      <h3>{label}</h3>
      <ul className="detail-list">
        {values.map((value) => <li key={value}>{value}</li>)}
      </ul>
    </div>
  )
}

function DetailActions({ actions }: { actions: DetailAction[] }) {
  const availableActions = actions
    .map((action) => ({ ...action, safeUrl: getSafeExternalUrl(action.url) }))
    .filter((action): action is DetailAction & { safeUrl: string } => Boolean(action.safeUrl))

  if (availableActions.length === 0) return null

  return (
    <div className="detail-actions">
      {availableActions.map((action, index) => (
        <a
          className={`action-button ${index === 0 ? "action-button-primary" : "action-button-secondary"}`}
          href={action.safeUrl}
          key={action.label}
          target="_blank"
          rel="noreferrer"
        >
          {action.label}<ArrowUpRight aria-hidden="true" />
        </a>
      ))}
    </div>
  )
}

function DetailContent({ entry }: { entry: PortfolioEntry }) {
  if (entry.type === "project") {
    const imageSrc = getSafeImageSrc(entry.item.imageUrl)
    return (
      <>
        <p className="detail-summary" id="detail-description">{entry.item.shortDescription}</p>
        {imageSrc ? (
          <div className="detail-image">
            <Image src={imageSrc} alt={entry.item.title} fill sizes="(max-width: 760px) 90vw, 680px" unoptimized />
          </div>
        ) : null}
        <DetailField label="Project overview" value={entry.item.description} />
        <DetailTags items={entry.item.technologies} />
        <DetailActions actions={[
          { label: "LIVE DEMO", url: entry.item.liveDemoUrl },
          { label: "VIEW SOURCE CODE", url: entry.item.sourceCodeUrl },
        ]} />
      </>
    )
  }

  if (entry.type === "publication") {
    return (
      <>
        <p className="detail-summary" id="detail-description">{entry.item.shortDescription}</p>
        <DetailField label="Abstract" value={entry.item.abstract} />
        <div className="detail-meta-grid">
          
          <DetailField label="Publication" value={entry.item.venue} />
          <DetailField label="Published On" value={entry.item.publishedAt} />
        </div>
        <DetailActions actions={[
          { label: "VIEW PAPER", url: entry.item.paperUrl },
          { label: "VIEW CERTIFICATE", url: entry.item.certificateUrl },
        ]} />
      </>
    )
  }

  if (entry.type === "certification") {
    return (
      <>
        <div className="detail-meta-grid">
          <DetailField
            label="Issuing organization"
            value={entry.item.issuer}
          />
          <DetailField
            label="Date"
            value={entry.item.issuedOn}
          />
          <DetailField
            label="Credential information"
            value={entry.item.credentialId}
          />
        </div>

        <CertificationSkills items={entry.item.skills} />

        <DetailActions
          actions={[
            {
              label: "VIEW CERTIFICATE",
              url: entry.item.certificateUrl,
            },
          ]}
        />
      </>
    )
  }

  return (
    <>
      <DetailField label="Event description" value={entry.item.eventDescription} />
      <DetailField label="Problem statement" value={entry.item.problemStatement} />
      <DetailField label="Project details" value={entry.item.projectDetails} />
      <DetailField label="My contribution" value={entry.item.contribution} />
      <DetailTags items={entry.item.technologies} />
      <DetailList label="Achievements" items={entry.item.achievements} />
      <DetailActions actions={[
        { label: "VIEW PROJECT", url: entry.item.projectUrl },
        { label: "VIEW CERTIFICATE", url: entry.item.certificateUrl },
      ]} />
    </>
  )
}

export function PortfolioDetailDialog({ entry, onClose }: PortfolioDetailDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!entry || !dialog) return

    if (!dialog.open) dialog.showModal()
    return () => {
      if (dialog.open) dialog.close()
    }
  }, [entry])

  if (!entry) return null

  const typeLabel = {
    project: "PROJECT / DETAILS",
    publication: "PUBLICATION / DETAILS",
    certification: "CERTIFICATION / DETAILS",
    hackathon: "HACKATHON / DETAILS",
  }[entry.type]

  return (
    <dialog
      className="detail-dialog"
      ref={dialogRef}
      aria-labelledby="detail-title"
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) dialogRef.current?.close()
      }}
    >
      <div className="detail-dialog-inner">
        <div className="detail-dialog-topline">
          <p className="section-eyebrow"><span aria-hidden="true" />{typeLabel}</p>
          <button className="dialog-close" type="button" onClick={() => dialogRef.current?.close()} aria-label="Close details" autoFocus>
            <X aria-hidden="true" />
          </button>
        </div>
        <h2 className="detail-title" id="detail-title">{entry.item.title}</h2>
        <div className="detail-content">
          <DetailContent entry={entry} />
        </div>
      </div>
    </dialog>
  )
}
