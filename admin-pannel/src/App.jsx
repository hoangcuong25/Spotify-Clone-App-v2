import React from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import AddSong from './components/AddSong'
import ListSong from './components/ListSong'
import AddAlbum from './components/AddAlbum'
import ListAlbum from './components/ListAlbum'

const App = () => {
  return (
    <div className='flex w-screen h-screen'>
      <div className='h-full w-[25%] bg-green-600'>
        <Sidebar />
      </div>

      <div className='h-full w-[75%]'>
        <Header />

        <Routes>
          <Route path='/add-song' element={<AddSong />} />
          <Route path='/list-song' element={<ListSong />} />
          <Route path='/add-album' element={<AddAlbum />} />
          <Route path='/list-album' element={<ListAlbum />} />
        </Routes>
      </div>
    </div>
  )
}

export default App