import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Mail, Instagram, Twitter, Facebook, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  const socialLinks = [
    {
      icon: Instagram,
      href: "https://www.instagram.com/itsmeangelvillarejo",
      label: "Instagram",
      description: "Follow my daily adventures and behind-the-scenes moments",
    },
    {
      icon: Twitter,
      href: "https://twitter.com/yourusername",
      label: "Twitter",
      description: "Travel tips, thoughts, and real-time updates from the road",
    },
    {
      icon: Facebook,
      href: "https://facebook.com/yourusername",
      label: "Facebook",
      description: "Join the community of fellow travel enthusiasts",
    },
    {
      icon: Mail,
      href: "mailto:yourmail@example.com",
      label: "Email",
      description: "For collaborations, questions, or just to say hello",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-50">
      <Navigation />
      <main className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Let's Connect</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              I'd love to hear from you! Whether you have travel questions, collaboration ideas, or just want to share
              your own adventures, don't hesitate to reach out.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Info */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">Get in Touch</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-orange-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email Me</h3>
                    <p className="text-gray-600 mb-2">
                      The best way to reach me for detailed questions or collaboration inquiries.
                    </p>
                    <a href="mailto:yourmail@example.com" className="text-orange-600 hover:text-orange-700 font-medium">
                      yourmail@example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-orange-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Response Time</h3>
                    <p className="text-gray-600">
                      I typically respond within 24-48 hours, though it might take longer if I'm in a remote location
                      with limited internet access.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-orange-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Currently Exploring</h3>
                    <p className="text-gray-600">
                      Based in San Francisco, but currently planning my next adventure to Patagonia!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* What to Contact About */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">What Can I Help With?</h2>

              <div className="space-y-4">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Travel Planning</h3>
                  <p className="text-gray-600 text-sm">
                    Need advice on destinations, itineraries, or solo travel tips? I'm here to help!
                  </p>
                </div>

                <div className="bg-pink-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Collaborations</h3>
                  <p className="text-gray-600 text-sm">
                    Interested in working together? I'm open to brand partnerships, guest posts, and travel
                    collaborations.
                  </p>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Photography</h3>
                  <p className="text-gray-600 text-sm">
                    Questions about travel photography, camera gear, or editing techniques? Let's chat!
                  </p>
                </div>

                <div className="bg-pink-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Just Say Hello</h3>
                  <p className="text-gray-600 text-sm">
                    Fellow traveler? I'd love to hear about your adventures and connect with like-minded explorers!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6 text-center">Follow My Journey</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("mailto:") ? "_self" : "_blank"}
                    rel={social.href.startsWith("mailto:") ? "" : "noopener noreferrer"}
                    className="flex items-start p-4 rounded-lg border border-gray-200 hover:border-orange-300 hover:bg-orange-50 transition-all duration-200 group"
                  >
                    <Icon className="w-6 h-6 text-orange-600 mt-1 mr-4 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-orange-600 transition-colors">
                        {social.label}
                      </h3>
                      <p className="text-gray-600 text-sm">{social.description}</p>
                    </div>
                  </a>
                )
              })}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-orange-600 to-pink-600 rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-serif font-bold mb-4">Ready to Start Your Adventure?</h2>
              <p className="text-lg mb-6 opacity-90">
                Don't let your travel dreams stay dreams. Let's make them happen together!
              </p>
              <a
                href="mailto:yourmail@example.com?subject=Let's Plan My Adventure!"
                className="inline-block bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Let's Plan Your Trip
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
