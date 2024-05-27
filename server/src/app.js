// importamos express
const express = require('express')
// importamos path
const path = require('path')
// importamos cors
const cors = require('cors')

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

//configuramos cors
app.use(cors())

//habilamos las rutas

// levantamos el servidor
const port = process.env.PORT || 3050;
const  { swaggerDocs } = require('./middlewares/swaggerMiddleware')
swaggerDocs(app, port);
app.listen(port, () => {
    console.log(`Server corriendo en  http://localhost:${port}`)

    swaggerMiddleware.swaggerDocs(app, port);    
})
