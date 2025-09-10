const usuarios = [
    { nome: 'Matheus',
      email:'matheus@gmail.com'
    },
    { nome: 'Marcos',
      email: 'marcos@gmail.com'
    },
    { nome: 'Lucas',
      email: 'lucas@gmail.com'
    },
    { nome: 'João',
      email: 'joão@gmail.com'
    }
];

function retornarUsuarios() {
    return usuarios;
}

function adicionarNovoUsuario(nome) {
    usuarios.push(nome);
}

module.exports = {
    adicionarNovoUsuario,
    retornarUsuarios
}