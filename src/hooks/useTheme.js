import { useEffect, useState } from 'react'

const getInitialTheme = () => {
  const storedTheme = localStorage.getItem('theme')

  if (storedTheme) {
    return storedTheme
  }

  return 'light'
}

const useTheme = () => {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    const root = document.documentElement

    root.classList.toggle('dark', theme === 'dark')

    localStorage.setItem('theme', theme)
  }, [theme])

  return {
    theme,
    setTheme,
    toggleTheme: () =>
      setTheme((currentTheme) =>
        currentTheme === 'dark' ? 'light' : 'dark'
      ),
  }
}

export default useTheme