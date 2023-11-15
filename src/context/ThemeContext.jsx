import { createContext, useState } from "react"

export const ThemeContext = createContext(null)

export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'white')

    localStorage.setItem('theme', theme)

    const colors = {
        white: '#e6e6e6',
        blue: '#547cff'
    }

    document.querySelector('body').style.background = colors[theme]

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}