import { ArrowUpRight, Code2, Mail } from "lucide-react"
import { socials } from "@/data/socials"
import { getMailto, getSafeExternalUrl } from "./portfolio-utils"
import { SectionHeading } from "./section-heading"

export function ContactSection() {
  const contactItems = [
    { label: "GitHub", value: socials.githubUrl, href: getSafeExternalUrl(socials.githubUrl), icon: <span className="contact-monogram" aria-hidden="true">GH</span>, hint: "Open GitHub profile" },
    { label: "LinkedIn", value: socials.linkedinUrl, href: getSafeExternalUrl(socials.linkedinUrl), icon: <span className="contact-monogram" aria-hidden="true">in</span>, hint: "Open LinkedIn profile" },
    { label: "LeetCode", value: socials.leetcodeUrl, href: getSafeExternalUrl(socials.leetcodeUrl), icon: <Code2 aria-hidden="true" />, hint: "Open LeetCode profile" },
    { label: "Gmail", value: socials.email, href: getMailto(socials.email), icon: <Mail aria-hidden="true" />, hint: "Send an email" },
  ]

  return (
    <section id="contact" className="content-section contact-section" aria-labelledby="contact-title">
      <div className="page-wrap">
        <SectionHeading
          eyebrow="07 / SAY HELLO"
          title="CONTACT"
        />

        <div className="contact-grid">
          {contactItems.map((item) => (
            <article className={`contact-card${item.href ? " is-linked" : " is-empty"}`} key={item.label}>
              {item.href ? (
                <a
                  href={item.href}
                  target={item.label === "Gmail" ? undefined : "_blank"}
                  rel={item.label === "Gmail" ? undefined : "noreferrer"}
                  aria-label={`${item.hint}: ${item.label}`}
                >
                  <span className="contact-icon">{item.icon}</span>
                  <span className="contact-label">{item.label}</span>
                  <span className="contact-value">{item.value}</span>
                  <span className="contact-link-mark" aria-hidden="true"><ArrowUpRight /></span>
                </a>
              ) : (
                <div aria-disabled="true">
                  <span className="contact-icon">{item.icon}</span>
                  <span className="contact-label">{item.label}</span>
                  <span className="contact-value">Add details in data/socials.ts</span>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
