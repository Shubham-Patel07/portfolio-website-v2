"use client"

import { createContext, useContext, useEffect, useState } from "react"

const ThemeProviderContext = createContext({})

export function ThemeProvider({ children, defaultTheme = "light", ...props }) {
  const [theme, setTheme] = useState(defaultTheme)

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove("dark", "light")
    root.classList.add(theme)
  }, [theme])

  const value = {
    theme,
    setTheme: (newTheme) => setTheme(newTheme),
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)
  if (context === undefined) throw new Error("useTheme must be used within a ThemeProvider")
  return context
}
