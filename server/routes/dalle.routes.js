import express from 'express'
import * as dotenv from 'dotenv'
import { Configuration, OpenAIApi } from 'openai'

dotenv.config()

const router = express.Router()

const config = new Configuration({
  apiKey: process.env.OPEN_AI_KEY
})
const openai = new OpenAIApi(config)

router.route('/').get((req, res) => {
  res.status(200).json({ message: 'Hello from DALL.E route' })
})

router.route('/').post(async (req, res) => {
  try {
    const { prompt } = req.body
    console.log({ ai_key: process.env.OPEN_AI_KEY })

    const response = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: '512x512',
      response_format: 'b64_json'
    })

    const image = response.data.data[0].b64_json
    console.log({ image })

    res.status(200).json({ photo: image })
  } catch (error) {
    console.log({ error: error.response.data })
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
