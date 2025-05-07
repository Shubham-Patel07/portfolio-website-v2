"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Search } from "lucide-react"

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: "How to Build Responsive Websites with Modern CSS",
    excerpt:
      "Learn the latest techniques for creating responsive layouts that work across all devices using CSS Grid, Flexbox, and more.",
    image: "/placeholder.svg?height=400&width=600",
    date: "May 15, 2023",
    category: "CSS",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Getting Started with React Hooks",
    excerpt:
      "A comprehensive guide to React Hooks and how they can simplify your components and make your code more reusable.",
    image: "/placeholder.svg?height=400&width=600",
    date: "April 28, 2023",
    category: "React",
    readTime: "8 min read",
  },
  {
    id: 3,
    title: "Optimizing Website Performance",
    excerpt: "Tips and tricks to improve your website loading speed, reduce bundle size, and enhance user experience.",
    image: "/placeholder.svg?height=400&width=600",
    date: "April 10, 2023",
    category: "Performance",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "Introduction to Next.js 13",
    excerpt:
      "Explore the new features and improvements in Next.js 13 and how they can benefit your web development projects.",
    image: "/placeholder.svg?height=400&width=600",
    date: "March 22, 2023",
    category: "Next.js",
    readTime: "7 min read",
  },
  {
    id: 5,
    title: "Creating Animations with Framer Motion",
    excerpt: "Learn how to add beautiful animations to your React applications using the Framer Motion library.",
    image: "/placeholder.svg?height=400&width=600",
    date: "March 5, 2023",
    category: "Animation",
    readTime: "9 min read",
  },
  {
    id: 6,
    title: "The Power of Tailwind CSS",
    excerpt: "Discover how Tailwind CSS can speed up your development process and help you create consistent designs.",
    image: "/placeholder.svg?height=400&width=600",
    date: "February 18, 2023",
    category: "CSS",
    readTime: "4 min read",
  },
]

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = ["All", ...new Set(blogPosts.map((post) => post.category))]

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  return (
    <>
      <section className="py-20 bg-gradient-to-b from-violet-50 to-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Blog</h1>
            <div className="h-1 w-20 bg-violet-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Thoughts, tutorials, and insights on web development, design, and technology.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category)}
                    className={
                      selectedCategory === category
                        ? "bg-violet-600 hover:bg-violet-700"
                        : "border-violet-300 text-violet-700 hover:bg-violet-50"
                    }
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative h-48">
                    <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                    <div className="absolute top-4 left-4 bg-violet-600 text-white text-xs px-2 py-1 rounded-full">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <Link
                      href={`/blog/${post.id}`}
                      className="text-violet-600 font-medium hover:text-violet-800 inline-flex items-center"
                    >
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 mb-4">No articles found matching your search criteria.</p>
              <Button
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("All")
                }}
                className="bg-violet-600 hover:bg-violet-700"
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Subscribe to My Newsletter</h2>
              <p className="text-gray-600 mb-8">Get notified when I publish new articles and tutorials.</p>
              <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                <Input type="email" placeholder="Enter your email" className="flex-1" />
                <Button className="bg-violet-600 hover:bg-violet-700">Subscribe</Button>
              </div>
              <p className="text-xs text-gray-500 mt-4">I respect your privacy. Unsubscribe at any time.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
