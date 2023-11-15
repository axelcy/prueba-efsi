import { createContext, useState } from "react"

export const UsuarioContext = createContext(null)

export const UsuarioProvider = ({ children }) => {
    // Si usuario es un OBJETO usar:     JSON.parse y JSON.stringify
    // Si usuario es un STRING no usar:  JSON.parse y JSON.stringify

    const [usuario, setUsuario] = useState(JSON.parse(localStorage.getItem('usuario')) || {})

    // Guardar en localStorage
    localStorage.setItem('usuario', JSON.stringify(usuario))

    // Borrar localStorage si el usuario es null (no es estrictamente necesario)
    if(usuario === null) localStorage.clear()

    return (
        // Esto es el provider:
        <UsuarioContext.Provider value={{ usuario, setUsuario }}>
            {children}
        </UsuarioContext.Provider>
        
        // La app se envuelve en el provider para que todos los componentes tengan acceso a su valor. (/src/main.jsx)
        // En este caso, el valor que le indicamos es un objeto con usuario y setUsuario.
        // usuario es un estado, y setUsuario la función que lo modifica.
        // Esto nos permite acceder a un estado en toda la app, se le llama estado global.
    )
}