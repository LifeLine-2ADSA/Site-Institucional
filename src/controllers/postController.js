let postModel = require('../models/postModel')


async function getPostsController(res) {
  let posts = await postModel.getPosts()
  res.json(posts)
}

function cadastrar(req, res) {
  let nome = req.body.nomeServer;
  let tags = req.body.tagsServer;
  let descricao = req.body.descricaoServer;
  let idUsuario = req.body.idServer;
  
  if (nome == undefined) {
      res.status(400).send("Seu nome está undefined!");
  }

  postModel.cadastrar(nome, tags, descricao,idUsuario).then(function(resposta){
      res.status(200).send("Post criado com sucesso");
  }).catch(function(erro){
      res.status(500).json(erro.sqlMessage);
  })
}

module.exports = {
  getPostsController,
  cadastrar
}