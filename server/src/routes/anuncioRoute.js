const express = require('express');
const router = express.Router();
const { anuncioController } = require('../controllers');


router.post('/create', anuncioController.create);
router.get('/list', anuncioController.list);
router.delete('/delete/:id', anuncioController.delete);
router.put('/edit/:id', anuncioController.edit);
module.exports = router