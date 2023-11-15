import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { UsuarioProvider } from './context/usuario.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UsuarioProvider>
      {/* Acá envolvemos la app en el provider para poder acceder a sus valores en todos lados. */}
      <App />
    </UsuarioProvider>
  </React.StrictMode>,
)
