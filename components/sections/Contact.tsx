"use client"

import { UniversalContactForm } from "@/components/universal-contact-form"
import { MapPin, Phone, Mail, Building } from "lucide-react"

interface ContactProps {
  onSubmit: (data: any) => Promise<void> | void
}

export function Contact({ onSubmit }: ContactProps) {
  return (
    <section id="contact" className="py-20 bg-gray-50 animate-on-scroll">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-sm font-medium text-gray-500 mb-2 tracking-wider">GET IN TOUCH</div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600">
            Ready to experience luxury living? Get in touch with our team for site visits, floor plans, and pricing
            details.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Project Information */}
          <div className="bg-white p-8 rounded-lg shadow-sm card-hover">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Project Information</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-gray-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium text-gray-900 mb-1">Address</div>
                  <div className="text-gray-600 text-sm">
                    TP18, Sagar Dynamic Rd, Near Sagar Dynamic,
                    <br />
                    Raysan, Gujarat 382421
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="w-5 h-5 text-gray-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium text-gray-900 mb-1">Phone</div>
                  <div className="text-gray-600 text-sm">999 887 8448</div>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="w-5 h-5 text-gray-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium text-gray-900 mb-1">Email</div>
                  <div className="text-gray-600 text-sm">info@theemberlynn.com</div>
                </div>
              </div>

              <div className="flex items-start">
                <Building className="w-5 h-5 text-gray-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium text-gray-900 mb-1">Developer</div>
                  <div className="text-gray-600 text-sm">Emberlynn Developers LLP</div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <div className="font-medium text-gray-900 mb-2">RERA Registration</div>
                <div className="text-gray-600 text-xs">
                  PR/GJ/GANDHINAGAR/GANDHINAGAR/
                  <br />
                  GANDHINAGAR MUNICIPAL CORPORATION
                  <br />
                  RAA15111/190425/311229
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <UniversalContactForm
              title="Send us a Message"
              buttonText="Send Message"
              formType="contact"
              onSubmit={onSubmit}
              onSuccess={() => { }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
