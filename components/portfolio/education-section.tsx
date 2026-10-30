import { education } from "@/data/education"
import { SectionHeading } from "./section-heading"

export function EducationSection() {
  return (
    <section id="education" className="content-section content-section-alt" aria-labelledby="education-title">
      <div className="page-wrap">
        <SectionHeading eyebrow="06 / ACADEMIC BACKGROUND" title="EDUCATION" />

        <ol className="education-timeline">
          {education.map((entry) => (
            <li className="education-entry" key={entry.id}>
              <span className="education-marker" aria-hidden="true" />
              <div className="education-entry-main">
                <div className="education-institution-block">
                  <h3>{entry.institution}</h3>
                  <p>{entry.qualification}</p>
                  {entry.result ? <span className="education-result">{entry.result}</span> : null}
                </div>
                <div className="education-meta">
                  <p>{entry.duration}</p>
                  {entry.location ? <span>{entry.location}</span> : null}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
