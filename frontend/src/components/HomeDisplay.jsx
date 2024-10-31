import React, { useContext, useState } from 'react'
import { albumsData, Songs } from "../assets/assets"
import Album from './Album'
import Song from './Song'
import { PlayerContext } from '../context/Context'

const HomeDisplay = () => {

    const { menu, setMenu } = useContext(PlayerContext)

    return (
        <div className='h-full w-full flex flex-col '>
            <div className='flex pl-3.5 gap-2.5 bg-[#242424] pb-2.5'>
                <div
                    className={`flex items-center justify-center w-fit h-7 px-3  rounded-full mt-3.5 cursor-pointer ${menu === "all" ? "bg-white" : "bg-[#464646]"}`}
                    onClick={() => setMenu("all")}
                >
                    <p>All</p>
                </div>

                <div
                    className={`flex items-center justify-center w-fit h-7 px-3  rounded-full mt-3.5 cursor-pointer ${menu === "music" ? "bg-white" : "bg-[#464646]"}`}
                    onClick={() => setMenu("music")}
                >
                    <p>Music</p>
                </div>

                <div
                    className={`flex items-center justify-center w-fit h-7 px-3  rounded-full mt-3.5 cursor-pointer ${menu === "podcasts" ? "bg-white" : "bg-[#464646]"}`}
                    onClick={() => setMenu("podcasts")}
                >
                    <p>Podcasts</p>
                </div>
            </div>

            <div className='mt-3 mb-2 pl-3.5'>
                <p className='text-xl text-white hover:underline'>Recommend Songs Today</p>
            </div>

            <div className='flex gap-7 pl-3.5'>
                {Songs.map((song, index) =>
                    <Song key={index} name={song.name} image={song.image} />
                )}
            </div>

            <div className='mb-2 pl-3.5'>
                <p className='text-xl text-white hover:underline'>Popular Album</p>
            </div>

            <div className='flex gap-7 pl-3.5 '>
                {albumsData.map((album, index) =>
                    <Album key={index} name={album.name} image={album.image} id={album.id} />
                )}
            </div>
        </div>
    )
}

export default HomeDisplay