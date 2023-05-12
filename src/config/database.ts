import { connect } from "mongoose"

const connectDB = async () => {
    try {
        connect(`${process.env.MONGO_URI}`)
    } catch (error) {
        console.log(error)
    }
}

export default connectDB
