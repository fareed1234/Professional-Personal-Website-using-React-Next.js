"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import {  X } from "lucide-react"
import { useTheme } from "next-themes"


interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [expandedDropdown, setExpandedDropdown] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const { resolvedTheme } = useTheme()

  // Ensure component is mounted before rendering theme-dependent elements
  useEffect(() => {
    setMounted(true)
  }, [])

  const isDarkMode = mounted && resolvedTheme === "dark"

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  // Handle clicks outside the menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen, onClose])



  if (!isOpen) return null

  // Determine which logo to show based on theme
  const logoSrc = isDarkMode ? "/logo-light-text.png" : "/logo-dark-text.png"

  return (
    <div className="fixed inset-0 z-[100] bg-black/50 md:hidden" style={{ display: isOpen ? "block" : "none" }}>
      <div
        ref={menuRef}
        className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white dark:bg-[#111111] shadow-xl overflow-y-auto"
      >
        <div className="sticky top-0 z-10 flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111111]">
          <Link href="/" className="flex items-center" onClick={onClose}>
            {mounted ? (
              <Image
                src={logoSrc || "/placeholder.svg"}
                alt="M.Fareed logo"
                width={150}
                height={40}
                className="h-8 w-auto"
              />
            ) : (
              <div className="h-8 w-[150px]" />
            )}
          </Link>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            aria-label="Close menu"
          >
            <X className="h-6 w-6 text-gray-600 dark:text-gray-400" />
          </button>
        </div>

        <nav className="p-4">
          <ul className="space-y-1">
            <li>
              <Link
                href="/"
                className={`flex items-center py-3 px-4 rounded-lg text-base ${
                  pathname === "/"
                    ? "bg-[#2768e1]/10 text-[#2768e1]"
                    : "text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
                onClick={onClose}
              >
                Home
              </Link>
            </li>

            {/* Resources Dropdown */}
          

            <li>
              <Link
                href="/portfolio"
                className={`flex items-center py-3 px-4 rounded-lg text-base ${
                  pathname === "/portfolio"
                    ? "bg-[#2768e1]/10 text-[#2768e1]"
                    : "text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
                onClick={onClose}
              >
                Portfolio
              </Link>
            </li>

            <li>
              <Link
                href="/start"
                className={`flex items-center py-3 px-4 rounded-lg text-base ${
                  pathname === "/start"
                    ? "bg-[#2768e1]/10 text-[#2768e1]"
                    : "text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
                onClick={onClose}
              >
                Start Project
              </Link>
            </li>
          </ul>
        </nav>

        <div className="p-4 mt-4 border-t border-gray-200 dark:border-gray-800">
          <Link
            href="/contact"
            className="flex items-center justify-center w-full py-3 px-4 bg-[#2768e1] text-white rounded-lg text-base font-medium hover:bg-opacity-90 transition-colors"
            onClick={onClose}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}
