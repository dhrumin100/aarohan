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
    <section id="amenities" className="py-16 md:py-20 bg-gray-900 animate-on-scroll">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">World-Class Amenities</h2>
          <p className="text-lg md:text-xl text-gray-300">Experience luxury living with premium facilities</p>
        </div>

        {/* Mobile Horizontal Scroll Layout */}
        <div className="md:hidden mb-8">
          <div className="mobile-hero-scroller">
            {amenities.map((amenity, index) => (
              <div key={index} className="mobile-hero-slide">
                <div
                  className="bg-gray-800 p-6 rounded-lg shadow-sm text-center card-hover"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-white mb-4 flex justify-center">{amenity.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{amenity.title}</h3>
                  <p className="text-gray-300 text-sm">{amenity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Horizontal Scroll Layout */}
        <div className="hidden md:block relative">
          <div
            id="amenities-container"
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-72 bg-gray-800 p-8 rounded-lg shadow-sm text-center card-hover"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-white mb-4 flex justify-center">{amenity.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{amenity.title}</h3>
                <p className="text-gray-300 text-sm">{amenity.description}</p>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg hover-lift"
          >
            ←
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg hover-lift"
          >
            →
          </button>
        </div>
      </div>
    </section>
  )
}
