var database = require("../database/config");

function autenticar(email, senha) {
  console.log(
    "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function autenticar(): ",
    email,
    senha
  );
  var instrucaoSql = `
        SELECT * FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(
  nome,
  endereco,
  telefone,
  cargo,
  senha,
  email,
  cpf,
  fk_empresa
) {
  console.log(
    "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():",
    nome,
    endereco,
    telefone,
    cargo,
    senha,
    email,
    cpf,
    fk_empresa
  );

  // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
  //  e na ordem de inserção dos dados.
  var instrucaoSql = `
        INSERT INTO usuario (nome, endereco, telefone, cargo, senha, email, cpf, fkEmpresa) VALUES ('${nome}', '${endereco}', '${telefone}', '${cargo}', '${senha}', '${email}', '${cpf}', ${fk_empresa});
    `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function listar(idUsuario) {
  var instrucao =  `
  SELECT * FROM usuario WHERE idUsuario = ${idUsuario}
`;
return database.executar(instrucao);

}

module.exports = {
  autenticar,
  cadastrar,
  listar,
};
