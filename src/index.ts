import 'dotenv/config'

import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import connectDB from '@/config/database'
import v1Routes from '@/routes/v1'

const app = express()

const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())
app.use(morgan('dev'))

app.use('/api/v1', v1Routes)

app.listen(PORT, () => {
    connectDB().then()
    console.log(`server in http://localhost:${PORT}`)
})
