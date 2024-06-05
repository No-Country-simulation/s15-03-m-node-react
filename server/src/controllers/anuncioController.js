const { validationResult } = require('express-validator');
const md5 = require('md5');
const jwt = require('jsonwebtoken');
const { Anuncio } = require('../database/models');


module.exports = {
    create: async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const { titulo, mensaje, fecha, es_anuncio, id_usuario } = req.body;
            const user = await Usuario.findOne({ where: { id_usuario } });
            if (!user) {
                return res.status(409).json({ msg: 'El usuario no existe' });
            }
            if (user) {
                const newAnuncio = await Anuncio.create({
                    titulo,
                    mensaje,
                    fecha,
                    id_usuario

                });

                return res.status(201).json({ msg: "Anuncio creado con exito" });

            }
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    },
    list: async (req, res) => {

        try {
            const anuncios = await Anuncio.findAll();
            return res.status(200).json(anuncios);
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.params;
            const anuncio = await Anuncio.findOne({ where: { id } });
            if (!anuncio) {
                return res.status(404).json({ msg: 'Anuncio no encontrada' });
            }
            await Anuncio.destroy({ where: { id } });
            return res.status(200).json({ msg: 'Anuncio eliminada con exito' });
        } catch (error) {
            return res.status(500).json({ msg: error.message });

        }
    },
    edit: async (req, res) => {
        try {
            const { id } = req.params;
            const anuncio = await Anuncio.findOne({ where: { id } });
            if (!anuncio) {
                return res.status(404).json({ msg: 'Anuncio no encontrada' });
            }
            const { titulo, mensaje } = req.body;
            await Anuncio.update({ titulo, mensaje }, { where: { id } });
            return res.status(200).json({ msg: 'Anuncio actualizado con exito' });
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
}
}