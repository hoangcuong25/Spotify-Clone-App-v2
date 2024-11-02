import React from 'react'

const Header = () => {
    return (
        <div className='w-full flex flex-col items-center pt-3.5'>
            <p className='text-4xl text-black'>Admin Pannel</p>
            <p className='py-2 text-xl'>Manage All Song and Album </p>
            <hr className='h-1 w-[95%] border-gray-300'/>
        </div>
    )
}

export default Header