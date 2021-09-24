module.exports = app => {
    const envios = require("../controllers/envio.controller.js");

    var router = require("express").Router();

    // Crea un nuevo envio
    router.post("/crear", envios.crear);

    // Devuelve todos los envios
    router.post("/", envios.obtener_todos);

    // Devuelve el envio cuyo id_envio sea igual a id
    router.post("/:id", envios.obtener_envio);

    // Modifica el envio que tenga id_envio igual a id
    router.post("/modificar/:id", envios.modificar);

    // Borra un envio que tenga id_envio igual a id
    router.post("/borrar/:id", envios.borrar);

    app.use('/api/envios', router);
}