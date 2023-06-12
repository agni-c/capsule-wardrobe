import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

import dalleRoutes from './routes/dalle.routes.js'

const app = express()
app.use(cors())
app.use(express.json({ limit: '50mb' }))

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello from DALL.E' })
})

app.use('/api/v1/dalle', dalleRoutes)

const PORT = process.env.PORT || 8080

app.listen(PORT, () => console.log(`server started at port ${PORT}`))
