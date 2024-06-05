const { validationResult } = require("express-validator");
const md5 = require("md5");
const jwt = require("jsonwebtoken");
const { Reserva } = require("../database/models");

module.exports = {
  create: async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const { inicio, fin, id_zona, id_usuario } = req.body;
      /*const user = await Usuario.findOne({ where: { id_usuario } });
        if (!user) {
            return res.status(409).json({ msg: 'El usuario no existe' });
        }*/
      if (id_usuario) {
        const newReserva = await Reserva.create({
          inicio,
          fin,
          id_zona,
          id_usuario,
        });

        return res.status(201).json({ msg: "Reserva creada con exito" });
      }
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
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
        return res.status(404).json({ msg: "Reserva no encontrada" });
      }
      await Reserva.destroy({ where: { id } });
      return res.status(200).json({ msg: "Reserva eliminada con exito" });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  edit: async (req, res) => {
    try {
      const { id } = req.params;
      const { inicio, fin, id_zona, id_usuario } = req.body;
      const reserva = await Reserva.findOne({ where: { id } });
      if (!reserva) {
        return res.status(404).json({ msg: "Reserva no encontrada" });
      }
      await Reserva.update(
        { inicio, fin, id_zona, id_usuario },
        { where: { id } }
      );
      return res.status(200).json({ msg: "Reserva actualizada con exito" });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
};
