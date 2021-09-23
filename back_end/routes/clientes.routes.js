module.exports = app => {
    const clientes = require("../controllers/cliente.controller.js");

    var router = require("express").Router();

    // Crea un nuevo cliente
    router.post("/crear", clientes.crear);

    // Devuelve todos los clientes
    router.post("/", clientes.obtener_todos);

    // Devuelve el cliente cuyo id_cliente sea igual a id
    router.post("/:id", clientes.obtener_cliente);

    // Modifica el cliente que tenga id_cliente igual a id
    router.post("/modificar/:id", clientes.modificar);

    // Borra un cliente que tenga id_cliente igual a id
    router.post("/borrar/:id", clientes.borrar);

    app.use('/api/clientes', router);
}