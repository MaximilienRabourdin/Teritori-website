import React from 'react'
import './App.css'

// Components
import Header from './Header/header'
import Footer from './Footer/footer'
import Homepage from './Homepage'
import Grants from './Grants'

// Router -> import Link
import { Routes, Route } from 'react-router-dom'

function App () {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/grants' element={<Grants />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
