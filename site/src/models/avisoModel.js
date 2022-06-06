var database = require("../database/config");

function listar() {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT 
            e.idEvento AS idEvento,
            e.nomeOrganizador,
            e.nomeEvento,
            e.rua,
            e.cep,
            e.dt,
            e.hora,
            e.preco,
            e.contato,
            e.descricao,
            e.fkUsuario,
            u.idUsuario AS idUsuario,
            u.tipoCadastro,
            u.nome,
            u.cpf,
            u.email,
            u.senha
        FROM evento e
            INNER JOIN usuario u
                ON e.fkUsuario = u.idUsuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function pesquisarDescricao(texto) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function pesquisarDescricao()");
    var instrucao = `
        SELECT 
            e.idEvento AS idEvento,
            e.nomeOrganizador,
            e.nomeEvento,
            e.rua,
            e.cep,
            e.dt,
            e.hora,
            e.preco,
            e.contato,
            e.descricao,
            e.fkUsuario,
            u.idUsuario AS idUsuario,
            u.tipoCadastro,
            u.nome,
            u.cpf,
            u.email,
            u.senha
        FROM evento e
            INNER JOIN usuario u
                ON e.fkUsuario = u.idUsuario
        WHERE e.descricao LIKE '${texto}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarPorUsuario(idUsuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarPorUsuario()");
    var instrucao = `
        SELECT 
            e.idEvento AS idEvento,
            e.nomeOrganizador,
            e.nomeEvento,
            e.rua,
            e.cep,
            e.dt,
            e.hora,
            e.preco,
            e.contato,
            e.descricao,
            e.fkUsuario,
            u.idUsuario AS idUsuario,
            u.tipoCadastro,
            u.nome,
            u.cpf,
            u.email,
            u.senha
        FROM evento e
            INNER JOIN usuario u
                ON e.fkUsuario = u.idUsuario;
        WHERE u.idUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function publicar(organizador, evento, rua, cep, data, hora, preco, contato, descricao, idUsuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", organizador, evento, rua, cep, data, hora, preco, contato, descricao, idUsuario);
    var instrucao = `
        INSERT INTO evento (nomeOrganizador, nomeEvento, rua, cep, dt, hora, preco, contato, descricao, fkUsuario) VALUES ('${organizador}', '${evento}', '${rua}', '${cep}', '${data}', '${hora}', '${preco}', '${contato}', '${descricao}', '${idUsuario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function editar(novaDescricao, idEvento) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editar(): ", novaDescricao, idEvento);
    var instrucao = `
        UPDATE aviso SET descricao = '${novaDescricao}' WHERE id = ${idEvento};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function deletar(idEvento) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():", idEvento);
    var instrucao = `
        DELETE FROM aviso WHERE id = ${idEvento};
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
