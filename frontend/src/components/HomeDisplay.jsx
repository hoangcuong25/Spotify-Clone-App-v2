import { albumsData, Podcasts } from "../assets/assets"
import Album from './Album'
import Song from './Song'
import Podcast from './Podcast'
import HomeNavbar from './HomeNavbar'
import { useContext } from "react"
import { PlayerContext } from "../context/Context"

const HomeDisplay = () => {

    const { song, album } = useContext(PlayerContext)

    return (
        <div className='h-full w-full flex flex-col'>

            <HomeNavbar />

            <div className='mt-5 mb-2 pl-3.5'>
                <p className='text-xl text-white hover:underline'>Recommend Songs Today</p>
            </div>

            <div className='pl-3.5'>
                <div className='flex gap-7 overflow-auto'>
                    {song?.map((song, index) =>
                        <Song key={index} name={song.name} image={song.image} id={song.id} />
                    )}
                </div>
            </div>

            <div className='mb-2 pl-3.5'>
                <p className='text-xl text-white hover:underline'>Popular Album</p>
            </div>

            <div className='pl-3.5'>
                <div className='flex gap-7 overflow-auto'>
                    {album?.map((album, index) =>
                        <Album key={index} name={album.name} image={album.image} id={album.id} />
                    )}
                </div>
            </div>

            {/* <div className='mb-2 pl-3.5'>
                <p className='text-xl text-white hover:underline'>Podcasts</p>
            </div>

            <div className='pl-3.5'>
                <div className='flex gap-7 overflow-auto'>
                    {Podcasts.map((album, index) =>
                        <Podcast key={index} name={album.name} image={album.image} id={album.id} />
                    )}
                </div>
            </div> */}
        </div>
    )
}

export default HomeDisplay