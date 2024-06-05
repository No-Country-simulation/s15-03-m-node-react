const { Reserva } = require('../database/models');
const { Op } = require('sequelize');


module.exports = {
    checkReserva: async (req, res, next) => {
        try {
            const { inicio, fin, id_zona } = req.body;
            // Asegúrate de que los datos necesarios estén presentes
            if (!inicio || !fin || !id_zona) {
                return res.status(400).json({ error: 'Faltan datos de inicio, fin o zona' });
            }

            const nuevoInicio = new Date(inicio);
            const nuevoFin = new Date(fin);

            // Buscar reservas que se solapen con la nueva reserva en la misma zona
            const reservasConflictivas = await Reserva.findAll({
                where: {
                    id_zona: id_zona,
                    [Op.or]: [
                        {
                            inicio: {
                                [Op.between]: [nuevoInicio, nuevoFin]
                            }
                        },
                        {
                            fin: {
                                [Op.between]: [nuevoInicio, nuevoFin]
                            }
                        },
                        {
                            [Op.and]: [
                                {
                                    inicio: {
                                        [Op.lte]: nuevoInicio
                                    }
                                },
                                {
                                    fin: {
                                        [Op.gte]: nuevoFin
                                    }
                                }
                            ]
                        }
                    ]
                }
            });

            if (reservasConflictivas.length > 0) {
                return res.status(400).json({ error: 'Ya existe una reserva en este rango de fechas y zona' });
            }

            next();
        } catch (error) {
            return res.status(500).json({ error: 'Error interno del servidor' });
        }
    }
}