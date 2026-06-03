let usuarios = [
    
        {
            id: 1,
            nome: "Pedro"
        },
        {
            id: 2,
            nome: "Cláudio"
        }
    
    ];

function listarUsuarios() {
    return usuarios;
};


function criarUsuarios(nome) {

    usuarios.push({
        id: usuarios.length + 1,
        nome: nome
    });

};

function deletarUsuario(id) {

    usuarios = usuarios.filter(
        usuario => usuario.id !== id
    );
};

function editarUsuario (id, nome) {

 const usuario = usuarios.find(
        usuario => usuario.id === id
    );

    usuario.nome = nome;
    
};

function procurarUsuario(id, nome){

    const usuario = usuarios.find(
        usuario => usuario.id === id
    );

    return usuario

};

module.exports = {
    listarUsuarios,
    criarUsuarios,
    deletarUsuario,
    editarUsuario,
    procurarUsuario
}