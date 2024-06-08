// importamos express
const express = require('express')
// importamos path
const path = require('path')

// importamos cors
const cors = require('cors')

const router = express.Router();

// rutas
const usuarioRoute = require('./routes/usuariosRoute');
const reservasRoute = require('./routes/reservasRoute');
const anuncioRoute = require('./routes/anuncioRoute');
const zonasRoute = require('./routes/zonasRoute');

//creamos una instacia de express
const app = express()

//configuracion de la app para capturar datos del formulario
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json({ limit: "50mb" }));

// cors
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Credentials", "true");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});
  
//TODO: Error catching endware.
app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
});

//importamos rutas
router.use("/usuarios", usuarioRoute);
router.use("/reservas", reservasRoute);
router.use("/anuncio", anuncioRoute);
router.use("/zonas", zonasRoute);

app.use('/api', router);

// levantamos el servidor
const port = process.env.PORT || 3050;
app.listen(port, () => {
    console.log(`Server corriendo en  http://localhost:${port}`)
})
