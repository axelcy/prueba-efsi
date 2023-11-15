import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import PlaceholderText from './components/PlaceholderText.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* Acá envolvemos la app en el provider para poder acceder a sus valores en todos lados. */}
        <ThemeProvider>
            <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Layout />} >
                            <Route index element={<App />} />
                            <Route path='/info' element={<PlaceholderText />} />
                            <Route path='/*' element={<h1>Error 404</h1>} />
                        </Route>
                    </Routes>
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>,
)
