const db = require("../models");
const Facturas = db.facturas;
const Op = db.Sequelize.Op;

// Crea un factura dentro de la tabla facturas
exports.crear = (req, res) => {
    body = req.body;

    // Validamos la request
    if(!body.mes || !body.año || !body.monto || !body.id_cliente) {
        res.status(400).send({
            message: "Error en el contenido de la request!"
        });

        return;
    }

    const factura = {
        mes: body.mes,
        año: body.año,
        monto: body.monto,
        id_cliente: body.id_cliente
    }

    // Guardamos el nuevo factura en la tabla facturas
    Facturas.create(factura)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrio un error mientras se creaba una factura."
            });
        });

};

// Obtiene todas las facturas
exports.obtener_todos = (req, res) => {
    Facturas.findAll({ include: ["cliente"] })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrio un error mientras se devolvian todas las facturas."
            });
        });
};

// Devuelve la factura que tenga id_factura igual a id
exports.obtener_factura = (req, res) => {
    const id = req.params.id;

    if(!id) {
        res.status(400).send({
            message: "Error en el contenido de la request!"
        });

        return;
    }

    Facturas.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al obtener la factura de la base de datos!"
            });
        });
};

// Modifica el factura que tenga id_factura igual a id
exports.modificar = (req, res) => {
    const id_factura = req.params.id;

    Facturas.update(req.body, {
        where: {id_factura: id_factura}
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Factura modificada exitosamente!"
                });
            }
            else {
                res.send({
                    message: "No se pudo modificar la factura!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al modificar la factura"
            });
        });
};

// Borra la factura que tenga id_factura igual a id
exports.borrar = (req, res) => {
    const id_factura = req.params.id;

    Facturas.destroy({
        where: { id_factura: id_factura }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "La factura se borró exitosamente!"
                });
            }
            else {
                res.send({
                    message: "No se pudo borrar la factura!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "No se pudo borrar la factura!"
            });
        });
};