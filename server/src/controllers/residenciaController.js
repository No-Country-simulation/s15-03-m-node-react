const { validationResult } = require('express-validator');
const { Residencia, Apartamento } = require('../database/models');

module.exports = {
    getResidenciaByCode: async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const { codigo } = req.params;
            const residencia = await Residencia.findOne({ where: { codigo } });
            if (residencia) {
                const edificios = await residencia.getEdificios();
                const info = {
                    ...residencia.dataValues,
                    edificios: edificios
                }
                return res.status(200).json(info);
            } else {
                return res.status(404).json({ msg: 'Residencia no encontrada' });
            }
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    },
    getApartamentosByEdificio: async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const { id_edificio } = req.params;
            const apartamentos = await Apartamento.findAll({ where: { id_edificio } });
            if (apartamentos) {
                return res.status(200).json(apartamentos);
            } else {
                return res.status(404).json({ msg: 'Apartamentos no encontrados' });
            }
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    }
}