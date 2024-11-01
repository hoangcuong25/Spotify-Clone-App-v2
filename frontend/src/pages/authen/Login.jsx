import React, { useContext, useState } from 'react'
import spotify_logo from '../../assets/spotify-logo.png'
import logo_google from '../../assets/logo-google.png'
import logo_fb from '../../assets/logo-fb.png'
import { TbBrandAppleFilled } from "react-icons/tb";
import { useNavigate } from 'react-router-dom'
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { toast } from 'react-toastify';
import { PlayerContext } from '../../context/Context';
import axios from 'axios'

const Login = () => {

    const { url } = useContext(PlayerContext)

    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isShow, setIshow] = useState(false)


    const handleOnSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await axios.post(`${url}/api/user/login`, {
                email: email,
                password: password
            })

            if (response.data && response.data.success) {
                navigate("/dashboard")
            }

        } catch {
            toast.error("Something Wrong")
        }
    }

    return (
        <div className='flex justify-center w-full h-[100vh] bg-[#242424] text-white'>
            <div className='flex flex-col items-center gap-2.5 h-fit w-[35%] bg-[#464646] py-3.5 rounded-lg'>
                <img src={spotify_logo} className='h-auto w-10 ' alt="" />
                <p>Login in to Spotify</p>
                <div className='flex items-center gap-2 border w-64 h-8 rounded-full'>
                    <img src={logo_google} className='size-5 ml-3' alt="" />
                    <p className=''>Login in with Google</p>
                </div>

                <div className='flex items-center gap-2 border w-64 h-8 rounded-full'>
                    <img src={logo_fb} className='size-5 ml-3 rounded-full' alt="" />
                    <p className=''>Login in with Facebook</p>
                </div>

                <div className='flex items-center gap-2 border w-64 h-8 rounded-full'>
                    <TbBrandAppleFilled className='text-2xl ml-3' />
                    <p className=''>Login in with Google</p>
                </div>

                <div className='flex justify-center items-center gap-2 border w-64 h-8 rounded-full'>
                    <p className=''>Login in with Phone Number</p>
                </div>
                <hr className='border border-gray-500 mt-0.5 w-[85%]' />

                <div className='w-[65%] flex flex-col items-center'>
                    <form onSubmit={handleOnSubmit} className='w-full'>
                        <div className='w-full'>
                            <p className=''>Email</p>
                            <input
                                type="text"
                                placeholder='Type your Email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className='bg-gray-500 w-full h-10 pl-2.5 rounded-lg '
                            />
                        </div>

                        <div className='w-full mt-1.5 relative'>
                            <p>Password</p>
                            <input
                                type={`${isShow ? "text" : "password"}`}
                                placeholder='Type your Password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className='bg-gray-500 w-full h-10 pl-2.5 rounded-lg '
                            />

                            {isShow ?
                                <IoIosEye
                                    onClick={() => setIshow(false)}
                                    className='text-2xl absolute right-1 top-8 cursor-pointer'
                                />
                                :
                                <IoIosEyeOff
                                    onClick={() => setIshow(true)}
                                    className='text-2xl absolute right-1 top-8 cursor-pointer'
                                />
                            }
                        </div>

                        <button className='mt-5 w-full bg-green-500 h-10 rounded-3xl'>Login</button>
                    </form>

                    <p>Don't have an account?</p>
                    <p
                        className='underline cursor-pointer'
                        onClick={() => navigate("/signup")}>Sign up for Spotify</p>
                </div>
            </div>
        </div>
    )
}

export default Login