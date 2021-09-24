module.exports = app => {
    const tipo_clientes = require("../controllers/tipo_cliente.controller.js");

    var router = require("express").Router();

    // Crea un nuevo tipo de cliente
    router.post("/crear", tipo_clientes.crear);

    // Devuelve todos los tipos de clientes
    router.post("/", tipo_clientes.obtener_todos);

    // Devuelve el tipo de cliente cuyo id_tipo_cliente sea igual a id
    router.post("/:id", tipo_clientes.obtener_tipo_cliente);

    // Modifica el tipo de cliente que tenga id_tipo_cliente igual a id
    router.post("/modificar/:id", tipo_clientes.modificar);

    // Borra un tipo de cliente que tenga id_tipo_cliente igual a id
    router.post("/borrar/:id", tipo_clientes.borrar);

    app.use('/api/tipo_clientes', router);
}