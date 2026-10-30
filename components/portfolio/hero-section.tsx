
import { ArrowDown, ArrowRight, MapPin } from "lucide-react"
import { profile } from "@/data/profile"

export function HeroSection() {
  return (
    <section
      id="home"
      className="hero-section page-wrap"
      aria-labelledby="hero-title"
    >
      <div className="hero-copy">
        <p className="hero-eyebrow">
          <span className="live-indicator" />
          PERSONAL PORTFOLIO
        </p>

        <h1 id="hero-title">
          <span className="hero-name">{profile.name}</span>
        </h1>

        <p className="hero-role">
          {profile.role}
        </p>

        <p className="hero-location">
          <MapPin aria-hidden="true" />
          {profile.location}
        </p>

        <div className="hero-actions">
          <a className="action-button action-button-primary" href="#projects">
            Explore work <ArrowRight aria-hidden="true" />
          </a>

          <a className="action-button action-button-secondary" href="#contact">
            Get in touch
          </a>
        </div>
      </div>

      <div className="hero-introduction">
        <p className="introduction-eyebrow">ABOUT ME</p>
        <p className="hero-description">{profile.introduction}</p>
      </div>

      <a className="scroll-cue" href="#projects">
        <span>SCROLL TO EXPLORE</span>
        <ArrowDown aria-hidden="true" />
      </a>
    </section>
  )
}
