var database = require("../database/config")

function kpiGeral(){
    var instrucaoSql = `
        select  album.nome from formulario
        join album 
        on album.idAlbum = formulario.fk_album
        group by fk_album  order by count(idFormulario) desc limit 1;
     `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function kpiSexoFem(){
    var instrucaoSql = `
        select  album.nome from formulario
        join album 
        on album.idAlbum = formulario.fk_album
        where sexo = 'F'
        group by fk_album  order by count(idFormulario) desc limit 1;
     `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function kpiSexoMasc(){
    var instrucaoSql = `
        select  album.nome from formulario
        join album 
        on album.idAlbum = formulario.fk_album
        where sexo = 'M'
        group by fk_album  order by count(idFormulario) desc limit 1;
     `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



module.exports = {
   kpiGeral,
   kpiSexoFem,
   kpiSexoMasc
};