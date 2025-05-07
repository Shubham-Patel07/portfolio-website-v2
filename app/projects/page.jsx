"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink, Github } from "lucide-react"
import { projects } from "@/lib/projects"

export default function Projects() {
  const [filter, setFilter] = useState("all")

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.tags.includes(filter))

  const uniqueTags = ["all", ...new Set(projects.flatMap((project) => project.tags))]

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">My Projects</h1>
            <div className="h-1 w-20 bg-violet-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A showcase of my work, personal projects, and contributions to the development community.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {uniqueTags.map((tag, index) => (
              <motion.button
                key={tag}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onClick={() => setFilter(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === tag ? "bg-violet-600 text-white" : "bg-violet-100 text-violet-700 hover:bg-violet-200"
                }`}
              >
                {tag.charAt(0).toUpperCase() + tag.slice(1)}
              </motion.button>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-violet-600 text-white text-xs px-2 py-1 rounded-full">
                      Featured
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <Link
                      href={`/projects/${project.id}`}
                      className="text-violet-600 font-medium hover:text-violet-800 inline-flex items-center"
                    >
                      View Details <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                    <div className="flex gap-2">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-600 hover:text-violet-600 transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-600 hover:text-violet-600 transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">No projects found with the selected filter.</p>
              <Button
                onClick={() => setFilter("all")}
                variant="outline"
                className="mt-4 border-violet-300 text-violet-700 hover:bg-violet-50"
              >
                Show All Projects
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Have a Project in Mind?</h2>
              <p className="text-gray-600 mb-8">
                I'm always looking for new challenges and opportunities to collaborate on exciting projects.
              </p>
              <Button asChild size="lg" className="bg-violet-600 hover:bg-violet-700">
                <Link href="/contact">Let's Discuss Your Project</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
