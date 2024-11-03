/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react'
import { assets } from '../assets/admin-assets/assets'
import axios from 'axios'
import { url } from '../App'
import { toast } from 'react-toastify'

const ListAlbum = () => {

    const [data, setData] = useState([])

    const fetchAlbums = async () => {
        try {
            const response = await axios.get(`${url}/api/album/list`)

            if (response.data && response.data.success) {
                setData(response.data.albums)
            }

        } catch {
            toast.error("Error occured")
        }
    }

    const removeAlbum = async (id) => {
        try {
            const respond = await axios.post(`${url}/api/album/remove`, { id })

            if (respond.data && respond.data.success) {
                toast.success(respond.data.success)
                await fetchAlbums()
            }
        } catch {
            toast.error("Error occured")
        }
    }

    useEffect(() => {
        fetchAlbums()
    }, [])

    return (
        <div>
            <p>All Albums List</p>
            <br />
            <div>
                <div className='sm:grid hidden grid-cols-3 items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5 bg-gray-100'>
                    <b>Image</b>
                    <b>Name</b>
                    <b>Action</b>
                </div>
                {data.map((item, index) => {
                    return (
                        <div key={index} className='grid grid-cols-3 items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5'>
                            <img src={item.image} alt="" className='size-36'/>
                            <p>{item.name}</p>
                            <p onClick={() => removeAlbum(item._id)} className='cursor-pointer'>X</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ListAlbum