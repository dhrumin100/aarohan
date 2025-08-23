"use client"

import { Building, Crown, MapPin } from "lucide-react"

export function Overview() {
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.currentTarget
    const rect = target.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    target.style.setProperty("--mx", `${(x / rect.width) * 100}%`)
    target.style.setProperty("--my", `${(y / rect.height) * 100}%`)
  }

  return (
    <section
      id="overview"
      className="relative overflow-hidden py-20 bg-[var(--navy)] animate-on-scroll"
      onMouseMove={handleMouseMove}
    >
      {/* Royal background effects */}
      <div className="royal-vignette"></div>
      <div className="royal-glaze"></div>
      <div className="royal-particles"></div>
      <div className="royal-orb" style={{ top: "-80px", left: "-120px" }}></div>
      <div className="royal-orb" style={{ bottom: "-120px", right: "-160px", animationDelay: "-7s" }}></div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-gold)] mb-6">Experience Aarohan</h2>
          <p className="text-xl text-[var(--beige)] max-w-3xl mx-auto dropcap">
            Where architectural elegance meets premium lifestyle, creating a legacy of luxury living that transcends
            ordinary expectations.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Emotional Highlights */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-[var(--color-gold)]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[var(--color-gold)]/20 transition-colors">
                <Building className="w-10 h-10 text-[var(--color-gold)]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Architectural Poetry</h3>
              <p className="text-[var(--beige)] leading-relaxed">
                Every line, every curve, every space tells a story of timeless elegance and contemporary sophistication.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-[var(--color-gold)]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[var(--color-gold)]/20 transition-colors">
                <Crown className="w-10 h-10 text-[var(--color-gold)]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Lifestyle Redefined</h3>
              <p className="text-[var(--beige)] leading-relaxed">
                Experience a lifestyle that goes beyond luxury—where every amenity is curated for the discerning few.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-[var(--color-gold)]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[var(--color-gold)]/20 transition-colors">
                <MapPin className="w-10 h-10 text-[var(--color-gold)]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Prime Positioning</h3>
              <p className="text-[var(--beige)] leading-relaxed">
                Strategically located where convenience meets prestige, offering the best of urban connectivity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
