"use client"

import type { ReactNode } from "react"

interface AmenityItem {
  icon: ReactNode
  title: string
  description: string
}

interface AmenitiesProps {
  amenities: AmenityItem[]
}

export function Amenities({ amenities }: AmenitiesProps) {
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.currentTarget
    const rect = target.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    target.style.setProperty("--mx", `${(x / rect.width) * 100}%`)
    target.style.setProperty("--my", `${(y / rect.height) * 100}%`)
  }
  const scroll = (direction: "left" | "right") => {
    const container = document.getElementById("amenities-container")
    if (container) {
      const scrollAmount = 300
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section
      id="amenities"
      className="relative overflow-hidden py-16 md:py-20 bg-[var(--navy)] animate-on-scroll"
      onMouseMove={handleMouseMove}
    >
      {/* Royal background effects */}
      <div className="royal-vignette"></div>
      <div className="royal-glaze"></div>
      <div className="royal-particles"></div>
      <div className="royal-orb" style={{ top: "-100px", left: "-140px" }}></div>
      <div className="royal-orb" style={{ bottom: "-140px", right: "-180px", animationDelay: "-6s" }}></div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold heading-gold-stroke mb-3">World-Class Amenities</h2>
          <div className="gilded-divider justify-center mb-4" />
          <p className="text-lg md:text-xl text-[var(--beige)]">Experience luxury living with premium facilities</p>
        </div>

        {/* Mobile Horizontal Scroll Layout */}
        <div className="md:hidden mb-8 relative">
          <div className="mobile-hero-scroller edge-fade-x">
            {amenities.map((amenity, index) => (
              <div key={index} className="mobile-hero-slide">
                <div
                  className="bg-white/5 p-6 rounded-lg shadow-sm text-center card-hover border border-white/10"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-[var(--color-gold)] mb-4 flex justify-center">{amenity.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{amenity.title}</h3>
                  <p className="text-[var(--beige)] text-sm">{amenity.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="scroll-hint scroll-hint-left"></div>
          <div className="scroll-hint scroll-hint-right"></div>
        </div>

        {/* Desktop Horizontal Scroll Layout */}
        <div className="hidden md:block relative">
          <div
            id="amenities-container"
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 edge-fade-x"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-72 bg-white/5 p-8 rounded-lg shadow-sm text-center card-hover border border-white/10"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-[var(--color-gold)] mb-4 flex justify-center">{amenity.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{amenity.title}</h3>
                <p className="text-[var(--beige)] text-sm">{amenity.description}</p>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[var(--color-gold)] hover:brightness-110 text-[color:var(--navy)] p-3 rounded-full shadow-lg hover-lift"
          >
            ←
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[var(--color-gold)] hover:brightness-110 text-[color:var(--navy)] p-3 rounded-full shadow-lg hover-lift"
          >
            →
          </button>
          <div className="scroll-hint scroll-hint-left"></div>
          <div className="scroll-hint scroll-hint-right"></div>
        </div>
      </div>
    </section>
  )
}
