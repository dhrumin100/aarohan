"use client"

import { UniversalContactForm } from "@/components/universal-contact-form"
import { MapPin, Phone, Mail, Building } from "lucide-react"

interface ContactProps {
  onSubmit: (data: any) => Promise<void> | void
}

export function Contact({ onSubmit }: ContactProps) {
  return (
    <section id="contact" className="relative overflow-hidden py-20 bg-champagne animate-on-scroll">
      <div className="linen-noise pointer-events-none absolute inset-0 -z-10" />
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <div className="text-sm font-medium text-[var(--navy)]/70 mb-2 tracking-wider">GET IN TOUCH</div>
          <h2 className="text-4xl font-bold heading-gold-stroke mb-3">Contact Us</h2>
          <div className="gilded-divider justify-center mb-4" />
          <p className="text-xl text-[var(--navy)]/80">
            Ready to experience luxury living? Get in touch with our team for site visits, floor plans, and pricing
            details.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto animate-slide-up" style={{ animationDelay: "140ms" }}>
          {/* Project Information */}
          <div className="bg-white p-8 rounded-lg shadow-sm card-hover card-gilded card-gilded-hover transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <h3 className="text-xl font-bold text-[var(--navy)] mb-6">Project Information</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-[var(--color-gold)] mr-3 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium text-[var(--navy)] mb-1">Address</div>
                  <div className="text-[var(--navy)]/80 text-sm">
                    TP18, Sagar Dynamic Rd, Near Sagar Dynamic,
                    <br />
                    Raysan, Gujarat 382421
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="w-5 h-5 text-[var(--color-gold)] mr-3 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium text-[var(--navy)] mb-1">Phone</div>
                  <div className="text-[var(--navy)]/80 text-sm">999 887 8448</div>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="w-5 h-5 text-[var(--color-gold)] mr-3 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium text-[var(--navy)] mb-1">Email</div>
                  <div className="text-[var(--navy)]/80 text-sm">info@theemberlynn.com</div>
                </div>
              </div>

              <div className="flex items-start">
                <Building className="w-5 h-5 text-[var(--color-gold)] mr-3 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium text-[var(--navy)] mb-1">Developer</div>
                  <div className="text-[var(--navy)]/80 text-sm">Emberlynn Developers LLP</div>
                </div>
              </div>

              <div className="pt-4 border-t border-[var(--beige)]/60">
                <div className="font-medium text-[var(--navy)] mb-2">RERA Registration</div>
                <div className="text-[var(--navy)]/80 text-xs">
                  PR/GJ/GANDHINAGAR/GANDHINAGAR/
                  <br />
                  GANDHINAGAR MUNICIPAL CORPORATION
                  <br />
                  RAA15111/190425/311229
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg card-gilded card-gilded-hover transition-all duration-300 hover:-translate-y-1">
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
