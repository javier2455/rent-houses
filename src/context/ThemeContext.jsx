import { useState, useEffect, createContext } from 'react'

export const ThemeContext = createContext()

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'
    }
    return 'light'
  })

  useEffect(() => {
    if (theme === 'dark') {
      document.querySelector('html').classList.add('dark')
    } else {
      document.querySelector('html').classList.remove('dark')
    }
  }, [theme])

  //
  const handleChangeTheme = (selectedTheme) => {
    // setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
    if (selectedTheme === 'light') {
      setTheme('light')
    }
    if (selectedTheme === 'dark') {
      setTheme('dark')
    }
    if (selectedTheme === 'system') {
      // setTheme('dark')
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark')
      } else {
        setTheme('light')
      }
    }
  }

  const data = {
    theme,
    handleChangeTheme,
    setTheme
  }

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>
}

export default ThemeContextProvider
