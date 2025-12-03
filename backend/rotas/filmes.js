const express = require('express');
const router = express.Router();
const controller = require('../controladores/filmeController');

// Definindo as rotas (URLs) da API
router.get('/', controller.listarFilmes);
router.post('/', controller.criarFilme);
router.put('/:id', controller.editarFilme);
router.delete('/:id', controller.deletarFilme);

module.exports = router;