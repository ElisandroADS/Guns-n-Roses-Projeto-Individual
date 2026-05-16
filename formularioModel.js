var database = require("../database/config")

function enviar(fk_album, sexo, email){
     console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", fk_album, sexo, email);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    //var selectID = `select id from usuario where email = 'germano@gmail.com';`
    //var retornoSelectID = database.executar(selectID)     
    //var id = null 
    //retornoSelectID.then(retorno => id = retorno[0].id)
    var instrucaoSql = `
        INSERT INTO formulario ( fk_album, sexo,fk_usuario) VALUES ( ${fk_album} , '${sexo}', (select id from usuario where email = '${email}' limit 1) );
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    enviar
};