const { validationResult } = require('express-validator');
const md5 = require('md5');
const jwt = require('jsonwebtoken');
const { Usuario, Residencia, Edificio, Apartamento, Zona } = require('../database/models');
const sendMail = require('../tools/sendMail');

function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

module.exports = {
    login: async (req, res) => {
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
                        telefono: user.telefono,
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
        const zonas = ["Pileta", "Gimnasio", "Parrilla", "SUM", "Cocina", "Comedor", "Lavadero", "Perrera"];
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const { nombre, apellido, dni, cuit, email, telefono, password, rol, direccion, id_apartamento, cantidad_edificios, cant_pisos, cantidad_apartamentos_por_piso } = req.body;
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
                    telefono,
                    password: md5(password),
                    rol: "admin"
                });

                const newResidencia = await Residencia.create({
                    nombre: "Residencia",
                    cuit,
                    direccion,
                    telefono,
                    codigo: makeid(5),
                    validez_codigo: new Date(),
                });
    
                for(let i = 1; i <= cantidad_edificios; i++) {
                    console.log("Edificio " + i);
                    const newEdificio = await Edificio.create({
                        numero: `${i}`,
                        id_residencia: newResidencia.id,
                        cant_pisos
                    });
                    
                    for(let j = 1; j <= cant_pisos; j++) {
                        for (let k = 1; k <= cantidad_apartamentos_por_piso; k++) {
                            const newApartamento = await Apartamento.create({
                                numero: `${k}`,
                                nro_piso: `${j}`,
                                id_edificio: newEdificio.id,
                            });
                        }
                    }

                    for(let j = 1; j <= 8; j++) {
                        const newZona = await Zona.create({
                            id_edificio: newEdificio.id,
                            nombre: `Zona ${j}`,
                            tipo: zonas[j-1],
                            activo: false,
                        });
                    }
                }

                const mail = sendMail(email, newResidencia.codigo);
                if(mail) {
                    const token = jwt.sign({
                        id: newUser.id,
                        nombre: newUser.nombre,
                        apellido: newUser.apellido,
                        email: newUser.email,
                        telefono: newUser.telefono,
                        rol: newUser.rol
                    }, process.env.JWT_SECRET, { expiresIn: '1h' });

                    return res.status(201).json({ token });
                }
            } else {
                const newUser = await Usuario.create({
                    nombre,
                    apellido,
                    dni,
                    email,
                    telefono,
                    password: md5(password),
                    id_apartamento
                });
                const token = jwt.sign({
                    id: newUser.id,
                    nombre: newUser.nombre,
                    apellido: newUser.apellido,
                    email: newUser.email,
                    telefono: newUser.telefono,
                    rol: newUser.rol
                }, process.env.JWT_SECRET, { expiresIn: '1h' });
                return res.status(201).json({ token });
            }
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    },
    list: async (req, res) => {
        try {
            const users = await Usuario.findAll();
            return res.status(200).json(users);
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    },
    deactivate: async (req, res) => {
        try {
            const { id } = req.params;
            const user = await Usuario.findOne({ where: { id } });
            if (!user) {
                return res.status(404).json({ msg: 'Usuario no encontrado' });
            }
            user.activo = false;
            await user.save();
            return res.status(200).json({ msg: 'Usuario desactivado con exito' });
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    
    },
    uploadPicture: async (req, res) => {
        try {
            const { id_usuario, filePath } = req.body;
            
            const user = await Usuario.findOne({ where: { id: id_usuario } });
            
            if (!user) {
                return res.status(404).json({ msg: 'Usuario no encontrado' });
            }
            user.imagen = filePath;
            await user.save();

            const token = jwt.sign({
                id: user.id,
                nombre: user.nombre,
                apellido: user.apellido,
                email: user.email,
                telefono: user.telefono,
                rol: user.rol,
                imagen: user.imagen
            }, process.env.JWT_SECRET, { expiresIn: '1h' });
            return res.status(201).json({ token });
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    },
    activate: async (req, res) => {
        try {
            const { id } = req.params;
            const user = await Usuario.findOne({ where: { id } });
            if (!user) {
                return res.status(404).json({ msg: 'Usuario no encontrado' });
            }
            user.activo = true;
            await user.save();
            return res.status(200).json({ msg: 'Usuario activado con exito' });
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    },
    approve: async(req, res) => {
        try {
            const { id } = req.params;
            const user = await Usuario.findOne({ where: { id } });
            if (!user) {
                return res.status(404).json({ msg: 'Usuario no encontrado' });
            }
            user.estado = 'aprobado';
            await user.save();
            return res.status(200).json({ msg: 'Usuario aprobado con exito' });
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    },
    disapprove: async(req, res) => {
        try {
            const { id } = req.params;
            const user = await Usuario.findOne({ where: { id } });
            if (!user) {
                return res.status(404).json({ msg: 'Usuario no encontrado' });
            }
            user.estado = 'rechazado';
            await user.save();
            return res.status(200).json({ msg: 'Usuario rechazado con exito' });
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    },
    info: async(req, res) => {
        try {
            const { id } = req.params;
            const user = await Usuario.findOne({ where: { id } });
            if (!user) {
                return res.status(404).json({ msg: 'Usuario no encontrado' });
            }
            return res.status(200).json(user);
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    },
    edit: async(req, res) => {
        try {
            const { id } = req.params;
            const user = await Usuario.findOne({ where: { id } });
            if (!user) {
                return res.status(404).json({ msg: 'Usuario no encontrado' });
            }
            const { nombre, apellido, dni, email, telefono } = req.body;
            user.nombre = nombre;
            user.apellido = apellido;
            user.dni = dni;
            user.email = email;
            user.telefono = telefono;
            await user.save();
            return res.status(200).json({ msg: 'Usuario editado con exito' });  
        }catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    }
   
}
