var express = require("express");
var router = express.Router();

var kpiController = require("../controllers/kpiController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js

router.get("/kpiGeral", function(req, res){
    kpiController.kpiGeral(req, res)
})

router.get("/kpiSexoFem", function(req, res){
    kpiController.kpiSexoFem(req, res)
})

router.get("/kpiSexoMasc", function(req, res){
    kpiController.kpiSexoMasc(req, res)
})


module.exports = router;
