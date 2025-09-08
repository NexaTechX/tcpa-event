"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Calendar, Clock, MapPin, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const CONFERENCE_DATE = new Date("2025-11-29T09:00:00") // November 29, 2025

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = CONFERENCE_DATE.getTime() - new Date().getTime()
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    // Trigger animation after component mounts
    setTimeout(() => setIsVisible(true), 100)

    return () => clearInterval(timer)
  }, [])

  const timeUnits = [
    { value: timeLeft.days, label: "Days", color: "text-primary" },
    { value: timeLeft.hours, label: "Hours", color: "text-accent" },
    { value: timeLeft.minutes, label: "Minutes", color: "text-primary" },
    { value: timeLeft.seconds, label: "Seconds", color: "text-accent" },
  ]

  return (
    <Card className="bg-gradient-to-br from-card to-card/50 border-primary/20 backdrop-blur-sm">
      <CardContent className="p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-foreground">Conference Countdown</h3>
            <p className="text-muted-foreground">TPCA 2025 is coming soon!</p>
          </div>

          {/* Countdown Numbers */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {timeUnits.map((unit, index) => (
              <motion.div
                key={unit.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-background to-muted/50 rounded-lg p-4 border border-border/50 shadow-lg">
                  <motion.div
                    key={unit.value}
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className={`text-3xl lg:text-4xl font-bold ${unit.color}`}
                  >
                    {unit.value.toString().padStart(2, "0")}
                  </motion.div>
                  <div className="text-sm text-muted-foreground mt-1 font-medium">{unit.label}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Conference Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4"
          >
            <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span>November 29, 2025</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>9:00 AM WAT</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>Lagos, Nigeria</span>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="pt-4"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Join 500+ Attendees</span>
            </div>
          </motion.div>
        </motion.div>
      </CardContent>
    </Card>
  )
}
