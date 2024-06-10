var database = require("../database/config");

function getPosts() {
  var instrucaoSql = `
        SELECT idPostagem, conteudo, titulo, tag, nome FROM postagem JOIN usuario on fkUsuario = idUsuario;
    `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


function cadastrar(nome, tags, descricao, idUsuario) {
  var instrucao = `
      INSERT INTO postagem (titulo,fkUsuario, tag, conteudo) VALUES ('${nome}',${idUsuario}, '${tags}','${descricao}');
  `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

module.exports = {
  getPosts,
  cadastrar
}