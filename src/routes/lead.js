var express = require("express");
var router = express.Router();

var leadController = require("../controllers/leadController");

router.post("/cadastrar", function (req, res) {
  leadController.cadastrar(req, res);
});

router.get("/buscar/:emailLead", function (req, res) {
  leadController.buscar(req, res);
});
module.exports = router;
