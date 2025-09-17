"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    id: 1,
    name: "Mary Aisedion",
    role: "TPCA Attendee",
    company: "",
    content: "The Pacesetters Conference Africa is a platform of change and adequate learning meant to equip one with the ability to excel and stand out in this digital age.",
    rating: 5
  },
  {
    id: 2,
    name: "Oluwalade Abisoye",
    role: "TPCA Attendee",
    company: "",
    content: "I see The Pacesetters Conference Africa as a conference organized for people to learn, connect and get information to grow their skills.",
    rating: 5
  },
  {
    id: 3,
    name: "Jesugbogo Enis",
    role: "TPCA Attendee",
    company: "",
    content: "I attended the first Conference actively, where I learnt a lot about public speaking especially. And it was mind-blowing. TPCA for me is an opportunity to up my game and learn a lot. It's a privilege to network and meet new people too.",
    rating: 5
  }
]

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-4">
          TESTIMONIALS
        </h2>
        <p className="text-muted-foreground">
          Year after year, The Pacesetters Conference Africa has inspired thousands to dream bigger, lead better, and step beyond their limits. Here's what some of our past attendees have to say:
        </p>
      </div>

      <div className="relative">
        <Card className="bg-gradient-to-br from-card to-card/50 border-primary/20 backdrop-blur-sm">
          <CardContent className="p-8 text-center">
            <div className="space-y-6">
              {/* Quote Icon */}
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                <Quote className="w-8 h-8 text-primary" />
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-lg text-foreground leading-relaxed italic">
                "{currentTestimonial.content}"
              </blockquote>

              {/* Rating */}
              <div className="flex justify-center space-x-1">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Author Info */}
              <div className="space-y-2">
                <div className="font-semibold text-foreground">
                  {currentTestimonial.name}
                </div>
                <div className="text-sm text-muted-foreground">
                  {currentTestimonial.role}{currentTestimonial.company ? ` at ${currentTestimonial.company}` : ''}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center space-x-4 mt-8">
        <Button
          variant="outline"
          size="sm"
          onClick={goToPrevious}
          className="w-10 h-10 p-0 rounded-full"
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>
        
        {/* Dots Indicator */}
        <div className="flex space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-primary" : "bg-muted"
              }`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={goToNext}
          className="w-10 h-10 p-0 rounded-full"
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}
