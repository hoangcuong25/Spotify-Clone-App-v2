import React from 'react'
import HomeDisplay from './HomeDisplay'
import { Route, Routes } from 'react-router-dom'

const Home = () => {
    return (
        <div className='h-full w-full lg:w-[80%] lg:ml-0 ml-1.5 mr-1.5 bg-[#242424] rounded-md overflow-auto'>
            <Routes>
                <Route path='/' element={<HomeDisplay />} />
            </Routes>
        </div>
    )
}

export default Home
