"use client"

import { Button } from "@/components/ui/button"

interface FloorPlansProps {
  onOpenFloorPlan: (planType: string) => void
}

export function FloorPlans({ onOpenFloorPlan }: FloorPlansProps) {
  return (
    <section id="floor-plans" className="relative overflow-hidden py-16 md:py-20 bg-champagne animate-on-scroll">
      <div className="linen-noise pointer-events-none absolute inset-0 -z-10" />
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold heading-gold-stroke mb-4">Floor Plans</h2>
          <div className="gilded-divider justify-center mb-3" />
          <p className="text-lg md:text-xl text-[var(--navy)]/80">Choose from our thoughtfully designed homes</p>
        </div>

        {/* Mobile: Horizontal scroller of floor plan cards */}
        <div className="md:hidden max-w-6xl mx-auto animate-slide-up relative" style={{ animationDelay: "120ms" }}>
          <div className="mobile-hero-scroller">
            {/* 3 BHK */}
            <div className="mobile-hero-slide">
              <div
                className="bg-white card-gilded card-gilded-hover rounded-lg p-6 text-center cursor-pointer card-hover transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                onClick={() => onOpenFloorPlan("3 BHK")}
              >
                <div className="mb-4 framed-media">
                  <img
                    src="/blurred-3bhk-floorplan.png"
                    alt="3 BHK Floor Plan"
                    className="w-full h-40 object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <h3 className="text-xl font-bold text-[var(--navy)] mb-2">3 BHK</h3>
                <p className="text-[var(--navy)]/80 mb-3">Type A & B</p>
                <div className="space-y-1 text-xs text-[var(--navy)]/70 mb-4">
                  <div>Drawing Room & Dining</div>
                  <div>Master Suites</div>
                  <div>Modern Kitchen</div>
                  <div>Sky Patio</div>
                </div>
                <Button variant="outline" className="w-full mb-2 bg-transparent border-[var(--beige)] text-[var(--navy)] hover:bg-[var(--beige)]/20 py-2">
                  View Details
                </Button>
                <Button variant="ghost" className="w-full text-[var(--navy)]/80 hover:text-[var(--navy)] py-2">Download Plan</Button>
              </div>
            </div>
            {/* 4 BHK */}
            <div className="mobile-hero-slide">
              <div
                className="bg-white rounded-lg p-6 text-center cursor-pointer card-hover card-gilded card-gilded-hover transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                onClick={() => onOpenFloorPlan("4 BHK")}
              >
                <div className="mb-4 framed-media">
                  <img
                    src="/blurred-4bhk-floorplan.png"
                    alt="4 BHK Floor Plan"
                    className="w-full h-40 object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <h3 className="text-xl font-bold text-[var(--navy)] mb-2">4 BHK</h3>
                <p className="text-[var(--navy)]/80 mb-3">Type A & B</p>
                <div className="space-y-1 text-xs text-[var(--navy)]/70 mb-4">
                  <div>Spacious Living Areas</div>
                  <div>Multiple Master Suites</div>
                  <div>Premium Kitchen</div>
                  <div>Private Balconies</div>
                </div>
                <Button className="w-full mb-2 bg-[var(--color-gold)] text-white hover:brightness-110 py-2">View Details</Button>
                <Button variant="ghost" className="w-full text-[var(--navy)]/80 hover:text-[var(--navy)] py-2">Download Plan</Button>
              </div>
            </div>
            {/* 5 BHK */}
            <div className="mobile-hero-slide">
              <div
                className="bg-white card-gilded card-gilded-hover rounded-lg p-6 text-center cursor-pointer card-hover transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                onClick={() => onOpenFloorPlan("5 BHK Penthouse")}
              >
                <div className="mb-4 framed-media">
                  <img
                    src="/blurred-penthouse-layout.png"
                    alt="5 BHK Penthouse Floor Plan"
                    className="w-full h-40 object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <h3 className="text-xl font-bold text-[var(--navy)] mb-2">5 BHK</h3>
                <p className="text-[var(--navy)]/80 mb-3">Penthouse</p>
                <div className="space-y-1 text-xs text-[var(--navy)]/70 mb-4">
                  <div>Duplex Design</div>
                  <div>Multiple Terraces</div>
                  <div>Double Height Spaces</div>
                  <div>Premium Finishes</div>
                </div>
                <Button variant="outline" className="w-full mb-2 bg-transparent border-[var(--beige)] text-[var(--navy)] hover:bg-[var(--beige)]/20 py-2">
                  View Details
                </Button>
                <Button variant="ghost" className="w-full text-[var(--navy)]/80 hover:text-[var(--navy)] py-2">Download Plan</Button>
              </div>
            </div>
          </div>
          <div className="scroll-hint scroll-hint-left"></div>
          <div className="scroll-hint scroll-hint-right"></div>
        </div>

        {/* Desktop: 3-column grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto animate-slide-up" style={{ animationDelay: "160ms" }}>
          {/* 3 BHK */}
          <div
            className="bg-white card-gilded card-gilded-hover rounded-lg p-6 md:p-8 text-center cursor-pointer card-hover transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg"
            onClick={() => onOpenFloorPlan("3 BHK")}
          >
            <div className="mb-4 md:mb-6 framed-media">
              <img
                src="/blurred-3bhk-floorplan.png"
                alt="3 BHK Floor Plan"
                className="w-full h-40 md:h-48 object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-[var(--navy)] mb-2">3 BHK</h3>
            <p className="text-[var(--navy)]/80 mb-3 md:mb-4">Type A & B</p>
            <div className="space-y-1 md:space-y-2 text-xs md:text-sm text-[var(--navy)]/70 mb-4 md:mb-6">
              <div>Drawing Room & Dining</div>
              <div>Master Suites</div>
              <div>Modern Kitchen</div>
              <div>Sky Patio</div>
            </div>
            <Button
              variant="outline"
              className="w-full mb-2 bg-transparent border-[var(--beige)] text-[var(--navy)] hover:bg-[var(--beige)]/20 text-sm md:text-base py-2 md:py-3"
            >
              View Details
            </Button>
            <Button variant="ghost" className="w-full text-[var(--navy)]/80 hover:text-[var(--navy)] text-sm md:text-base py-2 md:py-3">
              Download Plan
            </Button>
          </div>

          {/* 4 BHK */}
          <div
            className="bg-white rounded-lg p-6 md:p-8 text-center cursor-pointer card-hover card-gilded card-gilded-hover transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg"
            onClick={() => onOpenFloorPlan("4 BHK")}
          >
            <div className="mb-4 md:mb-6 framed-media">
              <img
                src="/blurred-4bhk-floorplan.png"
                alt="4 BHK Floor Plan"
                className="w-full h-40 md:h-48 object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-[var(--color-gold)] mb-2">4 BHK</h3>
            <p className="text-[var(--navy)]/80 mb-3 md:mb-4">Type A & B</p>
            <div className="space-y-1 md:space-y-2 text-xs md:text-sm text-[var(--navy)]/70 mb-4 md:mb-6">
              <div>Spacious Living Areas</div>
              <div>Multiple Master Suites</div>
              <div>Premium Kitchen</div>
              <div>Private Balconies</div>
            </div>
            <Button className="w-full mb-2 bg-[var(--color-gold)] text-white hover:brightness-110 text-sm md:text-base py-2 md:py-3">View Details</Button>
            <Button variant="ghost" className="w-full text-[var(--navy)]/80 hover:text-[var(--navy)] text-sm md:text-base py-2 md:py-3">
              Download Plan
            </Button>
          </div>

          {/* 5 BHK */}
          <div
            className="bg-white card-gilded card-gilded-hover rounded-lg p-6 md:p-8 text-center cursor-pointer card-hover transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg"
            onClick={() => onOpenFloorPlan("5 BHK Penthouse")}
          >
            <div className="mb-4 md:mb-6 framed-media">
              <img
                src="/blurred-penthouse-layout.png"
                alt="5 BHK Penthouse Floor Plan"
                className="w-full h-40 md:h-48 object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-[var(--navy)] mb-2">5 BHK</h3>
            <p className="text-[var(--navy)]/80 mb-3 md:mb-4">Penthouse</p>
            <div className="space-y-1 md:space-y-2 text-xs md:text-sm text-[var(--navy)]/70 mb-4 md:mb-6">
              <div>Duplex Design</div>
              <div>Multiple Terraces</div>
              <div>Double Height Spaces</div>
              <div>Premium Finishes</div>
            </div>
            <Button
              variant="outline"
              className="w-full mb-2 bg-transparent border-[var(--beige)] text-[var(--navy)] hover:bg-[var(--beige)]/20 text-sm md:text-base py-2 md:py-3"
            >
              View Details
            </Button>
            <Button variant="ghost" className="w-full text-[var(--navy)]/80 hover:text-[var(--navy)] text-sm md:text-base py-2 md:py-3">
              Download Plan
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
