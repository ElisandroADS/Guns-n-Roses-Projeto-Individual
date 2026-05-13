var kpiModel = require("../models/kpiModel");


function kpiGeral(req, res) {
    var resultado = req.query.resultado;

   kpiModel.kpiGeral(resultado).then((resultado) => {
    res.status(200).json(resultado);
});

}

function kpiSexoFem(req, res){
    var resultado = req.query.resultado;

   kpiModel.kpiSexoFem(resultado).then((resultado) => {
    res.status(200).json(resultado);
});
}

function kpiSexoMasc(req, res){
    var resultado = req.query.resultado;

   kpiModel.kpiSexoMasc(resultado).then((resultado) => {
    res.status(200).json(resultado);
});
}


module.exports = {
   kpiGeral,
   kpiSexoFem,
   kpiSexoMasc
}