"use client"

import { Button } from "@/components/ui/button"
import { Building, Zap } from "lucide-react"

interface ConfigurationProps {
  onOpenFloorPlan: (planType: string) => void
}

export function Configuration({ onOpenFloorPlan }: ConfigurationProps) {
  return (
    <section id="configuration" className="py-20 bg-white animate-on-scroll">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Project Configuration</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meticulously planned specifications and premium features that define luxury living standards.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Unit Types - Cleaner Design */}
          {/* Mobile: horizontal scroller */}
          <div className="md:hidden mb-16">
            <div className="mobile-hero-scroller">
              {/* 3 BHK */}
              <div className="mobile-hero-slide">
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-gray-900 mb-2">3 BHK</div>
                    <div className="text-gray-600 mb-4">1,850 - 2,100 sq.ft</div>
                    <div className="text-sm text-gray-500">Type A & B Available</div>
                  </div>
                  <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-gray-900 rounded-full mr-3"></div>
                      Master bedroom with walk-in closet
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-gray-900 rounded-full mr-3"></div>
                      Premium modular kitchen
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-gray-900 rounded-full mr-3"></div>
                      Private balconies with city views
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-gray-900 rounded-full mr-3"></div>
                      Designer bathrooms with premium fixtures
                    </div>
                  </div>
                </div>
              </div>
              {/* 4 BHK */}
              <div className="mobile-hero-slide">
                <div className="bg-gray-900 text-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow relative">
                  <div className="absolute top-4 right-4 bg-white text-gray-900 px-3 py-1 text-xs rounded-full font-semibold">
                    Most Popular
                  </div>
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold mb-2">4 BHK</div>
                    <div className="text-gray-300 mb-4">2,400 - 2,800 sq.ft</div>
                    <div className="text-sm text-gray-400">Type A & B Available</div>
                  </div>
                  <div className="space-y-3 text-sm text-gray-300">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      Multiple master bedrooms with en-suite
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      Separate dining and living areas
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      Dedicated study/home office space
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      Premium fixtures and fittings throughout
                    </div>
                  </div>
                </div>
              </div>
              {/* 5 BHK */}
              <div className="mobile-hero-slide">
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-gray-900 mb-2">5 BHK</div>
                    <div className="text-gray-600 mb-4">3,500+ sq.ft</div>
                    <div className="text-sm text-gray-500">Penthouse Collection</div>
                  </div>
                  <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-gray-900 rounded-full mr-3"></div>
                      Duplex design with double height spaces
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-gray-900 rounded-full mr-3"></div>
                      Multiple private terraces
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-gray-900 rounded-full mr-3"></div>
                      Premium imported fixtures and finishes
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-gray-900 rounded-full mr-3"></div>
                      Panoramic city and landscape views
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop: 3-column grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-gray-900 mb-2">3 BHK</div>
                <div className="text-gray-600 mb-4">1,850 - 2,100 sq.ft</div>
                <div className="text-sm text-gray-500">Type A & B Available</div>
              </div>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-gray-900 rounded-full mr-3"></div>
                  Master bedroom with walk-in closet
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-gray-900 rounded-full mr-3"></div>
                  Premium modular kitchen
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-gray-900 rounded-full mr-3"></div>
                  Private balconies with city views
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-gray-900 rounded-full mr-3"></div>
                  Designer bathrooms with premium fixtures
                </div>
              </div>
            </div>

            <div className="bg-gray-900 text-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow relative">
              <div className="absolute top-4 right-4 bg-white text-gray-900 px-3 py-1 text-xs rounded-full font-semibold">
                Most Popular
              </div>
              <div className="text-center mb-6">
                <div className="text-3xl font-bold mb-2">4 BHK</div>
                <div className="text-gray-300 mb-4">2,400 - 2,800 sq.ft</div>
                <div className="text-sm text-gray-400">Type A & B Available</div>
              </div>
              <div className="space-y-3 text-sm text-gray-300">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Multiple master bedrooms with en-suite
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Separate dining and living areas
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Dedicated study/home office space
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Premium fixtures and fittings throughout
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-gray-900 mb-2">5 BHK</div>
                <div className="text-gray-600 mb-4">3,500+ sq.ft</div>
                <div className="text-sm text-gray-500">Penthouse Collection</div>
              </div>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-gray-900 rounded-full mr-3"></div>
                  Duplex design with double height spaces
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-gray-900 rounded-full mr-3"></div>
                  Multiple private terraces
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-gray-900 rounded-full mr-3"></div>
                  Premium imported fixtures and finishes
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-gray-900 rounded-full mr-3"></div>
                  Panoramic city and landscape views
                </div>
              </div>
            </div>
          </div>

          {/* Technical Specifications - Simplified */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h4 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <Building className="w-5 h-5 mr-2" />
                Construction Specifications
              </h4>
              <div className="space-y-4 text-gray-600">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span>Flooring</span>
                  <span className="font-medium">Premium Italian Marble</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span>Kitchen</span>
                  <span className="font-medium">Modular with Premium Fittings</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span>Bathrooms</span>
                  <span className="font-medium">Designer with Luxury Fixtures</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span>Windows</span>
                  <span className="font-medium">Floor-to-Ceiling with DGU</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span>Air Conditioning</span>
                  <span className="font-medium">Centralized Provision</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h4 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <Zap className="w-5 h-5 mr-2" />
                Smart Features
              </h4>
              <div className="space-y-4 text-gray-600">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span>Home Automation</span>
                  <span className="font-medium">Smart Ready Infrastructure</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span>Security</span>
                  <span className="font-medium">Multi-tier with 24/7 Monitoring</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span>Electrical</span>
                  <span className="font-medium">Premium Modular Switches</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
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
