import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Image from "next/image"
import { MapPin, Camera, Heart, Plane } from "lucide-react"

export default function AboutMePage() {
  const travelStats = [
    { icon: MapPin, label: "Countries Visited", value: "25+" },
    { icon: Plane, label: "Flights Taken", value: "150+" },
    { icon: Camera, label: "Photos Captured", value: "10,000+" },
    { icon: Heart, label: "Memories Made", value: "Countless" },
  ]

  const travelTimeline = [
    {
      year: "2018",
      title: "First Solo Adventure",
      description: "Backpacked through Southeast Asia for 3 months, discovering my love for solo travel.",
      location: "Thailand, Vietnam, Cambodia",
    },
    {
      year: "2019",
      title: "Cultural Immersion in Japan",
      description:
        "Lived with a host family in Kyoto, learning traditional arts and deepening my appreciation for Japanese culture.",
      location: "Japan",
    },
    {
      year: "2020",
      title: "European Art & History Tour",
      description:
        "Explored museums, galleries, and historical sites across Europe, combining my love for art and travel.",
      location: "Italy, France, Spain, Greece",
    },
    {
      year: "2021",
      title: "Nordic Adventure",
      description: "Chased the Northern Lights and experienced the magic of Scandinavian winters.",
      location: "Iceland, Norway, Finland",
    },
    {
      year: "2022",
      title: "African Safari & Culture",
      description: "Wildlife photography and cultural exchanges in East Africa opened my eyes to new perspectives.",
      location: "Kenya, Tanzania, Rwanda",
    },
    {
      year: "2023",
      title: "South American Expedition",
      description: "Trekked the Andes, explored ancient ruins, and fell in love with Latin American culture.",
      location: "Peru, Bolivia, Chile, Argentina",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-50">
      <Navigation />
      <main className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="relative inline-block mb-8">
              <Image
                src="/gtpang.png?height=300&width=300"
                alt="Travel blogger profile"
                width={300}
                height={300}
                className="rounded-full shadow-2xl object-cover"
              />
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center">
                <span className="text-2xl">🌍</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Meet the Wanderer</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I'm Angel, a passionate traveler, photographer, and storyteller who believes that the world is a book, and
              those who do not travel read only one page.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {travelStats.map((stat) => {
              const Icon = stat.icon
              return (
                <div key={stat.label} className="bg-white rounded-xl p-6 text-center shadow-md">
                  <Icon className="w-8 h-8 text-orange-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              )
            })}
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">My Journey</h2>

                <div className="prose prose-lg max-w-none text-gray-600">
                  <p className="mb-6">
                    My love affair with travel began during a college semester abroad in Barcelona. What was supposed to
                    be a four-month academic program turned into a life-changing experience that opened my eyes to the
                    beauty of cultural diversity and the thrill of exploration.
                  </p>

                  <p className="mb-6">
                    After graduating with a degree in International Relations and Photography, I made a decision that
                    surprised everyone, including myself: I would spend a year traveling solo across different
                    continents, documenting my experiences and the incredible people I met along the way.
                  </p>

                  <p className="mb-6">
                    That "one year" has now stretched into six years of continuous exploration. I've learned to navigate
                    Tokyo's subway system, bargained in Marrakech's souks, witnessed the Northern Lights dance across
                    Icelandic skies, and shared meals with families who welcomed me as their own.
                  </p>

                  <p className="mb-8">
                    Each journey has taught me something new—not just about the destinations I visit, but about
                    resilience, adaptability, and the universal language of human kindness. Through this blog, I hope to
                    inspire others to step out of their comfort zones and discover the magic that awaits beyond familiar
                    horizons.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-orange-100 to-pink-100 p-6 rounded-xl">
                  <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">Fun Facts About Me</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• I can say "hello" and "thank you" in 15 different languages</li>
                    <li>• My favorite travel snack is always local street food</li>
                    <li>• I've been skydiving in New Zealand and bungee jumping in Switzerland</li>
                    <li>• I collect vintage postcards from every destination I visit</li>
                    <li>• My dream destination is Antarctica (coming soon!)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Travel Timeline */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">Travel Timeline</h3>
                <div className="space-y-6">
                  {travelTimeline.map((item, index) => (
                    <div key={item.year} className="relative">
                      {index !== travelTimeline.length - 1 && (
                        <div className="absolute left-4 top-8 w-0.5 h-16 bg-orange-200"></div>
                      )}
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                          {item.year.slice(-2)}
                        </div>
                        <div className="ml-4">
                          <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                          <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                          <p className="text-xs text-orange-600 font-medium">{item.location}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact CTA */}
              <div className="bg-white rounded-2xl shadow-xl p-6 mt-6">
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-4">Let's Connect!</h3>
                <p className="text-gray-600 mb-4">
                  I love connecting with fellow travelers and dreamers. Whether you need travel advice or just want to
                  share your own adventures, I'd love to hear from you!
                </p>
                <a
                  href="mailto:yourmail@example.com"
                  className="block w-full bg-orange-600 hover:bg-orange-700 text-white text-center px-6 py-3 rounded-lg transition-colors font-medium"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
