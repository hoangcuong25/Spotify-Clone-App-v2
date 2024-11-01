import songModel from "../models/songModel.js";
import { v2 as cloudinary } from "cloudinary"

const addSong = async (req, res) => {
    try {
        const { name, album } = req.body
        const audioFile = req.files.audio[0]
        const imageFile = req.files.image[0]

        const audioUpload = await cloudinary.uploader.upload(audioFile.path, { resource_type: "video" })
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: "image" })

        const duration = `${Math.floor(audioUpload.duration / 60)}:${Math.floor(audioUpload.duration % 60)}`

        const songData = {
            name,
            album,
            image: imageUpload.secure_url,
            file: audioUpload.secure_url,
            duration
        }

        const song = songModel(songData)
        await song.save()

        res.status(201).json({ success: true, message: "Song Added" })

    } catch {
        res.status(400).json({ success: false })
    }
}

const removeSong = async (req, res) => {
    try {
        const { id } = req.body
        await songModel.findByIdAndDelete(id)

        res.status(200).json({ success: true })
    } catch {
        res.status(400).json({ success: false })
    }
}

const listSong = async (req, res) => {
    try {
        const list = await songModel.find()

        res.status(200).json({ success: true, songs: list })

    } catch {
        res.status(400).json({ success: false })
    }
}

export { addSong, removeSong, listSong }