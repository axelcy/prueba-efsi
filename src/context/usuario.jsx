import { createContext, useState } from "react"

export const UserContext = createContext(null)

export const UserProvider = ({ children }) => {
    // Si user es un objeto usar:     JSON.parse y JSON.stringify
    // Si es un string NO usar:       JSON.parse y JSON.stringify

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || {})
    localStorage.setItem('user', JSON.stringify(user))

    return (
        // Esto es el provider:
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
        // La app se envuelve en el provider para que todos los componentes tengan acceso a su valor.
        // En este caso, el valor que le indicamos es un objeto con user y setUser.
        // user es un estado, y setUser la función que lo modifica.
        // Esto nos permite acceder a un estado en toda la app, se le llama estado global.
    )
}