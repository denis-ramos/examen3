import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './componentes/Header'
import './index.css'
import Home from './componentes/Home'
import Navegacion from './routers/Navegacion'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navegacion/>
  </React.StrictMode>,
)
