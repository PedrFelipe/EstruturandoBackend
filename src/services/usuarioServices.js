const pool = require("../config/database");
/*let usuarios = [
    
        {
            id: 1,
            nome: "Pedro"
        },
        {
            id: 2,
            nome: "Cláudio"
        }
    
    ];
*/

async function listarUsuarios() {
//  return usuarios;
    const resultado = await pool.query(
        "SELECT * FROM usuarios ORDER BY id ASC;"
    );
    return resultado.rows;

};


async function criarUsuarios(nome) {
   /* usuarios.push({
        id: usuarios.length + 1,
        nome: nome
    });
    */
    const resultado = await pool.query(
        "INSERT INTO usuarios (nome) VALUES ($1);",
        [nome]
    );
    return resultado.rows;

};

async function deletarUsuario(id) {
/*
    usuarios = usuarios.filter(
        usuario => usuario.id !== id
    );
*/
    const resultado = await pool.query(
        "DELETE FROM usuarios WHERE id = $1;",
        [id]
    );
    return resultado.rows;
    
};

async function editarUsuario (id, nome) {
/*
 const usuario = usuarios.find(
        usuario => usuario.id === id
    );

    usuario.nome = nome;
*/
    const resultado = await pool.query(
            "UPDATE usuarios SET nome = $1 WHERE id = $2;",
            [nome, id]
    );

};

async function procurarUsuario(id){
/*
    const usuario = usuarios.find(
        usuario => usuario.id === id
    );

    return usuario
*/
const resultado = await pool.query(
    "SELECT * FROM usuarios WHERE id = $1",
    [id]
);
return resultado.rows;

};

module.exports = {
    listarUsuarios,
    criarUsuarios,
    deletarUsuario,
    editarUsuario,
    procurarUsuario
}