var database = require("../database/config")

function CapturarDadosGeral(){
    var instrucaoSql = `
        select count(idFormulario) as votos , album.nome  from formulario
        left join album 
        on album.idAlbum = formulario.fk_album
        group by fk_album;
     `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function CapturarDadosSexo(){
    var instrucaoSql = `
        select count(sexo), sexo, album.nome from formulario
        left join album 
        on album.idAlbum = formulario.fk_album
        group by fk_album, sexo;
     `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



module.exports = {
   CapturarDadosGeral,
   CapturarDadosSexo
};