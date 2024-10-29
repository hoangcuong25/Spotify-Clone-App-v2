import React from 'react'
import spotify_logo from '../assets/spotify-logo.png'
import { GoHome } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import { GoBell } from "react-icons/go";

const Navbar = () => {
    return (
        <div className='flex items-center justify-between pt-1.5 '>
            <img src={spotify_logo} className='size-9 ml-10' alt="" />

            <div className='flex items-center gap-7'>
                <div className='relative group'>
                    <div className='flex justify-center items-center rounded-full
                    size-12 p-1.5 bg-[#242424] hover:scale-105 transition-all '>
                        <GoHome className='text-gray-300 text-3xl' />
                    </div>

                    <div className='hidden group-hover:flex py-1 px-3 rounded-lg absolute text-white bg-[#242424] -bottom-10 -right-3.5'>
                        Home
                    </div>

                </div>



                <div className='relative'>
                    <input
                        type="text"
                        placeholder='Search'
                        className='bg-[#242424] text-xl text-white h-12 w-[450px] rounded-full pr-2.5 pl-14' />
                    <FiSearch className='text-gray-300 text-3xl absolute top-2.5 left-1.5' />
                </div>
            </div>

            <div className='flex items-center gap-1.5 text-white text-xl'>
                <IoArrowDownCircleOutline />
                <p className='mr-10'>Install Now</p>

                <GoBell className='mr-7' />

                <div className='flex justify-center items-center size-12 rounded-full bg-[#242424] mr-3'>
                    <p className=''>HC</p>
                </div>
            </div>

        </div>
    )
}

export default Navbar
