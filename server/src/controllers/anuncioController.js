const { validationResult } = require('express-validator');
const md5 = require('md5');
const jwt = require('jsonwebtoken');
const { Anuncio, Usuario} = require('../database/models');


module.exports = {
    create: async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const { titulo, mensaje, es_anuncio, es_negocio, es_incidente, id_usuario, imagen } = req.body;
            const fecha = new Date();
            const user = await Usuario.findOne({ where: { id: id_usuario } });
            if (!user) {
                return res.status(409).json({ msg: 'El usuario no existe' });
            }
            if (user) {
                if(es_anuncio){
                    const newAnuncio = await Anuncio.create({
                        mensaje,
                        fecha,
                        id_usuario,
                        es_anuncio: true
                    });
                } else if (es_negocio) {
                    const newAnuncio = await Anuncio.create({
                        titulo,
                        mensaje,
                        fecha,
                        id_usuario,
                        es_negocio: true,
                        es_anuncio: false,
                        imagen
                    });
                } else if (es_incidente) {
                    const newAnuncio = await Anuncio.create({
                        titulo,
                        mensaje,
                        fecha,
                        id_usuario,
                        es_anuncio: false,
                        es_incidente: true,
                        imagen
                    });
                }

                return res.status(201).json({ msg: "Anuncio creado con exito" });

            }
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    },
    list: async (req, res) => {

        try {
            const anuncios = await Anuncio.findAll({ include: [{ model: Usuario, as: 'usuario', attributes: ['nombre', 'apellido'] }] });
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
            const { titulo, mensaje, fecha, es_anuncio = false, es_negocio = false, es_incidente = false, imagen } = req.body;
            await Anuncio.update({ titulo, mensaje, fecha, es_anuncio, es_negocio, es_incidente }, { where: { id } });
            if(imagen) {
                await Anuncio.update({ imagen }, { where: { id } });
            }
            return res.status(200).json({ msg: 'Anuncio actualizado con exito' });
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    }
}