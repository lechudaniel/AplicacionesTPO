const db = require("../models");
const Cobranzas = db.cobranzas;
const Op = db.Sequelize.Op;

// Crea un cobranza dentro de la tabla cobranzas
exports.crear = (req, res) => {
    body = req.body;

    // Validamos la request
    if(!body.monto || !body.fecha_emision || !body.id_cliente || !body.forma_de_pago) {
        res.status(400).send({
            message: "Error en el contenido de la request!"
        });

        return;
    }

    const cobranza = {
        monto: body.monto,
        fecha_emision: body.fecha_emision,
        id_cliente: body.id_cliente,
        forma_de_pago: body.forma_de_pago
    }

    // Guardamos el nuevo cobranza en la tabla cobranzas
    Cobranzas.create(cobranza)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrio un error mientras se creaba el cobranza."
            });
        });

};

// Obtiene todas los cobranzas
exports.obtener_todos = (req, res) => {
    Cobranzas.findAll({ include: ["cliente"] })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrio un error mientras se devolvian todos los cobranzas."
            });
        });
};

// Devuelve el cobranza que tenga id_cobranza igual a id
exports.obtener_cobranza = (req, res) => {
    const id = req.params.id;

    if(!id) {
        res.status(400).send({
            message: "Error en el contenido de la request!"
        });

        return;
    }

    Cobranzas.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al obtener el cobranza de la base de datos!"
            });
        });
};

// Modifica el cobranza que tenga id_cobranza igual a id
exports.modificar = (req, res) => {
    const id_cobranza = req.params.id;

    Cobranzas.update(req.body, {
        where: {id_cobranza: id_cobranza}
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Cobranza modificada exitosamente!"
                });
            }
            else {
                res.send({
                    message: "No se pudo modificar la cobranza!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al modificar la cobranza"
            });
        });
};

// Borra el cobranza que tenga id_cobranza igual a id
exports.borrar = (req, res) => {
    const id_cobranza = req.params.id;

    Cobranzas.destroy({
        where: { id_cobranza: id_cobranza }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "El cobranza se borró exitosamente!"
                });
            }
            else {
                res.send({
                    message: "No se pudo borrar el cobranza!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "No se pudo borrar el cobranza!"
            });
        });
};