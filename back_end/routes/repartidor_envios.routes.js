module.exports = app => {
    const repartidor_envios = require("../controllers/repartidor_envio.controller.js");

    var router = require("express").Router();

    // Crea una nueva asociación entre un repartidor y un envio
    router.post("/crear", repartidor_envios.crear);

    // Devuelve todas las asociaciones entre repartidores y envios
    router.post("/", repartidor_envios.obtener_todos);

    // Devuelve la asociacion cuya id_repartidor_envio sea igual a id
    router.post("/:id", repartidor_envios.obtener_asociacion);
    
    // Borra una asociación que tenga como id_repartidor_envio igual a id
    router.post("/borrar/:id", repartidor_envios.borrar);

    app.use('/api/repartidor_envios', router);
}