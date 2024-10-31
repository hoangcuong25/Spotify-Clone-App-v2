import React, { useContext } from 'react'
import { FaCirclePlay } from "react-icons/fa6";
import { Songs } from '../assets/assets'
import { GiNextButton } from "react-icons/gi";
import { GiPreviousButton } from "react-icons/gi";
import { HiArrowPathRoundedSquare } from "react-icons/hi2";
import { TbArrowsShuffle } from "react-icons/tb";
import { CgPlayTrackNextR } from "react-icons/cg";
import { LuMic2 } from "react-icons/lu";
import { PiPlaylistBold } from "react-icons/pi";
import { MdOutlineDevicesOther } from "react-icons/md";
import { PiSpeakerSimpleNoneBold } from "react-icons/pi";
import { AiOutlineShrink } from "react-icons/ai";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { PlayerContext } from '../context/Context';
import { FaPauseCircle } from "react-icons/fa";

const Player = () => {

    const { play, pause, playStatus, nextSong, track, previousSong, time, seekBar } = useContext(PlayerContext)

    return (
        <div className='h-full flex justify-between items-center text-white ml-1.5 py-1.5'>
            <div className='h-full w-[20%] flex items-center gap-1.5'>
                <img src={track?.image} alt="" className='h-full' />
                <p>{track?.name}</p>
            </div>

            <div className='flex flex-col items-center'>
                <div className='flex gap-2.5 text-2xl'>
                    <TbArrowsShuffle className='cursor-pointer' />
                    <GiPreviousButton className='cursor-pointer' onClick={() => previousSong()} />
                    {
                        playStatus ? <FaPauseCircle className='cursor-pointer' onClick={() => pause()} /> :
                            <FaCirclePlay className='cursor-pointer' onClick={() => play()} />
                    }
                    <GiNextButton className='cursor-pointer' onClick={() => nextSong()} />
                    <HiArrowPathRoundedSquare className='cursor-pointer' />
                </div>

                <div className='flex items-center gap-3'>
                    <p>{time.currentTime.minute}:{time.currentTime.second}</p>
                    <div className='bg-[#242424] h-1 w-80 cursor-pointer'>
                        <div ref={seekBar} className='h-full bg-green-500 '></div>
                    </div>
                    <p>{time.totalTime.minute}:{time.totalTime.second}</p>
                </div>
            </div>

            <div className='flex items-center gap-2 text-xl pr-3'>
                <CgPlayTrackNextR className='cursor-pointer' />
                <LuMic2 className='cursor-pointer' />
                <PiPlaylistBold className='cursor-pointer' />
                <MdOutlineDevicesOther className='text-2xl cursor-pointer' />
                <PiSpeakerSimpleNoneBold className='cursor-pointer' />
                <div className='bg-[#242424] h-1 w-28 cursor-pointer'>
                    <div className='h-full w-[10%] bg-green-500 '></div>
                </div>
                <AiOutlineShrink className='cursor-pointer' />
                <MdOutlineZoomOutMap className='cursor-pointer' />
            </div>
        </div>
    )
}

export default Player