"use client"

import type { Metadata } from "next"
import { useState } from "react"
import Link from "next/link"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Instagram } from "lucide-react"

const TIME_SLOTS = [
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
]

export default function ConsultationPage() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
  const [selectedTime, setSelectedTime] = useState<string>("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Format the booking details
    const bookingDetails = `
Date: ${selectedDate?.toLocaleDateString()}
Time: ${selectedTime}
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Message: ${formData.message}
    `.trim()

    // Create mailto link with booking details
    const mailtoLink = `mailto:nick@auraganichealing.com?subject=Consultation Booking Request&body=${encodeURIComponent(bookingDetails)}`
    
    // Open email client
    window.location.href = mailtoLink
    
    setIsSubmitted(true)
  }

  const isFormValid = selectedDate && selectedTime && formData.name && formData.email

  return (
    <main className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Free 20‑Minute Consultation</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to feel more like your best self? Schedule a complimentary 20-minute call and share what you're going through in a safe, judgment-free space. Together, we'll discuss your specific needs and take the first step towards formulating a custom-tailored gameplan of healing modalities that align best with your journey.
          </p>
        </div>

        {isSubmitted ? (
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Booking Request Sent!</CardTitle>
              <CardDescription className="text-center">
                Your email client should have opened with your booking details. Please send the email to confirm your consultation.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button onClick={() => setIsSubmitted(false)} variant="outline">
                Make Another Booking
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {/* Calendar and Time Selection */}
            <Card>
              <CardHeader>
                <CardTitle>Select Date & Time</CardTitle>
                <CardDescription>Choose your preferred consultation date and time</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label className="mb-3 block">Pick a Date</Label>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    disabled={(date) => date < new Date() || date.getDay() === 0 || date.getDay() === 6}
                    className="rounded-md border"
                  />
                </div>

                {selectedDate && (
                  <div>
                    <Label className="mb-3 block">Available Time Slots</Label>
                    <div className="grid grid-cols-2 gap-2 max-h-64 overflow-y-auto">
                      {TIME_SLOTS.map((time) => (
                        <Button
                          key={time}
                          type="button"
                          variant={selectedTime === time ? "default" : "outline"}
                          onClick={() => setSelectedTime(time)}
                          className="w-full"
                        >
                          {time}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Your Details</CardTitle>
                <CardDescription>Tell us a bit about yourself</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">What brings you here today?</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share what you're experiencing..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" disabled={!isFormValid} className="w-full" size="lg">
                    Request Consultation
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting, you'll be able to send a booking request via email.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        )}

        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground mb-4">Prefer to reach out directly?</p>
          <div className="flex flex-wrap justify-center gap-4 text-lg">
            <a
              href="mailto:nick@auraganichealing.com"
              className="text-primary underline hover:text-primary/80 transition-colors flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              nick@auraganichealing.com
            </a>
            <span className="text-muted-foreground">•</span>
            <a
              href="https://www.instagram.com/auraganichealing/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline hover:text-primary/80 transition-colors flex items-center gap-2"
            >
              <Instagram className="w-5 h-5" />
              @auraganichealing
            </a>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg" className="rounded-full bg-green-600 hover:bg-primary text-white">
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
