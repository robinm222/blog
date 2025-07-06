import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Calendar, Clock, ArrowLeft, Share2, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

// Mock blog post data - in a real app, this would come from Firebase
const blogPosts = {
  "solo-travel-japan-guide": {
    id: "1",
    title: "Solo Travel in Japan: A Complete Guide for First-Timers",
    excerpt:
      "Discover the art of solo travel in Japan, from navigating Tokyo's subway system to finding the best ramen spots off the beaten path.",
    content: `
      <p>Japan has always held a special place in my heart, but my first solo trip there was both exhilarating and intimidating. The language barrier, the complex transportation system, and the cultural nuances seemed overwhelming at first. However, what I discovered was a country that not only welcomes solo travelers but celebrates the art of solitude and self-discovery.</p>

      <h2>Planning Your Solo Japan Adventure</h2>
      <p>The key to a successful solo trip to Japan lies in preparation, but not over-planning. I learned this the hard way when my meticulously planned itinerary went out the window on day two, and it turned out to be the best thing that could have happened.</p>

      <h3>Essential Preparations</h3>
      <ul>
        <li><strong>JR Pass:</strong> Absolutely essential for solo travelers. The freedom to hop on any JR train without worrying about individual ticket costs is liberating.</li>
        <li><strong>Pocket WiFi or SIM Card:</strong> Google Translate became my best friend, and having reliable internet access is crucial.</li>
        <li><strong>Cash:</strong> Japan is still very much a cash society. I learned to always carry at least ¥10,000 in cash.</li>
        <li><strong>IC Card:</strong> Get a Suica or Pasmo card for local transportation in Tokyo and other major cities.</li>
      </ul>

      <h2>Navigating Tokyo's Transportation System</h2>
      <p>The Tokyo subway system initially seemed like a labyrinth designed to confuse foreigners. But here's the secret: it's actually incredibly logical once you understand the basics.</p>

      <p>Download the Google Maps app and the official Tokyo Metro app. These two apps will be your lifeline. The key is to not panic when you inevitably take the wrong train – it happens to everyone, including locals!</p>

      <h2>Where to Stay: My Accommodation Strategy</h2>
      <p>For solo travelers, I highly recommend a mix of accommodation types:</p>

      <h3>Capsule Hotels</h3>
      <p>Don't let the small space intimidate you. Capsule hotels in Japan are clean, efficient, and perfect for solo travelers. I stayed at several during my trip, and each offered a unique experience. The one in Shibuya became my favorite – modern, tech-savvy, and right in the heart of the action.</p>

      <h3>Ryokans</h3>
      <p>Splurge on at least one night in a traditional ryokan. Many accept solo travelers, though you might pay a premium. The experience of sleeping on tatami mats, soaking in an onsen, and enjoying kaiseki dinner is worth every yen.</p>

      <h2>Food Adventures for One</h2>
      <p>Eating alone in Japan is not only acceptable but common. The concept of "ohitorisama" (doing things alone) is well-established in Japanese culture.</p>

      <h3>Ramen Shops</h3>
      <p>Perfect for solo diners. Many have counter seating where you can watch the chef work. Don't be afraid to slurp – it's not just acceptable, it's expected!</p>

      <h3>Conveyor Belt Sushi</h3>
      <p>Kaiten-zushi restaurants are ideal for solo travelers. You can eat at your own pace, try different items, and the experience is fun and interactive.</p>

      <h2>Cultural Experiences Not to Miss</h2>
      <p>Solo travel in Japan offers unique opportunities for cultural immersion that might be harder to achieve in a group.</p>

      <h3>Temple Visits</h3>
      <p>Early morning visits to temples like Senso-ji in Tokyo or Kiyomizu-dera in Kyoto offer moments of tranquility and reflection. The experience of being alone with your thoughts in these sacred spaces is profound.</p>

      <h3>Onsen Etiquette</h3>
      <p>Don't let the nudity aspect deter you from experiencing onsen culture. The rules are simple: wash thoroughly before entering, no tattoos (though some places are becoming more lenient), and maintain quiet, respectful behavior.</p>

      <h2>Safety and Practical Tips</h2>
      <p>Japan is incredibly safe for solo travelers, especially women. I never felt unsafe, even walking alone late at night in major cities. However, common sense still applies:</p>

      <ul>
        <li>Keep your passport with you at all times (it's required by law)</li>
        <li>Learn basic Japanese phrases – even attempting to speak Japanese is greatly appreciated</li>
        <li>Bow slightly when greeting people or saying thank you</li>
        <li>Don't eat or drink while walking (it's considered rude)</li>
        <li>Be quiet on public transportation</li>
      </ul>

      <h2>My Biggest Solo Travel Revelation</h2>
      <p>The most profound moment of my solo Japan trip came during a quiet evening in a small izakaya in Kyoto. I was sitting at the counter, enjoying yakitori and sake, when the elderly owner started a conversation with me using broken English and hand gestures. Despite the language barrier, we connected over our shared love of travel and food.</p>

      <p>That evening taught me that solo travel isn't about being alone – it's about being open to connections and experiences that might not happen when you're with others. When you're solo, you're more approachable, more likely to step out of your comfort zone, and more present in each moment.</p>

      <h2>Final Thoughts</h2>
      <p>Solo travel in Japan challenged me, changed me, and ultimately became one of my most treasured travel experiences. The country's respect for solitude, combined with its incredible hospitality, creates the perfect environment for solo exploration.</p>

      <p>If you're considering a solo trip to Japan, my advice is simple: book that ticket. Yes, it might seem daunting, but the rewards – the self-discovery, the cultural immersion, the incredible memories – are worth every moment of initial uncertainty.</p>

      <p>Japan doesn't just tolerate solo travelers; it celebrates them. And in doing so, it might just help you discover parts of yourself you never knew existed.</p>
    `,
    image: "/placeholder.svg?height=400&width=800",
    publishDate: "2024-01-15",
    readTime: "8 min read",
    tags: ["Japan", "Solo Travel", "Asia", "Culture", "Travel Tips"],
    author: "Sarah",
  },
}

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = blogPosts[slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 text-white">
            <div className="flex items-center mb-4">
              <Link href="/" className="flex items-center text-white/80 hover:text-white transition-colors mr-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </div>
            <div className="flex flex-wrap items-center text-sm mb-4">
              <span className="bg-orange-600 px-3 py-1 rounded-full mr-3 mb-2">{post.tags[0]}</span>
              <div className="flex items-center mr-4 mb-2">
                <Calendar className="w-4 h-4 mr-2" />
                <span>
                  {new Date(post.publishDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center mb-2">
                <Clock className="w-4 h-4 mr-2" />
                <span>{post.readTime}</span>
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-serif font-bold leading-tight">{post.title}</h1>
          </div>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <div
            dangerouslySetInnerHTML={{ __html: post.content }}
            className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-orange-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-ul:text-gray-700 prose-li:text-gray-700"
          />
        </article>

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-orange-100 hover:text-orange-700 transition-colors cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Share Buttons */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <span className="text-gray-600 font-medium">Share this post:</span>
              <Button variant="outline" size="sm" className="text-gray-600 hover:text-orange-600 bg-transparent">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm" className="text-gray-600 hover:text-red-600 bg-transparent">
                <Heart className="w-4 h-4 mr-2" />
                Like
              </Button>
            </div>
          </div>
        </div>

        {/* Author Bio */}
        <div className="mt-12 p-6 bg-gradient-to-r from-orange-50 to-pink-50 rounded-xl">
          <div className="flex items-start space-x-4">
            <Image
              src="/placeholder.svg?height=80&width=80"
              alt="Author"
              width={80}
              height={80}
              className="rounded-full object-cover"
            />
            <div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">About {post.author}</h3>
              <p className="text-gray-600 mb-4">
                Passionate traveler, photographer, and storyteller sharing adventures from around the world. Follow
                along for travel tips, cultural insights, and inspiration for your next journey.
              </p>
              <div className="flex space-x-4">
                <Link href="/about-me" className="text-orange-600 hover:text-orange-700 font-medium">
                  Read Full Bio
                </Link>
                <Link href="/contact" className="text-orange-600 hover:text-orange-700 font-medium">
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        <div className="mt-16">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8">You Might Also Like</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/blog/santorini-sunset-spots" className="group">
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Santorini sunset spots"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif font-bold text-lg text-gray-900 group-hover:text-orange-600 transition-colors mb-2">
                    The 5 Best Sunset Spots in Santorini (Beyond Oia)
                  </h3>
                  <p className="text-gray-600 text-sm">
                    While Oia gets all the attention, these hidden gems offer equally stunning sunsets without the
                    crowds.
                  </p>
                </div>
              </div>
            </Link>

            <Link href="/blog/iceland-northern-lights-photography" className="group">
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Northern lights photography"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif font-bold text-lg text-gray-900 group-hover:text-orange-600 transition-colors mb-2">
                    Chasing Northern Lights in Iceland: A Photographer's Journey
                  </h3>
                  <p className="text-gray-600 text-sm">
                    From camera settings to the best locations, here's everything I learned during my aurora hunting
                    adventure.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
