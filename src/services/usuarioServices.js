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

function deletarUsuario(usuarios) {

    usuarios.filter(usuario => usuario.id !== id);
};



module.exports = {
    listarUsuarios,
    criarUsuarios,
    deletarUsuario
}