module.exports = app => {
    const servicios = require("../controllers/servicio.controller.js");

    var router = require("express").Router();

    router.post("/crear", servicios.crear);

    router.post("/", servicios.obtener_todos);

    router.post("/:id", servicios.obtener_servicio);

    router.post("/modificar/:id", servicios.modificar);

    router.post("/borrar/:id", servicios.borrar);

    app.use('/api/servicios', router);
}