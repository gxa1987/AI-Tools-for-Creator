import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

import aidata from '../data/aitools.js'

// Converting that url to path, and path to directory.
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


// Creating a router:
const router = express.Router()
router.get('/', (req, res) => {
  res.status(200).json(aidata)
})

router.get('/:aitoolsId', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../public/aitools.html'))
})

export default router
