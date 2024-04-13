var usuarioModel = require("../models/usuarioModel");
var maquinaModel = require("../models/maquinaModel");

function autenticar(req, res) {
  var email = req.body.emailServer;
  var senha = req.body.senhaServer;

  if (email == undefined) {
    res.status(400).send("Seu email está undefined!");
  } else if (senha == undefined) {
    res.status(400).send("Sua senha está indefinida!");
  } else {
    usuarioModel
      .autenticar(email, senha)
      .then(function (resultadoAutenticar) {
        console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
        console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

        if (resultadoAutenticar.length == 1) {
          console.log(resultadoAutenticar);

          maquinaModel
            .buscarMaquinasPorUsuario(resultadoAutenticar[0].idUsuario)
            .then((resultadoMaquinas) => {
              // if (resultadoMaquinas.length > 0) {
              res.json({
                id: resultadoAutenticar[0].idUsuario,
                email: resultadoAutenticar[0].email,
                nome: resultadoAutenticar[0].nome,
                senha: resultadoAutenticar[0].senha,
                maquinas: resultadoMaquinas,
              });
              // } else {
              //   res.status(204).json({ maquinas: [] });
              // }
            });
        } else if (resultadoAutenticar.length == 0) {
          res.status(403).send("Email e/ou senha inválido(s)");
        } else {
          res.status(403).send("Mais de um usuário com o mesmo login e senha!");
        }
      })
      .catch(function (erro) {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o login! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

function cadastrar(req, res) {
  // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
  var nome = req.body.nomeServer;
  var email = req.body.emailServer;
  var senha = req.body.senhaServer;
  var cnpj = req.body.cnpjServer;
  var cpf = req.body.cpfServer;
  var telefone = req.body.telefoneServer;
  var cargo = req.body.cargoServer;
  var endereco = req.body.enderecoServer;

  // Faça as validações dos valores
  if (nome == undefined) {
    res.status(400).send("Seu nome está undefined!");
  } else if (email == undefined) {
    res.status(400).send("Seu email está undefined!");
  } else if (senha == undefined) {
    res.status(400).send("Sua senha está undefined!");
  } else if (cnpj == undefined) {
    res.status(400).send("Seu cnpj está undefined!");
  } else if (cpf == undefined) {
    res.status(400).send("Sseu cpf está undefined!");
  } else if (cargo == undefined) {
    res.status(400).send("Seu cargo está undefined!");
  } else if (endereco == undefined) {
    res.status(400).send("Seu endereco está undefined!");
  } else if (telefone == undefined) {
    res.status(400).send("Seu telefone está undefined!");
  } else {
    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    usuarioModel
      .cadastrar(nome, endereco, telefone, cargo, senha, email, cpf, cnpj)
      .then(function (resultado) {
        res.json(resultado);
      })
      .catch(function (erro) {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o cadastro! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

// ja volto

module.exports = {
  autenticar,
  cadastrar,
};
