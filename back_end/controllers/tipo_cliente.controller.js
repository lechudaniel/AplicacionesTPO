const db = require("../models");
const TipoClientes = db.tipo_clientes;
const Op = db.Sequelize.Op;

// Crea un tipo de cliente dentro de la tabla tipo_clientes
exports.crear = (req, res) => {
    body = req.body;

    // Validamos la request
    if(!body.tipo_cliente) {
        res.status(400).send({
            message: "Error en el contenido de la request!"
        });

        return;
    }

    const tipo_cliente = {
        tipo_cliente: body.tipo_cliente,
    }

    // Guardamos el nuevo cliente en la tabla clientes
    TipoClientes.create(tipo_cliente)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrio un error mientras se creaba el tipo de cliente."
            });
        });

};

// Obtiene todos los tipos de clientes
exports.obtener_todos = (req, res) => {
    TipoClientes.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrio un error mientras se devolvian todos los tipos clientes."
            });
        });
};

// Devuelve el tipo de cliente que tenga id_tipo_cliente igual a id
exports.obtener_tipo_cliente = (req, res) => {
    const id = req.params.id;

    if(!id) {
        res.status(400).send({
            message: "Error en el contenido de la request!"
        });

        return;
    }

    TipoClientes.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al obtener el tipo de cliente de la base de datos!"
            });
        });
};

// Modifica el tipo de cliente que tenga id_tipo_cliente igual a id
exports.modificar = (req, res) => {
    const id_tipo_cliente = req.params.id;

    TipoClientes.update(req.body, {
        where: {id_tipo_cliente: id_tipo_cliente}
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "TIpo de cliente modificado exitosamente!"
                });
            }
            else {
                res.send({
                    message: "No se pudo modificar el tipo de cliente!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al modificar el tipo de cliente"
            });
        });
};

// Borra el tipo de cliente que tenga id_tipo_cliente igual a id
exports.borrar = (req, res) => {
    const id_tipo_cliente = req.params.id;

    TipoClientes.destroy({
        where: { id_tipo_cliente: id_tipo_cliente }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "El tipo de cliente se borró exitosamente!"
                });
            }
            else {
                res.send({
                    message: "No se pudo borrar el tipo de cliente!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "No se pudo borrar el tipo de cliente!"
            });
        });
};