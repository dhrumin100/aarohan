"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Phone,
  Mail,
  MapPin,
  Building,
  Car,
  Dumbbell,
  Waves,
  TreePine,
  Star,
  CheckCircle,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  CableCarIcon as Elevator,
  ParkingCircle,
  Users2,
  ChevronDown,
} from "lucide-react"
import { useState } from "react"

const config = {
  type: "Luxury Apartments",
}

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProjectDropdownOpen, setIsProjectDropdownOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo with better spacing */}
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 luxury-gradient rounded-xl flex items-center justify-center">
                <Building className="h-7 w-7 text-black" />
              </div>
              <div>
                <h1 className="text-2xl font-sans font-bold text-foreground">AAROHAN</h1>
                <p className="text-sm text-muted-foreground">BY EMBERLYNN</p>
              </div>
            </div>

            {/* Desktop Navigation - Simplified and grouped */}
            <div className="hidden lg:flex items-center space-x-10">
              <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">
                Home
              </a>
              <a href="#overview" className="text-foreground hover:text-primary transition-colors font-medium">
                Overview
              </a>

              {/* Project dropdown */}
              <div className="relative">
                <button
                  className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors font-medium"
                  onMouseEnter={() => setIsProjectDropdownOpen(true)}
                  onMouseLeave={() => setIsProjectDropdownOpen(false)}
                >
                  <span>Project</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                {isProjectDropdownOpen && (
                  <div
                    className="absolute top-full left-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-lg py-2"
                    onMouseEnter={() => setIsProjectDropdownOpen(true)}
                    onMouseLeave={() => setIsProjectDropdownOpen(false)}
                  >
                    <a
                      href="#configuration"
                      className="block px-4 py-2 text-foreground hover:bg-muted transition-colors"
                    >
                      Configuration
                    </a>
                    <a href="#floor-plans" className="block px-4 py-2 text-foreground hover:bg-muted transition-colors">
                      Floor Plans
                    </a>
                    <a
                      href="#specifications"
                      className="block px-4 py-2 text-foreground hover:bg-muted transition-colors"
                    >
                      Specifications
                    </a>
                  </div>
                )}
              </div>

              <a href="#connectivity" className="text-foreground hover:text-primary transition-colors font-medium">
                Location
              </a>
              <a href="#amenities" className="text-foreground hover:text-primary transition-colors font-medium">
                Amenities
              </a>
              <a href="#gallery" className="text-foreground hover:text-primary transition-colors font-medium">
                Gallery
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">
                About
              </a>

              {/* CTA Button */}
              <Button className="luxury-gradient text-black font-semibold px-6 py-2.5">
                <Phone className="mr-2 h-4 w-4" />
                Contact Us
              </Button>
            </div>

            {/* Mobile menu button */}
            <button className="lg:hidden text-foreground p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation - Improved */}
          {isMenuOpen && (
            <div className="lg:hidden bg-background border-t border-border">
              <div className="px-4 pt-4 pb-6 space-y-4">
                {[
                  { href: "#home", label: "Home" },
                  { href: "#overview", label: "Overview" },
                  { href: "#configuration", label: "Configuration" },
                  { href: "#connectivity", label: "Location & Connectivity" },
                  { href: "#amenities", label: "Amenities" },
                  { href: "#gallery", label: "Gallery" },
                  { href: "#floor-plans", label: "Floor Plans" },
                  { href: "#specifications", label: "Specifications" },
                  { href: "#about", label: "About Us" },
                ].map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block py-3 px-2 text-foreground hover:text-primary transition-colors font-medium border-b border-border/50 last:border-b-0"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <div className="pt-4">
                  <Button className="w-full luxury-gradient text-black font-semibold py-3">
                    <Phone className="mr-2 h-4 w-4" />
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      <section
        id="home"
        className="section-dark relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/luxury-towers-dusk.png')`,
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-6 py-12">
          <Badge className="mb-8 luxury-gradient text-black font-semibold text-lg px-4 py-2">CHAPTER 4</Badge>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-sans font-black mb-8 leading-tight">
            PALATIAL
            <br />
            <span className="text-white">DWELLINGS</span>
          </h1>
          <div className="flex items-center justify-center space-x-6 md:space-x-12 mb-10 text-lg">
            <div className="text-center royal-card p-6 rounded-xl">
              <div className="text-4xl font-bold text-primary mb-2">2</div>
              <div className="text-sm uppercase tracking-wide">TOWERS</div>
            </div>
            <div className="text-center royal-card p-6 rounded-xl">
              <div className="text-4xl font-bold text-primary mb-2">22</div>
              <div className="text-sm uppercase tracking-wide">STOREYS</div>
            </div>
            <div className="text-center royal-card p-6 rounded-xl">
              <div className="text-4xl font-bold text-primary mb-2">148</div>
              <div className="text-sm uppercase tracking-wide">UNITS</div>
            </div>
          </div>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed">
            Where golden hours become your closest companion as the sun drapes the skyline in molten amber
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="luxury-gradient text-black font-semibold px-10 py-4 text-lg">
              <Phone className="mr-3 h-5 w-5" />
              Call 999 887 8448
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-black px-10 py-4 text-lg bg-transparent"
            >
              Download Brochure
            </Button>
          </div>
        </div>
      </section>

      <section id="overview" className="section-light py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary text-primary-foreground">EMBERLYNN GROUP</Badge>
              <h2 className="text-4xl font-sans font-bold mb-6 text-foreground">
                SET THE AMBIENCE EXACTLY WHERE YOU BELONG
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                The grand exteriors harmonizing with curated luxuries that frame elegance. It is a milieu where serenity
                converges to create a sculpted slope architected for a grandiose lifestyle.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-4 bg-background rounded-lg">
                  <Building className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">3-5 BHK</div>
                  <div className="text-sm text-muted-foreground">Premium Apartments</div>
                </div>
                <div className="text-center p-4 bg-background rounded-lg">
                  <Star className="h-8 w-8 text-secondary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">50+</div>
                  <div className="text-sm text-muted-foreground">Luxury Amenities</div>
                </div>
              </div>
              <Button className="luxury-gradient text-white">Explore Floor Plans</Button>
            </div>
            <div className="relative">
              <img src="/placeholder-yy5m0.png" alt="Aarohan Building" className="rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      <section id="configuration" className="section-dark-accent py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <Badge className="mb-4 luxury-gradient text-black">{config.type}</Badge>
            <h2 className="text-4xl font-sans font-bold mb-6 text-foreground">APARTMENT CONFIGURATIONS</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Choose from our thoughtfully designed 3BHK, 4BHK, and 5BHK penthouses
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                type: "3 BHK",
                area: "1,850 - 1,950 sq.ft",
                bedrooms: "3 Bedrooms + Study",
                bathrooms: "3 Bathrooms",
                features: ["Sky Patio", "Dry Kitchen", "Servant Room", "Puja Room"],
              },
              {
                type: "4 BHK",
                area: "2,450 - 2,650 sq.ft",
                bedrooms: "4 Bedrooms",
                bathrooms: "4 Bathrooms",
                features: ["2 Master Suites", "Sky Patio", "Wet & Dry Kitchen", "Servant Room"],
              },
              {
                type: "5 BHK Penthouse",
                area: "3,200 - 3,800 sq.ft",
                bedrooms: "5 Bedrooms",
                bathrooms: "5 Bathrooms",
                features: ["Duplex Layout", "Private Terrace", "Double Height Living", "Glass Bridge"],
              },
            ].map((config, index) => (
              <Card key={index} className="royal-card border-border">
                <CardContent className="p-6">
                  <Badge className="mb-4 luxury-gradient text-black">{config.type}</Badge>
                  <h3 className="text-2xl font-sans font-bold mb-2 text-foreground">{config.area}</h3>
                  <div className="space-y-2 mb-6">
                    <p className="text-muted-foreground">{config.bedrooms}</p>
                    <p className="text-muted-foreground">{config.bathrooms}</p>
                  </div>
                  <div className="space-y-2">
                    {config.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="connectivity" className="section-light-accent py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary text-secondary-foreground">CONNECTIVITY</Badge>
            <h2 className="text-4xl font-sans font-bold mb-6 text-foreground">PRIME CONNECTIVITY</h2>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              Strategically located near PDPU with excellent connectivity to major landmarks
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { landmark: "PDPU University", distance: "2 mins walk", icon: Building },
              { landmark: "GIFT City", distance: "15 mins drive", icon: Building },
              { landmark: "Gandhinagar Railway Station", distance: "20 mins drive", icon: Car },
              { landmark: "Ahmedabad Airport", distance: "45 mins drive", icon: Car },
              { landmark: "Indroda Park", distance: "10 mins drive", icon: TreePine },
              { landmark: "Sabarmati River", distance: "5 mins drive", icon: Waves },
              { landmark: "SVM School", distance: "8 mins drive", icon: Building },
              { landmark: "City Pulse Cinema", distance: "12 mins drive", icon: Building },
            ].map((location, index) => (
              <Card key={index} className="royal-card border-border text-center">
                <CardContent className="p-6">
                  <location.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-1">{location.landmark}</h3>
                  <p className="text-sm text-foreground/70 font-medium">{location.distance}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="amenities" className="section-light py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-sans font-bold mb-6 golden-text">AMENITIES</h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">A sanctuary of unparalleled privileges</p>
          </div>

          {/* Horizontal scrolling amenities */}
          <div className="relative">
            <div className="flex gap-8 overflow-x-auto pb-4 scrollbar-hide">
              {[
                {
                  icon: ParkingCircle,
                  title: "4 Level Basement Parking",
                  desc: "Secure multi-level parking facility",
                },
                {
                  icon: Elevator,
                  title: "24 High Speed Elevators",
                  desc: "Premium elevator systems for convenience",
                },
                {
                  icon: Users2,
                  title: "Fully Functional Business Club & Seminar Hall",
                  desc: "Professional meeting and event spaces",
                },
                {
                  icon: Dumbbell,
                  title: "Core Gym & Pilates Studio",
                  desc: "State-of-the-art fitness facilities",
                },
                {
                  icon: Waves,
                  title: "Temperature Controlled Mini Pool",
                  desc: "Luxury swimming and aquatic facilities",
                },
                {
                  icon: TreePine,
                  title: "Landscaped Gardens",
                  desc: "Beautifully designed green spaces",
                },
              ].map((amenity, index) => (
                <Card key={index} className="flex-shrink-0 w-80 royal-card border-border">
                  <CardContent className="p-6 text-center">
                    <amenity.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-sans font-semibold mb-2 text-foreground">{amenity.title}</h3>
                    <p className="text-foreground/70 text-sm">{amenity.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Navigation arrows */}
            <div className="flex justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Complete amenities list */}
          <div className="mt-16 royal-card rounded-2xl p-8">
            <h3 className="text-2xl font-sans font-bold mb-6 text-center text-foreground">Complete Amenities List</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Grand Entrance Gate with Security Cabin",
                "Drop-off Zone",
                "Visitor's Parking",
                "Landscaped Garden with Sitting Area",
                "Children's Play Area",
                "Senior Citizen Sit-out",
                "Yoga & Meditation Zone",
                "Jogging Track",
                "Outdoor Gym",
                "Club House",
                "Indoor Games",
                "Gymnasium",
                "Multi-Purpose Hall",
                "Home Theatre",
                "Core Gym & Pilates Studio",
                "Steam, Sauna & Jacuzzi",
                "Arrival Lounge and Lift Bank",
                "Emberlynn Café & Swing Plaza",
                "Estate Office",
                "Library",
                "BMS & Surveillance Room",
                "Work From Home & Zoomcube",
                "Saloon",
                "Barbeque Area",
                "Drivers Lounge",
                "Laundry",
                "Pharmacy",
                "Ballroom",
                "Kitchen",
                "Service Space",
                "Temperature-Controlled Mini Pool",
                "Underwater Aqua Pressure Jets & Baby Pool",
                "Yoga & Aerobics Studio",
                "Poker Room",
                "Electronic Games & Indoor Play",
                "Mini Theatre",
                "Society Store",
                "Toddlers Play Area",
                "Elder Sitout Area",
                "Entrance Steps with Sit Out Area",
              ].map((amenity, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground/90">{amenity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="section-dark py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-sans font-bold mb-6 golden-text">GALLERY</h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          </div>

          {/* Gallery category */}
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-foreground">Exterior</h3>
          </div>

          {/* Horizontal gallery */}
          <div className="relative">
            <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
              {[
                {
                  image: `/placeholder.svg?height=400&width=600&query=luxury residential towers at dusk with golden lighting and landscaping`,
                  alt: "Aarohan Building Exterior at Dusk",
                },
                {
                  image: `/placeholder.svg?height=400&width=600&query=modern apartment complex with sculpted stairway and terraced landscaping`,
                  alt: "Sculpted Slope Architecture",
                },
                {
                  image: `/placeholder.svg?height=400&width=600&query=luxury towers with classical columns and glass elements in daylight`,
                  alt: "Building Facade with Classical Elements",
                },
              ].map((item, index) => (
                <div key={index} className="flex-shrink-0 w-96">
                  <Card className="royal-card border-border overflow-hidden">
                    <img src={item.image || "/placeholder.svg"} alt={item.alt} className="w-full h-64 object-cover" />
                  </Card>
                </div>
              ))}
            </div>

            {/* Navigation arrows */}
            <div className="flex justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="floor-plans" className="section-light-accent py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-sans font-bold mb-6 golden-text">FLOOR PLAN</h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          </div>

          {/* Horizontal floor plans */}
          <div className="relative">
            <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
              {[
                {
                  type: "3 BHK Type A",
                  image: `/placeholder.svg?height=300&width=400&query=3BHK apartment floor plan layout`,
                },
                {
                  type: "4 BHK Type A",
                  image: `/placeholder.svg?height=300&width=400&query=4BHK apartment floor plan layout`,
                },
                {
                  type: "5 BHK Penthouse",
                  image: `/placeholder.svg?height=300&width=400&query=5BHK penthouse floor plan layout`,
                },
              ].map((plan, index) => (
                <div key={index} className="flex-shrink-0 w-96">
                  <Card className="royal-card border-border overflow-hidden">
                    <img
                      src={plan.image || "/placeholder.svg"}
                      alt={`${plan.type} Floor Plan`}
                      className="w-full h-64 object-cover"
                    />
                    <CardContent className="p-4 text-center">
                      <h3 className="font-semibold text-foreground">{plan.type}</h3>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            {/* Navigation arrows */}
            <div className="flex justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Download Brochure and Enquire Now buttons */}
          <div className="flex justify-between items-center mt-12">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3">
              Download Brochure
            </Button>
            <Button className="luxury-gradient text-black font-semibold px-6 py-3">Enquire Now</Button>
          </div>
        </div>
      </section>

      <section id="about" className="section-dark-accent py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent text-accent-foreground">ABOUT US</Badge>
            <h2 className="text-4xl font-sans font-bold mb-6 text-foreground">EMBERLYNN GROUP</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Developed by Emberlynn Developers LLP - Creating luxury living spaces with uncompromising quality
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-sans font-bold mb-6 text-foreground">Our Vision</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                At Emberlynn Group, we believe in creating more than just homes - we craft experiences. Our commitment
                to excellence, attention to detail, and innovative design philosophy sets us apart in the luxury real
                estate market.
              </p>
              <div className="space-y-4">
                {[
                  "Premium Quality Construction",
                  "Innovative Architectural Design",
                  "Sustainable Development Practices",
                  "Customer-Centric Approach",
                ].map((point, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-foreground">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="royal-card p-8 rounded-lg">
              <h3 className="text-xl font-sans font-bold mb-4 text-foreground">Project Details</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">RERA Registration:</span>
                  <span className="text-foreground font-medium">
                    PR/GJ/GANDHINAGAR/GANDHINAGAR/AUDA/RAA12989/240523
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Project Name:</span>
                  <span className="text-foreground font-medium">Aarohan by Emberlynn - Chapter 4</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Location:</span>
                  <span className="text-foreground font-medium">PDPU Road, Gandhinagar</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Units:</span>
                  <span className="text-foreground font-medium">148 Premium Apartments</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="specifications" className="section-light py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-sans font-bold mb-6 golden-text">SPECIFICATIONS</h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "FLOORING",
                desc: "Premium quality vitrified tiles look alike Italian flooring including bedrooms, common areas, drawing and living rooms, vestibule, balconies, and bathrooms (up to lintel level)",
              },
              {
                title: "KITCHEN",
                desc: "Superior quality polished granite platform. Stainless steel kitchen sink.",
              },
              {
                title: "PLUMBING & WATER SUPPLY",
                desc: "Premium quality bath fitting & sanitaryware of Duravit/Toto/Hansgrohe / equivalent bathroom fittings. All water lines in composite pipes & UPVC pipes.",
              },
              {
                title: "WALL FINISH",
                desc: "Interior walls are single coat mala plaster with wall putty.",
              },
              {
                title: "DOORS & WINDOWS",
                desc: "Main door & all internal doors are flush doors with plywood frame. Aluminium / UPVC sliding windows with DGU glasses with stone jamb.",
              },
              {
                title: "ELECTRICAL",
                desc: "Three phase concealed copper wiring with adequate amount of electrical points. Modular switches of well recognised brands. Provision for TV & cables. Electric switches: Legrand / Schneider / equivalent modular switches",
              },
              {
                title: "SUPER STRUCTURE",
                desc: "Earthquake resistant frame structure.",
              },
              {
                title: "HVAC",
                desc: "AC copper piping provided. Water outlets for outdoor AC compressors.",
              },
              {
                title: "BASIC",
                desc: "Elegant entrance foyer finished with Italian or granite cladding. Lift & stairs, common foyer with granite flooring and granite cladding on wall",
              },
            ].map((spec, index) => (
              <Card key={index} className="royal-card border-border">
                <CardContent className="p-6">
                  <h3 className="text-lg font-sans font-bold mb-3 golden-text">{spec.title}</h3>
                  <p className="text-sm text-foreground/80 leading-relaxed">{spec.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="location" className="section-dark py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-secondary text-secondary-foreground">PRIME LOCATION</Badge>
              <h2 className="text-4xl font-sans font-bold mb-6 text-foreground">
                STRATEGICALLY LOCATED IN GANDHINAGAR
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Near PDPU, Raysan, Gandhinagar - perfectly positioned for connectivity and convenience.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { landmark: "PDPU University", distance: "2 mins walk" },
                  { landmark: "GIFT City", distance: "15 mins drive" },
                  { landmark: "Gandhinagar Railway Station", distance: "20 mins drive" },
                  { landmark: "Ahmedabad Airport", distance: "45 mins drive" },
                ].map((location, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <span className="text-foreground">{location.landmark}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{location.distance}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-semibold text-foreground">Site Address:</p>
                  <p className="text-muted-foreground">Nr. PDPU, Raisan, Gandhinagar, Gujarat 382426</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src="/gandhinagar-aerial.png" alt="Location Map" className="rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section-light-accent py-24 bg-card">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <Badge className="mb-4 luxury-gradient text-black font-semibold">CONTACT US</Badge>
            <h2 className="text-4xl font-sans font-bold mb-6 golden-text">GET IN TOUCH</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to make your dream home a reality? Contact us today and our team will assist you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="royal-card p-8 rounded-lg">
              <h3 className="text-2xl font-sans font-bold mb-6 text-foreground">Send us a Message</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="Enter your full name"
                    className="bg-background border-border text-foreground"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="mobile" className="block text-sm font-medium text-foreground mb-2">
                    Mobile Number *
                  </label>
                  <Input
                    id="mobile"
                    type="tel"
                    placeholder="Enter your mobile number"
                    className="bg-background border-border text-foreground"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    className="bg-background border-border text-foreground"
                    required
                  />
                </div>
                <Button type="submit" className="w-full luxury-gradient text-black font-semibold py-3">
                  Submit
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="royal-card p-6 rounded-lg">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 luxury-gradient rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Call Us</h4>
                    <p className="text-primary font-semibold">999 887 8448</p>
                  </div>
                </div>
              </div>

              <div className="royal-card p-6 rounded-lg">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 luxury-gradient rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email Us</h4>
                    <p className="text-primary font-semibold">info@theemberlynn.com</p>
                  </div>
                </div>
              </div>

              <div className="royal-card p-6 rounded-lg">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 luxury-gradient rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Visit Us</h4>
                    <p className="text-muted-foreground">TP18, Sagar Dynamic Rd, Near Sagar Dynamic</p>
                    <p className="text-muted-foreground">Raysan, Gujarat 382421</p>
                  </div>
                </div>
              </div>

              <div className="royal-card p-6 rounded-lg">
                <h4 className="font-semibold mb-4">Office Hours</h4>
                <div className="space-y-2 text-muted-foreground">
                  <p>Monday - Saturday: 10:00 AM - 7:00 PM</p>
                  <p>Sunday: 10:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Building className="h-8 w-8 text-secondary" />
                <div>
                  <h3 className="text-xl font-sans font-bold">AAROHAN</h3>
                  <p className="text-xs text-background/70">BY EMBERLYNN</p>
                </div>
              </div>
              <p className="text-background/70 text-sm">
                Luxury residences in the heart of Gandhinagar, where dreams become reality.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li>
                  <a href="#home" className="hover:text-secondary transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#overview" className="hover:text-secondary transition-colors">
                    Overview
                  </a>
                </li>
                <li>
                  <a href="#configuration" className="hover:text-secondary transition-colors">
                    Configuration
                  </a>
                </li>
                <li>
                  <a href="#connectivity" className="hover:text-secondary transition-colors">
                    Connectivity
                  </a>
                </li>
                <li>
                  <a href="#amenities" className="hover:text-secondary transition-colors">
                    Amenities
                  </a>
                </li>
                <li>
                  <a href="#gallery" className="hover:text-secondary transition-colors">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#floor-plans" className="hover:text-secondary transition-colors">
                    Plans
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-secondary transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#specifications" className="hover:text-secondary transition-colors">
                    Specifications
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li>999 887 8448</li>
                <li>info@theemberlynn.com</li>
                <li>www.theemberlynn.com</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li>RERA: PR/GJ/GANDHINAGAR/GANDHINAGAR/GANDHINAGAR MUNICIPAL CORPORATION RAA15111/190425/311229</li>
                <li>www.gujrera.gujarat.gov.in</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm text-background/70">
            <p>&copy; 2024 Emberlynn Group. All rights reserved. Developed by Emberlynn Developers LLP.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
