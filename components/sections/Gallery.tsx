"use client"

interface GalleryImage {
  src: string
  alt: string
}

interface GalleryProps {
  images: GalleryImage[]
}

export function Gallery({ images }: GalleryProps) {
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.currentTarget
    const rect = target.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    target.style.setProperty("--mx", `${(x / rect.width) * 100}%`)
    target.style.setProperty("--my", `${(y / rect.height) * 100}%`)
  }

  const scroll = (direction: "left" | "right") => {
    const container = document.getElementById("gallery-container")
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
      id="gallery"
      className="relative overflow-hidden py-16 md:py-20 bg-[var(--navy)] animate-on-scroll"
      onMouseMove={handleMouseMove}
    >
      {/* Royal background effects */}
      <div className="royal-vignette"></div>
      <div className="royal-glaze"></div>
      <div className="royal-particles"></div>
      <div className="royal-orb" style={{ top: "-120px", left: "-160px" }}></div>
      <div className="royal-orb" style={{ bottom: "-160px", right: "-200px", animationDelay: "-5s" }}></div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold heading-gold-stroke mb-3">Project Gallery</h2>
          <div className="gilded-divider justify-center mb-4" />
          <p className="text-lg md:text-xl text-[var(--beige)]">Explore the beauty and elegance of Aarohan</p>
        </div>

        {/* Mobile Horizontal Scroll Layout */}
        <div className="md:hidden mb-8 relative">
          <div className="mobile-hero-scroller edge-fade-x">
            {images.map((image, index) => (
              <div key={index} className="mobile-hero-slide">
                <div
                  className="aspect-square rounded-lg overflow-hidden card-hover framed-media"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" loading="lazy" decoding="async" />
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
            id="gallery-container"
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 edge-fade-x"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 h-64 rounded-lg overflow-hidden card-hover framed-media"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" loading="lazy" decoding="async" />
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[var(--color-gold)] hover:brightness-110 text-[var(--navy)] p-3 rounded-full shadow-lg hover-lift"
          >
            ←
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[var(--color-gold)] hover:brightness-110 text-[var(--navy)] p-3 rounded-full shadow-lg hover-lift"
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
