import userModel from '../models/userModel.js'
import bcrypt from 'bcrypt'

const register = async (req, res) => {
    try {
        const { name, email, password } = req.body

        if (!name || !email || !password) {
            res.status(400).json({ success: false })
        }

        const isUser = await userModel.findOne({ email: email })

        if (isUser) {
            res.status(400).json({ success: false, message: "User already exists" })
        }

        const hashedPassword = await bcrypt.hash(password, 8)

        const userData = {
            name,
            email,
            password: hashedPassword
        }

        const user = userModel(userData)
        await user.save()

        res.status(201).json({ success: true, message: "Register Successfully" })

    } catch {
        res.status(400).json({ success: false })
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            res.status(400).json({ success: false })
        }

        const isUser = await userModel.findOne({ email: email })

        if (!isUser) {
            res.status(400).json({ success: false, message: "User not found" })
        }

        const isMatch = await bcrypt.compare(password, isUser.password)

        if (!isMatch) {
            res.status(400).json({ success: false, message: "Password is wrong" })
        }

        res.status(200).json({ success: true, message: "Login successfully" })

    } catch {
        res.status(400).json({ success: false })
    }
}

export { register, login }