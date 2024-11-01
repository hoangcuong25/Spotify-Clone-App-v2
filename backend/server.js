import express from "express"
import cors from 'cors'
import "dotenv/config"
import connectDB from "./src/config/mongodb.js"
import songRouter from "./src/routes/songRouter.js"
import connectCloudinary from './src/config/cloudinary.js'
import userRouter from "./src/routes/userRouter.js"
import albumRouter from "./src/routes/albumRouter.js"


// app config
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

// middlewares
app.use(express.json())
app.use(cors())

// initializing routes
app.use("/api/song", songRouter)
app.use("/api/album", albumRouter)
app.use("/api/user", userRouter)



app.get("/", (req, res) => res.send("Api Working"))

app.listen(port, () => console.log("Server Start Hihi"))