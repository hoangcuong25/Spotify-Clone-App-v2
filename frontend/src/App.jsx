import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

const App = () => {
  return (
    <div className='bg-black h-screen '>
      <Navbar />
      <div>
        <Sidebar />
      </div>
    </div>
  )
}

export default App
