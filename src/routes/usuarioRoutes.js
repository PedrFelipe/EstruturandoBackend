const express = require("express");
const router = express.Router();

const usuarioController = require ("../controllers/usuarioController");

router.get("/", usuarioController.listarUsuarios);

router.post("/", usuarioController.criarUsuarios);

router.delete("/", usuarioController.deletarUsuario);

module.exports = router;
