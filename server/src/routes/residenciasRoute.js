const express = require('express');
const router = express.Router();
const { residenciaController } = require('../controllers');


router.get('/getResidenciaByCode/:codigo', residenciaController.getResidenciaByCode);
router.get('/getApartamentosByEdificio/:id_edificio', residenciaController.getApartamentosByEdificio);
module.exports = router