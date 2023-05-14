import { Schema, model } from "mongoose"
import UserInterface from "@/interfaces/user.interface"

const UserSchema = new Schema<UserInterface>({
    id: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    }
}, { timestamps: true })

export default model('user', UserSchema)
