"use client"

import { GraduationCap, MessageCircle, Car } from "lucide-react"

export function Location() {
  return (
    <section id="location" className="py-16 md:py-20 bg-gray-50 animate-on-scroll">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Prime Location</h2>
          <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8">
            Situated on PDPU Road, Raysan, with excellent connectivity to major landmarks and amenities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 md:p-8 rounded-lg card-hover">
            <div className="flex items-center mb-4">
              <GraduationCap className="w-6 h-6 md:w-8 md:h-8 text-gray-600 mr-3" />
              <h3 className="text-lg md:text-xl font-bold text-gray-900">Educational Institutions</h3>
            </div>
            <ul className="space-y-2 text-sm md:text-base text-gray-600">
              <li>• PDPU University</li>
              <li>• GNLU</li>
              <li>• SVM School</li>
              <li>• First Cry Pre-School</li>
            </ul>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-lg card-hover">
            <div className="flex items-center mb-4">
              <MessageCircle className="w-6 h-6 md:w-8 md:h-8 text-gray-600 mr-3" />
              <h3 className="text-lg md:text-xl font-bold text-gray-900">Nearby Developments</h3>
            </div>
            <ul className="space-y-2 text-sm md:text-base text-gray-600">
              <li>• Satvan Bellevue</li>
              <li>• Darsh Pavitram</li>
              <li>• Sarthak Skyview</li>
              <li>• Lotus Glorious</li>
            </ul>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-lg card-hover">
            <div className="flex items-center mb-4">
              <Car className="w-6 h-6 md:w-8 md:h-8 text-gray-600 mr-3" />
              <h3 className="text-lg md:text-xl font-bold text-gray-900">Connectivity</h3>
            </div>
            <ul className="space-y-2 text-sm md:text-base text-gray-600">
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
