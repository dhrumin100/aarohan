"use client"

import { useEffect, useState, Suspense } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { CheckCircle, Home, Phone, Mail, ArrowLeft } from "lucide-react"
import Link from "next/link"

function ThankYouContent() {
    const [countdown, setCountdown] = useState(10)
    const searchParams = useSearchParams()
    const router = useRouter()

    const formType = searchParams.get('type') || 'contact'
    const name = searchParams.get('name') || ''

    useEffect(() => {
        console.log('ThankYouPage mounted with formType:', formType)
        const timer = setInterval(() => {
            setCountdown((prev) => {
                if (prev <= 1) {
                    return 0
                }
                return prev - 1
            })
        }, 1000)

        return () => {
            console.log('ThankYouPage unmounting')
            clearInterval(timer)
        }
    }, [])

    // Separate useEffect for auto-redirect
    useEffect(() => {
        if (countdown === 0) {
            router.push('/')
        }
    }, [countdown, router])

    const getFormTypeMessage = () => {
        switch (formType) {
            case "contact":
                return "Thank you for contacting us! Our team will get back to you within 24 hours."
            case "floor-plan":
                return "Thank you for your interest! We'll send you detailed floor plan information shortly."
            case "enquiry":
                return "Thank you for your enquiry! Our sales team will contact you soon."
            case "test":
                return "This is a test message! The thank you page is working correctly."
            default:
                return "Thank you for your submission! We'll get back to you shortly."
        }
    }

    const getPageTitle = () => {
        switch (formType) {
            case "contact":
                return "Contact Form Submitted"
            case "floor-plan":
                return "Floor Plan Request Received"
            case "enquiry":
                return "Enquiry Submitted"
            case "test":
                return "Test Submission"
            default:
                return "Form Submitted"
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Header */}
            <header className="bg-white shadow-sm border-b border-gray-200">
                <div className="container mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <Link href="/" className="flex items-center space-x-3">
                                {/* Logo */}
                                <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-gray-900 to-black rounded-full shadow-lg">
                                    <div className="relative w-6 h-6">
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="text-lg font-bold text-brand tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
                                                e
                                            </div>
                                        </div>
                                        <svg className="absolute inset-0 w-full h-full text-brand" viewBox="0 0 32 32">
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
                                    <div className="text-2xl font-bold text-brand" style={{ fontFamily: 'Georgia, serif' }}>AAROHAN</div>
                                    <div className="text-xs text-gray-500 font-medium tracking-widest uppercase">by Emberlynn</div>
                                </div>
                            </Link>
                        </div>
                        <Link
                            href="/"
                            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to Home
                        </Link>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-6 py-20">
                <div className="max-w-2xl mx-auto">
                    {/* Success Card */}
                    <div className="bg-white rounded-3xl shadow-2xl p-12 text-center">
                        {/* Success Icon */}
                        <div className="mx-auto w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-8">
                            <CheckCircle className="w-16 h-16 text-green-600" />
                        </div>

                        {/* Page Title */}
                        <h1 className="text-3xl font-bold text-gray-900 mb-4">
                            {getPageTitle()}
                        </h1>

                        {/* Success Message */}
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Thank You!</h2>

                        {name && (
                            <p className="text-lg text-gray-700 mb-6">
                                Dear <span className="font-semibold">{name}</span>,
                            </p>
                        )}

                        <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                            {getFormTypeMessage()}
                        </p>

                        {/* Contact Information */}
                        <div className="rounded-2xl p-6 mb-8 border bg-[oklch(0.21_0.034_264.665_/_0.06)] border-[oklch(0.21_0.034_264.665_/_0.25)]">
                            <h3 className="font-semibold text-gray-900 mb-4 text-lg">Need immediate assistance?</h3>
                            <div className="space-y-3 text-base">
                                <div className="flex items-center justify-center gap-3">
                                    <Phone className="w-5 h-5 text-brand" />
                                    <span className="text-gray-700 font-medium">999 887 8448</span>
                                </div>
                                <div className="flex items-center justify-center gap-3">
                                    <Mail className="w-5 h-5 text-brand" />
                                    <span className="text-gray-700 font-medium">info@theemberlynn.com</span>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="space-y-4">
                            <Link href="/">
                                <Button className="w-full bg-gradient-to-r from-brand to-brand hover:from-brand hover:to-brand text-white text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                                    <Home className="w-5 h-5 mr-3" />
                                    Back to Home
                                </Button>
                            </Link>

                            <Button
                                variant="outline"
                                onClick={() => router.push('/')}
                                className="w-full border-2 border-gray-300 text-gray-700 hover:bg-gray-50 text-lg py-4 rounded-xl"
                            >
                                Close ({countdown}s)
                            </Button>
                        </div>

                        {/* Auto-close notice */}
                        <p className="text-sm text-gray-500 mt-6">
                            This page will automatically redirect to home in {countdown} seconds
                        </p>
                    </div>

                    {/* Additional Information */}
                    <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
                        <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">What happens next?</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">📞</span>
                                </div>
                                <h4 className="font-semibold text-gray-900 mb-2">Phone Call</h4>
                                <p className="text-gray-600 text-sm">Our team will call you within 24 hours to discuss your requirements.</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">📧</span>
                                </div>
                                <h4 className="font-semibold text-gray-900 mb-2">Email Confirmation</h4>
                                <p className="text-gray-600 text-sm">You'll receive a detailed email with project information and next steps.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-8 mt-20">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-gray-400"> 2024 Emberlynn Group. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}

export default function ThankYouPage() {
    return (
        <Suspense fallback={<div className="min-h-screen" /> }>
            <ThankYouContent />
        </Suspense>
    )
}
