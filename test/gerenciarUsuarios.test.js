const { retornarUsuarios, adicionarNovoUsuario } = require('../src/gerenciarUsuarios');
const { expect } = require('chai');

describe('Testar as funções de gestão de Usuários', function () {
    it('validar que posso adicionar um novo nome de usuário na lista', function () {

        adicionarNovoUsuario({
            nome: 'Maria',
            email: 'maria@gmail.com'
        },)

        const listaDeUsuarios = retornarUsuarios();

        expect(listaDeUsuarios.at(-1).nome).to.equal('Maria');
        expect(listaDeUsuarios.at(-1).email).to.equal('maria@gmail.com');

        expect(listaDeUsuarios.at(-1).email).to.eql({
            nome: 'Maria',
            email: 'maria@gmail.com'
        });
    });

});