import React from 'react'
import { VscLibrary } from "react-icons/vsc";
import { FaPlus } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { LuSearch } from "react-icons/lu";
import { BsFilterLeft } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { TiPin } from "react-icons/ti";

const Sidebar = () => {
    return (
        <div className='hidden lg:flex h-full w-[25%] ml-1 bg-[#242424]  rounded-md text-gray-400 '>
            <div className='flex flex-col w-full mt-3.5 ml-2.5'>
                <div className='flex items-center justify-between'>
                    <div className='flex gap-3.5'>
                        <VscLibrary className='text-2xl cursor-pointer' />
                        <p className=''>Libary</p>
                    </div>

                    <div className='flex gap-3.5 pr-3'>
                        <FaPlus className='cursor-pointer' />
                        <FaArrowRight className='cursor-pointer' />
                    </div>
                </div>

                <div className='flex items-center justify-between gap-1.5 mt-5 w-full'>
                    <LuSearch className='cursor-pointer' />

                    <div className='flex items-center gap-3.5 hover:text-white cursor-pointer'>
                        <p> Recently</p>
                        <BsFilterLeft className='text-3xl pr-3' />
                    </div>
                </div>

                <div className='flex items-end gap-2.5'>
                    <div className='flex justify-center items-center mt-5 size-10 rounded-lg bg-gradient-to-r from-violet-600 to-white'>
                        <FaHeart className='text-white cursor-pointer' />
                    </div>
                    <div className='flex flex-col'>
                        <p>Liked songs</p>
                        <div className='flex items-center gap-1'>
                            <TiPin className='text-green-500' />
                            <p className='text-sm'>List songs. 13 Songs</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
