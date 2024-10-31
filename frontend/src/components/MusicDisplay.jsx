import React from 'react'
import HomeNavbar from './HomeNavbar'
import { Songs } from '../assets/assets'
import Song from './Song'

const MusicDisplay = () => {
    return (
        <div>
            <HomeNavbar />

            <div className='mt-5 mb-2 pl-3.5'>
                <p className='text-xl text-white hover:underline'>Recommend Songs Today</p>
            </div>

            <div className='pl-3.5'>
                <div className='flex gap-7 overflow-auto'>
                    {Songs.map((song, index) =>
                        <Song key={index} name={song.name} image={song.image} id={song.id} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default MusicDisplay