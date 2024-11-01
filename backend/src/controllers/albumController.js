import { v2 as cloudinary } from "cloudinary"
import albumModel from "../models/albumModel.js"

const addAlbum = async (req, res) => {
    try {
        const { name } = req.body
        const imageFile = req.file
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: "image" })

        const albumData = {
            name,
            image: imageUpload.secure_url
        }

        const album = albumModel(albumData)
        await album.save()

        res.status(201).json({ success: true, message: "Album added" })

    } catch {
        res.status(400).json({ success: false })
    }
}

const removeAlbum = async (req, res) => {
    try {
        const { id } = req.body
        await albumModel.findByIdAndDelete(id)

        res.status(200).json({ success: true })

    } catch {
        res.status(400).json({ success: false })
    }
}

const list = async (req, res) => {
    try {
        const list = await albumModel.find()
        res.status(200).json({ success: true, albums: list })

    } catch {
        res.status(400).json({ success: false })
    }
}

export { addAlbum, removeAlbum,list }