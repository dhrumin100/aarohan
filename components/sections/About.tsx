"use client"

export function About() {
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
      id="about"
      className="relative overflow-hidden py-20 bg-[var(--navy)] animate-on-scroll"
      onMouseMove={handleMouseMove}
    >
      {/* Royal background effects */}
      <div className="royal-vignette"></div>
      <div className="royal-glaze"></div>
      <div className="royal-particles"></div>
      <div className="royal-orb" style={{ top: "-80px", left: "-100px" }}></div>
      <div className="royal-orb" style={{ bottom: "-140px", right: "-180px", animationDelay: "-8s" }}></div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[var(--color-gold)] mb-4">About Emberlynn Developers LLP</h2>
            <p className="text-xl text-[var(--beige)]">Discover the vision and expertise behind Aarohan by Emberlynn</p>
          </div>

          {/* Mobile: horizontal scroller for About cards */}
          <div className="md:hidden mb-16">
            <div className="mobile-hero-scroller">
              <div className="mobile-hero-slide">
                <div className="card-hover p-8 bg-white/5 border border-white/10 rounded-lg">
                  <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                  <p className="text-[var(--beige)] mb-4">
                    Emberlynn Developers LLP stands as a beacon of excellence in the real estate industry, committed to
                    creating exceptional living experiences that blend luxury, comfort, and innovation.
                  </p>
                  <p className="text-[var(--beige)]">
                    Under the visionary leadership of Mr. Krunal Sangani, our company has established itself as a trusted
                    name in premium residential developments across Gujarat.
                  </p>
                </div>
              </div>
              <div className="mobile-hero-slide">
                <div className="card-hover p-8 bg-white/5 border border-white/10 rounded-lg">
                  <h3 className="text-2xl font-bold text-white mb-4">Our Legacy</h3>
                  <p className="text-[var(--beige)] mb-4">
                    Our flagship projects include the successful completion of Emberlynn, Emberlynn-2, and Emberlynn-3,
                    each setting new standards in architectural excellence and resident satisfaction.
                  </p>
                  <p className="text-[var(--beige)]">
                    With Aarohan by Emberlynn, we continue this legacy of creating homes that are not just living spaces,
                    but lifestyle destinations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop grid */}
          <div className="hidden md:grid md:grid-cols-2 gap-12 mb-16">
            <div className="card-hover p-8 bg-white/5 border border-white/10 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-[var(--beige)] mb-4">
                Emberlynn Developers LLP stands as a beacon of excellence in the real estate industry, committed to
                creating exceptional living experiences that blend luxury, comfort, and innovation.
              </p>
              <p className="text-[var(--beige)]">
                Under the visionary leadership of Mr. Krunal Sangani, our company has established itself as a trusted
                name in premium residential developments across Gujarat.
              </p>
            </div>

            <div className="card-hover p-8 bg-white/5 border border-white/10 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-4">Our Legacy</h3>
              <p className="text-[var(--beige)] mb-4">
                Our flagship projects include the successful completion of Emberlynn, Emberlynn-2, and Emberlynn-3,
                each setting new standards in architectural excellence and resident satisfaction.
              </p>
              <p className="text-[var(--beige)]">
                With Aarohan by Emberlynn, we continue this legacy of creating homes that are not just living spaces,
                but lifestyle destinations.
              </p>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-lg p-8 card-hover">
            <h3 className="text-2xl font-bold text-white mb-6">Project — Aarohan by Emberlynn</h3>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Location & Scale</h4>
                <p className="text-[var(--beige)] mb-4">
                  Strategically located on PDPU Road, Raysan, Gujarat, Aarohan spans across a prime location offering
                  excellent connectivity to major landmarks and business districts.
                </p>

                <h4 className="text-lg font-semibold text-white mb-3">Timeline</h4>
                <p className="text-[var(--beige)]">Launch: 2024 | Possession: 2027</p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-3">RERA Details</h4>
                <p className="text-[var(--beige)] text-sm mb-4">
                  RERA Registration: PR/GJ/GANDHINAGAR/GANDHINAGAR/GANDHINAGAR MUNICIPAL
                  CORPORATION/RAA15111/190425/311229
                </p>

                <h4 className="text-lg font-semibold text-white mb-3">Unit Types</h4>
                <p className="text-[var(--beige)]">
                  3 BHK (Type A & B), 4 BHK (Type A & B), 5 BHK Penthouses with premium specifications and world-class
                  amenities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
