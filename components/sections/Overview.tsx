"use client"

import { Building, Crown, MapPin } from "lucide-react"

export function Overview() {
  return (
    <section id="overview" className="py-20 bg-gray-900 animate-on-scroll">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Experience Aarohan</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Where architectural elegance meets premium lifestyle, creating a legacy of luxury living that transcends
            ordinary expectations.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Emotional Highlights */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-colors">
                <Building className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Architectural Poetry</h3>
              <p className="text-gray-300 leading-relaxed">
                Every line, every curve, every space tells a story of timeless elegance and contemporary sophistication.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-colors">
                <Crown className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Lifestyle Redefined</h3>
              <p className="text-gray-300 leading-relaxed">
                Experience a lifestyle that goes beyond luxury—where every amenity is curated for the discerning few.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-colors">
                <MapPin className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Prime Positioning</h3>
              <p className="text-gray-300 leading-relaxed">
                Strategically located where convenience meets prestige, offering the best of urban connectivity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
