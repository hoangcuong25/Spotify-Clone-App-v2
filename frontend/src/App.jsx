import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Home from './components/Home'

const App = () => {
  return (
    <div className='bg-black h-screen '>
      <Navbar />

      <div className='flex gap-2.5 h-[78%] mt-3.5'>
        <Sidebar />
        <Home />
      </div>

    </div>
  )
}

export default App
