import React, { useContext } from 'react'
import { PlayerContext } from '../context/Context'

const Song = ({ name, image, id }) => {

    const { playWithId } = useContext(PlayerContext)

    return (
        <div
            onClick={() => playWithId(id)}
            className='min-h-48 min-w-48'
        >
            <img src={image} className='min-h-48 min-w-48' alt="" />
            <p className='text-white text-center'>{name}</p>
        </div>
    )
}

export default Song