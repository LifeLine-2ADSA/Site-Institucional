var database = require("../database/config");
let data = new Date();
let dia = data.getDay();
let mes = data.getMonth() + 1;
let ano = data.getFullYear();
function cadastrar(email, nome) {
    var instrucaoSql = `INSERT INTO leads (nomeLead, emailLead, dataLead) VALUES ('${nome}','${email}', '${ano + "-" + mes + "-" + dia}')`
    return database.executar(instrucaoSql);
}

function buscar(email) {
    var instrucaoSql = `SELECT * FROM leads where emailLead = "${email}"`
    return database.executar(instrucaoSql)
}

module.exports = {cadastrar, buscar}