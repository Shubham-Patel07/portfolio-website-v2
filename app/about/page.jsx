"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download, Mail } from "lucide-react"

export default function About() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">About Me</h1>
            <div className="h-1 w-20 bg-violet-500 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[500px] rounded-xl overflow-hidden shadow-xl"
            >
              <Image src="/placeholder.svg?height=1000&width=800" alt="Shubham Patel" fill className="object-cover" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">Hi, I'm Shubham Patel</h2>
              <p className="text-gray-600 mb-6">
                I'm a passionate software developer with a focus on creating beautiful, functional, and user-centered
                digital experiences. With a background in computer science and years of experience in web development, I
                bring both technical expertise and creative problem-solving to every project.
              </p>
              <p className="text-gray-600 mb-6">
                My journey in software development began during my university years, where I discovered my passion for
                building web applications. Since then, I've worked on various projects, from small business websites to
                complex web applications, always striving to deliver high-quality solutions that meet client needs.
              </p>
              <p className="text-gray-600 mb-8">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or sharing my knowledge through blog posts and tutorials.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-violet-600 hover:bg-violet-700">
                  <Link href="/contact">
                    <Mail className="mr-2 h-4 w-4" /> Contact Me
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-violet-300 text-violet-700 hover:bg-violet-50">
                  <a href="#" download>
                    <Download className="mr-2 h-4 w-4" /> Download Resume
                  </a>
                </Button>
              </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">My Journey</h2>
            <div className="h-1 w-20 bg-violet-500 mx-auto"></div>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {[
              {
                year: "2023 - Present",
                title: "Senior Frontend Developer",
                company: "Tech Innovators Inc.",
                description:
                  "Leading frontend development for enterprise web applications, implementing best practices, and mentoring junior developers.",
              },
              {
                year: "2020 - 2023",
                title: "Frontend Developer",
                company: "Digital Solutions Ltd.",
                description:
                  "Developed responsive web applications using React and Next.js, collaborated with designers and backend developers to deliver high-quality products.",
              },
              {
                year: "2018 - 2020",
                title: "Web Developer",
                company: "Creative Agency",
                description:
                  "Built websites for various clients, focusing on responsive design, performance optimization, and SEO best practices.",
              },
              {
                year: "2014 - 2018",
                title: "Computer Science Degree",
                company: "University of Technology",
                description:
                  "Studied computer science with a focus on web technologies, software engineering, and user experience design.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-12 relative pl-8 border-l-2 border-violet-200"
              >
                <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-violet-500"></div>
                <div className="text-sm text-violet-600 mb-1">{item.year}</div>
                <h3 className="text-xl font-bold mb-1 text-gray-800">{item.title}</h3>
                <div className="text-gray-700 mb-2">{item.company}</div>
                <p className="text-gray-600">{item.description}</p>
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
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">My Skills</h2>
            <div className="h-1 w-20 bg-violet-500 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-bold mb-6 text-gray-800">Technical Skills</h3>

              {[
                { name: "JavaScript", level: 90 },
                { name: "React", level: 85 },
                { name: "HTML & CSS", level: 95 },
                { name: "Next.js", level: 80 },
                { name: "Node.js", level: 75 },
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, width: 0 }}
                  whileInView={{ opacity: 1, width: "100%" }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="mb-6"
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-700">{skill.name}</span>
                    <span className="text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-violet-100 rounded-full overflow-hidden">
                    <div className="h-full bg-violet-500 rounded-full" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 text-gray-800">Other Skills</h3>

              <div className="grid grid-cols-2 gap-4">
                {[
                  "UI/UX Design",
                  "Responsive Design",
                  "Performance Optimization",
                  "SEO Best Practices",
                  "Git & Version Control",
                  "Agile Methodology",
                  "Problem Solving",
                  "Team Collaboration",
                  "Project Management",
                ].map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="bg-white p-4 rounded-lg shadow-sm flex items-center"
                  >
                    <div className="w-2 h-2 bg-violet-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Let's Connect</h2>
              <p className="text-gray-600 mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <Button asChild size="lg" className="bg-violet-600 hover:bg-violet-700">
                <Link href="/contact">Get In Touch</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
