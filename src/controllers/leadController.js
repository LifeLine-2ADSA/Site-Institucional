var leadModel = require("../models/leadModel");

function buscar(req, res) {
  var email = req.params.emailLead;

  if (email == undefined) {
    res.status(400).send("Seu email está undefined!");
  } else {
    leadModel
      .buscar(email)
      .then(function (resultado) {
        console.log(
          `\nResultados encontrados BUSCAR LEAD: ${resultado.length}`
        );
        if (resultado.length > 0) {
          res.status(200).json(JSON.stringify(resultado));
          console.log("LEAD ====> " + JSON.stringify(resultado));
        } else {
          res.status(204).send("Lead não existe, cadastrando");
          console.log("LEAD INDO PRO CADASTRO");
        }
      })
      .catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
      });
  }
}

function cadastrar(req, res) {
  var nome = req.body.nomeLead;
  var email = req.body.emailLead;

  if (email == undefined) {
    res.status(400).send("Seu email está undefined!");
  } else if (nome == undefined) {
    res.status(400).send("Seu nome está undefined!");
  } else {
    leadModel
      .cadastrar(email, nome)
      .then(function (resultado) {
        if (resultado.length > 0) {
          res.status(409).json(resultado);
        } else {
          res
            .status(200)
            .send(
              "Não foi possivel efetuar o cadastro ##ESTOU NO CONTROLLER!!"
            );
        }
      })
      .catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
      });
  }
}
module.exports = { cadastrar, buscar };
