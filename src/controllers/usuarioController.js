const usuarioService = require("../services/usuarioServices")

function listarUsuarios (req,res) {

    const usuarios = usuarioService.listarUsuarios();

    res.json(usuarios);
}

function criarUsuarios (req, res) {

    const nome = req.body.nome;

    usuarioService.criarUsuarios(nome);

    res.json({
        mensagem: "Usuário criado"
    });

}

function deletarUsuario (req, res) {

    const id = Number(req.params.id);

    usuarioService.deletarUsuario(id);

    res.json({
        mensagem: "Usuário removido"
    });
}   

module.exports = {
    listarUsuarios,
    criarUsuarios,
    deletarUsuario
}