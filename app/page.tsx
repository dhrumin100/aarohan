"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { UniversalContactForm } from "@/components/universal-contact-form"
import {
  MapPin,
  Phone,
  Mail,
  Building,
  Car,
  Wifi,
  Dumbbell,
  Waves,
  TreePine,
  Shield,
  Zap,
  Users,
  GraduationCap,
  MessageCircle,
  Menu,
  X,
  ChevronDown,
  Crown,
} from "lucide-react"

export default function Page() {
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [isFloorPlanOpen, setIsFloorPlanOpen] = useState(false)
  const [selectedFloorPlan, setSelectedFloorPlan] = useState("")
  const [isFloatingEnquiryOpen, setIsFloatingEnquiryOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in")
        }
      })
    }, observerOptions)

    const animatedElements = document.querySelectorAll(".animate-on-scroll")
    animatedElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const scrollAmenities = (direction: "left" | "right") => {
    const container = document.getElementById("amenities-container")
    if (container) {
      const scrollAmount = 300
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  const scrollGallery = (direction: "left" | "right") => {
    const container = document.getElementById("gallery-container")
    if (container) {
      const scrollAmount = 300
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const openFloorPlanModal = (planType: string) => {
    setSelectedFloorPlan(planType)
    setIsFloorPlanOpen(true)
  }

  const handleContactSubmit = (data: any) => {
    console.log("Contact form submitted:", data)
    setIsContactOpen(false)
    setIsFloatingEnquiryOpen(false)
  }

  const handleFloorPlanSubmit = (data: any) => {
    console.log("Floor plan inquiry submitted:", data)
    setIsFloorPlanOpen(false)
  }

  const amenities = [
    {
      icon: <Dumbbell className="w-8 h-8" />,
      title: "Core Gym & Pilates Studio",
      description: "State-of-the-art fitness facilities",
    },
    {
      icon: <Waves className="w-8 h-8" />,
      title: "Swimming Pool",
      description: "Temperature controlled with aqua jets",
    },
    { icon: <Users className="w-8 h-8" />, title: "Ballroom", description: "Grand ballroom for events" },
    {
      icon: <TreePine className="w-8 h-8" />,
      title: "Landscaped Gardens",
      description: "Beautifully designed green spaces",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "24/7 Security",
      description: "Round-the-clock security surveillance",
    },
    { icon: <Zap className="w-8 h-8" />, title: "Power Backup", description: "Uninterrupted power supply" },
    { icon: <Car className="w-8 h-8" />, title: "Car Parking", description: "Ample parking spaces" },
    { icon: <Wifi className="w-8 h-8" />, title: "Work From Home", description: "Dedicated workspace areas" },
  ]

  const galleryImages = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250818-WA0003.jpg-7JBLHimaRwByggyQqLIKyyYX5UNU1q.jpeg",
      alt: "Exterior View",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250818-WA0008.jpg-bVAYwSFTtmfXbiPCccc38YQsyZd5S3.jpeg",
      alt: "Garden Area",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250818-WA0012.jpg-VLG71nJ8ls7iWg26forsqplk053MXg.jpeg",
      alt: "Aerial View",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250818-WA0004.jpg-e6kz8ilWxj4j6P5g4ivX17oyuTN742.jpeg",
      alt: "Basketball Court",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250818-WA0013.jpg-8HOjcsqygYPHCJdX88lVFIBemPceIz.jpeg",
      alt: "Children's Play Area",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250818-WA0006.jpg-gxRyyQubjFuIBWTO6JtBlF7c2xhhqW.jpeg",
      alt: "Balcony View",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250818-WA0011.jpg-vbCUuFQse8uxPdvORF0RBfZuDNqjTr.jpeg",
      alt: "Community Space",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250818-WA0010.jpg-TIhxcDlT1rUIiBDSBAEj5g6rmWLeFM.jpeg",
      alt: "Building Entrance",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <style jsx>{`
        html {
          scroll-behavior: smooth;
        }
        
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(50px);
          transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .animate-fade-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .stagger-animation {
          animation-delay: var(--delay, 0ms);
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes rotateIn {
          from {
            opacity: 0;
            transform: rotate(-10deg) scale(0.9);
          }
          to {
            opacity: 1;
            transform: rotate(0deg) scale(1);
          }
        }

        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        
        .animate-slide-up {
          animation: slideInUp 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        .animate-fade-scale {
          animation: fadeInScale 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .animate-slide-left {
          animation: slideInLeft 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .animate-slide-right {
          animation: slideInRight 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .animate-rotate-in {
          animation: rotateIn 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .shimmer-effect {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }
        
        .hover-lift {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .hover-lift:hover {
          transform: translateY(-12px) scale(1.02);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
        }
        
        .card-hover {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }
        
        .card-hover:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .card-hover::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s;
        }

        .card-hover:hover::before {
          left: 100%;
        }

        .glass-effect {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .gradient-text {
          background: linear-gradient(135deg, #f59e0b, #d97706);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .floating-enquiry {
          position: fixed;
          right: 20px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 1000;
          animation: pulse 3s infinite;
        }

        @keyframes pulse {
          0%, 100% { 
            transform: translateY(-50%) scale(1);
            box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.7);
          }
          50% { 
            transform: translateY(-50%) scale(1.05);
            box-shadow: 0 0 0 10px rgba(59, 130, 246, 0);
          }
        }

        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); opacity: 0.8; }
          33% { transform: translateY(-10px) rotate(2deg); opacity: 1; }
          66% { transform: translateY(-5px) rotate(-1deg); opacity: 0.9; }
          100% { transform: translateY(0) rotate(0deg); opacity: 0.8; }
        }

        @keyframes floatDelayed {
          0% { transform: translateY(0) rotate(0deg); opacity: 0.6; }
          33% { transform: translateY(-8px) rotate(-2deg); opacity: 0.8; }
          66% { transform: translateY(-12px) rotate(1deg); opacity: 1; }
          100% { transform: translateY(0) rotate(0deg); opacity: 0.6; }
        }

        @keyframes floatSlow {
          0% { transform: translateY(0) rotate(0deg); opacity: 0.5; }
          50% { transform: translateY(-15px) rotate(3deg); opacity: 0.8; }
          100% { transform: translateY(0) rotate(0deg); opacity: 0.5; }
        }

        .animate-float {
          animation: float 6s infinite ease-in-out;
        }

        .animate-float-delayed {
          animation: floatDelayed 8s infinite ease-in-out;
        }

        .animate-float-slow {
          animation: floatSlow 10s infinite ease-in-out;
        }

        .parallax-bg {
          transform: translateZ(0);
          will-change: transform;
        }

        .text-shadow {
          text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }

        .button-glow {
          position: relative;
          overflow: hidden;
        }

        .button-glow::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.5s;
        }

        .button-glow:hover::before {
          left: 100%;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-on-scroll,
          .animate-slide-up,
          .animate-fade-scale,
          .animate-slide-left,
          .animate-slide-right,
          .animate-rotate-in,
          .animate-float,
          .animate-float-delayed,
          .animate-float-slow,
          .floating-enquiry {
            animation: none;
            transition: none;
          }
        }
      `}</style>

      <div className="floating-enquiry">
        <Button
          onClick={() => setIsFloatingEnquiryOpen(true)}
          className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-full shadow-xl hover-lift flex items-center gap-2 button-glow"
        >
          <MessageCircle className="w-5 h-5" />
          Enquiry Now
        </Button>
      </div>

      <header className="sticky top-0 z-50 glass-effect animate-fade-scale">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3 animate-slide-left">
            <div className="text-2xl font-bold gradient-text">EMBERLYNN</div>
            <div className="text-sm text-gray-600 font-medium">GROUP</div>
          </div>

          {/* Desktop Navigation - Enhanced with better hover effects */}
          <nav className="hidden lg:flex items-center space-x-6 animate-slide-right">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-600 hover:text-gray-900 transition-all duration-300 text-sm font-medium hover:scale-105"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("overview")}
              className="text-gray-600 hover:text-gray-900 transition-all duration-300 text-sm font-medium hover:scale-105"
            >
              Overview
            </button>
            <div className="relative group">
              <button className="text-gray-600 hover:text-gray-900 transition-all duration-300 text-sm font-medium flex items-center hover:scale-105">
                Features <ChevronDown className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 glass-effect rounded-xl shadow-xl border border-white/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <button
                  onClick={() => scrollToSection("configuration")}
                  className="block w-full text-left px-4 py-3 text-sm text-gray-600 hover:text-gray-900 hover:bg-white/10 transition-all duration-200 rounded-t-xl"
                >
                  Configuration
                </button>
                <button
                  onClick={() => scrollToSection("amenities")}
                  className="block w-full text-left px-4 py-3 text-sm text-gray-600 hover:text-gray-900 hover:bg-white/10 transition-all duration-200"
                >
                  Amenities
                </button>
                <button
                  onClick={() => scrollToSection("floor-plans")}
                  className="block w-full text-left px-4 py-3 text-sm text-gray-600 hover:text-gray-900 hover:bg-white/10 transition-all duration-200 rounded-b-xl"
                >
                  Floor Plans
                </button>
              </div>
            </div>
            <button
              onClick={() => scrollToSection("location")}
              className="text-gray-600 hover:text-gray-900 transition-all duration-300 text-sm font-medium hover:scale-105"
            >
              Location
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-gray-600 hover:text-gray-900 transition-all duration-300 text-sm font-medium hover:scale-105"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-600 hover:text-gray-900 transition-all duration-300 text-sm font-medium hover:scale-105"
            >
              About
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white text-sm px-6 py-2 button-glow hover-lift"
            >
              Contact Us
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 animate-fade-scale">
            <div className="container mx-auto px-6 py-4 space-y-4">
              <button
                onClick={() => {
                  scrollToSection("home")
                  setMobileMenuOpen(false)
                }}
                className="block w-full text-left text-gray-600 hover:text-gray-900 transition-colors py-2"
              >
                Home
              </button>
              <button
                onClick={() => {
                  scrollToSection("overview")
                  setMobileMenuOpen(false)
                }}
                className="block w-full text-left text-gray-600 hover:text-gray-900 transition-colors py-2"
              >
                Overview
              </button>
              <button
                onClick={() => {
                  scrollToSection("configuration")
                  setMobileMenuOpen(false)
                }}
                className="block w-full text-left text-gray-600 hover:text-gray-900 transition-colors py-2"
              >
                Configuration
              </button>
              <button
                onClick={() => {
                  scrollToSection("amenities")
                  setMobileMenuOpen(false)
                }}
                className="block w-full text-left text-gray-600 hover:text-gray-900 transition-colors py-2"
              >
                Amenities
              </button>
              <button
                onClick={() => {
                  scrollToSection("location")
                  setMobileMenuOpen(false)
                }}
                className="block w-full text-left text-gray-600 hover:text-gray-900 transition-colors py-2"
              >
                Location
              </button>
              <button
                onClick={() => {
                  scrollToSection("gallery")
                  setMobileMenuOpen(false)
                }}
                className="block w-full text-left text-gray-600 hover:text-gray-900 transition-colors py-2"
              >
                Gallery
              </button>
              <button
                onClick={() => {
                  scrollToSection("floor-plans")
                  setMobileMenuOpen(false)
                }}
                className="block w-full text-left text-gray-600 hover:text-gray-900 transition-colors py-2"
              >
                Floor Plans
              </button>
              <button
                onClick={() => {
                  scrollToSection("about")
                  setMobileMenuOpen(false)
                }}
                className="block w-full text-left text-gray-600 hover:text-gray-900 transition-colors py-2"
              >
                About
              </button>
              <Button
                onClick={() => {
                  scrollToSection("contact")
                  setMobileMenuOpen(false)
                }}
                className="w-full bg-gray-900 hover:bg-gray-800 text-white mt-4"
              >
                Contact Us
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Home Section - Completely redesigned world-class hero section with full-screen image background */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden animate-on-scroll"
        style={{
          backgroundImage: `url('/aarohan-hero-main.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-float"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white/30 rounded-full animate-float-delayed"></div>
          <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-white/25 rounded-full animate-float-slow"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <div className="mb-6 animate-slide-up">
                  <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-4">
                    LUXURY REDEFINED
                  </span>
                  <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 leading-tight">AAROHAN</h1>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600"></div>
                    <p className="text-xl md:text-2xl text-white/90 font-light">by Emberlynn</p>
                  </div>
                </div>

                <p
                  className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed animate-slide-up max-w-lg"
                  style={{ animationDelay: "200ms" }}
                >
                  Where architectural brilliance meets contemporary luxury. Experience elevated living in Gandhinagar's
                  most prestigious address.
                </p>

                <div className="grid grid-cols-3 gap-6 mb-10 animate-slide-up" style={{ animationDelay: "400ms" }}>
                  <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-1">2</div>
                    <div className="text-white/70 text-sm uppercase tracking-wider">Towers</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-1">22</div>
                    <div className="text-white/70 text-sm uppercase tracking-wider">Stories</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-1">148</div>
                    <div className="text-white/70 text-sm uppercase tracking-wider">Units</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "600ms" }}>
                  <Button
                    onClick={() => scrollToSection("contact")}
                    className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-4 text-lg font-medium rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0"
                  >
                    Schedule Private Tour
                  </Button>
                  <Button
                    onClick={() => scrollToSection("contact")}
                    variant="outline"
                    className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg font-medium rounded-xl hover:border-white/50 transition-all duration-300"
                  >
                    Download Brochure
                  </Button>
                </div>
              </div>

              <div className="lg:text-right animate-slide-up" style={{ animationDelay: "800ms" }}>
                <div className="space-y-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <h3 className="text-white font-semibold text-lg mb-2">Prime Location</h3>
                    <p className="text-white/80">PDPU Road, Raysan, Gandhinagar</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <h3 className="text-white font-semibold text-lg mb-2">RERA Approved</h3>
                    <p className="text-white/80">PR/GJ/GANDHINAGAR/GANDHINAGAR</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <h3 className="text-white font-semibold text-lg mb-2">Configuration</h3>
                    <p className="text-white/80">3 BHK, 4 BHK & 5 BHK Penthouses</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Overview Section - More aspirational and emotional */}
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
            {/* Hero Content with Image */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <div className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">AAROHAN</div>
                <div className="text-2xl md:text-3xl text-gray-300 mb-8 font-light">Where Luxury Meets Legacy</div>
                <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                  <p>
                    Step into a world where every detail whispers sophistication and every moment resonates with luxury.
                    Aarohan by Emberlynn isn't just a residence—it's a statement of refined living.
                  </p>
                  <p>
                    Rising majestically with twin towers that touch the sky, this architectural masterpiece redefines
                    what it means to live extraordinarily. Here, luxury isn't just experienced—it's lived.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gray-800 p-4 rounded-2xl">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250818-WA0003.jpg-7JBLHimaRwByggyQqLIKyyYX5UNU1q.jpeg"
                    alt="Aarohan Exterior View"
                    className="w-full h-80 md:h-96 object-cover rounded-xl"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-2xl">
                  <div className="text-3xl font-bold text-gray-900">148</div>
                  <div className="text-sm text-gray-600 font-medium">Exclusive Residences</div>
                </div>
              </div>
            </div>

            {/* Emotional Highlights */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-colors">
                  <Building className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Architectural Poetry</h3>
                <p className="text-gray-300 leading-relaxed">
                  Every line, every curve, every space tells a story of timeless elegance and contemporary
                  sophistication.
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

      {/* Configuration Section - More factual and professional */}
      <section id="configuration" className="py-20 bg-gray-50 animate-on-scroll">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Project Configuration</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meticulously planned specifications and premium features that define luxury living standards.
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            {/* Unit Types - Cleaner Design */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
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

      {/* Amenities Section */}
      <section id="amenities" className="py-20 bg-gray-900 animate-on-scroll">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">World-Class Amenities</h2>
            <p className="text-xl text-gray-300">Experience luxury living with premium facilities</p>
          </div>

          <div className="relative">
            <div
              id="amenities-container"
              className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {amenities.map((amenity, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-72 bg-gray-800 p-8 rounded-lg shadow-sm text-center card-hover"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-white mb-4 flex justify-center">{amenity.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{amenity.title}</h3>
                  <p className="text-gray-300 text-sm">{amenity.description}</p>
                </div>
              ))}
            </div>

            <button
              onClick={() => scrollAmenities("left")}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg hover-lift"
            >
              ←
            </button>
            <button
              onClick={() => scrollAmenities("right")}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg hover-lift"
            >
              →
            </button>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-20 bg-gray-50 animate-on-scroll">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Prime Location</h2>
            <p className="text-xl text-gray-600 mb-8">
              Situated on PDPU Road, Raysan, with excellent connectivity to major landmarks and amenities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-lg card-hover">
              <div className="flex items-center mb-4">
                <GraduationCap className="w-8 h-8 text-gray-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Educational Institutions</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• PDPU University</li>
                <li>• GNLU</li>
                <li>• SVM School</li>
                <li>• First Cry Pre-School</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg card-hover">
              <div className="flex items-center mb-4">
                <MessageCircle className="w-8 h-8 text-gray-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Nearby Developments</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• Satvan Bellevue</li>
                <li>• Darsh Pavitram</li>
                <li>• Sarthak Skyview</li>
                <li>• Lotus Glorious</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg card-hover">
              <div className="flex items-center mb-4">
                <Car className="w-8 h-8 text-gray-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Connectivity</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• 80 MTR Road Access</li>
                <li>• PDPU Bridge</li>
                <li>• Gandhinagar Bypass</li>
                <li>• Metro Route Connectivity</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gray-900 animate-on-scroll">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Project Gallery</h2>
            <p className="text-xl text-gray-300">Explore the beauty and elegance of Aarohan</p>
          </div>

          <div className="relative">
            <div
              id="gallery-container"
              className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-80 h-64 rounded-lg overflow-hidden card-hover"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>

            <button
              onClick={() => scrollGallery("left")}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg hover-lift"
            >
              ←
            </button>
            <button
              onClick={() => scrollGallery("right")}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg hover-lift"
            >
              →
            </button>
          </div>
        </div>
      </section>

      {/* Floor Plans Section */}
      <section id="floor-plans" className="py-20 bg-gray-50 animate-on-scroll">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Floor Plans</h2>
            <p className="text-xl text-gray-600">Choose from our thoughtfully designed homes</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* 3 BHK */}
            <div
              className="bg-white border border-gray-200 rounded-lg p-8 text-center cursor-pointer card-hover"
              onClick={() => openFloorPlanModal("3 BHK")}
            >
              <div className="mb-6">
                <img
                  src="/blurred-3bhk-floorplan.png"
                  alt="3 BHK Floor Plan"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">3 BHK</h3>
              <p className="text-gray-600 mb-4">Type A & B</p>
              <div className="space-y-2 text-sm text-gray-600 mb-6">
                <div>Drawing Room & Dining</div>
                <div>Master Suites</div>
                <div>Modern Kitchen</div>
                <div>Sky Patio</div>
              </div>
              <Button
                variant="outline"
                className="w-full mb-2 bg-transparent border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                View Details
              </Button>
              <Button variant="ghost" className="w-full text-gray-600 hover:text-gray-800">
                Download Plan
              </Button>
            </div>

            {/* 4 BHK */}
            <div
              className="bg-white rounded-lg p-8 text-center cursor-pointer card-hover border border-gray-200"
              onClick={() => openFloorPlanModal("4 BHK")}
            >
              <div className="mb-6">
                <img
                  src="/blurred-4bhk-floorplan.png"
                  alt="4 BHK Floor Plan"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">4 BHK</h3>
              <p className="text-gray-600 mb-4">Type A & B</p>
              <div className="space-y-2 text-sm text-gray-600 mb-6">
                <div>Spacious Living Areas</div>
                <div>Multiple Master Suites</div>
                <div>Premium Kitchen</div>
                <div>Private Balconies</div>
              </div>
              <Button className="w-full mb-2 bg-gray-900 text-white hover:bg-gray-800">View Details</Button>
              <Button variant="ghost" className="w-full text-gray-600 hover:text-gray-800">
                Download Plan
              </Button>
            </div>

            {/* 5 BHK */}
            <div
              className="bg-white border border-gray-200 rounded-lg p-8 text-center cursor-pointer card-hover"
              onClick={() => openFloorPlanModal("5 BHK Penthouse")}
            >
              <div className="mb-6">
                <img
                  src="/blurred-penthouse-layout.png"
                  alt="5 BHK Penthouse Floor Plan"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">5 BHK</h3>
              <p className="text-gray-600 mb-4">Penthouse</p>
              <div className="space-y-2 text-sm text-gray-600 mb-6">
                <div>Duplex Design</div>
                <div>Multiple Terraces</div>
                <div>Double Height Spaces</div>
                <div>Premium Finishes</div>
              </div>
              <Button
                variant="outline"
                className="w-full mb-2 bg-transparent border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                View Details
              </Button>
              <Button variant="ghost" className="w-full text-gray-600 hover:text-gray-800">
                Download Plan
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900 animate-on-scroll">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">About Emberlynn Developers LLP</h2>
              <p className="text-xl text-gray-300">Discover the vision and expertise behind Aarohan by Emberlynn</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
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

      {/* Contact Section */}
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
                onSubmit={handleContactSubmit}
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-950 text-white py-12 animate-on-scroll">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="text-xl font-bold mb-4">EMBERLYNN GROUP</div>
              <p className="text-gray-400 text-sm mb-4">
                Creating exceptional living experiences with attention to every detail.
              </p>
              <p className="text-gray-500 text-xs">Developed by: Emberlynn Developers LLP</p>
            </div>

            <div>
              <div className="text-lg font-semibold mb-4">Quick Links</div>
              <div className="space-y-2 text-sm">
                <button
                  onClick={() => scrollToSection("home")}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("overview")}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Overview
                </button>
                <button
                  onClick={() => scrollToSection("configuration")}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Configuration
                </button>
                <button
                  onClick={() => scrollToSection("amenities")}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Amenities
                </button>
                <button
                  onClick={() => scrollToSection("location")}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Location
                </button>
                <button
                  onClick={() => scrollToSection("gallery")}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Gallery
                </button>
                <button
                  onClick={() => scrollToSection("floor-plans")}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Floor Plans
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-500 text-sm">© 2024 Emberlynn Group. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Contact Us</DialogTitle>
          </DialogHeader>
          <UniversalContactForm showPropertyType={true} buttonText="Schedule Visit" onSubmit={handleContactSubmit} />
        </DialogContent>
      </Dialog>

      <Dialog open={isFloorPlanOpen} onOpenChange={setIsFloorPlanOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Get {selectedFloorPlan} Details</DialogTitle>
          </DialogHeader>
          <UniversalContactForm
            description={`Please provide your contact details to receive detailed floor plan information for ${selectedFloorPlan}.`}
            buttonText="Submit"
            onSubmit={handleFloorPlanSubmit}
          />
        </DialogContent>
      </Dialog>

      <Dialog open={isFloatingEnquiryOpen} onOpenChange={setIsFloatingEnquiryOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Quick Enquiry</DialogTitle>
          </DialogHeader>
          <UniversalContactForm
            description="Get in touch with us for quick assistance and information about Aarohan by Emberlynn."
            showPropertyType={true}
            buttonText="Submit Enquiry"
            onSubmit={handleContactSubmit}
          />
        </DialogContent>
      </Dialog>
    </div>
  )
}
