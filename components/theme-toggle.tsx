"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Sun, Moon, Monitor } from "lucide-react"
import { Button } from "@/components/ui/button"

type Theme = "dark" | "light" | "system"

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem("theme") as Theme
    if (savedTheme) {
      setTheme(savedTheme)
    }
  }, [])

  useEffect(() => {
    if (!mounted) return

    const root = document.documentElement
    
    // Remove existing theme classes
    root.classList.remove("light", "dark")

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
      root.classList.add(systemTheme)
      root.setAttribute("data-theme", systemTheme)
      console.log("Theme set to system:", systemTheme)
    } else {
      root.classList.add(theme)
      root.setAttribute("data-theme", theme)
      console.log("Theme set to:", theme)
    }

    localStorage.setItem("theme", theme)
  }, [theme, mounted])

  const handleThemeChange = (newTheme: Theme) => {
    console.log("Changing theme from", theme, "to", newTheme)
    setTheme(newTheme)
  }

  if (!mounted) return null

  const themes: { value: Theme; icon: React.ReactNode; label: string }[] = [
    { value: "light", icon: <Sun className="w-4 h-4" />, label: "Light" },
    { value: "dark", icon: <Moon className="w-4 h-4" />, label: "Dark" },
    { value: "system", icon: <Monitor className="w-4 h-4" />, label: "System" },
  ]

  return (
    <div className="flex items-center space-x-2 p-1 bg-muted rounded-lg border border-border">
      <span className="text-xs text-muted-foreground px-2">Theme:</span>
      {themes.map((t) => (
        <Button
          key={t.value}
          variant={theme === t.value ? "default" : "ghost"}
          size="sm"
          onClick={() => handleThemeChange(t.value)}
          className="relative h-8 w-8 p-0 hover:scale-105 transition-transform"
          title={t.label}
        >
          <motion.div
            layout
            className="absolute inset-0 bg-primary rounded-md"
            initial={false}
            animate={{
              opacity: theme === t.value ? 1 : 0,
            }}
            transition={{ duration: 0.2 }}
          />
          <motion.div
            layout
            className="relative z-10 flex items-center justify-center"
            initial={false}
            animate={{
              color: theme === t.value ? "white" : "hsl(var(--muted-foreground))",
            }}
            transition={{ duration: 0.2 }}
          >
            {t.icon}
          </motion.div>
          <span className="sr-only">{t.label}</span>
        </Button>
      ))}
      <span className="text-xs text-muted-foreground px-2 font-mono">
        {theme === "system" ? "Auto" : theme}
      </span>
    </div>
  )
}
