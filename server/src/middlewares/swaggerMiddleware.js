const swaggerUI = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

//Metadata de Swagger
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Building Hub API",
      version: "1.0.0",
    },
  },
  apis: ["./src/routes/*.js"],
};

//documentacion en JSON formato

const swaggerSpec = swaggerJsdoc(options);

//funcion para la documentacion 
const swaggerDocs = (app, port) => {
  app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));
  app.use("/api-docs.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  })

  console.log(`Version 1.0.0 docs http://localhost:${port}/api-docs`);
}

module.exports = {swaggerDocs}
