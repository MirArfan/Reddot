import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Tunnelling from './pages/Tunnelling'

const App = () => {
  return (
    <div className=''>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Tunnelling' element={<Tunnelling />} />
      </Routes>
      <Footer />
    </div>

  )
}

export default App