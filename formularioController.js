var formularioModel = require("../models/formularioModel");


function enviar(req, res) {
    //var fk_usuario = req.body.fkUsuarioServer;
    var fk_album = req.body.fkAlbumServer;
    var sexo = req.body.sexoServer;

    if (fk_album == undefined) {
        res.status(400).send("Seu formulário está undefined!");
    } else {

         // Passe os valores como parâmetro e vá para o arquivo formularioModel.js
                formularioModel.enviar( fk_album, sexo)
                    .then(
                        function (resultado) {
                            res.json(resultado);
                        }
                    ).catch(
                        function (erro) {
                            console.log(erro);
                            console.log(
                                "\nHouve um erro ao preencher o formulário! Erro: ",
                                erro.sqlMessage
                            );
                            res.status(500).json(erro.sqlMessage);
                        }
                    );
    }

}



module.exports = {
   enviar
}