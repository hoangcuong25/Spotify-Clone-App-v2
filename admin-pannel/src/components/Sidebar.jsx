import React from 'react'
import { assets } from '../assets/admin-assets/assets'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {

    const navigate = useNavigate()

    return (
        <div>
            <img src={assets.logo} className='w-auto h-16 pt-3.5 pl-3.5' alt="" />
            <div className='flex flex-col items-center gap-8 py-16'>
                <div className='relative cursor-pointer' onClick={() => navigate("/add-song")}>
                    <div className='flex items-center gap-2.5 pl-2 bg-white w-40 h-10 rounded-sm absolute -top-2 -right-2'>
                        <img src={assets.add_song} alt="" className='size-5' />
                        <p>Add Song</p>
                    </div>
                    <div className='bg-green-300 w-40 h-10 flex items-center rounded-sm pl-2'></div>
                </div>

                <div className='relative cursor-pointer' onClick={() => navigate("/list-song")}>
                    <div className='flex items-center gap-2.5 pl-2 bg-white w-40 h-10 rounded-sm absolute -top-2 -right-2'>
                        <img src={assets.song_icon} alt="" className='size-5' />
                        <p>List Song</p>
                    </div>
                    <div className='bg-green-300 w-40 h-10 flex items-center rounded-sm pl-2'></div>
                </div>

                <div className='relative cursor-pointer' onClick={() => navigate("/add-album")}>
                    <div className='flex items-center gap-2.5 pl-2 bg-white w-40 h-10 rounded-sm absolute -top-2 -right-2'>
                        <img src={assets.add_album} alt="" className='size-5' />
                        <p>Add Album</p>
                    </div>
                    <div className='bg-green-300 w-40 h-10 flex items-center rounded-sm pl-2'></div>
                </div>

                <div className='relative cursor-pointer' onClick={() => navigate("/list-album")}>
                    <div className='flex items-center gap-2.5 pl-2 bg-white w-40 h-10 rounded-sm absolute -top-2 -right-2'>
                        <img src={assets.album_icon} alt="" className='size-5' />
                        <p>List Album</p>
                    </div>
                    <div className='bg-green-300 w-40 h-10 flex items-center rounded-sm pl-2'></div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar