import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home.jsx'
import Menus from './Menus.jsx'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menus />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
