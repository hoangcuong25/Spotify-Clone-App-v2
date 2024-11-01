import { createContext, useEffect, useRef, useState } from "react";
import { AllPodcastSong } from '../assets/assets'
import axios from 'axios'

export const PlayerContext = createContext(null);

const PlayerContextProvider = (props) => {

    const refAudio = useRef()

    const seekBar = useRef()
    const seekBg = useRef()

    const seekVolumeBar = useRef()
    const seekVolumeBg = useRef()

    const url = "http://localhost:4000"

    const [menu, setMenu] = useState("all")
    const [track, setTrack] = useState()
    const [song, setSong] = useState()
    const [album, setAlbum] = useState()
    const [playStatus, setPlayStatus] = useState(false)

    const [time, setTime] = useState({
        currentTime: {
            second: 0,
            minute: 0
        },
        totalTime: {
            second: 0,
            minute: 0
        }
    })

    const play = () => {
        refAudio.current.play()
        setPlayStatus(true)
    }

    const pause = () => {
        refAudio.current.pause()
        setPlayStatus(false)
    }


    const nextSong = async () => {
        const indexSong = AllPodcastSong.indexOf(track)
        if (indexSong < AllPodcastSong.length - 1) {
            await setTrack(AllPodcastSong[indexSong + 1])
        } else {
            await setTrack(AllPodcastSong[0])
        }

        play()
    }

    const previousSong = async () => {
        const indexSong = AllPodcastSong.indexOf(track)
        if (indexSong > 0) {
            await setTrack(AllPodcastSong[indexSong - 1])
        } else {
            await setTrack(AllPodcastSong[AllPodcastSong.length - 1])
        }

        play()
    }

    const playWithId = async (id) => {
        const audio = AllPodcastSong.find((audio) => audio.id === id)
        await setTrack(audio)

        play()
    }

    const seekSong = async (e) => {
        refAudio.current.currentTime = ((e.nativeEvent.offsetX / seekBg.current.offsetWidth) * refAudio.current.duration)
    }

    const seekVolume = async (e) => {
        refAudio.current.volume = ((e.nativeEvent.offsetX / seekVolumeBg.current.offsetWidth))
        seekVolumeBar.current.style.width = ((e.nativeEvent.offsetX / seekVolumeBg.current.offsetWidth * 100)) + "%"
    }

    const fetchSongs = async () => {
        try {
            const response = await axios.get(`${url}/api/song/list`)

            if (response.data && response.data.success) {
                await setSong(response.data.songs)
                await setTrack(response.data.songs[0])
            }

        } catch {
            console.log("Something Wrong")
        }
    }

    const fetchAlbums = async () => {
        try {
            const response = await axios.get(`${url}/api/album/list`)

            if (response.data && response.data.success) {
                await setAlbum(response.data.albums)
            }

        } catch {
            console.log("Something Wrong")
        }
    }

    useEffect(() => {
        if (refAudio.current) {
            refAudio.current.ontimeupdate = () => {
                seekBar.current.style.width = `${(refAudio.current.currentTime / refAudio.current.duration) * 100}%`;

                setTime({
                    currentTime: {
                        second: Math.floor(refAudio.current.currentTime % 60),
                        minute: Math.floor(refAudio.current.currentTime / 60),
                    },
                    totalTime: {
                        second: Math.floor(refAudio.current.duration % 60),
                        minute: Math.floor(refAudio.current.duration / 60),
                    },
                });
            };
        }
    }, []);

    useEffect(() => {
        if (refAudio.current) {
            refAudio.current.volume = 0.2
        }

        if (seekVolumeBar.current) {
            seekVolumeBar.current.style.width = "20%"
        }

        fetchSongs()
        fetchAlbums()
    }, [])

    const contextValue = {
        refAudio, seekBar,
        menu, setMenu,
        play, pause,
        track, setTrack,
        playStatus, setPlayStatus,
        nextSong, previousSong,
        time, url,
        playWithId,
        seekBg, seekSong,
        seekVolume, seekVolumeBar,
        seekVolumeBg,
        song, album
    }

    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    )
}

export default PlayerContextProvider;