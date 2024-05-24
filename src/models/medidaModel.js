var database = require("../database/config");

function buscarUltimasMedidas(idmaquina) {

    var instrucaoSql = `SELECT * FROM registro WHERE fkMaquina = ${idmaquina} ORDER BY idRegistro DESC LIMIT 8`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idmaquina) {

    var instrucaoSql = `SELECT * FROM registro WHERE fkMaquina = ${idmaquina} ORDER BY idRegistro DESC LIMIT 1`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}
