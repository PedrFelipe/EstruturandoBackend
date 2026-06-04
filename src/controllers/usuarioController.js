const usuarioService = require("../services/usuarioServices")

async function listarUsuarios (req,res) {

    const usuarios = await usuarioService.listarUsuarios();

    res.json(usuarios);
}

async function criarUsuarios (req, res) {

    const nome = req.body.nome;

    await usuarioService.criarUsuarios(nome);

    res.json({
        mensagem: "Usuário criado"
    });

}

async function deletarUsuario (req, res) {

    const id = Number(req.params.id);

    await usuarioService.deletarUsuario(id);

    res.json({
        mensagem: "Usuário removido"
    });
}   

async function editarUsuario (req, res) {

    const id = Number(req.params.id);

    const nome = req.body.nome;

    await usuarioService.editarUsuario(id, nome);

    res.json ({
        mensagem: "Usuário atualizado"
    });
}

async function procurarUsuario (req, res) {

    const id = Number(req.params.id)

    const usuario = await usuarioService.procurarUsuario(id);

    res.json(usuario);

}

module.exports = {
    listarUsuarios,
    criarUsuarios,
    deletarUsuario,
    editarUsuario,
    procurarUsuario
}