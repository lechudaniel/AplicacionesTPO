const db = require("../models");
const Servicios = db.servicios;
const Op = db.Sequelize.Op;

exports.crear = (req, res) => {
    body = req.body;

    if(!body.servicio) {
        res.status(400).send({
            message: "Error en el contenido de la request!"
        });

        return;
    }

    const servicio = {
        servicio: body.servicio,
    }

    Servicios.create(servicio)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrio un error mientras se creaba el servicio."
            });
        });

};

exports.obtener_todos = (req, res) => {
    Servicios.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrio un error mientras se devolvian todos los servicios."
            });
        });
};

exports.obtener_servicio = (req, res) => {
    const id = req.params.id;

    if(!id) {
        res.status(400).send({
            message: "Error en el contenido de la request!"
        });

        return;
    }

    Servicios.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al obtener el servicio de la base de datos!"
            });
        });
};

exports.modificar = (req, res) => {
    const id_servicio = req.params.id;

    Servicios.update(req.body, {
        where: {id_servicio: id_servicio}
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Servicio modificado exitosamente!"
                });
            }
            else {
                res.send({
                    message: "No se pudo modificar el servicio!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al modificar el servicio"
            });
        });
};

exports.borrar = (req, res) => {
    const id_servicio = req.params.id;
    
    Servicios.destroy({
        where: { id_servicio: id_servicio }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "El servicio se borró exitosamente!"
                });
            }
            else {
                res.send({
                    message: "No se pudo borrar el servicio!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "No se pudo borrar el servicio!"
            });
        });
};