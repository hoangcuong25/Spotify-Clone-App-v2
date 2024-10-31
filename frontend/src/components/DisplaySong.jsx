import React from 'react'

const DisplaySong = ({ name, image }) => {
    return (
        <div className='min-h-48 min-w-48'>
            <img src={image} className='' alt="" />
            <p className='text-white text-center'>{name}</p>
        </div>
    )
}

export default DisplaySong