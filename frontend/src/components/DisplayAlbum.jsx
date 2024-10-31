import React from 'react'

const DisplayAlbum = ({ name, image }) => {
    return (
        <div className='h-auto max-w-48'>
            <img src={image} className='h-auto min-w-48' alt="" />
            <p className='text-white text-center'>{name}</p>
        </div>
    )
}

export default DisplayAlbum