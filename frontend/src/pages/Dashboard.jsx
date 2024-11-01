import React, { useContext } from 'react'
import { PlayerContext } from '../context/Context'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Home from '../components/Home'
import Player from '../components/Player'


const Dashboard = () => {

    const { track, refAudio } = useContext(PlayerContext)

    return (
        <div className='bg-black h-screen '>
            <div className='h-[10%]'>
                <Navbar />
            </div>

            <div className='flex gap-2 h-[78%] pt-1.5 '>
                <Sidebar />
                <Home />
            </div>

            <div className='h-[12%]'>
                <Player />
            </div>

            <audio ref={refAudio} src={track?.audio} ></audio>
        </div>
    )
}

export default Dashboard
