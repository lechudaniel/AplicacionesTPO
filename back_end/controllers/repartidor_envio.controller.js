const db = require("../models");
const RepartidorEnvios = db.repartidor_envios;
const Op = db.Sequelize.Op;

exports.crear = (req, res) => {
    body = req.body;

    // Validamos la request
    if(!body.id_envio || !body.id_repartidor) {
        res.status(400).send({
            message: "Error en el contenido de la request!"
        });

        return;
    }

    const repartidor_envio = {
        id_envio: body.id_envio,
        id_repartidor: body.id_repartidor
    }

    RepartidorEnvios.create(repartidor_envio)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrio un error mientras se creaba la asociación entre el repartidor y el envio."
            });
        });

};

exports.obtener_todos = (req, res) => {
    RepartidorEnvios.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrio un error mientras se devolvian todas las asociaciones entre envios y repartidores."
            });
        });
};

exports.obtener_asociacion = (req, res) => {
    const id = req.params.id;

    if(!id) {
        res.status(400).send({
            message: "Error en el contenido de la request!"
        });

        return;
    }

    RepartidorEnvios.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al obtener la asociacion entre repartidor y envio de la base de datos!"
            });
        });
};

exports.borrar = (req, res) => {
    const id_repartidor_envio = req.params.id;

    RepartidorEnvios.destroy({
        where: { id_repartidor_envio: id_repartidor_envio }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "La asociación se borró exitosamente!"
                });
            }
            else {
                res.send({
                    message: "No se pudo borrar la asociación!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "No se pudo borrar la asociación!"
            });
        });
};