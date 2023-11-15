import { useState, useContext, useEffect } from 'react'
import './App.css'
import { UsuarioContext } from './context/usuario'

function App() {
    // Traer los valores del contexto:
    const { usuario, setUsuario } = useContext(UsuarioContext)

    const handleCount = () => {
        console.log('handleCount', usuario)
        // Si tocamos el boton y no existe count, lo creamos con valor 1
        if (usuario?.count === undefined) setUsuario({ ...usuario, count: 1 })
        // Si existe count, le sumamos 1
        else setUsuario({ ...usuario, count: usuario.count + 1 })
    }

    const handleDelete = () => setUsuario(null)

    return (
        <>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={handleCount}>usuario.count: {usuario?.count || 0}</button>
                <br />
                <br />
                <button onClick={handleDelete}>Borrar usuario</button>
            </div>
        </>
    )
}

export default App
