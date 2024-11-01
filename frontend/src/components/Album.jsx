import React from 'react'
import { useNavigate } from 'react-router-dom'


const Album = ({ name, image, id }) => {

    const navigate = useNavigate()

    return (
        <div
            className='h-auto max-w-48'
            onClick={() => navigate(`/album/${id}`)}
        >
            <img src={image} className='h-auto min-w-48' alt="" />
            <p className='text-white text-center'>{name}</p>
        </div>
    )
}

export default Album