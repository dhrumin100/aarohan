"use client"

import { Button } from "@/components/ui/button"
import { Building, Zap } from "lucide-react"

interface ConfigurationProps {
  onOpenFloorPlan: (planType: string) => void
}

export function Configuration({ onOpenFloorPlan }: ConfigurationProps) {
  return (
    <section id="configuration" className="relative overflow-hidden py-20 bg-champagne animate-on-scroll">
      <div className="linen-noise pointer-events-none absolute inset-0 -z-10" />
      <div className="container mx-auto px-6">
        <div className="text-center mb-10 animate-slide-up">
          <h2 className="text-4xl font-bold heading-gold-stroke mb-3">Project Configuration</h2>
          <div className="gilded-divider justify-center mb-4" />
          <p className="text-xl text-[var(--navy)]/80 max-w-3xl mx-auto">
            Meticulously planned specifications and premium features that define luxury living standards.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Unit Types - Cleaner Design */}
          {/* Mobile: horizontal scroller */}
          <div className="md:hidden mb-16 animate-slide-up relative" style={{ animationDelay: "120ms" }}>
            <div className="mobile-hero-scroller">
              {/* 3 BHK */}
              <div className="mobile-hero-slide">
                <div className="bg-white p-8 rounded-xl shadow-sm card-gilded card-gilded-hover transition-all duration-300 hover:shadow-lg hover:-translate-y-1.5">
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-[var(--navy)] mb-2">3 BHK</div>
                    <div className="text-[var(--navy)]/70 mb-4">Carpet Area: 1,850 - 2,100 sq.ft</div>
                    <div className="text-sm text-[var(--navy)]/60">Type A & B Available</div>
                  </div>
                  <div className="space-y-3 text-sm text-[var(--navy)]/80">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-[var(--color-gold)] rounded-full mr-3"></div>
                      Master bedroom with walk-in closet
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-[var(--color-gold)] rounded-full mr-3"></div>
                      Premium modular kitchen
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-[var(--color-gold)] rounded-full mr-3"></div>
                      Private balconies with city views
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-[var(--color-gold)] rounded-full mr-3"></div>
                      Designer bathrooms with premium fixtures
                    </div>
                  </div>
                </div>
              </div>
              {/* 4 BHK */}
              <div className="mobile-hero-slide">
                <div className="bg-[var(--navy)] text-white p-8 rounded-xl shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1.5 relative">
                  <div className="absolute top-4 right-4 bg-[var(--color-gold)] text-[var(--navy)] px-3 py-1 text-xs rounded-full font-semibold">
                    Most Popular
                  </div>
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold mb-2">4 BHK</div>
                    <div className="text-[var(--beige)] mb-4">Carpet Area: 2,400 - 2,800 sq.ft</div>
                    <div className="text-sm text-[var(--beige)]/80">Type A & B Available</div>
                  </div>
                  <div className="space-y-3 text-sm text-[var(--beige)]">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-[var(--color-gold)] rounded-full mr-3"></div>
                      Multiple master bedrooms with en-suite
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-[var(--color-gold)] rounded-full mr-3"></div>
                      Separate dining and living areas
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-[var(--color-gold)] rounded-full mr-3"></div>
                      Dedicated study/home office space
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-[var(--color-gold)] rounded-full mr-3"></div>
                      Premium fixtures and fittings throughout
                    </div>
                  </div>
                </div>
              </div>
              {/* 5 BHK */}
              <div className="mobile-hero-slide">
                <div className="bg-white p-8 rounded-xl shadow-sm card-gilded card-gilded-hover hover:shadow-lg transition-shadow">
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-[var(--navy)] mb-2">5 BHK</div>
                    <div className="text-[var(--navy)]/70 mb-4">Carpet Area: 3,500+ sq.ft</div>
                    <div className="text-sm text-[var(--navy)]/60">Penthouse Collection</div>
                  </div>
                  <div className="space-y-3 text-sm text-[var(--navy)]/80">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-[var(--color-gold)] rounded-full mr-3"></div>
                      Duplex design with double height spaces
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-[var(--color-gold)] rounded-full mr-3"></div>
                      Multiple private terraces
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-[var(--color-gold)] rounded-full mr-3"></div>
                      Premium imported fixtures and finishes
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-[var(--color-gold)] rounded-full mr-3"></div>
                      Panoramic city and landscape views
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="scroll-hint scroll-hint-left"></div>
            <div className="scroll-hint scroll-hint-right"></div>
          </div>

          {/* Desktop: 3-column grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-8 mb-16 animate-slide-up" style={{ animationDelay: "160ms" }}>
            <div className="bg-white p-8 rounded-xl shadow-sm card-gilded card-gilded-hover transition-all duration-300 hover:shadow-lg hover:-translate-y-1.5">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-[var(--navy)] mb-2">3 BHK</div>
                <div className="text-[var(--navy)]/70 mb-4">Carpet Area: 1,850 - 2,100 sq.ft</div>
                <div className="text-sm text-[var(--navy)]/60">Type A & B Available</div>
              </div>
              <div className="space-y-3 text-sm text-[var(--navy)]/80">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[var(--color-gold)] rounded-full mr-3"></div>
                  Master bedroom with walk-in closet
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[var(--color-gold)] rounded-full mr-3"></div>
                  Premium modular kitchen
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[var(--color-gold)] rounded-full mr-3"></div>
                  Private balconies with city views
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[var(--color-gold)] rounded-full mr-3"></div>
                  Designer bathrooms with premium fixtures
                </div>
              </div>
            </div>

            <div className="bg-[var(--navy)] text-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow relative">
              <div className="absolute top-4 right-4 bg-[var(--color-gold)] text-[var(--navy)] px-3 py-1 text-xs rounded-full font-semibold">
                Most Popular
              </div>
              <div className="text-center mb-6">
                <div className="text-3xl font-bold mb-2">4 BHK</div>
                <div className="text-[var(--beige)] mb-4">Carpet Area: 2,400 - 2,800 sq.ft</div>
                <div className="text-sm text-[var(--beige)]/80">Type A & B Available</div>
              </div>
              <div className="space-y-3 text-sm text-[var(--beige)]">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[var(--color-gold)] rounded-full mr-3"></div>
                  Multiple master bedrooms with en-suite
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[var(--color-gold)] rounded-full mr-3"></div>
                  Separate dining and living areas
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[var(--color-gold)] rounded-full mr-3"></div>
                  Dedicated study/home office space
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[var(--color-gold)] rounded-full mr-3"></div>
                  Premium fixtures and fittings throughout
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm card-gilded card-gilded-hover hover:shadow-lg transition-shadow">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-[var(--navy)] mb-2">5 BHK</div>
                <div className="text-[var(--navy)]/70 mb-4">Carpet Area: 3,500+ sq.ft</div>
                <div className="text-sm text-[var(--navy)]/60">Penthouse Collection</div>
              </div>
              <div className="space-y-3 text-sm text-[var(--navy)]/80">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[var(--color-gold)] rounded-full mr-3"></div>
                  Duplex design with double height spaces
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[var(--color-gold)] rounded-full mr-3"></div>
                  Multiple private terraces
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[var(--color-gold)] rounded-full mr-3"></div>
                  Premium imported fixtures and finishes
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[var(--color-gold)] rounded-full mr-3"></div>
                  Panoramic city and landscape views
                </div>
              </div>
            </div>
          </div>

          {/* Technical Specifications - Simplified */}
          <div className="grid md:grid-cols-2 gap-8 animate-slide-up" style={{ animationDelay: "180ms" }}>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-[var(--beige)]/50 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <h4 className="text-xl font-semibold text-[var(--navy)] mb-6 flex items-center">
                <Building className="w-5 h-5 mr-2" />
                Construction Specifications
              </h4>
              <div className="space-y-4 text-[var(--navy)]/80">
                <div className="flex justify-between items-center py-2 border-b border-[var(--beige)]/50">
                  <span>Flooring</span>
                  <span className="font-medium">Premium Italian Marble</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-[var(--beige)]/50">
                  <span>Kitchen</span>
                  <span className="font-medium">Modular with Premium Fittings</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-[var(--beige)]/50">
                  <span>Bathrooms</span>
                  <span className="font-medium">Designer with Luxury Fixtures</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-[var(--beige)]/50">
                  <span>Windows</span>
                  <span className="font-medium">Floor-to-Ceiling with DGU</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span>Air Conditioning</span>
                  <span className="font-medium">Centralized Provision</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-[var(--beige)]/50">
              <h4 className="text-xl font-semibold text-[var(--navy)] mb-6 flex items-center">
                <Zap className="w-5 h-5 mr-2" />
                Smart Features
              </h4>
              <div className="space-y-4 text-[var(--navy)]/80">
                <div className="flex justify-between items-center py-2 border-b border-[var(--beige)]/50">
                  <span>Home Automation</span>
                  <span className="font-medium">Smart Ready Infrastructure</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-[var(--beige)]/50">
                  <span>Security</span>
                  <span className="font-medium">Multi-tier with 24/7 Monitoring</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-[var(--beige)]/50">
                  <span>Electrical</span>
                  <span className="font-medium">Premium Modular Switches</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-[var(--beige)]/50">
                  <span>Connectivity</span>
                  <span className="font-medium">High-Speed Internet Ready</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span>Compliance</span>
                  <span className="font-medium">Vastu & RERA Approved</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
