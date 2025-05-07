"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, ChevronDown } from "lucide-react"

export default function Home() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 300])

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  return (
    <>
      <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div className="absolute inset-0 z-0" style={{ y }}>
          <div className="absolute inset-0 bg-gradient-to-b from-violet-50 to-white opacity-70"></div>
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center"></div>
        </motion.div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-purple-500">
              Shubham Patel
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Software Developer crafting beautiful & functional digital experiences
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium h-11 px-8 py-3 bg-violet-600 text-white hover:bg-violet-700 transition-colors"
              >
                View My Work <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium h-11 px-8 py-3 border border-violet-300 text-violet-700 hover:bg-violet-50 transition-colors"
              >
                Get In Touch
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
          <button onClick={scrollToContent} className="text-violet-600 animate-bounce p-2" aria-label="Scroll down">
            <ChevronDown className="h-8 w-8" />
          </button>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Featured Projects</h2>
            <div className="h-1 w-20 bg-violet-500 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: item * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={`/placeholder.svg?height=400&width=600`}
                    alt={`Project ${item}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Project Title {item}</h3>
                  <p className="text-gray-600 mb-4">
                    A brief description of this amazing project and the technologies used to build it.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-sm">React</span>
                    <span className="px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-sm">Next.js</span>
                    <span className="px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-sm">Tailwind</span>
                  </div>
                  <Link
                    href={`/projects/${item}`}
                    className="text-violet-600 font-medium hover:text-violet-800 inline-flex items-center"
                  >
                    View Project <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 border border-violet-300 text-violet-700 hover:bg-violet-50 transition-colors"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-violet-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">About Me</h2>
              <p className="text-gray-600 mb-6">
                I'm Shubham Patel, a passionate software developer with expertise in building modern web applications. I
                specialize in frontend development with React, creating responsive and user-friendly interfaces.
              </p>
              <p className="text-gray-600 mb-6">
                With a strong foundation in software engineering principles and best practices, I strive to write clean,
                maintainable code that delivers exceptional user experiences.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 bg-violet-600 text-white hover:bg-violet-700 transition-colors"
              >
                Learn More About Me
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[400px] lg:h-[600px] rounded-xl overflow-hidden shadow-xl"
            >
              <Image src="/ProfilePhoto.jpg?height=800&width=600" alt="Shubham Patel" fill className="object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">My Skills</h2>
            <div className="h-1 w-20 bg-violet-500 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {[
              "JavaScript",
              "React",
              "Next.js",
              "HTML5",
              "CSS3",
              "Tailwind CSS",
              "Node.js",
              "Git",
              "Responsive Design",
              "UI/UX",
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="bg-violet-50 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="text-violet-600 font-medium">{skill}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-violet-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Latest Blog Posts</h2>
            <div className="h-1 w-20 bg-violet-500 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Thoughts, insights, and tutorials on web development and design
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: item * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={`/placeholder.svg?height=400&width=600`}
                    alt={`Blog post ${item}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-violet-600 mb-2">May {item}, 2023</div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    How to Build Responsive Websites with Modern CSS
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Learn the latest techniques for creating responsive layouts that work across all devices.
                  </p>
                  <Link
                    href={`/blog/${item}`}
                    className="text-violet-600 font-medium hover:text-violet-800 inline-flex items-center"
                  >
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/blog"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 border border-violet-300 text-violet-700 hover:bg-violet-50 transition-colors"
            >
              View All Posts
            </Link>
          </div>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Let's Work Together</h2>
              <p className="text-gray-600 mb-8">Have a project in mind? I'm currently available for freelance work.</p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium h-11 px-8 py-3 bg-violet-600 text-white hover:bg-violet-700 transition-colors"
              >
                Get In Touch
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
