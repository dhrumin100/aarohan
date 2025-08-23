"use client"

import { RefObject } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, Menu, X } from "lucide-react"

interface HeaderProps {
  headerRef: RefObject<HTMLDivElement | null>
  currentSection: string
  featuresOpen: boolean
  setFeaturesOpen: (open: boolean) => void
  isMobileMenuOpen: boolean
  setIsMobileMenuOpen: (open: boolean) => void
  scrollToSection: (id: string) => void
}

export function Header({
  headerRef,
  currentSection,
  featuresOpen,
  setFeaturesOpen,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  scrollToSection,
}: HeaderProps) {
  return (
    <header ref={headerRef} className="sticky top-0 z-50 backdrop-blur-sm border-b lg:bg-[var(--ivory)]/95 lg:border-[var(--beige)] bg-[var(--navy)]/90 border-[var(--color-gold)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <div className="flex items-center justify-center w-12 h-12 bg-[var(--navy)] rounded-full shadow-lg">
            <div className="relative w-8 h-8">
              {/* Stylized "e" logo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-2xl font-bold text-gold tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
                  e
                </div>
              </div>
              {/* Circular outline with multiple arcs */}
              <svg className="absolute inset-0 w-full h-full text-gold" viewBox="0 0 32 32">
                {/* Main arc */}
                <path
                  d="M16 4 A12 12 0 0 1 28 16 A12 12 0 0 1 16 28 A12 12 0 0 1 4 16 A12 12 0 0 1 16 4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="20 12"
                  strokeDashoffset="0"
                />
                {/* Secondary arc */}
                <path
                  d="M16 6 A10 10 0 0 1 26 16 A10 10 0 0 1 16 26 A10 10 0 0 1 6 16 A10 10 0 0 1 16 6"
                  fill="none"
                  stroke="currentColor"
                  strokeOpacity="0.6"
                  strokeWidth="1"
                  strokeDasharray="15 17"
                  strokeDashoffset="8"
                />
              </svg>
            </div>
          </div>

          {/* Brand Text */}
          <div className="flex flex-col">
            <div className="text-2xl font-bold tracking-wider text-white lg:text-[var(--navy)]" style={{ fontFamily: 'Georgia, serif' }}>
              AAROHAN
            </div>
            <div className="text-xs font-medium tracking-widest uppercase mt-0.5 text-[var(--beige)] lg:text-[var(--navy)]/70">
              by Emberlynn
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("home")}
            className="text-[var(--navy)]/80 hover:text-[var(--navy)] transition-colors text-sm font-medium"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("overview")}
            className="text-[var(--navy)]/80 hover:text-[var(--navy)] transition-colors text-sm font-medium"
          >
            Overview
          </button>
          <div className="relative">
            <button
              onClick={() => setFeaturesOpen(!featuresOpen)}
              className="text-[var(--navy)]/80 hover:text-[var(--navy)] transition-colors text-sm font-medium flex items-center"
              aria-haspopup="menu"
              aria-expanded={featuresOpen}
            >
              Features <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${featuresOpen ? "rotate-180" : ""}`} />
            </button>
            {featuresOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-[var(--ivory)] rounded-xl shadow-xl border border-[var(--beige)] opacity-100 visible transition-all duration-200">
                <button
                  onClick={() => { setFeaturesOpen(false); scrollToSection("configuration") }}
                  className="block w-full text-left px-4 py-3 text-sm text-[var(--navy)]/80 hover:text-[var(--navy)] hover:bg-[var(--beige)]/20 transition-colors rounded-t-xl"
                >
                  Configuration
                </button>
                <button
                  onClick={() => { setFeaturesOpen(false); scrollToSection("amenities") }}
                  className="block w-full text-left px-4 py-3 text-sm text-[var(--navy)]/80 hover:text-[var(--navy)] hover:bg-[var(--beige)]/20 transition-colors"
                >
                  Amenities
                </button>
                <button
                  onClick={() => { setFeaturesOpen(false); scrollToSection("floor-plans") }}
                  className="block w-full text-left px-4 py-3 text-sm text-[var(--navy)]/80 hover:text-[var(--navy)] hover:bg-[var(--beige)]/20 transition-colors rounded-b-xl"
                >
                  Floor Plans
                </button>
              </div>
            )}
          </div>
          <button
            onClick={() => scrollToSection("location")}
            className="text-[var(--navy)]/80 hover:text-[var(--navy)] transition-colors text-sm font-medium"
          >
            Location
          </button>
          <button
            onClick={() => scrollToSection("gallery")}
            className="text-[var(--navy)]/80 hover:text-[var(--navy)] transition-colors text-sm font-medium"
          >
            Gallery
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-[var(--navy)]/80 hover:text-[var(--navy)] transition-colors text-sm font-medium"
          >
            About
          </button>
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-[var(--color-gold)] text-white hover:brightness-110 text-sm px-6 py-2"
          >
            Contact Us
          </Button>
        </nav>
        {/* Mobile: Hamburger */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(true)}
          className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-[var(--beige)] hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-brand"
          aria-label="Open menu"
          aria-controls="mobile-menu"
          aria-expanded={isMobileMenuOpen}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>
      {/* Mobile Menu Overlay (solid backdrop + white panel) */}
      {isMobileMenuOpen && (
        <div id="mobile-menu" className="fixed inset-0 z-[9999] lg:hidden bg-[#0b0b10]">
          {/* Solid backdrop */}
          <div className="absolute inset-0" onClick={() => setIsMobileMenuOpen(false)} />
          {/* Right-side panel */}
          <div className="absolute right-0 top-0 h-full w-[80%] max-w-xs bg-[var(--navy)] text-white shadow-2xl border-l border-white/10 mobile-drawer">
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
              <div className="font-semibold text-gold">Menu</div>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex items-center justify-center rounded-full p-2 text-white hover:text-gold focus:outline-none focus:ring-2 focus:ring-[oklch(0.21_0.034_264.665)]"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="mt-2">
              <ul className="divide-y divide-white/10">
                {[
                  { id: 'home', label: 'Home' },
                  { id: 'overview', label: 'Overview' },
                  { id: 'configuration', label: 'Configuration' },
                  { id: 'location', label: 'Connectivity' },
                  { id: 'amenities', label: 'Amenities' },
                  { id: 'gallery', label: 'Gallery' },
                  { id: 'floor-plans', label: 'Plans' },
                  { id: 'about', label: 'About Us' },
                  { id: 'contact', label: 'Contact' },
                ].map(item => (
                  <li key={item.id}>
                    <button
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        scrollToSection(item.id);
                      }}
                      className={`w-full px-6 py-3 text-center transition-colors bg-gradient-to-r from-[var(--navy)] to-[#0f1120] border border-white/10 
                        ${
                          currentSection === item.id
                            ? "text-gold font-semibold"
                            : "text-[var(--beige)] hover:text-gold"
                        }`}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
