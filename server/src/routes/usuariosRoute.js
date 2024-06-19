const express = require('express');
const router = express.Router();
const { usuarioController } = require('../controllers');

// Rutas

router.post('/login', usuarioController.login);
router.post('/register', usuarioController.register);
router.get('/list', usuarioController.list);
router.put('/deactivate/:id', usuarioController.deactivate);
router.put('/approve/:id', usuarioController.approve);
router.put('/disapprove/:id', usuarioController.disapprove);
router.put('/activate/:id', usuarioController.activate);
router.put('/edit/:id', usuarioController.edit);
router.get('/info/:id', usuarioController.info);
router.post('/uploadPicture', usuarioController.uploadPicture);
module.exports = router;
