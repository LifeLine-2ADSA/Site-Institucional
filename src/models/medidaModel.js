var database = require("../database/config");

function buscarUltimasMedidas(idmaquina, limite_linhas) {

    var instrucaoSql = `SELECT * FROM registro WHERE fkMaquina = ${idmaquina}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idmaquina) {

    var instrucaoSql = `SELECT * FROM registro WHERE fkMaquina = ${idmaquina}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}
