"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { UniversalContactForm } from "@/components/universal-contact-form"
import { Hero } from "@/components/sections/Hero"
import { Overview } from "@/components/sections/Overview"
import { Configuration } from "@/components/sections/Configuration"
import { Amenities } from "@/components/sections/Amenities"
import { Location } from "@/components/sections/Location"
import { Gallery } from "@/components/sections/Gallery"
import { FloorPlans } from "@/components/sections/FloorPlans"
import { About } from "@/components/sections/About"
import { Contact } from "@/components/sections/Contact"
import { Header } from "@/components/layout/Header"
import {
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
  Crown,
} from "lucide-react"

export default function Page() {
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [isFloorPlanOpen, setIsFloorPlanOpen] = useState(false)
  const [selectedFloorPlan, setSelectedFloorPlan] = useState("")
  const [isFloatingEnquiryOpen, setIsFloatingEnquiryOpen] = useState(false)
  const [featuresOpen, setFeaturesOpen] = useState(false)
  const headerRef = useRef<HTMLDivElement | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [currentSection, setCurrentSection] = useState<string>("home")

  useEffect(() => {
    const setHeaderHeightVar = () => {
      const h = headerRef.current?.offsetHeight ?? 64
      document.documentElement.style.setProperty('--header-height', `${h}px`)
    }

    setHeaderHeightVar()
    window.addEventListener('resize', setHeaderHeightVar)
    return () => window.removeEventListener('resize', setHeaderHeightVar)
  }, [])

  // Highlight current section in nav
  useEffect(() => {
    const ids = ['home','overview','configuration','location','amenities','gallery','floor-plans','about','contact']
    const onScroll = () => {
      const headerH = headerRef.current?.getBoundingClientRect().height ?? 64
      let active = 'home'
      let best = Infinity
      for (const id of ids) {
        const el = document.getElementById(id)
        if (!el) continue
        const top = Math.abs(el.getBoundingClientRect().top - headerH)
        if (top < best) { best = top; active = id }
      }
      setCurrentSection(active)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

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

  // gallery scrolling is handled inside the Gallery component

  const scrollToSection = (sectionId: string) => {
    const target = document.getElementById(sectionId)
    if (!target) return
    const headerEl = headerRef.current
    const headerOffset = headerEl ? headerEl.getBoundingClientRect().height : 64
    const elementTop = target.getBoundingClientRect().top + window.scrollY
    const top = Math.max(elementTop - headerOffset - 8, 0) // extra 8px breathing room
    // Use native smooth scroll; if user scrolls, it won't fight
    window.scrollTo({ top, behavior: "smooth" })
  }

  const openFloorPlanModal = (planType: string) => {
    setSelectedFloorPlan(planType)
    setIsFloorPlanOpen(true)
  }

  const handleContactSubmit = async (data: any) => {
    console.log("Contact form submitted:", data)

    // Simulate API submission
    try {
      // Here you would normally send to your backend API
      // const response = await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) })

      // For now, we'll simulate success
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Close modals after successful submission
      setIsContactOpen(false)
      setIsFloatingEnquiryOpen(false)
    } catch (error) {
      console.error("Form submission error:", error)
      // Handle error state here
    }
  }

  const handleFloorPlanSubmit = async (data: any) => {
    console.log("Floor plan inquiry submitted:", data)

    try {
      // Simulate API submission
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setIsFloorPlanOpen(false)
    } catch (error) {
      console.error("Floor plan submission error:", error)
    }
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
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        /* Ensure anchors don't hide behind sticky header */
        [id] { scroll-margin-top: 80px; }
        body, html {
          width: 100%;
          max-width: 100%;
          overflow-x: hidden;
          background-color: #ffffff;
        }
        *, *::before, *::after { box-sizing: border-box; }

        /* Hardening Slick to always respect width on mobile */
        .hero-slick-carousel, .hero-slick-carousel .slick-slider, .hero-slick-carousel .slick-list {
          width: 100% !important;
        }
        .hero-slick-carousel .slick-list {
          overflow: hidden;
          /* Let vertical scrolling pass through on touch devices */
          touch-action: pan-y;
          -ms-touch-action: pan-y;
        }
        /* Important: fade mode requires slick-track to be block */
        .hero-slick-carousel .slick-track { display: block; }
        .hero-slick-carousel .slick-slide > div { width: 100%; }
        .hero-slick-carousel img { display: block; width: 100%; height: auto; }

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
          background: linear-gradient(135deg, var(--color-brand), var(--color-brand));
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
          /* Ensure content remains visible when motion is reduced */
          .animate-on-scroll { opacity: 1; transform: none; }
          .animate-fade-in { opacity: 1; transform: none; }
        }

        /* Mobile-specific improvements */
        @media (max-width: 768px) {
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          
          .card-hover:hover {
            transform: none;
            box-shadow: none;
          }
          
          .card-hover:active {
            transform: scale(0.98);
          }
          
          /* Improve touch targets */
          button, .cursor-pointer {
            min-height: 44px;
            min-width: 44px;
          }
          
          /* Better scrolling on mobile */
          .overflow-x-auto {
            -webkit-overflow-scrolling: touch;
            scroll-behavior: smooth;
          }
          .mobile-menu-enter {
            opacity: 0;
          }
          .mobile-menu-enter-active {
            opacity: 1;
            transition: opacity 200ms ease-out;
          }
          .mobile-menu-exit {
            opacity: 1;
          }
          .mobile-menu-exit-active {
            opacity: 0;
            transition: opacity 200ms ease-in;
          }
          .hero-section {
            padding-top: 1rem;
            padding-bottom: 2rem;
          }
          .mobile-optimized-grid {
            gap: 1rem;
          }
        }

        /* React Slick Carousel Custom Styles */
        .hero-slick-carousel {
          border-radius: 12px;
          overflow: hidden;
        }

        .hero-slick-carousel .slick-slide {
          outline: none;
        }

        .hero-slick-carousel .slick-dots {
          bottom: 20px;
          z-index: 10;
        }

        .hero-slick-carousel .slick-dots li {
          margin: 0 4px;
        }

        .hero-slick-carousel .slick-dots li.slick-active div {
          background-color: var(--color-brand) !important;
          transform: scale(1.2);
        }

        .hero-slick-carousel .slick-dots li div {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.6);
          transition: all 0.3s ease;
        }

        .hero-slick-carousel .slick-prev,
        .hero-slick-carousel .slick-next {
          width: 40px;
          height: 40px;
          background-color: rgba(255, 255, 255, 0.9) !important;
          border-radius: 50%;
          z-index: 10;
          transition: all 0.3s ease;
        }

        .hero-slick-carousel .slick-prev:hover,
        .hero-slick-carousel .slick-next:hover {
          background-color: white !important;
          transform: scale(1.1);
        }

        .hero-slick-carousel .slick-prev {
          left: 20px;
        }

        .hero-slick-carousel .slick-next {
          right: 20px;
        }

        .hero-slick-carousel .slick-prev:before,
        .hero-slick-carousel .slick-next:before {
          color: #374151;
          font-size: 20px;
          font-weight: bold;
        }

        /* Subtle entrance animation on initial load */
        .hero-carousel-enter {
          opacity: 0;
          transform: translateY(10px) scale(0.99);
          animation: heroEnter 700ms ease-out forwards;
          animation-delay: 200ms;
        }

        @keyframes heroEnter {
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        /* Mobile responsive adjustments */
        @media (max-width: 768px) {
          .hero-slick-carousel .slick-prev,
          .hero-slick-carousel .slick-next {
            display: none !important;
          }
          
          .hero-slick-carousel .slick-dots {
            bottom: 10px;
          }
          /* On mobile we don't use fade; let Slick manage layout naturally */
          .hero-slick-carousel .slick-track { display: flex; }
        }

        .hero-carousel-enter .slick-slide {
          opacity: 0;
          transition: opacity 0.5s ease-in-out;
        }

        .hero-carousel-enter .slick-slide.slick-active {
          opacity: 1;
        }

        /* Mobile hero native scroll-snap slider */
        .mobile-hero-scroller {
          display: flex;
          gap: 12px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
        }
        .mobile-hero-scroller::-webkit-scrollbar { display: none; }
        .mobile-hero-slide { flex: 0 0 100%; scroll-snap-align: center; }
        /* Reserve notch space + header height (header height is set via JS var) */
        .safe-header-space {
          height: calc(env(safe-area-inset-top) + var(--header-height, 64px));
        }

        /* Ensure drawer always takes full width on very small screens so background doesn't peek */
        @media (max-width: 400px) {
          .mobile-drawer {
            width: 100% !important;
          }
        }

        /* Mobile menu drawer animation */
        @keyframes drawerIn {
          from { transform: translateX(100%); opacity: 0.6; }
          to { transform: translateX(0); opacity: 1; }
        }
        .mobile-drawer { animation: drawerIn 280ms ease forwards; }
      `}</style>

      <Button
        onClick={() => setIsFloatingEnquiryOpen(true)}
        className="fixed right-4 md:right-6 bottom-6 z-50 bg-blue-600 hover:bg-blue-700 text-white px-4 md:px-6 py-2 md:py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-pulse text-sm md:text-base min-h-[44px] min-w-[44px]"
      >
        Enquiry Now
      </Button>

      <Header
        headerRef={headerRef}
        currentSection={currentSection}
        featuresOpen={featuresOpen}
        setFeaturesOpen={setFeaturesOpen}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        scrollToSection={scrollToSection}
      />
      <Hero galleryImages={galleryImages} onOpenContact={() => setIsContactOpen(true)} />
      <Overview />

      <Configuration onOpenFloorPlan={openFloorPlanModal} />

      <Amenities amenities={amenities} />

      <Location />

      <Gallery images={galleryImages} />

      <FloorPlans onOpenFloorPlan={openFloorPlanModal} />

      <About />

      <Contact onSubmit={handleContactSubmit} />

      <footer className="bg-gray-950 text-white py-12 animate-on-scroll">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                {/* Logo in footer */}
                <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-gray-900 to-black rounded-full shadow-lg">
                  <div className="relative w-6 h-6">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-lg font-bold text-gold tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
                        e
                      </div>
                    </div>
                    <svg className="absolute inset-0 w-full h-full text-gold" viewBox="0 0 32 32">
                      <path
                        d="M16 4 A12 12 0 0 1 28 16 A12 12 0 0 1 16 28 A12 12 0 0 1 4 16 A12 12 0 0 1 16 4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeDasharray="20 12"
                        strokeDashoffset="0"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <div className="text-xl font-bold text-white" style={{ fontFamily: 'Georgia, serif' }}>AAROHAN</div>
                  <div className="text-xs text-gray-400 font-medium tracking-widest uppercase">by Emberlynn</div>
                </div>
              </div>
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
        <DialogContent className="max-w-[92vw] sm:max-w-md p-4 sm:p-6 max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Contact Us</DialogTitle>
          </DialogHeader>
          <UniversalContactForm
            showPropertyType={true}
            buttonText="Schedule Visit"
            formType="contact"
            onSubmit={handleContactSubmit}
            onSuccess={() => { }}
          />
        </DialogContent>
      </Dialog>

      <Dialog open={isFloorPlanOpen} onOpenChange={setIsFloorPlanOpen}>
        <DialogContent className="w-[95vw] sm:max-w-md mx-auto my-6 p-4 sm:p-6 max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Get {selectedFloorPlan} Details</DialogTitle>
          </DialogHeader>
          <UniversalContactForm
            description={`Please provide your contact details to receive detailed floor plan information for ${selectedFloorPlan}.`}
            buttonText="Submit"
            formType="floor-plan"
            onSubmit={handleFloorPlanSubmit}
            onSuccess={() => { }}
          />
        </DialogContent>
      </Dialog>

      <Dialog open={isFloatingEnquiryOpen} onOpenChange={setIsFloatingEnquiryOpen}>
        <DialogContent className="w-[95vw] sm:max-w-md mx-auto my-6 p-4 sm:p-6 max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Quick Enquiry</DialogTitle>
          </DialogHeader>
          <UniversalContactForm
            description="Get in touch with us for quick assistance and information about Aarohan by Emberlynn."
            showPropertyType={true}
            buttonText="Submit Enquiry"
            formType="enquiry"
            onSubmit={handleContactSubmit}
            onSuccess={() => { }}
          />
        </DialogContent>
      </Dialog>

      {/* Thank You Page */}
      {/* The thank you page is now a separate component, so we don't need to manage its state here. */}
      {/* The UniversalContactForm component itself handles showing the thank you page. */}
    </div>
  )
}
