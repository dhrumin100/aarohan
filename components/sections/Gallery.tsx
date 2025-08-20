"use client"

interface GalleryImage {
  src: string
  alt: string
}

interface GalleryProps {
  images: GalleryImage[]
}

export function Gallery({ images }: GalleryProps) {
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
    <section id="gallery" className="py-16 md:py-20 bg-gray-900 animate-on-scroll">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Project Gallery</h2>
          <p className="text-lg md:text-xl text-gray-300">Explore the beauty and elegance of Aarohan</p>
        </div>

        {/* Mobile Horizontal Scroll Layout */}
        <div className="md:hidden mb-8">
          <div className="mobile-hero-scroller">
            {images.map((image, index) => (
              <div key={index} className="mobile-hero-slide">
                <div
                  className="aspect-square rounded-lg overflow-hidden card-hover"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Horizontal Scroll Layout */}
        <div className="hidden md:block relative">
          <div
            id="gallery-container"
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 h-64 rounded-lg overflow-hidden card-hover"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" loading="lazy" decoding="async" />
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
