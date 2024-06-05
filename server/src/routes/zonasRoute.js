const express = require('express');
const router = express.Router();
const { zonaController } = require('../controllers');

// Rutas
router.post('/create', zonaController.create);
router.put('/edit/:id', zonaController.edit);
router.put('/deactivate/:id', zonaController.deactivate);
router.put('/activate/:id', zonaController.activate);
router.get('/list', zonaController.list);
router.delete('/delete/:id', zonaController.delete);

module.exports = router;
