"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Ticket, Mail, Phone, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false)

  const actions = [
    {
      icon: <Ticket className="w-5 h-5" />,
      label: "Get Tickets",
      href: "/tickets",
      color: "bg-primary hover:bg-primary/90"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Contact Us",
      href: "mailto:pacesetters887@gmail.com",
      color: "bg-accent hover:bg-accent/90"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Call Us",
      href: "tel:+2341234567890",
      color: "bg-green-600 hover:bg-green-700"
    }
  ]

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute bottom-16 right-0 space-y-3"
          >
            {actions.map((action, index) => (
              <motion.div
                key={action.label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center space-x-3"
              >
                <span className="text-sm text-muted-foreground bg-background px-3 py-1 rounded-full border border-border">
                  {action.label}
                </span>
                <Button
                  asChild
                  size="sm"
                  className={`${action.color} text-white shadow-lg hover:scale-105 transition-transform`}
                >
                  <a href={action.href} target={action.href.startsWith('http') ? '_blank' : undefined} rel={action.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                    {action.icon}
                  </a>
                </Button>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-lg transition-all duration-300 ${
          isOpen 
            ? 'bg-red-500 hover:bg-red-600' 
            : 'bg-primary hover:bg-primary/90'
        } text-white flex items-center justify-center`}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90 }}
              animate={{ rotate: 0 }}
              exit={{ rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="plus"
              initial={{ rotate: 90 }}
              animate={{ rotate: 0 }}
              exit={{ rotate: -90 }}
              transition={{ duration: 0.2 }}
            >
              <Plus className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  )
}
