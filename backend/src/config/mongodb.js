import mongoose from "mongoose";

const connectDB = async () => {
    mongoose.connect.on("connectd", () => {
        console.log("connection established")
    })
    await mongoose.connect(`${process.env.MONGODB_URL}/spotify`)
}

export default connectDB