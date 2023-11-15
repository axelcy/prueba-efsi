import { useEffect, useRef, useState } from "react"
import { Button, Form } from "react-bootstrap"

function GoalInput() {
    const [textos, setTextos] = useState(JSON.parse(localStorage.getItem('textos')) || [])
    const [mensaje, setMensaje] = useState('')
    const mainInput = useRef()

    useEffect(() => {
        document.title = `Hay ${textos.length} textos!`
        localStorage.setItem('textos', JSON.stringify(textos))
        if (textos.length === 0) setMensaje('Agrega textos para empezar!')
    }, [textos])
    
    const handleSubmit = () => {
        if (!mainInput.current.value) return setMensaje('no escribiste nada 🤬')
        setMensaje('')
        setTextos(textos => [...textos, mainInput.current.value])
    }

    const handleDelete = () => {
        setTextos([])
        setMensaje('Eliminaste toda la lista 😨😨')
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
            <Form.Control type="text" value={`Longitud del array: ${textos.length}`} disabled />
            <Form.Control type="text" placeholder="input" ref={mainInput} />
            <Button onClick={handleSubmit}>Sumar al array 🙂</Button>
            <Button onClick={handleDelete}>Eliminar toda la lista cuidado 😳</Button>
            { mensaje && <Form.Control type="text" value={mensaje} disabled /> }
            {
                textos?.map((texto, index) => (
                    <Form.Control key={index} type="text" value={texto} disabled />
                ))
            }
        </div>
    )
}

export default GoalInput
