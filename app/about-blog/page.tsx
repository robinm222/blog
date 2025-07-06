import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Image from "next/image"

export default function AboutBlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-50">
      <Navigation />
      <main className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">About This Blog</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The story behind Travel Stories and why I started sharing my adventures with the world
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <div className="mb-8">
                <Image
                  src="/placeholder.svg?height=400&width=800"
                  alt="Travel blogging setup"
                  width={800}
                  height={400}
                  className="rounded-xl shadow-lg w-full object-cover"
                />
              </div>

              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">Why I Started Travel Stories</h2>
              <p className="text-gray-600 mb-6">
                Travel Stories began as a personal journal during my first solo trip to Japan in 2019. What started as
                simple notes and photos quickly evolved into detailed accounts of my experiences, cultural discoveries,
                and the incredible people I met along the way.
              </p>

              <p className="text-gray-600 mb-6">
                I realized that these stories weren't just memories for me—they were valuable insights that could help
                other travelers navigate new destinations, understand different cultures, and perhaps most importantly,
                find the courage to embark on their own adventures.
              </p>

              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">What You'll Find Here</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-orange-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-2">Personal Journey Stories</h3>
                  <p className="text-gray-600 text-sm">
                    Authentic accounts of my travels, including the challenges, surprises, and magical moments that make
                    each trip unique.
                  </p>
                </div>
                <div className="bg-pink-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-2">Solo Travel Tips</h3>
                  <p className="text-gray-600 text-sm">
                    Practical advice for solo travelers, from safety tips to making connections and embracing
                    independence.
                  </p>
                </div>
                <div className="bg-orange-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-2">Cultural Experiences</h3>
                  <p className="text-gray-600 text-sm">
                    Deep dives into local customs, traditions, and the beautiful diversity of cultures around the world.
                  </p>
                </div>
                <div className="bg-pink-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-2">Photography & Inspiration</h3>
                  <p className="text-gray-600 text-sm">
                    Visual storytelling through photography, along with inspiration to help you plan your next
                    adventure.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">My Travel Philosophy</h2>
              <p className="text-gray-600 mb-6">
                I believe that travel is more than just visiting new places—it's about opening your mind, challenging
                your perspectives, and connecting with the shared humanity that exists across all cultures. Every
                destination has taught me something new, not just about the world, but about myself.
              </p>

              <p className="text-gray-600 mb-6">
                Through this blog, I aim to inspire responsible, mindful travel that respects local communities and
                environments while creating meaningful connections and lasting memories.
              </p>

              <div className="bg-gradient-to-r from-orange-100 to-pink-100 p-6 rounded-xl text-center">
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">Ready to Start Your Own Adventure?</h3>
                <p className="text-gray-600 mb-4">
                  I'd love to hear about your travel dreams and help you plan your next journey!
                </p>
                <a
                  href="mailto:yourmail@example.com"
                  className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg transition-colors font-medium"
                >
                  Get in Touch
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
