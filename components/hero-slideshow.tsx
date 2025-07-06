"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const slides = [
  {
    id: 1,
    image: "/greenland.png?height=600&width=1200",
    title: "Shadows and Emerald Dreams",
    subtitle: "Mist Among the Leaves",
  },
  {
    id: 2,
    image: "/gtpang.png?height=600&width=1200",
    title: "Whispers of the Sea",
    subtitle: "Barefoot in the Blue Horizon",
  },
  {
    id: 3,
    image: "/sunglass.jpg?height=600&width=1200",
    title: "Adventures in the Swiss Alps",
    subtitle: "Peaks, valleys, and endless beauty",
  },
  {
    id: 4,
    image: "/river.png?height=600&width=1200",
    title: "Reflections by the Water",
    subtitle: "Murmurs Along the Stream",
  },
  {
    id: 5,
    image: "/desert1.png?height=600&width=1200",
    title: "Sands of Quiet Wonder",
    subtitle: "Grace Under the Sun",
  },
]

export default function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  return (
    <section className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4 max-w-4xl">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 drop-shadow-lg">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl font-light drop-shadow-md">{slide.subtitle}</p>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 transition-colors"
        onClick={goToPrevious}
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 transition-colors"
        onClick={goToNext}
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </Button>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
