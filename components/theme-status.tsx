"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Sun, Moon, Monitor } from "lucide-react"

export function ThemeStatus() {
  const [currentTheme, setCurrentTheme] = useState<string>("dark")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const checkTheme = () => {
      const root = document.documentElement
      const theme = root.classList.contains("light") ? "light" : "dark"
      setCurrentTheme(theme)
    }

    // Check theme immediately
    checkTheme()
    setIsVisible(true)

    // Set up observer for theme changes
    const observer = new MutationObserver(checkTheme)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"]
    })

    return () => observer.disconnect()
  }, [])

  const getThemeIcon = () => {
    switch (currentTheme) {
      case "light":
        return <Sun className="w-4 h-4" />
      case "dark":
        return <Moon className="w-4 h-4" />
      default:
        return <Monitor className="w-4 h-4" />
    }
  }

  const getThemeColor = () => {
    switch (currentTheme) {
      case "light":
        return "bg-yellow-500"
      case "dark":
        return "bg-blue-500"
      default:
        return "bg-gray-500"
    }
  }

  if (!isVisible) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="fixed top-4 left-4 z-50"
      >
        <div className="flex items-center space-x-2 px-3 py-2 bg-card border border-border rounded-lg shadow-lg">
          <div className={`w-2 h-2 rounded-full ${getThemeColor()}`} />
          <span className="text-xs font-medium text-foreground">
            {currentTheme.charAt(0).toUpperCase() + currentTheme.slice(1)}
          </span>
          <div className="text-muted-foreground">
            {getThemeIcon()}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
