import Link from "next/link"
import { Instagram, Twitter, Facebook, Mail, Heart } from "lucide-react"

export default function Footer() {
  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com/yourusername", label: "Instagram" },
    { icon: Twitter, href: "https://twitter.com/yourusername", label: "Twitter" },
    { icon: Facebook, href: "https://facebook.com/yourusername", label: "Facebook" },
    { icon: Mail, href: "mailto:yourmail@example.com", label: "Email" },
  ]

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand section */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">Travel Stories</h3>
            <p className="text-gray-300 mb-4">
              Sharing adventures, cultures, and experiences from around the world. Join me on this incredible journey of
              discovery.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("mailto:") ? "_self" : "_blank"}
                    rel={social.href.startsWith("mailto:") ? "" : "noopener noreferrer"}
                    className="text-gray-400 hover:text-orange-400 transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-blog" className="text-gray-300 hover:text-orange-400 transition-colors">
                  About This Blog
                </Link>
              </li>
              <li>
                <Link href="/about-me" className="text-gray-300 hover:text-orange-400 transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter signup */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Connected</h4>
            <p className="text-gray-300 mb-4">Get notified about new travel stories and adventures!</p>
            <Link
              href="mailto:yourmail@example.com?subject=Newsletter Subscription"
              className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg transition-colors"
            >
              Subscribe via Email
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            © {new Date().getFullYear()} Travel Stories. Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> for
            fellow travelers.
          </p>
        </div>
      </div>
    </footer>
  )
}
