const express = require('express');
const router = express.Router();
const { residenciaController } = require('../controllers');


router.get('/list', residenciaController.list);
router.delete('/delete/:id', residenciaController.delete);
module.exports = router