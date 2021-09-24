const db = require("../models");
const Clientes = db.clientes;
const Op = db.Sequelize.Op;

// Crea un cliente dentro de la tabla clientes
exports.crear = (req, res) => {
    body = req.body;

    // Validamos la request
    if(!body.nombre || !body.apellido || !body.mail || !body.telefono || !body.ciudad || !body.id_tipo_cliente || !body.pais || !body.provincia || !body.cp) {
        res.status(400).send({
            message: "Error en el contenido de la request!"
        });

        return;
    }

    const cliente = {
        nombre: body.nombre,
        apellido: body.apellido,
        mail: body.mail,
        telefono: body.telefono,
        pais: body.pais,
        provincia: body.provincia,
        ciudad: body.ciudad,
        id_tipo_cliente: body.id_tipo_cliente,
        cp: body.cp
    }

    // Guardamos el nuevo cliente en la tabla clientes
    Clientes.create(cliente)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrio un error mientras se creaba el cliente."
            });
        });

};

// Obtiene todos los clientes
exports.obtener_todos = (req, res) => {
    Clientes.findAll({ include: ["tipo"] })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrio un error mientras se devolvian todos los clientes."
            });
        });
};

// Devuelve el cliente que tenga id_cliente igual a id
exports.obtener_cliente = (req, res) => {
    const id = req.params.id;

    if(!id) {
        res.status(400).send({
            message: "Error en el contenido de la request!"
        });

        return;
    }

    Clientes.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al obtener el cliente de la base de datos!"
            });
        });
};

// Modifica el cliente que tenga id_cliente igual a id
exports.modificar = (req, res) => {
    const id_cliente = req.params.id;

    Clientes.update(req.body, {
        where: {id_cliente: id_cliente}
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Cliente modificado exitosamente!"
                });
            }
            else {
                res.send({
                    message: "No se pudo modificar el cliente!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al modificar el cliente"
            });
        });
};

// Borra el cliente que tenga id_cliente igual a id
exports.borrar = (req, res) => {
    const id_cliente = req.params.id;

    Clientes.destroy({
        where: { id_cliente: id_cliente }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "El cliente se borró exitosamente!"
                });
            }
            else {
                res.send({
                    message: "No se pudo borrar el cliente!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "No se pudo borrar el cliente!"
            });
        });
};