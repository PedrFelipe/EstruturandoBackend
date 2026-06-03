const express = require("express");
const router = express.Router();

const usuarioController = require ("../controllers/usuarioController");


router.get("/", usuarioController.listarUsuarios);

router.get("/:id", usuarioController.procurarUsuario);

router.post("/", usuarioController.criarUsuarios);

router.delete("/:id", usuarioController.deletarUsuario);

router.put("/:id", usuarioController.editarUsuario);

module.exports = router;
