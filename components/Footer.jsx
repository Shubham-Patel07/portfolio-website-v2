import Link from "next/link"
import { Github, Twitter, Linkedin, Instagram, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white border-t py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-purple-500">
                Shubham Patel
              </span>
            </Link>
            <p className="text-gray-600 mb-4 max-w-md">
              A passionate software developer focused on creating beautiful and functional digital experiences.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-600 hover:text-violet-600 transition-colors" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-violet-600 transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-violet-600 transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-violet-600 transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="mailto:shubham.patel@example.com"
                className="text-gray-600 hover:text-violet-600 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/projects", label: "Projects" },
                { href: "/blog", label: "Blog" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-600 hover:text-violet-600 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-800 mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">San Francisco, California</li>
              <li className="text-gray-600">shubham.patel@example.com</li>
              <li className="text-gray-600">+1 (123) 456-7890</li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">&copy; {new Date().getFullYear()} Shubham Patel. All rights reserved.</p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <Link href="/privacy" className="text-sm text-gray-600 hover:text-violet-600">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-gray-600 hover:text-violet-600">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
