import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

// Mock data - in a real app, this would come from Firebase
const featuredPosts = [
  {
    id: "1",
    slug: "solo-travel-japan-guide",
    title: "Solo Travel in Japan: A Complete Guide for First-Timers",
    excerpt:
      "Discover the art of solo travel in Japan, from navigating Tokyo's subway system to finding the best ramen spots off the beaten path.",
    image: "/placeholder.svg?height=300&width=400",
    publishDate: "2024-01-15",
    readTime: "8 min read",
    tags: ["Japan", "Solo Travel", "Asia"],
  },
  {
    id: "2",
    slug: "santorini-sunset-spots",
    title: "Whispers of the wind and waves",
    excerpt: "Parola Island, where crystal shores meet quiet soul-searching. A timeless escape on Parola Island. Lost in the calm beauty of Parola Island.",
    image: "/4571.jpg?height=300&width=400",
    publishDate: "2024-01-10",
    readTime: "6 min read",
    tags: ["Philippines", "Photography", "Asia"],
  },
  {
    id: "3",
    slug: "iceland-northern-lights-photography",
    title: "Chasing Northern Lights in Iceland: A Photographer's Journey",
    excerpt:
      "From camera settings to the best locations, here's everything I learned during my week-long aurora hunting adventure.",
    image: "/placeholder.svg?height=300&width=400",
    publishDate: "2024-01-05",
    readTime: "10 min read",
    tags: ["Iceland", "Photography", "Northern Lights"],
  },
  {
    id: "4",
    slug: "bangkok-street-food-guide",
    title: "Bangkok Street Food: A Culinary Adventure Guide",
    excerpt:
      "Navigate Bangkok's incredible street food scene like a local with this comprehensive guide to the best dishes and where to find them.",
    image: "/placeholder.svg?height=300&width=400",
    publishDate: "2023-12-28",
    readTime: "7 min read",
    tags: ["Thailand", "Food", "Culture"],
  },
  {
    id: "5",
    slug: "swiss-alps-hiking-trails",
    title: "Hidden Hiking Trails in the Swiss Alps",
    excerpt:
      "Escape the tourist crowds and discover these breathtaking hiking trails that showcase the Alps' untouched beauty.",
    image: "/4570.jpg?height=300&width=400",
    publishDate: "2023-12-20",
    readTime: "9 min read",
    tags: ["Switzerland", "Hiking", "Nature"],
  },
  {
    id: "6",
    slug: "morocco-cultural-immersion",
    title: "Cultural Immersion in Morocco: Beyond the Tourist Trail",
    excerpt: "Experience authentic Moroccan culture through homestays, local workshops, and community connections.",
    image: "/placeholder.svg?height=300&width=400",
    publishDate: "2023-12-15",
    readTime: "11 min read",
    tags: ["Morocco", "Culture", "Authentic Travel"],
  },
]

export default function FeaturedBlogPosts() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Latest Travel Stories</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dive into my recent adventures and discover new destinations through detailed guides, personal experiences,
            and practical travel tips.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <Link href={`/blog/${post.slug}`}>
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {post.tags[0]}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>
                        {new Date(post.publishDate).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                      <Clock className="w-4 h-4 ml-4 mr-2" />
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="font-serif font-bold text-xl text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(1).map((tag) => (
                          <span key={tag} className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <ArrowRight className="w-5 h-5 text-orange-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white bg-transparent"
          >
            <Link href="/blog">View All Posts</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
