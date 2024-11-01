import express from 'express'
import upload from '../middleware/multer.js'
import { addAlbum, removeAlbum, list } from '../controllers/albumController.js'

const albumRouter = express.Router()

albumRouter.post("/add", upload.single("image"), addAlbum)
albumRouter.post("/remove", removeAlbum)
albumRouter.get("/list", list)

export default albumRouter