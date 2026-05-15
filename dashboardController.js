var dashboardModel = require("../models/dashboardModel");


function CapturarDadosGeral(req, res) {
    var resultado = req.query.resultado;

   dashboardModel.CapturarDadosGeral(resultado).then((resultado) => {
    res.status(200).json(resultado);
});

}

function CapturarDadosSexo(req, res){
    var resultado = req.query.resultado;

   dashboardModel.CapturarDadosSexo(resultado).then((resultado) => {
    res.status(200).json(resultado);
});
}


module.exports = {
   CapturarDadosSexo,
   CapturarDadosGeral
}