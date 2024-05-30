const express = require('express');
const router = express.Router();
const { usuariosController } = require('../controllers');

// Middlewares

// Rutas

router.post('/login', usuariosController.login);
router.post('/register', usuariosController.register);
router.put('/editUser/:id', usuariosController.editUser);
router.get('/getUserInfo', usuariosController.getUsers);

module.exports = router;
