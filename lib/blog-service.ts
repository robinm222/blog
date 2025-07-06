import {
  collection,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
  limit,
  where,
  Timestamp,
} from "firebase/firestore"
import { db } from "./firebase"

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  image: string
  publishDate: string
  readTime: string
  tags: string[]
  author: string
  published: boolean
  createdAt: Timestamp
  updatedAt: Timestamp
}

export interface Country {
  id: string
  name: string
  flag: string
  memory: string
  visitCount: number
  featured: boolean
}

// Blog Posts
export const getBlogPosts = async (limitCount = 10): Promise<BlogPost[]> => {
  try {
    const q = query(
      collection(db, "blogPosts"),
      where("published", "==", true),
      orderBy("createdAt", "desc"),
      limit(limitCount),
    )
    const querySnapshot = await getDocs(q)
    return querySnapshot.docs.map(
      (doc) =>
        ({
          id: doc.id,
          ...doc.data(),
        }) as BlogPost,
    )
  } catch (error) {
    console.error("Error fetching blog posts:", error)
    return []
  }
}

export const getBlogPostBySlug = async (slug: string): Promise<BlogPost | null> => {
  try {
    const q = query(collection(db, "blogPosts"), where("slug", "==", slug), where("published", "==", true), limit(1))
    const querySnapshot = await getDocs(q)
    if (querySnapshot.empty) return null

    const doc = querySnapshot.docs[0]
    return {
      id: doc.id,
      ...doc.data(),
    } as BlogPost
  } catch (error) {
    console.error("Error fetching blog post:", error)
    return null
  }
}

export const createBlogPost = async (post: Omit<BlogPost, "id" | "createdAt" | "updatedAt">): Promise<string> => {
  try {
    const now = Timestamp.now()
    const docRef = await addDoc(collection(db, "blogPosts"), {
      ...post,
      createdAt: now,
      updatedAt: now,
    })
    return docRef.id
  } catch (error) {
    console.error("Error creating blog post:", error)
    throw error
  }
}

export const updateBlogPost = async (id: string, updates: Partial<BlogPost>): Promise<void> => {
  try {
    const docRef = doc(db, "blogPosts", id)
    await updateDoc(docRef, {
      ...updates,
      updatedAt: Timestamp.now(),
    })
  } catch (error) {
    console.error("Error updating blog post:", error)
    throw error
  }
}

export const deleteBlogPost = async (id: string): Promise<void> => {
  try {
    await deleteDoc(doc(db, "blogPosts", id))
  } catch (error) {
    console.error("Error deleting blog post:", error)
    throw error
  }
}

// Countries
export const getCountries = async (): Promise<Country[]> => {
  try {
    const q = query(collection(db, "countries"), orderBy("visitCount", "desc"))
    const querySnapshot = await getDocs(q)
    return querySnapshot.docs.map(
      (doc) =>
        ({
          id: doc.id,
          ...doc.data(),
        }) as Country,
    )
  } catch (error) {
    console.error("Error fetching countries:", error)
    return []
  }
}

export const getFeaturedCountries = async (): Promise<Country[]> => {
  try {
    const q = query(collection(db, "countries"), where("featured", "==", true), orderBy("visitCount", "desc"))
    const querySnapshot = await getDocs(q)
    return querySnapshot.docs.map(
      (doc) =>
        ({
          id: doc.id,
          ...doc.data(),
        }) as Country,
    )
  } catch (error) {
    console.error("Error fetching featured countries:", error)
    return []
  }
}
