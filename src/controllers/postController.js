let postModel = require('../models/postModel')


async function getPostsController(res) {
  let posts = await postModel.getPosts()
  res.json(posts)
}

module.exports = {
  getPostsController
}