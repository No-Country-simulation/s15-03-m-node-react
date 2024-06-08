// importamos express
const express = require('express')
// importamos path
const path = require('path')

const router = express.Router();

// rutas
const usuarioRoute = require('./routes/usuariosRoute');
const reservasRoute = require('./routes/reservasRoute');
const anuncioRoute = require('./routes/anuncioRoute');
const zonasRoute = require('./routes/zonasRoute');

//creamos una instacia de express
const app = express()

//obtenemos la ruta absoluta del directorio donde estan los archivos estaticos
const publicPath = path.join(__dirname, '../public')
//configuramos express para servir los archivos estaticos
app.use(express.static(publicPath))

//configuracion de la app para capturar datos del formulario
app.use(express.urlencoded({ extended: false }))
app.use(express.json());

//importamos middlewares
const swaggerMiddleware = require('./middlewares/swaggerMiddleware')

//importamos rutas
router.use("/usuarios", usuarioRoute);
router.use("/reservas", reservasRoute);
router.use("/anuncio", anuncioRoute);
router.use("/zonas", zonasRoute);

app.use('/api', router);

//configuramos cors
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

//habilamos las rutas

// levantamos el servidor
const port = process.env.PORT || 3050;
const  { swaggerDocs } = require('./middlewares/swaggerMiddleware')
swaggerDocs(app, port);
app.listen(port, () => {
    console.log(`Server corriendo en  http://localhost:${port}`)

    swaggerMiddleware.swaggerDocs(app, port);    
})
