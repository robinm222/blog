// This script seeds the Firebase database with sample blog posts and countries
// Run this script to populate your Firebase database with initial data

import { initializeApp } from "firebase/app"
import { getFirestore, collection, addDoc, Timestamp } from "firebase/firestore"

const firebaseConfig = {
  // Add your Firebase config here
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id",
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

const sampleBlogPosts = [
  {
    title: "Solo Travel in Japan: A Complete Guide for First-Timers",
    slug: "solo-travel-japan-guide",
    excerpt:
      "Discover the art of solo travel in Japan, from navigating Tokyo's subway system to finding the best ramen spots off the beaten path.",
    content: "Full blog post content here...",
    image: "/placeholder.svg?height=300&width=400",
    publishDate: "2024-01-15",
    readTime: "8 min read",
    tags: ["Japan", "Solo Travel", "Asia"],
    author: "Sarah",
    published: true,
  },
  {
    title: "The 5 Best Sunset Spots in Santorini (Beyond Oia)",
    slug: "santorini-sunset-spots",
    excerpt: "While Oia gets all the attention, these hidden gems offer equally stunning sunsets without the crowds.",
    content: "Full blog post content here...",
    image: "/placeholder.svg?height=300&width=400",
    publishDate: "2024-01-10",
    readTime: "6 min read",
    tags: ["Greece", "Photography", "Europe"],
    author: "Sarah",
    published: true,
  },
  // Add more sample posts...
]

const sampleCountries = [
  {
    name: "Japan",
    flag: "🇯🇵",
    memory: "Cherry blossoms in Kyoto were absolutely magical",
    visitCount: 3,
    featured: true,
  },
  {
    name: "Italy",
    flag: "🇮🇹",
    memory: "Sunset over the Tuscan hills with a glass of Chianti",
    visitCount: 2,
    featured: true,
  },
  // Add more countries...
]

async function seedDatabase() {
  try {
    console.log("Seeding blog posts...")
    for (const post of sampleBlogPosts) {
      await addDoc(collection(db, "blogPosts"), {
        ...post,
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now(),
      })
    }

    console.log("Seeding countries...")
    for (const country of sampleCountries) {
      await addDoc(collection(db, "countries"), country)
    }

    console.log("Database seeded successfully!")
  } catch (error) {
    console.error("Error seeding database:", error)
  }
}

seedDatabase()
