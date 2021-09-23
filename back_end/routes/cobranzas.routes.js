module.exports = app => {
    const cobranzas = require("../controllers/cobranza.controller.js");

    var router = require("express").Router();

    // Crea una nueva cobranza
    router.post("/crear", cobranzas.crear);

    // Devuelve todas las cobranzas
    router.post("/", cobranzas.obtener_todos);

    // Devuelve la cobranza cuyo id_cobranza sea igual a id
    router.post("/:id", cobranzas.obtener_cobranza);

    // Modifica la cobranza que tenga id_cobranza igual a id
    router.post("/modificar/:id", cobranzas.modificar);

    // Borra una cobranza que tenga id_cobranza igual a id
    router.post("/borrar/:id", cobranzas.borrar);

    app.use('/api/cobranzas', router);
}