var database = require("../database/config");

function buscarMaquinasPorUsuario(idUsuario) {
  var instrucaoSql = `SELECT * FROM maquina JOIN usuario ON maquina.fkUsuario = usuario.idUsuario WHERE idUsuario = ${idUsuario};`;

  console.log("Executando a instrução SQL maquina: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrar(nomeMaquina) {
  var instrucaoSql = `INSERT INTO maquina (nomeMaquina) VALUES ('${nomeMaquina}')`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function listarMaquinas(idUsuario) {
  var instrucaoSql = `SELECT m.*, r.* FROM maquina m
  JOIN registro r ON r.fkMaquina = m.idMaquina
  JOIN (SELECT fkMaquina, MAX(idRegistro) AS MaxId FROM registro GROUP BY fkMaquina) 
  AS ultimoRegistro ON r.fkMaquina = ultimoRegistro.fkMaquina AND r.idRegistro = ultimoRegistro.MaxId 
  WHERE m.fkUsuario = ${idUsuario}`

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function listarMaquinasEmpresa(fkEmpresa) {
  var instrucaoSql = `SELECT m.*, r.*
      FROM maquina m
      JOIN usuario u ON m.fkUsuario = u.idUsuario
      JOIN empresa e ON u.fkEmpresa = e.idEmpresa
      JOIN registro r ON r.fkMaquina = m.idMaquina
      JOIN (
          SELECT fkMaquina, MAX(idRegistro) AS MaxId 
          FROM registro 
          GROUP BY fkMaquina
      ) AS ultimoRegistro ON r.fkMaquina = ultimoRegistro.fkMaquina AND r.idRegistro = ultimoRegistro.MaxId 
      WHERE e.idEmpresa = ${fkEmpresa}`

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  listarMaquinas,
  buscarMaquinasPorUsuario,
  cadastrar,
  listarMaquinasEmpresa
};
