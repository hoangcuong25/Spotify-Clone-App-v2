import React from 'react'
import { useParams } from 'react-router-dom'
import { albumsData } from '../assets/assets'
import spotify_logo_color from "../assets/spotify-logo-color.png"

const DisplayAlbum = () => {

    const { id } = useParams()
    const album = albumsData.find((album) => album.id === Number(id))

    return (
        <div className='flex text-white gap-3 pt-3 pl-3.5'>
            <img src={album.image} className='max-h-56' alt="" />
            <div className='flex flex-col gap-1.5'>
                <p className='text-sm'>Album</p>
                <p className='text-4xl'>{album.name}</p>
                <div className='flex items-center gap-3'>
                    <img src={spotify_logo_color} className='size-5' alt="" />
                    <p>Spotify • 50 Songs</p>
                </div>
            </div>
        </div>
    )
}

export default DisplayAlbum