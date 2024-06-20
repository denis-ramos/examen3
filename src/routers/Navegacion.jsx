import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from '../componentes/Home'
import About from '../componentes/About'
import Dashboard from '../componentes/Dashboard'

function Navegacion() {
  return (
    <HashRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/About" element={<About/>} />
            <Route path="/Dashboard" element={<Dashboard/>} />

        </Routes>

    </HashRouter>

  )
}

export default Navegacion