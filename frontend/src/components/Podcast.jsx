import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { PlayerContext } from '../context/Context'

const Podcast = ({ name, image, id }) => {

    const { playWithId } = useContext(PlayerContext)

    return (
        <div
            className='h-auto max-w-48'
            onClick={() => playWithId(id)}
        >
            <img src={image} className='h-auto min-w-48' alt="" />
            <p className='text-white text-center'>{name}</p>
        </div>
    )
}

export default Podcast