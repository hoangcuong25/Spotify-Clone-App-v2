import express from "express"
import cors from 'cors'
import "dotenv/config"
import connectDB from "./src/config/mongodb"
import songRouter from "./src/routes/songRouter"
import connectCloudinary from './src/config/cloudinary'

// app config
const app = express()
const port = process.env.PORT || 4000


// middlewares
app.use(express.json())
app.use(cors())
connectDB()
connectCloudinary()


// initializing routes
app.use("/api/song", songRouter)


app.get("/", (req, res) => res.send("Api Working"))

app.listen(port, () => console.log("Server Start Hihi"))