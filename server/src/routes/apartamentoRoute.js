const express = require("express");
const router = express.Router();
const { apartamentoController } = require("../controllers");

router.get("/list", apartamentoController.list);
module.exports = router;
