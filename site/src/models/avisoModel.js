var database = require("../database/config");

function listar() {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT 
            f.idforum AS idforum,
            f.nome,
            f.pergunta,
            f.contato,
            f.descricao,
            f.fkUsuario,
            u.idUsuario AS idUsuario,
            u.nome,
            u.cpf,
            u.email,
            u.senha
        FROM forum f
            INNER JOIN usuario u
                ON f.fkUsuario = u.idUsuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function pesquisarDescricao(texto) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function pesquisarDescricao()");
    var instrucao = `
        SELECT 
        f.idforum AS idforum,
        f.nome,
        f.pergunta,
        f.contato,
        f.descricao,
        f.fkUsuario,
        u.idUsuario AS idUsuario,
        u.nome,
        u.cpf,
        u.email,
        u.senha
        FROM forum f
            INNER JOIN usuario u
                ON f.fkUsuario = u.idUsuario
        WHERE f.descricao LIKE '${texto}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarPorUsuario(idusuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarPorUsuario()");
    var instrucao = `
        SELECT 
        f.idforum AS idforum,
        f.nome,
        f.pergunta,
        f.contato,
        f.descricao,
        f.fkUsuario,
        u.idUsuario AS idUsuario,
        u.nome,
        u.cpf,
        u.email,
        u.senha
        FROM forum f
            INNER JOIN usuario u
                ON f.fkUsuario = u.idUsuario;
        WHERE u.idUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function publicar(nome, pergunta, contato, descricao, idUsuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", nome, pergunta, contato, descricao, idUsuario);
    var instrucao = `
        INSERT INTO forum (nome, pergunta, contato, descricao, fkUsuario) VALUES (''${nome}', '${pergunta}', '${contato}', '${descricao}', '${idUsuario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function editar(novaDescricao, idforum) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editar(): ", novaDescricao, idEvento);
    var instrucao = `
        UPDATE aviso SET descricao = '${novaDescricao}' WHERE id = ${idforum};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function deletar(idforum) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():", idEvento);
    var instrucao = `
        DELETE FROM aviso WHERE id = ${idforum};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    listar,
    listarPorUsuario,
    pesquisarDescricao,
    publicar,
    editar,
    deletar
}
