var express = require("express");
var router = express.Router();

var maquinaController = require("../controllers/maquinaController");

router.post("/cadastrar", function (req, res) {
  maquinaController.cadastrar(req, res);
})

router.get("/listarMaquinas/:idUsuario", function (req, res) {
  maquinaController.listarMaquinas(req, res);
})

module.exports = router;