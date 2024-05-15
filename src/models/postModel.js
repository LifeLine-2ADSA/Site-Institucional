var database = require("../database/config");

function getPosts() {
  var instrucaoSql = `
        SELECT idPostagem, conteudo, titulo, tag, nome FROM postagem JOIN usuario on fkUsuario = idUsuario;
    `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  getPosts
}