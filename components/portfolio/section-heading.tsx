import type { ReactNode } from "react"

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  aside?: ReactNode
}

export function SectionHeading({ eyebrow, title, description, aside }: SectionHeadingProps) {
  return (
    <div className={`section-heading${aside ? " section-heading-with-aside" : ""}`}>
      <div className="section-heading-copy">
        <p className="section-eyebrow"><span aria-hidden="true" />{eyebrow}</p>
        <h2 className="section-title" id={`${title.toLowerCase().replace(/\s+/g, "-")}-title`}>{title}<span>.</span></h2>
        {description ? <p className="section-description">{description}</p> : null}
      </div>
      {aside ? <div className="section-heading-aside">{aside}</div> : null}
    </div>
  )
}
