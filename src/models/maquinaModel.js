var database = require("../database/config");

function buscarMaquinasPorUsuario(idUsuario) {
  var instrucaoSql = `SELECT * FROM maquina JOIN usuario ON maquina.fkUsuario = usuario.idUsuario WHERE idUsuario = ${idUsuario};`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrar(nomeMaquina) {
  var instrucaoSql = `INSERT INTO maquina (nomeMaquina) VALUES ('${nomeMaquina}')`;
4
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  buscarMaquinasPorUsuario,
  cadastrar,
};
