"use client"

import { Button } from "@/components/ui/button"
import Slider from "react-slick"

export type GalleryImage = { src: string; alt: string }

interface HeroProps {
  galleryImages: GalleryImage[]
  onOpenContact: () => void
}

export function Hero({ galleryImages, onOpenContact }: HeroProps) {
  return (
    <section id="home" className="relative bg-white animate-on-scroll animate-fade-in hero-section md:min-h-screen">
      {/* Multicolor decorative background (gold + brand) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Left gold glow */}
        <div
          className="absolute -top-20 -left-20 w-[380px] h-[380px] rounded-full blur-3xl opacity-25"
          style={{ background: "radial-gradient(closest-side, var(--color-gold), transparent 70%)" }}
        />
        {/* Right brand glow */}
        <div
          className="absolute top-10 -right-28 w-[460px] h-[460px] rounded-full blur-3xl opacity-25"
          style={{ background: "radial-gradient(closest-side, var(--color-brand), transparent 70%)" }}
        />
        {/* Bottom soft blend */}
        <div
          className="absolute bottom-0 left-1/4 -translate-x-1/2 w-[520px] h-[200px] blur-3xl opacity-15"
          style={{ background: "linear-gradient(90deg, var(--color-gold), var(--color-brand))" }}
        />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-start md:items-center py-8 md:py-20 mobile-optimized-grid">
            {/* Left Content */}
            <div className="text-left space-y-8 order-1 lg:order-1">
              <div className="animate-slide-up">
                <span className="inline-block px-4 py-2 bg-[#d4af37]/15 text-[var(--color-gold)] rounded-full text-sm font-medium mb-6">
                  LUXURY REDEFINED
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 leading-tight font-serif">
                  AAROHAN
                </h1>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-0.5 bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-gold)]"></div>
                  <p className="text-xl md:text-2xl text-gray-700 font-light">by Emberlynn</p>
                </div>
              </div>

              <p
                className="hidden md:block text-lg md:text-xl text-gray-600 leading-relaxed animate-slide-up max-w-lg"
                style={{ animationDelay: "200ms" }}
              >
                Where architectural brilliance meets contemporary luxury. Experience elevated living in Gandhinagar's
                most prestigious address with unmatched quality and sophistication.
              </p>

              <div className="hidden md:grid grid-cols-3 gap-6 animate-slide-up" style={{ animationDelay: "400ms" }}>
                <div className="text-center p-6 bg-gray-50 rounded-xl border hover:bg-gray-100 transition-all duration-300">
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1 font-serif">2</div>
                  <div className="text-gray-600 text-sm uppercase tracking-wider font-medium">Towers</div>
                </div>
                <div className="text-center p-6 rounded-xl border transition-all duration-300 bg-[#d4af37]/10 border-[#d4af37]/40 hover:bg-[#d4af37]/15">
                  <div className="text-3xl md:text-4xl font-bold text-[var(--color-gold)] mb-1 font-serif">22</div>
                  <div className="text-[var(--color-gold)] text-sm uppercase tracking-wider font-medium/90">Stories</div>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-xl border hover:bg-gray-100 transition-all duration-300">
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1 font-serif">148</div>
                  <div className="text-gray-600 text-sm uppercase tracking-wider font-medium">Units</div>
                </div>
              </div>

              <div className="hidden md:flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "600ms" }}>
                <Button
                  onClick={onOpenContact}
                  className="bg-gray-900 hover:bg-gray-800 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 min-h-[44px]"
                >
                  Schedule Private Tour
                </Button>
                <Button
                  onClick={onOpenContact}
                  variant="outline"
                  className="hidden md:inline-flex border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-medium rounded-xl hover:border-gray-400 transition-all duration-300 min-h-[44px]"
                >
                  Download Brochure
                </Button>
              </div>
            </div>

            {/* Right Content - React Slick Carousel */}
            <div className="animate-slide-up order-2 lg:order-2" style={{ animationDelay: "800ms" }}>
              {/* Mobile: Native scroll-snap slider (no external lib) */}
              <div className="md:hidden">
                <div className="bg-white p-3 rounded-2xl shadow-xl overflow-hidden">
                  <div className="mobile-hero-scroller">
                    {galleryImages.map((image, index) => (
                      <div key={index} className="mobile-hero-slide">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="block w-full h-56 object-cover rounded-xl"
                          loading={index === 0 ? "eager" : "lazy"}
                          decoding="async"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                {/* Mobile CTA moved below images */}
                <div className="mt-4 animate-slide-up">
                  <Button
                    onClick={onOpenContact}
                    className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 text-base font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Schedule Private Tour
                  </Button>
                </div>
              </div>

              {/* Desktop/Tablet: Keep carousel */}
              <div className="relative hidden md:block">
                <div className="bg-white p-4 rounded-2xl shadow-xl hero-carousel-enter overflow-hidden min-h-[50vh] md:min-h-[56vh]">
                  <Slider
                    dots={true}
                    infinite={true}
                    speed={700}
                    cssEase="ease-in-out"
                    fade={true}
                    adaptiveHeight={true}
                    slidesToShow={1}
                    slidesToScroll={1}
                    autoplay={true}
                    autoplaySpeed={3500}
                    pauseOnHover={false}
                    waitForAnimate={false}
                    swipeToSlide={true}
                    touchThreshold={8}
                    draggable={true}
                    // lazyLoad removed to satisfy type; using native img lazy attributes instead
                    initialSlide={0}
                    arrows={true}
                    className="hero-slick-carousel"
                    customPaging={(i) => (
                      <div className="w-3 h-3 bg-white/50 rounded-full transition-all duration-300 hover:bg-brand" />
                    )}
                    responsive={[
                      {
                        breakpoint: 768,
                        settings: {
                          arrows: false,
                          dots: true,
                          adaptiveHeight: true,
                          waitForAnimate: false,
                          swipeToSlide: true,
                          touchThreshold: 5,
                          draggable: true,
                          fade: false,
                        },
                      },
                    ]}
                  >
                    {galleryImages.map((image, index) => (
                      <div key={index} className="relative">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="block w-full h-56 sm:h-72 md:h-[500px] object-cover rounded-xl"
                          loading={index === 0 ? "eager" : "lazy"}
                          decoding="async"
                        />
                        <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {index + 1} / {galleryImages.length}
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
