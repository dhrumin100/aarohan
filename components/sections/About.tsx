"use client"

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-900 animate-on-scroll">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">About Emberlynn Developers LLP</h2>
            <p className="text-xl text-gray-300">Discover the vision and expertise behind Aarohan by Emberlynn</p>
          </div>

          {/* Mobile: horizontal scroller for About cards */}
          <div className="md:hidden mb-16">
            <div className="mobile-hero-scroller">
              <div className="mobile-hero-slide">
                <div className="card-hover p-8 bg-gray-800 rounded-lg">
                  <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                  <p className="text-gray-300 mb-4">
                    Emberlynn Developers LLP stands as a beacon of excellence in the real estate industry, committed to
                    creating exceptional living experiences that blend luxury, comfort, and innovation.
                  </p>
                  <p className="text-gray-300">
                    Under the visionary leadership of Mr. Krunal Sangani, our company has established itself as a trusted
                    name in premium residential developments across Gujarat.
                  </p>
                </div>
              </div>
              <div className="mobile-hero-slide">
                <div className="card-hover p-8 bg-gray-800 rounded-lg">
                  <h3 className="text-2xl font-bold text-white mb-4">Our Legacy</h3>
                  <p className="text-gray-300 mb-4">
                    Our flagship projects include the successful completion of Emberlynn, Emberlynn-2, and Emberlynn-3,
                    each setting new standards in architectural excellence and resident satisfaction.
                  </p>
                  <p className="text-gray-300">
                    With Aarohan by Emberlynn, we continue this legacy of creating homes that are not just living spaces,
                    but lifestyle destinations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop grid */}
          <div className="hidden md:grid md:grid-cols-2 gap-12 mb-16">
            <div className="card-hover p-8 bg-gray-800 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-300 mb-4">
                Emberlynn Developers LLP stands as a beacon of excellence in the real estate industry, committed to
                creating exceptional living experiences that blend luxury, comfort, and innovation.
              </p>
              <p className="text-gray-300">
                Under the visionary leadership of Mr. Krunal Sangani, our company has established itself as a trusted
                name in premium residential developments across Gujarat.
              </p>
            </div>

            <div className="card-hover p-8 bg-gray-800 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-4">Our Legacy</h3>
              <p className="text-gray-300 mb-4">
                Our flagship projects include the successful completion of Emberlynn, Emberlynn-2, and Emberlynn-3,
                each setting new standards in architectural excellence and resident satisfaction.
              </p>
              <p className="text-gray-300">
                With Aarohan by Emberlynn, we continue this legacy of creating homes that are not just living spaces,
                but lifestyle destinations.
              </p>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-8 card-hover">
            <h3 className="text-2xl font-bold text-white mb-6">Project — Aarohan by Emberlynn</h3>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Location & Scale</h4>
                <p className="text-gray-300 mb-4">
                  Strategically located on PDPU Road, Raysan, Gujarat, Aarohan spans across a prime location offering
                  excellent connectivity to major landmarks and business districts.
                </p>

                <h4 className="text-lg font-semibold text-white mb-3">Timeline</h4>
                <p className="text-gray-300">Launch: 2024 | Possession: 2027</p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-3">RERA Details</h4>
                <p className="text-gray-300 text-sm mb-4">
                  RERA Registration: PR/GJ/GANDHINAGAR/GANDHINAGAR/GANDHINAGAR MUNICIPAL
                  CORPORATION/RAA15111/190425/311229
                </p>

                <h4 className="text-lg font-semibold text-white mb-3">Unit Types</h4>
                <p className="text-gray-300">
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
