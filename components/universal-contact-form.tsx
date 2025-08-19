"use client"

import type React from "react"

import { useState } from "react"
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
  onSubmit?: (data: any) => void
}

export function UniversalContactForm({
  title = "Contact Us",
  description,
  showPropertyType = false,
  showMessage = false,
  buttonText = "Submit",
  onSubmit,
}: UniversalContactFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    propertyType: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit?.(formData)
    // Reset form
    setFormData({
      fullName: "",
      mobile: "",
      email: "",
      propertyType: "",
      message: "",
    })
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="space-y-4">
      {title && <h3 className="text-xl font-bold text-gray-900">{title}</h3>}
      {description && <p className="text-gray-600 text-sm">{description}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="fullName" className="text-sm font-medium text-gray-700 mb-2 block">
            Full Name *
          </Label>
          <Input
            id="fullName"
            type="text"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={(e) => handleChange("fullName", e.target.value)}
            required
          />
        </div>

        <div>
          <Label htmlFor="mobile" className="text-sm font-medium text-gray-700 mb-2 block">
            Mobile Number *
          </Label>
          <Input
            id="mobile"
            type="tel"
            placeholder="Enter your mobile number"
            value={formData.mobile}
            onChange={(e) => handleChange("mobile", e.target.value)}
            required
          />
        </div>

        <div>
          <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2 block">
            Email Address *
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            required
          />
        </div>

        {showPropertyType && (
          <div>
            <Label htmlFor="propertyType" className="text-sm font-medium text-gray-700 mb-2 block">
              Property Type
            </Label>
            <Select value={formData.propertyType} onValueChange={(value) => handleChange("propertyType", value)}>
              <SelectTrigger>
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
            <Label htmlFor="message" className="text-sm font-medium text-gray-700 mb-2 block">
              Message
            </Label>
            <Textarea
              id="message"
              placeholder="Enter your message"
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              rows={4}
            />
          </div>
        )}

        <Button type="submit" className="w-full bg-gray-900 hover:bg-gray-800 text-white hover-lift">
          {buttonText}
        </Button>
      </form>
    </div>
  )
}
