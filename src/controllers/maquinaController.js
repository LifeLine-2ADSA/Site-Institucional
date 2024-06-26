var maquinaModel = require("../models/maquinaModel");

function buscarMaquinasPorUsuario(req, res) {
  var idUsuario = req.params.idUsuario;

  maquinaModel
    .buscarMaquinasPorUsuario(idUsuario)
    .then((resultado) => {
      if (resultado.length > 0) {
        res.status(200).json(resultado);
      } else {
        res.status(204).json([]);
      }
    })
    .catch(function (erro) {
      console.log(erro);
      console.log("Houve um erro ao buscar os maquinas: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}

function cadastrar(req, res) {
  var nomeMaquina = req.body.nomeMaquina;

  if (nomeMaquina == undefined) {
    res.status(400).send("idUsuario está undefined!");
  } else {
    maquinaModel
      .cadastrar(nomeMaquina)
      .then((resultado) => {
        res.status(201).json(resultado);
      })
      .catch((erro) => {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o cadastro! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

function listarMaquinas(req, res) {
  var idUsuario = req.params.idUsuario;

  if (idUsuario == undefined) {
    res.status(400).send("idUsuario está undefined!");
  } else {
    maquinaModel.listarMaquinas(idUsuario)
    .then(
      (resultado) => {
        if (resultado.length > 0) {
          res.status(200).json(resultado);
        } else {
          res.status(204).json([]);
        }
      }
    )
  }
}

function listarMaquinasEmpresa(req, res) {
  var fkEmpresa = req.params.fkEmpresa;

  if (fkEmpresa == undefined) {
    res.status(400).send("fkEmpresa está undefined!");
  } else {
    maquinaModel.listarMaquinasEmpresa(fkEmpresa)
    .then(
      (resultado) => {
        if (resultado.length > 0) {
          res.status(200).json(resultado);
        } else {
          res.status(204).json([]);
        }
      }
    )
  }
}

module.exports = {
  listarMaquinas,
  buscarMaquinasPorUsuario,
  cadastrar,
  listarMaquinasEmpresa
};
