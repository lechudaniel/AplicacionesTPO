module.exports = app => {
    const repartidores = require("../controllers/repartidor.controller.js");

    var router = require("express").Router();

    router.post("/crear", repartidores.crear);

    router.post("/", repartidores.obtener_todos);

    router.post("/:id", repartidores.obtener_repartidor);

    router.post("/modificar/:id", repartidores.modificar);

    router.post("/borrar/:id", repartidores.borrar);

    app.use('/api/repartidores', router);
}