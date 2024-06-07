const { validationResult } = require("express-validator");
const md5 = require("md5");
const jwt = require("jsonwebtoken");
const { Zona } = require("../database/models");

module.exports = {
  create: async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const { nombre, tipo, id_edificio } = req.body;
      
      const zona = await Zona.create({ nombre, tipo, id_edificio });
      return res.status(200).json({ msg: "Zona creada con éxito" });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  list: async (req, res) => {
    try {
      const zonas = await Zona.findAll();
      return res.status(200).json(zonas);
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const zona = await Zona.findOne({ where: { id } });
      if (!zona) {
        return res.status(404).json({ msg: "Zona no encontrada" });
      }
      await Zona.destroy({ where: { id } });
      return res.status(200).json({ msg: "Zona eliminada con exito" });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  edit: async (req, res) => {
    try {
      const { id } = req.params;
      const { nombre, tipo, id_edificio } = req.body;
      const zona = await Zona.findOne({ where: { id } });
      if (!zona) {
        return res.status(404).json({ msg: "Zona no encontrada" });
      }
      await Zona.update({ nombre, tipo, id_edificio }, { where: { id } });
      return res.status(200).json({ msg: "Zona actualizada con exito" });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  deactivate: async (req, res) => {
    try {
      const { id } = req.params;
      const zona = await Zona.findOne({ where: { id } });
      if (!zona) {
        return res.status(404).json({ msg: "Zona no encontrada" });
      }
      await Zona.update({ activo: false }, { where: { id } });
      return res.status(200).json({ msg: "Zona desactivada con exito" });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  activate: async (req, res) => {
    try {
      const { id } = req.params;
      const zona = await Zona.findOne({ where: { id } });
      if (!zona) {
        return res.status(404).json({ msg: "Zona no encontrada" });
      } 
      await Zona.update({ activo: true }, { where: { id } });
      return res.status(200).json({ msg: "Zona activada con exito" });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  }
};
