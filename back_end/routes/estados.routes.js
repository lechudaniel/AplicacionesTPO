module.exports = app => {
    const estados = require("../controllers/estado.controller.js");

    var router = require("express").Router();

    router.post("/crear", estados.crear);

    router.post("/", estados.obtener_todos);

    router.post("/:id", estados.obtener_estado);

    router.post("/modificar/:id", estados.modificar);

    router.post("/borrar/:id", estados.borrar);

    app.use('/api/estados', router);
}