const { validationResult } = require('express-validator');
const md5 = require('md5');
const jwt = require('jsonwebtoken');
const { Usuario } = require('../database/models');

module.exports = {
    auth: async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const { email, password } = req.body;
            const user = await Usuario.findOne({ where: { email } });
            if (user) {
                if (md5(password) === user.password) {
                    const token = jwt.sign({
                        id: user.id,
                        nombre: user.nombre,
                        apellido: user.apellido,
                        email: user.email,
                        rol: user.rol
                    }, process.env.JWT_SECRET, { expiresIn: '1h' });
                    return res.status(200).json({ token });
                } else {
                    return res.status(401).json({ msg: 'Contraseña incorrecta' });
                }
            } else {
                return res.status(404).json({ msg: 'Usuario no encontrado' });
            }
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    },
    register: async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const { nombre, apellido, dni, email, password, rol, id_apartamento } = req.body;
            const user = await Usuario.findOne({ where: { email } });
            if (user) {
                return res.status(409).json({ msg: 'El usuario ya existe' });
            }
            if (!id_apartamento) {
                const newUser = await Usuario.create({
                    nombre,
                    apellido,
                    dni,
                    email,
                    password: md5(password),
                    rol
                });
                const token = jwt.sign({
                    id: newUser.id,
                    nombre: newUser.nombre,
                    apellido: newUser.apellido,
                    email: newUser.email,
                    rol: newUser.rol
                }, process.env.JWT_SECRET, { expiresIn: '1h' });
                return res.status(201).json({ token });
            } else {
                const newUser = await Usuario.create({
                    nombre,
                    apellido,
                    dni,
                    email,
                    password: md5(password),
                    rol,
                    id_apartamento
                });
                const token = jwt.sign({
                    id: newUser.id,
                    nombre: newUser.nombre,
                    apellido: newUser.apellido,
                    email: newUser.email,
                    rol: newUser.rol
                }, process.env.JWT_SECRET, { expiresIn: '1h' });
                return res.status(201).json({ token });
            }
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    },
}