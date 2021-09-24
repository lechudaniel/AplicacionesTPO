module.exports = app => {
    const facturas = require("../controllers/factura.controller.js");

    var router = require("express").Router();

    router.post("/crear", facturas.crear);

    router.post("/", facturas.obtener_todos);

    router.post("/:id", facturas.obtener_factura);

    router.post("/modificar/:id", facturas.modificar);

    router.post("/borrar/:id", facturas.borrar);

    app.use('/api/facturas', router);
}