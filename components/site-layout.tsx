import type React from "react"
import { Navigation } from "./navigation"
import { Footer } from "./footer"
import { FloatingActionButton } from "./floating-action-button"
import { ThemeStatus } from "./theme-status"

interface SiteLayoutProps {
  children: React.ReactNode
}

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>{children}</main>
      <Footer />
      <FloatingActionButton />
      <ThemeStatus />
    </div>
  )
}
