import React from 'react'
import HomeNavbar from './HomeNavbar'
import { Podcasts } from '../assets/assets'
import Podcast from './Podcast'

const PodcastDisplay = () => {
    return (
        <div>
            <HomeNavbar />

            <div className='mt-5 mb-2 pl-3.5'>
                <p className='text-xl text-white hover:underline'>Podcasts</p>
            </div>

            <div className='pl-3.5'>
                <div className='flex gap-7 overflow-auto'>
                    {Podcasts.map((album, index) =>
                        <Podcast key={index} name={album.name} image={album.image} id={album.id} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default PodcastDisplay