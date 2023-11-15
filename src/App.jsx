import { useState, useContext, useEffect } from 'react'
import './App.css'
import { UsuarioContext } from './context/usuario'
import { Button } from 'react-bootstrap'

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
        <main>
            <h1>La insanidad está en su prime</h1>
            <div className="buttons-container">
                <Button onClick={handleCount}>usuario.count: <strong>{usuario?.count || 0}</strong></Button>
                <Button onClick={handleDelete}>Borrar usuario</Button>
            </div>
        </main>
    )
}

export default App
