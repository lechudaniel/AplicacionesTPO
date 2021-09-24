const db = require("../models");
const Envios = db.envios;
const Op = db.Sequelize.Op;

// Crea un envio dentro de la tabla envios
exports.crear = (req, res) => {
    body = req.body;

    // Validamos la request
    if(!body.id_servicio || !body.direccion || !body.cp || !body.id_cliente || !body.ciudad || !body.id_estado || !body.id_repartidor) {
        res.status(400).send({
            message: "Error en el contenido de la request!"
        });

        return;
    }

    const envio = {
        id_servicio: body.id_servicio,
        direccion: body.direccion,
        cp: body.cp,
        id_cliente: body.id_cliente,
        ciudad: body.ciudad,
        id_estado: body.id_estado,
        id_repartidor: body.id_repartidor
    }

    // Guardamos el nuevo envio en la tabla envios
    Envios.create(envio)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrio un error mientras se creaba el envio."
            });
        });

};

// Obtiene todos los envios
exports.obtener_todos = (req, res) => {
    Envios.findAll({ include: ["cliente","servicio","estado","repartidor"] })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrio un error mientras se devolvian todos los envios."
            });
        });
};

// Devuelve el envio que tenga id_envio igual a id
exports.obtener_envio = (req, res) => {
    const id = req.params.id;

    if(!id) {
        res.status(400).send({
            message: "Error en el contenido de la request!"
        });

        return;
    }

    Envios.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al obtener el envio de la base de datos!"
            });
        });
};

// Modifica el envio que tenga id_envio igual a id
exports.modificar = (req, res) => {
    const id_envio = req.params.id;

    Envios.update(req.body, {
        where: {id_envio: id_envio}
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Envio modificado exitosamente!"
                });
            }
            else {
                res.send({
                    message: "No se pudo modificar el envio!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al modificar el envio"
            });
        });
};

// Borra el envio que tenga id_envio igual a id
exports.borrar = (req, res) => {
    const id_envio = req.params.id;

    Envios.destroy({
        where: { id_envio: id_envio }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "El envio se borró exitosamente!"
                });
            }
            else {
                res.send({
                    message: "No se pudo borrar el envio!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "No se pudo borrar el envio!"
            });
        });
};