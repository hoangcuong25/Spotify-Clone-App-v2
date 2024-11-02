import React, { useContext } from 'react'
import { PlayerContext } from '../context/Context'
import { useNavigate } from 'react-router-dom'

const HomeNavbar = () => {

    const { menu, setMenu } = useContext(PlayerContext)

    const navigate = useNavigate()

    return (
        <div className='flex pl-3.5 gap-2.5 bg-[#242424] pb-2.5 '>
            <div onClick={() => navigate("/dashboard")}>
                <div
                    className={`flex items-center justify-center w-fit h-7 px-3  rounded-full mt-3.5 cursor-pointer ${menu === "all" ? "bg-white" : "bg-[#464646]"}`}
                    onClick={() => setMenu("all")}
                >
                    <p>All</p>
                </div>
            </div>

            <div onClick={() => navigate("/dashboard/music")}>
                <div
                    className={`flex items-center justify-center w-fit h-7 px-3  rounded-full mt-3.5 cursor-pointer ${menu === "music" ? "bg-white" : "bg-[#464646]"}`}
                    onClick={() => setMenu("music")}
                >
                    <p>Music</p>
                </div>
            </div>

            <div onClick={() => navigate("/podcast")}>
                <div
                    className={`flex items-center justify-center w-fit h-7 px-3  rounded-full mt-3.5 cursor-pointer ${menu === "podcasts" ? "bg-white" : "bg-[#464646]"}`}
                    onClick={() => setMenu("podcasts")}
                >
                    <p>Podcasts</p>
                </div>
            </div>
        </div>
    )
}

export default HomeNavbar