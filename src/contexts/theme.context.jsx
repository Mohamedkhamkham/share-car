import { createContext, useState } from "react"

const ThemeContext = createContext()

function ThemeProviderWrapper(props) {

    const [theme, setTheme] = useState('dark')

    const swhitchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light'
        setTheme(newTheme)
    }


    return (
        <ThemeContext.Provider value={{ theme, swhitchTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeProviderWrapper }