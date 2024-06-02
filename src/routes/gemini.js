const express = require('express')
const router = express.Router()
const geminiController = require('../controllers/geminiController')

router.post('/text', (req, res) => {
  geminiController.run(req.body.prompt, res)
})

module.exports = router