var database = require("../database/config");

function buscarMaquinasPorUsuario(idUsuario) {
  var instrucaoSql = `SELECT * FROM maquina JOIN usuario ON maquina.fkUsuario = usuario.idUsuario WHERE idUsuario = ${idUsuario};`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrar(nomeMaquina) {
  var instrucaoSql = `INSERT INTO maquina (nomeMaquina) VALUES ('${nomeMaquina}')`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function listarMaquinas(idUsuario) {
  var instrucaoSql = `SELECT * FROM maquina JOIN registro ON maquina.idMaquina = registro.fkMaquina WHERE maquina.fkUsuario = ${idUsuario}`

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  listarMaquinas,
  buscarMaquinasPorUsuario,
  cadastrar,
};
