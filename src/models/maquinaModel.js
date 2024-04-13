var database = require("../database/config");

function buscarMaquinasPorUsuario(idUsuario) {
  var instrucaoSql = `SELECT * FROM maquina ON usuario JOIN maquina.fkUsuario = usuario.idUsuario WHERE idUsuario = ${idUsuario};`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrar(idUsuario, descricao) {
  var instrucaoSql = `INSERT INTO (descricao, fk_empresa) maquina VALUES (${descricao}, ${empresaId})`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  buscarMaquinasPorUsuario,
  cadastrar,
};
