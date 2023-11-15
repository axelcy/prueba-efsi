import { useState, useContext, useEffect } from 'react'
import './App.css'
import { ThemeContext } from './context/ThemeContext'
import { Button } from 'react-bootstrap'
import GoalInput from './components/GoalInput'

function App() {

    const { theme, setTheme } = useContext(ThemeContext)

    const handleTheme = () => setTheme(theme => theme === 'white' ? 'blue' : 'white')

    return (
        <main style={{padding: '2rem'}}>
            <h1>Trabajo de efsi 15/11/23 🙊</h1>
            <div className="buttons-container">
                <Button onClick={handleTheme}>Cambiar fondo 👾</Button>
                <GoalInput />
            </div>
        </main>
    )
}

export default App
