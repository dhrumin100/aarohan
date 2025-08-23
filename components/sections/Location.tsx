"use client"

import { GraduationCap, MessageCircle, Car } from "lucide-react"

export function Location() {
  return (
    <section id="location" className="relative overflow-hidden py-16 md:py-20 bg-champagne animate-on-scroll">
      <div className="linen-noise pointer-events-none absolute inset-0 -z-10" />
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold heading-gold-stroke mb-3">Prime Location</h2>
          <div className="gilded-divider justify-center mb-5" />
          <p className="text-lg md:text-xl text-[var(--navy)]/80 mb-6 md:mb-8">
            Situated on PDPU Road, Raysan, with excellent connectivity to major landmarks and amenities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto animate-slide-up" style={{ animationDelay: "140ms" }}>
          <div className="bg-white p-6 md:p-8 rounded-lg card-hover card-gilded card-gilded-hover transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="flex items-center mb-4">
              <GraduationCap className="w-6 h-6 md:w-8 md:h-8 text-[var(--color-gold)] mr-3" />
              <h3 className="text-lg md:text-xl font-bold text-[var(--navy)]">Educational Institutions</h3>
            </div>
            <ul className="space-y-2 text-sm md:text-base text-[var(--navy)]/80">
              <li>• PDPU University</li>
              <li>• GNLU</li>
              <li>• SVM School</li>
              <li>• First Cry Pre-School</li>
            </ul>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-lg card-hover card-gilded card-gilded-hover transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="flex items-center mb-4">
              <MessageCircle className="w-6 h-6 md:w-8 md:h-8 text-[var(--color-gold)] mr-3" />
              <h3 className="text-lg md:text-xl font-bold text-[var(--navy)]">Nearby Developments</h3>
            </div>
            <ul className="space-y-2 text-sm md:text-base text-[var(--navy)]/80">
              <li>• Satvan Bellevue</li>
              <li>• Darsh Pavitram</li>
              <li>• Sarthak Skyview</li>
              <li>• Lotus Glorious</li>
            </ul>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-lg card-hover card-gilded card-gilded-hover transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="flex items-center mb-4">
              <Car className="w-6 h-6 md:w-8 md:h-8 text-[var(--color-gold)] mr-3" />
              <h3 className="text-lg md:text-xl font-bold text-[var(--navy)]">Connectivity</h3>
            </div>
            <ul className="space-y-2 text-sm md:text-base text-[var(--navy)]/80">
              <li>• 80 MTR Road Access</li>
              <li>• PDPU Bridge</li>
              <li>• Gandhinagar Bypass</li>
              <li>• Metro Route Connectivity</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
