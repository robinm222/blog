"use client"

import { useState } from "react"

const countries = [
  { name: "Japan", flag: "🇯🇵", memory: "Cherry blossoms in Kyoto were absolutely magical" },
  { name: "Italy", flag: "🇮🇹", memory: "Sunset over the Tuscan hills with a glass of Chianti" },
  { name: "Iceland", flag: "🇮🇸", memory: "Dancing Northern Lights under a starry sky" },
  { name: "Thailand", flag: "🇹🇭", memory: "Street food adventures in Bangkok's floating markets" },
  { name: "Switzerland", flag: "🇨🇭", memory: "Hiking through pristine Alpine meadows" },
  { name: "Greece", flag: "🇬🇷", memory: "Watching sunrise from Santorini's blue domes" },
  { name: "Morocco", flag: "🇲🇦", memory: "Getting lost in Marrakech's vibrant souks" },
  { name: "New Zealand", flag: "🇳🇿", memory: "Bungee jumping in Queenstown's stunning landscape" },
]

export default function TopCountriesSection() {
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null)

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-orange-50 to-pink-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Top Countries I've Explored</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Each destination has left an indelible mark on my heart. Hover over a country to see my favorite memory!
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {countries.map((country) => (
            <div
              key={country.name}
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredCountry(country.name)}
              onMouseLeave={() => setHoveredCountry(null)}
            >
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
                <div className="text-4xl mb-3">{country.flag}</div>
                <h3 className="font-serif font-semibold text-gray-900 text-lg">{country.name}</h3>

                {/* Memory tooltip */}
                {hoveredCountry === country.name && (
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg shadow-lg z-10 w-64 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-center">{country.memory}</p>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 italic">
            "Travel makes one modest. You see what a tiny place you occupy in the world." - Gustave Flaubert
          </p>
        </div>
      </div>
    </section>
  )
}
