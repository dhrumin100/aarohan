"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

interface UniversalContactFormProps {
  title?: string
  description?: string
  showPropertyType?: boolean
  showMessage?: boolean
  buttonText?: string
  formType?: string
  onSubmit?: (data: any) => void
  onSuccess?: (data: any) => void
  onError?: (error: string) => void
  variant?: "light" | "dark"
}

export function UniversalContactForm({
  title = "Contact Us",
  description,
  showPropertyType = false,
  showMessage = false,
  buttonText = "Submit",
  formType = "contact",
  onSubmit,
  onSuccess,
  onError,
  variant = "light",
}: UniversalContactFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    propertyType: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submission started')
    setIsSubmitting(true)

    try {
      // Prepare data for API
      const submissionData = {
        ...formData,
        formType,
        timestamp: new Date().toISOString()
      }

      console.log('Submitting form data:', submissionData)

      // Submit to API
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      })

      console.log('API Response status:', response.status)
      console.log('API Response ok:', response.ok)

      const result = await response.json()
      console.log('API Response result:', result)

      if (response.ok) {
        // Success - redirect to thank you page
        console.log('Form submitted successfully, redirecting to thank you page...')

        // Call onSubmit for backward compatibility
        onSubmit?.(formData)

        // Build query parameters for thank you page
        const params = new URLSearchParams({
          type: formType,
          name: formData.fullName
        })

        // Redirect to thank you page
        router.push(`/thank-you?${params.toString()}`)
      } else {
        // Error
        console.error('API returned error status:', response.status, result)
        throw new Error(result.error || 'Failed to submit form')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      onError?.(error instanceof Error ? error.message : 'Failed to submit form')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const isDark = variant === "dark"

  return (
    <div className="space-y-4">
      {title && <h3 className={`text-xl font-bold ${isDark ? 'text-[var(--beige)]' : 'text-[var(--navy)]'}`}>{title}</h3>}
      {description && <p className={`${isDark ? 'text-[var(--beige)]/85' : 'text-[var(--navy)]/80'} text-sm`}>{description}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="fullName" className={`text-sm font-medium ${isDark ? 'text-[var(--beige)]' : 'text-[var(--navy)]'} mb-2 block`}>
            Full Name *
          </Label>
          <Input
            id="fullName"
            type="text"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={(e) => handleChange("fullName", e.target.value)}
            required
            className={
              `h-12 text-base ${
                isDark
                  ? 'bg-transparent text-[var(--beige)] placeholder:text-[var(--beige)]/60 border-[var(--beige)]/40 focus-visible:border-[var(--color-gold)]'
                  : 'bg-white text-[var(--navy)] placeholder:text-[var(--navy)]/55 border-[var(--beige)]/70 focus-visible:border-[var(--color-gold)]'
              }`
            }
          />
        </div>

        <div>
          <Label htmlFor="mobile" className={`text-sm font-medium ${isDark ? 'text-[var(--beige)]' : 'text-[var(--navy)]'} mb-2 block`}>
            Mobile Number *
          </Label>
          <Input
            id="mobile"
            type="tel"
            placeholder="Enter your mobile number"
            value={formData.mobile}
            onChange={(e) => handleChange("mobile", e.target.value)}
            required
            className={
              `h-12 text-base ${
                isDark
                  ? 'bg-transparent text-[var(--beige)] placeholder:text-[var(--beige)]/60 border-[var(--beige)]/40 focus-visible:border-[var(--color-gold)]'
                  : 'bg-white text-[var(--navy)] placeholder:text-[var(--navy)]/55 border-[var(--beige)]/70 focus-visible:border-[var(--color-gold)]'
              }`
            }
          />
        </div>

        <div>
          <Label htmlFor="email" className={`text-sm font-medium ${isDark ? 'text-[var(--beige)]' : 'text-[var(--navy)]'} mb-2 block`}>
            Email Address *
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            required
            className={
              `h-12 text-base ${
                isDark
                  ? 'bg-transparent text-[var(--beige)] placeholder:text-[var(--beige)]/60 border-[var(--beige)]/40 focus-visible:border-[var(--color-gold)]'
                  : 'bg-white text-[var(--navy)] placeholder:text-[var(--navy)]/55 border-[var(--beige)]/70 focus-visible:border-[var(--color-gold)]'
              }`
            }
          />
        </div>

        {showPropertyType && (
          <div>
            <Label htmlFor="propertyType" className={`text-sm font-medium ${isDark ? 'text-[var(--beige)]' : 'text-[var(--navy)]'} mb-2 block`}>
              Property Type
            </Label>
            <Select value={formData.propertyType} onValueChange={(value) => handleChange("propertyType", value)}>
              <SelectTrigger className={`h-12 text-base ${isDark ? 'bg-transparent text-[var(--beige)] border-[var(--beige)]/40 focus-visible:border-[var(--color-gold)]' : 'bg-white text-[var(--navy)] border-[var(--beige)]/70 focus-visible:border-[var(--color-gold)]'}`}>
                <SelectValue placeholder="Select property type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="3bhk">3 BHK</SelectItem>
                <SelectItem value="4bhk">4 BHK</SelectItem>
                <SelectItem value="5bhk">5 BHK</SelectItem>
              </SelectContent>
            </Select>
          </div>
        )}

        {showMessage && (
          <div>
            <Label htmlFor="message" className={`text-sm font-medium ${isDark ? 'text-[var(--beige)]' : 'text-[var(--navy)]'} mb-2 block`}>
              Message
            </Label>
            <Textarea
              id="message"
              placeholder="Enter your message"
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              rows={4}
              className={
                `text-base ${
                  isDark
                    ? 'bg-transparent text-[var(--beige)] placeholder:text-[var(--beige)]/60 border-[var(--beige)]/40 focus-visible:border-[var(--color-gold)]'
                    : 'bg-white text-[var(--navy)] placeholder:text-[var(--navy)]/55 border-[var(--beige)]/70 focus-visible:border-[var(--color-gold)]'
                }`
              }
            />
          </div>
        )}

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-12 text-base bg-[var(--color-gold)] hover:brightness-110 text-white hover-lift disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Submitting..." : buttonText}
        </Button>
      </form>
    </div>
  )
}
