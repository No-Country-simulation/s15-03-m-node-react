const express = require('express');
const router = express.Router();
const { reservaController } = require('../controllers');


router.post('/create', reservaController.create);
router.get('/list', reservaController.list);
router.delete('/delete/:id', reservaController.delete);
module.exports = router