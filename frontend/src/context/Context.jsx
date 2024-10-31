import { createContext, useEffect, useRef, useState } from "react";
import { Songs } from '../assets/assets'

export const PlayerContext = createContext(null);

const PlayerContextProvider = (props) => {

    const refAudio = useRef()
    const seekBar = useRef()

    const [menu, setMenu] = useState("all")
    const [track, setTrack] = useState(Songs[0])
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
        const indexSong = Songs.indexOf(track)
        if (indexSong < Songs.length - 1) {
            await setTrack(Songs[indexSong + 1])
        } else {
            await setTrack(Songs[0])
        }

        play()
    }

    const previousSong = async () => {
        const indexSong = Songs.indexOf(track)
        if (indexSong > 0) {
            await setTrack(Songs[indexSong - 1])
        } else {
            await setTrack(Songs[Songs.length - 1])
        }

        play()
    }

    useEffect(() => {
        setTimeout(() => {
            refAudio.current.ontimeupdate = () => {
                seekBar.current.style.width = ((refAudio.current.currentTime / refAudio.current.duration * 100)) + "%"

                setTime({
                    currentTime: {
                        second: Math.floor(refAudio.current.currentTime % 60),
                        minute: Math.floor(refAudio.current.currentTime / 60)
                    },
                    totalTime: {
                        second: Math.floor(refAudio.current.duration % 60),
                        minute: Math.floor(refAudio.current.duration / 60)
                    }
                })
            }
        }, 1000)
    }, [refAudio])


    const contextValue = {
        refAudio, seekBar,
        menu, setMenu,
        play, pause,
        track, setTrack,
        playStatus, setPlayStatus,
        nextSong, previousSong,
        time
    }

    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    )
}

export default PlayerContextProvider;