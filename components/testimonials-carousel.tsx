"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    id: 1,
    name: "Sarah Adebayo",
    role: "Tech Entrepreneur",
    company: "InnovateLagos",
    content: "TPCA 2024 was a game-changer for my startup. The networking opportunities and insights from industry leaders helped me secure funding within 3 months.",
    rating: 5,
    image: "/testimonials/sarah.jpg"
  },
  {
    id: 2,
    name: "David Okechukwu",
    role: "Creative Director",
    company: "DesignHub Africa",
    content: "The creative sessions at TPCA opened my eyes to new possibilities. I've since launched two successful campaigns inspired by what I learned.",
    rating: 5,
    image: "/testimonials/david.jpg"
  },
  {
    id: 3,
    name: "Fatima Hassan",
    role: "Student Leader",
    company: "University of Lagos",
    content: "As a student, TPCA gave me the confidence to pursue my dreams. The mentorship program connected me with amazing professionals who guide me till today.",
    rating: 5,
    image: "/testimonials/fatima.jpg"
  },
  {
    id: 4,
    name: "Emeka Okonkwo",
    role: "Business Consultant",
    company: "Growth Partners",
    content: "I've attended many conferences, but TPCA stands out for its authentic African perspective and practical business insights. Highly recommended!",
    rating: 5,
    image: "/testimonials/emeka.jpg"
  }
]

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex((prev) => (prev + newDirection + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-foreground mb-4"
        >
          What Our Attendees Say
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted-foreground"
        >
          Hear from previous TPCA participants about their transformative experiences
        </motion.p>
      </div>

      <div className="relative overflow-hidden rounded-2xl">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x)

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1)
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1)
              }
            }}
            className="absolute w-full"
          >
            <Card className="bg-gradient-to-br from-card to-card/50 border-primary/20 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="space-y-6">
                  {/* Quote Icon */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, type: "spring" }}
                    className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center"
                  >
                    <Quote className="w-8 h-8 text-primary" />
                  </motion.div>

                  {/* Testimonial Content */}
                  <motion.blockquote
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-lg text-foreground leading-relaxed italic"
                  >
                    "{currentTestimonial.content}"
                  </motion.blockquote>

                  {/* Rating */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="flex justify-center space-x-1"
                  >
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </motion.div>

                  {/* Author Info */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="space-y-2"
                  >
                    <div className="font-semibold text-foreground">
                      {currentTestimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {currentTestimonial.role} at {currentTestimonial.company}
                    </div>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center space-x-4 mt-8">
        <Button
          variant="outline"
          size="sm"
          onClick={() => paginate(-1)}
          className="w-10 h-10 p-0 rounded-full"
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>
        
        {/* Dots Indicator */}
        <div className="flex space-x-2">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1)
                setCurrentIndex(index)
              }}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-primary" : "bg-muted"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={() => paginate(1)}
          className="w-10 h-10 p-0 rounded-full"
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}
