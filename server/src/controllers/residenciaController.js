const { validationResult } = require('express-validator');
const md5 = require('md5');
const jwt = require('jsonwebtoken');


module.exports = {
list: async (req, res) => {
    
    try {
        const reservas = await Reserva.findAll();
        return res.status(200).json(reservas);
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
},
delete: async (req, res) => {
    try {
        const { id } = req.params;
        const reserva = await Reserva.findOne({ where: { id } });
        if (!reserva) {
            return res.status(404).json({ msg: 'Reserva no encontrada' });
        }
        await Reserva.destroy({ where: { id } });
        return res.status(200).json({ msg: 'Reserva eliminada con exito' });
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
},

}