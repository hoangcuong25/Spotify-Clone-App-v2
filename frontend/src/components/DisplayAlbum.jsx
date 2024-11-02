/* eslint-disable react/jsx-key */
import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import spotify_logo_color from "../assets/spotify-logo-color.png"
import { FaCirclePlay } from "react-icons/fa6";
import { CiCirclePlus } from "react-icons/ci";
import { AiOutlineEllipsis } from "react-icons/ai";
import { AiOutlineBars } from "react-icons/ai";
import { LuClock } from "react-icons/lu";
import { PlayerContext } from '../context/Context';

const DisplayAlbum = () => {

    const { album, song, playWithSongId } = useContext(PlayerContext)

    const { id } = useParams()
    const albumData = album.find((album) => album._id === id);

    return (
        <div className='w-full flex flex-col text-white pt-3 pl-3.5'>
            <div className='flex gap-3'>
                <img src={albumData.image} className='max-h-56' alt="" />
                <div className='flex flex-col gap-1.5'>
                    <p className='text-sm'>Album</p>
                    <p className='text-4xl'>{albumData.name}</p>
                    <div className='flex items-center gap-3'>
                        <img src={spotify_logo_color} className='size-5' alt="" />
                        <p>Spotify • 50 Songs</p>
                    </div>
                </div>
            </div>

            <div className='flex items-center justify-between mt-10'>
                <div className='flex gap-7 items-center'>
                    <FaCirclePlay className='text-green-500 text-5xl hover:scale-105' />
                    <CiCirclePlus className='text-4xl' />
                    <AiOutlineEllipsis className='text-4xl' />
                </div>

                <div className='flex gap-3 items-center pr-3'>
                    <p className=''>List Songs</p>
                    <AiOutlineBars />
                </div>
            </div>

            <div className='grid grid-cols-3 mt-8'>
                <p className='tracking-widest'># Title</p>
                <p>Album</p>
                <LuClock />
            </div>
            <hr className='border-gray-700 mt-1.5' />

            {song.map((song, index) => {
                if (song.album === albumData.name) {
                    return (
                        <div className='grid grid-cols-3 items-center' key={index}>
                            <div className='flex gap-3 items-center'>
                                <p>{index + 1}</p>
                                <img src={song.image} className=' h-20 py-3' alt="" onClick={() => playWithSongId(song._id)} />
                                <p>{song.name}</p>
                            </div>
                            <p>{song.album}</p>
                            <p>{song.duration}</p>
                        </div>
                    )
                }
                return null
            })}
        </div>
    )
}

export default DisplayAlbum