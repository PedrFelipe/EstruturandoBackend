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

function editarUsuario (req, res) {

    const id = Number(req.params.id);

    const nome = req.body.nome;

    usuarioService.editarUsuario(id, nome);

    res.json ({
        mensagem: "Usuário atualizado"
    });
}

module.exports = {
    listarUsuarios,
    criarUsuarios,
    deletarUsuario,
    editarUsuario
}