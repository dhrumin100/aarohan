"use client"

import { Button } from "@/components/ui/button"

interface FloorPlansProps {
  onOpenFloorPlan: (planType: string) => void
}

export function FloorPlans({ onOpenFloorPlan }: FloorPlansProps) {
  return (
    <section id="floor-plans" className="py-16 md:py-20 bg-gray-50 animate-on-scroll">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Floor Plans</h2>
          <p className="text-lg md:text-xl text-gray-600">Choose from our thoughtfully designed homes</p>
        </div>

        {/* Mobile: Horizontal scroller of floor plan cards */}
        <div className="md:hidden max-w-6xl mx-auto">
          <div className="mobile-hero-scroller">
            {/* 3 BHK */}
            <div className="mobile-hero-slide">
              <div
                className="bg-white border border-gray-200 rounded-lg p-6 text-center cursor-pointer card-hover"
                onClick={() => onOpenFloorPlan("3 BHK")}
              >
                <div className="mb-4">
                  <img
                    src="/blurred-3bhk-floorplan.png"
                    alt="3 BHK Floor Plan"
                    className="w-full h-40 object-cover rounded-lg mb-4"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">3 BHK</h3>
                <p className="text-gray-600 mb-3">Type A & B</p>
                <div className="space-y-1 text-xs text-gray-600 mb-4">
                  <div>Drawing Room & Dining</div>
                  <div>Master Suites</div>
                  <div>Modern Kitchen</div>
                  <div>Sky Patio</div>
                </div>
                <Button variant="outline" className="w-full mb-2 bg-transparent border-gray-300 text-gray-700 hover:bg-gray-50 py-2">
                  View Details
                </Button>
                <Button variant="ghost" className="w-full text-gray-600 hover:text-gray-800 py-2">Download Plan</Button>
              </div>
            </div>
            {/* 4 BHK */}
            <div className="mobile-hero-slide">
              <div
                className="bg-white rounded-lg p-6 text-center cursor-pointer card-hover border border-gray-200"
                onClick={() => onOpenFloorPlan("4 BHK")}
              >
                <div className="mb-4">
                  <img
                    src="/blurred-4bhk-floorplan.png"
                    alt="4 BHK Floor Plan"
                    className="w-full h-40 object-cover rounded-lg mb-4"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">4 BHK</h3>
                <p className="text-gray-600 mb-3">Type A & B</p>
                <div className="space-y-1 text-xs text-gray-600 mb-4">
                  <div>Spacious Living Areas</div>
                  <div>Multiple Master Suites</div>
                  <div>Premium Kitchen</div>
                  <div>Private Balconies</div>
                </div>
                <Button className="w-full mb-2 bg-gray-900 text-white hover:bg-gray-800 py-2">View Details</Button>
                <Button variant="ghost" className="w-full text-gray-600 hover:text-gray-800 py-2">Download Plan</Button>
              </div>
            </div>
            {/* 5 BHK */}
            <div className="mobile-hero-slide">
              <div
                className="bg-white border border-gray-200 rounded-lg p-6 text-center cursor-pointer card-hover"
                onClick={() => onOpenFloorPlan("5 BHK Penthouse")}
              >
                <div className="mb-4">
                  <img
                    src="/blurred-penthouse-layout.png"
                    alt="5 BHK Penthouse Floor Plan"
                    className="w-full h-40 object-cover rounded-lg mb-4"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">5 BHK</h3>
                <p className="text-gray-600 mb-3">Penthouse</p>
                <div className="space-y-1 text-xs text-gray-600 mb-4">
                  <div>Duplex Design</div>
                  <div>Multiple Terraces</div>
                  <div>Double Height Spaces</div>
                  <div>Premium Finishes</div>
                </div>
                <Button variant="outline" className="w-full mb-2 bg-transparent border-gray-300 text-gray-700 hover:bg-gray-50 py-2">
                  View Details
                </Button>
                <Button variant="ghost" className="w-full text-gray-600 hover:text-gray-800 py-2">Download Plan</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop: 3-column grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {/* 3 BHK */}
          <div
            className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 text-center cursor-pointer card-hover"
            onClick={() => onOpenFloorPlan("3 BHK")}
          >
            <div className="mb-4 md:mb-6">
              <img
                src="/blurred-3bhk-floorplan.png"
                alt="3 BHK Floor Plan"
                className="w-full h-40 md:h-48 object-cover rounded-lg mb-4"
                loading="lazy"
                decoding="async"
              />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">3 BHK</h3>
            <p className="text-gray-600 mb-3 md:mb-4">Type A & B</p>
            <div className="space-y-1 md:space-y-2 text-xs md:text-sm text-gray-600 mb-4 md:mb-6">
              <div>Drawing Room & Dining</div>
              <div>Master Suites</div>
              <div>Modern Kitchen</div>
              <div>Sky Patio</div>
            </div>
            <Button
              variant="outline"
              className="w-full mb-2 bg-transparent border-gray-300 text-gray-700 hover:bg-gray-50 text-sm md:text-base py-2 md:py-3"
            >
              View Details
            </Button>
            <Button variant="ghost" className="w-full text-gray-600 hover:text-gray-800 text-sm md:text-base py-2 md:py-3">
              Download Plan
            </Button>
          </div>

          {/* 4 BHK */}
          <div
            className="bg-white rounded-lg p-6 md:p-8 text-center cursor-pointer card-hover border border-gray-200"
            onClick={() => onOpenFloorPlan("4 BHK")}
          >
            <div className="mb-4 md:mb-6">
              <img
                src="/blurred-4bhk-floorplan.png"
                alt="4 BHK Floor Plan"
                className="w-full h-40 md:h-48 object-cover rounded-lg mb-4"
                loading="lazy"
                decoding="async"
              />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">4 BHK</h3>
            <p className="text-gray-600 mb-3 md:mb-4">Type A & B</p>
            <div className="space-y-1 md:space-y-2 text-xs md:text-sm text-gray-600 mb-4 md:mb-6">
              <div>Spacious Living Areas</div>
              <div>Multiple Master Suites</div>
              <div>Premium Kitchen</div>
              <div>Private Balconies</div>
            </div>
            <Button className="w-full mb-2 bg-gray-900 text-white hover:bg-gray-800 text-sm md:text-base py-2 md:py-3">View Details</Button>
            <Button variant="ghost" className="w-full text-gray-600 hover:text-gray-800 text-sm md:text-base py-2 md:py-3">
              Download Plan
            </Button>
          </div>

          {/* 5 BHK */}
          <div
            className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 text-center cursor-pointer card-hover"
            onClick={() => onOpenFloorPlan("5 BHK Penthouse")}
          >
            <div className="mb-4 md:mb-6">
              <img
                src="/blurred-penthouse-layout.png"
                alt="5 BHK Penthouse Floor Plan"
                className="w-full h-40 md:h-48 object-cover rounded-lg mb-4"
                loading="lazy"
                decoding="async"
              />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">5 BHK</h3>
            <p className="text-gray-600 mb-3 md:mb-4">Penthouse</p>
            <div className="space-y-1 md:space-y-2 text-xs md:text-sm text-gray-600 mb-4 md:mb-6">
              <div>Duplex Design</div>
              <div>Multiple Terraces</div>
              <div>Double Height Spaces</div>
              <div>Premium Finishes</div>
            </div>
            <Button
              variant="outline"
              className="w-full mb-2 bg-transparent border-gray-300 text-gray-700 hover:bg-gray-50 text-sm md:text-base py-2 md:py-3"
            >
              View Details
            </Button>
            <Button variant="ghost" className="w-full text-gray-600 hover:text-gray-800 text-sm md:text-base py-2 md:py-3">
              Download Plan
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
