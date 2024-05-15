let express = require('express')
let router = express.Router()
let postController = require('../controllers/postController')

router.get('/listPosts', (req, res) => {
  postController.getPostsController(res)
})

module.exports = router