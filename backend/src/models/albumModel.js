import mongoose from "mongoose";

const albumSchema = new mongoose.Schema({
    name: { type: String, require: true },
    image: { type: String, require: true }
})

const albumModel = mongoose.models.album || mongoose.model("album", albumSchema)

export default albumModel