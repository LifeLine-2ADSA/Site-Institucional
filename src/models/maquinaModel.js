var database = require("../database/config");

function buscarMaquinasPorUsuario(idUsuario) {
  var instrucaoSql = `SELECT m.*, um.* FROM maquina m JOIN usuario_maquina um ON m.idMaquina = um.fkMaquina
  JOIN usuario u ON um.fkUsuario = u.idUsuario WHERE idUsuario = ${idUsuario};`;

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
