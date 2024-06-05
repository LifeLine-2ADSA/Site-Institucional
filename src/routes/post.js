let express = require('express')
let router = express.Router()
let postController = require('../controllers/postController')

router.get('/listPosts', (req, res) => {
  postController.getPostsController(res)
})

router.post("/cadastrar", function (req, res) {
  // função a ser chamada quando acessar /post/cadastrar
  postController.cadastrar(req, res);
});

module.exports = router