import { Suspense } from "react"
import Navigation from "@/components/navigation"
import HeroSlideshow from "@/components/hero-slideshow"
import WhoIAmSection from "@/components/who-i-am-section"
import TopCountriesSection from "@/components/top-countries-section"
import FeaturedBlogPosts from "@/components/featured-blog-posts"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-50">
      <Navigation />
      <main>
        <HeroSlideshow />
        <WhoIAmSection />
        <TopCountriesSection />
        <Suspense fallback={<div className="py-20 text-center">Loading blog posts...</div>}>
          <FeaturedBlogPosts />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
