"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Instagram, Twitter, Facebook, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about-blog", label: "About This Blog" },
    { href: "/about-me", label: "About Me" },
    { href: "/countries", label: "Countries" },
  ]

  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com/itsmeangelvillarejo", label: "Instagram" },
    { icon: Twitter, href: "https://twitter.com/yourusername", label: "Twitter" },
    { icon: Facebook, href: "https://facebook.com/yourusername", label: "Facebook" },
    { icon: Mail, href: "angelbarong89@gmail.com", label: "Email" },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-orange-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left side - Navigation Links */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200 font-serif"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Center - Logo/Brand (mobile) */}
          <div className="md:hidden">
            <Link href="/" className="text-xl font-serif font-bold text-orange-600">
              Travel Stories
            </Link>
          </div>

          {/* Right side - Social Icons */}
          <div className="hidden md:flex items-center space-x-4">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("mailto:") ? "_self" : "_blank"}
                  rel={social.href.startsWith("mailto:") ? "" : "noopener noreferrer"}
                  className="text-gray-600 hover:text-orange-600 transition-colors duration-200"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              )
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-orange-100">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200 font-serif"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex space-x-4 pt-4 border-t border-orange-100">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target={social.href.startsWith("mailto:") ? "_self" : "_blank"}
                      rel={social.href.startsWith("mailto:") ? "" : "noopener noreferrer"}
                      className="text-gray-600 hover:text-orange-600 transition-colors duration-200"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
