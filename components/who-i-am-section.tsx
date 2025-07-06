import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function WhoIAmSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">Who I Am</h2>
            <div className="prose prose-lg text-gray-600 mb-8">
              <p className="mb-4">
                Hi there! I’m Angel Villarejo, a 22-year-old traveler with a heart full of curiosity and a deep love for the beach.
              </p>
              <p className="mb-4">
                Once an introvert, I’ve grown into someone who finds joy in exploring new places, connecting with people, and stepping out of my comfort zone.
              </p>
              <p>
                Travel has been a big part of my journey—helping me discover not just the world, but also who I am. While I enjoy visiting different places, the beach will always have my heart. It’s my go-to stress reliever, my personal therapy, and a place where I feel most at peace.
              </p>
              <p>
              Through this blog, I’m excited to share my adventures, travel tips, personal growth stories, and the special moments that make each journey unforgettable. Join me as I wander, learn, and soak in the magic our beautiful world has to offer.
              </p>
            </div>
            <Button asChild className="bg-orange-600 hover:bg-orange-700 text-white">
              <Link href="/about-me">Read Full Bio</Link>
            </Button>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <Image
                src="/P1.jpg?height=400&width=400"
                alt="Travel blogger profile photo"
                width={400}
                height={400}
                className="rounded-2xl shadow-2xl object-cover"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">✈️</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
