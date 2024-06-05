const express = require('express');
const router = express.Router();
const { reservaController } = require('../controllers');

// Middlewares
const { reservaMiddleware } = require('../middlewares');

router.post('/create', [reservaMiddleware.checkReserva], reservaController.create);
router.get('/list', reservaController.list);
router.delete('/delete/:id', reservaController.delete);
router.put('/edit/:id', reservaController.edit);
module.exports = router