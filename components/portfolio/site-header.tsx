"use client"

import { Menu, X } from "lucide-react"
import { useState } from "react"

const navigationItems = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Publications", href: "#publications" },
  { label: "Certifications", href: "#certifications" },
  
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
]

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function closeMenu() {
    setIsMenuOpen(false)
  }

  return (
    <header className="site-header">
      <div className="header-inner page-wrap">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Portfolio home">
          <span className="brand-mark" aria-hidden="true">P</span>
          <span className="brand-name">PORTFOLIO<span> / 01</span></span>
        </a>

        <nav
          id="primary-navigation"
          className={`primary-nav${isMenuOpen ? " is-open" : ""}`}
          aria-label="Primary navigation"
        >
          {navigationItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className="menu-toggle"
          type="button"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-controls="primary-navigation"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
    </header>
  )
}
